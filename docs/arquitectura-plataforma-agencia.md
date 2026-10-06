# Decisión de arquitectura: sitios de clientes + administrador web + panel de monitoreo de agencia

> Fecha: 2026-10-06
> Insumos: informe "Arquitecturas Web para la Optimización en Motores de Búsqueda y
> Rendimiento en 2026: Ingeniería a Nivel de Código" (PDF, 15 págs., 63 fuentes),
> `docs/benchmark-bigseo-seo-geo-diseno-2026.md`, `docs/analisis-sitio-actual.md`.
> Estado: **PROPUESTA**. Las decisiones abiertas están en §9.

---

## 0. Decisión en una frase

**Separar en dos mundos con un solo repositorio:** los sitios públicos (el de DKODING y
los de cada cliente) se construyen con **Astro** y se sirven desde **Cloudflare**, tal
como recomienda el informe; el administrador de contenidos y el panel de monitoreo
multi-cliente se construyen sobre **Payload CMS 3 (Next.js + PostgreSQL)** con su
plugin oficial multi-tenant, que es justo el tipo de aplicación autenticada e
interactiva para la que el propio informe reserva Next.js. Los dos mundos se conectan
por API y webhooks.

---

## 1. Lectura crítica del informe

### 1.1 Qué acepto tal cual

- **Astro como base de los sitios públicos.** Islas, cero JS por defecto, 48 % de
  aprobación móvil de Core Web Vitals frente a 29 % de Next.js y 25 % de Nuxt (datos
  CrUX cruzados con HTTP Archive). Coincide con mi benchmark de bigseo: la agencia
  líder va en WordPress con 4,2 MB de JS, y ese es el flanco a explotar.
- **HTML de "Nivel 1" para bots de IA.** GPTBot, ClaudeBot y PerplexityBot no ejecutan
  JavaScript. Si el contenido viaja como JSON de hidratación o se pide a una API desde
  el cliente, para las IA no existe. Esto descarta cualquier SPA para páginas de dinero.
- **JSON-LD tipado con `schema-dts` + TypeScript**, generado en servidor en build. Un
  error de schema rompe la compilación en vez de fallar en silencio en Search Console.
- **Open Graph dinámico con Satori** en el borde. bigseo usa su favicon como `og:image`;
  es un error barato de evitar.
- **Presupuesto de rastreo:** URLs canónicas limpias, nada de parámetros facetados
  indexables, 404/410 reales, cadenas de redirección de un solo salto, TTFB < 200 ms.
- **Cloudflare Pages/Workers para lo estático** por TTFB, ancho de banda sin coste y
  arranque en frío de ~0 ms con V8 Isolates.

### 1.2 Qué matizo

| Afirmación del informe | Matiz |
|---|---|
| Los CWV pasaron de desempate a "filtro primario de calidad" | Google sigue tratándolos como señal menor (~1–3 % del peso). Importan muchísimo para conversión y para INP en móviles LATAM de gama media, pero no esperes saltos de ranking solo por velocidad. |
| "LCP < 0,4 s recibe hasta 3× más citas en IA" | La cita (fuente 20, un blog de proveedor) no es un estudio controlado. Hay correlación velocidad↔citas, pero el 3× no es un dato en el que apoyar decisiones. |
| Bloquear a GPTBot, ClaudeBot y Google-Extended (bots de entrenamiento) | Es una decisión de negocio, no técnica. bigseo hace lo contrario: permite entrenamiento con atribución en su `llms.txt`. Para una agencia que quiere ser recomendada por IA, bloquear entrenamiento resta. Recomiendo **permitir todo** salvo scrapers abusivos, con `Crawl-delay` para los de entrenamiento. |
| Vercel "potencialmente prohibitivo" por tráfico | Cierto a escala de millones de visitas. Para una agencia con decenas de sitios de pymes, el coste de Vercel es marginal. El criterio real es dónde corre mejor Next.js + Payload, no el ancho de banda. |
| Astro es "la cúspide indiscutible" | Para contenido, sí. El informe mismo clasifica paneles, SaaS y portales con autenticación como territorio de Next.js/SvelteKit. Tu caso tiene las dos cosas. |

