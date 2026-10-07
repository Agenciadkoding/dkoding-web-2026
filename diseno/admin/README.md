# Tableros del admin DKODING · MVP simple

Fuente del lienzo publicado en https://claude.ai/artifact/3gfSHhiYsQGuhm9qXYbX8X (versión 20,
7 de octubre de 2026). Especificación: `docs/admin-mvp.md`.

Cada archivo `.dc.html` es un tablero del lienzo de diseño. `canvas.json` es el índice con su
posición y tamaño. Los datos son de ejemplo; las credenciales que aparecen son ficticias.

| Tablero | Pantalla | Qué se puede probar |
|---|---|---|
| `Main.dc.html` | Inicio: dkoding.net (Search Console, GA4, leads), ventas, renovaciones y salud | Periodo 7/28/90 días, avisos que enlazan a cada módulo |
| `Paginas.dc.html` | Sitio dkoding.net: páginas con estado y revisión SEO, redirecciones (las 55 URLs reales de `seo/redirecciones-301.csv`) y palabras clave | Pestañas, filtros, panel de página, nueva página planificada, crear redirección |
| `Cliente.dc.html` | CRM: ficha del cliente con servicios, renovación e importe, accesos, sitios, ventas e historial | Pestañas, renovar y editar servicios, nota nueva, ver contraseña |
| `Boveda.dc.html` | Accesos personales, de la agencia y de clientes, con verificación | Ver contraseña con código (30 s y registro), Funciona / No funciona, panel del acceso |
| `ImportarAccesos.dc.html` | Asistente para importar el Excel sin cambiar contraseñas, con la estructura y los conteos reales del archivo (sin datos reales) | Los 4 pasos y las decisiones por grupo; abre en Revisar |
| `Cotizaciones.dc.html` | Ventas: cotizaciones con detalle por horas | Selección de cotización |
| `Tarifas.dc.html` | Ventas: versión de tarifas y simulador | Editar tarifas y ver el efecto en los paquetes |
| `Sitios.dc.html` | Salud: estado de los sitios, acceso a WP y cPanel (por WHM en Banahost, sin contraseña), copias quincenales | Filtros, «Acceder» con verificación, pestaña Copias con detalle |
| `Sistema.dc.html` | Sistema de interfaz: superficies, estados con forma y color, tipografía y piezas | — |

`shell` (barra superior y menú) es el mismo en todos los tableros.

La versión anterior (multi-cliente, sobre Payload) está en `v1/`.
