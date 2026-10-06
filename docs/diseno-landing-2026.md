# Diseño de la landing DKODING 2026

> Fecha: 2026-10-06
> Estado: **PROPUESTA v3** (estructura del plan Web PRO del cliente, sin precios, hero en slider).
> Detalle de la v3 y su correspondencia con el plan: `plan-web-pro-estructura.md`.
> Lienzo de diseño (editable, con cotizador funcional): https://claude.ai/artifact/Goh45JaCPxbFcYUNcdaZmP
> Insumos: `auditoria-sitio-actual.md`, `sitio-actual-visual.md`,
> `benchmark-bigseo-seo-geo-diseno-2026.md`, `arquitectura-plataforma-agencia.md`.

---

## 1. Decisión en una frase

**Conservar la identidad (negro + violeta + chevrón + Blinker/Barlow) y corregir lo que
la audita mal:** un solo violeta por función, contraste AA, un solo H1, cifras reales,
WhatsApp como CTA único, y la estructura de página que el benchmark de bigseo demuestra
que posiciona y convierte.

Nombre del look: **Noche violeta**.

---

## 2. Tokens

| Token | Valor | Uso | Contraste |
|---|---|---|---|
| `--dk-bg` | `#0C0C0C` | fondo | — |
| `--dk-surface` | `#151518` | tarjetas | — |
| `--dk-deep` | `#1A0B2B` | franjas, barra superior | — |
| `--dk-violet` | `#6D00C2` | **fondo de botón primario** | blanco encima 8,6:1 ✔ |
| `--dk-lila` | `#C755EF` | eyebrows, marcas `»`, bordes destacados · **solo sobre oscuro** | 5,57:1 sobre `#0C0C0C` ✔ (corregido; antes decía 7,0:1) |
| `--dk-lila-link` | `#D98BFF` | enlaces, hover | 8,46:1 ✔ (corregido; antes decía 9,8:1) |
| `--dk-text` | `#F4F2F8` | texto | 18,4:1 ✔ |
| `--dk-muted` | `#B3B0BC` | texto secundario | 9,0:1 ✔ |
| `--dk-ok` | `#5BE49B` | estados correctos | |
| `--dk-warn` | `#E0A93B` | alertas | |

Se eliminan los 9 colores por defecto de Gutenberg detectados en el sitio actual.
El lila `#C755EF` **nunca** va sobre blanco (3,5:1, falla AA — ver auditoría §6).

**Tipografía:** Blinker 300 + 700 para titulares y cifras; Barlow 400–600 para
cuerpo. Auto-hospedadas, subset latín, `font-display: swap`, < 100 KB en total.

| Rol | Spec |
|---|---|
| H1 | Blinker 300 + `<strong>` 700 · `clamp(44px, 5.4vw, 78px)` · 1.02 |
| H2 | Blinker 300 + 700 · `clamp(34px, 3.6vw, 52px)` · 1.05 |
| H3 | Blinker 700 · 24–30 px · 1.1 |
| Cifra | Blinker 700 · 30–44 px · 1.0 |
| Cuerpo | Barlow 400 · 17–19 px · 1.55 |
| Eyebrow | Barlow 600 · 13 px · mayúsculas · tracking 0,08em · lila |

**Forma:** radio 4 px en botones (la marca usa 3), 8 px en tarjetas, 999 px en
etiquetas. Bordes blanco al 8 %. Botones ≥ 44 px de alto (52 en hero).

**Motivo:** el chevrón `»` del logo como marca de sección, viñeta, fondo de CTA y
franja diagonal. Sustituye a las franjas de degradado del sitio actual.

---

## 3. Estructura de la landing (orden y propósito)