### 1.3 Qué falta en el informe (y es justo tu pregunta)

El PDF es un informe de **sitio público**. No dice una palabra sobre:

- Autenticación, roles, multi-tenencia.
- Base de datos, modelo de contenido, flujo editorial (borrador → revisión → publicar).
- Cómo un cliente no técnico edita su web sin tocar código.
- Cómo se dispara un rebuild estático cuando alguien edita contenido.
- Formularios, leads, notificaciones, CRM.
- Monitoreo: de dónde salen los datos de CWV, SEO, GEO, uptime; dónde se guardan; cómo se muestran por cliente.
- Imágenes subidas por usuarios, almacenamiento, CDN de medios.

Todo lo anterior es la mitad del problema. La sección siguiente lo resuelve.

---

## 2. El problema real: dos cargas de trabajo opuestas

| | Sitios públicos (DKODING + N clientes) | Administrador + panel de agencia |
|---|---|---|
| Usuarios | Anónimos, Google, bots de IA | Autenticados: agencia (admin), cliente (editor/lector) |
| Prioridad | LCP, INP, HTML completo, schema, 0 JS | Interactividad, tablas, gráficos, formularios complejos |
| Cambios | Pocas veces al día | Continuos |
| SEO | Crítico | Irrelevante (`noindex`) |
| Datos | Lectura en build o en borde | Lectura/escritura en base de datos |
| Riesgo si se mezcla | Se cuela JS pesado en páginas de dinero | Se complica el panel para "no romper el SEO" |

Forzar un solo framework obliga a sacrificar un lado. La arquitectura correcta es
**dos aplicaciones, un monorepo, un contrato de API**.

---

## 3. Arquitectura recomendada

```
┌──────────────────────────────── MONOREPO (pnpm + Turborepo) ────────────────────────────────┐
│                                                                                              │
│  apps/                                                                                       │
│  ├─ core/            Payload CMS 3 sobre Next.js  ──► PostgreSQL (Neon / Supabase / VPS)     │
│  │                    • Admin UI (agencia + clientes, multi-tenant)                          │
│  │                    • Colecciones: tenants, pages, services, cases, posts, media,           │
│  │                      leads, forms, redirects, seo, monitoring_*                           │
│  │                    • REST + GraphQL + Local API automáticos                               │
│  │                    • Vistas custom de panel: /admin/monitor (CWV, SEO, GEO, uptime, leads) │
│  │                    • Hooks afterChange → deploy hook de Cloudflare del tenant             │
│  │                    • Endpoints: /api/forms/submit, /api/og (Satori), /api/revalidate      │
│  │                                                                                           │
│  ├─ site-dkoding/    Astro 6 (SSG + islas) ─► Cloudflare Pages/Workers                       │
│  ├─ site-cliente-a/  Astro 6 (misma plantilla, otro tenant) ─► Cloudflare                    │
│  └─ site-cliente-n/  …                                                                       │
│                                                                                              │
│  packages/                                                                                   │
│  ├─ site-kit/        Design system (Tailwind v4 tokens), layouts SEO, componentes Astro,     │
│  │                    helpers schema-dts, OG Satori, GSAP/Lenis como islas, i18n, sitemap     │
│  ├─ payload-types/   Tipos generados por Payload, compartidos con los sitios                 │
│  ├─ monitoring/      Clientes de CrUX API, PSI, Search Console, GA4, uptime, GEO-prompts     │
│  └─ config/          ESLint, TS, Prettier, presupuestos Lighthouse CI                        │
│                                                                                              │
│  workers/                                                                                    │
│  └─ monitor-cron/    Cloudflare Worker con Cron Triggers (o GitHub Actions scheduled)        │
│                       Recolecta métricas por tenant → escribe en Postgres vía Payload API    │
└──────────────────────────────────────────────────────────────────────────────────────────────┘

Flujo de publicación:  editor guarda en Payload → hook afterChange → POST deploy hook
                       Cloudflare del tenant → Astro rebuild (fetch Payload REST) → CDN.
                       Latencia típica 1–3 min. Para "ver antes de publicar": preview
                       con Astro SSR en ruta /preview protegida, leyendo borradores.

Flujo de leads:        formulario (isla Astro) → POST core/api/forms/submit (Turnstile)
                       → colección leads (tenant) → email + WhatsApp (Twilio/Meta API)
                       → visible en el panel del cliente y de la agencia.

Flujo de monitoreo:    cron cada 6–24 h por tenant → CrUX API (campo) + PSI (lab, 1/día)
                       + Search Console (clics, impresiones, posición) + GA4 Data API
                       + ping uptime cada 5 min + 30 prompts GEO/mes por tenant
                       → tablas monitoring_* → vistas /admin/monitor con gráficos y alertas.
```

