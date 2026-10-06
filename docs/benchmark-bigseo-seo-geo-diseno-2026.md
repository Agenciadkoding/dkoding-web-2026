# Benchmark: bigseo.com + mejores prácticas SEO / GEO / diseño 2026

> Fecha: 2026-10-06
> Objetivo: extraer de la agencia mejor posicionada de España qué hace bien, qué no,
> y cruzarlo con el estado del arte 2026 en SEO, GEO (Generative Engine Optimization)
> y librerías de diseño/efectos, para definir el blueprint del nuevo sitio DKODING.
> Método: descarga directa del HTML, análisis de schema/headings/stack, medición con
> Chromium móvil (390px), lectura de robots/sitemaps/llms.txt, capturas en `docs/img/`,
> y búsqueda de fuentes 2026 (listadas al final). PageSpeed Insights devolvió 429
> (cuota agotada), así que los datos de rendimiento son de laboratorio propio, no CrUX.

---

## 0. Resumen ejecutivo

**bigseo.com gana por SEO y prueba social, no por diseño.** Es un WordPress con
Elementor, estética conservadora (blanco, Montserrat, azul eléctrico) y un peso de
página móvil de ~5,7 MB con 90 peticiones. Lo que la pone arriba es:

1. **Arquitectura de URLs en silos** (`/agencia-seo/barcelona/`, `/agencia-seo/local/`,
   `/agencia-seo/ia-chatgpt/`…) que cubre cada intención comercial con una página.
2. **Prueba masiva y cuantificada**: 23 casos de éxito con cifras, 4 testimonios con
   nombre/cargo/foto, logos de Shopify/Danone/Glovo/Typeform, badges Google Premier
   Partner y Meta Business Partner, 4,5/5 en Google.
3. **Hub de recursos tipo "guías pilar"** (`/recursos/seo/`, `/recursos/ia/`…) más un
   blog de 44 posts que están **refrescando en masa** (lastmod sep–oct 2026).
4. **Apuesta temprana por GEO**: servicio "SEO en LLMs", guía "SEO para IA",
   `llms.txt` curado de 10 KB, página de "ChatGPT Ads", fundador como entidad
   (Romuald Fons, Forbes).
5. **Un único CTA repetido** ("Reserva tu Consultoría Gratuita") y un funnel lineal.

**Para DKODING la oportunidad es clara:** copiar la arquitectura, el sistema de prueba
y la capa GEO, pero construirlo con un stack moderno (Astro o Next.js + GSAP + Lenis +
Three.js selectivo) que entregue *tanto* impacto visual *como* Core Web Vitals en verde,
que es justo la combinación que bigseo no tiene.

---

## 1. Radiografía de bigseo.com

### 1.1 Identidad y propuesta

| Campo | Valor |
|---|---|
| Title home | `Agencia de Marketing Digital que Genera Negocio \| BIGSEO` (54 chars) |
| Meta description | "La Agencia de Marketing Digital que GENERA NEGOCIO. Nuestro objetivo es conseguir tu éxito. \| BRAND \| SEM \| SEO \| CRO \| FUNNELS." |
| H1 | "Agencia de Marketing Digital" |
| Headline visual | "Marketing Digital que Genera Negocio" (no es el H1) |
| Claim | "Genera negocio" (ROI, no vanity metrics) |
| CTA principal | "Reserva tu Consultoría Gratuita" / "Hablemos" |
| Sede | Barcelona (Poblenou), fundada 2012 |
| Idiomas | ES + EN con hreflang `es`, `en`, `x-default` |

Observación: el claim es casi idéntico al de DKODING ("Sitios que venden"). El eje
*resultado comercial* está validado por el líder del mercado; hay que conservarlo.

### 1.2 Stack técnico (verificado en el HTML)

- WordPress + tema **GeneratePress child** + **GP Premium**
- **Elementor 4.2.3** como constructor (fuente del bloat)
- **WPML 4.9.7** (multiidioma)
- **LiteSpeed Cache** sobre **Hostinger** (headers `platform: hostinger`, `x-litespeed-cache: hit`)
- Yoast-style schema graph, Complianz GDPR, Contact Form 7, Safe SVG, Carousel Block
- jQuery + jquery-migrate (legacy), ActiveCampaign tracking, Metricool, Google Fonts Montserrat servida en local
- `xmlrpc.php` abierto (riesgo de superficie, irrelevante para ranking)

