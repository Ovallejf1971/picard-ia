// Tipos compartidos del Score Digital.

export type Sector =
  | "servicios_pro"
  | "retail"
  | "salud"
  | "educacion"
  | "inmobiliario"
  | "alimentos"
  | "manufactura"
  | "otro";

export type Tamano = "1-4" | "5-9" | "10-19" | "20-49" | "50+";

export type Frecuencia = "nunca" | "a_veces" | "siempre";

export interface ScoreAnswers {
  // Paso 1 — perfil
  sector?: Sector;
  tamano?: Tamano;
  ciudad?: string;
  // Paso 2 — presencia web
  tieneWeb?: boolean;
  webMobile?: boolean;
  webRapida?: boolean;
  webGoogleBusiness?: boolean;
  // Paso 3 — captación / SEO
  apareceGoogle?: Frecuencia;
  pautaActiva?: boolean;
  capturaLeads?: boolean;
  midePorDondeLlegan?: boolean;
  // Paso 4 — atención & redes
  whatsappBusiness?: boolean;
  responde24_7?: boolean;
  redesActivas?: number; // 0..3
  reviewsActivas?: boolean;
  // Paso 5 — automatización & contacto
  procesosManuales?: Frecuencia;
  usaCRM?: boolean;
  integracionesActivas?: boolean;
  // contacto
  nombre?: string;
  email?: string;
  empresa?: string;
  telefono?: string;
}

export type Prioridad = "Alta" | "Media" | "Baja" | "Quick-win";

export interface FrenteScore {
  key: "presencia" | "seo" | "captacion" | "atencion" | "automatizacion";
  label: string;
  score: number; // 0..100
  prioridad: Prioridad;
  notas: string[];
}

export interface AccionPlan {
  titulo: string;
  impacto: number; // puntos estimados
  frente: FrenteScore["key"];
  esfuerzo: "Bajo" | "Medio" | "Alto";
}

export interface ScoreReport {
  total: number; // 0..100
  rango: "Crítico" | "Por mejorar" | "Aceptable" | "Sólido";
  frentes: FrenteScore[];
  acciones: AccionPlan[];
  generadoEn: string;
}
