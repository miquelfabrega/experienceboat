export type CategoriaBarco = 'sin-licencia' | 'con-licencia';

export interface Barco {
  slug: string;
  nombre: string;
  pax: number | null;
  eslora: string | null;
  motor: string | null;
  precioDesde: number;
  imagen: string;
  categoria: CategoriaBarco;
  badge: string | null;
}

export const fleet: Barco[] = [
  // SIN LICENCIA
  {
    slug: 'dream-line-430',
    nombre: 'Dream Line 430',
    pax: 4,
    eslora: '4,3 m',
    motor: 'Mercury 15 CV',
    precioDesde: 223,
    imagen: 'https://picsum.photos/seed/dream-line-430/600/400',
    categoria: 'sin-licencia',
    badge: null
  },
  {
    slug: 'marine-breeze-compass-160sc',
    nombre: 'Marine Breeze Compass 160 SC',
    pax: 6,
    eslora: '4,62 m',
    motor: 'Mercury 15 CV',
    precioDesde: 223,
    imagen: 'https://picsum.photos/seed/marine-breeze-160sc/600/400',
    categoria: 'sin-licencia',
    badge: null
  },
  {
    slug: 'remus-450',
    nombre: 'Remus 450',
    pax: 6,
    eslora: '4,5 m',
    motor: 'Mercury 15 CV',
    precioDesde: 223,
    imagen: 'https://picsum.photos/seed/remus-450/600/400',
    categoria: 'sin-licencia',
    badge: 'Más reservado'
  },
  // CON LICENCIA
  {
    slug: 'zodiac-medline-i',
    nombre: 'Zodiac Medline I',
    pax: 11,
    eslora: '6 m',
    motor: 'Suzuki DF140',
    precioDesde: 257,
    imagen: 'https://picsum.photos/seed/zodiac-medline-1/600/400',
    categoria: 'con-licencia',
    badge: null
  },
  {
    slug: 'zodiac-medline-ii',
    nombre: 'Zodiac Medline II',
    pax: 11,
    eslora: '6 m',
    motor: 'Suzuki DF140',
    precioDesde: 325,
    imagen: 'https://picsum.photos/seed/zodiac-medline-2/600/400',
    categoria: 'con-licencia',
    badge: null
  },
  {
    slug: 'spirit-of-the-sea',
    nombre: 'Spirit of the Sea',
    pax: 12,
    eslora: '6,75 m',
    motor: 'Suzuki DF150',
    precioDesde: 360,
    imagen: 'https://picsum.photos/seed/spirit-of-the-sea/600/400',
    categoria: 'con-licencia',
    badge: null
  },
  {
    slug: 'tio-marc-mano',
    nombre: 'Tio Marc Mano',
    pax: null,
    eslora: null,
    motor: null,
    precioDesde: 340,
    imagen: 'https://picsum.photos/seed/tio-marc-mano/600/400',
    categoria: 'con-licencia',
    badge: 'Premium'
  }
];