### 1.3 Rendimiento (laboratorio, Chromium móvil 390px, red del contenedor)

| Métrica | Valor |
|---|---|
| Peso total | **5.760 KB** |
| Peticiones | 90 |
| JavaScript | **4.214 KB en 36 ficheros** (65 `<script>` en DOM) |
| CSS | 259 KB / 7 ficheros |
| Imágenes | 445 KB / 26 (85 referencias `.webp`, lazy en 56 de 66 `<img>`) |
| Fuente | 672 KB (Montserrat local, 1 fichero) |
| TTFB | 733 ms |
| DOMContentLoaded | 1,35 s |
| `load` | 4,05 s |
| Nodos DOM | 1.274 |
| CLS | 0 |

Lectura: 4,2 MB de JS es el coste de Elementor + plugins. En CrUX real esto suele
traducirse en INP amarillo/rojo. Es un **flanco abierto**: la agencia SEO líder no
cumple el propio estándar que vende. Un sitio de DKODING con <300 KB de JS y LCP <2 s
tiene un argumento de venta medible contra el 90% de agencias en WordPress.

### 1.4 Diseño y UX (ver `docs/img/bigseo-home-*.png`)

- **Paleta**: fondo blanco, texto `#3A3A3A`, acento **azul eléctrico `#0020FF`**,
  bloques negros (hero, testimonios) y un bloque azul pleno (carrera).
- **Tipografía**: Montserrat en todo, peso 400 en botones, headlines bold.
- **Botones**: radio 2 px (casi cuadrados), azul sobre blanco, mayúsculas en cards.
- **Hero**: foto de oficina en B/N con overlay, H1 blanco, CTA azul, carrusel de logos.
- **Secciones**: cards grises de servicios (5 columnas), grid de 23 métricas, grid de 6
  "estrategias" con CTA, testimonios sobre negro, logos, bloque de empleo, CTA final.
- **Movimiento**: prácticamente nulo. Carrusel de logos y hover básicos. Cero WebGL,
  cero scroll-driven, cero micro-interacciones.
- **Problema UX móvil**: el banner de cookies cubre el hero completo (captura móvil).
- **Problema de preview social**: `og:image` es el favicon 512×512, no una imagen 1200×630.

Conclusión de diseño: **funcional y confiable, no impactante**. Es un sitio de
conversión B2B clásico. El techo de diferenciación visual está muy bajo.

### 1.5 SEO on-page y técnico

Lo que hace bien:

- Title y description con keyword principal + marca, canonical, hreflang completo.
- `robots.txt` abierto (`Disallow:` vacío) con sitemap index; sitemaps separados
  (page: 106 URLs, post: 44, podcast).
- Jerarquía de headings coherente: H1 → H2 por bloque de servicio → H3 por sub-servicio.
  Cada H3 es una keyword comercial ("Auditoría SEO", "Keyword Research", "A/B Testing").
- 56 enlaces internos únicos desde la home, todos a páginas de dinero o casos.
- Silos de URL por servicio y geolocalización:
  ```
  /agencia-seo/            /agencia-seo/barcelona/    /agencia-seo/local/
  /agencia-seo/internacional/  /agencia-seo/ia-chatgpt/  /agencia-seo/linkbuilding/
  /agencia-sem/  /agencia-google-ads/  /agencia-meta-ads/  /agencia-tiktok-ads/
  /agencia-chatgpt-ads/  /agencia-cro/  /agencia-funnels/  /agencia-diseno-web/
  /recursos/seo/  /recursos/seo/tecnico/  /recursos/seo/local/  /recursos/ia/
  /casos-exito/{cliente}-{disciplina}/
  ```
- Refresco editorial masivo: posts evergreen (robots.txt, contenido duplicado, rich
  snippets, SEO ChatGPT) con lastmod 29 sep – 1 oct 2026. Es la táctica
  "actualiza, no publiques más" que premian los core updates de 2026.
