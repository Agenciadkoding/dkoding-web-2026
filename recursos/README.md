# Recursos de marca y contenido

Extraídos de la biblioteca de medios pública de dkoding.net (`/wp-json/wp/v2/media`)
el 2026-10-06. Aquí solo va el **kit ligero** (SVG y fotos pequeñas). El inventario
completo de los 426 archivos está en `inventario-medios-dkoding-net.txt`; se
vuelve a descargar con:

```sh
mkdir media && cd media && xargs -P 8 -n 1 curl -sSO < ../inventario-medios-dkoding-net.txt
```

| Carpeta | Contenido |
|---|---|
| `marca/logos/` | `dkoding-logo-menu.svg` (para menús y zonas pequeñas, blanco) y `dkoding-logo-menu-negro.svg` (el mismo para fondo claro), entregados por DKODING el 07/10/2026; `dkoding-logo-01` (vertical), `-02` (horizontal), `-03` (con sello Partner SeguriServer), en SVG y PNG; `favicon.png` (isotipo); `logo-min.svg` (negro, versión anterior: lo reemplaza `dkoding-logo-menu-negro.svg`); `dkoding-portada-instagram-1.jpg` (isotipo extruido en bandas: referencia del motivo geométrico) |
| `marca/deco/` | `dkoding-deco-02…07.svg`: franja diagonal, chevrón contorno, chevrón degradado, línea con punto; `comillas.svg` |
| `marca/iconos/` | `icons-01…10` (redes y chevrones), `icon-line-01…05` (servicios) |
| `clientes/logos/` | 10 logos de clientes en SVG blanco: Dimark, Colorado Hardwood, Jhoana Pérez, OkVet, Shaddai, Abab, Hosroom, SeguriServer, Alternativas Verticales, Uniformes & Bordados |
| `equipo/` | 5 fotos reales (CEO, COO, 3 comerciales). Los demás `dk-equipo-*` del sitio son avatares ilustrados; no se usan |

### Qué logo va en cada zona

| Logo | Dónde va | Alto mínimo |
|---|---|---|
| `dkoding-logo-menu.svg` | Barra del admin (20 px), encabezado del sitio, Centro de ayuda y Casos de éxito (24 px), logo de Filament, pie de los correos | 16 px |
| `dkoding-logo-menu-negro.svg` | Lo mismo sobre fondo claro: PDF de cotizaciones y de términos, correos en modo claro, impresos | 16 px |
| `dkoding-logo-02` (horizontal con lema) | Pie del sitio, portada de la cotización en PDF, presentaciones. Nunca en menús | 72 px (por el lema) |
| `dkoding-logo-01` (vertical) | Pantalla de entrada del admin, portadas, imagen para compartir (Open Graph), página 404 | 200 px (por el lema) |
| `dkoding-logo-03` (Partner) | Solo materiales con SeguriServer | 160 px (por el sello) |
| `favicon.png` (isotipo) | Favicon, ícono de la app, foto de perfil en redes | 16 px |

Blanco sobre oscuro, negro sobre claro; el violeta solo en el isotipo. Alrededor, espacio libre
de la mitad del alto del logo. En Astro, el logo para menús va como SVG en línea con
`fill="currentColor"`, para que tome el color del texto. La guía visual está en el tablero
`Sistema` del lienzo.

**Nota:** el archivo `docs/img/dkoding-logo.svg` de la primera investigación era `logo-clientes-10.svg` (cliente); ya está corregido.

**Pendiente del cliente:** logo en formatos de origen (AI / EPS / PDF / PNG en alta)
desde la carpeta local `Recursos Dkoding 2024`; no están publicados en el sitio.
