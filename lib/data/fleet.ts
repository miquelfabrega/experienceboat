export type CategoriaBarco = 'sin-licencia' | 'con-licencia';

export type Temporada = 'baja' | 'media' | 'alta';

export interface BarcoExtra {
  nombre: string;
  precio: number;
}

/** Precio de una franja para las 3 temporadas (datos del flyer oficial). */
export interface PrecioTemporada {
  baja: number;
  media: number;
  alta: number;
}

/**
 * Tarifas por duración. No todos los barcos ofrecen todas las duraciones
 * (p. ej. Justi Saura solo ½ día y 1 día), por eso son opcionales.
 */
export interface TarifasBarco {
  // Barcos SIN licencia: 1 h / 2 h / ½ día (4 h) / día completo (8 h).
  unaHora?: PrecioTemporada; // 1 hora
  dosHoras?: PrecioTemporada; // 2 horas
  medioDia?: PrecioTemporada; // ½ día (4 h)
  diaCompleto?: PrecioTemporada; // día completo (8 h) · en CON licencia = 1 día
  // Barcos CON licencia: además 3 y 7 días.
  tresDias?: PrecioTemporada; // 3 días
  sieteDias?: PrecioTemporada; // 7 días
}

/** Suplemento de patrón/capitán cuando es obligatorio (Justi Saura Llaut 850). */
export interface SuplementoCapitan {
  medioDia: number; // +120 € (4 h)
  diaCompleto: number; // +190 € (8 h)
}

export interface Barco {
  slug: string;
  nombre: string;
  categoria: CategoriaBarco;
  activo: boolean;
  pax: number;
  eslora: string;
  motor: string;
  requiereCapitan?: boolean;
  suplementoCapitan?: SuplementoCapitan;
  equipamiento: string[];
  tarifas: TarifasBarco;
  /** Tarifa de la experiencia Sunset (2-3 h). Solo barcos que la ofrecen. */
  sunset?: PrecioTemporada;
  notaMedioDia?: string;
  precioDesde: number;
  imagen: string;
  galeria?: string[];
  /** Vídeo del barco (MP4 H.264, web-ready). Se muestra tras la galería. */
  video?: string;
  /** Poster JPG del vídeo. */
  videoPoster?: string;
  badge: string | null;
  descripcionCorta: string;
  descripcionLarga?: string;
  inclusiones?: string[];
  widgetReservaId?: string;
}

const NOTA_SIN_LICENCIA = 'Horario reducido (4 h)';

const INCLUSIONES_BASE = [
  'Chalecos salvavidas para toda la tripulación',
  'Briefing de seguridad y manejo antes de salir',
  'Seguro de responsabilidad civil',
  'Equipo de seguridad reglamentario',
  'IVA incluido',
];

// Widget Regiondo por barco (calendarios de reserva específicos de cada embarcación).
const WIDGET_REMUS = 'ba47f5d1-9480-4faf-b245-7a57d7883af2';
const WIDGET_MARINE_BREZZE = 'd299f388-40dc-4526-bafd-35b28926f1e2';
const WIDGET_DREAM_POINT = '71ee3784-86ce-4b63-ac86-22e0b579707c';
const WIDGET_CON_LICENCIA = 'cbe7e43c-d1d4-4ad3-a3ee-2f5b4d6863fd';
const WIDGET_JEANNEAU_REINETA = 'cdf50826-0894-4e22-896c-89dbb5cdfc58';
const WIDGET_ORANGE_KIWI = 'c92e18ae-e2fc-4feb-bfce-1b33e9784ddb';
const WIDGET_SPIRIT_OF_THE_SEA = '3aaeebca-ac52-46c5-bc9b-a6991e082940';
const WIDGET_RAF_IV_MANO = 'e4da3b8a-96dc-4d80-810a-9bc748334f24';

// Actividades extra contratables con el Sunset (precios del flyer oficial).
export const EXTRAS_DISPONIBLES: BarcoExtra[] = [
  { nombre: 'Wakeboard', precio: 50 },
  { nombre: 'Donut', precio: 40 },
  { nombre: 'Ski Náutico', precio: 40 },
  { nombre: 'Paddle Surf', precio: 50 },
];

