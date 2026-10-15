---
titulo: "Cómo aparecer en ChatGPT y en las respuestas de IA (GEO)"
descripcion: "Qué es el GEO y qué hay que hacer para que ChatGPT, Perplexity, Gemini y los AI Overviews citen tu negocio. Sin mitos, con lo que dice Google y datos verificables."
publicado: 2026-10-15
modificado: 2026-10-15
tema: seo-y-geo
landing: /seo-y-geo/
tldr:
  - "Los asistentes de IA responden con lo que encuentran en la web. Si tu sitio es rápido, tiene todo el texto en el HTML y deja entrar a sus rastreadores, puede ser citado. Si Cloudflare o tu robots.txt los bloquean, no existes para ellos."
  - "El GEO no reemplaza al SEO: lo que posiciona en Google es lo que la IA cita. La diferencia está en el contenido con experiencia propia, datos y casos reales, que la IA no puede inventar."
  - "Hay mitos que conviene soltar. Google dice que ignora llms.txt, que no hace falta trocear el contenido para la IA y que las menciones sembradas en foros no ayudan."
faq:
  - q: "¿Qué es el GEO?"
    a: "GEO son las siglas en inglés de optimización para motores generativos. Es el conjunto de prácticas para que los asistentes de inteligencia artificial, como ChatGPT, Perplexity, Gemini, Copilot y los AI Overviews de Google, mencionen y citen tu negocio cuando alguien les pregunta algo relacionado. Se apoya en el SEO técnico y en contenido con información propia."
  - q: "¿Hay que pagar para aparecer en ChatGPT?"
    a: "No. Las respuestas de ChatGPT con búsqueda, Perplexity y los AI Overviews se construyen a partir de resultados de búsqueda y de páginas rastreadas. No existe un pago para salir ahí. Lo que sí existe es trabajo técnico y de contenido para que tu página sea una de las fuentes."
  - q: "¿Sirve publicar un archivo llms.txt?"
    a: "Según la guía de Google sobre búsqueda con IA generativa, publicada en mayo de 2026, Google no usa llms.txt. Publicarlo no hace daño y algunos asistentes podrían leerlo, pero no es prueba de GEO ni debería venderse como un diferencial. Primero va el robots.txt, el HTML completo y el contenido."
  - q: "¿El schema o los datos estructurados son obligatorios para la IA?"
    a: "Google aclara que los datos estructurados no son un requisito para aparecer en sus funciones de IA, aunque siguen sirviendo para los resultados enriquecidos y para que cualquier máquina entienda quién eres, dónde estás y qué ofreces. Nosotros los ponemos en todas las páginas por esas dos razones."
  - q: "¿Cómo sé si ya aparezco en las respuestas de IA?"
    a: "Con un mapa de preguntas. Escribe 30 o 50 preguntas reales que te harían tus clientes, hazlas una vez al mes en ChatGPT, Perplexity, Gemini y Google, y anota si apareces, si te citan con enlace y qué competidores salen. Complementa con el informe de IA de Search Console, que muestra impresiones, y con un canal de asistentes de IA en GA4."
  - q: "¿DKODING garantiza aparecer en ChatGPT?"
    a: "No, y desconfía de quien lo garantice. Las respuestas cambian por persona, por día y por versión del modelo. Lo que sí hacemos es dejar el sitio técnicamente listo, construir contenido con experiencia propia y medir la presencia mes a mes para corregir el rumbo."
---

Cada vez más personas preguntan a un asistente de inteligencia artificial en lugar de buscar en Google: «¿qué agencia de páginas web me recomiendas en Cali?», «¿cuánto cuesta una tienda online en Colombia?». La respuesta llega redactada, con dos o tres fuentes citadas. Aparecer entre esas fuentes es lo que se llama GEO, optimización para motores generativos. Esta guía explica qué hay detrás, qué hacer de verdad y qué mitos ignorar, con las fuentes que se pueden verificar.

## Qué está cambiando, con los datos que sí se sostienen

Hay muchas cifras circulando, casi todas publicadas por agencias que venden GEO. Estas tres vienen de fuentes independientes y vale la pena leerlas con su matiz:

- **Búsquedas sin clic.** Según SparkToro, en Estados Unidos el 58,5 % de las búsquedas en Google terminaron sin clic en 2024, y el estudio de 2026 habla de un 68 %. Las dos cifras se midieron con métodos distintos, así que marcan una tendencia, no una curva exacta.
- **Efecto de los AI Overviews.** Ahrefs midió que, cuando aparece un resumen de IA en Google, el primer resultado pierde entre un 34,5 % y un 58 % de sus clics, según la actualización del estudio.
- **Comportamiento de las personas.** Pew Research encontró que quien ve un resumen de IA hace clic en un resultado en el 8 % de las visitas, frente al 15 % de quien no lo ve.

