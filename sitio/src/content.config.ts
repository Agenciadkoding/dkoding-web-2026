/**
 * Colecciones de contenido (Astro 7, loader glob).
 * - blog: artículos en src/content/blog/<slug>.md → /blog/<slug>/
 * - legales: términos, política de datos y cookies en src/content/legales/<slug>.md
 */
import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

export const TEMAS_BLOG = [
  'desarrollo-web',
  'marketing-digital',
  'seo-y-geo',
  'redes-sociales',
  'diseno-de-marca',
  'desarrollo-de-apps',
] as const;

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    titulo: z.string().min(10).max(110),
    descripcion: z.string().min(50).max(170),
    publicado: z.coerce.date(),
    modificado: z.coerce.date().optional(),
    autor: z
      .object({ nombre: z.string(), url: z.string().optional() })
      .default({ nombre: 'Equipo DKODING', url: '/nuestro-equipo/' }),
    tema: z.enum(TEMAS_BLOG),
    /** Sector o nicho (salud, ecommerce, pymes…). Opcional; no va en la URL. */
    nicho: z.string().optional(),
    /** Ruta de la imagen principal en /public (opcional). */
    imagen: z.string().optional(),
    imagenAlt: z.string().optional(),
    /** Landing del servicio relacionado, con barra final. */
    landing: z.string().regex(/^\/.*\/$|^\/$/),
    /** Resumen de 3 líneas que va arriba del artículo. */
    tldr: z.array(z.string()).length(3),
    /** Preguntas frecuentes (4 a 6) que cierran el artículo y alimentan el FAQPage. */
    faq: z.array(z.object({ q: z.string(), a: z.string() })).min(4).max(6),
  }),
});

const legales = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/legales' }),
  schema: z.object({
    titulo: z.string(),
    descripcion: z.string().max(170),
    actualizado: z.coerce.date(),
    version: z.string().optional(),
  }),
});

export const collections = { blog, legales };
