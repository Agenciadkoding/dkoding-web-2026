# Auditoría del sitio actual — dkoding.net

> Fecha: 2026-10-06
> Estado: **VERIFICADO**. Acceso directo al dominio disponible; todo lo que sigue
> está medido sobre el HTML real, los endpoints públicos (`wp-json`, sitemaps,
> `robots.txt`) y las cabeceras HTTP. Lo marcado 🔸 sigue siendo inferencia.
> Sustituye a `analisis-sitio-actual.md`, que fue reconstruido desde índices de
> buscador y contenía errores (ver §1).

---

## 1. Correcciones al análisis preliminar

El preliminar se armó desde resultados de buscador desactualizados. Cuatro de sus
hallazgos no se sostienen contra el sitio real:

| Hallazgo preliminar | Realidad verificada |
|---|---|
| 🚩 "Duplicación crítica de rutas `/tienda/*` vs `/servicios/*`" | **Ya resuelto.** `/tienda/`, `/tienda/catalogo-virtual/` y `/tienda/logo-profesional/` devuelven **301** a su equivalente en `/servicios/`. El índice del buscador mostraba URLs viejas. |
| "Falta portafolio / casos con nombre propio — el vacío más caro" | **Existe** `/casos-de-exito/`, con 4 clientes identificados: 4Bellú (Body Shapers), Colorado Hardwood Design, Jhoana Pérez (Psicóloga), LuzMa (Uniformes y dotaciones). Sigue sin métricas. |
| "Falta el escalón de entrada y el de arriba (salta de $2.4M a $6M)" | **Falso.** Hay 17 productos desde **$220.000** hasta **$6.000.000**, en 5 categorías. El catálogo real es mucho más amplio que los 3 productos indexados. |
| "Faltan páginas por industria/vertical" | **Parcialmente falso.** Hay un vertical hotelero en marcha: `/trifecta-hotelera/`, `/plan-hotelero/`, `/datos-hoteles/` y el producto *Página Web Hotelera* ($1.500.000). |

Se mantienen, confirmados con datos: blog abandonado, ausencia de métricas de
resultado, ausencia de testimonios atribuidos, ausencia de datos legales, y el
descuento permanente.

---

## 2. Stack técnico real

| Capa | Valor |
|---|---|
| Servidor | LiteSpeed (HTTP/2, HTTP/3 vía `alt-svc`) |
| CMS | WordPress **7.1.2** |
| E-commerce | WooCommerce **11.1.2** |
| Constructor | Elementor **4.3.3** + Elementor Pro **3.35.1** |
| Tema | `hello-elementor` 3.4.6 |
| SEO | Yoast SEO |
| Píxeles | PixelYourSite Pro → GTM `GTM-K8CB46DT` |
| WhatsApp | plugin `oneclick-whatsapp-order` 1.1.2 |
| Anti-spam | Google reCAPTCHA |
| Idioma | `lang="es-CO"` ✔ |
| Tipografías | **Barlow** + **Blinker**, auto-hospedadas ✔ |

Nota: la hipótesis 🔸 del preliminar (WordPress + WooCommerce) era correcta.

**Lo que está bien hecho:** tema mínimo en vez de uno pesado, fuentes servidas
localmente (sin llamadas a Google Fonts, mejor para privacidad y para LCP),
compresión activa, reCAPTCHA en formularios, 301 correctos en la migración de
`/tienda/`, y **todas las imágenes tienen `alt`** (48/48).

---

## 3. Performance — el problema más caro

### 3.1 Sin caché de página

```
cache-control: no-store, no-cache, must-revalidate
set-cookie: PHPSESSID=...
```

Cada visita ejecuta PHP completo. **No hay caché de página activa** a pesar de
correr sobre LiteSpeed (no se detecta LiteSpeed Cache). Resultado medido:

| Ruta | TTFB | Peso HTML |
|---|---:|---:|
| `/` | **2.59 s** | 323 KB |
| `/servicios/` | **3.11 s** | 411 KB |
| `/servicios/tienda-avanzada/` | **2.29 s** | 265 KB |
| `/casos-de-exito/` | 1.48 s | 229 KB |
| `/contacto/` | 1.52 s | 145 KB |
| `/blog/` | 1.46 s | 125 KB |