- Imágenes en WebP, lazy load, `max-image-preview:large`.

Lo que hace mal o deja a medias:

- Schema en home solo `WebSite`, `Organization`, `WebPage`, `BreadcrumbList`. **Sin**
  `LocalBusiness`/`ProfessionalService`, sin `Service`, sin `FAQPage`, sin `Review` /
  `AggregateRating` pese a mostrar 4,5/5 y testimonios. Deja rich results sobre la mesa.
- Los casos de éxito no llevan testimonio, FAQ ni schema (`Article`/`CaseStudy`).
- H1 ("Agencia de Marketing Digital") y headline visual distintos; "Keyword Research"
  repetido como H3 en dos bloques.
- `og:image` = favicon. Feed `/home-2/feed/` filtrado (slug de página en borrador).
- Nada de precios ni "desde". Opción legítima, pero cede la intención "precio agencia SEO".

### 1.6 GEO (optimización para motores generativos)

Lo que hace bigseo, y por qué importa:

| Táctica | Evidencia | Valor |
|---|---|---|
| Servicio propio "SEO en LLMs" | `/agencia-seo/ia-chatgpt/`, en el menú principal | Captura la demanda nueva antes que la competencia |
| Metodología en 9 pasos | auditoría IA gratuita → keywords generativas → arquitectura semántica/entidades → "reverse prompt engineering" → citaciones → reporting | Estructura lista para ser citada (listas numeradas) |
| FAQ en la página | "¿En qué LLMs?", "¿Cuánto tarda?", "¿Diferencia con SEO?" | Pares pregunta-respuesta extraíbles |
| Guía pilar `/recursos/ia/` | "cómo aparecer en las respuestas de los motores de IA" | Contenido educativo citable |
| `llms.txt` curado (10 KB) | descripción de entidad, permiso de entrenamiento con atribución, índice de servicios/casos/guías ES+EN | Coste casi cero; útil para agentes (Claude, Cursor) aunque Google no lo use |
| Fundador como entidad | Romuald Fons, Forbes, El País, RTVE, podcast | Las IA citan entidades reconocibles |
| Casos con cifras concretas | "+900% tráfico", "de 9.000 a 80.000 visitas", "ROAS x1100" | Las estadísticas verificables suben 30–40% la probabilidad de cita |
| Página "ChatGPT Ads" | `/agencia-chatgpt-ads/` (OpenAI Ads Manager) | Posicionamiento en una categoría recién nacida |

Donde flojea: ni `Organization.sameAs` rico (Wikipedia/Wikidata/Crunchbase), ni
`FAQPage` schema, ni autoría con `Person` schema en artículos, ni tablas comparativas.

### 1.7 Conversión

- Un solo CTA, repetido en nav, hero, mitad y footer. Sin WhatsApp, sin chat, sin precios.
- Formulario de consultoría en página propia (no pude leer los campos; probablemente CF7 + ActiveCampaign).
- Bloque "Únete a BIGSEO" en la home: empleo como señal de empresa viva y en crecimiento.
- Testimonios con cita breve + nombre + cargo + foto + logo. Caso Typeform: "Crecimos de 1k a 83k visitas al mes en solo 6 meses".

---

## 2. Qué copiar y qué no de bigseo

**Copiar (adaptado a LATAM/Colombia):**

1. Silos de URL por servicio × ciudad × vertical: `/diseno-web/`, `/diseno-web/bogota/`,
   `/diseno-web/restaurantes/`, `/tienda-online/`, `/seo/`, `/seo/local/`, `/seo/ia/`.
2. Página de casos con URL `/casos/{cliente}-{servicio}/`, cifra grande arriba,
   problema → solución en pasos → resultado → testimonio → FAQ → CTA.
3. Hub de guías pilar `/recursos/…` separado del blog. Pocas, largas, refrescadas.
4. Un CTA único y persistente. En LATAM: WhatsApp con mensaje precargado por servicio.
5. Servicio y guía de "SEO para IA / aparecer en ChatGPT" desde el día uno.
6. `llms.txt` curado + permiso de uso con atribución.
7. Refresco trimestral de contenido evergreen con lastmod real.

