# Admin DKODING · diseño de interfaz (lienzo)

Lienzo navegable: https://claude.ai/artifact/3gfSHhiYsQGuhm9qXYbX8X (privado; compártelo
desde el menú Share del lienzo). La landing vive en otro lienzo:
https://claude.ai/artifact/Goh45JaCPxbFcYUNcdaZmP

Esta carpeta es una copia del código fuente de cada tablero (`.dc.html`) para versionarlo.
La fuente de verdad del diseño es el lienzo; la especificación de UX está en
`docs/ux-admin.md` y el sistema de diseño en `docs/arquitectura-diseno-admin.md`.

| Tablero | Patrón | Qué muestra |
|---|---|---|
| `Main.dc.html` · INI-01 | Panel | Inicio de la agencia (CEO): requiere atención, indicadores, clientes por salud, cotizaciones abiertas, vencimientos |
| `Cliente.dc.html` · CLI-02 | Panel | Panel de un cliente con interruptor «Vista agencia / Vista del cliente» y gráficos de clics y leads |
| `Movil.dc.html` · MOB-01 | Monitor | Alerta crítica de madrugada atendida desde el celular |
| `Sitios.dc.html` · MON-01 | Lista | Sitios monitoreados (cPanel y plataforma), filtros por estado, acciones masivas |
| `Sitio.dc.html` · MON-02 | Detalle | Ficha de sitio con incidente, puntos de restauración verificados y restauración con cuatro ojos |
| `ConectarCpanel.dc.html` · MON-03 | Asistente | Conectar un cPanel con token, prueba de conexión de solo lectura y vigilancia |
| `Boveda.dc.html` · VLT-01 | Panel + Lista + Detalle | Bóveda de accesos: metadatos sobre Bitwarden, acceso temporal y secretos de máquina |
| `Editor.dc.html` · WEB-02 | Detalle | Editor de página con SEO, schema y visibilidad en IA |
| `Cotizaciones.dc.html` · VEN-01 | Lista | Pipeline de cotizaciones por etapa con detalle de líneas por hora |
| `Tarifas.dc.html` · COT-02 | Detalle | Versión de tarifas del cotizador con simulador y calibración |
| `Sistema.dc.html` | — | Sistema de interfaz del admin (superficies, estados, controles) |

Todos los datos son de ejemplo; los clientes nombrados son reales y las cifras ilustrativas.
