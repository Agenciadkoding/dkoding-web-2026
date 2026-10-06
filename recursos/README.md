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
| `marca/logos/` | `dkoding-logo-01` (vertical), `-02` (horizontal), `-03` (con sello Partner SeguriServer), en SVG y PNG; `favicon.png` (isotipo); `logo-min.svg` (negro); `dkoding-portada-instagram-1.jpg` (isotipo extruido en bandas: referencia del motivo geométrico) |
| `marca/deco/` | `dkoding-deco-02…07.svg`: franja diagonal, chevrón contorno, chevrón degradado, línea con punto; `comillas.svg` |
| `marca/iconos/` | `icons-01…10` (redes y chevrones), `icon-line-01…05` (servicios) |
| `clientes/logos/` | 10 logos de clientes en SVG blanco: Dimark, Colorado Hardwood, Jhoana Pérez, OkVet, Shaddai, Abab, Hosroom, SeguriServer, Alternativas Verticales, Uniformes & Bordados |
| `equipo/` | 5 fotos reales (CEO, COO, 3 comerciales). Los demás `dk-equipo-*` del sitio son avatares ilustrados; no se usan |

**Nota:** el archivo `docs/img/dkoding-logo.svg` de la primera investigación era `logo-clientes-10.svg` (cliente); ya está corregido.

**Pendiente del cliente:** logo en formatos de origen (AI / EPS / PDF / PNG en alta)
desde la carpeta local `Recursos Dkoding 2024`; no están publicados en el sitio.
