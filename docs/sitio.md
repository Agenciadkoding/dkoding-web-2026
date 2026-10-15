# El sitio dkoding.net: cómo está hecho, cómo se trabaja y cómo se publica

Fecha: 2026-10-15 · Estado: **EN CONSTRUCCIÓN**

## 1. Qué es

- Astro 7, salida estática (HTML, CSS y JS ya generados). Sin base de datos.
- Vive en `sitio/`. Se publica en **Banahost (cPanel, Apache)** en la carpeta del dominio.
- Los formularios (diagnóstico, cotizador, tickets, llamadas, contacto) llegan por correo a
  **info@dkoding.net** mediante `sitio/public/api/formulario.php`, hasta que exista el admin.
  Cada envío también se puede mandar por WhatsApp con el mensaje armado.
- Las redirecciones de la migración salen de `seo/redirecciones-301.csv` y se convierten en
  `.htaccess` con `python3 sitio/scripts/htaccess.py`.

## 2. Trabajar en tu computador

```sh
git clone https://github.com/Agenciadkoding/dkoding-web-2026
cd dkoding-web-2026/sitio
npm install
npm run dev        # http://localhost:4321
npm run build      # genera sitio/dist/
```

Necesitas Node.js 22 o más reciente. Para probar el PHP de los formularios en local, PHP 8.2+
y `php -S localhost:8080 -t dist` después de construir (el correo no sale en local; mira el
registro de errores).

## 3. Estructura

| Carpeta | Qué hay |
|---|---|
| `src/pages/` | Una página por archivo. `index.astro` es la home; `cotizador.astro`, `soporte.astro`, `casos-de-exito.astro`, las 5 landings, `nosotros`, `nuestro-equipo`, `contacto`, legales, `404.astro` |
| `src/layouts/Base.astro` | Plantilla: `<head>` con SEO y schema, cabecera, pie, WhatsApp |
| `src/components/` | Cabecera, pie y piezas de cada página |
| `src/content/blog/` | Artículos en Markdown. Un archivo por artículo; el nombre del archivo es la URL |
| `src/data/` | `sitio.ts` (teléfono, correo, datos legales, servicios, menú), `schema.ts`, `cotizador.ts` (tarifas y catálogo), `casos.json` |
| `src/styles/global.css` | Tokens de Noche violeta y clases base |
| `public/` | Lo que se copia tal cual: imágenes, fuentes, `robots.txt`, `llms.txt`, `.htaccess`, `api/formulario.php` |
| `scripts/htaccess.py` | Regenera `public/.htaccess` desde el CSV |

## 4. Cambiar cosas frecuentes

| Qué | Dónde |
|---|---|
| Teléfono, correo, dirección, razón social, NIT, redes | `src/data/sitio.ts` |
| Tarifas, horas por módulo, mínimo de proyecto | `src/data/cotizador.ts` |
| Un caso de éxito | `src/data/casos.json` y la captura en `public/img/casos/` |
| Un artículo nuevo | Archivo `.md` en `src/content/blog/` |
| Una redirección | `seo/redirecciones-301.csv` y luego `python3 sitio/scripts/htaccess.py` |
| Textos de una landing | Su archivo en `src/pages/` |

## 5. Publicar en Banahost

Dos opciones. La automática es la recomendada.

**Automática (GitHub Actions).** El flujo `.github/workflows/sitio.yml` construye el sitio y lo
sube por FTPS cada vez que cambia `sitio/` en la rama `main`. Para activarlo, DKODING crea una
cuenta FTP en cPanel limitada a la carpeta del sitio y guarda cuatro secretos en GitHub
(Settings → Secrets and variables → Actions): `SITIO_FTP_HOST`, `SITIO_FTP_USER`,
`SITIO_FTP_PASS`, `SITIO_FTP_RUTA` (por ejemplo `/public_html/`). Nadie más ve la contraseña.
También se puede lanzar a mano desde la pestaña Actions.

**Manual.** `npm run build` y subir el contenido de `sitio/dist/` (incluido `.htaccess`, que es
un archivo oculto) a la carpeta del dominio por el administrador de archivos de cPanel o por FTP.

**Requisitos en cPanel:** PHP 8.2 o superior para la carpeta (MultiPHP), `mod_rewrite` activo
(viene por defecto) y que la cuenta pueda enviar correo con `mail()` hacia info@dkoding.net.
Conviene crear el buzón `web@dkoding.net`, que es el remitente, para que el correo no caiga en
spam. Si Banahost exige SMTP autenticado, el PHP se cambia a SMTP en ese momento.

## 6. Día del lanzamiento

Hoy dkoding.net sirve el WordPress desde Banahost. El sitio nuevo se sube a la misma cuenta.

1. Exportar de Search Console todas las URLs con impresiones de los últimos 16 meses y
   cruzarlas con `seo/redirecciones-301.csv`. Agregar al CSV lo que falte.
2. Hacer una copia completa del WordPress (JetBackup o UpdraftPlus) y guardarla fuera del
   servidor.
3. Subir el sitio nuevo a una carpeta aparte (`public_html/nuevo/`) y probarlo con una URL
   temporal, o directamente reemplazar `public_html/` fuera del horario de atención.
4. Mover el WordPress viejo a `public_html_viejo/` (no borrarlo todavía) y dejar el sitio nuevo
   en `public_html/`.
5. Comprobar: home, `/cotizador/`, `/soporte/`, `/casos-de-exito/`, 5 redirecciones al azar
   del CSV, `/robots.txt`, `/sitemap-index.xml`, un formulario de prueba (debe llegar a
   info@dkoding.net), y el 404.
6. Search Console: enviar `https://dkoding.net/sitemap-index.xml`, revisar «Páginas» a los
   3 días. Bing Webmaster Tools: importar desde Search Console.
7. Cuando el sitio esté en Cloudflare (más adelante), revisar que los rastreadores de IA no
   queden bloqueados por defecto (`docs/seo-geo-notas-2026.md` §2).
8. A los 30 días, borrar el WordPress viejo.

## 7. Pendiente de DKODING antes de lanzar

Los corchetes `[...]` del sitio: razón social, NIT, dirección, nombres y cargos del equipo,
cifras de los casos, tiempos de entrega y forma de pago en las FAQ, y los textos legales tras la
revisión del abogado. Las tarifas del cotizador se ajustan en `src/data/cotizador.ts`.

Después del lanzamiento: IDs de Google Analytics 4, Search Console y Cloudflare Turnstile (van
como variables de entorno, no en el repositorio).
