# Efectos de alto impacto para sitios en Astro: catálogo curado con enlaces

> Fecha: 2026-10-06. Complementa §5 de `benchmark-bigseo-seo-geo-diseno-2026.md`.
> Criterio: efectos que (a) se usan en sitios premiados o en demos de referencia 2025–2026,
> (b) funcionan como **isla** en Astro (`client:visible` / `client:idle`) sin romper
> HTML estático ni Core Web Vitals, (c) tienen código o tutorial accesible.
> Nota: tympanus.net y github.com no se pudieron abrir desde este entorno (bloqueo de
> proxy); los enlaces a esos hosts se listan sin verificación de hoy.

---

## 1. Sitios reales en Astro con premio (Awwwards)

Para ver qué nivel de efecto es alcanzable con Astro en producción.

| Sitio | Reconocimiento | Qué mirar |
|---|---|---|
| https://sstr.tech/en (SSTR – Friction Reduction) | **Site of the Day + Developer Award**, ago 2026 | Hero WebGL, scrollytelling técnico, transiciones de página |
| https://wearebou.com (Bou) | Honorable Mention, sep 2026 | Tipografía cinética, hover de galería |
| https://boldium.com (Boldium, agencia) | Honorable Mention, ago 2026 | Landing de agencia: marquee, reveals, casos con transición |
| https://basepowercompany.com/core | Honorable Mention, sep 2026 | Producto contado con scroll pinneado |
| https://ghost-pitcher.com | Honorable Mention, ago 2026 | 3D interactivo ligero |
| https://plnty.app | Honorable Mention, sep 2026 | Micro-interacciones de app en landing |
| https://ownthepatch.co.uk | Honorable Mention, ago 2026 | Narrativa por scroll con ilustración |
| https://0no.co (Oh No Co) | — | Cinta 3D en degradado, sellos circulares |
| https://hipe.rocks | — | Wireframes 3D, degradados cálidos |
| https://ux3d.io | — | Escena Three.js en la home, caso documentado en https://ux3d.io/en/blog/threejs/ |
| https://juncastudio.com · https://digitalmeadow.studio · https://studiors.be · https://inks.studio | — | Estudios de diseño en Astro: referencia directa para una agencia |

Colecciones completas:
- Awwwards, filtro Astro: https://www.awwwards.com/websites/astro/
- Showcase oficial: https://astro.build/showcase/
- 93 ejemplos anotados: https://createtoday.io/examples?platform=astro
- Awesome Astro (lista comunitaria): https://github.com/one-aalam/awesome-astro

---

## 2. Librerías base (el "stack de efectos" para Astro)

| Librería | Para qué | Enlace | Peso aprox. | Cómo va en Astro |
|---|---|---|---|---|
| **GSAP 3 + ScrollTrigger + SplitText** (100 % gratis desde 3.13) | Timelines, pin, scrub, reveals por letra/línea | https://gsap.com/docs/v3/Plugins/ScrollTrigger/ · https://gsap.com/docs/v3/Plugins/SplitText/ · https://gsap.com/pricing/ | ~70 KB gz con plugins | `<script>` de página o isla; re-iniciar en `astro:page-load` y usar `gsap.context()` + `revert()` al navegar |
| **Lenis** | Smooth scroll con inercia, integrado con ScrollTrigger | https://github.com/darkroomengineering/lenis · demos: https://freefrontend.com/lenis-js/ | ~4 KB | Instanciar una vez; `lenis.on('scroll', ScrollTrigger.update)` y `gsap.ticker.add(...)` |
| **Motion** (ex Framer Motion, versión vanilla) | Animaciones declarativas, springs, layout | https://motion.dev · https://github.com/motiondivision/motion | ~18 KB | Isla React o API vanilla `animate()` sin React |
| **Three.js** | 3D/WebGL completo, glTF | https://threejs.org · plantilla Astro: https://github.com/nemutas/three-template-with-astro | 150+ KB | Isla `client:visible`; pausar render fuera de viewport |
| **OGL** | WebGL mínimo para un shader hero | https://github.com/oframe/ogl | ~25 KB | Igual que Three, 6× más ligero |
| **Paper Shaders** | 28 shaders WebGL2 listos (mesh gradient, grain, liquid metal, halftone) sin Three | https://www.mintlify.com/paper-design/shaders · https://github.com/paper-design/shaders | Pequeño, sin dependencias | Vanilla con `ShaderMount` o isla React; `speed={0}` = render estático sin coste |
| **CSS scroll-driven animations** | Parallax, progress bars, reveals sin JS | https://scroll-driven-animations.style/ | 0 KB | Nativo; baseline en todos los navegadores 2026 |
| **Astro View Transitions** (`<ClientRouter />`) | Transiciones entre páginas tipo app | https://docs.astro.build/en/guides/view-transitions/ · demo Viget: https://viget.com/articles/how-we-designed-and-built-a-view-transition-demo · Chrome: https://developer.chrome.com/blog/astro-view-transitions | 0 KB extra | `transition:name` para que la card del caso se convierta en el hero del caso |
| **Splitting.js** | Split de texto por chars/words con variables CSS | https://splitting.js.org/ | ~3 KB | Alternativa a SplitText si se quiere solo CSS |
| **Vanta.js** | Fondos animados listos (waves, net, fog) | https://www.vantajs.com/ | 100+ KB con Three | Solo si no hay tiempo de shader propio; pesado |

