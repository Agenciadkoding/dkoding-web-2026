# Estructura del sitio, palabras clave y migración de URLs · dkoding.net

Fecha: 2026-10-07 · Estado: **PROPUESTA**, con el inventario de URLs verificado sobre el sitio en vivo y
las respuestas del mismo día (soporte, landing hotelera, cifras de palabras clave y uso de la matriz).

Archivos de datos:

- `seo/redirecciones-301.csv`: las 55 URLs actuales con su destino en el sitio nuevo.
- `seo/_redirects.borrador`: las 80 reglas listas para Cloudflare, generadas desde el CSV.
- `seo/palabras-clave-clasificadas.csv`: las 660 palabras clave únicas de tu estudio, con su página sugerida, si van a landing o a blog, su sector y su motivo de descarte.

---

## Resumen

1. El sitio actual tiene **55 URLs públicas**: 20 páginas, 5 entradas de blog, 17 productos de
   WooCommerce, 9 archivos de categoría y autor, y 3 redirecciones viejas. Todas tienen destino
   en el mapa.
2. La estructura nueva tiene **la home más 5 landings**, con URLs cortas: `/marketing-digital/`,
   `/seo-y-geo/`, `/redes-sociales/`, `/diseno-de-marca/` y `/desarrollo-de-apps/`. La home
   sigue siendo la página de desarrollo web, como hoy.
3. Se conservan 9 URLs tal cual (home, nosotros, equipo, casos, contacto, privacidad, blog,
   servicios y soporte). 38 pasan con 301 a su equivalente, 2 van con 302 temporal mientras se
   construye la landing hotelera, y 6 quedan en 404 porque no tienen equivalente (carrito,
   cuenta, demos y un formulario interno).
4. El blog pasa a `/blog/{slug}/`, organizado por **tema** (los 6 servicios) y por **nicho**
   (salud, ecommerce, profesionales independientes, pymes, etc.). Las 5 entradas de 2024 se
   migran y actualizan; tienen entre 859 y 1.251 palabras.
5. Tu estudio de palabras clave sirve para repartir temas. Sus cifras son de referencia, de
   hace unos años: se usan como relevancia relativa hasta tener cifras reales. **No tiene
   ninguna búsqueda con "Cali"**, y conviene sumarlas al actualizarlo (§5).
6. De 22 competidores revisados en vivo, **ninguno es de Cali**, pero varios de fuera ya tienen
   landings con "Cali". **Ninguno tiene cotizador interactivo.** Apps y diseño de marca son las
   landings con menos competencia (§6).

---

## 1. Lo que hay hoy

Inventario tomado el 2026-10-07 de `sitemap_index.xml` y de la API pública de WordPress, y
comprobado URL por URL con su código HTTP.

| Tipo | Cantidad | Estado |
|---|---|---|
| Páginas | 20 | 200. Incluye 6 de trabajo o demo indexables (`/home-dani/`, `/desarrollo-web/`, `/datos-hoteles/`, `/dkard/`, `/dkarta/`, `/plan-hotelero/`) |
| Entradas de blog | 5 | 200, en la raíz del dominio, todas de junio y julio de 2024 |
| Productos (`/servicios/*`) | 17 | 200, con precio |
| Categorías de producto | 8 | 200. Solo 5 están en el sitemap |
| Categoría del blog y autor | 2 | 200 |
| Redirecciones viejas (`/tienda/*`) | 3 | 301 a `/servicios/*`. Al migrar, se apuntan directo al destino final para no encadenar dos saltos |

Los problemas de `robots.txt` (bloquea CSS, JS, imágenes y toda URL con parámetros, y no declara
el sitemap) siguen como los documentó `docs/auditoria-sitio-actual.md` §4.2. El sitio nuevo
sale con un `robots.txt` limpio desde el primer día.

**Lo que no pude ver:** URLs viejas que ya no están en el sitemap pero que Google o algún
enlace externo todavía conocen. El archivo histórico de Internet Archive no respondió desde
este entorno. Antes de lanzar hay que exportar de Search Console, en *Páginas* y en
*Rendimiento → Páginas*, todas las URLs con impresiones de los últimos 16 meses, y cruzarlas
con el CSV. El admin lo hará solo cuando esté conectado a Search Console.

---

## 2. Estructura nueva

