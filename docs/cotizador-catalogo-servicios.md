# Catálogo cotizable de DKODING: bloques web, marca, marketing y demás servicios, condensados

> Fecha: 2026-10-06. Complementa `cotizador-por-hora.md` (fórmula, flujo, modelo de
> datos). Aquí se define **qué se puede añadir al cotizador y cuántas horas vale**.
> Horas y tarifas son semilla; DKODING las calibra con sus proyectos reales.

---

## 0. El principio de condensación

Los 25 bloques de la lista son **lenguaje del cliente**. Técnicamente, muchos son la
misma cosa: "Blog", "Noticias", "Eventos" y "Recursos" son una colección con listado y
detalle; "Portafolio", "Galería" y "Productos sin carrito" son una colección de medios con
filtros; "Nosotros", "Aliados" y "Trabaja con nosotros" son páginas de contenido.

Por eso el cotizador trabaja en dos capas:

```
Capa 1 · lo que el cliente elige       →  25 bloques en su idioma, con ayuda de una línea
Capa 2 · lo que se cotiza en horas     →  9 primitivas técnicas + extras por bloque
```

Resultado: el cliente ve un menú rico y familiar; la agencia mantiene **una sola tabla de
9 filas** que explica el 90 % del costo. Cambiar la hora de una primitiva recalcula todos
los bloques que la usan.

---

## 1. Primitivas técnicas web (la tabla que realmente se mantiene)

| # | Primitiva | Qué es | Horas base | UX/UI | Front | Back | Contenido | QA |
|---|---|---|---:|---:|---:|---:|---:|---:|
| P1 | **Sección estática** | Bloque de contenido en una página (texto, imagen, iconos, CTA) | 3 | 35 % | 45 % | 0 % | 10 % | 10 % |
| P2 | **Página estática** | Página completa con 4–6 secciones P1 y SEO propio | 10 | 30 % | 45 % | 0 % | 15 % | 10 % |
| P3 | **Colección con listado + detalle** | Tipo de contenido administrable (posts, casos, eventos) con índice, filtros básicos, página de detalle, sitemap y schema | 18 | 25 % | 40 % | 20 % | 5 % | 10 % |
| P4 | **Galería de medios con filtros** | Colección visual (fotos/videos/proyectos) con categorías, lightbox y carga optimizada | 14 | 30 % | 45 % | 15 % | 0 % | 10 % |
| P5 | **Formulario con lógica** | Formulario con validación, anti-spam, notificación, guardado en CMS y WhatsApp/correo | 6 | 20 % | 40 % | 30 % | 0 % | 10 % |
| P6 | **Integración de terceros** | Conectar un servicio externo (Maps, Calendly, feed social, chat, CRM, pasarela) | 8 | 10 % | 50 % | 30 % | 0 % | 10 % |
| P7 | **Catálogo transaccional** | Productos con variantes, carrito, checkout, pasarela, correos de pedido | 90 | 20 % | 30 % | 40 % | 0 % | 10 % |
| P8 | **Área autenticada** | Registro, login, recuperación, panel de usuario con datos propios | 40 | 20 % | 35 % | 35 % | 0 % | 10 % |
| P9 | **Multiidioma** | Segunda lengua: rutas, hreflang, selector, traducción de UI; el contenido se cotiza aparte | 12 | 10 % | 50 % | 25 % | 5 % | 10 % |

Transversales incluidas en todo proyecto web (no se eligen, se suman una vez):
**Setup técnico** (repo, Astro, Cloudflare, Payload, dominio, analítica, schema base,
sitemap, robots, OG): **16 h**. **Dirección de proyecto**: **12 % del total de horas**.

---

## 2. Los 25 bloques mapeados a primitivas

