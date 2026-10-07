# Admin DKODING · MVP simple

Fecha: 2026-10-07 · Estado: **PROPUESTA v2**, con las respuestas del 7 de octubre (§10). Reemplaza el alcance y el stack de
`docs/ux-admin.md` (6 de octubre). Ese documento queda como referencia para las fases
siguientes.

- Lienzo: https://claude.ai/artifact/3gfSHhiYsQGuhm9qXYbX8X (tableros actualizados a esta versión)
- Estructura del sitio, palabras clave y redirecciones: `docs/estructura-seo-y-migracion.md`
- Investigación del editor (no se construye todavía): https://claude.ai/artifact/51oKCvVULac3J2PdPYhbSZ

---

## 0. Qué cambió

| Tema | Propuesta del 6 de octubre | Ahora |
|---|---|---|
| Stack | Payload 3 + Next.js en Vercel | **Laravel 13 + Filament 5** en un VPS. Sitio en **Astro** |
| Foco | Agencia multi-cliente: métricas, SEO y contenido de todos | **dkoding.net**. De los clientes, solo estado del sitio y copias |
| Contraseñas | Bitwarden; el admin nunca muestra una contraseña | **Bóveda propia** en el admin: se listan y se ven tras verificar tu identidad |
| Copias | JetBackup del proveedor, cuenta de Cloudflare aparte | **UpdraftPlus → Cloudflare R2 cada 15 días**, solo clientes con soporte activo |
| Hosting de los sitios | SeguriServer | **Banahost**, servidor de la agencia con WHM de revendedor. SeguriServer y el hosting propio del cliente son la excepción |
| Leads | Módulo de Ventas | **En el CRM**, ligados a sus cotizaciones |
| Pantallas | ~16 propias + 20 colecciones | **8 grupos de menú**, casi todo con pantallas estándar de Filament |
| Costo mensual | 180–350 USD | **25–75 USD** |

Confirmado: el sitio público es **Astro** (el framework), no el tema Astra de WordPress.

---

## 1. Principio: lo más simple que funcione, y que crezca sin rehacerse

1. **Pantallas estándar de Filament** (lista, formulario, ficha con pestañas, widgets) para
   todo lo que sea CRUD. Pantallas a medida solo en tres casos: el inicio, la revelación de una
   contraseña y el importador del Excel.
2. **Nada que el MVP no use.** Sin portal del cliente, sin multi-tenant, sin aprobaciones de dos
   personas, sin servidor de copias propio, sin editor.
3. **Integraciones que ya resuelven el problema:** UptimeRobot vigila y avisa, UpdraftPlus hace
   la copia, Search Console y GA4 dan las métricas. El admin las **lee y las muestra**.
4. **El sitio de Astro no depende del admin para funcionar.** En el MVP su contenido vive en el
   repositorio. El admin lleva el inventario de páginas, su estado y su SEO. Cuando llegue el
   editor, el contenido pasa a Laravel sin cambiar URLs.

---

## 2. Stack

| Capa | Elección | Por qué |
|---|---|---|
| Admin | Laravel 13, PHP 8.4, Filament 5 (Tailwind 4, Livewire 4) | Tablas, filtros, formularios, roles y 2FA vienen hechos |
| Roles | `bezhansalleh/filament-shield` (spatie/laravel-permission) | Permisos por recurso y acción, entre ellos "ver contraseña" |
| Auditoría | `spatie/laravel-activitylog` | Quién hizo qué y cuándo. Da la trazabilidad del CRM y el registro de la bóveda |
| Segundo factor | MFA nativo de Filament (app autenticadora + códigos de recuperación) | Obligatorio para todo el equipo. Passkeys después, cuando su paquete pase de v0.x |
| Bóveda | Cifrado propio con libsodium y una clave **distinta** de APP_KEY | Ver §5 |
| Excel | OpenSpout (lee .xlsx sin guardar el archivo) | Ver §5.3 |
| Servidor | Laravel Forge + VPS de 2–4 GB con IP fija | Colas, cron cada minuto e IP fija para listas blancas |
| Sitio público | Astro 7 en Cloudflare, contenido en el repositorio | Formularios y cotizador envían al admin por una API |
| Estado de sitios | UptimeRobot (gratis hasta 50 sitios cada 5 min) | Avisa por su cuenta aunque el admin esté caído |
| Copias | UpdraftPlus gratis en cada WordPress → un bucket de R2 por cliente | Programación quincenal y destino R2 están en la versión gratis |
| cPanel de Banahost | Token de API del WHM de revendedor, con solo los permisos necesarios y limitado a la IP del servidor del admin | Abre cPanel de cualquier cuenta de la agencia sin contraseña (`create_user_session`) |