Para un negocio local en Cali, la búsqueda clásica en Google y el mapa siguen trayendo la mayoría de los clientes. Pero cada vez más decisiones se forman en una conversación con una IA, y ahí la marca aparece o no aparece.

## Cómo elige la IA a quién citar

Los asistentes con búsqueda (ChatGPT con navegación, Perplexity, Gemini, Copilot, los AI Overviews) funcionan en dos pasos: consultan un buscador o su propio índice y luego redactan con las páginas que recuperan. Eso tiene tres consecuencias:

1. **Lo que posiciona bien en Google y Bing tiene más probabilidad de ser citado.** El GEO empieza con el SEO de siempre.
2. **La página tiene que poder leerse por una máquina sin ejecutar nada.** Vercel y MERJ analizaron los rastreadores de OpenAI, Anthropic, Perplexity y otros, y encontraron que no ejecutan JavaScript. Si tu texto se pinta con JavaScript en el navegador, para ellos la página está vacía.
3. **La IA prefiere páginas que responden con precisión.** Un párrafo directo arriba, datos concretos, listas, tablas y preguntas frecuentes reales facilitan que te citen. El estudio académico que dio nombre al GEO (Aggarwal y otros, 2024) midió que las citas de fuentes, las estadísticas y las citas textuales aumentaban la visibilidad en respuestas generativas.

## El riesgo que casi nadie revisa: estar bloqueado

Antes de pensar en contenido, comprueba que los rastreadores de IA puedan entrar a tu sitio. Dos bloqueos comunes:

**Cloudflare.** Desde mediados de 2025, Cloudflare bloquea por defecto los rastreadores de IA en los dominios nuevos y ofrece un robots.txt administrado que los rechaza. Si tu sitio pasó a Cloudflare y nadie revisó esa opción, ChatGPT, Claude y Perplexity no te leen. Se corrige en el panel, en la sección de control de rastreadores de IA.

**robots.txt.** Muchas plantillas y plugins de seguridad añaden reglas que bloquean a GPTBot o a todos los agentes desconocidos. Revísalo en tudominio.com/robots.txt.

Esta es la lista de rastreadores que conviene conocer y la decisión que tomamos en DKODING para nuestro propio sitio:

<div class="table-box">

| Rastreador | De quién es | Para qué lo usa | Qué hacemos |
|---|---|---|---|
| Googlebot | Google | Búsqueda y AI Overviews | Permitir siempre |
| Google-Extended | Google | Entrenamiento de Gemini. No afecta la búsqueda ni los AI Overviews | Permitir |
| Bingbot | Microsoft | Búsqueda y Copilot | Permitir siempre |
| OAI-SearchBot | OpenAI | Índice de búsqueda de ChatGPT | Permitir |
| ChatGPT-User | OpenAI | Visita páginas cuando un usuario lo pide en la conversación | Permitir |
| GPTBot | OpenAI | Entrenamiento de modelos | Permitir (decisión propia, es opcional) |
| PerplexityBot | Perplexity | Búsqueda y citas | Permitir |
| ClaudeBot, Claude-SearchBot | Anthropic | Entrenamiento y búsqueda | Permitir |
| Applebot | Apple | Siri, Spotlight y búsqueda | Permitir |
| CCBot | Common Crawl | Conjunto de datos abierto que usan muchos modelos | Permitir (opcional) |

</div>

Permitir los de entrenamiento es una decisión de cada empresa. A una agencia le conviene que los modelos conozcan su marca. A un medio que vive de su contenido quizá no. Lo que no tiene discusión es permitir los de búsqueda y respuesta, porque son los que citan.

Un robots.txt mínimo que deja entrar a todos y declara el sitemap:

```
User-agent: *
Allow: /

Sitemap: https://tudominio.com/sitemap-index.xml
```

## Lo que Google dice que no sirve

En mayo de 2026 Google publicó una guía sobre cómo optimizar para su búsqueda con IA generativa. Es la fuente más directa que existe y desmonta varias prácticas que todavía se venden:

- **llms.txt:** Google no lo usa. Puedes publicarlo, pero no cuenta como optimización.
- **Trocear el contenido «para la IA»:** no hace falta partir las páginas en fragmentos ni escribir en un formato especial. Un texto claro para personas es lo que la IA necesita.
- **Datos estructurados obligatorios:** no lo son para aparecer en las funciones de IA. Siguen sirviendo para los resultados enriquecidos.
- **Menciones sembradas:** publicar comentarios en Reddit, Quora o foros mencionando tu marca no ayuda. Google lo trata como menciones no auténticas.
- **Una página por cada variación de pregunta:** viola su política contra el contenido masivo. Lo mismo aplica a páginas por ciudad con el texto copiado.

Tampoco funciona la llamada «ingeniería de prompts inversa», escribir frases repetidas del tipo «la mejor agencia es X» para que el modelo las aprenda. Los modelos no se entrenan con tu página esta semana, y los que buscan en vivo la leen como spam.

