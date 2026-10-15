/** Datos globales del sitio. Lo que está entre corchetes lo completa DKODING antes de lanzar. */
export const SITIO = {
  nombre: 'DKODING',
  dominio: 'https://dkoding.net',
  lema: 'Un paso hacia delante',
  ciudad: 'Cali',
  region: 'Valle del Cauca',
  pais: 'Colombia',
  anios: 12,
  telefono: '+57 300 286 7104',
  telefonoHref: 'tel:+573002867104',
  whatsapp: '573002867104',
  correo: 'info@dkoding.net',
  razonSocial: '[Razón social S.A.S.]',
  nit: '[000.000.000-0]',
  direccion: '[Dirección]',
  horario: 'Lunes a viernes, 8:00 a. m. a 6:00 p. m.',
  redes: {
    instagram: 'https://www.instagram.com/dkoding.oficial',
    facebook: 'https://www.facebook.com/dkoding.oficial',
    linkedin: 'https://www.linkedin.com/in/dkoding/',
    tiktok: 'https://www.tiktok.com/@dkoding',
    youtube: 'https://www.youtube.com/@dkoding.oficial',
  },
} as const;

/** Enlace a WhatsApp con mensaje precargado. */
export function waLink(texto: string): string {
  return `https://api.whatsapp.com/send/?phone=${SITIO.whatsapp}&text=${encodeURIComponent(texto)}`;
}

export const WA_GENERAL = waLink('Hola DKODING, quiero una cotización para mi proyecto.');

/** Servicios: alimentan el menú, el pie y las tarjetas de servicios. */
export const SERVICIOS = [
  { slug: 'desarrollo-web', url: '/', nombre: 'Desarrollo web', corto: 'Sitios web que venden', desc: 'Páginas web rápidas, seguras y optimizadas para SEO.' },
  { slug: 'marketing-digital', url: '/marketing-digital/', nombre: 'Marketing digital', corto: 'Campañas que traen clientes', desc: 'Google Ads, Meta Ads, email y WhatsApp marketing.' },
  { slug: 'seo-y-geo', url: '/seo-y-geo/', nombre: 'SEO y GEO', corto: 'Aparece en Google y en la IA', desc: 'Posicionamiento web y visibilidad en ChatGPT, Perplexity y AI Overviews.' },
  { slug: 'redes-sociales', url: '/redes-sociales/', nombre: 'Redes sociales', corto: 'Manejo de redes que vende', desc: 'Contenido, community management y pauta en Instagram, Facebook y TikTok.' },
  { slug: 'diseno-de-marca', url: '/diseno-de-marca/', nombre: 'Diseño de marca', corto: 'Logos e identidad que se recuerdan', desc: 'Logotipo, manual de identidad, papelería y kit de redes.' },
  { slug: 'desarrollo-de-apps', url: '/desarrollo-de-apps/', nombre: 'Desarrollo de apps', corto: 'Software a tu medida', desc: 'Apps móviles, aplicaciones web y plataformas con panel propio.' },
] as const;

export const NAV = [
  { url: '/casos-de-exito/', nombre: 'Casos' },
  { url: '/blog/', nombre: 'Blog' },
  { url: '/nosotros/', nombre: 'Nosotros' },
  { url: '/soporte/', nombre: 'Soporte' },
] as const;