### 3.1 Por qué Payload CMS 3 como núcleo

- **Corre dentro de Next.js**, así que el administrador, el panel y la API son una sola
  aplicación con un solo despliegue. Encaja en lo que el informe llama "SaaS interactivo".
- **Plugin oficial `@payloadcms/plugin-multi-tenant`**: cada cliente ve solo sus
  documentos; la agencia ve todo. Resuelve tu "varios clientes" sin construir
  multi-tenencia a mano.
- **Plugins oficiales que ya necesitas**: SEO (title/description/OG por documento),
  form builder, redirects, nested docs, search, Sentry.
- **TypeScript nativo**: genera tipos de todas las colecciones; los sitios Astro los
  importan desde `packages/payload-types`. Encadena con la "ontología tipada" del informe.
- **Base de datos propia (PostgreSQL)**: los datos son tuyos, en tu Postgres. Si mañana
  quitas Payload, la base queda.
- **Open source MIT, sin coste por asiento ni por documento**. Con 20 clientes y 40
  editores, Sanity o Contentful empiezan a cobrar; Payload no.
- **Admin personalizable con React**: las vistas de monitoreo se montan como vistas
  custom del admin, con el mismo login y los mismos permisos por tenant.

### 3.2 Por qué Astro para cada sitio y no un Astro multi-tenant

Un solo Astro que sirva N dominios desde una base de datos es posible con SSR, pero
pierde lo que el informe defiende: HTML prerenderizado, caché total en CDN, cero
dependencia de base de datos en tiempo de petición. Con **un proyecto Astro por
cliente** que comparte `packages/site-kit`:

- Cada sitio es estático puro con su dominio, su deploy hook y su caché.
- Si Payload se cae, los sitios siguen arriba.
- Puedes personalizar un cliente sin tocar a los demás.
- El coste de "un proyecto más" en Cloudflare Pages es cero.

Lo dinámico (formularios, buscador, calculadora) va en islas que llaman a `core`.

### 3.3 Por qué Cloudflare para sitios y Vercel (o VPS) para el núcleo

| Pieza | Dónde | Motivo |
|---|---|---|
| Sitios Astro | **Cloudflare Pages/Workers** | TTFB mínimo en LATAM, ancho de banda gratis, 500 builds/mes gratis, Turnstile, R2 para medios |
| Payload + Next.js | **Vercel** (arranque rápido) o **VPS con Docker/Coolify** (Hostinger, Hetzner) | Payload necesita Node y conexión persistente a Postgres; en Vercel funciona con Neon; en VPS cuesta ~10–20 USD/mes fijo y escala sin sorpresas |
| PostgreSQL | **Neon** (serverless, rama por entorno) o **Supabase** | Gratis para empezar; Supabase añade auth/storage si se quiere |
| Medios | **Cloudflare R2** (compatible S3) con adaptador de Payload | Sin coste de egreso |
| Cron de monitoreo | **Cloudflare Worker Cron** o **GitHub Actions scheduled** | Gratis, sin servidor |
| Errores | Sentry (plugin oficial) | |