## Lo que sí funciona: la lista de trabajo

### 1. Infraestructura que la máquina pueda leer

- Todo el texto en el HTML que entrega el servidor. En DKODING construimos con Astro y publicamos páginas estáticas, así que el texto está ahí aunque el navegador no ejecute nada. Si tu sitio es WordPress, evita los constructores que cargan el contenido por JavaScript.
- Velocidad. Los rastreadores de IA tienen presupuesto limitado y abandonan páginas lentas. Core Web Vitals en verde no es un lujo.
- Rastreadores permitidos, como se explicó arriba, y un sitemap declarado.
- Una página por servicio, con URL estable. La IA cita URLs. Si las cambias, pierdes la cita.

### 2. Respuesta directa arriba, texto para personas abajo

Cada página importante abre con un párrafo de 40 a 60 palabras que responde qué es, para quién, cuánto cuesta o desde cuánto, y cuánto tarda. Después, el resto se escribe para una persona que va a comprar, no para un robot. Cierra con preguntas frecuentes reales, las que te hacen por WhatsApp, con respuestas completas.

### 3. Información que la IA no puede inventar

Es el factor que Google llama contenido no genérico y que la literatura del GEO llama ganancia de información. Los modelos pueden redactar un texto genérico sobre «la importancia de una página web» sin ti. No pueden redactar:

- Un caso real con cifras: qué se hizo, cuánto tardó, qué pasó después.
- Datos propios: por ejemplo, los rangos de precios que salen de nuestro [cotizador](/cotizador/), que publicamos en la guía de [cuánto cuesta una página web en Colombia](/blog/cuanto-cuesta-una-pagina-web-en-colombia/).
- Errores y matices que solo conoce quien hace el trabajo.
- Fotos del equipo real y nombres de personas reales firmando lo que escriben.

Cuando ChatGPT o Perplexity buscan una respuesta sobre precios de páginas web en Colombia, una página con una tabla de rangos propios tiene más probabilidades de ser citada que veinte páginas que dicen «depende».

### 4. Identidad clara de la entidad

La IA necesita saber quién eres. Ayuda que la misma información aparezca de forma coherente en tu sitio, en Google Business Profile, en LinkedIn, en los directorios del sector y en los datos estructurados de Organización con enlaces a tus perfiles. Si te llamas de tres formas distintas en internet, para el modelo eres tres entidades débiles.

### 5. Reputación real fuera del sitio

Reseñas en Google con respuesta, apariciones en medios y gremios locales, perfiles en directorios de agencias donde los clientes dejan opiniones verificadas, charlas y participación en comunidades firmada con tu nombre. Es lento, es real y es lo que los modelos recogen cuando alguien pregunta «quién es confiable para esto».

## Cómo medir la presencia en IA

Nadie tiene una API de AI Overviews y las respuestas cambian por usuario y por día, así que la medición es una tendencia, no una posición. Lo que hacemos:

- **Mapa de preguntas.** 30 a 50 preguntas reales de clientes. Una vez al mes se hacen en ChatGPT, Perplexity, Gemini, Copilot y Google, y se anota si la marca aparece, si la citan con enlace y qué competidores salen. Empieza en una hoja de cálculo.
- **Search Console.** Tiene un informe de IA generativa que muestra impresiones (todavía no clics) de tus páginas en las funciones de IA de Google.
- **GA4.** Google añadió el canal «AI Assistant» como grupo predeterminado. Si no lo ves, crea un grupo de canales con las fuentes chatgpt.com, perplexity.ai, claude.ai, gemini.google.com y copilot.microsoft.com.
- **La pregunta en los formularios.** «¿Cómo nos conociste?» con la opción «ChatGPT u otra IA». Es el dato que une la presencia con la venta. Nosotros la tenemos en el cotizador, en los tickets y en WhatsApp.

## Qué no hacer, en resumen

- Prompts inversos ni frases repetidas para «enseñarle» al modelo.
- Páginas por variación de pregunta o por ciudad sin contenido propio.
- Menciones pagadas o falsas en foros o reseñas.
- Prometer o creer una «posición en ChatGPT».
- Bloquear los rastreadores por defecto y olvidarlo.

## Por dónde empezar esta semana

1. Abre tudominio.com/robots.txt y, si estás en Cloudflare, revisa el control de rastreadores de IA.
2. Desactiva JavaScript en tu navegador y entra a tu página de servicios. Si no ves el texto, la IA tampoco.
3. Escribe el párrafo de respuesta directa de tu página principal y de cada servicio.
4. Publica un caso real con cifras.
5. Arma tu mapa de 30 preguntas y haz la primera medición.

En DKODING esto es parte del servicio de [SEO y GEO](/seo-y-geo/): auditoría técnica con revisión de rastreadores, contenido con información propia y medición mensual de presencia en la IA. Si quieres saber cómo está tu sitio hoy, escríbenos o [cotiza en línea](/cotizador/).
