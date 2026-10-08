# SEO, GEO y AEO en 2026: notas de la presentación y acciones para DKODING

Fecha: 2026-10-08 · Estado: **NOTAS Y PLAN**

Fuente: la presentación de NotebookLM «La nueva arquitectura del posicionamiento generativo»
(13 diapositivas, «basada en 19 fuentes»). Las cifras y tácticas se contrastaron con fuentes
primarias; están al final.

---

## Resumen

1. **La idea central se sostiene:** el SEO sigue siendo la base y la IA cambia dónde se ve la
   marca. Ganan los sitios rápidos, con el HTML completo desde el servidor, las páginas
   comerciales primero y el contenido con experiencia propia. dkoding.net ya va por ese camino:
   Astro estático en Cloudflare y las landings y el cotizador antes que el blog.
2. **Las cifras de la presentación vienen de agencias que venden GEO.** Sirven para ver la
   tendencia, no para citarlas. Las verificables: en EE. UU., 58,5 % de búsquedas sin clic en
   2024 y 68 % en 2026, aunque las dos se midieron de forma distinta. Cuando aparece un AI
   Overview, el primer resultado pierde entre 34,5 % y 58 % de los clics según Ahrefs. Según
   Pew, quien ve un resumen de IA hace clic en un resultado en el 8 % de las visitas, contra el
   15 % de quien no lo ve.
3. **Dos tácticas que no conviene seguir:** la «ingeniería de prompts inversos» y sembrar
   menciones en Reddit o Quora. La guía de Google de mayo de 2026 dice que las menciones
   inauténticas no ayudan. También dice que crear una página por cada variación de una consulta
   viola su política de contenido masivo.
4. **Google desmiente varios mitos de «AEO/GEO».** Ignora `llms.txt`. No hace falta trocear el
   contenido en pedazos para la IA. El schema no es requisito para salir en la IA, aunque sigue
   sirviendo para los resultados enriquecidos.
5. **Hay un riesgo inmediato en el lanzamiento:** Cloudflare bloquea por defecto los rastreadores
   de IA en los dominios nuevos. Si nadie lo revisa al pasar dkoding.net a Cloudflare, el sitio
   nuevo no se verá en ChatGPT, Claude ni Perplexity.

---

## 1. Diapositiva por diapositiva

| # | Idea | Qué tan sólido es | Para DKODING |
|---|---|---|---|
| 1 | Portada: playbook de SEO, GEO y AEO | — | — |
| 2 | Fin de los enlaces azules: −60 % de tráfico orgánico, 40 % de consultas sin clic, 11–18 % del descubrimiento B2B SaaS llega desde IA | La tendencia es real; las cifras no tienen fuente. El 11–18 % es de SaaS B2B y lo publica GTM 80/20, que vende GEO | Usar las cifras de SparkToro, Ahrefs y Pew si hace falta citar. Para servicios locales en Cali la búsqueda en Google sigue mandando |
| 3 | Evolución, no ruptura: Hummingbird (2013), RankBrain (2015), BERT (2018), MUM (2021), AI Overviews y LLM (2026) | Correcto en lo esencial. BERT llegó a la búsqueda en 2019, y el «Information Gain» es una patente de Google, no parte de BERT | Sirve como artículo del blog y para explicar el servicio sin alarmismo |
| 4 | Matriz SEO, GEO y AEO: qué se mide, cómo se estructura el contenido y cómo se gana autoridad | Útil como marco de medición. La «puntuación E-E-A-T» no existe como número | Base de los indicadores del módulo SEO (§5) |
| 5 | *Reversal inbound*: primero las páginas que venden y después el contenido informativo que las alimenta | Sólido. Es el enfoque de BIGSEO, ya revisado en `benchmark-bigseo-seo-geo-diseno-2026.md` | **Ya es nuestro plan:** 5 landings y el cotizador al lanzar, y cada artículo del blog enlaza a su landing (`estructura-seo-y-migracion.md` §2 y §3) |
| 6 | 4 pilares técnicos del GEO: HTML desde el servidor, estructura semántica, prompts inversos y validación cruzada | Bien: el HTML desde el servidor (los rastreadores de IA no ejecutan JavaScript, según Vercel y MERJ) y la estructura semántica. Parcial: la validación cruzada (presencia real en directorios, medios y reseñas, sí; menciones sembradas, no). Mal: los prompts inversos | Acciones 1 a 3 y 8 de §2 |
| 7 | Latencia: WordPress pesado contra temas optimizados (GeneratePress, Astra) y JAMstack «+1.900 % más rápido» | Dirección correcta; el +1.900 % no tiene fuente | Astro estático en CDN cumple. Para los clientes en WordPress hay una venta: optimización o migración |
| 8 | *Information Gain*: lo que la IA no puede inventar (datos propios, encuestas, casos reales, errores y matices) | Sólido. Coincide con Google: el contenido que no es genérico es el factor más influyente | Casos con cifras, datos del cotizador y experiencia del equipo (acciones 5 y 6 de §2) |
| 9 | Impacto medible: Cobee +195 %, GTM 80/20 ×5, LoopStudio +867 % | Son casos publicados por las mismas agencias y no se pueden verificar. Lo útil es qué miden: presencia en las respuestas de IA y leads | No citarlos. Copiar la forma de medir |
| 10 | Auditar al proveedor: señales de alarma y de excelencia | Útil como lista de chequeo | Argumento de venta y lista de funciones del módulo SEO: presencia por prompt, mapa de prompts, reputación y atribución de la mención al lead |
| 11 | Mapa de agencias en España y LATAM: BIGSEO, Ranker Studio, GTM 80/20, Eskimoz, iSocialWeb y Rodanet | Visión de mercado de la fuente, sin datos | Ninguna está en Cali. DKODING puede ocupar «SEO completo, local y con producto propio» |
| 12 | Glosario: entidades, HTML desde el servidor, presupuesto de rastreo, resultados enriquecidos | Correcto | Entra al glosario del blog (`estructura-seo-y-migracion.md` §6.3, punto 8) |
| 13 | Infraestructura estática + páginas que venden primero + Information Gain = autoridad | Buena síntesis | Falta la cuarta pieza: **medir**. Está en §3 |