Un TTFB de 2.5–3.1 s consume solo en espera de servidor todo el presupuesto de
un LCP "bueno" (2.5 s). **Este es el hallazgo de mayor impacto y el más barato
de arreglar.** Causa 🔸: WooCommerce fuerza `no-cache` por sesión en todo el
sitio, incluidas las páginas sin carrito.

### 3.2 Cascada de assets

En la home: **66 hojas de estilo** y **31 scripts**. De las CSS, **25 son
`post-*.css` de Elementor** (una por plantilla/popup) servidas sueltas.

### 3.3 Imágenes

| Métrica | Valor |
|---|---|
| Formato | **0 WebP / 0 AVIF** — 20 JPG, 16 PNG, 11 SVG |
| Sin `width`/`height` | **30 de 48** → riesgo directo de CLS |
| Con `loading="lazy"` | solo 11 de 48 |
| Con `srcset` | solo 14 de 48 |
| Peso (25 imágenes únicas) | **1.51 MB** |

Las imágenes de galería pesan 90–107 KB cada una en JPG. Convertidas a WebP/AVIF
con `srcset` real, el ahorro esperado es del 60–70%.

### 3.4 Compresión ✔

323 KB → **64 KB gzip / 54 KB brotli**. Correcto.

---

## 4. SEO técnico

### 4.1 🚩 `/home-dani/` — duplicado de la home, indexable

| | `/` | `/home-dani/` |
|---|---|---|
| `<title>` | `DKODING: Empresa de desarrollo web ᐈ Sitios que venden` | **idéntico** |
| canonical | `https://dkoding.net/` | **`https://dkoding.net/home-dani/`** (auto-canonical) |
| `noindex` | no | **no** |
| En `page-sitemap.xml` | sí | **sí** |

Similitud de texto: **94.4%**. Es una copia de trabajo publicada que se
autocanonicaliza, es indexable y está en el sitemap: compite con la home por la
keyword principal. **Este es el duplicado real** que el preliminar atribuyó
erróneamente a `/tienda/`.

### 4.2 🚩 `robots.txt` bloquea el renderizado y las imágenes

```
Disallow: /wp-content/uploads/     ← bloquea TODAS las imágenes del sitio
Disallow: /wp-content/themes/      ← bloquea el CSS del tema
Disallow: /wp-content/plugins/     ← bloquea el CSS/JS de Elementor
Disallow: /*.js$
Disallow: /*.css$
Disallow: /*?*                     ← bloquea toda URL con parámetros
```

Tres consecuencias concretas:

1. **Google no puede renderizar las páginas.** Bloquear CSS y JS impide la
   evaluación de mobile-friendly y de layout; es una práctica que Google
   desaconseja explícitamente desde 2015.
2. **Ninguna imagen puede indexarse** en Google Images, ni usarse en rich
   results. Para una agencia que vende diseño, es un activo entero perdido.
3. `Disallow: /*?*` bloquea paginaciones, filtros y cualquier URL con UTM.

Además: **`robots.txt` no declara el sitemap** (0 líneas `Sitemap:`), y bloquea
`AhrefsBot`, `SemrushBot`, `MJ12bot`, `Baiduspider` y `Yandex` — decisión
defendible, pero también ciega la propia medición de backlinks.

### 4.3 🚩 Sin schema de producto en un catálogo de 17 productos con precio

En `/servicios/tienda-avanzada/` los tipos JSON-LD presentes son:
`WebPage`, `WebSite`, `Organization`, `BreadcrumbList`, `ImageObject`,
`ListItem`, `SearchAction`.

**`Product` = 0. `Offer` = 0.** Tampoco hay `Service`, `FAQPage`, `Review` ni
`AggregateRating` en ninguna página auditada. Sin `Product`/`Offer` no hay
precio ni disponibilidad en el resultado de búsqueda para ninguno de los 17
productos.

### 4.4 Encabezados y metadatos — estado por página

| Ruta | H1 | H2 | `<title>` (chars) | meta desc |
|---|---:|---:|---:|---|
| `/` | 1 | 34 | 54 ✔ | ✔ |
| `/servicios/` | 1 ⚠️ | 54 | 19 | ✗ |
| `/casos-de-exito/` | **0** | 21 | 24 | ✗ |
| `/nosotros/` | 1 | 24 | 18 | ✗ |
| `/nuestro-equipo/` | **0** | 33 | 24 | ✗ |
| `/contacto/` | **0** | 8 | 18 | ✗ |
| `/blog/` | 1 (`Archivos`) | 10 | 14 | ✗ |
| `/soporte/` | **0** | 5 | 27 | ✗ |
| `/plan-hotelero/` | **0** | 44 | 23 | ✗ |
| `/desarrollo-web/` | 1 | 31 | 24 | ✗ |
| `/servicios/tienda-avanzada/` | **2** | 31 | 25 | ✔ |
| `/servicios/logo-profesional/` | **2** | 31 | 26 | ✔ |
| `/servicios/posicionamiento-en-google-seo/` | **2** | 31 | 41 | ✔ |

