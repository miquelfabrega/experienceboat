export type CategoriaBarco = 'sin-licencia' | 'con-licencia';

export interface BarcoExtra {
  nombre: string;
  precio: number;
}

export interface BarcoPrecios {
  medioDiaBaja: number | null;
  medioDiaAlta: number | null;
  diaCompletoBaja: number;
  diaCompletoAlta: number;
  notaMedioDia?: string;
}

export interface Barco {
  slug: string;
  nombre: string;
  categoria: CategoriaBarco;
  activo: boolean;
  pax: number;
  eslora: string;
  motor: string;
  equipamiento: string[];
  precios: BarcoPrecios;
  extras?: BarcoExtra[];
  precioDesde: number;
  imagen: string;
  galeria?: string[];
  badge: string | null;
  descripcionCorta: string;
  descripcionLarga?: string;
}

const NOTA_SIN_LICENCIA = 'Horario reducido (4 h)';

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
    precios: {
      medioDiaBaja: 180,
      medioDiaAlta: 220,
      diaCompletoBaja: 245,
      diaCompletoAlta: 320,
      notaMedioDia: NOTA_SIN_LICENCIA,
    },
    precioDesde: 180,
    imagen: 'https://picsum.photos/seed/remus-450/1200/800',
    badge: 'Más reservado',
    descripcionCorta:
      'Embarcación sin licencia para 5 personas, ideal para descubrir las calas de Roses sin necesidad de patrón.',
  },
  {
    slug: 'marine-breeze',
    nombre: 'Marine Breeze',
    categoria: 'sin-licencia',
    activo: true,
    pax: 5,
    eslora: '4,50 m',
    motor: '15 CV',
    equipamiento: ['Toldo bimini', 'Escalera de baño'],
    precios: {
      medioDiaBaja: 180,
      medioDiaAlta: 220,
      diaCompletoBaja: 245,
      diaCompletoAlta: 320,
      notaMedioDia: NOTA_SIN_LICENCIA,
    },
    precioDesde: 180,
    imagen: 'https://picsum.photos/seed/marine-breeze/1200/800',
    badge: null,
    descripcionCorta:
      'Barco sin licencia para 5 pax con toldo y escalera de baño. Perfecto para una jornada tranquila por la Bahía de Roses.',
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
    precios: {
      medioDiaBaja: 165,
      medioDiaAlta: 200,
      diaCompletoBaja: 225,
      diaCompletoAlta: 280,
      notaMedioDia: NOTA_SIN_LICENCIA,
    },
    precioDesde: 165,
    imagen: 'https://picsum.photos/seed/dream-point-420/1200/800',
    badge: null,
    descripcionCorta:
      'La opción más compacta y económica sin licencia. 4 pax, fácil de manejar y pensada para una primera experiencia en el mar.',
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
    precios: {
      medioDiaBaja: 195,
      medioDiaAlta: 265,
      diaCompletoBaja: 295,
      diaCompletoAlta: 395,
    },
    extras: [{ nombre: 'Wakeboard', precio: 50 }],
    precioDesde: 195,
    imagen: 'https://picsum.photos/seed/jeanneau-595-reineta/1200/800',
    badge: null,
    descripcionCorta:
      'Jeanneau 595 con motor de 115 CV para 6 personas. Ideal para llegar al Cap de Creus con comodidad y solárium.',
  },
  {
    slug: 'orange-kiwi',
    nombre: 'Orange Kiwi (Zodiac)',
    categoria: 'con-licencia',
    activo: true,
    pax: 11,
    eslora: '6,50 m',
    motor: '150 CV',
    equipamiento: ['Solárium', 'Toldo', 'Escalera', 'Flotadores'],
    precios: {
      medioDiaBaja: 235,
      medioDiaAlta: 310,
      diaCompletoBaja: 325,
      diaCompletoAlta: 430,
    },
    extras: [{ nombre: 'Donut', precio: 50 }],
    precioDesde: 235,
    imagen: 'https://picsum.photos/seed/orange-kiwi/1200/800',
    badge: null,
    descripcionCorta:
      'Zodiac semirrígida de 6,50 m para 11 pax. Estable, divertida y perfecta para grupos grandes que buscan diversión.',
  },
  {
    slug: 'spirit-of-the-sea',
    nombre: 'Spirit of the Sea',
    categoria: 'con-licencia',
    activo: true,
    pax: 12,
    eslora: '7,50 m',
    motor: '200-250 CV',
    equipamiento: ['Solárium proa y popa', 'Toldo', 'Equipo de sonido'],
    precios: {
      medioDiaBaja: 260,
      medioDiaAlta: 340,
      diaCompletoBaja: 360,
      diaCompletoAlta: 460,
    },
    extras: [{ nombre: 'Ski Náutico', precio: 50 }],
    precioDesde: 260,
    imagen: 'https://picsum.photos/seed/spirit-of-the-sea/1200/800',
    badge: null,
    descripcionCorta:
      'Embarcación de 7,50 m con doble solárium y sonido. Capacidad para 12 personas: nuestro barco más versátil para grupos.',
  },
  {
    slug: 'costa-brava-joker',
    nombre: 'Costa Brava Joker',
    categoria: 'con-licencia',
    activo: true,
    pax: 11,
    eslora: '7,00 m',
    motor: '200 CV',
    equipamiento: ['Solárium', 'Toldo bimini', 'Escalera'],
    precios: {
      medioDiaBaja: 320,
      medioDiaAlta: 425,
      diaCompletoBaja: 440,
      diaCompletoAlta: 605,
    },
    extras: [{ nombre: 'Paddle Surf', precio: 50 }],
    precioDesde: 320,
    imagen: 'https://picsum.photos/seed/costa-brava-joker/1200/800',
    badge: null,
    descripcionCorta:
      'Joker Boat de 7 m, 200 CV y 11 pax. Carácter deportivo con solárium amplio para una jornada premium en la Costa Brava.',
  },
  {
    slug: 'sessa-marine-c35',
    nombre: 'Sessa Marine C35',
    categoria: 'con-licencia',
    activo: true,
    pax: 10,
    eslora: '10,60 m',
    motor: '2x260 CV',
    equipamiento: ['Camarote', 'Plataforma de baño', 'Solárium'],
    precios: {
      medioDiaBaja: null,
      medioDiaAlta: null,
      diaCompletoBaja: 745,
      diaCompletoAlta: 970,
    },
    precioDesde: 745,
    imagen: 'https://picsum.photos/seed/sessa-marine-c35/1200/800',
    badge: 'Premium',
    descripcionCorta:
      'Yate Sessa Marine C35 de 10,60 m con camarote y dos motores de 260 CV. La experiencia más exclusiva de nuestra flota.',
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
    precios: {
      medioDiaBaja: null,
      medioDiaAlta: null,
      diaCompletoBaja: 257,
      diaCompletoAlta: 257,
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
    precios: {
      medioDiaBaja: null,
      medioDiaAlta: null,
      diaCompletoBaja: 325,
      diaCompletoAlta: 325,
    },
    precioDesde: 325,
    imagen: 'https://picsum.photos/seed/zodiac-medline-2/1200/800',
    badge: null,
    descripcionCorta: '',
  },
  {
    slug: 'tio-marc-mano',
    nombre: 'Tio Marc Mano',
    categoria: 'con-licencia',
    activo: false,
    pax: 8,
    eslora: '7,00 m',
    motor: 'Por confirmar',
    equipamiento: [],
    precios: {
      medioDiaBaja: null,
      medioDiaAlta: null,
      diaCompletoBaja: 340,
      diaCompletoAlta: 340,
    },
    precioDesde: 340,
    imagen: 'https://picsum.photos/seed/tio-marc-mano/1200/800',
    badge: 'Premium',
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