| Página | URL | Palabra principal (a validar) | Secundarias de tu estudio | Nota |
|---|---|---|---|---|
| Home · Desarrollo web | `/` | diseño de páginas web (5.400) + "en Cali" | creación de páginas web (6.600), desarrollo de páginas web (1.900), diseño web profesional (2.400), sitio web profesional (2.400), agencia de diseño web (1.600), diseño web wordpress (1.600), diseño de landing page (1.000), mantenimiento de páginas web (720) | "crear página web" (12.100) mezcla gente que quiere hacerla sola: va mejor en un artículo de costos |
| Marketing digital | `/marketing-digital/` | agencia de marketing digital (6.600) | servicios de marketing digital (2.400), campañas en google ads (2.900), publicidad en internet (3.600), email marketing (4.400), agencia de publicidad digital (1.600), marketing digital para empresas (1.600), marketing por whatsapp (1.000) | La pauta en Google y Meta vive aquí |
| SEO y GEO | `/seo-y-geo/` | posicionamiento web (2.900) · agencia SEO (2.400) | auditoría seo (5.800), seo local (5.400), seo técnico (3.600), agencia de posicionamiento en google (1.300), seo en google my business (2.000), schema markup (1.700) | Tu estudio **no tiene búsquedas de GEO** (aparecer en ChatGPT o en respuestas de IA). Hay que investigarlas aparte |
| Optimización de redes sociales | `/redes-sociales/` | manejo de redes sociales (validar) · agencia de redes sociales (2.900) | anuncios en instagram (2.400), anuncios en redes sociales (1.900), diseño para redes sociales (1.600), publicidad pagada en redes sociales (1.300), estrategia de social media (1.000) | "Optimización de redes sociales" no aparece como búsqueda. Validar "manejo de redes sociales" y "community manager" |
| Diseño de marca | `/diseno-de-marca/` | diseño de logotipos (2.400) · diseño de marca (880) | diseño de identidad corporativa (1.000), diseño de imagen corporativa (1.000), diseño de packaging (1.000), diseño de tarjetas de presentación (2.400), agencia de branding (590), diseño de papelería empresarial (720) | "diseño gráfico" (12.100) es demasiado amplia: la buscan estudiantes y gente que busca empleo |
| Desarrollo de apps | `/desarrollo-de-apps/` | desarrollo de apps móviles (2.400) | desarrollo de aplicaciones web (1.300), desarrollo de software a medida (1.300), empresa de desarrollo de apps (880), software a la medida (880), crear app móvil personalizada (720), desarrollo de crm personalizado (590) | "desarrollo de software" (4.400) da para una sexta landing más adelante |
| Servicios | `/servicios/` | — | — | Índice corto de los 6 servicios. Conserva la URL que existe desde 2024 |
| Trifecta hotelera | `/trifecta-hotelera/` | crear sitio web para hotel (480) + "en Cali" | seo para hoteles (720), páginas web para hoteles, sistema de reservas | Landing por sector que se construirá más adelante. Absorbe `/plan-hotelero/` |
| Soporte | `/soporte/` | — | — | Se conserva: entrada de los tickets de los clientes |
| Casos de éxito, Nosotros, Equipo, Contacto, Privacidad | igual que hoy | — | — | Se conservan las URLs |

Las cifras entre paréntesis son las de tu hoja, sin validar. Sirven para ordenar, no para
prometer tráfico.

**Dos landings candidatas para la fase 2,** según tu propio estudio:

- `/tiendas-virtuales/`: tienda online (5.400), tienda virtual (4.400), catálogo online (1.600).
  Hoy vendes tres productos de tienda y catálogo, y en el sitio nuevo apuntarían a la home.
- `/software-a-la-medida/`: desarrollo de software (4.400), empresa de desarrollo de software
  (1.600), software a la medida (880).

Cuando se creen, se cambia el destino de sus 301 en el CSV. El cambio va en la misma regla,
nunca como un salto nuevo encima.

---

## 3. Blog por temas y nichos

**Esquema de URLs:**

- `/blog/`: portada del blog.
- `/blog/tema/{servicio}/`: un índice por cada uno de los 6 servicios, con una guía pilar.
- `/blog/sector/{nicho}/`: un índice por nicho, por ejemplo `/blog/sector/salud/`.
- `/blog/{slug}/`: cada artículo. El tema y el nicho **no van en la URL del artículo**, así que
  se pueden reclasificar sin romper enlaces.

**Nichos que salen de tu estudio** (palabras del tipo "X para clínicas", "X para restaurantes"):

