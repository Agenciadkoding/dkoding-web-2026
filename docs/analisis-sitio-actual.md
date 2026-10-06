# Análisis del sitio actual — dkoding.net

> Fecha: 2026-10-06
> Estado: **PRELIMINAR**. Reconstruido desde índices de buscador porque el acceso
> directo al dominio está bloqueado por la política de red del entorno (ver §0).
> Todo lo marcado 🔸 es inferencia, no dato verificado.

---

## 0. Bloqueo de acceso (pendiente de resolver)

El proxy de egreso del entorno denegó el host `dkoding.net`, tanto por `curl`
como por fetch de página. Sin eso no puedo auditar: HTML real, stack técnico,
diseño, tipografías, paleta, imágenes, performance (Core Web Vitals), schema
markup, formularios ni comportamiento responsive.

**Lo verificable hoy** = arquitectura de información, servicios, precios, copy
indexado y datos de contacto. **Lo no verificable** = todo lo visual y técnico.

---

## 1. Identidad y posicionamiento

| Campo | Valor |
|---|---|
| Marca | DKODING |
| Dominio | dkoding.net |
| Título SEO home | `DKODING: Empresa de desarrollo web ᐈ Sitios que venden` |
| Claim principal | "Sitios que venden" |
| Trayectoria declarada | 12 años de experiencia |
| Idioma | Español |
| Mercado | Colombia / LATAM |

**Misión (declarada):** crear una solución real para empresas que desean tener
presencia digital y crear un sistema de ventas que permita el crecimiento del
negocio, con consultorías especializadas en el desarrollo estético y visual de
la marca, más un proceso de crecimiento en internet basado en datos.

**Visión (declarada):** ser una empresa amiga de las empresas, proyectos y
personas, generando una red de servicios y habilidades que impulse de manera
exponencial el crecimiento de los clientes.

**Equipo (declarado):** "un grupo de creativos, estrategas y desarrolladores
apasionados por transformar ideas en experiencias digitales memorables,
combinando talento, tecnología y visión para impulsar marcas que inspiran."

**Lectura:** el posicionamiento es *resultado comercial*, no *estética*. "Sitios
que venden" es un ángulo de venta, no de portafolio. Es un buen activo: el
sitio nuevo debería conservar ese eje y reforzarlo con prueba (métricas, casos),
que es justo lo que hoy no se ve.

---

## 2. Arquitectura de información

Páginas detectadas en índice:

```
/                               Home
/nosotros/                      Nosotros (misión, visión, trayectoria)
/nuestro-equipo/                Equipo
/servicios/                     Servicios (hub)
/servicios/logo-profesional/
/servicios/catalogo-virtual/
/servicios/tienda-avanzada/
/tienda/                        Tienda Avanzada  ← colisión, ver abajo
/tienda/catalogo-virtual/
/tienda/logo-profesional/
/blog/                          Blog
/impulsa-tu-negocio-con-seo-en-google/   Post suelto en raíz
/contacto/                      Contacto
/soporte/                       Ticket de Soporte
```

### 🚩 Hallazgo crítico: duplicación de rutas

Los mismos productos están indexados bajo **dos rutas distintas**:

- `/servicios/catalogo-virtual/` **y** `/tienda/catalogo-virtual/`
- `/servicios/logo-profesional/` **y** `/tienda/logo-profesional/`
- `/servicios/tienda-avanzada/` **y** `/tienda/`

Esto es contenido duplicado clásico. Divide autoridad SEO entre dos URLs,
confunde el rastreo y suele venir de migrar de "páginas" a "productos
WooCommerce" sin redirecciones. 🔸 Hipótesis: WordPress + WooCommerce.

**En el sitio nuevo: una sola URL canónica por servicio.** No negociable.

### 🚩 Hallazgo: post de blog en la raíz

`/impulsa-tu-negocio-con-seo-en-google/` cuelga de la raíz en vez de `/blog/`.
Inconsistencia de taxonomía — otra señal de estructura crecida sin plan.

---

## 3. Catálogo de servicios y precios

Precios indexados (🔸 asumo COP por el mercado y el orden de magnitud):

| Servicio | Precio | Precio tachado | Dto. |
|---|---:|---:|---:|
| Catálogo Virtual | $2.400.000 | $2.640.000 | ~9% |
| Tienda Virtual | $3.500.000 | $3.850.000 | ~9% |
| Tienda Avanzada | $6.000.000 | $6.600.000 | ~9% |

**Alcance por producto:**

- **Catálogo Virtual** — vender y recibir pedidos de servicios vía catálogo con
  listado de productos y servicios, formularios de cotización y múltiples
  opciones de contacto. *(Sin carrito ni pasarela.)*
- **Tienda Virtual** — carrito + pasarela de pagos para pedidos y pagos
  automáticos, filtros de productos y servicios, múltiples opciones de
  navegación y contacto, promociones.
- **Tienda Avanzada** — lo anterior + filtros avanzados, "vitrinas
  inteligentes", promociones.

**Otros servicios (sin precio público):**