| Bloque (idioma cliente) | Primitivas | Horas | Extras opcionales (horas) | Grupo en el cotizador |
|---|---|---:|---|---|
| 1. Inicio | P2 + hero premium (+6) | 16 | Animación/WebGL hero +10 · video de fondo +3 | Base (siempre) |
| 2. Nosotros | P2 | 10 | Equipo con fichas (P4 ligera) +6 · línea de tiempo +4 · certificaciones +2 | Presencia |
| 3. Servicios | P2 hub + P3 (servicios como colección) | 28 | Tabla de precios/paquetes +5 · testimonios por servicio +3 · **cotizador** (ver §8) | Base (siempre) |
| 4. Productos (catálogo sin venta) | P4 + filtros avanzados (+6) | 20 | Fichas con PDF +3 · valoraciones (P5) +6 · 0,5 h por producto cargado | Comercio |
| 5. Blog o Recursos | P3 | 18 | Categorías y autores +4 · video/podcast embebido (P6) +8 · newsletter (P5+P6) +8 | Contenido |
| 6. Testimonios / Casos de éxito | P3 (casos) | 18 | Antes/después slider +4 · video testimonio +3 · schema Review +2 | Conversión |
| 7. Portafolio | P4 | 14 | Página de detalle por proyecto (→ P3) +8 · transición card→detalle +4 | Presencia |
| 8. Contacto | P2 ligera (6) + P5 + Maps (P6) | 20 | Horarios dinámicos +2 · varias sedes +4 · agenda (Calendly, P6) +8 | Base (siempre) |
| 9. FAQ | P1 ×2 + acordeón + schema FAQPage | 8 | FAQ por servicio (colección, P3) +10 | Conversión |
| 10. Tienda | P7 | 90 | Segunda pasarela +16 · envíos por zona +12 · cupones +8 · factura electrónica +20 · seguimiento de pedidos +10 | Comercio |
| 11. Área de clientes | P8 | 40 | Descarga de facturas/documentos +10 · seguimiento de proyecto +16 · tickets (→ bloque 23) | Plataforma |
| 12. Noticias / Novedades | = Blog (P3) o sección P1 si son pocas | 18 / 3 | Si ya hay blog: +3 como categoría | Contenido |
| 13. Trabaja con nosotros | P2 ligera + P3 (vacantes) + P5 (aplicación con CV) | 26 | Filtro por área +3 | Presencia |
| 14. Aliados / Partners | P1 (logos marquee) | 3 | Página por aliado (P3) +15 | Presencia |
| 15. Políticas y avisos legales | P2 ×3 + banner cookies | 14 | Redacción legal (externa) | Base (siempre) |
| 16. Comunidad / Foro | P8 + P3 + moderación | 70 | Se recomienda herramienta externa (Discord, Circle) vía P6 +8 | Plataforma |
| 17. Eventos | P3 con fecha + calendario | 22 | Inscripción (P5) +6 · pago (P6 pasarela) +12 | Contenido |
| 18. Descargas | P4 (archivos) + P5 (gate con correo) | 18 | Sin gate: 12 | Conversión |
| 19. Redes sociales | P1 (iconos/compartir) + feed en vivo (P6) | 11 | Solo iconos: 3 | Presencia |
| 20. Galería | P4 | 14 | Álbumes anidados +4 | Presencia |
| 21. Educación / Capacitación | P3 (cursos) + P5 (inscripción) + P6 (pago) | 32 | Área de alumno (P8) +40 · LMS externo (P6) +8 | Plataforma |
| 22. Donaciones | P2 ligera + P6 (pasarela donación) + P1 impacto | 17 | Recurrentes +8 | Conversión |
| 23. Soporte técnico | P6 (tickets externos: Freshdesk, Crisp) + P2 ayuda | 18 | Centro de ayuda propio (P3) +18 · chat en vivo (P6) +4 | Plataforma |
| 24. Innovación / Investigación | = Blog con categoría (P3) | 18 / 3 | Si ya hay blog: +3 | Contenido |
| 25. Idiomas | P9 | 12 | +1,5 h traducción por página o entrada | Transversal |

Dependencias que el cotizador aplica solo:
- Tienda **incluye** Productos (no se cobran ambos).
- Área de clientes, Comunidad y Educación con área de alumno **comparten** P8 (se cobra una vez).
- Noticias e Innovación con Blog ya elegido pasan a +3 h cada uno.
- Idiomas multiplica el contenido elegido (×1,2 a 2 idiomas, ×1,35 a 3+).
- Comunidad, Soporte y Educación muestran la nota "recomendamos herramienta externa
  integrada" y la opción de cotizar la versión propia.

---

## 3. Cómo se presenta en el cotizador web (condensado)

En vez de 25 casillas, el cliente ve **3 pasos**:

**Paso A · Tipo de sitio** (elige uno; define los bloques base incluidos)

| Tipo | Incluye | Horas base |
|---|---|---:|
| Landing page | Inicio premium + Contacto + Legales | 50 |
| Sitio corporativo | + Nosotros + Servicios + Casos/Portafolio + FAQ | 110 |
| Catálogo virtual | Corporativo + Productos sin venta | 130 |
| Tienda online | Corporativo + Tienda | 200 |
| Plataforma / portal | Corporativo + Área de clientes | 150 |

**Paso B · Bloques añadibles** (multi-select, agrupados en 5 pestañas con ayuda de una línea)

| Grupo | Bloques |
|---|---|
| Presencia | Nosotros/Equipo · Portafolio · Galería · Aliados · Trabaja con nosotros · Redes |
| Contenido | Blog/Recursos · Noticias · Eventos · Innovación |
| Conversión | Casos de éxito · FAQ · Descargas · Donaciones · Cotizador en línea |
| Comercio | Productos · Tienda · Extras de tienda |
| Plataforma | Área de clientes · Soporte · Educación · Comunidad · Idiomas |

**Paso C · Nivel y tiempos** (diseño: sistema/semi-custom/custom · contenido: propio/DKODING · urgencia).

El panel lateral muestra horas y rango en vivo. Los bloques ya incluidos por el tipo de
sitio aparecen marcados y bloqueados ("incluido").

---

## 4. Catálogo de Marca e Identidad

Primitivas de marca: **Investigación** (brief, benchmark, moodboard), **Concepto**
(propuestas), **Desarrollo** (vectorización, variantes, color, tipografía), **Aplicaciones**
(piezas), **Documentación** (manual). Rol dominante: UX/UI-diseño 70 %, estrategia 15 %,
contenido 15 %.

