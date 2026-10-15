"""Regenera sitio/public/.htaccess a partir de seo/redirecciones-301.csv.

Uso, desde la raíz del repositorio:  python3 sitio/scripts/htaccess.py
"""
import csv
import pathlib

RAIZ = pathlib.Path(__file__).resolve().parents[2]
CSV = RAIZ / 'seo' / 'redirecciones-301.csv'
SALIDA = RAIZ / 'sitio' / 'public' / '.htaccess'

CABECERA = """# Generado desde seo/redirecciones-301.csv. No editar a mano: regenerar con sitio/scripts/htaccess.py.

Options -Indexes
AddDefaultCharset UTF-8

# Forzar HTTPS y dominio sin www
RewriteEngine On
RewriteCond %{HTTPS} off
RewriteRule ^ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
RewriteCond %{HTTP_HOST} ^www\\.dkoding\\.net$ [NC]
RewriteRule ^ https://dkoding.net%{REQUEST_URI} [L,R=301]

# Redirecciones de la migración (301 permanentes, 302 temporales)
"""

PIE = """
# URL sin barra final -> con barra (solo rutas sin extensión)
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_URI} !/$
RewriteCond %{REQUEST_URI} !\\.[a-zA-Z0-9]{2,5}$
RewriteRule ^(.*)$ /$1/ [R=301,L]

ErrorDocument 404 /404.html

# Caché: estáticos un año; HTML sin caché larga
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType text/html "access plus 0 seconds"
  ExpiresByType text/css "access plus 1 year"
  ExpiresByType application/javascript "access plus 1 year"
  ExpiresByType image/webp "access plus 1 year"
  ExpiresByType image/avif "access plus 1 year"
  ExpiresByType image/svg+xml "access plus 1 year"
  ExpiresByType image/png "access plus 1 year"
  ExpiresByType image/jpeg "access plus 1 year"
  ExpiresByType font/woff2 "access plus 1 year"
</IfModule>
<IfModule mod_headers.c>
  Header set X-Content-Type-Options "nosniff"
  Header set Referrer-Policy "strict-origin-when-cross-origin"
  Header set Permissions-Policy "camera=(), microphone=(), geolocation=()"
  <FilesMatch "\\.(woff2|css|js|webp|avif|svg|png|jpg)$">
    Header set Cache-Control "public, max-age=31536000, immutable"
  </FilesMatch>
</IfModule>
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/css application/javascript application/json image/svg+xml
</IfModule>
"""


def main() -> None:
    filas = list(csv.DictReader(CSV.open(encoding='utf-8')))
    lineas = [CABECERA.rstrip('\n')]
    for f in filas:
        origen = f['origen'].strip('/')
        if f['codigo'] in ('301', '302') and origen:
            lineas.append(f"RewriteRule ^{origen}/?$ {f['destino']} [R={f['codigo']},L,NC]")
    lineas.append('')
    lineas.append('# Páginas retiradas: 410 para que Google las saque del índice')
    for f in filas:
        origen = f['origen'].strip('/')
        if f['codigo'] == '404' and origen:
            lineas.append(f"RewriteRule ^{origen}/?$ - [G,L,NC]")
    SALIDA.write_text('\n'.join(lineas) + '\n' + PIE, encoding='utf-8')
    n301 = sum(1 for f in filas if f['codigo'] in ('301', '302'))
    n410 = sum(1 for f in filas if f['codigo'] == '404')
    print(f'{SALIDA}: {n301} redirecciones, {n410} retiradas')


if __name__ == '__main__':
    main()
