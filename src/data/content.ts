// Single source of truth for landing copy & data — edit here.

export const SERVICIOS = [
  {
    n: "01",
    nombre: "Score Digital",
    icon: "search",
    desc: "Diagnóstico completo de tu presencia digital. Te decimos qué está fallando y qué arreglar primero.",
    precio: "Gratis",
    precioNota: "Sin tarjeta. 15 min.",
    bullets: ["Análisis web + SEO", "Auditoría redes", "Plan priorizado"],
    destacado: true,
  },
  {
    n: "02",
    nombre: "Presencia Digital",
    icon: "globe",
    desc: "Sitio web que convierte, SEO técnico, redes sociales con dirección. Tu carta de presentación, en serio.",
    precio: "Desde $2.5M",
    precioNota: "+ $500K/mes",
    bullets: ["Sitio web a la medida", "SEO local", "Gestión de redes"],
  },
  {
    n: "03",
    nombre: "Asistentes IA",
    icon: "bot",
    desc: "WhatsApp y web atendidos 24/7 con IA que entiende a tus clientes. Stack propio, sin lock-in.",
    precio: "Desde $4M",
    precioNota: "+ $800K/mes",
    bullets: ["WhatsApp + Chatwoot", "IA con tu contexto", "Hand-off humano"],
  },
  {
    n: "04",
    nombre: "Automatización",
    icon: "workflow",
    desc: "Procesos manuales que se ejecutan solos. Conectamos tus sistemas con n8n y automatizamos lo aburrido.",
    precio: "Desde $3M",
    precioNota: "Por flujo",
    bullets: ["Integraciones n8n", "ERP/CRM/Email", "Reportes auto"],
  },
  {
    n: "05",
    nombre: "Paquetes Integrales",
    icon: "package",
    desc: "Combo mensual: presencia + asistente + automatizaciones + soporte. Un solo punto de contacto.",
    precio: "Desde $2M/mes",
    precioNota: "Recurrente",
    bullets: ["Todo en uno", "Soporte continuo", "Optimización mensual"],
  },
] as const;

export const DOLORES = [
  {
    n: "01",
    titulo: "Estás perdiendo clientes que ni siquiera sabes que existen",
    desc: "Mientras lees esto, alguien busca lo que vendes en Google y aterriza en la web de tu competencia. Sin presencia digital sólida, eres invisible.",
    metric: "73%",
    metricLabel: "de las búsquedas locales no pasan de la primera página",
  },
  {
    n: "02",
    titulo: "Las agencias te cobran caro y entregan poco",
    desc: "Reportes de 40 páginas, jerga inflada y resultados que no se notan en el banco. Pagaste por horas, no por crecimiento. Suena familiar.",
    metric: "$15M",
    metricLabel: "promedio gastado en agencias antes de venir con nosotros",
  },
  {
    n: "03",
    titulo: "Sabes que IA es importante. No sabes qué hacer con eso.",
    desc: "Lees titulares todos los días. Tu sobrino te explicó ChatGPT. Pero nadie te dice cómo aplicar IA a tu PyME sin contratar a un equipo de ingenieros.",
    metric: "0",
    metricLabel: "líneas de código que vas a tener que escribir",
  },
];

export const PROCESO = [
  { n: "01", fase: "Diagnóstico", duracion: "Semana 1", desc: "Score Digital + entrevista. Mapeamos dónde estás y dónde podrías estar." },
  { n: "02", fase: "Plan", duracion: "Semana 2", desc: "Hoja de ruta priorizada. Quick-wins primero, palancas grandes después." },
  { n: "03", fase: "Implementación", duracion: "Semanas 3–10", desc: "Construimos. Tú revisas. Iteramos. Sin sorpresas en factura." },
  { n: "04", fase: "Optimización", duracion: "Continuo", desc: "Métricas mensuales, ajustes, expansión. Crecimiento como práctica, no como evento." },
];

export const MANIFIESTO = [
  { n: "01", titulo: "No vendemos horas. Vendemos resultados.", desc: "El precio se ata a lo que mueve tu negocio, no a cuántas reuniones tuvimos. Si no movemos la aguja, no facturamos." },
  { n: "02", titulo: "Stack propio. Cero lock-in.", desc: "Chatwoot, n8n, Evolution API, Claude/GPT — todo self-hosted bajo tu control. Te vas cuando quieras y te llevas todo." },
  { n: "03", titulo: "30–90 días o nada.", desc: "Si no ves resultados medibles en máximo 90 días, algo está mal y lo arreglamos. Sin contratos eternos." },
  { n: "04", titulo: "Hablamos como humanos, no como agencia.", desc: "Cero jerga inflada, cero reportes-relleno. Una llamada al mes con números reales y decisiones claras." },
];

export const FAQS = [
  { q: "¿Cuánto tiempo toma ver resultados?", a: "Quick-wins entre 30 y 45 días (mejoras de conversión, automatizaciones que te devuelven horas). Resultados estructurales (SEO, captación) en 60–90 días. Si pasados 90 días no ves números mejor, revisamos contigo sin costo." },
  { q: "¿Por qué dicen 'sin lock-in'?", a: "Todo lo que construimos corre en infraestructura que tú controlas (Chatwoot, n8n, Evolution API son open-source y self-hosted). Si mañana decides irte, te entregamos accesos, documentación y se acabó. No retenemos tu data ni tus flujos." },
  { q: "Mi PyME es muy pequeña / muy específica. ¿Aplica?", a: "Trabajamos con PyMEs de 5 a 50 empleados en sectores variados (servicios profesionales, retail, salud, educación, inmobiliario). Si tu modelo no encaja, te lo decimos en el Score Digital y te recomendamos a alguien que sí." },
  { q: "¿Necesito saber de tecnología?", a: "No. De hecho, la mayoría de nuestros clientes no son técnicos. Nuestro trabajo es traducir 'IA y automatización' a decisiones de negocio. Tú decides qué construir; nosotros lo hacemos." },
  { q: "¿Cómo se compara con contratar in-house?", a: "Un equipo in-house (dev + diseño + IA) te cuesta entre $20M y $40M mensuales y tarda 6 meses en arrancar. Nosotros entregamos el primer entregable en 30 días por una fracción. Cuando crezcas y quieras internalizar, te ayudamos con el handoff." },
  { q: "¿Y si la IA dice algo absurdo a un cliente?", a: "Por eso hay hand-off humano siempre disponible, guardrails específicos por industria y revisión periódica de conversaciones. La IA no opera sin red. Y todo queda auditable." },
];

export const CASOS = [
  { sector: "Servicios B2B", metrica: "+312%", label: "leads calificados", quote: "En 60 días pasamos de 8 leads/mes a más de 30. Y mejor calificados.", autor: "CEO · Bogotá", logo: "MR" },
  { sector: "Retail / Beauty", metrica: "−18h", label: "por semana en atención", quote: "El asistente de WhatsApp responde el 70% antes de que llegue al equipo.", autor: "Fundadora · Medellín", logo: "VS" },
  { sector: "Inmobiliario", metrica: "4.2x", label: "ROI en 90 días", quote: "Por fin entiendo qué está funcionando y qué no. Reportes en una pantalla.", autor: "Gerente · Cali", logo: "AC" },
];

export const LOGOS = [
  { m: "MR", n: "Marca Real" },
  { m: "VS", n: "Vélez Style" },
  { m: "AC", n: "AndesCasa" },
  { m: "TQ", n: "Téquerè" },
  { m: "OL", n: "Olivos&Co" },
  { m: "ZN", n: "Zona Norte" },
];