| Producto | Incluye | Horas | Añadibles (horas) |
|---|---|---:|---|
| Logo sencillo | 1 propuesta, 2 rondas, archivos finales | 12 | Propuesta extra +4 · ronda extra +2 |
| Logo profesional | Investigación, 3 propuestas, 3 rondas, versiones (horizontal, vertical, isotipo, negativo), 80+ formatos | 32 | Animación de logo +8 · naming +16 |
| Manual de identidad | Uso de logo, paleta, tipografía, tono, aplicaciones básicas, PDF | 24 | Manual extendido (fotografía, iconografía, motion) +16 |
| Desarrollo de marca completo | Logo profesional + manual + papelería + kit redes | 80 | Estrategia de marca (propósito, arquetipo, mensajes) +20 |
| Papelería | Tarjetas, hoja membretada, firma de correo, carpeta | 10 | Por pieza extra +2 |
| Kit de redes | Avatares, portadas, 6 plantillas de post/historia | 12 | Por plantilla extra +1,5 |
| Rebranding | Auditoría de marca actual + logo profesional + manual + migración de piezas | 70 | Plan de lanzamiento +12 |
| Naming | 20 opciones, verificación de dominio y registro, 3 finalistas | 16 | Consulta marcaria SIC (externa) |

---

## 5. Catálogo de Marketing Digital

Aquí conviven **proyectos** (una vez) y **retainers** (mensual). El cotizador los muestra
en dos columnas: "Inversión inicial" y "Mensual".

### 5.1 SEO y GEO

| Servicio | Tipo | Horas | Nota |
|---|---|---:|---|
| Auditoría SEO + visibilidad en IA | Proyecto | 24 | +8 h por cada 10 páginas adicionales |
| SEO on-page inicial (hasta 10 páginas) | Proyecto | 20 | Títulos, metas, schema, enlazado, velocidad |
| SEO local (Google Business Profile, NAP, reseñas) | Proyecto | 12 | +4 h por sede extra |
| SEO para IA / GEO (entidad, FAQ, llms.txt, citas, panel de prompts) | Proyecto | 16 | Requiere SEO on-page |
| Plan de contenidos SEO | Retainer | 8 + 4/artículo | Tiers: 2 · 4 · 8 artículos/mes |
| Linkbuilding | Retainer | 6/mes + costo de medios | Medios como extra fijo |
| Monitoreo y reporte mensual (CWV, posiciones, GEO, leads) | Retainer | 4/mes | Incluido en cualquier retainer SEO |

### 5.2 Redes sociales

| Tier | Incluye | Horas/mes |
|---|---|---:|
| Básico | 8 posts + 8 historias, calendario, diseño, copy, programación | 20 |
| Crecimiento | 12 posts + 16 historias + 4 reels editados + community 3×/semana | 36 |
| Intensivo | 20 posts + 30 historias + 8 reels + community diario + informe | 60 |
| Añadibles | Sesión de fotos/video (externo + 4 h dirección) · guion de reel +1,5 h · red extra +20 % |

### 5.3 Pauta digital

| Servicio | Tipo | Horas | Nota |
|---|---|---:|---|
| Setup de campañas (píxel, conversiones, audiencias, estructura) | Proyecto | 12 | Por plataforma (Google, Meta, TikTok) |
| Gestión mensual | Retainer | 10/mes por plataforma | Fee alternativo: 15 % del presupuesto de pauta, mínimo COP 800.000 |
| Creatividades | Retainer | 1,5 h por pieza | Packs de 6 · 12 · 20 |
| Landing de campaña | Proyecto | 32 | = Landing page del catálogo web |

### 5.4 Email marketing y automatización

| Servicio | Tipo | Horas |
|---|---|---:|
| Setup (plataforma, dominio, plantillas, segmentos) | Proyecto | 10 |
| Flujo automatizado (bienvenida, carrito abandonado, post-compra) | Proyecto | 6 por flujo |
| Newsletter mensual | Retainer | 3 por envío |

---

## 6. Catálogo de Publicidad Impresa y Carteles Digitales

| Producto | Horas | Nota |
|---|---:|---|
| Pieza impresa simple (flyer, afiche, tarjeta) | 3 | Impresión como extra fijo externo |
| Pieza compleja (brochure 6+ páginas, catálogo impreso) | 12 + 1/página | |
| Señalética / aviso exterior | 6 | Producción externa |
| Cartel digital (pantalla, loop animado 15–30 s) | 6 | Por pieza; pack de 5 = 25 h |
| Plantilla editable para el cliente (Canva) | 4 | |

---

## 7. Catálogo de UX/UI, Aplicaciones y Soporte

| Servicio | Cómo se cotiza | Horas |
|---|---|---:|
| Auditoría UX de producto existente | Proyecto | 16 |
| Diseño UX/UI de app o plataforma | **Discovery pagado primero** (16 h) y luego por pantallas: 4 h por pantalla simple, 8 por compleja | 16 + pantallas |
| Prototipo navegable | Proyecto | 12 |
| Aplicación web / móvil | Solo tras discovery; el cotizador muestra "desde" el mínimo (160 h) y agenda llamada | ≥ 160 |
| Mantenimiento web | Retainer: actualizaciones, backups, monitoreo, 2 h de cambios | 8/mes |
| Soporte con tickets | Retainer: SLA 24 h, 4 h de cambios | 12/mes |
| Hosting + correo gestionado | Extra fijo anual | — |