**No copiar:**

1. Elementor / WordPress pesado. 4,2 MB de JS es inaceptable en 2026.
2. Diseño plano sin movimiento. DKODING vende diseño; el sitio debe demostrarlo.
3. `og:image` genérico, schema mínimo, casos sin testimonio ni FAQ.
4. Cookie banner que tapa el hero en móvil.
5. Ocultar precios del todo. DKODING ya tiene precios públicos; mejor "desde" + configurador.

---

## 3. Mejores prácticas SEO 2026 (estado del arte)

Síntesis de las fuentes consultadas, aplicable a un sitio de agencia:

### 3.1 Core Web Vitals

- Siguen siendo señal confirmada pero **de desempate** (~1–3% del peso). Lo que mueve
  es que Google rankea con **datos de campo (CrUX)**, no Lighthouse.
- Varias fuentes reportan umbrales endurecidos en el core update de marzo 2026:
  **LCP ≤ 2,0 s, INP ≤ 150 ms, CLS ≤ 0,08**. Trátalos como presupuesto objetivo aunque
  Google no haya cambiado oficialmente los documentados (2,5 s / 200 ms / 0,1).
- INP es ahora señal de pleno derecho. Páginas con INP >500 ms pierden 2–4 posiciones
  en queries competitivas. Esto castiga directamente a sitios Elementor/jQuery.

**Presupuesto recomendado para DKODING:** JS inicial < 150 KB gz, LCP < 1,8 s en 4G,
INP < 150 ms, CLS < 0,05, fuentes variables subset < 100 KB, imágenes AVIF + WebP.

### 3.2 E-E-A-T con experiencia de primera mano

- Los core updates de 2026 pesan más la **experiencia directa**: capturas reales,
  cifras propias, nombres propios, fechas, "qué hicimos y qué pasó".
- Autoría visible: página de equipo con `Person` schema, `sameAs` a LinkedIn, bio,
  artículos firmados.
- Datos legales verificables (razón social, NIT, dirección) en footer + `Organization`.

### 3.3 Arquitectura y contenido

- Una URL canónica por intención. Hub → spoke → caso. Breadcrumbs reales + schema.
- Páginas de servicio con: H1 keyword, resumen de 2 líneas (BLUF), qué incluye,
  proceso en pasos, precio "desde", casos relacionados, FAQ (6–10), CTA.
- Páginas por vertical (restaurantes, clínicas, inmobiliarias, abogados) y por ciudad.
  Ahí está la intención comercial de "diseño web + ciudad".
- Blog solo si hay calendario real. Mejor 10 guías pilar vivas que 50 posts muertos.
- hreflang solo si hay versión EN real. `es-CO` + `x-default` basta para empezar.

### 3.4 Schema que sí rinde

`Organization` (+ `logo`, `sameAs`, `contactPoint`, `address`), `ProfessionalService` o
`LocalBusiness` con `areaServed`, `Service` con `offers` (precio "desde"),
`FAQPage` en servicios y casos, `Review`/`AggregateRating` solo con reseñas reales,
`BreadcrumbList`, `Article` + `Person` (author) en guías, `VideoObject` si hay video,
`ImageObject` en portafolio.

### 3.5 Higiene técnica

Sitemap index segmentado (páginas / casos / guías / imágenes), `robots.txt` que permita
GPTBot, OAI-SearchBot, ClaudeBot, PerplexityBot y Google-Extended (si quieres estar en
las respuestas tienes que dejar entrar al rastreador), `og:image` 1200×630 por página,
Twitter card, favicon SVG + PNG, 404 útil, redirecciones 301 desde todas las URLs viejas
de dkoding.net (resolver la duplicación `/servicios/` vs `/tienda/` detectada en
`docs/analisis-sitio-actual.md`).

---

## 4. Mejores prácticas GEO 2026

### 4.1 Qué es y qué se mide

GEO = conseguir **citas, menciones y recomendaciones** dentro de respuestas de
ChatGPT, Perplexity, Gemini, Claude, Copilot, Google AI Overviews y AI Mode. La unidad
de éxito es la cita, no el clic. Datos de contexto:

- Las AI Overviews están activas en España desde marzo 2025. La proporción de citas que
  venían del top 10 orgánico cayó del 76% al 38% en ocho meses: **ser top 10 ya no
  garantiza ser citado**.
- Solapamiento de dominios citados entre ChatGPT y Perplexity: ~11%. Cada motor tiene su
  índice (ChatGPT → Bing; Perplexity → índice vectorial propio; Google → Google).
- 88% de las empresas españolas no tiene estrategia GEO. En LATAM es aún menor. Es un
  espacio vacío para una agencia que lo ofrezca con método.

### 4.2 Tácticas con evidencia (ordenadas por impacto)

1. **Estadísticas verificables + citas a fuentes** inline: +30–40% visibilidad en IA
   (base Princeton GEO paper, replicado en 2026). Cita fuentes externas de autoridad;
   los LLM tratan como fiable a quien cita fiable.
2. **Citas directas de expertos nombrados** con cargo y empresa. Dale al modelo algo
   concreto que extraer y atribuir.
3. **BLUF en cada H2**: la primera frase de cada sección debe funcionar como cita
   autónoma. Si necesita el párrafo anterior para entenderse, reescríbela.
4. **Tablas comparativas** (+34% cobertura según un estudio 2026), **FAQ schema** (+28%),
   listas numeradas con pasos.
5. **Entidad de marca consistente**: mismo nombre, descripción y `sameAs` en web,
   LinkedIn, Google Business Profile, directorios (Clutch, Sortlist, GoodFirms), Wikidata
   si procede. Las IA recomiendan entidades que reconocen en varias fuentes.
6. **Menciones en terceros**: medios, podcasts, directorios de agencias, reseñas. Las
   citas no vienen solo de tu dominio.
7. **Páginas "qué es / cómo / cuánto cuesta"** en lenguaje conversacional: las queries a
   IA son preguntas largas, no keywords.
8. **Dejar rastrear a los bots de IA** en `robots.txt`, HTML renderizado en servidor
   (los bots de IA no ejecutan JS como Googlebot), contenido en el HTML inicial.

### 4.3 `llms.txt`: la verdad en 2026

- Google **no lo usa ni planea usarlo**; John Mueller lo comparó con el meta keywords. La
  guía oficial de Google de mayo 2026 lo lista como "no necesario".
- Ahrefs (mayo 2026): 97% de los `llms.txt` recibieron cero peticiones. GPTBot, ClaudeBot
  y PerplexityBot rastrean HTML directamente.
- Sí lo leen **agentes de aplicación** (Claude Desktop, Cursor, Continue) y herramientas
  de auditoría SEO.
- Veredicto: hazlo, cuesta 30 minutos y bigseo lo tiene, pero **no es GEO**. El GEO real
  es §4.2.

### 4.4 Medición

Herramientas de visibilidad en IA (Profound, Peec, Otterly, LLMrefs, Similarweb AI,
GEO Metrics en España) o, para empezar, un panel propio: 30 prompts por servicio ×
4 motores, una vez al mes, registrando si DKODING aparece, en qué posición y qué URL
cita. Añadir en GA4 un canal "AI referrals" (chatgpt.com, perplexity.ai, gemini.google,
copilot.microsoft) y medir el tráfico que llega.

---

## 5. Tendencias y librerías de diseño/efectos 2026

### 5.1 Lo que está ganando (Awwwards, Codrops, informes 2026)

- **Restricción con un concepto fuerte**: un efecto hero memorable, no veinte. Los
  ganadores de Site of the Day 2026 tienen Lighthouse móvil 90+ y respetan
  `prefers-reduced-motion`.
- **Scrollytelling**: el scroll secuencia la narrativa (Cartier, Shopify, Primland).
  Para una agencia: "problema → proceso → resultado" contado con scroll.
- **3D selectivo con shaders propios**; están perdiendo los fondos de partículas
  genéricos y las plantillas copiadas.
- **Tipografía cinética y fuentes variables**: titulares que reaccionan al scroll/hover.
- **Bento grids** para servicios/casos; **glassmorphism** sutil sobre dark mode;
  **dark mode por defecto** en agencias tech.