| Nicho | Palabras | Ejemplos |
|---|---|---|
| Ecommerce | 33 | tienda online, seo para ecommerce, marketing para tiendas online |
| Profesionales independientes | 25 | páginas web para médicos, contadores, fotógrafos, arquitectos, coaches |
| Pymes y emprendedores | 24 | página web para negocio, marketing para pymes |
| Salud | 22 | páginas web para médicos, seo para clínicas, marketing digital para psicólogos |
| Educación | 12 | páginas web educativas, crear página web para cursos online |
| Hoteles y turismo | 8 | seo para hoteles, crear sitio web para hotel, sistema de reservas |
| Restaurantes | 7 | marketing digital para restaurantes, página web para restaurante |
| Inmobiliarias | 5 | seo para inmobiliarias, diseño web para inmobiliarias |
| Abogados | 5 | seo para abogados, páginas web para abogados |

Salud y hoteles conectan con clientes y productos que ya tienes: la psicóloga de tus casos de
éxito y el vertical hotelero. Son los primeros nichos que conviene trabajar.

**Primeros 12 artículos sugeridos.** Cada uno enlaza a su landing y a su guía pilar.

| # | Artículo | Palabras de tu estudio | Landing |
|---|---|---|---|
| 1 | Cuánto cuesta una página web en Colombia en 2026 | páginas web económicas, crear página web | `/` |
| 2 | Auditoría SEO: qué revisa y cómo leer el informe | auditoría seo, seo técnico | `/seo-y-geo/` |
| 3 | SEO local en Cali: guía de Google Business Profile | seo local, seo en google my business | `/seo-y-geo/` |
| 4 | Cómo aparecer en ChatGPT y en las respuestas de IA | (sin datos en tu estudio: hueco a validar) | `/seo-y-geo/` |
| 5 | Tienda online, tienda virtual o catálogo: qué necesita tu negocio | tienda online, catálogo online | `/` |
| 6 | Email marketing para pymes y tiendas online | email marketing, email marketing para ecommerce | `/marketing-digital/` |
| 7 | Estrategias de marketing digital para pymes | estrategias de marketing digital, marketing para pymes | `/marketing-digital/` |
| 8 | Logo profesional: por qué importa (migrar y actualizar el de 2024) | diseño de logotipos | `/diseno-de-marca/` |
| 9 | Manual de identidad: qué incluye y cuándo lo necesitas | diseño de identidad corporativa | `/diseno-de-marca/` |
| 10 | Estrategia de redes sociales para empresas | estrategia de social media, marketing en redes sociales | `/redes-sociales/` |
| 11 | Cuánto cuesta desarrollar una app en Colombia | desarrollo de apps móviles | `/desarrollo-de-apps/` |
| 12 | Páginas web para médicos y clínicas | páginas web para médicos, seo para clínicas | `/` + nicho salud |

Las otras 4 entradas de 2024 (portafolio digital, SEO en Google, tienda online y ventas por
internet) se migran a `/blog/` con el mismo slug y se actualizan. La 1, la 3 y la 5 de la lista
pueden absorber partes de ellas.

---

## 4. Migración sin perder posicionamiento

El mapa completo está en `seo/redirecciones-301.csv`.

| Qué pasa | URLs | Ejemplos |
|---|---|---|
| Se conserva la URL | 9 | `/`, `/nosotros/`, `/casos-de-exito/`, `/contacto/`, `/blog/`, `/servicios/`, `/soporte/` |
| 301 al servicio equivalente | 14 | `/servicios/posicionamiento-en-google-seo/` → `/seo-y-geo/`; `/servicios/marca/` → `/diseno-de-marca/` |
| 301 a la home | 16 | Planes web, tiendas y catálogos, sus categorías, `/home-dani/` y `/desarrollo-web/` |
| 301 de entradas a `/blog/` | 5 | `/crear-mi-tienda-online/` → `/blog/crear-mi-tienda-online/` |
| 301 de archivos | 2 | `/author/admindkoding/` → `/nosotros/`, `/category/sin-categoria/` → `/blog/` |
| 301 externo | 1 | `/dkard/` → `https://dkard.co/` |
| 302 temporal | 2 | `/trifecta-hotelera/` y `/plan-hotelero/` → `/` mientras se construye la landing |
| Queda en 404 (sin equivalente) | 6 | `/carrito/`, `/finalizar-compra/`, `/mi-cuenta/`, `/dkarta/`, `/datos-hoteles/`, `/categoria/sin-categorizar/` |

**Las dos 302 son temporales a propósito.** Cuando exista la landing, `/trifecta-hotelera/`
deja de redirigir y `/plan-hotelero/` pasa a 301 hacia ella. Se cambia la misma regla, así que
nunca hay una cadena de dos saltos.

No redirigir todo a la home es deliberado: Google trata como error (soft 404) una redirección a
una página que no tiene que ver con la original. Una URL sin equivalente responde 404 y Google
la retira sola.