Regla: todo lo que supere **200 h estimadas** o tenga app nativa, integraciones a
medida con ERP/CRM o requisitos legales especiales se cotiza como **"desde"** y el CTA
cambia a "Agendar sesión de alcance". El cotizador no debe prometer precio cerrado ahí.

---

## 8. El cotizador como bloque vendible

El propio cotizador en línea es un bloque que DKODING puede vender a sus clientes
(ferreterías, clínicas, constructoras lo necesitan):

| Versión | Incluye | Horas |
|---|---|---:|
| Cotizador simple | 1 paso, 5–8 opciones, total en vivo, envío por WhatsApp | 16 |
| Cotizador por pasos | 3–5 pasos, tablas administrables, rango, PDF, lead en CMS | 40 |
| Cotizador con catálogo | Lo anterior + productos/variantes desde el CMS, reglas de dependencia | 64 |

---

## 9. Vista condensada: una sola pantalla de entrada para todos los servicios

```
¿Qué necesitas hoy?  (puedes marcar varios)

[ 🌐 Sitio web o tienda ]  [ ✦ Marca e identidad ]  [ 📣 Marketing y redes ]
[ 🖨 Impresos y carteles ]  [ 📱 App o plataforma ]  [ 🛠 Mantenimiento y soporte ]
```

Cada familia marcada abre **2–3 pasos propios** (los de §3 para web; tier para redes;
producto + añadibles para marca, etc.). El resultado es **un solo resumen** con:

- Inversión inicial (proyectos) en rango mín–máx.
- Mensual (retainers) en rango.
- Horas totales y semanas estimadas.
- Desglose por familia y por fase.
- Un solo PDF y un solo lead.

Así el cliente que quiere "web + logo + redes" no hace tres cotizaciones, y la agencia
recibe un lead con el proyecto completo.

---

## 10. Reglas de combinación y descuentos (configurables)

| Regla | Efecto |
|---|---|
| Web + Marca juntas | −8 % en marca (investigación compartida) |
| Web + SEO on-page | SEO on-page a −30 % (se hace durante el desarrollo) |
| Dos o más retainers | −10 % en el mensual |
| Retainer anual pagado por adelantado | −15 % |
| Proyecto > 200 h | Pasa a "desde" + agenda |
| Total < mínimo (COP 1.500.000) | Se muestra el mínimo con explicación |

Los descuentos se muestran como línea en el resumen, nunca ocultos en el precio.

---

## 11. Semilla para Payload (`pricing_version`)

