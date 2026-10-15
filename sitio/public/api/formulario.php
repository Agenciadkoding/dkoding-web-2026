<?php
/**
 * Receptor de formularios de dkoding.net (etapa sin admin).
 * Envía cada formulario por correo a info@dkoding.net y responde JSON.
 * Cuando exista el admin (Laravel), este archivo se reemplaza por su API.
 *
 * Protecciones: solo POST, mismo origen, honeypot, tiempo mínimo de llenado,
 * límite de envíos por IP y tamaño máximo. Sin dependencias.
 */
declare(strict_types=1);

const DESTINO = 'info@dkoding.net';
const REMITENTE = 'web@dkoding.net';
const ORIGENES = ['https://dkoding.net', 'https://www.dkoding.net'];
const MAX_POR_HORA = 8;
const TIPOS = ['contacto', 'diagnostico', 'cotizacion', 'ticket', 'llamada', 'newsletter'];

header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-store');

function responder(int $codigo, array $datos): never {
    http_response_code($codigo);
    echo json_encode($datos, JSON_UNESCAPED_UNICODE);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    responder(405, ['ok' => false, 'error' => 'Método no permitido']);
}

$origen = $_SERVER['HTTP_ORIGIN'] ?? '';
$esLocal = in_array($_SERVER['SERVER_NAME'] ?? '', ['localhost', '127.0.0.1'], true);
if (!$esLocal && $origen !== '' && !in_array($origen, ORIGENES, true)) {
    responder(403, ['ok' => false, 'error' => 'Origen no permitido']);
}

$crudo = file_get_contents('php://input') ?: '';
if (strlen($crudo) > 60000) {
    responder(413, ['ok' => false, 'error' => 'Mensaje demasiado largo']);
}
$ct = $_SERVER['CONTENT_TYPE'] ?? '';
$d = str_contains($ct, 'application/json') ? (json_decode($crudo, true) ?: []) : $_POST;

// Honeypot: los humanos no ven este campo.
if (!empty($d['sitio_web2'])) {
    responder(200, ['ok' => true]);
}
// Un humano tarda más de 3 segundos en llenar un formulario.
$ts = (int) ($d['ts'] ?? 0);
if ($ts > 0 && (time() * 1000 - $ts) < 3000) {
    responder(200, ['ok' => true]);
}

// Límite por IP, con un archivo temporal por hora.
$ip = $_SERVER['REMOTE_ADDR'] ?? '0.0.0.0';
$cubo = sys_get_temp_dir() . '/dk-form-' . hash('sha256', $ip . date('YmdH'));
$n = is_file($cubo) ? (int) file_get_contents($cubo) : 0;
if ($n >= MAX_POR_HORA) {
    responder(429, ['ok' => false, 'error' => 'Demasiados envíos. Escríbenos por WhatsApp.']);
}
file_put_contents($cubo, (string) ($n + 1));

$limpio = static fn(string $k, int $max = 500): string =>
    trim(mb_substr(strip_tags((string) ($d[$k] ?? '')), 0, $max));

$tipo = $limpio('tipo', 30);
if (!in_array($tipo, TIPOS, true)) {
    $tipo = 'contacto';
}
$nombre = $limpio('nombre', 120);
$correo = $limpio('correo', 160);
$tel = $limpio('telefono', 40);
$empresa = $limpio('empresa', 120);
$mensaje = $limpio('mensaje', 4000);

if ($nombre === '' || ($correo === '' && $tel === '')) {
    responder(422, ['ok' => false, 'error' => 'Falta el nombre y un teléfono o correo.']);
}
if ($correo !== '' && !filter_var($correo, FILTER_VALIDATE_EMAIL)) {
    responder(422, ['ok' => false, 'error' => 'El correo no es válido.']);
}

// `detalle` trae los campos propios de cada formulario (cotizador, ticket, llamada).
$detalle = $d['detalle'] ?? [];
if (is_string($detalle)) {
    $detalle = json_decode($detalle, true) ?: [];
}
$lineasDetalle = [];
foreach ((array) $detalle as $k => $v) {
    $k = mb_substr(strip_tags((string) $k), 0, 60);
    $v = is_array($v) ? implode(', ', array_map('strval', $v)) : (string) $v;
    $lineasDetalle[] = $k . ': ' . mb_substr(strip_tags($v), 0, 2000);
}

$etiquetas = [
    'contacto' => 'Contacto', 'diagnostico' => 'Diagnóstico gratuito', 'cotizacion' => 'Cotización',
    'ticket' => 'Ticket de soporte', 'llamada' => 'Solicitud de llamada', 'newsletter' => 'Suscripción',
];
$numero = strtoupper(substr($tipo, 0, 3)) . '-' . date('ymd') . '-' . strtoupper(substr(bin2hex(random_bytes(2)), 0, 4));
$asunto = '[dkoding.net] ' . $etiquetas[$tipo] . ' · ' . $numero . ' · ' . ($empresa !== '' ? $empresa : $nombre);

$cuerpo = implode("\n", array_filter([
    $etiquetas[$tipo] . ' ' . $numero,
    'Fecha: ' . date('Y-m-d H:i') . ' (hora del servidor)',
    '',
    'Nombre: ' . $nombre,
    $empresa !== '' ? 'Empresa: ' . $empresa : null,
    $tel !== '' ? 'Teléfono / WhatsApp: ' . $tel : null,
    $correo !== '' ? 'Correo: ' . $correo : null,
    '',
    $mensaje !== '' ? "Mensaje:\n" . $mensaje : null,
    $lineasDetalle ? "\nDetalle:\n" . implode("\n", $lineasDetalle) : null,
    '',
    'Página: ' . mb_substr(strip_tags((string) ($d['pagina'] ?? '')), 0, 300),
    'Origen declarado: ' . $limpio('como_nos_conocio', 80),
    'IP: ' . $ip,
], static fn($l) => $l !== null));

$cab = [
    'From: DKODING web <' . REMITENTE . '>',
    'Reply-To: ' . ($correo !== '' ? ($nombre . ' <' . $correo . '>') : REMITENTE),
    'MIME-Version: 1.0',
    'Content-Type: text/plain; charset=UTF-8',
    'Content-Transfer-Encoding: 8bit',
];
$asuntoCod = '=?UTF-8?B?' . base64_encode($asunto) . '?=';
$enviado = @mail(DESTINO, $asuntoCod, $cuerpo, implode("\r\n", $cab));

if (!$enviado) {
    error_log('dkoding formulario: mail() falló para ' . $numero);
    responder(500, ['ok' => false, 'error' => 'No pudimos enviar el mensaje. Escríbenos por WhatsApp.']);
}
responder(200, ['ok' => true, 'numero' => $numero]);