**Por confirmar contigo** (columna `confirmar` del CSV):

1. `/dkarta/`: ¿algún cliente la enlaza como demo?
2. `/servicios/anuncios-en-meta-ads/`: ¿va a marketing digital o a redes sociales?
3. `/servicios/`: ¿índice de servicios, o 301 a la home?
4. Tiendas y catálogos (3 URLs): ¿se crea `/tiendas-virtuales/` en la fase 2?

Resueltas el 7 de octubre: `/soporte/` se conserva, y `/plan-hotelero/` y `/trifecta-hotelera/`
esperan su landing.

**Pasos del lanzamiento:**

1. **Antes:** exportar de Search Console las URLs con impresiones y cruzarlas con el CSV. Revisar
   backlinks en Search Console → *Enlaces*.
2. **En el build:** el CSV genera `public/_redirects`. Cloudflare admite 2.000 reglas estáticas;
   este mapa usa 80, porque cada origen va con y sin barra final.
3. **El día del cambio:** un script recorre las 55 URLs viejas y comprueba que cada 301 o 302 llegue
   en **un solo salto** a una página que responde 200. Se publica el sitemap nuevo, se envía en
   Search Console y se declara en `robots.txt`.
4. **También:** actualizar el enlace de Google Business Profile, las biografías de redes, las
   URLs finales de los anuncios y los QR impresos.
5. **Después:** vigilar en Search Console los informes de páginas y de errores 404 durante 8 a
   12 semanas. Las redirecciones se mantienen **al menos un año**.

---

## 5. Lo que dice tu estudio de palabras clave

El documento se lee completo: **702 filas en 6 grupos** (SEO, Agencia, Web, Marketing, Diseño
y Desarrollo), que quedan en **660 palabras únicas** al quitar repetidas.

**Qué son esas cifras.** Se sacaron cuando tu cuenta de Google Ads no mostraba volúmenes
exactos, hace unos años. Por eso muchas se repiten (720, 590, 880): son rangos aproximados. Se
usan como **relevancia relativa** entre palabras, para ordenar temas, hasta tener cifras reales.

**Lo que sirve:** cubre bien los seis servicios, separa la intención (transaccional,
informativa o mixta) y tiene suficientes palabras de nicho para planear un año de blog.

**Lo que falta y conviene sumar cuando actualices las cifras:**

| Hueco | Por qué importa |
|---|---|
| Búsquedas con "Cali" | Hay 16 con Medellín o Bogotá y ninguna de tu ciudad, que es tu ventaja frente a la competencia |
| GEO y visibilidad en IA | Ya tiene landing en 7 competidores |
| "manejo de redes sociales" y "community manager" | Es el término que usa la competencia para lo que tú llamas optimización de redes sociales |
| Búsquedas de hoteles | Para la landing de Trifecta hotelera |

**Lo que se descartó para la estructura** (72 palabras, en el CSV con su motivo, no borradas):

| Motivo | Palabras | Ejemplos |
|---|---|---|
| Búsqueda de empleo o freelancers | 31 | "programador freelance", "diseñador gráfico junior" |
| Otras ciudades | 16 | Medellín y Bogotá |
| Fuera de tu oferta | 22 | "seo en yandex", "agencia de marketing político" |
| Hazlo tú mismo | 5 | "crear sitio web gratis" |

Algunas palabras caen en dos motivos, por eso la suma pasa de 72.

**Cómo actualizar las cifras:** en el Planificador de palabras clave de Google Ads, ya con
cifras exactas, ubicación **Colombia** y luego **Cali**, pegar las ~60 palabras de la tabla del
§2 más sus variantes con "Cali". Con eso se confirma la palabra principal de cada landing.
Después del lanzamiento, la fuente de verdad es Search Console: el admin guarda la palabra
objetivo de cada página y la compara con las consultas reales que traen clics.

**Competencia:** ver §6.

---

## 6. Competencia

### 6.1 Tu matriz

La usas para encontrar mejoras a la oferta de DKODING, así que ese análisis está aparte, en
`docs/mejoras-oferta.md`. Resumen: soporte mensual como producto estrella, un método con nombre,
diagnóstico gratis como puerta de entrada, paquetes por sector (hoteles y salud) y los
productos propios (dkard y dkarta) a la vista.

### 6.2 Lo que muestran sus sitios hoy

Revisé en vivo 22 sitios de tu lista: sitemaps completos, home, 2 a 5 landings por sitio y el
último artículo de cada blog. Descarté 2 porque ya no son agencias activas, y uno bloqueó la
revisión. No tuve acceso a resultados de Google, así que **no sé quién posiciona de verdad**
para cada búsqueda. Lo que sigue es cómo están construidos.

