/**
 * Catálogo y tarifas del cotizador por horas (docs/cotizador-por-hora.md y
 * docs/cotizador-catalogo-servicios.md §2). Portado del tablero diseno/admin/Cotizador.dc.html.
 *
 * TARIFAS SEMILLA: las horas por módulo, la tarifa por hora, la capacidad semanal, los factores
 * y los descuentos son valores de arranque. DKODING los ajusta aquí cuando calibre con proyectos
 * reales; la página y el cálculo se actualizan solos en el siguiente build.
 */

export type FamiliaId = 'web' | 'marca' | 'mkt' | 'imp' | 'app' | 'sop';
export type OtraFamiliaId = Exclude<FamiliaId, 'web'>;
export type GrupoId = 'base' | 'presencia' | 'contenido' | 'conversion' | 'comercio' | 'plataforma';
export type NivelId = 'sistema' | 'semi' | 'custom';
export type ContenidoId = 'propio' | 'dkoding';
export type UrgenciaId = 'normal' | 'prio' | 'expres';

export interface OpcionModulo { n: string; h: number }

export interface ModuloWeb {
  id: string;
  n: string;
  d: string;
  /** Horas base. */
  h: number;
  g: GrupoId;
  /** Opciones añadibles con horas extra. */
  opts?: OpcionModulo[];
  /** Pide cantidad de productos (0,5 h por producto cargado). */
  qty?: boolean;
  /** Módulos que ya quedan cubiertos al elegir este (Tienda incluye Productos). */
  incluye?: string[];
  /** Usa área autenticada: el segundo módulo con p8 descuenta 40 h. */
  p8?: boolean;
  /** Si hay blog, el módulo pasa a estas horas (es una categoría más). */
  siBlog?: number;
  /** Recomendamos herramienta externa; esta es la versión propia. */
  ext?: boolean;
  /** Segunda lengua: aplica factor de idiomas al sitio. */
  multi?: boolean;
}

export interface TipoSitio { id: string; n: string; d: string; inc: string[] }

export interface ItemFamilia {
  id: string;
  n: string;
  d: string;
  /** Horas (pago único o por mes si `ret`). */
  h?: number;
  /** Servicio mensual (retainer). */
  ret?: boolean;
  reco?: boolean;
  /** Se cotiza "desde" y se cierra en sesión de alcance. */
  desde?: boolean;
  /** Extra fijo anual en COP, sin multiplicadores. */
  fijo?: number;
}

export interface FamiliaDef { id: OtraFamiliaId; eyebrow: string; title: string; sub: string; items: ItemFamilia[] }

export interface Factor<T extends string> { v: T; label: string; f: number; txt: string }

/* ---------- Constantes (semilla) ---------- */
export const TARIFA_HORA = 60000; // COP por hora de proyecto
export const CAPACIDAD_SEMANAL = 20; // horas de producción por semana
export const INCLUIDO_H = 26; // capacitación, soporte 3 meses, dkard, lanzamiento en redes
export const SETUP_H = 16; // repo, Cloudflare, analítica, schema
export const DIR_PCT = 0.12; // dirección de proyecto
export const MIN_PROY = 1500000; // mínimo de proyecto en COP
export const REDONDEO = 50000;
export const RANGO_MIN = 0.9; // mínimo = base × 0,90
export const RANGO_MAX = 1.15; // máximo = base × 1,15 (15 % de contingencia)
export const UMBRAL_DESDE_H = 200; // más de 200 h: modo "desde"
export const IVA_PCT = 19;
export const ANTICIPO_PCT = 50;
export const VIGENCIA_DIAS = 15;
export const IDIOMAS_F = 1.2;
export const VERSION_TARIFAS = '2026-10 (semilla)';

export const DESCUENTOS = {
  /** Web + marca: la marca tiene 8 % de descuento (investigación compartida). */
  webMarca: 0.08,
  /** Web nueva + SEO on-page inicial: −30 %. */
  webOnpage: 0.3,
  /** Dos o más servicios mensuales: −10 % en el mensual. */
  mensualMultiple: 0.1,
} as const;

