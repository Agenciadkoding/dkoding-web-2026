/** Preguntas frecuentes de la home. Las alimentan Faq.astro y el faqSchema de index.astro. */
export const FAQS = [
  { q: '¿En cuánto tiempo está listo?', a: '[Respuesta propuesta] Una landing de alto rendimiento toma [X] semanas; un sitio de 5 a 10 páginas, [Y] semanas, contados desde que recibimos tus insumos. El kickoff ocurre en 5 días hábiles tras la aprobación.' },
  { q: '¿Qué CMS usan?', a: '[Respuesta propuesta] WordPress avanzado cuando necesitas editar mucho contenido tú mismo. Headless (Astro o Next.js con un administrador propio) cuando el rendimiento y el SEO son la prioridad. Lo definimos en el descubrimiento.' },
  { q: '¿El código es mío?', a: 'Sí. Código, dominio, hosting y accesos quedan a nombre de tu empresa desde el primer día. Si mañana decides trabajar con otro equipo, te llevas todo.' },
  { q: '¿Incluye SEO?', a: 'Todo sitio incluye SEO técnico y on-page desde el día uno: estructura, metadatos, schema, enlazado interno e indexación. El posicionamiento continuo (contenidos, autoridad, informes) es un servicio mensual aparte.' },
  { q: '¿Puedo pagar por etapas?', a: '[Respuesta propuesta] Sí: [X] % al inicio, [Y] % al aprobar el diseño y [Z] % al lanzar. Lo detallamos en la cotización.' },
  { q: '¿Se encargan del hosting?', a: 'Sí. Configuramos el hosting a tu nombre, con HTTPS, copias de seguridad y monitoreo desde nuestro panel. Si ya tienes uno, lo auditamos y migramos si hace falta.' },
  { q: '¿Pueden migrar mi sitio actual sin perder SEO?', a: 'Sí. Inventariamos todas tus URL, aplicamos redirecciones 301 una a una, conservamos metadatos y validamos la indexación en Search Console después del cambio.' },
] as const;
