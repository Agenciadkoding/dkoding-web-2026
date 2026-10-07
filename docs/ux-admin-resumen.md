# UX del admin DKODING · resumen ejecutivo

Fecha: 2026-10-06 · Estado: **PROPUESTA**

- Lienzo con el diseño navegable: https://claude.ai/artifact/3gfSHhiYsQGuhm9qXYbX8X
- Especificación completa (31.600 palabras, 11 diagramas, 165 fuentes): `docs/ux-admin.md`
- Sistema de diseño del admin: `docs/arquitectura-diseno-admin.md`
- Fuente de los tableros: `diseno/admin/`

Este resumen recoge lo que hay que leer para decidir. Todo lo demás está en el documento
completo, con su fuente.

---

## La decisión

Un solo administrador en Payload 3, oscuro y con la marca de la landing, organizado en 7
grupos de como máximo 5 opciones. El cliente funciona como filtro y la unidad de trabajo
es el **sitio**, sea un Astro nuevo o uno de los 30+ WordPress en cPanel.

DKODING **construye** lo que vende y lo diferencia: el cotizador administrable, la vista
unificada de salud y copias de los dos tipos de sitio, el SEO y GEO multi-cliente y el
informe mensual. DKODING **integra** lo genérico: monitoreo de disponibilidad con
guardias, los programas que hacen las copias, Bitwarden para las contraseñas, Cloudflare
Access para el segundo factor del equipo y Clockify para las horas.

## Módulos y fase

| Módulo | Fase | Construir o integrar |
|---|---|---|
| Administrador web (bloques, medios, formularios, redirecciones) | 1A en pantallas de Payload · F2 vistas propias | Construir sobre Payload |
| SEO avanzado y GEO | 1A SEO del documento · F2 Search Console y auditoría · F3 GEO | Construir |
| Monitoreo de sitios | 1B sin llaves · F2 cuenta cPanel | Integrar proveedor de uptime de pago |
| Copias de seguridad | 1B leyendo el destino · F2 servidor de copias propio | Integrar JetBackup, UpdraftPlus o ManageWP |
| Métricas esenciales | 1B 5 tarjetas · F2 Search Console y GA4 · F3 IA | Construir |
| Gestor de contraseñas | 0 Bitwarden · 1B registro de accesos · F3 acceso temporal automático | Integrar Bitwarden Enterprise |
| Administrador del cotizador | 1A núcleo · F2 simulador, embudo y calibración | Construir |
| Aprobaciones (bandeja única) | 1A | Construir |
| Usuarios, roles y segundo factor | 1A agencia · F2 clientes | Integrar Cloudflare Access |
| Registro de auditoría | 1A | Construir |
| Clientes, ficha 360 y alta | 1B | Construir |
| Alertas e incidentes | 1B bandeja · F2 escalamiento propio | Integrar el escalamiento del proveedor |
| Leads | 1A | Construir |
| Vencimientos (dominio, SSL, tokens, planes) | 1B avisos · F2 cobro | Construir |
| Portal del cliente | F2, en otra dirección web | Construir |
| Soporte con solicitudes | F2 | Construir ligero |
| Mantenimiento WordPress | F2 | Integrar MainWP endurecido |
| Facturación y cartera | F2 | Integrar Alegra o Siigo |
| Contratos y firma | F3 | Integrar Documenso |
| dkard.co | — | Enlace por cliente; ya es un servicio con su propio panel |

## Navegación del MVP

| Grupo | Opciones |
|---|---|
| Fijo arriba | Inicio · Alertas · Aprobaciones |
| Clientes | Directorio |
| Sitio | Contenido · Medios · Formularios |
| Métricas y SEO | Métricas |
| Salud y copias | Flota · Sitios · Copias · Vencimientos |
| Ventas | Leads · Cotizaciones · Tarifas |
| Bóveda | Accesos · Salud de accesos |
| Agencia | Equipo y roles · Conexiones · Avisos y plantillas · Registro y cumplimiento · Sistema y ajustes |

Arriba hay un selector de dos niveles, **Cliente › Sitio**, una búsqueda con atajo Ctrl K
y la campana de alertas. En el celular la barra inferior tiene Inicio, Alertas,
Aprobaciones y Buscar. Las opciones de fases 2 y 3 aparecen cuando se activan.

## Alcance y orden

| Fase | Qué entra | Duración estimada |
|---|---|---|
| 0 · Preparación | Bitwarden Enterprise, migrar y rotar accesos que circulan por WhatsApp o Excel, horas en Clockify, preguntas a SeguriServer, inventario de sitios | 2–4 semanas, sin código, en paralelo a la landing |
| 1A · MVP comercial | Lo que la landing necesita: leads, cotizaciones, tarifas, aprobaciones, auditoría, roles de agencia | 4–5 semanas |
| 1B · MVP operación | Clientes, monitoreo sin llaves, estado de copias, vencimientos, bandeja de alertas | 5–6 semanas |
| 2 · Profundidad | Servidor de copias propio, conexión cPanel, portal del cliente, Search Console, MainWP | después del MVP |
| 3 · Diferenciación | GEO, enlazado interno, migración WordPress → Astro, acceso temporal automático | después |

