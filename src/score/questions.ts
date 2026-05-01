import type { ScoreAnswers, Sector, Tamano, Frecuencia } from "./types";

export type StepId = "perfil" | "presencia" | "captacion" | "atencion" | "automatizacion" | "contacto";

export interface Step {
  id: StepId;
  title: string;
  subtitle: string;
  fields: FieldDef[];
}

export type FieldDef =
  | { kind: "select"; key: keyof ScoreAnswers; label: string; options: { value: string; label: string }[] }
  | { kind: "radio"; key: keyof ScoreAnswers; label: string; options: { value: string; label: string }[] }
  | { kind: "yesno"; key: keyof ScoreAnswers; label: string; help?: string }
  | { kind: "counter"; key: keyof ScoreAnswers; label: string; min: number; max: number; help?: string }
  | { kind: "text"; key: keyof ScoreAnswers; label: string; placeholder?: string; type?: string; required?: boolean };

export const STEPS: Step[] = [
  {
    id: "perfil",
    title: "Cuéntanos de tu negocio",
    subtitle: "Para calibrar el diagnóstico a tu sector y tamaño.",
    fields: [
      {
        kind: "select",
        key: "sector",
        label: "Sector",
        options: [
          { value: "servicios_pro", label: "Servicios profesionales" },
          { value: "retail", label: "Retail / e-commerce" },
          { value: "salud", label: "Salud / bienestar" },
          { value: "educacion", label: "Educación" },
          { value: "inmobiliario", label: "Inmobiliario" },
          { value: "alimentos", label: "Alimentos / restaurante" },
          { value: "manufactura", label: "Manufactura / B2B" },
          { value: "otro", label: "Otro" },
        ] satisfies { value: Sector; label: string }[],
      },
      {
        kind: "radio",
        key: "tamano",
        label: "Tamaño del equipo",
        options: [
          { value: "1-4", label: "1–4" },
          { value: "5-9", label: "5–9" },
          { value: "10-19", label: "10–19" },
          { value: "20-49", label: "20–49" },
          { value: "50+", label: "50+" },
        ] satisfies { value: Tamano; label: string }[],
      },
      { kind: "text", key: "ciudad", label: "Ciudad principal", placeholder: "Bogotá, Medellín…" },
    ],
  },
  {
    id: "presencia",
    title: "Tu presencia digital",
    subtitle: "Cómo te encuentran (o no) tus clientes.",
    fields: [
      { kind: "yesno", key: "tieneWeb", label: "¿Tienes sitio web propio?" },
      { kind: "yesno", key: "webMobile", label: "¿Se ve bien en móvil?", help: "Más del 70% de tus visitantes son móviles." },
      { kind: "yesno", key: "webRapida", label: "¿Carga en menos de 3 segundos?" },
      { kind: "yesno", key: "webGoogleBusiness", label: "¿Tienes Google Business Profile activo y con reviews?" },
    ],
  },
  {
    id: "captacion",
    title: "Captación de clientes",
    subtitle: "Cómo llegan, qué mides, qué dejas escapar.",
    fields: [
      {
        kind: "radio",
        key: "apareceGoogle",
        label: "¿Apareces en la primera página de Google al buscar tu servicio + tu ciudad?",
        options: [
          { value: "siempre", label: "Sí, siempre" },
          { value: "a_veces", label: "A veces" },
          { value: "nunca", label: "No / no sé" },
        ] satisfies { value: Frecuencia; label: string }[],
      },
      { kind: "yesno", key: "pautaActiva", label: "¿Tienes pauta digital activa (Google / Meta)?" },
      { kind: "yesno", key: "capturaLeads", label: "¿Tu web captura leads (formulario, lead magnet, agendamiento)?" },
      { kind: "yesno", key: "midePorDondeLlegan", label: "¿Sabes por dónde llegan tus mejores clientes?" },
    ],
  },
  {
    id: "atencion",
    title: "Atención y redes",
    subtitle: "El primer contacto define la conversión.",
    fields: [
      { kind: "yesno", key: "whatsappBusiness", label: "¿Usas WhatsApp Business?" },
      { kind: "yesno", key: "responde24_7", label: "¿Respondes mensajes 24/7?", help: "El 38% de las búsquedas de servicio pasan después de las 7 pm." },
      { kind: "counter", key: "redesActivas", label: "Redes sociales activas (con publicaciones recientes)", min: 0, max: 5 },
      { kind: "yesno", key: "reviewsActivas", label: "¿Pides reviews a tus clientes activamente?" },
    ],
  },
  {
    id: "automatizacion",
    title: "Operación y automatización",
    subtitle: "Cuánto tiempo y dinero se te va en lo repetitivo.",
    fields: [
      {
        kind: "radio",
        key: "procesosManuales",
        label: "¿Tu equipo hace tareas repetitivas a mano (cotizar, enviar facturas, follow-ups)?",
        options: [
          { value: "nunca", label: "Casi nunca" },
          { value: "a_veces", label: "A veces" },
          { value: "siempre", label: "Todo el día" },
        ] satisfies { value: Frecuencia; label: string }[],
      },
      { kind: "yesno", key: "usaCRM", label: "¿Usas un CRM o sistema para hacer seguimiento de leads?" },
      { kind: "yesno", key: "integracionesActivas", label: "¿Tus sistemas (web, CRM, contabilidad) están conectados entre sí?" },
    ],
  },
  {
    id: "contacto",
    title: "Casi listo",
    subtitle: "Para enviarte el reporte completo y el plan priorizado.",
    fields: [
      { kind: "text", key: "nombre", label: "Tu nombre", placeholder: "María Pérez", required: true },
      { kind: "text", key: "email", label: "Email", placeholder: "maria@empresa.co", type: "email", required: true },
      { kind: "text", key: "empresa", label: "Empresa", placeholder: "Mi Empresa S.A.S." },
      { kind: "text", key: "telefono", label: "Teléfono / WhatsApp", placeholder: "+57 300 000 0000" },
    ],
  },
];
