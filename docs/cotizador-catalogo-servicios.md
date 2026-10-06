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
