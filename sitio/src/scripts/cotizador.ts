/**
 * Lógica pura del cotizador: `calcular(estado) -> Resultado`. Sin DOM, sin efectos.
 * La UI (pages/cotizador.astro) y las pruebas la consumen por igual.
 */
import {
  W, TIPOS, F, OTRAS_FAMILIAS, NIVELES, CONTENIDOS, URGENCIAS, FASES, DESCUENTOS,
  TARIFA_HORA, CAPACIDAD_SEMANAL, INCLUIDO_H, SETUP_H, DIR_PCT, MIN_PROY, REDONDEO,
  RANGO_MIN, RANGO_MAX, UMBRAL_DESDE_H, IDIOMAS_F, IVA_PCT, ANTICIPO_PCT, VIGENCIA_DIAS,
  type FamiliaId, type GrupoId, type NivelId, type ContenidoId, type UrgenciaId, type TipoSitio, type ModuloWeb,
} from '../data/cotizador';

export interface Estado {
  fam: Record<FamiliaId, boolean>;
  tipo: string;
  grp: GrupoId;
  /** Módulos web añadidos a mano (además de los incluidos por el tipo). */
  sel: Record<string, boolean>;
  /** Opciones por módulo: opts[idModulo][indiceOpcion] = true. */
  opts: Record<string, Record<string, boolean>>;
  qtyProd: number;
  lvl: NivelId;
  cont: ContenidoId;
  urg: UrgenciaId;
  /** Ítems de otras familias marcados. */
  otros: Record<string, boolean>;
}

export interface Cliente { nombre: string; empresa: string; tel: string; email: string }

export type Tono = 'normal' | 'ok' | 'lila' | 'warn';

export interface Linea { n: string; k: string; v: string; tono: Tono }

export interface LineaWeb {
  id: string; n: string; h: number; nota: string; incluido: boolean;
  /** Nombres de las opciones añadidas. */
  optsOn: string[];
}

export interface LineaOtro { id: string; n: string; k: string; v: string; ret: boolean }

export interface Fase { n: string; h: number; costo: number; c: string; pct: number; col: string }

export interface Resultado {
  famWeb: boolean;
  tipo: TipoSitio;
  /** Módulos efectivamente seleccionados (incluidos por el tipo + añadidos). */
  selected: Record<string, boolean>;
  incluidos: Record<string, boolean>;
  hasTienda: boolean;
  hasBlog: boolean;
  p8Used: boolean;
  webLines: LineaWeb[];
  webHours: number;
  webDir: number;
  factores: { lvl: number; urg: number; cont: number; idioma: number; total: number };
  otrosLines: LineaOtro[];
  otrosH: number;
  fijos: number;
  descReglas: number;
  /** Horas únicas (web ajustada + otras familias). */
  unicoH: number;
  totalH: number;
  base: number;
  baseNeta: number;
  minV: number;
  maxV: number;
  bajoMin: boolean;
  modoDesde: boolean;
  mensual: number;
  mensualDesc: number;
  mensualNeto: number;
  retN: number;
  semanas: number;
  fecha: Date | null;
  fechaTxt: string;
  fases: Fase[];
  lineas: Linea[];
  rangoTxt: string;
  rangoNota: string;
  nItems: number;
}

export interface Opciones { hoy?: Date; tarifa?: number; capacidad?: number }

export const ESTADO_INICIAL: Estado = {
  fam: { web: true, marca: false, mkt: false, imp: false, app: false, sop: false },
  tipo: 'corporativo', grp: 'presencia', sel: {}, opts: {}, qtyProd: 50,
  lvl: 'sistema', cont: 'propio', urg: 'normal', otros: {},
};

export function estadoInicial(): Estado {
  return JSON.parse(JSON.stringify(ESTADO_INICIAL)) as Estado;
}

/* ---------- formato ---------- */
export function fmt(n: number): string {
  return '$ ' + String(Math.round(n)).replace(/\B(?=(\d{3})+(?!\d))/g, '.');
}
export function fmtM(n: number): string {
  return n >= 1000000 ? (Math.round(n / 100000) / 10).toFixed(1).replace('.', ',') + ' M' : fmt(n);
}
export function r50(n: number): number {
  return Math.round(n / REDONDEO) * REDONDEO;
}
const MESES = ['ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sep', 'oct', 'nov', 'dic'];
export function fmtFecha(d: Date): string {
  return `${d.getDate()} ${MESES[d.getMonth()]} ${d.getFullYear()}`;
}
function fmtFactor(f: number): string {
  return '×' + f.toFixed(2).replace(/0$/, '').replace('.', ',');
}