---

## 2. Acciones inmediatas: antes y durante el lanzamiento de dkoding.net

| # | Acción | Detalle | Dónde |
|---|---|---|---|
| 1 | **Dejar entrar a los rastreadores de IA** | Revisar en Cloudflare el control de rastreadores de IA y el robots.txt administrado antes de mover el DNS. Permitir los de búsqueda y respuesta: Googlebot, Bingbot, OAI-SearchBot, ChatGPT-User, PerplexityBot, ClaudeBot, Claude-SearchBot y Applebot. Recomiendo permitir también los de entrenamiento (GPTBot, Google-Extended, CCBot), porque a DKODING le conviene que la IA conozca la marca. Es tu decisión | `robots.txt` en el repositorio del sitio y la configuración de Cloudflare |
| 2 | **Todo el texto en el HTML** | Astro ya entrega HTML estático. Cuidado con lo interactivo: el texto de las diapositivas del hero, las pestañas de servicios y el FAQ debe estar en el HTML aunque se muestre con JavaScript. `/cotizador/` lleva texto explicativo indexable además del cotizador | Componentes de Astro |
| 3 | **Schema por plantilla** (ya planificado) | Organization o ProfessionalService con `sameAs` (redes, Google Business Profile, dkard.co); LocalBusiness con la dirección de Cali; Service y Offer; FAQPage; BreadcrumbList; Article con Person como autor. Las reseñas propias no sirven para estrellas: solo se marcan las de terceros | `diseno-landing-2026.md` §5 |
| 4 | **Respuesta directa arriba** | Cada landing abre con un párrafo de 40–60 palabras que responde qué es, cuánto cuesta (o «desde») y cuánto tarda, y cierra con preguntas frecuentes reales. Solo esa entrada; el resto del texto se escribe para personas | Textos de las 5 landings |
| 5 | **Information Gain en cada landing** | Un caso con cifras reales, fotos del equipo real, el Método DKODING en 5 pasos y rangos que salen del cotizador. Es lo que la IA no puede copiar | `mejoras-oferta.md`, acciones 2 y 7 |
| 6 | **Autores reales** | Página del equipo y ficha de autor con Person; cada artículo firmado por quien tiene la experiencia | Plantilla de blog |
| 7 | **Medir desde el día uno** | Search Console, incluido su informe de IA generativa (solo muestra impresiones). Bing Webmaster Tools, y IndexNow con Crawler Hints de Cloudflare. En GA4, el canal «AI Assistant» y un grupo de canales propio con `chatgpt\.com\|chat\.openai\.com\|perplexity\.ai\|claude\.ai\|gemini\.google\.com\|copilot\.microsoft\.com`. En el cotizador, los tickets y WhatsApp, una pregunta «¿Cómo nos conociste?» con la opción «ChatGPT u otra IA», guardada como origen del lead en el CRM | Admin (etapa 3) y formularios |
| 8 | **Validación cruzada legítima** | Google Business Profile completo, con el mismo nombre, dirección y teléfono que el sitio. 2 o 3 directorios de agencias donde los clientes dejan reseñas reales (Clutch, Sortlist o GoodFirms) | Tarea de marketing, sin desarrollo |
| 9 | **`llms.txt`, prioridad baja** | Google lo ignora y no es prueba de GEO. Se puede publicar porque no hace daño, pero no se vende como diferencial | Corregido en `estructura-seo-y-migracion.md` §6.3 |

---

## 3. Acciones futuras: después del lanzamiento