export const FAMILIAS: { id: FamiliaId; label: string }[] = [
  { id: 'web', label: 'Sitio web o tienda' },
  { id: 'marca', label: 'Marca' },
  { id: 'mkt', label: 'Marketing y redes' },
  { id: 'imp', label: 'Impresos y carteles' },
  { id: 'app', label: 'App o plataforma' },
  { id: 'sop', label: 'Mantenimiento' },
];

export const GRUPOS: { id: GrupoId; label: string }[] = [
  { id: 'presencia', label: 'Presencia' },
  { id: 'contenido', label: 'Contenido' },
  { id: 'conversion', label: 'Conversión' },
  { id: 'comercio', label: 'Comercio' },
  { id: 'plataforma', label: 'Plataforma' },
  { id: 'base', label: 'Base' },
];

/* ---------- Catálogo web: 25 módulos ---------- */
export const W: ModuloWeb[] = [
  { id: 'inicio', n: 'Inicio', d: 'Portada con hero premium y propuesta de valor', h: 16, g: 'base', opts: [{ n: 'Hero animado / WebGL', h: 10 }, { n: 'Video de fondo', h: 3 }] },
  { id: 'nosotros', n: 'Nosotros', d: 'Historia, misión y equipo', h: 10, g: 'presencia', opts: [{ n: 'Equipo con fichas', h: 6 }, { n: 'Línea de tiempo', h: 4 }, { n: 'Certificaciones', h: 2 }] },
  { id: 'servicios', n: 'Servicios', d: 'Hub de servicios con página por servicio', h: 28, g: 'base', opts: [{ n: 'Tabla de paquetes', h: 5 }, { n: 'Testimonios por servicio', h: 3 }] },
  { id: 'productos', n: 'Productos (catálogo)', d: 'Catálogo con filtros, sin venta en línea', h: 20, g: 'comercio', qty: true, opts: [{ n: 'Fichas con PDF', h: 3 }, { n: 'Valoraciones', h: 6 }] },
  { id: 'blog', n: 'Blog o recursos', d: 'Artículos administrables con categorías', h: 18, g: 'contenido', opts: [{ n: 'Categorías y autores', h: 4 }, { n: 'Video / podcast embebido', h: 8 }, { n: 'Newsletter', h: 8 }] },
  { id: 'casos', n: 'Casos de éxito', d: 'Resultados con cifras y testimonio', h: 18, g: 'conversion', opts: [{ n: 'Antes / después', h: 4 }, { n: 'Video testimonio', h: 3 }, { n: 'Schema Review', h: 2 }] },
  { id: 'portafolio', n: 'Portafolio', d: 'Galería de proyectos con filtros', h: 14, g: 'presencia', opts: [{ n: 'Detalle por proyecto', h: 8 }, { n: 'Transición tarjeta a detalle', h: 4 }] },
  { id: 'contacto', n: 'Contacto', d: 'Formulario, mapa y WhatsApp', h: 20, g: 'base', opts: [{ n: 'Horarios dinámicos', h: 2 }, { n: 'Varias sedes', h: 4 }, { n: 'Agenda en línea', h: 8 }] },
  { id: 'faq', n: 'Preguntas frecuentes', d: 'Acordeón con schema FAQPage', h: 8, g: 'conversion', opts: [{ n: 'FAQ por servicio', h: 10 }] },
  { id: 'tienda', n: 'Tienda online', d: 'Carrito, pasarela y correos de pedido', h: 90, g: 'comercio', incluye: ['productos'], opts: [{ n: 'Segunda pasarela', h: 16 }, { n: 'Envíos por zona', h: 12 }, { n: 'Cupones', h: 8 }, { n: 'Factura electrónica', h: 20 }, { n: 'Seguimiento de pedidos', h: 10 }] },
  { id: 'area', n: 'Área de clientes', d: 'Registro, login y panel del usuario', h: 40, g: 'plataforma', p8: true, opts: [{ n: 'Descarga de documentos', h: 10 }, { n: 'Seguimiento de proyecto', h: 16 }] },
  { id: 'noticias', n: 'Noticias', d: 'Novedades de la empresa', h: 18, g: 'contenido', siBlog: 3 },
  { id: 'empleo', n: 'Trabaja con nosotros', d: 'Vacantes y aplicación con hoja de vida', h: 26, g: 'presencia', opts: [{ n: 'Filtro por área', h: 3 }] },
  { id: 'aliados', n: 'Aliados', d: 'Logos de partners en movimiento', h: 3, g: 'presencia', opts: [{ n: 'Página por aliado', h: 15 }] },
  { id: 'legales', n: 'Políticas y avisos legales', d: 'Privacidad, términos, cookies', h: 14, g: 'base' },
  { id: 'comunidad', n: 'Comunidad / foro', d: 'Miembros, hilos y moderación', h: 70, g: 'plataforma', p8: true, ext: true },
  { id: 'eventos', n: 'Eventos', d: 'Calendario con fechas e inscripción', h: 22, g: 'contenido', opts: [{ n: 'Inscripción', h: 6 }, { n: 'Pago', h: 12 }] },
  { id: 'descargas', n: 'Descargas', d: 'Archivos con registro de correo', h: 18, g: 'conversion' },
  { id: 'redes', n: 'Redes sociales', d: 'Iconos, compartir y feed en vivo', h: 11, g: 'presencia' },
  { id: 'galeria', n: 'Galería', d: 'Fotos y videos con lightbox', h: 14, g: 'presencia', opts: [{ n: 'Álbumes anidados', h: 4 }] },
  { id: 'educacion', n: 'Educación / cursos', d: 'Cursos con inscripción y pago', h: 32, g: 'plataforma', opts: [{ n: 'Área de alumno', h: 40 }] },
  { id: 'donaciones', n: 'Donaciones', d: 'Pasarela de donación e impacto', h: 17, g: 'conversion', opts: [{ n: 'Donación recurrente', h: 8 }] },
  { id: 'soporte', n: 'Soporte técnico', d: 'Tickets y centro de ayuda', h: 18, g: 'plataforma', ext: true, opts: [{ n: 'Centro de ayuda propio', h: 18 }, { n: 'Chat en vivo', h: 4 }] },
  { id: 'innovacion', n: 'Innovación / investigación', d: 'Publicaciones técnicas', h: 18, g: 'contenido', siBlog: 3 },
  { id: 'idiomas', n: 'Idiomas', d: 'Segunda lengua: rutas, hreflang, selector', h: 12, g: 'plataforma', multi: true },
];