| # | Sección | Qué resuelve de la auditoría / benchmark |
|---|---|---|
| 0 | Barra superior: ubicación, 12 años, soporte, correo, **`tel:`** | sin `tel:` en el sitio actual (§7.3) |
| 1 | Nav fija con CTA WhatsApp | CTA único y persistente (bigseo §1.7) |
| 2 | **Hero**: eyebrow con keyword, **un solo H1** "Sitios web que venden, no solo que se ven bien", BLUF, CTA "Cotiza en 2 minutos" + "Ver casos", franja de prueba (12 años · 17 servicios con precio · LCP < 1,8 s · soporte 24/7), collage de piezas reales | dos H1 compitiendo (visual §), prueba en el primer pantallazo |
| 3 | Marquee de clientes (CSS, 0 JS) | prueba social sin JS |
| 4 | **Estándar técnico**: 4 tarjetas con presupuestos públicos (LCP, peso, Lighthouse, legible por IA) | argumento de venta contra sitios WordPress pesados (benchmark §1.3) |
| 5 | **Servicios en bento** con precio "desde" real por categoría + tarjeta "SEO para IA · Nuevo" | catálogo real de 17 productos (§5); capa GEO desde el día uno |
| 6 | **Cotizador interactivo**: tipo de sitio × complementos → precio desde + mensual → WhatsApp con mensaje armado | la herramienta pedida; retainers mostrados como `/mes` (§5.1) |
| 7 | **Proceso en 4 pasos** con entregable por paso | vacío "qué pasa entre pagar y recibir" (§6 preliminar) |
| 8 | **Casos** (4 reales) con cifra hero en corchetes + testimonio con estructura | casos sin métricas (§8.3); testimonios inexistentes (§8.2) |
| 9 | **Monitoreo incluido**: panel de ejemplo (uptime, LCP, copias, cPanel, alertas) | conecta con la plataforma de agencia (arquitectura §5) |
| 10 | **FAQ** (5) con precios reales | sin FAQ en el sitio actual; `FAQPage` schema en build |
| 11 | CTA final violeta con WhatsApp, `tel:` y correo | |
| 12 | Footer con **NIT, razón social y dirección** en corchetes, año 2026 | sin datos legales (§7.4), año congelado en 2024 (§8.5) |

Página fluida: funciona a 390 px (grids colapsan, nav envuelve, tablas en caja).

---

## 4. Lo que está en corchetes y hay que conseguir

- `[+__ %]` y `[métrica]` en los 4 casos: pedir datos reales a 4Bellú, Colorado
  Hardwood, Jhoana Pérez y LuzMa. **Sin cifra, el caso se publica sin cifra**, nunca con
  una inventada.
- `[Testimonio]`, `[Nombre]`, `[Cargo]`: al menos 2 testimonios atribuidos.
- `[X–Y semanas]` en la FAQ de tiempos.
- `[Razón social]`, `[NIT]`, `[Dirección]` en el footer.
- Capturas de los sitios de Colorado Hardwood y Jhoana Pérez (hoy placeholders).
- Las respuestas de la FAQ sobre propiedad del dominio/código y administración son
  **copy propuesto**: confirmar que reflejan la política real antes de publicar.

---

## 5. Qué pasa en la construcción (no en el diseño)

- Movimiento: reveal del H1 por palabra (SplitText), contadores al entrar en viewport,
  tilt sutil en el bento, marquee ya en CSS. Todo con `prefers-reduced-motion`.
- Schema: `Organization` + `ProfessionalService`, `Service` + `Offer` por tarjeta,
  `FAQPage`, `BreadcrumbList`. Generado con `schema-dts` en build (arquitectura §6).
- `og:image` 1200×630 por página (Satori). Hoy es el logo de 230×75.
- Gates de release: LCP < 1,8 s · INP < 150 ms · CLS < 0,05 · home < 1,2 MB ·
  JS inicial < 150 KB · Lighthouse móvil ≥ 90 / a11y ≥ 95 / SEO 100.
- Stack: Astro + `site-kit` (Tailwind v4 con estos tokens) sobre Cloudflare, contenido
  desde Payload (arquitectura §3). El cotizador es una isla que lee los precios de la
  colección `services`.

---

## 6. Siguientes artboards sugeridos

1. Página de servicio (plantilla, benchmark §6.2).
2. Página de caso (plantilla, benchmark §6.3).
3. Pantalla del panel de agencia (`/admin/monitor`).
4. Vista móvil del cotizador como artboard separado para revisión del cliente.
