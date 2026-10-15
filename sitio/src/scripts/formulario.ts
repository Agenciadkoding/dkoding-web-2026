/**
 * Envío de formularios al receptor PHP (/api/formulario.php) con respuesta en la misma página.
 * Uso: `enviarFormulario(form, { tipo: 'contacto', detalle: {...} })`.
 * Devuelve { ok, numero?, error? }. El formulario debe tener los inputs
 * nombre, correo, telefono (al menos uno de correo/telefono) y el honeypot `sitio_web2`.
 */
export interface RespuestaFormulario { ok: boolean; numero?: string; error?: string }

export async function enviarFormulario(
  form: HTMLFormElement,
  extra: { tipo: string; detalle?: Record<string, unknown>; comoNosConocio?: string } ,
): Promise<RespuestaFormulario> {
  const fd = new FormData(form);
  const cuerpo: Record<string, unknown> = { tipo: extra.tipo, pagina: location.pathname, ts: Number(fd.get('ts') || 0) };
  for (const [k, v] of fd.entries()) if (typeof v === 'string') cuerpo[k] = v;
  if (extra.detalle) cuerpo.detalle = extra.detalle;
  if (extra.comoNosConocio) cuerpo.como_nos_conocio = extra.comoNosConocio;
  try {
    const r = await fetch('/api/formulario.php', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify(cuerpo),
    });
    const j = (await r.json().catch(() => ({}))) as RespuestaFormulario;
    if (!r.ok) return { ok: false, error: j.error || 'No pudimos enviar el mensaje. Escríbenos por WhatsApp.' };
    return { ok: true, numero: j.numero };
  } catch {
    return { ok: false, error: 'Sin conexión. Escríbenos por WhatsApp.' };
  }
}

/** Marca la hora de apertura del formulario (antispam por tiempo mínimo). */
export function marcarTiempo(form: HTMLFormElement): void {
  let ts = form.querySelector<HTMLInputElement>('input[name="ts"]');
  if (!ts) { ts = document.createElement('input'); ts.type = 'hidden'; ts.name = 'ts'; form.appendChild(ts); }
  ts.value = String(Date.now());
}
