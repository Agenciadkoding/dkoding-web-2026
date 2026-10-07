# Admin DKODING · diseño de interfaz (lienzo)

Lienzo navegable: https://claude.ai/artifact/3gfSHhiYsQGuhm9qXYbX8X (privado; compártelo
desde el menú Share del lienzo). La landing vive en otro lienzo:
https://claude.ai/artifact/Goh45JaCPxbFcYUNcdaZmP

Esta carpeta es una copia del código fuente de cada tablero (`.dc.html`) para versionarlo.
La fuente de verdad del diseño es el lienzo; la especificación de UX está en
`docs/ux-admin.md` (resumen en `docs/ux-admin-resumen.md`) y el sistema de diseño en `docs/arquitectura-diseno-admin.md`.

| Tablero | Pantalla de la especificación | Qué muestra |
|---|---|---|
| `Main.dc.html` | INI-01 · Panel | Inicio del CEO: requiere tu decisión, atención del equipo, 5 indicadores, clientes en peor estado, pipeline, vencimientos |
| `Cliente.dc.html` | CLI-03 · Detalle (con lente CLI-02) | Ficha del cliente con interruptor «Vista agencia / Vista del cliente» y gráficos de clics y leads |
| `Movil.dc.html` | ALR-02 · móvil | Alerta crítica de madrugada y aprobación con passkey desde el celular |
| `Sitios.dc.html` | MON-02 · Lista | Sitios de cPanel y de la plataforma, agrupables por servidor, filtros por estado, acciones masivas |
| `Sitio.dc.html` | MON-04 · Detalle | Incidente, puntos de restauración, extracción a carpeta de prueba y restauración con passkey de dos personas |
| `ConectarCpanel.dc.html` | MON-03 · Asistente (fase 2) | Conectar cPanel o WHM con token sellado en el navegador y prueba de solo lectura |
| `Boveda.dc.html` | VLT-02 · Lista + Detalle | Accesos de un cliente sobre Bitwarden (sin contraseñas), acceso temporal y secretos de máquina |
| `Editor.dc.html` | WEB-02 · Detalle | Editor de página con revisión SEO, schema y visibilidad en IA |
| `Cotizaciones.dc.html` | COT-01 · Lista | Cotizaciones en tabla (tablero en fase 2) con detalle de líneas por hora |
| `Tarifas.dc.html` | COT-05 · Detalle | Versión de tarifas en borrador frente a la vigente, simulador y calibración |
| `Sistema.dc.html` | — | Sistema de interfaz del admin (superficies, estados, controles) |

Todos los datos son de ejemplo; los clientes nombrados son reales y las cifras ilustrativas.