- **5 páginas sin H1**; **3 páginas de producto con H1 duplicado**.
- **10 de 13 páginas sin meta description** → Google improvisa el snippet.
- **Títulos cortísimos**: la mayoría es `Nombre - DKODING` (14–27 chars) contra
  los ~55 útiles. Solo la home está trabajada.
- ⚠️ `/servicios/` repite el H1 de la home (`Empresa de desarrollo web`) →
  canibalización entre las dos páginas más importantes.
- `/blog/` tiene como H1 literalmente `Archivos` (default de WordPress).

### 4.5 Taxonomía del blog

Los **5 posts cuelgan de la raíz**, no de `/blog/`:
`/importancia-de-un-buen-logo-profesional-para-tu-negocio/`,
`/crear-mi-tienda-online/`, `/impulsa-tu-negocio-con-seo-en-google/`,
`/muestra-tu-portafolio-digital-24-7/`,
`/estrategias-para-incrementar-las-ventas-por-internet/`.

El preliminar lo detectó en un solo post; aplica a todos.

---

## 5. Catálogo y precios reales

17 productos WooCommerce, 5 categorías (vía `wc/store/v1/products`):

| Producto | Precio | Tachado | Dto. real | Categoría |
|---|---:|---:|---:|---|
| Tienda Avanzada | 6.000.000 | 6.600.000 | 9.1% | Tiendas y catálogos |
| Página Corporativa | 6.000.000 | 6.600.000 | 9.1% | Servicios Web |
| Tienda Virtual | 3.500.000 | 3.850.000 | 9.1% | Tiendas y catálogos |
| Página Empresarial | 2.800.000 | 3.080.000 | 9.1% | Servicios Web |
| Catálogo Virtual | 2.400.000 | 2.640.000 | 9.1% | Tiendas y catálogos |
| Desarrollo de Marca | 2.250.000 | 2.500.000 | 10.0% | Logos y Marcas |
| Página Comercial | 1.800.000 | 1.980.000 | 9.1% | Servicios Web |
| Página Web Hotelera | 1.500.000 | 1.650.000 | 9.1% | Servicios Web |
| Logo Profesional | 1.300.000 | 1.430.000 | 9.1% | Logos y Marcas |
| Página Web Personal | 1.300.000 | 1.430.000 | 9.1% | Servicios Web |
| Manual de Identidad | 1.200.000 | 1.320.000 | 9.1% | Logos y Marcas |
| Logo Sencillo | 700.000 | 770.000 | 9.1% | Logos y Marcas |
| Administración de RRSS | 600.000 | 660.000 | 9.1% | Marketing |
| Anuncios en META ADS | 500.000 | 550.000 | 9.1% | Marketing |
| Posicionamiento en Google — SEO | 500.000 | 550.000 | 9.1% | Marketing |
| **Anuncios en Google ADS** | 500.000 | 500.000 | **0%** | Marketing |
| **Publicidad (Papelería)** | 220.000 | 220.000 | **0%** | Diseño Publicitario |

### 🚩 El sitio anuncia "15 %OFF" y aplica 9.1%

La insignia de promoción del sitio dice **15 %OFF**. El descuento real es
**9.1%** en 14 productos, **10.0%** en uno y **0%** en dos. La cifra anunciada
no coincide con ninguna del catálogo. Sumado a que el precio tachado es
permanente, esto es exposición innecesaria frente al Estatuto del Consumidor
colombiano (Ley 1480 de 2011, publicidad engañosa). **Decidir: o la promoción es
real y con vigencia, o se retira el tachado.**

### Lecturas de catálogo

1. **Los retainers se venden como productos de un solo pago.** SEO a $500.000 y
   Administración de RRSS a $600.000 entran al carrito como compra única, sin
   recurrencia ni ciclo de facturación. Es el problema estructural del catálogo:
   un servicio mensual modelado como un producto de góndola.