---

## 3. Catálogo de efectos por bloque de la landing

Cada fila: efecto → referencia/demo → librería → nota de uso para DKODING.

### 3.1 Hero (el momento memorable, uno solo)

| Efecto | Referencia | Librería | Nota |
|---|---|---|---|
| **Mesh gradient animado con grano** sobre negro, en los violetas de marca | Paper Shaders "Mesh Gradient" y "Grain Gradient": https://www.mintlify.com/paper-design/shaders/shaders/overview | Paper Shaders | El hero WebGL más barato posible; fallback a gradiente CSS |
| **Núcleo 3D con ruido + campo de partículas que reacciona al cursor** | https://github.com/Babyjupiter96/interactive-3d-hero | Three.js + GLSL | Más espectacular, más caro; solo desktop con puntero fino |
| **Titular con reveal por palabra/línea enmascarado** | Osmo "Masked Text Reveal": https://www.osmo.supply/resource/masked-text-reveal · Vault: https://www.osmo.supply/vault | GSAP SplitText | El LCP debe ser el titular ya visible; animar desde estado visible |
| **Texto con onda dual al hacer scroll** | Codrops "Dual Wave Text Animation on Scroll" (ene 2026): https://tympanus.net/codrops/hub/tag/scroll/ | GSAP + ScrollTrigger | Para el claim "Sitios que venden" al salir del hero |
| **Lente que sigue al cursor con RGB shift** | Codrops "Mouse-Following Square Lens Distortion" (ago 2026): https://tympanus.net/codrops/hub/tag/webgl/ | WebGL | Sobre mockups de proyectos; impacto alto, coste medio |

### 3.2 Prueba social y logos

| Efecto | Referencia | Librería | Nota |
|---|---|---|---|
| **Marquee infinito de logos/clientes** | GSAP `horizontalLoop`: https://webdesign.tutsplus.com/how-to-build-horizontal-marquee-effects-with-gsap--cms-108794t | CSS `@keyframes` o GSAP | En CSS puro cuesta 0 KB; pausa en hover |
| **Marquee que se revela con clip-path** | https://hamza-syrage.is-a.dev/labs/marquee-reveal | GSAP | Para la palabra "Resultados" |
| **Contadores que suben al entrar en viewport** | GSAP `to` + `snap` + ScrollTrigger (docs arriba) | GSAP | Solo con cifras reales de casos |

### 3.3 Servicios (bento) y cards

| Efecto | Referencia | Librería | Nota |
|---|---|---|---|
| **Bento grid con tilt 3D y borde degradado animado** | Magic UI "Bento Grid", "Border Beam", "Magic Card": https://magicui.design/ | Magic UI (React + Tailwind + Motion) | Isla React; o replicar en CSS puro |
| **Spotlight que sigue al cursor sobre cards** | Aceternity UI: https://ui.aceternity.com/ · alternativas: https://21st.dev/blog/aceternity-ui-alternatives | Motion | Estética oscura con glow: encaja con negro + violeta |
| **Componentes animados sin Framer Motion** (CSS + GSAP solo donde hace falta) | React Bits: https://reactbits.dev/ | React Bits | Más ligero que Magic UI/Aceternity; #2 en JS Rising Stars 2025 |
| **Skeleton fluid reveal / rayos X al hover** | Codrops "Skeleton Fluid Reveal" (mar 2026): https://tympanus.net/codrops/hub/tag/webgl/ | Three.js | Para mostrar "antes/después" de un rediseño |

### 3.4 Proceso (scrollytelling)

| Efecto | Referencia | Librería | Nota |
|---|---|---|---|
| **Secciones pinneadas con scrub** | GSAP ScrollTrigger `pin` + `scrub` · 60+ ejemplos: https://freefrontend.com/scroll-trigger-js/ | GSAP | "Qué pasa entre que pagas y recibes" en 4–6 pasos |
| **Transiciones con máscara SVG al scroll** | Codrops "On-Scroll SVG Mask Transitions" (mar 2026): https://tympanus.net/codrops/hub/tag/scroll/ | GSAP | Usar el chevrón del logo como máscara: efecto propio de marca |
| **Scroll infinito con parallax por capas** | Codrops "The Never Ending Story" (may 2026): https://tympanus.net/codrops/2026/05/28/the-never-ending-story-building-a-seamless-infinite-scroll-experience-with-gsap-lenis/ | GSAP + Lenis | Para la galería de proyectos |
| **Página de una sola vista con Lenis + ScrollTrigger + clip-path** | https://freefrontend.com/code/lenis-smooth-scroll-gsap-page-2026-03-17/ · repo de estudio: https://github.com/thounny/DAY_015 | GSAP + Lenis | Punto de partida para prototipar |