Hosting descartado: Laravel Cloud, porque sus IP de salida cambian y no sirven para listas
blancas, y el cPanel compartido, porque no tiene workers persistentes y guardaría secretos en un
servidor compartido.

---

## 3. Menú

| Grupo | Opciones | Pantalla |
|---|---|---|
| — | **Inicio** | Widgets de dkoding.net, ventas y salud |
| Sitio dkoding.net | Páginas · Redirecciones · Palabras clave | Una lista con pestañas |
| CRM | Clientes · Leads · Renovaciones | Lista + ficha del cliente con pestañas |
| Accesos | Personales · Agencia · Clientes · Importar Excel | Lista con pestañas + asistente |
| Ventas | Cotizaciones · Tarifas | Lista + simulador |
| Salud | Sitios · Copias | Lista con pestañas |
| Ajustes | Usuarios y roles · Conexiones · Registro | Pantallas estándar |

Arriba hay una búsqueda global con Ctrl K y la campana. No hay selector de cliente: el admin es
de DKODING, y los clientes son registros del CRM.

---

## 4. Módulos

### 4.1 Inicio

Una sola pantalla con widgets, en este orden:

1. **Requiere atención:** sitio caído, copia atrasada (más de 16 días), renovación en 7 días,
   lead sin contactar en 24 h, página con errores en Search Console.
2. **dkoding.net, últimos 28 días:** clics y posición media (Search Console), sesiones y
   conversiones (GA4), y leads del sitio.
3. **Ventas:** cotizaciones abiertas por etapa y renovaciones de los próximos 30 días con su
   importe.
4. **Salud:** sitios arriba (N de M) y copias al día (N de M).

### 4.2 Sitio dkoding.net

El objetivo es **medir y controlar el estado**, no editar. Todo queda pensado para el editor.

| Pestaña | Qué muestra en el MVP | Fuente |
|---|---|---|
| Páginas | Cada URL del sitio con tipo (landing, blog, institucional, legal), **estado** (planificada, en diseño, publicada, redirigida, retirada), palabra objetivo, tema y nicho, clics y posición de 28 días, indexación y una revisión SEO (Bloqueado / Mejorable / Listo) | Sitemap del sitio (diario), Search Console API, datos escritos por el equipo |
| Redirecciones | Origen → destino → código, si se verificó en un solo salto y cuántas visitas recibió | `seo/redirecciones-301.csv` importado. En el MVP la fuente sigue siendo el CSV del repositorio |
| Palabras clave | Palabra objetivo de cada página contra la consulta real que trae clics, y consultas con impresiones sin página asignada | `seo/palabras-clave-clasificadas.csv` + Search Console |

**La revisión SEO del MVP** se hace con datos que el admin puede leer solo: título y
descripción (longitud y si están duplicados), H1 único, canonical, indexable, en el sitemap,
schema presente, y estado de Search Console. Se lee desde el HTML publicado una vez al día.

**Pensado para el editor (fase 2):** la tabla `pages` ya tiene `slug`, `type`, `status`,
`seo` (JSON) y un campo `blocks` (JSON, vacío en el MVP). La investigación del editor recomienda
un esquema declarativo de secciones y contenido tipado, nunca píxeles. Cuando llegue, Astro lee
`pages` por API en el build (loader de contenido) y Laravel dispara el deploy hook de
Cloudflare al publicar. Las URLs no cambian.

### 4.3 CRM

**Clientes:** lista con nombre, contacto principal, servicios activos, importe mensual o anual,
próxima renovación, estado de sus sitios y número de accesos guardados.

**Ficha del cliente,** con pestañas:

| Pestaña | Contenido |
|---|---|
| Resumen | Datos fiscales (NIT o cédula), contactos, notas, sitios y su estado, próxima renovación |
| Servicios | Cada servicio contratado: tipo (soporte de agencia, hosting y dominio, SEO, redes, marca, desarrollo), **fecha de inicio, periodicidad, fecha de renovación e importe**, estado (activo, por renovar, vencido, cancelado) |
| Accesos | Los accesos del cliente (los mismos de la bóveda, filtrados) |
| Ventas | Sus leads y cotizaciones |
| Historial | Trazabilidad automática: quién creó o cambió qué, cuándo se vio una contraseña, cuándo se renovó un servicio, notas de llamadas |

**Leads:** llegan de los formularios del sitio y del cotizador por una API (`POST /api/leads`)
y quedan en el CRM con su origen (página, campaña). Un lead se convierte en cliente con un
botón y conserva su historial y sus cotizaciones.

**Renovaciones:** todos los servicios activos ordenados por fecha de renovación, con el total
por mes. Avisos a 30 y 7 días.

**El servicio "Soporte de agencia" activo** es lo que activa las copias quincenales de los
sitios del cliente (§4.6).

Los servicios no se importan: el equipo los carga desde el formulario de cada cliente a medida
que los revisa. Los clientes sí se crean solos al importar el Excel de accesos.

### 4.4 Accesos

Tres ámbitos en la misma pantalla:

| Ámbito | Quién lo ve |
|---|---|
| Personales | **Solo su dueño.** Ni un administrador puede verlas |
| Agencia | El equipo, según su rol: Google Ads, Meta, dominios propios, proveedores, hosting de DKODING |
| Clientes | El equipo, según su rol. Cada acceso está ligado a un cliente y, si aplica, a un sitio |

Cada acceso guarda: nombre, tipo (cPanel, WHM, WordPress, correo, Google, redes, hosting o
dominio, herramienta, otro), **cómo se inicia sesión** (usuario y contraseña, o "con Google" o
"con Facebook", enlazado a esa cuenta y sin contraseña propia), URL de inicio de sesión,
usuario, contraseña, un **secreto adicional** cifrado (códigos de respaldo de la doble
verificación o una llave), notas, si tiene 2FA y dónde, **verificación** (fecha, quién y si
funcionó), último cambio y origen ("Excel, sin rotar" o "creada en el admin").

**"Visualización con verificación" (confirmado) funciona de dos formas:**

1. **Verificar quién mira:** ver una contraseña pide el código de tu app autenticadora (o tu
   contraseña) si no lo diste en los últimos 5 minutos. El valor se muestra 30 segundos, se
   puede copiar y queda registrado: quién, cuál, cuándo y desde dónde.
2. **Verificar que el dato sirve:** cada acceso tiene "Verificado el ... por ..." con botones
   "Funciona" y "No funciona". En los accesos de cPanel el admin puede probarlo solo (fase 1.5).

### 4.5 Ventas

- **Cotizaciones:** lista con filtros y etapas (borrador, enviada, vista, en conversación,
  aceptada, rechazada, vencida), detalle con líneas por hora, PDF y enlace público. Cada
  cotización pertenece a un lead o a un cliente del CRM.
- **Tarifas:** tarifa por hora por rol, multiplicadores, rango mínimo y máximo, redondeo e IVA,
  con versión publicada y borrador. Un simulador muestra cómo cambian los paquetes de
  referencia. El cotizador público (botón flotante, todavía sin diseñar) lee la versión
  publicada por API.

### 4.6 Salud

**Sitios:** lista con sitio, cliente, estado (arriba, caído, lento), SSL y dominio con días
para vencer, si el cliente tiene soporte activo, última copia y dos botones:

| Botón | Cómo funciona en el MVP | Mejora posterior |
|---|---|---|
| Acceder a WP | Pide verificación (§4.4) y abre una pestaña que envía usuario y contraseña al formulario de inicio de sesión de ese sitio. Si el sitio tiene captcha, 2FA o el login escondido, muestra los datos para copiarlos | Plugin propio de inicio de sesión firmado: no viaja la contraseña y no lo frenan el captcha ni el login escondido |
| Acceder a cPanel en **Banahost** | Pide verificación y pide al WHM de la agencia un enlace de un solo uso (`create_user_session`). **No viaja ninguna contraseña.** La sesión caduca a los 15 minutos sin uso | — |
| Acceder a cPanel en **otro hosting** (SeguriServer, el del cliente) | Igual que WordPress: formulario enviado desde tu navegador al login de cPanel de ese servidor | Si ese proveedor da WHM, mismo método que Banahost |