/* ---------- cálculo ---------- */
export function calcular(s: Estado, o: Opciones = {}): Resultado {
  const rate = o.tarifa ?? TARIFA_HORA;
  const cap = o.capacidad ?? CAPACIDAD_SEMANAL;
  const hoy = o.hoy ?? new Date();

  const tipo = TIPOS.find((t) => t.id === s.tipo) ?? TIPOS[1];
  const incluidos: Record<string, boolean> = {};
  for (const id of tipo.inc) incluidos[id] = true;
  const selected: Record<string, boolean> = {};
  for (const b of W) if (incluidos[b.id] || s.sel[b.id]) selected[b.id] = true;
  const hasTienda = !!selected.tienda;
  const hasBlog = !!selected.blog;
  const famWeb = !!s.fam.web;

  const optH = (b: ModuloWeb): { h: number; names: string[] } => {
    const mine = s.opts[b.id] ?? {};
    let h = 0; const names: string[] = [];
    (b.opts ?? []).forEach((op, i) => { if (mine[String(i)]) { h += op.h; names.push(op.n); } });
    return { h, names };
  };

  let p8Used = false;
  const webLines: LineaWeb[] = [];
  let webHours = 0;
  for (const b of W) {
    if (!selected[b.id]) continue;
    if (b.id === 'productos' && hasTienda) continue;
    let h = b.h; let nota = '';
    if (b.siBlog && hasBlog) { h = b.siBlog; nota = `Ya tienes blog: pasa a ${b.siBlog} h como categoría`; }
    if (b.p8) { if (p8Used) { h -= 40; nota = 'Comparte el área autenticada ya cotizada'; } p8Used = true; }
    const ex = optH(b);
    h += ex.h;
    if (b.qty) h += 0.5 * (Number(s.qtyProd) || 0);
    webHours += h;
    webLines.push({ id: b.id, n: b.n, h, nota, incluido: !!incluidos[b.id], optsOn: ex.names });
  }

  const baseWeb = famWeb ? webHours + SETUP_H + INCLUIDO_H : 0;
  const lvlF = NIVELES.find((x) => x.v === s.lvl)?.f ?? 1;
  const urgF = URGENCIAS.find((x) => x.v === s.urg)?.f ?? 1;
  const contF = CONTENIDOS.find((x) => x.v === s.cont)?.f ?? 1;
  const idiomaF = selected.idiomas && famWeb ? IDIOMAS_F : 1;
  const webAdj = baseWeb * lvlF * urgF * contF * idiomaF;
  const webDir = webAdj * DIR_PCT;
  const webTotal = webAdj + webDir;

  /* otras familias */
  const otrosLines: LineaOtro[] = [];
  let otrosH = 0, retH = 0, retN = 0, fijos = 0, anyDesde = false, marcaH = 0, onpageH = 0;
  for (const fk of OTRAS_FAMILIAS) {
    if (!s.fam[fk]) continue;
    for (const it of F[fk].items) {
      if (!s.otros[it.id]) continue;
      if (it.fijo) { fijos += it.fijo; otrosLines.push({ id: it.id, n: it.n, k: 'Extra fijo anual', v: fmt(it.fijo), ret: false }); continue; }
      const h = it.h ?? 0;
      if (it.ret) { retH += h; retN++; otrosLines.push({ id: it.id, n: it.n, k: `${h} h / mes`, v: `${fmt(h * rate)} / mes`, ret: true }); continue; }
      if (it.desde) anyDesde = true;
      if (fk === 'marca') marcaH += h;
      if (it.id === 'onpage') onpageH = h;
      otrosH += h;
      otrosLines.push({ id: it.id, n: it.n, k: `${h} h · pago único`, v: fmt(h * rate), ret: false });
    }
  }

  const unicoH = (famWeb ? webTotal : 0) + otrosH;
  const totalH = Math.round(unicoH);
  const base = unicoH * rate;
  let descReglas = 0;
  if (famWeb && webHours > 0 && marcaH > 0) descReglas += marcaH * rate * DESCUENTOS.webMarca;
  if (famWeb && webHours > 0 && onpageH > 0) descReglas += onpageH * rate * DESCUENTOS.webOnpage;
  const baseNeta = Math.max(0, base - descReglas);
  let minV = r50(baseNeta * RANGO_MIN + fijos);
  let maxV = r50(baseNeta * RANGO_MAX + fijos);
  const bajoMin = totalH > 0 && minV < MIN_PROY;
  if (bajoMin) { minV = MIN_PROY; if (maxV < MIN_PROY) maxV = MIN_PROY; }
  const modoDesde = anyDesde || totalH > UMBRAL_DESDE_H;

  const mensual = retH * rate;
  const mensualDesc = retN >= 2 ? mensual * DESCUENTOS.mensualMultiple : 0;
  const mensualNeto = mensual - mensualDesc;

  const semanas = totalH > 0 ? Math.ceil(totalH / cap) : 0;
  let fecha: Date | null = null;
  if (totalH > 0) { fecha = new Date(hoy.getTime()); fecha.setDate(fecha.getDate() + semanas * 7); }
  const fechaTxt = fecha ? `${fmtFecha(fecha)} · ${semanas} semanas` : '—';

  const fases: Fase[] = FASES.map((f) => {
    const h = Math.round(unicoH * f.pct);
    return { n: f.n, h, costo: h * rate, c: fmtM(h * rate), pct: Math.round(f.pct * 100), col: f.col };
  });

  /* líneas del panel */
  const lineas: Linea[] = [];
  const fTotal = lvlF * urgF * contF * idiomaF;
  if (famWeb) {
    lineas.push({ n: tipo.n, k: `${webLines.length} módulos · ${Math.round(webHours)} h`, v: `${Math.round(webHours)} h`, tono: 'normal' });
    lineas.push({ n: 'Incluido en todo sitio DKODING', k: 'Capacitación, soporte 3 meses, dkard, lanzamiento en redes', v: `${INCLUIDO_H} h`, tono: 'ok' });
    lineas.push({ n: 'Setup técnico y dirección', k: `Repo, Cloudflare, analítica, schema · ${Math.round(DIR_PCT * 100)} % dirección`, v: `${Math.round(SETUP_H + webDir)} h`, tono: 'normal' });
    if (fTotal > 1) {
      const partes = [`diseño ${fmtFactor(lvlF)}`, `tiempos ${fmtFactor(urgF)}`];
      if (idiomaF > 1) partes.push(`idiomas ${fmtFactor(idiomaF)}`);
      if (contF > 1) partes.push('contenido DKODING');
      lineas.push({ n: 'Ajustes', k: partes.join(' · '), v: fmtFactor(fTotal), tono: 'lila' });
    }
  }
  for (const l of otrosLines) lineas.push({ n: l.n, k: l.k, v: l.v, tono: l.ret ? 'lila' : 'normal' });
  if (descReglas > 0) lineas.push({ n: 'Descuentos por combinación', k: 'Web + marca −8 % · web + SEO on-page −30 %', v: `− ${fmtM(descReglas)}`, tono: 'ok' });
  if (mensualDesc > 0) lineas.push({ n: 'Dos o más servicios mensuales', k: '−10 % en el mensual', v: `− ${fmtM(mensualDesc)} / mes`, tono: 'ok' });
  if (bajoMin) lineas.push({ n: 'Mínimo de proyecto', k: `Se aplica el mínimo de COP ${fmt(MIN_PROY).slice(2)}`, v: fmtM(MIN_PROY), tono: 'warn' });

  const rangoTxt = totalH > 0 ? (modoDesde ? `desde ${fmtM(minV)}` : `${fmtM(minV)} – ${fmtM(maxV)}`) : 'Elige módulos';
  const rangoNota = totalH > 0
    ? (modoDesde ? 'Mínimo estimado antes de IVA. El alcance se cierra en una sesión de 45 min' : 'Antes de IVA · rango con 15 % de contingencia')
    : 'El rango aparece al elegir el primer módulo';

  return {
    famWeb, tipo, selected, incluidos, hasTienda, hasBlog, p8Used,
    webLines, webHours, webDir, factores: { lvl: lvlF, urg: urgF, cont: contF, idioma: idiomaF, total: fTotal },
    otrosLines, otrosH, fijos, descReglas, unicoH, totalH, base, baseNeta, minV, maxV, bajoMin, modoDesde,
    mensual, mensualDesc, mensualNeto, retN, semanas, fecha, fechaTxt, fases, lineas, rangoTxt, rangoNota,
    nItems: (famWeb ? webLines.length : 0) + otrosLines.length,
  };
}