Decisión por defecto: **Vercel para `core` en fase 1** por velocidad de arranque, con
Dockerfile listo para migrar a VPS cuando el coste o el control lo justifiquen.

---

## 4. Modelo de datos (colecciones Payload)

```
tenants        slug, nombre, dominio, deployHookUrl, cfProjectId, plan, contactos, colores
users          email, rol (agency_admin | agency_member | client_admin | client_editor | client_viewer), tenants[]
pages          tenant, slug, título, bloques (hero, servicios, casos, FAQ, CTA…), seo{}, estado
services       tenant, slug, nombre, resumen BLUF, incluye[], proceso[], precioDesde, faq[], casos[]
cases          tenant, cliente, cifraHero, reto, solución[], resultados[], testimonio{}, seo{}
posts          tenant, autor (Person), cuerpo, fuentes[], actualizadoEl
media          tenant, alt obligatorio, ancho/alto, variantes AVIF/WebP (R2)
forms          tenant, campos[], destino (email, WhatsApp, webhook)
leads          tenant, form, payload, utm, estado (nuevo/contactado/ganado/perdido), valor
redirects      tenant, from, to, código
monitoring_cwv       tenant, fecha, origen/URL, lcp_p75, inp_p75, cls_p75, fuente (crux|psi)
monitoring_seo       tenant, fecha, clics, impresiones, ctr, posición, top_queries[]
monitoring_uptime    tenant, ts, status, latencia_ms
monitoring_geo       tenant, fecha, motor, prompt, aparece, posición, url_citada
alerts               tenant, tipo, umbral, canal (email/WhatsApp/Slack), activa
```

Reglas: `tenant` es obligatorio en todo salvo `tenants` y `users`; el plugin
multi-tenant lo inyecta y filtra automáticamente. `alt` obligatorio en `media` (SEO y
accesibilidad). `seo{}` viene del plugin oficial y se renderiza en `site-kit`.

---

## 5. Módulo de monitoreo

| Dato | Fuente | Frecuencia | Coste / cuota |
|---|---|---|---|
| CWV de campo (lo que rankea) | **CrUX API** | diaria | Gratis, 150 req/min, sin tope diario |
| CWV de laboratorio + diagnóstico | **PageSpeed Insights API** | 1 vez/día por URL clave | 25.000/día con API key (ojo: hoy agoté la cuota anónima) |
| Clics, impresiones, posición, queries | **Search Console API** | diaria | Gratis; requiere que el cliente te dé acceso a su propiedad |
| Sesiones, conversiones, canal "AI referrals" | **GA4 Data API** | diaria | Gratis con límites generosos |
| Uptime y latencia | ping HTTP desde Worker | cada 5 min | Gratis |
| Visibilidad GEO | 30 prompts × 4 motores (ChatGPT, Perplexity, Gemini, Claude) vía API o herramienta (Peec, Otterly, LLMrefs) | mensual | Según herramienta; con APIs propias ~5–15 USD/mes por tenant |
| Lighthouse en CI | **Lighthouse CI** en cada PR de un sitio | por push | Gratis; bloquea el merge si baja del presupuesto |
| Errores JS | Sentry | continuo | Gratis hasta 5k eventos |

Panel (`/admin/monitor`): tarjetas por tenant con semáforo CWV p75, sparkline 90 días,
clics SC, leads del mes, uptime %, visibilidad GEO; vista detalle por tenant; alertas
cuando INP > 200 ms, uptime < 99,5 %, caída de clics > 30 % semana a semana, o lead sin
contactar > 24 h. El cliente ve solo su tenant, con un informe mensual PDF generado
desde los mismos datos (esto reemplaza el "reporte" manual de agencia).