| # | Acción | Detalle |
|---|---|---|
| 1 | **Mapa de prompts** | 30–50 preguntas reales de clientes en Cali, sacadas de `seo/palabras-clave-clasificadas.csv`. Por ejemplo: «¿qué agencia de páginas web recomiendas en Cali?» o «¿cuánto cuesta una página web en Colombia?». Una vez al mes se mide en ChatGPT, Perplexity, Gemini, AI Overviews y Copilot si DKODING aparece, si la citan con enlace y qué competidores salen. Empieza manual, en una hoja, y después pasa al módulo SEO |
| 2 | **Atribución de la mención al lead** | Origen «IA» del lead en el CRM, cruzado con el canal de GA4 |
| 3 | **Datos propios que la IA cite** | Un informe anual con datos del cotizador, por ejemplo «Cuánto cuesta una página web en Cali en 2027», y una encuesta corta a clientes. Es el contenido con más posibilidades de ser citado |
| 4 | **Clústeres del blog hacia las landings** | Ya planificado en `estructura-seo-y-migracion.md` §3. Cada artículo aporta algo propio: un caso, un dato o un error real |
| 5 | **Reputación fuera del sitio** | Reseñas en Google con respuesta, apariciones en medios y gremios de Cali, charlas, y participación en comunidades firmada como DKODING |
| 6 | **Imágenes y video** | Casos en video corto con transcripción. Imágenes propias con texto alternativo |
| 7 | **Clientes en WordPress** | Plan de optimización (tema ligero, caché y CDN) o migración a Astro, como servicio |
| 8 | **Revisión trimestral** | La guía de Google, las políticas de rastreadores de cada motor y la configuración de Cloudflare cambian varias veces al año |

---

## 4. Qué no hacer

- Prompts inversos ni frases repetidas para forzar que el modelo nos asocie.
- Una página por cada variación de una consulta, o páginas por ciudad sin contenido propio.
- Menciones pagadas o falsas en Reddit, Quora o reseñas.
- Prometer «posición en ChatGPT» o citar cifras de casos ajenos.

---

## 5. Cómo alimenta el producto para clientes

Decisiones del 8 de octubre:

- Un solo software; cada cliente lo ve con su logo y sus colores.
- El cliente tiene un **asistente de desarrollo** para pedir ajustes.
- El **módulo SEO es pago**.
- El uso de la IA se paga con **créditos**.

De la presentación salen estas funciones del módulo SEO:

| Función | De dónde sale | ¿Gasta créditos? |
|---|---|---|
| Revisión técnica de cada página: título, H1, canonical, schema, indexación y velocidad | El MVP del admin (§4.2) | No |
| Rastreadores permitidos: lee el robots.txt y prueba los agentes de IA | Acción 1 de §2 | No |
| Search Console, con el informe de IA generativa | Acción 7 de §2 | No |
| Visitas desde asistentes de IA, y leads con origen «IA» en el CRM | Acción 7 de §2 y acción 2 de §3 | No |
| **Presencia por prompt:** en qué respuestas aparece la marca, con cita o sin ella, y quién más aparece | Diapositivas 4, 9 y 10 | Sí: cada consulta a un motor tiene costo |
| Sugerencias por página: respuesta directa, preguntas frecuentes y qué falta de experiencia propia | Diapositivas 4 y 8 | Sí |

**Límite técnico de la presencia por prompt:** se mide con las APIs de los motores, con
búsqueda web activada, o con proveedores de resultados de Google, porque AI Overviews no tiene
API. Las respuestas cambian por usuario y por día, así que el dato es una tendencia, no una
posición exacta. Hay que decirlo así en el producto.

---

## Fuentes

- Presentación: https://notebook.google.com/notebook/7058431f-daef-424e-9833-dd5282284e5d/artifact/3b3f33c9-8a1f-4827-b2e6-e27ef5265cb3
- Google, guía para la búsqueda con IA generativa (mayo de 2026): https://developers.google.com/search/docs/fundamentals/ai-optimization-guide
- Google, «AI features and your website»: https://developers.google.com/search/docs/appearance/ai-features
- SparkToro, búsquedas sin clic en 2026 (resumen en Search Engine Land): https://searchengineland.com/google-zero-click-searches-2026-study-479717
- Ahrefs, AI Overviews y clics: https://ahrefs.com/blog/ai-overviews-reduce-clicks-update/
- Pew Research, resumen: https://www.searchengineworld.com/pew-data-confirms-50-reduction-in-serp-click-through-rates
- Vercel y MERJ, rastreadores de IA y JavaScript: https://vercel.com/blog/the-rise-of-the-ai-crawler
- Aggarwal et al., «GEO: Generative Engine Optimization» (KDD 2024): https://arxiv.org/abs/2311.09735
- OpenAI, rastreadores: https://developers.openai.com/docs/bots
- Cloudflare, robots.txt administrado: https://developers.cloudflare.com/bots/additional-configurations/managed-robots-txt/
- Cloudflare y el bloqueo por defecto (resumen): https://chudi.dev/blog/cloudflare-block-ai-crawlers-september-15
- Search Console, informe de IA generativa: https://www.searchenginejournal.com/google-search-console-ai-reports-rolled-out-worldwide/587836
- GA4, canal «AI Assistant»: https://www.searchenginejournal.com/google-analytics-adds-ai-assistant-as-default-channel-group/574974/