- **Sitios Web y Landing Pages** — diseño personalizado para empresas que
  quieren expandirse digitalmente y mostrar trayectoria y solidez.
- **Logo Profesional** — más de 80 formatos de entrega; estudio de mercado del
  negocio para crear una marca única.
- **SEO / Posicionamiento** — posicionamiento orgánico, acciones mensuales
  sobre palabras clave del negocio.
- **Redes Sociales** — creación, administración y diseño; desde piezas diarias
  hasta estrategias complejas.
- **Publicidad Digital** — campañas en Google Ads.

### Lecturas

1. **El descuento ~9% permanente no es un descuento.** Un precio tachado fijo
   pierde fuerza y, en varias jurisdicciones, roza publicidad engañosa. O se
   vuelve dinámico y con vigencia real, o se elimina.
2. **Precio público en servicios de agencia es una decisión fuerte** — filtra
   leads, pero techa el ticket y invita a comparar por precio. Hay que decidir
   conscientemente si se conserva. 🔸 Alternativa: "desde $X" + configurador.
3. **Hay dos negocios mezclados**: productos empaquetados con precio (tienda) y
   servicios recurrentes sin precio (SEO, redes, pauta). El sitio actual no los
   separa bien. El nuevo debería: *productos* → checkout; *retainers* → consulta.
4. **Falta el escalón de entrada y el de arriba.** Salta de $2.4M a $6M sin
   nada antes ni después. Una landing económica y un tier enterprise/custom
   ampliarían el embudo por ambos lados.

---

## 4. Contacto y conversión

| Canal | Valor |
|---|---|
| Teléfono | +57 300 286 7104 |
| WhatsApp | +57 300 286 7104 |
| Email comercial | info@dkoding.net |
| Email soporte | soporte@dkoding.net |
| Dirección física | No publicada |
| Soporte | `/soporte/` — sistema de tickets |

**Lecturas:**

- WhatsApp es el canal real de conversión en LATAM. Debe ser persistente y con
  mensaje precargado por servicio, no un número suelto en el footer.
- **No hay dirección física ni NIT/razón social visible.** Para ticket de $6M
  eso cuesta confianza. Añadir datos legales verificables.
- Tener soporte con tickets es un activo de retención que el sitio actual
  esconde. Merece visibilidad: señal de que hay post-venta real.

---

## 5. Contenido / Blog

Artículos identificados (jun–jul 2024):

- "Importancia de un Buen Logo Profesional para tu Negocio"
- "Muestra tu portafolio digital 24/7"
- "Impulsa tu Negocio con SEO en Google"
- "Estrategias para incrementar las ventas por internet"

**Lectura:** el blog lleva **~2 años sin publicar**. Un blog muerto resta más
de lo que suma: fecha visible + contenido genérico = señal de inactividad justo
donde el cliente evalúa si la agencia sigue viva. Opciones para el sitio nuevo:
(a) reactivar con calendario real, (b) convertirlo en *casos de estudio* —
mucho más alineado con "sitios que venden", (c) retirarlo.

---

## 6. Vacíos detectados (oportunidad para el sitio nuevo)

Lo que **no encontré** en el sitio actual, y que es exactamente lo que cierra
ventas en este rubro:

1. **Portafolio / casos con nombre propio.** Hay un "clientes satisfechos"
   genérico, sin marcas, sin antes/después, sin métricas. Es el vacío más caro.
2. **Testimonios atribuidos** (nombre, cargo, empresa, foto).
3. **Resultados cuantificados.** "Sitios que venden" exige números: +X% en
   conversión, +Y leads/mes. Sin eso el claim no tiene respaldo.
4. **Proceso de trabajo** — qué pasa entre que el cliente paga y recibe.
5. **Tiempos de entrega y qué incluye/no incluye** cada paquete.
6. **FAQ** — objeciones típicas (¿quién hostea?, ¿quién es dueño del código?,
   ¿mantenimiento?, ¿y si no me gusta?).
7. **Prueba de equipo real** — `/nuestro-equipo/` existe, pero el copy indexado
   es genérico, sin personas identificables.
8. **Páginas por industria/vertical** (restaurantes, clínicas, inmobiliarias),
   que es donde está el SEO de intención comercial.

---

## 7. Pendiente de auditar (requiere desbloqueo de red)

- [ ] Stack técnico real (CMS, tema, plugins, hosting, CDN)
- [ ] Diseño: paleta, tipografías, sistema visual, uso de imagen propia vs stock
- [ ] Core Web Vitals (LCP/CLS/INP) y peso de página
- [ ] Responsive / mobile-first real
- [ ] SEO técnico: titles, metas, H1s, canonicals, hreflang, sitemap, robots
- [ ] Schema markup (Organization, Service, Product, Review, FAQ)
- [ ] Analítica y píxeles instalados
- [ ] Formularios: campos, validación, destino, anti-spam
- [ ] Accesibilidad (contraste, foco, alt, navegación por teclado)
- [ ] Inventario completo de copy e imágenes reutilizables