Cada acceso por botón queda en el registro, igual que ver una contraseña.

**Copias:** cada 15 días, solo para clientes con "Soporte de agencia" activo.

1. En cada WordPress con soporte se instala UpdraftPlus (gratis) con programación quincenal,
   destino R2 y retención de 6 copias (unos 3 meses).
2. Cada cliente tiene **su propio bucket** en R2, con un token que solo da acceso a ese bucket
   y un bloqueo de 30 días. Así, un WordPress comprometido no puede borrar las copias de los
   demás ni las recientes propias.
3. El admin **no ejecuta copias:** lista cada bucket una vez al día y marca en rojo el sitio
   cuya última copia tenga más de 16 días o pese mucho menos que la anterior.
4. La pestaña Copias muestra por sitio las 6 copias con fecha y tamaño. Descargar una pide
   verificación.
5. **Segunda capa en Banahost:** las cuentas de Banahost tienen además las copias diarias del
   proveedor (JetBackup), que se restauran desde el cPanel de cada cuenta.
6. **Plan B** para sitios donde el plugin no funcione, o que no sean WordPress: con el mismo
   token del WHM, el admin pide a cPanel una copia completa de la cuenta enviada al servidor del
   admin, y de ahí a R2. No hace falta la contraseña de cada cPanel. Solo para cuentas de
   Banahost.
7. **Restaurar** se hace en el MVP a mano, desde UpdraftPlus o desde JetBackup en el cPanel de
   Banahost. Un simulacro al mes con un sitio elegido al azar comprueba que las copias sirven.

**Estado:** UptimeRobot vigila cada sitio cada 5 minutos (palabra clave, SSL, vencimiento del
dominio) y avisa por correo o WhatsApp a quien corresponda. El admin lee su API para mostrar
el estado. Ojo: la consulta del vencimiento de dominios `.co` no funciona por RDAP. Para esos
dominios, la fecha se escribe a mano o se consulta por WHOIS.

### 4.7 Soporte (tickets)

La página `/soporte/` del sitio se conserva y será la entrada de los tickets de los clientes. El
admin tendrá su bandeja de tickets ligada al CRM: cada ticket pertenece a un cliente y, si
aplica, a un sitio. **Se diseña cuando llegue la UX de referencia** que vas a enviar; por eso
todavía no tiene tablero.

---

## 5. Bóveda: seguridad e importación

### 5.1 Cifrado

- Cada contraseña se cifra con libsodium (XChaCha20-Poly1305) y su propia clave. Esa clave se
  envuelve con una **clave maestra que no es APP_KEY** y vive solo en el entorno del servidor,
  nunca en la base de datos ni en sus copias.
- El texto cifrado lleva atado el ID del acceso y del cliente, para que no se pueda mover a
  otra fila.
- **Mejora posterior (1 USD/mes):** la clave maestra pasa a AWS KMS. Así, robar el servidor y
  la base de datos ya no basta para descifrarlas.
- Límite de 10 revelaciones por minuto y 50 por día por persona. Ninguna exportación masiva.
- **Riesgo que hay que aceptar.** En una bóveda que descifra en el servidor, quien controle el
  servidor puede leer las contraseñas; en Bitwarden, no. A cambio, el equipo ve y usa los
  accesos dentro del CRM, que es lo que pediste. Para reducir el riesgo: servidor dedicado,
  2FA obligatorio, registro de cada revelación y, en la fase siguiente, KMS.

### 5.2 Roles

| Rol | Puede |
|---|---|
| Dirección | Todo, incluidos los accesos de la agencia y de todos los clientes |
| Equipo | Accesos de los clientes que tiene asignados. Ver el registro de lo propio |
| Ventas | CRM y ventas. Sin accesos |

Las contraseñas personales son de su dueño en cualquier rol.

### 5.3 Importar el Excel sin cambiar las contraseñas

Sí se puede, y las contraseñas quedan exactamente como están. El asistente tiene 4 pasos:

1. **Subir:** el .xlsx se lee en memoria y no se guarda. Cada contraseña se cifra en ese mismo
   momento. Lo pendiente de confirmar se borra solo a los 30 minutos.
2. **Columnas:** el admin detecta en qué fila están los encabezados y propone a qué campo va cada
   columna, y tú lo confirmas.