2. **Dos productos empatados en el tope** ($6.000.000: Tienda Avanzada y Página
   Corporativa) sin diferenciación de precio → el cliente no puede decidir por
   señal de precio.
3. **La escalera de precios sí existe** (220K → 6M) pero no está narrada: el
   preliminar no la vio porque solo 3 productos estaban indexados. El sitio
   nuevo debe exponerla como ruta, no como listado plano.

---

## 6. Diseño y accesibilidad

### Paleta detectada

Morado de marca: **`#c755ef`** (40 apariciones), con `#6d00c2`, `#a255ef`,
`#9b51e0`. El resto de hex encontrados (`#ff6900`, `#fcb900`, `#7bdcb5`,
`#8ed1fc`, `#0693e3`, `#abb8c3`, `#cf2e2e`, `#f78da7`, `#32373c`) son **la
paleta por defecto de Gutenberg**, no decisiones de marca — ruido heredado.

### 🚩 Contraste: el morado de marca falla WCAG AA

| Combinación | Ratio | Veredicto |
|---|---:|---|
| `#c755ef` sobre blanco | **3.52:1** | ✗ falla AA (requiere 4.5:1) |
| blanco sobre `#c755ef` | **3.52:1** | ✗ falla AA — afecta a los botones |
| `#a255ef` sobre blanco | 4.13:1 | ✗ falla AA |
| `#9b51e0` sobre blanco | 4.52:1 | ✔ justo |
| **`#6d00c2` sobre blanco** | **8.64:1** | ✔ cómodo |
| `#0c0c0c` sobre blanco | 19.56:1 | ✔ |

El color principal de marca no es usable para texto normal ni para texto sobre
botón. **Recomendación concreta:** conservar `#c755ef` como acento decorativo y
para titulares grandes (≥24px, donde el mínimo es 3:1), y adoptar **`#6d00c2`**
como morado accesible para texto, enlaces y fondo de botón. No cambia la
identidad; la hace cumplir.

---

## 7. Conversión

### 7.1 🐛 Defecto en el formulario de `/contacto/`

Los nombres de campo no corresponden a su contenido:

| Campo | `name` | `type` | Placeholder |
|---|---|---|---|
| Nombre | `form_fields[name]` | text | Escriba su nombre |
| **Teléfono** | **`form_fields[email]`** | tel | Escriba su teléfono |
| **Correo** | **`form_fields[field_eaf3911]`** | email | Escriba su correo |
| Servicios (9 checkbox) | `form_fields[field_4dcae92][]` | checkbox | — |
| Mensaje | `form_fields[message]` | textarea | Escriba los detalles |

El campo de **teléfono** se llama `email`, y el **correo** real va en un ID
autogenerado. En la notificación, en la exportación y en cualquier integración
con CRM el teléfono llega etiquetado como correo. Hay que verificar si los leads
históricos están mal mapeados. Los IDs autogenerados (`field_eaf3911`,
`field_4dcae92`) además impiden medir qué servicio se marca más.

Correcto: 3 campos obligatorios, 14 `<label>`, reCAPTCHA activo.

### 7.2 WhatsApp — ya está bien resuelto

24 referencias en la home, con mensaje precargado por servicio:

```
api.whatsapp.com/send/?phone=573002867104&text=Hola quiero atención personalizada
api.whatsapp.com/send/?phone=573002867104&text=Hola, me gustaría más información
api.whatsapp.com/send/?phone=573002867104&text=Hola, me gustaría solicitar un servicio de Diseño de Ux
```

La recomendación del preliminar ya está implementada. **Conservarla tal cual.**

### 7.3 🐛 Sin `tel:` en ninguna página

El teléfono **+57 300 286 7104** aparece como texto, pero no hay un solo enlace
`tel:` (0 en home, 0 en páginas de producto). En móvil no se puede llamar
tocando. Solo hay `mailto:info@dkoding.net`.

### 7.4 Sin datos legales

No hay NIT, razón social ni dirección física en ninguna página auditada. Para un
ticket de $6.000.000 pagado por carrito, es una fricción de confianza evitable —
y en Colombia el e-commerce tiene deberes de información al consumidor.

---

## 8. Contenido

### 8.1 Blog: 2 años y 3 meses sin publicar