```yaml
version: 2026-10
moneda: COP
iva_pct: 19
buffer_pct: 15
min_proyecto: 1500000
redondeo: 50000
vigencia_dias: 15
anticipo_pct: 50
direccion_proyecto_pct: 12
setup_web_horas: 16

roles:
  estrategia: 180000
  uxui: 140000
  front: 150000
  back: 160000
  contenido: 110000
  qa: 100000

primitivas:
  P1: { nombre: Sección estática, horas: 3,  split: { uxui: .35, front: .45, contenido: .10, qa: .10 } }
  P2: { nombre: Página estática,  horas: 10, split: { uxui: .30, front: .45, contenido: .15, qa: .10 } }
  P3: { nombre: Colección,        horas: 18, split: { uxui: .25, front: .40, back: .20, contenido: .05, qa: .10 } }
  P4: { nombre: Galería,          horas: 14, split: { uxui: .30, front: .45, back: .15, qa: .10 } }
  P5: { nombre: Formulario,       horas: 6,  split: { uxui: .20, front: .40, back: .30, qa: .10 } }
  P6: { nombre: Integración,      horas: 8,  split: { uxui: .10, front: .50, back: .30, qa: .10 } }
  P7: { nombre: Catálogo transaccional, horas: 90, split: { uxui: .20, front: .30, back: .40, qa: .10 } }
  P8: { nombre: Área autenticada, horas: 40, split: { uxui: .20, front: .35, back: .35, qa: .10 } }
  P9: { nombre: Multiidioma,      horas: 12, split: { uxui: .10, front: .50, back: .25, contenido: .05, qa: .10 } }

bloques_web:
  - { slug: inicio,      nombre: Inicio, primitivas: [P2], extra_horas: 6, grupo: base, siempre: true,
      opciones: [ { nombre: Hero animado/WebGL, horas: 10 }, { nombre: Video de fondo, horas: 3 } ] }
  - { slug: nosotros,    nombre: Nosotros, primitivas: [P2], grupo: presencia,
      opciones: [ { nombre: Equipo con fichas, horas: 6 }, { nombre: Línea de tiempo, horas: 4 } ] }
  - { slug: servicios,   nombre: Servicios, primitivas: [P2, P3], grupo: base, siempre: true,
      opciones: [ { nombre: Tabla de paquetes, horas: 5 }, { nombre: Cotizador en línea, ref: cotizador_pasos } ] }
  - { slug: productos,   nombre: Productos (catálogo), primitivas: [P4], extra_horas: 6, grupo: comercio,
      opciones: [ { nombre: Por producto cargado, horas: 0.5, tipo: cantidad } ], excluido_por: [tienda] }
  - { slug: blog,        nombre: Blog o recursos, primitivas: [P3], grupo: contenido }
  - { slug: casos,       nombre: Casos de éxito, primitivas: [P3], grupo: conversion,
      opciones: [ { nombre: Antes/después, horas: 4 } ] }
  - { slug: portafolio,  nombre: Portafolio, primitivas: [P4], grupo: presencia }
  - { slug: contacto,    nombre: Contacto, primitivas: [P5, P6], extra_horas: 6, grupo: base, siempre: true }
  - { slug: faq,         nombre: Preguntas frecuentes, primitivas: [P1, P1], extra_horas: 2, grupo: conversion }
  - { slug: tienda,      nombre: Tienda online, primitivas: [P7], grupo: comercio, incluye: [productos],
      opciones: [ { nombre: Segunda pasarela, horas: 16 }, { nombre: Envíos por zona, horas: 12 },
                  { nombre: Cupones, horas: 8 }, { nombre: Factura electrónica, horas: 20 }, { nombre: Seguimiento de pedidos, horas: 10 } ] }
  - { slug: area_clientes, nombre: Área de clientes, primitivas: [P8], grupo: plataforma, comparte: P8 }
  - { slug: noticias,    nombre: Noticias, primitivas: [P3], grupo: contenido, si_existe: { blog: 3 } }
  - { slug: empleo,      nombre: Trabaja con nosotros, primitivas: [P2, P3, P5], extra_horas: -8, grupo: presencia }
  - { slug: aliados,     nombre: Aliados, primitivas: [P1], grupo: presencia }
  - { slug: legales,     nombre: Políticas y avisos legales, primitivas: [P2, P2, P2], extra_horas: -16, grupo: base, siempre: true }
  - { slug: comunidad,   nombre: Comunidad / foro, primitivas: [P8, P3], extra_horas: 12, grupo: plataforma, comparte: P8, nota_externa: true }
  - { slug: eventos,     nombre: Eventos, primitivas: [P3], extra_horas: 4, grupo: contenido,
      opciones: [ { nombre: Inscripción, horas: 6 }, { nombre: Pago, horas: 12 } ] }
  - { slug: descargas,   nombre: Descargas, primitivas: [P4, P5], extra_horas: -2, grupo: conversion }
  - { slug: redes,       nombre: Redes sociales, primitivas: [P1, P6], grupo: presencia }
  - { slug: galeria,     nombre: Galería, primitivas: [P4], grupo: presencia }
  - { slug: educacion,   nombre: Educación / cursos, primitivas: [P3, P5, P6], grupo: plataforma,
      opciones: [ { nombre: Área de alumno, ref: P8 } ] }
  - { slug: donaciones,  nombre: Donaciones, primitivas: [P1, P6], extra_horas: 6, grupo: conversion }
  - { slug: soporte,     nombre: Soporte técnico, primitivas: [P6, P2], grupo: plataforma, nota_externa: true }
  - { slug: innovacion,  nombre: Innovación / investigación, primitivas: [P3], grupo: contenido, si_existe: { blog: 3 } }
  - { slug: idiomas,     nombre: Idiomas, primitivas: [P9], grupo: transversal, multiplica_contenido: { 2: 1.2, 3: 1.35 } }

tipos_sitio:
  landing:     { incluye: [inicio, contacto, legales], horas_ajuste: 0 }
  corporativo: { incluye: [inicio, nosotros, servicios, casos, faq, contacto, legales] }
  catalogo:    { incluye_de: corporativo, mas: [productos] }
  tienda:      { incluye_de: corporativo, mas: [tienda] }
  plataforma:  { incluye_de: corporativo, mas: [area_clientes] }

multiplicadores:
  diseno:   { sistema: 1.0, semi_custom: 1.4, custom: 1.9 }
  urgencia: { normal: 1.0, prioritario: 1.25, expres: 1.5 }
  contenido_dkoding: 1.5   # sobre las horas de contenido

familias_extra: [marca, marketing_seo, marketing_redes, marketing_pauta, email, impresos, uxui_apps, soporte]
# cada familia tiene su tabla (§4–§7) con la misma estructura: producto, horas, split, opciones, tipo (proyecto|retainer)

reglas:
  - { si: [web, marca],         descuento: { marca: 0.08 } }
  - { si: [web, seo_onpage],    descuento: { seo_onpage: 0.30 } }
  - { si: retainers >= 2,       descuento: { mensual: 0.10 } }
  - { si: horas_total > 200,    modo: desde_y_agenda }
```

---

## 12. Qué queda por decidir (DKODING)

1. Tarifas reales por rol y horas reales de los últimos 5 proyectos para calibrar P1–P9.
2. Si los retainers de redes y pauta se cotizan por horas (como aquí) o por fee fijo
   publicado. Recomiendo horas internas, fee fijo hacia afuera.
3. Umbral de "desde + agenda" (propuesto 200 h).
4. Qué bloques se ofrecen con herramienta externa por defecto (foro, soporte, cursos).

---

## 13. Lectura del mockup original de DKODING (diagrama compartido el 2026-10-06)

