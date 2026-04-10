export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: number;
  category: string;
  image: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'planificar-escapada-barco-costa-brava',
    title: 'Consejos para planificar la escapada perfecta en barco en la Costa Brava',
    excerpt: 'Guía práctica para planificar tu salida en barco: elección de embarcación, rutas, clima, seguridad y provisiones. Todo lo que necesitas saber.',
    date: '2026-04-06',
    readTime: 5,
    category: 'Guías',
    image: '/images/services/sin-licencia.jpg',
  },
  {
    slug: 'mejores-lugares-snorkel-costa-brava',
    title: 'Los mejores lugares para hacer snorkel en la Costa Brava',
    excerpt: 'Descubre las calas y reservas marinas imprescindibles para sumergirte en la Costa Brava norte. Desde Cala Montjoi hasta el Parque Natural del Cap de Creus.',
    date: '2026-04-06',
    readTime: 6,
    category: 'Explorar',
    image: '/images/services/canales.jpg',
  },
  {
    slug: 'ruta-barco-cap-de-creus-roses',
    title: 'Ruta en barco al Cap de Creus desde Roses — explorando la costa norte de la Costa Brava',
    excerpt: 'Guía de la ruta en barco desde los canales de Santa Margarita hasta el Cap de Creus. Calas, paradas gastronómicas y todo lo que necesitas saber antes de salir.',
    date: '2026-04-06',
    readTime: 7,
    category: 'Rutas',
    image: '/images/hero/hero-2.jpg',
  },
  {
    slug: 'primera-vez-barco-sin-licencia-roses',
    title: 'Primera vez en barco sin licencia en Roses — todo lo que necesitas saber',
    excerpt: 'Todo lo que necesitas saber antes de alquilar un barco sin licencia en Roses por primera vez. Qué esperar, cómo funciona y por qué es más fácil de lo que crees.',
    date: '2026-04-06',
    readTime: 8,
    category: 'Guías',
    image: '/images/hero/hero-1.jpg',
  },
];