/** Texto para los módulos disponibles que dependen de otros ya elegidos. */
export function textoDependencia(b: ModuloWeb, r: Resultado): string {
  if (b.id === 'productos' && r.hasTienda) return 'Incluido en Tienda online';
  if (b.siBlog && r.hasBlog) return `Con blog: solo +${b.siBlog} h`;
  if (b.p8 && r.p8Used) return 'Comparte el área autenticada: −40 h';
  return '';
}

/** Resumen por líneas para WhatsApp y correo. */
export function textoResumen(s: Estado, r: Resultado, cli: Cliente, hoy = new Date()): string {
  const fechaHoy = `${hoy.getDate()}/${hoy.getMonth() + 1}/${hoy.getFullYear()}`;
  const L: string[] = [];
  L.push(`Hola DKODING, armé mi cotización en dkoding.net (${fechaHoy}).`);
  const nombre = cli.nombre.trim() || '—';
  L.push(`Cliente: ${nombre}${cli.empresa.trim() ? ' · ' + cli.empresa.trim() : ''} · WA ${cli.tel.trim() || '—'} · ${cli.email.trim() || '—'}`);
  L.push('');
  L.push(`MÓDULOS (${r.totalH} h de proyecto)`);
  if (r.famWeb) {
    const lvl = NIVELES.find((x) => x.v === s.lvl)?.label ?? s.lvl;
    const urg = URGENCIAS.find((x) => x.v === s.urg)?.label ?? s.urg;
    const cont = CONTENIDOS.find((x) => x.v === s.cont)?.label ?? s.cont;
    L.push(`• ${r.tipo.n}: diseño ${lvl}, tiempos ${urg}, contenido: ${cont.toLowerCase()}`);
    for (const l of r.webLines) L.push(`   - ${l.n} · ${Math.round(l.h)} h${l.optsOn.length ? ' (' + l.optsOn.join(', ') + ')' : ''}`);
    L.push(`   - Incluido en todo sitio DKODING · ${INCLUIDO_H} h`);
    L.push(`   - Setup técnico y dirección · ${Math.round(SETUP_H + r.webDir)} h`);
  }
  for (const l of r.otrosLines) L.push(`• ${l.n}: ${l.k}, ${l.v}`);
  if (r.descReglas > 0) L.push(`• Descuentos por combinación: − ${fmt(r.descReglas)}`);
  L.push('');
  L.push(`${r.modoDesde ? 'Inversión desde: ' + fmtM(r.minV) : 'Inversión estimada: ' + r.rangoTxt} + IVA ${IVA_PCT} %`);
  if (r.mensual) L.push(`Mensual: ${fmt(r.mensualNeto)} / mes`);
  L.push(`Entrega estimada: ${r.fechaTxt}`);
  L.push(`Anticipo ${ANTICIPO_PCT} % · vigencia ${VIGENCIA_DIAS} días · incluye 15 % de contingencia`);
  return L.join('\n');
}

