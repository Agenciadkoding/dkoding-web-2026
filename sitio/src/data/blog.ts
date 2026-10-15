/** Utilidades del blog: temas (los 6 servicios), autor por defecto, fechas y tiempo de lectura. */
import { SERVICIOS } from './sitio';
import type { CollectionEntry } from 'astro:content';

export type Articulo = CollectionEntry<'blog'>;

export const TEMAS = SERVICIOS.map((s) => ({ slug: s.slug, nombre: s.nombre, url: s.url, desc: s.desc, corto: s.corto }));

export function tema(slug: string) {
  return TEMAS.find((t) => t.slug === slug) ?? TEMAS[0];
}

export const AUTOR_EQUIPO = { nombre: 'Equipo DKODING', url: '/nuestro-equipo/' };

const fmtLarga = new Intl.DateTimeFormat('es-CO', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' });
const fmtCorta = new Intl.DateTimeFormat('es-CO', { day: 'numeric', month: 'short', year: 'numeric', timeZone: 'UTC' });

export function fechaLarga(d: Date): string { return fmtLarga.format(d); }
export function fechaCorta(d: Date): string { return fmtCorta.format(d).replace('.', ''); }
export function fechaISO(d: Date): string { return d.toISOString().slice(0, 10); }

/** Minutos de lectura a 200 palabras por minuto, mínimo 2. */
export function minutosLectura(texto: string | undefined): number {
  const palabras = (texto ?? '').trim().split(/\s+/).filter(Boolean).length;
  return Math.max(2, Math.round(palabras / 200));
}

/** Más recientes primero (por fecha de publicación). */
export function porFecha(a: Articulo, b: Articulo): number {
  return b.data.publicado.getTime() - a.data.publicado.getTime();
}

/** Artículos relacionados: mismo tema primero, luego los más recientes de otros temas. */
export function relacionados(actual: Articulo, todos: Articulo[], n = 3): Articulo[] {
  const otros = todos.filter((p) => p.id !== actual.id).sort(porFecha);
  const mismos = otros.filter((p) => p.data.tema === actual.data.tema);
  const resto = otros.filter((p) => p.data.tema !== actual.data.tema);
  return [...mismos, ...resto].slice(0, n);
}

/** Nombre del tema dentro de una frase: baja la inicial salvo en siglas («SEO y GEO»). */
export function enFrase(nombre: string): string {
  return /^[A-Z]{2,}/.test(nombre) ? nombre : nombre.charAt(0).toLowerCase() + nombre.slice(1);
}
