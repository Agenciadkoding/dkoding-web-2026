# Cotizador público — diseño v1

> Fecha: 2026-10-07. Artboard `Cotizador` en el lienzo de diseño. Usuarios: clientes
> interesados **y** el equipo comercial de DKODING (mismo catálogo, misma herramienta).

## Principios

1. **Un solo catálogo, el real.** Los 17 productos del Store API con sus precios públicos,
   agrupados: base del proyecto (8), marca (4), marketing mensual (4), papelería (1). Los
   precios viven solo aquí; la landing no los muestra.
2. **El cliente nunca se queda sin saber qué elegir.** Guía de 3 preguntas (qué ofreces ·
   si cobra en línea · tamaño) → recomendación con el porqué, aplicable en un clic.
3. **Transparencia:** cada base muestra qué incluye, tiempo de entrega (`[X] semanas`,
   pendiente) e insignia "Más elegido" en la opción recomendada de cada categoría.
4. **El resumen siempre a la vista** (columna fija): ítems, pago único, mensual × meses
   proyectados (3/6/12), inversión inicial destacada, botones WhatsApp / correo y el
   texto exacto que se enviará.
5. **Modo equipo DKODING** (toggle en la barra): el mismo cotizador pasa a redactar una
   *propuesta* dirigida al cliente: descuento comercial (tope 20 %), asesor, vigencia,
   plan de pagos propuesto (50/30/20, por confirmar). WhatsApp y correo se envían al
   cliente en vez de a DKODING.

## Pendiente de confirmar

- Tiempos de entrega por producto, política de plan de pagos y tope de descuento.
- En producción el envío debe además registrar el lead en la colección `leads`
  (arquitectura §4) y el modo equipo debe ir detrás de login, no de un toggle público.