- **Micro-interacciones** con propósito: botones magnéticos, cursores custom, hover
  con máscara, transiciones de página.
- Dos cambios estructurales: **GSAP es 100% gratis** (incluidos ScrollTrigger,
  SplitText, MorphSVG) y **las animaciones CSS scroll-driven son baseline** en todos
  los navegadores.

### 5.2 Stack recomendado

| Capa | Opción recomendada | Por qué | Alternativa |
|---|---|---|---|
| Framework | **Astro 6** (islas) | 0 JS por defecto, Lighthouse 90+ sin esfuerzo, Content Collections para casos/guías, CSP integrada | **Next.js 16** si se prevé app/portal cliente con mucha interactividad |
| Estilos | **Tailwind CSS v4** + tokens CSS | Velocidad, diseño consistente, dark mode nativo | UnoCSS |
| Componentes | **shadcn/ui** (React islands) o componentes Astro propios | Accesibles, sin lock-in | Radix |
| Animación timeline/scroll | **GSAP 3 + ScrollTrigger + SplitText** | Gratis, estándar de la industria, control total | **Motion** (ex Framer Motion) para UI React declarativa |
| Smooth scroll | **Lenis** | Ligero, se integra con ScrollTrigger vía `ticker` | Scroll nativo + CSS scroll-driven |
| 3D / WebGL | **Three.js** (+ **React Three Fiber** si Next) | Estándar; glTF 2.0; WebGPU como fallback futuro | OGL (más ligero) para un solo shader hero |
| Transiciones página | **View Transitions API** (nativa en Astro) | Sensación SPA sin JS pesado | Barba.js |
| Scroll-driven simple | **CSS `animation-timeline: scroll()/view()`** | 0 JS, GPU, baseline 2026 | IntersectionObserver |
| Tipografía | Fuente variable subset (`unicode-range` latín), `font-display: swap`, preload | Un fichero < 100 KB vs los 672 KB de bigseo | |
| Imágenes | `astro:assets` / `next/image`, AVIF+WebP, `sizes` reales, LCP con `fetchpriority="high"` | | |
| Formularios | Server actions / endpoint + reCAPTCHA v3 o Turnstile + envío a CRM + WhatsApp deep link | | |
| Hosting | Vercel / Netlify / Cloudflare Pages con CDN edge | TTFB < 200 ms en LATAM | |
| Analítica | GA4 + Clarity (mapas de calor gratis) + eventos de CTA/WhatsApp | | |

### 5.3 Efectos concretos para un sitio "altamente impactante" sin romper CWV

1. **Hero**: titular con SplitText (reveal por palabra, 0,8 s) sobre un shader WebGL
   ligero (gradiente ruidoso/ondas, un solo `<canvas>`, OGL o Three, ~60 KB) que se
   apaga en `prefers-reduced-motion` y en móviles de gama baja (`navigator.hardwareConcurrency`).
   Fallback: gradiente CSS animado. El LCP debe ser el titular, no el canvas.
2. **Marquee de logos** con CSS `@keyframes` (0 JS), pausa en hover.
3. **Servicios en bento grid** con hover 3D tilt sutil (`transform: perspective`) y
   borde con gradiente animado.
4. **Proceso en scrollytelling**: pasos pinneados con ScrollTrigger; la ilustración
   cambia a medida que se avanza. Explica "qué pasa entre que pagas y recibes", el vacío
   detectado en el sitio actual.
5. **Contadores de resultados** (`+300% leads`) que suben al entrar en viewport
   (GSAP `to` con `snap`). Cifras reales o nada.
6. **Casos de éxito** con transición de página View Transitions: la card se expande a
   hero del caso. Antes/después con slider de comparación.
7. **Testimonios** con video corto (`<video muted playsinline>` lazy) o cita + foto.
8. **CTA**: botón magnético (GSAP `quickTo`) + WhatsApp flotante con mensaje precargado.
9. **Cursor custom** solo en desktop con puntero fino (`@media (pointer: fine)`).
10. **Dark mode** por defecto con toggle, tokens en `:root`, paleta de acento único
    (DKODING debería tener *un* color de marca tan reconocible como el `#0020FF` de bigseo).

