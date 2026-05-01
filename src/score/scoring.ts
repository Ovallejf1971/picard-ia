import type { ScoreAnswers, ScoreReport, FrenteScore, AccionPlan, Prioridad } from "./types";

// Pesos por frente (suman 100)
const PESOS = {
  presencia: 25,
  seo: 20,
  captacion: 20,
  atencion: 20,
  automatizacion: 15,
} as const;

const clamp = (n: number, min = 0, max = 100) => Math.max(min, Math.min(max, n));

const prioridad = (s: number): Prioridad => (s < 35 ? "Alta" : s < 60 ? "Media" : "Baja");

function presenciaScore(a: ScoreAnswers): FrenteScore {
  let s = 0;
  const notas: string[] = [];
  if (a.tieneWeb) s += 40; else notas.push("No tienes sitio web propio");
  if (a.webMobile) s += 25; else if (a.tieneWeb) notas.push("Tu sitio no se ve bien en móvil");
  if (a.webRapida) s += 20; else if (a.tieneWeb) notas.push("Tu sitio carga lento (>3s)");
  if (a.webGoogleBusiness) s += 15; else notas.push("Sin Google Business Profile activo");
  return { key: "presencia", label: "Presencia web", score: clamp(s), prioridad: prioridad(s), notas };
}

function seoScore(a: ScoreAnswers): FrenteScore {
  let s = 0;
  const notas: string[] = [];
  const apareceMap = { siempre: 50, a_veces: 25, nucna: 0 } as const;
  if (a.apareceGoogle === "siempre") s += 50;
  else if (a.apareceGoogle === "a_veces") { s += 25; notas.push("Apareces en Google solo a veces"); }
  else { notas.push("No apareces en búsquedas locales"); }
  void apareceMap;
  if (a.pautaActiva) s += 20; else notas.push("No tienes pauta digital activa");
  if (a.midePorDondeLlegan) s += 30; else notas.push("No mides por dónde llegan tus clientes");
  return { key: "seo", label: "SEO local", score: clamp(s), prioridad: prioridad(s), notas };
}

function captacionScore(a: ScoreAnswers): FrenteScore {
  let s = 0;
  const notas: string[] = [];
  if (a.capturaLeads) s += 45; else notas.push("Tu web no captura leads (formulario, lead magnet)");
  if (a.pautaActiva) s += 25;
  if (a.usaCRM) s += 30; else notas.push("No tienes un CRM o sistema de seguimiento de leads");
  return { key: "captacion", label: "Captación de leads", score: clamp(s), prioridad: prioridad(s), notas };
}

function atencionScore(a: ScoreAnswers): FrenteScore {
  let s = 0;
  const notas: string[] = [];
  if (a.whatsappBusiness) s += 25; else notas.push("No usas WhatsApp Business");
  if (a.responde24_7) s += 35; else notas.push("No respondes 24/7 (clientes nocturnos perdidos)");
  const redes = a.redesActivas ?? 0;
  s += Math.min(redes, 3) * 10;
  if (redes < 2) notas.push("Pocas redes activas / sin estrategia clara");
  if (a.reviewsActivas) s += 10; else notas.push("Sin estrategia de reviews / reputación");
  return { key: "atencion", label: "Atención cliente", score: clamp(s), prioridad: prioridad(s), notas };
}

function automatizacionScore(a: ScoreAnswers): FrenteScore {
  let s = 0;
  const notas: string[] = [];
  if (a.procesosManuales === "nunca") s += 50;
  else if (a.procesosManuales === "a_veces") { s += 25; notas.push("Tienes procesos manuales repetitivos"); }
  else { notas.push("La mayoría de tu operación es manual y repetitiva"); }
  if (a.usaCRM) s += 25;
  if (a.integracionesActivas) s += 25; else notas.push("Tus sistemas no están integrados entre sí");
  return { key: "automatizacion", label: "Automatización", score: clamp(s), prioridad: s < 35 ? "Quick-win" : prioridad(s), notas };
}

const ACCIONES_DICT: Record<FrenteScore["key"], AccionPlan[]> = {
  presencia: [
    { titulo: "Reescribir página principal con propuesta de valor clara", impacto: 18, frente: "presencia", esfuerzo: "Medio" },
    { titulo: "Migrar sitio a versión rápida y mobile-first", impacto: 14, frente: "presencia", esfuerzo: "Medio" },
    { titulo: "Activar Google Business Profile + reviews", impacto: 12, frente: "presencia", esfuerzo: "Bajo" },
  ],
  seo: [
    { titulo: "Implementar SEO local (keywords ciudad + sector)", impacto: 16, frente: "seo", esfuerzo: "Medio" },
    { titulo: "Conectar Google Analytics + Tag Manager para medir", impacto: 10, frente: "seo", esfuerzo: "Bajo" },
    { titulo: "Lanzar pauta segmentada en Meta + Google", impacto: 14, frente: "seo", esfuerzo: "Medio" },
  ],
  captacion: [
    { titulo: "Agregar formulario + lead magnet a tu web", impacto: 15, frente: "captacion", esfuerzo: "Bajo" },
    { titulo: "Implementar CRM (HubSpot Free / Pipedrive)", impacto: 13, frente: "captacion", esfuerzo: "Medio" },
    { titulo: "Automatizar nurturing por email (3–5 correos)", impacto: 11, frente: "captacion", esfuerzo: "Medio" },
  ],
  atencion: [
    { titulo: "Conectar WhatsApp a asistente IA (24/7)", impacto: 17, frente: "atencion", esfuerzo: "Medio" },
    { titulo: "Centralizar mensajes en Chatwoot", impacto: 12, frente: "atencion", esfuerzo: "Bajo" },
    { titulo: "Activar pedidos automáticos de review post-venta", impacto: 9, frente: "atencion", esfuerzo: "Bajo" },
  ],
  automatizacion: [
    { titulo: "Automatizar facturación → CRM con n8n", impacto: 13, frente: "automatizacion", esfuerzo: "Medio" },
    { titulo: "Reportes semanales auto al WhatsApp del gerente", impacto: 10, frente: "automatizacion", esfuerzo: "Bajo" },
    { titulo: "Integrar email marketing con base de clientes", impacto: 9, frente: "automatizacion", esfuerzo: "Bajo" },
  ],
};

function pickAcciones(frentes: FrenteScore[]): AccionPlan[] {
  // Prioriza frentes con score más bajo. 1 acción por frente top, hasta 5 acciones máx.
  const ordenados = [...frentes].sort((a, b) => a.score - b.score);
  const acciones: AccionPlan[] = [];
  for (const f of ordenados) {
    const candidatas = ACCIONES_DICT[f.key];
    if (candidatas?.[0]) acciones.push(candidatas[0]);
    if (acciones.length >= 5) break;
  }
  return acciones;
}

const rangoFromTotal = (t: number): ScoreReport["rango"] =>
  t < 35 ? "Crítico" : t < 55 ? "Por mejorar" : t < 75 ? "Aceptable" : "Sólido";

export function calcScore(answers: ScoreAnswers): ScoreReport {
  const frentes: FrenteScore[] = [
    presenciaScore(answers),
    seoScore(answers),
    captacionScore(answers),
    atencionScore(answers),
    automatizacionScore(answers),
  ];
  const total = clamp(
    Math.round(
      frentes.reduce((acc, f) => acc + f.score * (PESOS[f.key] / 100), 0),
    ),
  );
  return {
    total,
    rango: rangoFromTotal(total),
    frentes,
    acciones: pickAcciones(frentes),
    generadoEn: new Date().toISOString(),
  };
}

export const PESOS_FRENTES = PESOS;