// Alias semántico: estos extras son los de la experiencia Sunset.
export const EXTRAS_SUNSET = EXTRAS_DISPONIBLES;

export const fleet: Barco[] = [
  // ─── SIN LICENCIA ───────────────────────────────────────────────
  {
    slug: 'remus-450',
    nombre: 'Remus 450',
    categoria: 'sin-licencia',
    activo: true,
    pax: 5,
    eslora: '4,50 m',
    motor: '15 CV',
    equipamiento: ['Toldo bimini', 'Escalera de baño', 'Colchonetas'],
    tarifas: {
      unaHora: { baja: 90, media: 95, alta: 110 },
      dosHoras: { baja: 145, media: 155, alta: 170 },
      medioDia: { baja: 180, media: 190, alta: 220 },
      diaCompleto: { baja: 245, media: 260, alta: 320 },
    },
    sunset: { baja: 160, media: 170, alta: 175 },
    notaMedioDia: NOTA_SIN_LICENCIA,
    precioDesde: 90,
    imagen: '/boats/remus-450/remus-450-exterior-02.webp',
    badge: 'Más reservado',
    descripcionCorta:
      'Embarcación sin licencia para 5 personas, ideal para descubrir las calas de Roses sin necesidad de patrón.',
    inclusiones: [...INCLUSIONES_BASE, 'Combustible no incluido (consumo aprox. 5-8 L/h)'],
    widgetReservaId: WIDGET_REMUS,
  },
  {
    slug: 'marine-brezze-450',
    nombre: 'Marine Brezze 450',
    categoria: 'sin-licencia',
    activo: true,
    pax: 5,
    eslora: '4,50 m',
    motor: '15 CV',
    equipamiento: ['Toldo bimini', 'Escalera de baño'],
    tarifas: {
      unaHora: { baja: 90, media: 95, alta: 110 },
      dosHoras: { baja: 145, media: 155, alta: 170 },
      medioDia: { baja: 180, media: 190, alta: 220 },
      diaCompleto: { baja: 245, media: 260, alta: 320 },
    },
    notaMedioDia: NOTA_SIN_LICENCIA,
    precioDesde: 90,
    imagen: '/boats/marine-brezze-450/marine-brezze-450-hero.webp',
    badge: null,
    descripcionCorta:
      'Barco sin licencia para 5 pax con toldo y escalera de baño. Perfecto para una jornada tranquila por la Bahía de Roses.',
    inclusiones: [...INCLUSIONES_BASE, 'Combustible no incluido (consumo aprox. 5-8 L/h)'],
    widgetReservaId: WIDGET_MARINE_BREZZE,
  },
  {
    slug: 'dream-point-420',
    nombre: 'Dream Point 420',
    categoria: 'sin-licencia',
    activo: true,
    pax: 4,
    eslora: '4,20 m',
    motor: '15 CV',
    equipamiento: ['Toldo bimini', 'Escalera de baño', 'Fácil manejo'],
    tarifas: {
      unaHora: { baja: 70, media: 75, alta: 90 },
      dosHoras: { baja: 135, media: 145, alta: 165 },
      medioDia: { baja: 165, media: 175, alta: 200 },
      diaCompleto: { baja: 225, media: 245, alta: 320 },
    },
    notaMedioDia: NOTA_SIN_LICENCIA,
    precioDesde: 70,
    imagen: '/boats/dream-point-420/dream-point-420-hero.webp',
    badge: null,
    descripcionCorta:
      'La opción más compacta y económica sin licencia. 4 pax, fácil de manejar y pensada para una primera experiencia en el mar.',
    inclusiones: [...INCLUSIONES_BASE, 'Combustible no incluido (consumo aprox. 4-6 L/h)'],
    widgetReservaId: WIDGET_DREAM_POINT,
  },

  // ─── CON LICENCIA ───────────────────────────────────────────────
  {
    slug: 'jeanneau-595-reineta',
    nombre: 'Reineta (Jeanneau 595)',
    categoria: 'con-licencia',
    activo: true,
    pax: 6,
    eslora: '5,95 m',
    motor: '115 CV',
    equipamiento: ['Solárium', 'Toldo', 'Escalera de baño'],
    tarifas: {
      medioDia: { baja: 195, media: 225, alta: 265 },
      diaCompleto: { baja: 285, media: 345, alta: 395 },
      tresDias: { baja: 800, media: 900, alta: 1130 },
      sieteDias: { baja: 1655, media: 2055, alta: 2490 },
    },
    sunset: { baja: 160, media: 170, alta: 175 },
    precioDesde: 195,
    imagen: '/boats/jeanneau-595-reineta/jeanneau-595-reineta-drone-01.webp',
    video: '/boats/jeanneau-595-reineta/jeanneau-595-reineta-video.mp4',
    videoPoster: '/boats/jeanneau-595-reineta/jeanneau-595-reineta-video-poster.jpg',
    badge: null,
    descripcionCorta:
      'Jeanneau 595 con motor de 115 CV para 6 personas. Ideal para llegar al Cap de Creus con comodidad y solárium.',
    inclusiones: [...INCLUSIONES_BASE, 'Combustible no incluido', 'Patrón opcional bajo solicitud'],
    widgetReservaId: WIDGET_JEANNEAU_REINETA,
  },
  {
    slug: 'orange-kiwi-620',
    nombre: 'Orange Kiwi 620 (Zodiac)',
    categoria: 'con-licencia',
    activo: true,
    pax: 11,
    eslora: '6,20 m',
    motor: '150 CV',
    equipamiento: ['Solárium', 'Toldo', 'Escalera', 'Flotadores'],
    tarifas: {
      medioDia: { baja: 235, media: 270, alta: 310 },
      diaCompleto: { baja: 325, media: 375, alta: 430 },
      tresDias: { baja: 865, media: 1055, alta: 1290 },
      sieteDias: { baja: 1870, media: 2195, alta: 2845 },
    },
    sunset: { baja: 160, media: 170, alta: 175 },
    precioDesde: 235,
    imagen: '/boats/orange-kiwi-620/orange-kiwi-620-drone-01.jpg',
    badge: null,
    descripcionCorta:
      'Zodiac semirrígida de 6,20 m para 11 pax. Estable, divertida y perfecta para grupos grandes que buscan diversión.',
    inclusiones: [...INCLUSIONES_BASE, 'Combustible no incluido', 'Patrón opcional bajo solicitud'],
    widgetReservaId: WIDGET_ORANGE_KIWI,
  },
  {
    slug: 'spirit-of-the-sea-675',
    nombre: 'Spirit of the Sea 675',
    categoria: 'con-licencia',
    activo: true,
    pax: 12,
    eslora: '6,75 m',
    motor: '200-250 CV',
    equipamiento: ['Solárium proa y popa', 'Toldo', 'Equipo de sonido'],
    tarifas: {
      medioDia: { baja: 260, media: 280, alta: 340 },
      diaCompleto: { baja: 360, media: 405, alta: 460 },
      tresDias: { baja: 950, media: 1235, alta: 1235 },
      sieteDias: { baja: 2080, media: 2340, alta: 2635 },
    },
    sunset: { baja: 165, media: 185, alta: 195 },
    precioDesde: 260,
    imagen: '/boats/spirit-of-the-sea-675/spirit-of-the-sea-675-hero.webp',
    badge: null,
    descripcionCorta:
      'Embarcación de 6,75 m con doble solárium y sonido. Capacidad para 12 personas: nuestro barco más versátil para grupos.',
    inclusiones: [...INCLUSIONES_BASE, 'Combustible no incluido', 'Patrón opcional bajo solicitud'],
    widgetReservaId: WIDGET_SPIRIT_OF_THE_SEA,
  },
  {
    slug: 'raf-iv-mano',
    nombre: 'RAF IV Mano 21,5 Sport Fish',
    categoria: 'con-licencia',
    activo: true,
    pax: 7,
    eslora: '6,55 m',
    motor: '150 CV',
    equipamiento: ['Solárium proa', 'Toldo', 'Nevera', 'Equipo de pesca'],
    tarifas: {
      medioDia: { baja: 245, media: 265, alta: 295 },
      diaCompleto: { baja: 375, media: 395, alta: 420 },
      tresDias: { baja: 1013, media: 1007, alta: 1197 },
      sieteDias: { baja: 2100, media: 2351, alta: 2740 },
    },
    precioDesde: 245,
    imagen: '/boats/raf-iv-mano/raf-iv-mano-hero.webp',
    badge: null,
    descripcionCorta:
      'Mano 21,5 Sport Fish de 6,55 m y 150 CV para 7 personas. Carácter marinero, ideal para pesca y excursiones a Cap de Creus.',
    inclusiones: [...INCLUSIONES_BASE, 'Combustible no incluido', 'Patrón opcional bajo solicitud'],
    widgetReservaId: WIDGET_RAF_IV_MANO,
  },
  {
    slug: 'justi-saura-llaut-850',
    nombre: 'Justi Saura Llaut 850',
    categoria: 'con-licencia',
    activo: true,
    pax: 6,
    eslora: '8,50 m',
    motor: 'Intraborda diésel',
    requiereCapitan: true,
    suplementoCapitan: { medioDia: 120, diaCompleto: 190 },
    equipamiento: ['Toldo', 'Mesa de teca', 'Nevera', 'Escalera de baño', 'Solárium'],
    tarifas: {
      medioDia: { baja: 290, media: 350, alta: 420 },
      diaCompleto: { baja: 480, media: 580, alta: 680 },
    },
    notaMedioDia: 'Medio día: 4 h · Día completo: 8 h',
    precioDesde: 290,
    imagen: '/boats/generic/hero.webp',
    badge: 'Con patrón',
    descripcionCorta:
      'Llaut tradicional de 8,50 m para 6 personas con patrón incluido en la experiencia. La forma más auténtica y relajada de navegar la Costa Brava.',
    inclusiones: [...INCLUSIONES_BASE, 'Combustible no incluido', 'Patrón obligatorio (suplemento aparte)'],
    widgetReservaId: WIDGET_CON_LICENCIA,
  },

  // ─── HISTÓRICO (no se muestran ni indexan) ──────────────────────
  {
    slug: 'zodiac-medline-i',
    nombre: 'Zodiac Medline I',
    categoria: 'con-licencia',
    activo: false,
    pax: 11,
    eslora: '6,00 m',
    motor: 'Suzuki DF140',
    equipamiento: [],
    tarifas: {
      diaCompleto: { baja: 257, media: 257, alta: 257 },
    },
    precioDesde: 257,
    imagen: 'https://picsum.photos/seed/zodiac-medline-1/1200/800',
    badge: null,
    descripcionCorta: '',
  },
  {
    slug: 'zodiac-medline-ii',
    nombre: 'Zodiac Medline II',
    categoria: 'con-licencia',
    activo: false,
    pax: 11,
    eslora: '6,00 m',
    motor: 'Suzuki DF140',
    equipamiento: [],
    tarifas: {
      diaCompleto: { baja: 325, media: 325, alta: 325 },
    },
    precioDesde: 325,
    imagen: 'https://picsum.photos/seed/zodiac-medline-2/1200/800',
    badge: null,
    descripcionCorta: '',
  },
];

export const getBarcosActivos = (): Barco[] =>
  fleet.filter((b) => b.activo);

export const getBarcoBySlug = (slug: string): Barco | undefined =>
  fleet.find((b) => b.slug === slug && b.activo);

export const getBarcoSlugs = (): string[] =>
  getBarcosActivos().map((b) => b.slug);

export const getBarcosSimilares = (slug: string, limit = 3): Barco[] => {
  const actual = fleet.find((b) => b.slug === slug);
  if (!actual) return [];
  return getBarcosActivos()
    .filter((b) => b.slug !== slug && b.categoria === actual.categoria)
    .slice(0, limit);
};

/** Barcos que ofrecen la experiencia Sunset, con su tarifa por temporada. */
export const getBarcosSunset = (): Barco[] =>
  getBarcosActivos().filter((b) => b.sunset);