3. **Revisar:** cuántas filas entran y cuáles necesitan una decisión.
4. **Importar:** todo entra en una transacción, marcado "Excel · sin rotar", con un solo registro
   de auditoría que no guarda valores.

**Tu archivo, revisado el 7 de octubre** (la copia compartida, sin la columna de contraseñas):

| Hoja | Filas | Encabezados | Se importa como |
|---|---|---|---|
| Contraseñas Dkoding | 41 | Fila 3, desde la columna B: Nombre · Tipo acceso · Correo/Usuario · Link de acceso · Códigos de respaldo/Llave de acceso · Último cambio | Agencia. Las cuentas personales de una persona del equipo se proponen como Personales |
| Contraseñas Clientes | 155 | Fila 1, desde la columna B: Nombre · Sitio web · Tipo · Usuario · Link de acceso | Clientes: 84 clientes y 57 sitios |

Lo que el importador resuelve con tus datos reales:

| Caso | Cuántos | Qué hace |
|---|---|---|
| Clientes que no existen en el CRM | 84 | Se crean. Los servicios los cargas después desde los formularios |
| Filas sin cliente | 13 | Se asignan a mano o se omiten |
| Filas sin tipo | 16 | 3 se deducen del enlace; 13 quedan a mano |
| Tipos escritos de 11 formas | 139 | Se normalizan: Cpanel → cPanel, WebMail → Correo, Gmail → Google, Hostinger/NameCheap/GoDaddy → Hosting o dominio, Brevo/Boxplay → Herramienta |
| Enlaces sin `https://` | 59 | Se completan |
| Enlaces vacíos | 47 | En cPanel y WordPress se propone `dominio/cpanel` o `dominio/wp-admin` |
| Inicio de sesión escondido | 4 | Se respeta la ruta propia |
| Sitios con espacios al final | 14 | Se recortan en el sitio y el enlace. **Nunca en la contraseña** |
| Duplicado exacto | 1 | Se omite |
| Usuarios repetidos en varios clientes | 11 | Informativo: suelen ser usuarios genéricos |
| "Tipo acceso: Google" | 6 | Sin contraseña propia: se enlazan a la cuenta de Google de la agencia |
| Códigos de respaldo de doble verificación | 2 | Se guardan cifrados como secreto adicional |
| Enlace con una sesión vieja de WHM (`cpsess…`) | 1 | Se limpia la parte de sesión |
| Último cambio vacío | 41 | Queda como "desconocido" |
| Dominios .co, .com.co, .edu.co | 13 | Informativo: su vencimiento se escribe a mano en Salud |

Lo que depende de la columna de contraseñas (espacios al inicio o al final, celdas que Excel
convirtió en número o fecha, contraseñas repetidas entre clientes) se revisa al subir el archivo
real.

Con las decisiones por defecto entran **141 accesos de clientes y 41 de la agencia**.

**Después de importar:** borra el Excel de todos los lugares donde esté (computadores, Drive,
correo, WhatsApp). Cambiar contraseñas no es obligatorio. Conviene hacerlo con calma solo en las
que circularon mucho o se repiten entre clientes; el admin las marca.

---

## 6. Datos

| Tabla | Campos clave |
|---|---|
| `clients` | nombre, nit, estado, notas |
| `contacts` | client_id, nombre, correo, teléfono, rol |
| `services` | client_id, tipo, inicio, periodicidad, renovación, importe, moneda, estado |
| `sites` | client_id, dominio, plataforma, hosting (Banahost, SeguriServer, del cliente, otro), usuario de cPanel, login_url_wp, login_url_cpanel, uptimerobot_id, r2_bucket |
| `credentials` | scope (personal, agencia, cliente), owner_id, client_id, site_id, tipo, método de inicio (contraseña, Google, Facebook) y cuenta enlazada, url, usuario, secreto cifrado, secreto adicional cifrado, clave envuelta, versión de clave, 2FA, verificado_en, verificado_por, verificado_ok, último cambio, origen, rotación |
| `backups` | site_id, fecha, tamaño, clave en R2, estado (leído de R2) |
| `leads` | origen, página, campaña, nombre, contacto, servicio, estado, client_id |
| `quotes` y `quote_lines` | lead_id o client_id, versión de tarifas, horas por rol, rango, estado |
| `rate_versions` | tarifas, multiplicadores, estado (borrador o publicada) |
| `pages` | url, tipo, estado, palabra objetivo, tema, nicho, seo (JSON), blocks (JSON, vacío en el MVP) |
| `page_metrics` | page_id, fecha, clics, impresiones, posición, indexación |
| `redirects` | origen, destino, código, verificado |
| `tickets` (etapa 2) | client_id, site_id, asunto, estado, prioridad, mensajes. Se define con la UX de referencia |
| `activity_log` | quién, qué, sobre qué registro, cuándo, IP |

