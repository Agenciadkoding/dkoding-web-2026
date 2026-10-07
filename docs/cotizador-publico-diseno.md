# Cotizador público modular por horas — diseño v2

> Fecha: 2026-10-07. Artboards `Cotizador` (1440, interactivo) y `Tiquete` (390, resumen
> móvil / plantilla del PDF) en el lienzo de la landing. Reemplaza el cotizador por
> paquetes de la v1. Aplica `cotizador-por-hora.md` (fórmula) y
> `cotizador-catalogo-servicios.md` (25 bloques → primitivas, familias, reglas, §13 lectura
> del mockup de DKODING).

## Qué hace

| Elemento | Cómo quedó | Fuente |
|---|---|---|
| Pestañas de familia (multi-selección) | Sitio web o tienda · Marca · Marketing y redes · Impresos · App o plataforma · Mantenimiento; cada una abre su sección y suma al mismo resumen | catálogo §9, mockup |
| Tipo de sitio | 5 tarjetas (landing, corporativo, catálogo, tienda, plataforma) que marcan los módulos base como «Incluido» (bloqueados) | catálogo §3 paso A |
| 25 módulos web | Seleccionados arriba (con icono de quitar) / disponibles abajo en 5 grupos; badge de horas en cada tarjeta; añadibles por módulo (hero animado, newsletter, pasarela extra…); cantidad de productos a 0,5 h | tu lista + mockup |
| Dependencias en vivo | Tienda incluye Productos; Noticias/Innovación pasan a 3 h si hay blog; Área de clientes / Comunidad comparten el área autenticada (−40 h); externas (foro, soporte) avisan «herramienta externa recomendada» | catálogo §2 |
| Nivel y tiempos | Diseño ×1,0/1,4/1,9 · contenido propio/DKODING · urgencia ×1,0/1,25/1,5 · idiomas ×1,2 | fórmula §3.3 |
| Transversales | «Incluido en todo sitio DKODING» 26 h (capacitación, soporte 3 meses, dkard, lanzamiento) + setup 16 h + dirección 12 % | catálogo §14 |
| Otras familias | Marca (8), marketing (5 proyectos + 5 mensuales), impresos (6), app (4; >160 h en modo «desde»), soporte (2 mensuales + hosting fijo) | catálogo §4–7 |
| Reglas | Web+marca −8 % marca · web+SEO on-page −30 % · ≥2 mensuales −10 % · >200 h → «desde» + sesión de alcance · mínimo 1,5 M | catálogo §10 |
| Panel fijo | Horas de proyecto, **rango mín–máx** (×0,90 / ×1,15, redondeo a 50.000), + IVA 19 %, anticipo 50 %, vigencia 15 días, mensual aparte, fecha posible de entrega (`ceil(h / capacidad)`), desglose por fase desplegable, líneas con descuentos visibles, WhatsApp libre y **PDF a cambio de datos**, vaciar con confirmación, texto exacto que se envía | fórmula §2, §4, §6 |
| Modo equipo DKODING | Tarifa/hora, capacidad semanal, descuento (tope 20 %), asesor; propuesta numerada enviada al cliente | ux-admin COT |
| Tiquete móvil | Recibo con borde dentado: número, fecha, tipo, fecha de entrega, líneas con horas e icono de quitar, rango, condiciones, CTAs | mockup §13 |

## Tarifas y horas: semilla, no publicables

Tarifa por hora y capacidad semanal son *tweaks* del artboard (60.000 COP/h y 20 h/sem por
defecto) y editables en modo equipo. Las horas por módulo son las semilla del catálogo.
La investigación lo deja claro (§14.5): **calibrar con 5 proyectos reales antes de
publicar**; con la semilla, un corporativo semi-custom sale 5–7× el precio actual.

## Pendiente de DKODING

- Horas reales por módulo y tarifa efectiva (tablero «Tarifas» del admin).
- Confirmar reglas de descuento, mínimo de proyecto, anticipo y vigencia.
- Qué bloques van con herramienta externa por defecto (foro, soporte, cursos).
- En producción: recálculo en servidor, PDF generado en servidor, lead en Payload, modo
  equipo detrás de login.