### 3.5 Portafolio / casos

| Efecto | Referencia | Librería | Nota |
|---|---|---|---|
| **Galería WebGL revelada por scroll, en Astro, con transiciones entre páginas** | Codrops, feb 2026 (hecho **en Astro**): https://tympanus.net/codrops/2026/02/02/building-a-scroll-revealed-webgl-gallery-with-gsap-three-js-astro-and-barba-js/ | GSAP + Three.js + Barba | La referencia más directa para DKODING: galería de proyectos + navegación a caso |
| **Galería 3D que sigue una curva de Blender** | Codrops "Scroll-Driven 3D Gallery Along Blender Path" (jul 2026): https://tympanus.net/codrops/hub/tag/webgl/ | Three.js + GSAP | Máximo impacto, máximo coste |
| **Galería con profundidad atmosférica** | Codrops "Atmospheric Depth Gallery" (mar 2026): https://tympanus.net/codrops/hub/all/codrops/ | WebGL | Niebla/profundidad sobre mockups |
| **Card → hero del caso con View Transitions** | https://docs.astro.build/en/guides/view-transitions/ (`transition:name`) | Astro nativo | 0 KB; la mejor relación impacto/coste del catálogo |
| **Slider antes/después** | Patrón CSS `clip-path` + `input[type=range]` (sin librería) | — | Imprescindible para "sitios que venden" |

### 3.6 CTA y micro-interacciones

| Efecto | Referencia | Librería | Nota |
|---|---|---|---|
| **Botón magnético** | Cuberto tutorial: https://cuberto.com/tutorials/27 · Codrops "Magnetic Buttons" | GSAP `quickTo` | Solo `@media (pointer: fine)` |
| **Cursor personalizado con mezcla** | Codrops "Animated Custom Cursor Effect" (ver hub) | GSAP | Desktop; ocultar en táctil |
| **Image trail al mover el mouse** | Codrops "Image Trail Effects" (ver hub) | GSAP | Para sección de equipo o servicios |
| **Texto que se recombina al scroll** | Mat Voyce: https://matvoyce.tv | GSAP | Inspiración de tipografía cinética |

### 3.7 Referencias de "restricción elegante" (lo que premia Awwwards 2026)

- https://by-kin.com — scroll con peso, transiciones que no llaman la atención.
- https://uncommonstudio.com.au — grid que se rompe en el momento justo.
- https://minhpham.design — 3D que enmarca el trabajo sin tapar el contenido.
- https://iventions.com — escenas 3D tipo instalación iluminada.
- Análisis de un jurado: https://www.hontran.dev/blog/best-award-winning-websites-2026

---

## 4. Hubs para seguir buscando

- Codrops Creative Hub (todos los demos, filtrable): https://tympanus.net/codrops/hub/ · GSAP highlights: https://tympanus.net/codrops/hub/gsap-highlights/ · WebGL: https://tympanus.net/codrops/hub/tag/webgl/ · Scroll: https://tympanus.net/codrops/hub/tag/scroll/ · Con tutorial: https://tympanus.net/codrops/hub/tutorials/
- Osmo Supply (vault de interacciones GSAP listas): https://www.osmo.supply/vault
- FreeFrontend: Three.js https://freefrontend.com/three-js/ · WebGL https://freefrontend.com/webgl/ · ScrollTrigger https://freefrontend.com/scroll-trigger-js/ · Lenis https://freefrontend.com/lenis-js/
- GitHub topics: https://github.com/topics/lenis-scroll · https://github.com/topics/scrolltrigger
- 21st.dev (componentes animados copiables): https://21st.dev/
- Comparativa React Bits vs Aceternity vs Magic UI: https://www.pkgpulse.com/guides/react-bits-vs-aceternity-magic-ui-2026

---

## 5. Reglas para que nada de esto rompa Astro ni los Core Web Vitals

1. **Todo efecto es una isla** (`client:visible` o `client:idle`). El HTML de servicios,
   casos y precios se renderiza en servidor y está completo sin JS.
2. **Un solo momento WebGL** (el hero). Lo demás: GSAP, CSS scroll-driven y View Transitions.
3. **Presupuesto**: hero completo < 250 KB de JS; resto de la página < 150 KB.
4. **Lenis + ScrollTrigger + View Transitions**: crear en `astro:page-load`, destruir en
   `astro:before-swap`; envolver GSAP en `gsap.context()` y hacer `revert()` para que
   SplitText no borre el texto al navegar (hilo de referencia:
   https://greensock.com/forums/topic/37016-splittext-deletes-text-after-page-transition/).
5. **`prefers-reduced-motion`**: cada efecto tiene versión estática. Es criterio Awwwards.
6. **Pausar render WebGL fuera de viewport** (IntersectionObserver) y en pestañas ocultas.
7. **Texto siempre en HTML**, nunca en canvas: lo leen Google y los bots de IA.
8. **Probar en Moto G con 4G** antes de cada release; Lighthouse CI bloquea si baja de 90.