### 5.4 Guardarraíles

- Respetar `prefers-reduced-motion` en todo. Es criterio Awwwards y de accesibilidad.
- Cargar GSAP/Three/Lenis en islas `client:visible` o `client:idle`, nunca en el bundle
  inicial. Presupuesto: el hero completo < 250 KB de JS.
- Nada de scroll-jacking agresivo; Lenis con `lerp` 0,1 y `wheelMultiplier` 1.
- Texto siempre en HTML real (no en canvas ni en imagen): lo leen Google y las IA.
- Probar en Moto G (Chrome DevTools throttling 4G) antes de cada release.

---

## 6. Blueprint propuesto para DKODING 2026

### 6.1 Arquitectura de información

```
/                              Home (hero shader, prueba, servicios bento, proceso, casos, CTA)
/diseno-web/                   Hub servicio  → /diseno-web/landing-pages/, /diseno-web/corporativa/
/tienda-online/                Hub           → /tienda-online/catalogo/, /tienda-online/avanzada/
/seo/                          Hub           → /seo/local/, /seo/ia/ (GEO), /seo/auditoria/
/marketing/                    Hub           → /marketing/google-ads/, /marketing/redes-sociales/
/branding/logo-profesional/
/industrias/{restaurantes|clinicas|inmobiliarias|abogados|educacion}/
/ciudades/{bogota|medellin|cali|barranquilla}/   (solo si hay contenido real por ciudad)
/casos/                        Índice filtrable → /casos/{cliente}-{servicio}/
/recursos/                     Guías pilar → /recursos/seo-local/, /recursos/aparecer-en-chatgpt/, /recursos/cuanto-cuesta-una-web/
/precios/                      Tabla + configurador "desde"
/nosotros/  /equipo/  /contacto/  /soporte/
/llms.txt  /sitemap-index.xml  /robots.txt
```

Todas las URLs antiguas (`/servicios/*`, `/tienda/*`, el post suelto en raíz) → 301 a
la nueva canónica.

### 6.2 Plantilla de página de servicio

H1 con keyword → párrafo BLUF de 2 líneas → cifra/prueba → qué incluye (lista) →
proceso en 4–6 pasos (scrollytelling) → precio "desde" + qué no incluye → 2–3 casos
relacionados → FAQ 6–10 (con `FAQPage`) → testimonio → CTA WhatsApp + formulario.
Schema: `Service` + `Offer` + `FAQPage` + `BreadcrumbList`.

### 6.3 Plantilla de caso

Cifra hero ("+340% pedidos en 4 meses") → cliente y contexto → reto → qué hicimos
(pasos) → resultado con gráfico → testimonio con nombre/cargo/foto → stack usado →
FAQ corta → CTA. Schema: `Article` + `Person` (autor) + `Review`.

### 6.4 Capa GEO desde el lanzamiento

- Servicio `/seo/ia/` ("Aparece en ChatGPT y Google AI") con metodología en pasos y FAQ.
- Guía pilar `/recursos/aparecer-en-chatgpt/` con tabla comparativa de motores,
  estadísticas citadas con fuente y cita de un experto de DKODING con nombre y cargo.
- `Organization.sameAs` completo; perfil en Clutch/Sortlist/GoodFirms/Google Business.
- `robots.txt` permitiendo GPTBot, OAI-SearchBot, ClaudeBot, PerplexityBot, Google-Extended.
- `llms.txt` curado (formato bigseo) + panel mensual de 30 prompts × 4 motores.

### 6.5 Presupuestos de calidad (gates de release)

| Gate | Umbral |
|---|---|
| Lighthouse móvil (Perf / A11y / SEO) | ≥ 90 / ≥ 95 / 100 |
| LCP / INP / CLS (lab, 4G) | < 1,8 s / < 150 ms / < 0,05 |
| JS inicial | < 150 KB gz (home < 250 KB con hero WebGL) |
| Peso página home | < 1,2 MB |
| Schema | validado en Rich Results Test sin errores |
| Reduced motion | todo efecto tiene fallback |