| Publicado | Modificado | Título |
|---|---|---|
| 2024-07-05 | 2024-07-08 | Importancia de un Buen Logo Profesional para tu Negocio |
| 2024-07-05 | 2024-07-08 | Muestra tu portafolio digital 24/7 |
| 2024-07-05 | 2024-07-08 | Impulsa tu Negocio con SEO en Google |
| 2024-07-05 | 2024-07-08 | Crear mi tienda online |
| 2024-06-17 | 2024-07-08 | Estrategias para incrementar las ventas por internet |

5 posts, todos de jun–jul 2024, sin un solo cambio desde el 8 de julio de 2024.
Con fechas visibles, es una señal activa de inactividad justo donde el prospecto
evalúa si la agencia sigue operando.

### 8.2 🐛 El widget de testimonios no contiene testimonios

Hay 17 bloques `elementor-testimonial` en la home, pero su contenido es copy
institucional de la propia DKODING ("La misión de dkoding, es proporcionar una
solución apropiada…", "Un paso a la excelencia, es un camino…"). Son misión y
visión presentados con el formato visual de un testimonio. **Sin testimonios
atribuidos reales** (nombre, cargo, empresa, foto). El hallazgo del preliminar
se confirma y es peor de lo que parecía: el formato promete prueba social y
entrega auto-descripción.

### 8.3 `/casos-de-exito/` existe pero no prueba el claim

4 clientes con nombre y servicio prestado — un activo real que el preliminar no
vio. Pero: **0 H1**, sin meta description, y **sin una sola métrica**. Para un
sitio cuyo claim es "Sitios que venden", los casos dicen *qué se hizo*, nunca
*qué resultó*. El vacío no es el portafolio: es el número.

### 8.4 Páginas de trabajo publicadas e indexables

| Ruta | Qué es | Problema |
|---|---|---|
| `/home-dani/` | copia 94.4% de la home | duplicado indexable (§4.1) |
| `/desarrollo-web/` | contiene "Próximamente" y "Suscríbete y sé el primero en verlo" | página sin terminar, pública |
| `/datos-hoteles/` | formulario de onboarding ("Datos de su Hotel") | formulario interno indexable; debería ser `noindex` |
| `/dkard/` | demo del producto Dkard.co con persona de muestra ("Johana Cortés, Trabajadora Social") | demo indexable sin marcar como demo |
| `/dkarta/` | demo de carta digital ("LF Burguer", precios $29.900) | ídem; sus precios pueden confundirse con los de DKODING |
| `/plan-hotelero/` | **el `<title>` dice "Plan Hotelero" pero el H1 dice "Impulsa Tu Presencia Digital con Dkard.co"** | contenido cruzado entre dos productos |

Ninguna lleva `noindex`. Todas están en `page-sitemap.xml`.

### 8.5 🐛 Año del footer congelado en 2024

El footer dice `Red LATAM DKODING 2024 - Derechos Reservados`, hardcodeado, en un
sitio visto en 2026. Es lo primero que lee alguien que baja a buscar datos de la
empresa.

---

## 9. Lista de defectos, por impacto

### Bloqueantes (SEO/negocio, arreglables sin rediseño)

1. **Activar caché de página.** TTFB 2.5–3.1 s sin caché sobre LiteSpeed.
   Excluir solo carrito/checkout/mi-cuenta. Mayor ganancia por menor esfuerzo.
2. **Reescribir `robots.txt`.** Quitar el bloqueo de `/wp-content/uploads/`,
   `/themes/`, `/plugins/`, `/*.js$`, `/*.css$` y `/*?*`. Añadir
   `Sitemap: https://dkoding.net/sitemap_index.xml`.
3. **Resolver `/home-dani/`**: despublicar, o `noindex` + canonical a `/`, y
   sacarla del sitemap.
4. **Alinear la promoción.** "15 %OFF" vs 9.1% real. Riesgo legal (Ley 1480).
5. **Emitir schema `Product` + `Offer`** en las 17 fichas. Hoy no hay ninguno.
6. **Corregir el mapeo del formulario** (`form_fields[email]` = teléfono) y
   revisar los leads históricos.

### Altos

7. H1 ausente en 5 páginas; H1 duplicado en 3 fichas de producto.
8. `/servicios/` canibaliza el H1 de la home.
9. Meta descriptions ausentes en 10 de 13 páginas; títulos de 14–27 chars.
10. `noindex` en `/datos-hoteles/`; marcar `/dkard/` y `/dkarta/` como demos.
11. Corregir el contenido cruzado de `/plan-hotelero/`.
12. Terminar o despublicar `/desarrollo-web/`.
13. Convertir imágenes a WebP/AVIF; añadir `width`/`height` a las 30 que faltan;
    extender `lazy` y `srcset`.
14. Año del footer dinámico.
15. Enlaces `tel:` en teléfono.

### Medios

16. Consolidar las 66 CSS / 31 JS (combinar los 25 `post-*.css`).
17. Adoptar `#6d00c2` como morado accesible; limpiar la paleta Gutenberg heredada.
18. Mover los 5 posts a `/blog/…` con 301.
19. Publicar NIT, razón social y dirección.
20. Modelar los retainers (SEO, RRSS, pauta) como suscripción, no como compra única.
21. Sustituir el copy institucional del widget de testimonios por testimonios reales.
22. Añadir métricas a los 4 casos de éxito.
23. Reactivar o retirar el blog.

---

## 10. Qué conservar en el sitio nuevo

No todo hay que rehacerlo. Estos son activos reales, verificados:

- **El claim "Sitios que venden"** y el eje de resultado comercial sobre estética.
- **WhatsApp con mensaje precargado por servicio** — ya bien implementado.
- **Los 4 casos de éxito con cliente identificado** — falta el número, no el caso.
- **La escalera de precios de 220K a 6M** — existe; hay que narrarla.
- **El vertical hotelero** (Trifecta Hotelera + Página Web Hotelera) — es la
  apuesta de nicho más avanzada y la que mejor SEO de intención puede capturar.
- **Los productos Dkard / Dkarta** — perfil digital y carta digital: ticket bajo,
  recurrente y escalable. Hoy están escondidos como demos sueltas.
- **Fuentes auto-hospedadas** (Barlow + Blinker), `alt` en el 100% de imágenes,
  reCAPTCHA, los 301 de `/tienda/`, `lang="es-CO"`.
- **El sistema de tickets en `/soporte/`** — prueba de post-venta, hoy sin visibilidad.

---

## 11. Implicaciones para el sitio nuevo

1. **El cuello de botella es infraestructura, no diseño.** Un rediseño sobre la
   misma pila sin caché arrastra el TTFB de 2.5 s. Decidir arquitectura antes
   que estética.
2. **Separar los dos negocios.** Productos empaquetados → checkout. Retainers
   (SEO, RRSS, pauta) → suscripción o consulta. Hoy comparten carrito y no
   deberían.
3. **Una sola URL canónica por servicio, y ninguna página de trabajo publicada.**
   El sitio actual tiene 6 páginas de borrador/demo indexables; eso es lo que
   generó el ruido que el análisis preliminar leyó mal.
4. **El claim exige números.** "Sitios que venden" con casos sin métricas es una
   promesa sin respaldo. Es el trabajo de contenido más urgente, y depende de
   datos que hay que pedir a los 4 clientes existentes.
5. **Promoción: decidir de una vez.** O descuentos reales con vigencia, o precios
   limpios sin tachado.
6. **Accesibilidad desde el token, no al final.** Fijar `#6d00c2` como color de
   texto/acción en el sistema de diseño evita reauditar contraste después.

---

## 12. Método y reproducibilidad

Todo lo anterior se obtuvo de fuentes públicas:

| Dato | Fuente |
|---|---|
| Stack, versiones | `<meta name="generator">`, rutas de assets, cabecera `server` |
| Catálogo y precios | `GET /wp-json/wc/store/v1/products?per_page=100` |
| Fechas del blog | `GET /wp-json/wp/v2/posts` |
| Inventario de URLs | `sitemap_index.xml` → `page-`, `product-`, `post-sitemap.xml` |
| Redirecciones | códigos HTTP + `Location` por ruta |
| Performance | `curl -w` (TTFB, `size_download`) y pesos de imagen reales |
| Compresión | `size_download` con `Accept-Encoding: gzip` / `br` |
| Schema | conteo de `"@type"` en el JSON-LD de cada página |
| Contraste | ratio WCAG 2.1 calculado sobre luminancia relativa |
| Duplicado `/home-dani/` | `difflib.SequenceMatcher` sobre el texto sin markup |

**Pendiente, requiere acceso que no tengo:** Core Web Vitals de campo (CrUX /
Search Console), datos de analítica de GTM, tasa de conversión del formulario,
y el panel de WordPress para confirmar plugins de caché/optimización inactivos.