---

## 6. Guardarraíles heredados del informe y del benchmark

- Presupuestos por sitio: JS inicial < 150 KB gz, LCP < 1,8 s, INP < 150 ms, CLS < 0,05,
  Lighthouse móvil ≥ 90. Lighthouse CI los aplica en cada PR.
- Todo texto de dinero en el HTML inicial (Nivel 1). Islas solo para interacción.
- `schema-dts` en `site-kit`: `Organization`/`LocalBusiness`, `Service`+`Offer`,
  `FAQPage`, `Article`+`Person`, `BreadcrumbList`. Falla el build si falta un campo.
- OG dinámico por página con Satori en un endpoint de `core` o un Worker.
- `robots.txt` por tenant generado desde Payload: permitir Googlebot, Bingbot, GPTBot,
  OAI-SearchBot, ClaudeBot, Claude-SearchBot, PerplexityBot, Google-Extended; `Crawl-delay`
  a los de entrenamiento; bloquear scrapers conocidos. `llms.txt` generado desde las
  colecciones.
- Redirecciones 301 gestionadas en Payload (`redirects`) y emitidas como `_redirects`
  de Cloudflare en build: un salto, nunca cadenas.
- `prefers-reduced-motion` respetado en cada efecto del design system.

---

## 7. Alternativas evaluadas y por qué no

| Alternativa | Cuándo tendría sentido | Por qué no ahora |
|---|---|---|
| **WordPress multisite + WPGraphQL + Astro** | Si el equipo solo sabe WordPress y quiere migrar gradualmente | Arrastra el problema de plugins y seguridad; el admin sigue siendo WP; multisite es frágil |
| **Sanity + Astro + dashboard aparte en Next.js** | Si quieres cero operaciones de base de datos y edición colaborativa en tiempo real | Coste por asiento/documento con N clientes; dos aplicaciones autenticadas en vez de una; datos en el Content Lake de Sanity, no tuyos |
| **Directus + Astro + dashboard aparte** | Si ya tienes un Postgres con datos y quieres un admin encima | Admin menos moldeable que Payload; de nuevo dos apps autenticadas |
| **Strapi** | Equipo con experiencia Strapi | Admin menos extensible; multi-tenant no oficial; v5 menos integrado con el framework del front |
| **Un solo Next.js para todo (sitios + admin)** | Equipo 100 % React que no quiere aprender Astro | Impuesto de hidratación en páginas de dinero; es justo lo que el informe desaconseja |
| **Astro SSR multi-tenant desde una BD** | Cientos de tenants con cambios por minuto | Pierdes caché total y dependes de la BD en cada petición |
| **Comprar el panel** (SE Ranking agencia, AgencyAnalytics, Looker Studio) | Si el monitoreo no es diferencial y quieres salir en 2 semanas | 50–300 USD/mes y sin integración con leads/CMS; pero es una opción válida para la fase 1 mientras se construye lo propio |
| **SvelteKit para el panel** | Equipo Svelte | El panel debe vivir en el mismo login que el admin; Payload es React |

---

## 8. Costes estimados (fase 1, hasta ~10 clientes)

| Pieza | USD/mes |
|---|---|
| Cloudflare Pages/Workers/R2/Turnstile | 0–5 |
| Vercel Pro (si `core` va en Vercel) | 20 |
| Neon Postgres | 0–19 |
| Sentry | 0 |
| APIs Google (CrUX, PSI, SC, GA4) | 0 |
| APIs LLM para GEO (opcional) | 5–15 por tenant |
| Dominios de clientes | a cargo del cliente |
| **Total plataforma** | **~25–60** |

Alternativa VPS: Hetzner/Hostinger 4 vCPU ~15–20 USD/mes con Coolify corriendo Payload
+ Postgres, y Cloudflare delante. Más barato a partir de ~15 clientes, más operación.