| Hallazgo | Dato |
|---|---|
| Ninguna agencia de tu lista está comprobadamente en Cali | Más Creativos y SM Digital, que la matriz pone en Cali, se presentan como de Medellín. Lemon Digital podría serlo, pero no pude comprobarlo |
| Pero agencias de fuera ya atacan "Cali" | Símbolo tiene 11 landings con Cali, Los Creativos 2 y Triario 2; Seology, iaLab y Branch 1 cada una. Fórmula típica: "Agencia SEO en Cali \| Posicionamiento web" |
| Patrón de URLs | Landings de primer nivel (`/redes-sociales/`, `/branding/`, `/agencia-geo/`). La ciudad va en una página hija o solo en el título |
| Longitud | Los que trabajan SEO en serio tienen landings de 1.500 a 5.000 palabras. Por debajo de 900 están los más flojos |
| Precios publicados | 7 de los 19 muestran un "desde" o una página de precios (Dimark "desde 800.000 al mes", Los Creativos, Seology `/precio-seo/`) |
| CTA | WhatsApp en 12 de 19, luego "diagnóstico gratis". **Ninguno tiene cotizador interactivo ni agenda embebida** |
| GEO | Ya no es un hueco: 7 tienen landing de GEO o visibilidad en IA, y 8 publican `/llms.txt`. Solo Símbolo tiene GEO para Cali |
| Apps y marca | Las landings con menos competencia: la única de apps es de 2023 y tiene 465 palabras, y nadie tiene "diseño de marca en Cali" |
| Redes sociales | El término que usan todos es **"manejo de redes sociales"**, no "optimización" |
| Blogs | 8 publican cada semana (Branch casi a diario). 6 están parados desde hace meses. Varios tienen glosarios de 145–180 términos e índices por sector |
| Schema | Ninguno junta en una landing LocalBusiness con dirección en Cali, Service, Offer, FAQ y BreadcrumbList |

### 6.3 Qué cambia para dkoding.net

1. **La estructura del §2 se mantiene,** con la ciudad en el título, el H1 y la descripción de
   cada landing: "Diseño de páginas web en Cali", "Agencia de marketing digital en Cali", etc.
   Tú sí estás en Cali y ellos no: eso se demuestra con LocalBusiness, la dirección real, el
   mapa y casos locales.
2. **Redes sociales:** H1 y título con "manejo de redes sociales en Cali". "Optimización" queda
   como ángulo del texto. La URL `/redes-sociales/` sirve para los dos.
3. **El cotizador es el diferenciador más claro.** Nadie lo tiene. Conviene que, además del botón
   flotante, tenga una URL propia indexable (`/cotizador/`) para captar "cuánto cuesta una página
   web en Cali".
4. **Precios:** decidiste que la landing no muestre precios. Siete competidores sí los
   muestran. El cotizador puede cubrir esa intención sin poner cifras fijas en la página; es una
   decisión tuya, solo te dejo el dato.
5. **Apps y diseño de marca** son donde más rápido se puede posicionar: 1.500–2.500 palabras,
   portafolio y casos.
6. **GEO:** la diferencia no es tener la landing, sino demostrarlo: `llms.txt`, un robots.txt
   que permita los bots de IA y un informe de citas en ChatGPT, Perplexity y AI Overviews con
   un caso real.
7. **Páginas por otra ciudad** (`/seo-y-geo/bogota/`) solo cuando haya casos reales allí, con
   contenido propio. Nada de copias con la ciudad cambiada.
8. **Blog:** una entrada por semana es realista. Sectores del Valle del Cauca primero: salud,
   clínicas estéticas, hoteles y turismo, moda y agroindustria. Un glosario corto de GEO e IA
   (50–80 términos) en `/blog/glosario/`.

---

## 7. Cómo entra esto en el admin

- **Páginas:** cada página del sitio tiene estado (planificada, en diseño, publicada, redirigida
  o retirada), palabra objetivo, tema y nicho, y los datos de Search Console. Las 6 landings y
  los 12 artículos de arriba entran como "planificada".
- **Redirecciones:** el CSV se importa al admin. Desde ahí se mantienen, se valida que no haya
  cadenas ni bucles, y se ven los 404 que reporte Search Console.
- **Palabras clave:** `seo/palabras-clave-clasificadas.csv` es la semilla. El admin muestra
  para cada página su palabra objetivo, la posición real y las consultas que traen clics sin
  estar previstas.