### 6.6 Orden de ejecución sugerido

1. Sistema de diseño (tokens, tipografía variable, color de marca, componentes base).
2. Home + 1 servicio + 1 caso como vertical slice con todos los efectos y gates.
3. Resto de servicios, precios, nosotros, contacto, redirecciones 301.
4. Casos (mínimo 6 con cifras reales) y 3 guías pilar.
5. Capa GEO + medición. Lanzamiento.
6. Industrias y ciudades a medida que haya contenido real.

---

## 7. Fuentes

Análisis directo: `https://bigseo.com/` (HTML, headers, schema), `/robots.txt`,
`/llms.txt`, `/sitemap_index.xml`, `/page-sitemap.xml`, `/post-sitemap.xml`,
`/agencia-seo/ia-chatgpt/`, `/casos-exito/typeform-seo-contenidos/`. Capturas en `docs/img/`.

Ranking de bigseo:
- https://elreferente.es/?p=154708 (10 mejores agencias SEO España, 5.º puesto)
- https://forbes.es/?p=226785
- https://www.merca2.es/2025/01/23/mejores-agencias-de-marketing-digital-barcelona-2123601/
- https://www.webtonic.io/blog/best-seo-agencies-barcelona

SEO 2026:
- https://www.cloudswitched.com/news/google-march-2026-core-update-seo-strategy
- https://www.dataslayer.ai/blog/google-core-update-december-2025-what-changed-and-how-to-fix-your-rankings
- https://rankeo.io/blog/core-web-vitals-2026
- https://almcorp.com/blog/core-web-vitals-2026-technical-seo-guide/
- https://www.digitalapplied.com/blog/core-web-vitals-ai-optimization-strategies-2026

GEO 2026:
- https://aisearch.similarweb.com/blog/what-is-geo/
- https://llmpulse.ai/blog/geo-guide/
- https://www.enrichlabs.ai/blog/generative-engine-optimization-geo-complete-guide-2026
- https://llmrefs.com/generative-engine-optimization
- https://arxiv.org/pdf/2604.25707 (marco de medición de citas en motores IA)
- https://ppc.land/llms-txt-adoption-rises-8-8x-but-97-of-files-get-zero-ai-requests/
- https://pasqualepillitteri.it/en/news/3734/llms-txt-google-seo-chrome-lighthouse-en
- https://limy.ai/blog/llms-txt-in-2026-the-full-guide
- https://geotoolbox.ai/es/blog/agencia-geo (mercado GEO en España, tarifas)
- https://seocom.agency/en/blog/geo-por-que-aparecer-chatgpt/
- https://ecosistemastartup.com/geo-metrics-3-000-marcas-ya-optimizan-para-chatgpt/
- https://www.elcontribuyente.mx/2026/08/las-5-agencias-que-dominan-la-visibilidad-en-ia-en-la-region-las-mejores-en-optimizacion-para-chatgpt-y-entornos-generativosp/

Diseño y librerías 2026:
- https://motionkit.io/blog/web-animation-trends-2026 (GSAP gratis, scroll-driven baseline)
- https://tympanus.net/codrops/2026/05/28/the-never-ending-story-building-a-seamless-infinite-scroll-experience-with-gsap-lenis/
- https://svilenkovic.com/3d/awwwards-2026-3d y https://svilenkovic.com/3d/scrollytelling-trends-2026
- https://www.utsubo.com/blog/best-threejs-websites-2026
- https://www.pixelwall.ca/news/immersive-web-design-2026-threejs-gsap-and-the-rise-of-cinematic-web/
- https://www.designrush.com/agency/website-design-development/trends/web-design-trends
- https://line25.com/articles/web-design-trends-2026/
- https://studiomeyer.io/en/blog/webdesign-trends-2026-reality-check
- https://www.theedigital.com/blog/web-design-trend
- https://dev.to/mr_manushukla/astro-6-vs-nextjs-16-for-content-sites-in-2026-speed-hosting-cost-and-when-to-switch-2icn
- https://www.luckymedia.dev/blog/astro-vs-nextjs-for-marketing-sites
- https://www.cosmicjs.com/blog/astro-vs-nextjs-2026