---

## 9. Decisiones que debes tomar tú

1. **¿Quién edita?** Si los clientes editan su propio contenido, el admin multi-tenant
   es imprescindible (Payload). Si solo edita la agencia, podrías empezar con contenido
   en Markdown dentro del repo y añadir Payload en fase 2. Asumo que **sí editan**.
2. **¿Stack del equipo?** Esta propuesta exige TypeScript, React (admin) y Astro
   (sitios). Si el equipo es WordPress puro, el plan necesita 2–3 meses de curva. Asumo
   equipo con JavaScript moderno o disposición a aprenderlo.
3. **¿Construir o comprar el panel en fase 1?** Recomiendo **comprar/usar Looker Studio
   los primeros 2 meses** y construir el panel propio en fase 3, cuando el CMS esté
   estable. El panel propio es diferencial de venta ("tu web con monitoreo incluido"),
   pero no bloquea el lanzamiento.
4. **¿Permitir entrenamiento de IA?** Recomiendo sí, con atribución, como bigseo. Es
   tu decisión de negocio.
5. **¿Vercel o VPS para el núcleo?** Vercel para arrancar; VPS si pasas de ~15 clientes
   o quieres factura fija. El Dockerfile se deja listo desde el día uno.
6. **¿Precios públicos en los sitios de clientes y en el tuyo?** Afecta al bloque
   `Service.offers`. Ya detectado en `docs/analisis-sitio-actual.md`.

---

## 10. Roadmap

| Fase | Semanas | Entregable |
|---|---|---|
| 0. Fundaciones | 1–2 | Monorepo, `site-kit` (tokens, layouts SEO, schema-dts, OG Satori), Lighthouse CI, Cloudflare + Neon + Vercel configurados |
| 1. Núcleo | 3–5 | Payload con multi-tenant, colecciones de §4, plugin SEO, redirects, forms, R2, deploy hooks, preview |
| 2. Sitio DKODING | 5–8 | Astro sobre `site-kit` leyendo Payload: home, servicios, casos, recursos, precios, 301 desde dkoding.net. Gates de §6 en verde |
| 3. Monitoreo v1 | 8–10 | Worker cron: CrUX + uptime + leads → tablas → vista `/admin/monitor` con semáforos y alertas |
| 4. Primer cliente | 10–12 | `site-cliente-a` desde la plantilla; el cliente edita en su tenant; informe mensual automático |
| 5. Monitoreo v2 | 12–16 | Search Console, GA4, GEO prompts, PDF mensual, portal del cliente |

Cada fase termina con algo en producción. El sitio de DKODING (fase 2) es la prueba
de concepto comercial: debe cumplir el benchmark frente a bigseo antes de vender la
plataforma a clientes.

---

## 11. Fuentes adicionales a las del informe

- Payload 3 dentro de Next.js, plugins oficiales (multi-tenant, SEO, form builder, redirects):
  https://www.buildwithmatija.com/blog/best-headless-cms-nextjs-payload-2026 ·
  https://www.thefrontendcompany.com/posts/payload-cms-guide
- Adaptador Cloudflare para Astro 6 (SSR bajo demanda, server islands, actions, sessions):
  https://docs.astro.build/en/guides/integrations-guide/cloudflare/
- CrUX API (150 req/min, sin tope diario) vs PSI API (25.000/día):
  https://unlighthouse.dev/learn-lighthouse/pagespeed-insights-api/rate-limits ·
  https://developer.chrome.com/docs/crux/guides/crux-api
- Comparativa CMS headless 2026 (Sanity, Strapi, Payload, Directus):
  https://directus.com/resources/best-headless-cms-in-2026 ·
  https://costbench.com/compare/payload-cms-vs-strapi/ ·
  https://www.cosmicjs.com/blog/sanity-vs-strapi