export const TIPOS: TipoSitio[] = [
  { id: 'landing', n: 'Landing page', d: 'Una página que vende una cosa', inc: ['inicio', 'contacto', 'legales'] },
  { id: 'corporativo', n: 'Sitio corporativo', d: 'Empresa con servicios y casos', inc: ['inicio', 'nosotros', 'servicios', 'casos', 'faq', 'contacto', 'legales'] },
  { id: 'catalogo', n: 'Catálogo virtual', d: 'Productos sin venta en línea', inc: ['inicio', 'nosotros', 'servicios', 'casos', 'faq', 'contacto', 'legales', 'productos'] },
  { id: 'tienda', n: 'Tienda online', d: 'Carrito y pagos', inc: ['inicio', 'nosotros', 'servicios', 'casos', 'faq', 'contacto', 'legales', 'tienda'] },
  { id: 'plataforma', n: 'Plataforma / portal', d: 'Con área de clientes', inc: ['inicio', 'nosotros', 'servicios', 'casos', 'faq', 'contacto', 'legales', 'area'] },
];

/* ---------- Factores ---------- */
export const NIVELES: Factor<NivelId>[] = [
  { v: 'sistema', label: 'Sistema DKODING', f: 1.0, txt: '×1,0' },
  { v: 'semi', label: 'Semi-custom', f: 1.4, txt: '×1,4' },
  { v: 'custom', label: '100 % custom + animación', f: 1.9, txt: '×1,9' },
];
export const CONTENIDOS: Factor<ContenidoId>[] = [
  { v: 'propio', label: 'Lo entrega el cliente', f: 1.0, txt: '—' },
  /* Contenido DKODING: +50 % sobre ~15 % de horas de contenido ≈ ×1,08 */
  { v: 'dkoding', label: 'Lo redacta DKODING', f: 1.08, txt: '+ horas' },
];
export const URGENCIAS: Factor<UrgenciaId>[] = [
  { v: 'normal', label: 'Normal (6–8 sem)', f: 1.0, txt: '×1,0' },
  { v: 'prio', label: 'Prioritario (4 sem)', f: 1.25, txt: '×1,25' },
  { v: 'expres', label: 'Exprés (2 sem)', f: 1.5, txt: '×1,5' },
];