/** Valida y completa un estado leído de localStorage. */
export function normalizarEstado(x: unknown): Estado {
  const base = estadoInicial();
  if (!x || typeof x !== 'object') return base;
  const e = x as Partial<Estado>;
  if (e.fam && typeof e.fam === 'object') for (const k of Object.keys(base.fam) as FamiliaId[]) base.fam[k] = !!e.fam[k];
  if (typeof e.tipo === 'string' && TIPOS.some((t) => t.id === e.tipo)) base.tipo = e.tipo;
  if (typeof e.grp === 'string') base.grp = e.grp as GrupoId;
  if (e.sel && typeof e.sel === 'object') base.sel = { ...e.sel };
  if (e.opts && typeof e.opts === 'object') base.opts = JSON.parse(JSON.stringify(e.opts));
  if (typeof e.qtyProd === 'number' && e.qtyProd >= 0) base.qtyProd = e.qtyProd;
  if (NIVELES.some((n) => n.v === e.lvl)) base.lvl = e.lvl as NivelId;
  if (CONTENIDOS.some((n) => n.v === e.cont)) base.cont = e.cont as ContenidoId;
  if (URGENCIAS.some((n) => n.v === e.urg)) base.urg = e.urg as UrgenciaId;
  if (e.otros && typeof e.otros === 'object') base.otros = { ...e.otros };
  return base;
}