---

## 7. Etapas

| Etapa | Qué entra | Duración estimada |
|---|---|---|
| 1 · Reemplazar el Excel | Usuarios con 2FA y roles, Clientes y servicios con renovación, Accesos con importador, Sitios con estado y botones de acceso (WHM de Banahost incluido) | 3–4 semanas |
| 2 · Copias, ventas y soporte | UpdraftPlus → R2 con lectura de buckets, Leads por API desde el sitio, Cotizaciones y Tarifas, tickets de soporte cuando llegue su UX | 4–5 semanas |
| 3 · dkoding.net | Páginas, redirecciones y palabras clave con Search Console y GA4, Inicio completo | 2–3 semanas, a la par del lanzamiento del sitio |
| Después | Login firmado en WP, KMS, passkeys, editor, portal del cliente, copias por WHM para sitios que no son WordPress | Según uso |

Las duraciones suponen un desarrollador con experiencia en Laravel y Filament. Hay que
recalibrarlas al terminar la etapa 1. La etapa 1 sirve desde el primer día porque reemplaza el
Excel, y no depende del sitio nuevo.

## 8. Costo mensual

| Concepto | USD/mes |
|---|---|
| Laravel Forge (Hobby) | 12 |
| VPS 2–4 GB con IP fija (DigitalOcean, Nueva York) | 12–24 |
| UptimeRobot (gratis hasta 50 sitios; Solo 12; Team 39) | 0–39 |
| Cloudflare R2 (unos 60 sitios × 2 GB × 6 copias ≈ 720 GB) | ~11 |
| AWS KMS (mejora posterior) | 1 |
| **Total** | **~25–75** |

---

## 9. Preguntas abiertas

**Para ti:**

1. ¿Quién del equipo usará el admin y con qué rol?
2. ¿Los clientes con soporte tienen todos WordPress? ¿Hay otros tipos de sitio?
3. Las 6 redirecciones que siguen por confirmar en `docs/estructura-seo-y-migracion.md` §4.
4. La UX de referencia para los tickets.

**Para Banahost** (el servidor de la agencia):

1. ¿El plan es de revendedor con WHM? ¿El token de API del WHM puede tener el permiso "Create
   User Session" y limitarse a una IP?
2. ¿Qué retención tienen las copias diarias de JetBackup y cómo se restaura una cuenta?
3. ¿Ponen en lista blanca, en cPHulk, CSF e Imunify, la IP del servidor del admin y la de la
   oficina? Unos cuantos intentos con contraseñas viejas bloquearían la IP en todo el servidor.
4. ¿Qué límites de CloudLinux (IO, procesos, inodos) y qué cuota de disco tienen las cuentas?

**Para SeguriServer** (solo para los clientes que están allá): ¿bloquea su firewall envíos de
formulario desde otro sitio al login de cPanel o de WordPress?

## 10. Respuestas del 7 de octubre

| Tema | Respuesta | Qué cambió |
|---|---|---|
| Framework del sitio | Astro | Nada: era el supuesto |
| Ver contraseñas con verificación | Las dos formas de §4.4 | Confirmado |
| Excel de accesos | Compartido sin contraseñas | §5.3 con la estructura real |
| Servicios activos | Se cargan desde los formularios del admin | No se importan (§4.3) |
| `/soporte/` | Se conserva para tickets | Nueva §4.7; la redirección se quitó |
| `/plan-hotelero/` y `/trifecta-hotelera/` | Serán una landing, seguramente Trifecta hotelera | 302 temporales hasta que exista |
| Hosting | Banahost es el servidor de la agencia; SeguriServer, solo de algunos clientes | cPanel por WHM sin contraseña; preguntas a Banahost |
| Palabras clave | Cifras de referencia de hace unos años | Se usan como relevancia relativa |
| Matriz competitiva | Para mejorar la oferta | `docs/mejoras-oferta.md` |
