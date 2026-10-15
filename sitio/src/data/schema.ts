import { SITIO } from './sitio';

/** Organización y negocio local: va en todas las páginas. */
export function organizacionSchema(): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': ['Organization', 'ProfessionalService'],
    '@id': `${SITIO.dominio}/#organizacion`,
    name: SITIO.nombre,
    alternateName: 'DKODING Agencia Digital',
    url: `${SITIO.dominio}/`,
    logo: `${SITIO.dominio}/img/marca/logo-vertical.svg`,
    image: `${SITIO.dominio}/img/og/dkoding.png`,
    slogan: SITIO.lema,
    description: 'Agencia de desarrollo web, SEO y marketing digital en Medellín, Colombia. Sitios web que venden, posicionamiento en Google y en la IA, redes sociales, diseño de marca y apps.',
    telephone: SITIO.telefono,
    email: SITIO.correo,
    foundingDate: String(new Date().getFullYear() - SITIO.anios),
    address: {
      '@type': 'PostalAddress',
      streetAddress: SITIO.direccion,
      addressLocality: SITIO.ciudad,
      addressRegion: SITIO.region,
      addressCountry: 'CO',
    },
    areaServed: [{ '@type': 'City', name: 'Medellín' }, { '@type': 'Country', name: 'Colombia' }],
    priceRange: '$$',
    sameAs: Object.values(SITIO.redes),
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: SITIO.telefono,
      contactType: 'sales',
      areaServed: 'CO',
      availableLanguage: 'es',
    },
  };
}

export function servicioSchema(opts: {
  nombre: string; descripcion: string; url: string; tipo?: string; ofertas?: { nombre: string; desde?: number }[];
}): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: opts.nombre,
    serviceType: opts.tipo ?? opts.nombre,
    description: opts.descripcion,
    url: `${SITIO.dominio}${opts.url}`,
    provider: { '@id': `${SITIO.dominio}/#organizacion` },
    areaServed: [{ '@type': 'City', name: 'Medellín' }, { '@type': 'Country', name: 'Colombia' }],
    ...(opts.ofertas?.length
      ? {
          hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: opts.nombre,
            itemListElement: opts.ofertas.map((o) => ({
              '@type': 'Offer',
              itemOffered: { '@type': 'Service', name: o.nombre },
              ...(o.desde ? { priceSpecification: { '@type': 'PriceSpecification', price: o.desde, priceCurrency: 'COP', minPrice: o.desde } } : {}),
            })),
          },
        }
      : {}),
  };
}

export function faqSchema(items: { q: string; a: string }[]): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((i) => ({
      '@type': 'Question',
      name: i.q,
      acceptedAnswer: { '@type': 'Answer', text: i.a },
    })),
  };
}

export function migasSchema(items: { nombre: string; url: string }[]): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({
      '@type': 'ListItem', position: i + 1, name: it.nombre, item: `${SITIO.dominio}${it.url}`,
    })),
  };
}

export function articuloSchema(opts: {
  titulo: string; descripcion: string; url: string; publicado: string; modificado?: string;
  autor: { nombre: string; url?: string }; imagen?: string;
}): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: opts.titulo,
    description: opts.descripcion,
    url: `${SITIO.dominio}${opts.url}`,
    mainEntityOfPage: `${SITIO.dominio}${opts.url}`,
    datePublished: opts.publicado,
    dateModified: opts.modificado ?? opts.publicado,
    inLanguage: 'es-CO',
    image: opts.imagen ? `${SITIO.dominio}${opts.imagen}` : `${SITIO.dominio}/img/og/dkoding.png`,
    author: { '@type': 'Person', name: opts.autor.nombre, ...(opts.autor.url ? { url: `${SITIO.dominio}${opts.autor.url}` } : {}) },
    publisher: { '@id': `${SITIO.dominio}/#organizacion` },
  };
}