/** Fases: distribución semilla de las horas únicas. */
export const FASES: { n: string; pct: number; col: string }[] = [
  { n: 'Estrategia y dirección', pct: 0.12, col: '#D98BFF' },
  { n: 'Diseño UX/UI', pct: 0.27, col: '#C755EF' },
  { n: 'Desarrollo', pct: 0.41, col: '#8A1EDF' },
  { n: 'Contenido y SEO', pct: 0.1, col: '#6D00C2' },
  { n: 'Pruebas y lanzamiento', pct: 0.1, col: '#5BE49B' },
];

/* ---------- Otras familias ---------- */
export const F: Record<OtraFamiliaId, FamiliaDef> = {
  marca: {
    id: 'marca', eyebrow: 'Marca e identidad', title: 'Marca e identidad',
    sub: 'Pago único. Si también haces el sitio, la marca tiene 8 % de descuento (investigación compartida).',
    items: [
      { id: 'logo_s', n: 'Logo sencillo', d: '1 propuesta, 2 rondas, archivos finales', h: 12 },
      { id: 'logo_p', n: 'Logo profesional', d: 'Investigación, 3 propuestas, versiones y 80+ formatos', h: 32 },
      { id: 'manual', n: 'Manual de identidad', d: 'Uso de logo, paleta, tipografía, tono y aplicaciones', h: 24 },
      { id: 'marca_c', n: 'Desarrollo de marca', d: 'Logo profesional + manual + papelería + kit de redes + 500 formatos', h: 96, reco: true },
      { id: 'kit', n: 'Kit de redes', d: 'Avatares, portadas y 6 plantillas', h: 12 },
      { id: 'rebrand', n: 'Rebranding', d: 'Auditoría de marca actual + logo + manual + migración', h: 70 },
      { id: 'naming', n: 'Naming', d: '20 opciones, verificación de dominio, 3 finalistas', h: 16 },
      { id: 'anim', n: 'Animación de logo', d: 'Intro animada para video y redes', h: 8 },
    ],
  },
  mkt: {
    id: 'mkt', eyebrow: 'Marketing y redes', title: 'Marketing digital',
    sub: 'Proyectos de una vez y servicios mensuales (se muestran aparte en el panel).',
    items: [
      { id: 'audit', n: 'Auditoría SEO + visibilidad en IA', d: 'Qué frena tu posicionamiento y cómo te ven ChatGPT y Google', h: 24 },
      { id: 'onpage', n: 'SEO on-page inicial', d: 'Títulos, metas, schema, enlazado y velocidad (hasta 10 páginas). Con sitio nuevo, −30 %', h: 20 },
      { id: 'local', n: 'SEO local', d: 'Google Business Profile, NAP y reseñas', h: 12 },
      { id: 'geo', n: 'SEO para IA (GEO)', d: 'Entidad, FAQ, llms.txt, citas y panel de prompts', h: 16 },
      { id: 'setup_ads', n: 'Setup de campañas', d: 'Píxel, conversiones, audiencias y estructura, por plataforma', h: 12 },
      { id: 'redes_b', n: 'Redes · Básico', d: '8 posts + 8 historias al mes', h: 20, ret: true },
      { id: 'redes_c', n: 'Redes · Crecimiento', d: '12 posts + 16 historias + 4 reels + community', h: 36, ret: true, reco: true },
      { id: 'seo_cont', n: 'Contenidos SEO · 4 artículos/mes', d: 'Plan editorial, redacción y publicación', h: 24, ret: true },
      { id: 'pauta', n: 'Gestión de pauta', d: 'Optimización mensual por plataforma', h: 10, ret: true },
      { id: 'monitor', n: 'Monitoreo y reporte mensual', d: 'CWV, posiciones, GEO y leads', h: 4, ret: true },
    ],
  },
  imp: {
    id: 'imp', eyebrow: 'Impresos y carteles digitales', title: 'Publicidad impresa y pantallas',
    sub: 'Diseño por pieza. La impresión se cotiza como extra externo.',
    items: [
      { id: 'flyer', n: 'Pieza impresa simple', d: 'Flyer, afiche o tarjeta', h: 3 },
      { id: 'brochure', n: 'Pieza compleja', d: 'Brochure o catálogo impreso de 6+ páginas', h: 12 },
      { id: 'senal', n: 'Señalética / aviso exterior', d: 'Diseño para producción externa', h: 6 },
      { id: 'cartel', n: 'Cartel digital animado', d: 'Loop de 15 a 30 s para pantallas', h: 6 },
      { id: 'canva', n: 'Plantilla editable (Canva)', d: 'Para que el cliente la actualice', h: 4 },
      { id: 'papeleria', n: 'Papelería', d: 'Tarjetas, membrete, firma de correo, carpeta', h: 10 },
    ],
  },
  app: {
    id: 'app', eyebrow: 'App o plataforma', title: 'Producto digital a medida',
    sub: 'Lo que supera 200 h se cotiza "desde" y se cierra en una sesión de alcance.',
    items: [
      { id: 'audit_ux', n: 'Auditoría UX', d: 'De un producto existente', h: 16 },
      { id: 'discovery', n: 'Discovery de producto', d: 'Primer paso obligatorio para apps', h: 16 },
      { id: 'proto', n: 'Prototipo navegable', d: 'Para validar antes de desarrollar', h: 12 },
      { id: 'app_web', n: 'Aplicación web o móvil', d: 'Desde el mínimo. El alcance se define en sesión', h: 160, desde: true },
    ],
  },
  sop: {
    id: 'sop', eyebrow: 'Mantenimiento y soporte', title: 'Después del lanzamiento',
    sub: 'Servicios mensuales. Dos o más servicios mensuales: −10 %.',
    items: [
      { id: 'mant', n: 'Mantenimiento web', d: 'Actualizaciones, backups, monitoreo y 2 h de cambios', h: 8, ret: true },
      { id: 'tickets', n: 'Soporte con tickets', d: 'SLA 24 h y 4 h de cambios al mes', h: 12, ret: true, reco: true },
      { id: 'hosting', n: 'Hosting + correo gestionado', d: 'Extra fijo anual', fijo: 350000 },
    ],
  },
};

export const OTRAS_FAMILIAS: OtraFamiliaId[] = ['marca', 'mkt', 'imp', 'app', 'sop'];

/** Horas base de un tipo de sitio (suma de los módulos incluidos). */
export function horasBaseTipo(t: TipoSitio): number {
  return t.inc.reduce((acc, id) => acc + (W.find((b) => b.id === id)?.h ?? 0), 0);
}