El MVP son unas **16 pantallas propias y 20 colecciones** con pantallas generadas por
Payload. Las duraciones son un supuesto con 2–3 desarrolladores que también hacen la
landing; se recalibran a las dos semanas.

## Decisiones de seguridad

- **Ninguna contraseña se ve en el admin.** Las de personas viven en Bitwarden con una
  colección por cliente; el admin muestra quién accede, cuándo se usó y qué falta rotar,
  y abre el login para que la extensión de Bitwarden lo rellene.
- **En el MVP no se guarda ningún token de cPanel.** En fase 2 el token se sella en el
  navegador con la llave pública del servidor de copias, junto con el servidor y el
  usuario, así que el admin no puede leerlo ni desviarlo.
- **Restaurar es una acción de nivel 3**: se ejecuta en escritorio, escribiendo el
  dominio y con la passkey de dos personas. Desde el celular solo se aprueba. La
  "carpeta de prueba" solo extrae archivos fuera del sitio publicado, sin base de datos.
- **Las copias van a una cuenta de Cloudflare separada**, con otros titulares. La interfaz
  dice "Bloqueada · revocable por un administrador", porque el bloqueo de R2 se puede
  quitar. En fase 2 se añade una copia secundaria con bloqueo de cumplimiento.
- **Las alarmas no dependen del admin.** El proveedor de uptime llama o escribe
  directamente a la guardia; el admin solo refleja el incidente. Si el admin se cae,
  los avisos siguen saliendo.
- **El cliente nunca edita usuarios** ni ve costos, horas internas, notas, datos del
  servidor o accesos de la agencia.

## Lo que cambiaron las revisiones

Tres revisiones independientes (seguridad, usabilidad y viabilidad) encontraron 89
problemas, 9 de ellos críticos. Los más importantes:

1. El primer borrador ponía 68 pantallas en el MVP: era 2 a 3 veces lo que cabe en 10
   semanas. Se recortó a 16.
2. "Copias inmutables" era falso: el bloqueo de R2 se puede retirar por API.
3. La restauración de cPanel en "carpeta de prueba" no existe: `restore_backup` siempre
   sobrescribe. Solo `extract_backup` es seguro.
4. Un cliente administrador podía escalar privilegios editando usuarios compartidos.
5. Un cambio en el HTML de un WordPress no es una emergencia: con 100 sitios habría
   varias alarmas de madrugada por noche. Pasa a informativo.
6. Las alarmas pasaban por el mismo sistema que vigilan.

## Costo mensual de herramientas del MVP

**Unos 180 a 350 USD al mes**, según el proveedor de uptime (Better Stack o UptimeRobot
Team) y si hace falta ManageWP para las copias. Incluye Vercel Pro, Neon, Cloudflare,
Bitwarden Enterprise (~60 USD para 10 personas) y unos 2,3 TB de copias en R2. El costo
mayor son las horas de guardia y de mantenimiento de integraciones, que todavía no están
estimadas.

## Las 10 preguntas que más bloquean

1. **SeguriServer:** versión de cPanel, si dan WHM de revendedor, si JetBackup puede
   escribir en un destino de DKODING y qué tiempo de restauración garantizan.
2. **SeguriServer, términos:** si aceptan descargas nocturnas masivas y la IP del
   servidor de copias en su lista blanca.
3. ¿Quién es dueño de cada dominio y quién paga las renovaciones?
4. ¿Usan Google Workspace? ¿Habrá llaves físicas FIDO2 para el CEO y el COO?
5. ¿Quiénes serán los dos titulares de la cuenta de Cloudflare de copias?
6. ¿Quién hace guardia semanal, con qué compensación y si las tiendas exigen 24/7?
7. ¿Los clientes editan su propio contenido y qué planes publican sin aprobación?
8. ¿Qué tope de descuento tiene un comercial y qué cambio de precio pide aprobación del CEO?
9. ¿El cotizador público muestra un rango, solo "desde" o solo horas?
10. Si el monitoreo no está listo al lanzar la landing, ¿se reescribe su sección
    "Monitoreo incluido" para no prometer lo que aún no existe?

Las 22 preguntas completas están en `docs/ux-admin.md` §12.

## Tableros del lienzo

| Tablero | Pantalla |
|---|---|
| INI-01 | Inicio de la agencia (CEO): decisiones, atención del equipo, 5 indicadores, clientes en peor estado, pipeline, vencimientos |
| CLI-03 | Ficha del cliente con interruptor «Vista del cliente» y gráficos |
| ALR-02 | Alerta crítica y aprobaciones desde el celular |
| MON-02 | Sitios agrupados por servidor, con filtros por estado y acciones masivas |
| MON-04 | Detalle de sitio: incidente, puntos de restauración y restauración con passkey |
| MON-03 | Conectar cPanel o WHM (fase 2) |
| VLT-02 | Bóveda: accesos de un cliente sobre Bitwarden y secretos de máquina |
| WEB-02 | Editor de página con revisión SEO, schema y visibilidad en IA |
| COT-01 | Cotizaciones en tabla con detalle de líneas por hora |
| COT-05 | Versión de tarifas con simulador y calibración |
| Sistema | Superficies, estados con forma y color, tipografía y controles |