El mockup previo del cotizador mostraba: cabecera con pestañas por familia (Sitio web ·
SEO · Anuncios · Diseño gráfico), titular "Cotiza con precisión el costo del servicio que
necesitas", un bloque "Módulos Sitio Web" dividido en **Módulos seleccionados** y
**Módulos disponibles** (grid de tarjetas con icono, badge "+5 horas", nombre y "ver
detalles"), un **panel morado fijo** con "45 horas de desarrollo · $1.000.000 · Cotizar
por WA · Descargar PDF · Vaciar cotización", y una versión **tipo tiquete/recibo** con
borde dentado, "Posible fecha de entrega: 15 Febrero 2025" y la lista de módulos con
icono de eliminar. (La imagen llegó pegada en el chat, no como archivo; no se pudo
guardar en `img/`.)

### Qué conservar (ya está alineado con la investigación)

| Idea del mockup | Por qué funciona | Dónde queda en el diseño final |
|---|---|---|
| Badge de **horas por módulo** en cada tarjeta | Hace tangible el "cotizador por hora": el cliente entiende de dónde sale el total | Se mantiene en cada bloque de §3 Paso B; se añade el precio del módulo al pasar el cursor |
| **Seleccionados arriba, disponibles abajo** | Refuerza el compromiso progresivo: lo elegido se ve crecer | Se mantiene; en móvil, los seleccionados van al tiquete inferior |
| **Panel fijo** con horas, total y dos CTAs (WhatsApp + PDF) | Es el precio en vivo que recomienda la literatura de configuradores | Se mantiene en desktop (lateral) y como barra inferior expandible en móvil |
| **Tiquete con borde dentado** | Metáfora de recibo: concreta, memorable, muy de marca | Es la versión móvil del resumen y la plantilla del PDF |
| **Fecha posible de entrega** | Convierte horas en algo que el cliente sí entiende | Se calcula: `semanas = ceil(horas_total / capacidad_semanal)`, con capacidad semilla de 20 h/semana por proyecto; se muestra como rango de semanas y fecha estimada |
| **Pestañas por familia de servicio** | Es exactamente la entrada condensada de §9 | Se mantiene como primer paso; permite marcar varias familias |
| **Vaciar cotización** e icono de eliminar por línea | Control total sobre la selección | Se mantiene; "vaciar" pide confirmación en la propia página |

### Qué cambiar (lo que la investigación corrige)

| En el mockup | Problema | Cambio |
|---|---|---|
| Un solo grid con ~24 tarjetas iguales | Sobrecarga de decisión; el usuario no sabe por dónde empezar | Primero **Tipo de sitio** (5 opciones, §3 Paso A) que ya marca los bloques base; luego bloques añadibles en **5 pestañas** (Presencia, Contenido, Conversión, Comercio, Plataforma) |
| Total único "$1.000.000" | Un número exacto generado por la web pierde credibilidad y ata a la agencia | **Rango mín–máx** + "incluye 15 % de contingencia" |
| Sin IVA ni condiciones | Sorpresa posterior; en Colombia el IVA debe ir discriminado | Línea "+ IVA 19 %", anticipo 50 %, vigencia 15 días en panel y PDF |
| "Horas de desarrollo" | Oculta diseño, contenido, QA y dirección; parece solo programación | "Horas de proyecto" con desglose por fase al desplegar el panel |
| PDF descargable sin dejar datos | Se pierde el lead justo cuando más interesado está | El rango se ve libre; **PDF y desglose completo a cambio de nombre + WhatsApp + correo** |
| Sin nivel de diseño ni urgencia | Dos de los tres multiplicadores que más mueven el precio no existen | Paso C (sistema / semi-custom / custom · normal / prioritario / exprés) |
| Tarjetas con el mismo texto de ejemplo | Hay que escribir el nombre en idioma cliente y una línea de ayuda por bloque | Nombres y ayudas de §2; "ver detalles" abre qué incluye y qué no |
| Dependencias no visibles | El usuario puede elegir Productos y Tienda y pagar doble | Reglas de §2 aplicadas en vivo con aviso "incluido en Tienda" |

### Flujo final resultante (mockup + investigación)

```
Pestañas de familia  →  Tipo de sitio (cards)  →  Bloques añadibles en 5 grupos
(badge horas, seleccionados arriba)  →  Nivel y tiempos  →  Panel fijo con rango,
horas, semanas y fecha estimada  →  WhatsApp directo  |  Datos → PDF tiquete + lead
```

El tiquete dentado del mockup pasa a ser la identidad visual del resultado en móvil y
del PDF: mismo borde, mismo orden (resumen, fecha estimada, líneas con horas, rango,
IVA, anticipo, vigencia, número de cotización).

---

## 14. Paquetes comerciales actuales de DKODING, mapeados al catálogo

Fuente: textos de propuesta comercial compartidos el 2026-10-06 ("Sitio web profesional +
Dominio y Hosting" y "Desarrollo de marca"). Son lo que hoy se vende y lo que el cliente
ya reconoce; el cotizador los toma como **base incluida**, no como opciones.

### 14.1 "Sitio web profesional + Dominio y Hosting"

| Componente del paquete actual | Cómo entra al cotizador | Horas | Nota |
|---|---|---:|---|
| Diseño y desarrollo del sitio que refleje la identidad | = Tipo de sitio (§3 Paso A) | según tipo | Es el núcleo variable |
| Formulario de contacto + botón flotante WhatsApp + redes | Bloque Contacto (P5 + P6) + Redes (P1) | incluido en base | Ya está en "siempre" |
| Formulario de captación de datos | P5 adicional (lead magnet / suscripción) | 6 | Pasa a **incluido** en todo sitio |
| Montaje y optimización de información y recursos | Horas de contenido ya repartidas en P1–P4 | — | Si el cliente no entrega contenido → multiplicador "contenido DKODING" |
| Registro en Google (Search Console, Business Profile, Analytics) | Setup técnico transversal | incluido (16 h) | Añadir GBP al setup: +2 h |
| **Capacitación** (admin, módulos, buenas prácticas, correos, alcance futuro, grabada) | Nueva primitiva transversal **P10 Capacitación y entrega** | 6 | 2 sesiones de 1,5 h + edición de grabación + guía PDF |
| Seguridad: antivirus, antispam, reCAPTCHA | En la arquitectura nueva es **nativa** (sitio estático en Cloudflare + Turnstile + Payload con roles) | 0 extra | Se mantiene como *beneficio* en el copy, no como horas |
| Copia de seguridad entregada (Drive/USB/WeTransfer) | Export del repo + base de datos + medios, automatizable | 1 | Incluido en entrega |
| **3 meses de soporte** (dudas, montaje de contenido, soporte hosting y correos) | Nueva primitiva transversal **P11 Soporte post-lanzamiento** | 12 | 4 h/mes × 3; después pasa a retainer de mantenimiento (§7) |
| Historia de lanzamiento para redes | Pieza de redes | 1,5 | Incluido |
| Foto de perfil para redes con el sitio | Pieza de redes | 1 | Incluido |
| Tarjeta digital dkard.co | Nuevo producto **dkard** (ver §14.3) | 4 | Incluido 1 tarjeta; adicionales se cotizan |
| Dominio + hosting | Extras fijos (§3.4) | — | Año 1 incluido en el precio del paquete |

**Resultado:** el "Sitio web profesional" es el tipo **Corporativo** del cotizador con un
**paquete de entrega** fijo de **~26 h** (formulario de captación 6 + capacitación 6 +
soporte 3 meses 12 + lanzamiento en redes 2,5 + dkard 4, redondeado) que se suma una
sola vez y aparece en el tiquete como "Incluido en todo sitio DKODING". Eso mantiene la
promesa comercial actual y la hace visible como valor, no como costo oculto.

**Ajuste de copy obligatorio:** el texto actual afirma que "WordPress es el mejor gestor…".
Con la arquitectura decidida (Astro + Payload) el argumento cambia y mejora: *"Tu sitio
tiene un administrador propio, sin plugins que actualizar ni riesgo de hackeo por
terceros, y carga hasta 10 veces más rápido que un WordPress típico"*. El beneficio para
el cliente (administrar fácil, seguro, posicionar) se conserva; cambia la tecnología que
lo cumple. Ver `arquitectura-plataforma-agencia.md`.

### 14.2 "Desarrollo de marca"

El paquete actual es más amplio que el "Desarrollo de marca completo" de §4 (80 h).
Re-estimación por componente:

| Componente | Horas |
|---|---:|
| Investigación de mercado y colorimetría | 6 |
| Exploración de concepto y filosofía de marca | 6 |
| Estudio e inspiración de conceptos gráficos (moodboard) | 4 |
| Creación y selección de ícono y tipografía (3 propuestas, 3 rondas) | 20 |
| Fuente premium (licencia: extra fijo) | — |
| Manual de identidad (filosofía, tipografías, colores y degradados, aplicaciones y POP) | 16 |
| Publicidad integral: membrete, flyer, firma digital, pendón y volantes, tarjetas | 12 |
| Plantilla de diapositivas (portada, contraportada, contenido) | 5 |
| Aplicación en camisetas y lapiceros (mockups) | 3 |
| Kit de redes: foto de perfil, portada FB, diseños de post, formato historia | 8 |
| Logotipo en 500+ formatos (color, por color de marca, negro/blanco/gris, monocromático para bordado, miniatura, vertical, horizontal, con slogan, con web, con perfil, solo ícono) × JPG/PNG/SVG/PDF/AI | 10 |
| Dirección y entrega | 6 |
| **Total** | **96** |

Encaja como el nivel superior de §4 con nombre comercial propio:

| Producto (nombre comercial) | Horas | Posición en el cotizador |
|---|---:|---|
| Logo sencillo | 12 | Entrada |
| Logo profesional | 32 | Medio |
| **Desarrollo de marca** (paquete actual, 96 h) | 96 | **Recomendado**: es el ancla de valor de la familia Marca |
| Rebranding | 70 + migración | Casos con marca existente |

Añadibles que hoy no están en el paquete y conviene ofrecer: animación de logo (+8 h),
naming (+16 h), manual extendido con fotografía e iconografía (+16 h), implementación de
la firma de correo en Google Workspace/Outlook (+2 h; el texto actual la excluye
explícitamente, es una venta fácil).

### 14.3 Nuevo producto: tarjeta digital dkard.co

| Versión | Incluye | Horas |
|---|---|---:|
| dkard básica (incluida en todo sitio) | Perfil, foto, enlaces, WhatsApp, vCard descargable, QR | 4 |
| dkard equipo | 1 plantilla + N tarjetas de empleados | 6 + 0,5 por tarjeta |
| dkard con marca | Diseño sobre el manual de identidad del cliente | +3 |

Técnicamente es una colección más en Payload servida como subdominio/ruta de
`dkard.co`: un `tenant` ligero por tarjeta. Encaja en la misma plataforma sin stack nuevo.

### 14.4 Cambios a la semilla YAML (§11)

```yaml
primitivas:
  P10: { nombre: Capacitación y entrega,      horas: 6,  split: { estrategia: .50, contenido: .30, qa: .20 } }
  P11: { nombre: Soporte post-lanzamiento 3m,  horas: 12, split: { front: .50, contenido: .25, qa: .25 } }

incluido_en_todo_sitio:         # se suma una vez y se muestra como "Incluido"
  - { nombre: Formulario de captación de datos, primitiva: P5 }
  - { nombre: Registro en Google (Search Console, Analytics, Business Profile), horas: 2 }
  - { nombre: Capacitación grabada (2 sesiones), primitiva: P10 }
  - { nombre: Seguridad nativa (Cloudflare, Turnstile, roles), horas: 0, beneficio: true }
  - { nombre: Copia de seguridad entregada, horas: 1 }
  - { nombre: Soporte 3 meses, primitiva: P11 }
  - { nombre: Historia de lanzamiento + foto de perfil para redes, horas: 2.5 }
  - { nombre: Tarjeta digital dkard.co, horas: 4 }
  - { nombre: Dominio + hosting año 1, extra_fijo: 430000 }

marca:
  - { slug: logo_sencillo,     horas: 12 }
  - { slug: logo_profesional,  horas: 32 }
  - { slug: desarrollo_marca,  horas: 96, recomendado: true,
      opciones: [ { nombre: Animación de logo, horas: 8 }, { nombre: Naming, horas: 16 },
                  { nombre: Manual extendido, horas: 16 }, { nombre: Implementar firma de correo, horas: 2 } ],
      extras_fijos: [ { nombre: Licencia de fuente premium, segun_caso: true } ] }
  - { slug: rebranding,        horas: 70 }

dkard:
  - { slug: dkard_basica, horas: 4, incluida_en_sitio: true }
  - { slug: dkard_equipo, horas: 6, por_unidad: 0.5 }
  - { slug: dkard_marca,  horas_extra: 3 }
```

### 14.5 Efecto en el precio semilla del "Sitio web profesional"

> **Corrección 2026-10-06.** La primera versión de esta tabla tenía un error de cálculo
> y subestimaba los precios a menos de la mitad (decía ~13,5–17,2 M para el
> corporativo). Las cifras de abajo están recalculadas con la fórmula de
> `cotizador-por-hora.md` §2 y coinciden con el simulador del tablero «Tarifas del
> cotizador» del lienzo del admin.

Tarifas de §3.1 de `cotizador-por-hora.md` (promedio ponderado ~143.000 COP/h),
contenido del cliente, urgencia normal, extras fijos de 430.000, redondeo a 50.000:

| Proyecto | Horas | Nivel de diseño | Rango COP antes de IVA | Precio público actual | Veces |
|---|---:|---|---|---|---:|
| Esencial (sistema DKODING, menos bloques) | 64 | × 1,0 | 8,6 M – 10,9 M | Página comercial 1,8 M | 4,8–6,0 |
| Landing + incluidos | ~100 | × 1,4 | 17,9 M – 22,8 M | Página personal 1,3 M | 14–18 |
| Corporativo + incluidos | ~170 | × 1,4 | 31,2 M – 39,8 M | Página corporativa 6,0 M | 5,2–6,6 |
| Tienda + incluidos | ~270 | × 1,4 | 50,5 M – 64,4 M | Tienda avanzada 6,0 M | 8,4–10,7 |

**Lectura corregida.** La distancia no es de 3 a 5 veces sino de 5 a 18 veces. Eso dice
más del modelo de horas que del precio: los precios actuales implican una tarifa
efectiva de ~28.000 COP/h si un sitio comercial tomara 64 h, muy por debajo de la
mediana de agencias en Colombia (~USD 37/h, ver `cotizador-por-hora.md` §3.1). Lo más
probable es que los paquetes actuales se construyan en bastantes menos horas (plantillas,
tema de WordPress, contenido del cliente), así que:

1. **No publicar el cotizador con las horas semilla.** Antes hay que calibrar P1–P11 con
   las horas reales de 5 proyectos recientes (tablero «Tarifas», sección Calibración).
2. **El tier Esencial debe ser de plantilla real**: unas 20–30 h de trabajo sobre el
   sistema de diseño, para aterrizar en 1,8–3 M con una tarifa efectiva de 90–100 mil/h.
3. **El ×1,4 y el ×1,9 son para trabajo a medida** y solo deben aparecer cuando el cliente
   elige ese nivel; el cotizador público debería abrir con el nivel «Sistema DKODING»
   seleccionado.
4. Con esos ajustes el Corporativo semi-custom queda como el escalón alto que hoy no
   existe, sin espantar a quien busca la página de 1,8 M.
