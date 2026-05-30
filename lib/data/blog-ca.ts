export interface BlogPostCa {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  featured?: boolean;
}

export const blogPostsCa: BlogPostCa[] = [
  {
    slug: 'planificar-escapada-vaixell-costa-brava',
    title: 'Com planificar la vostra escapada en vaixell per la Costa Brava',
    excerpt:
      'Guia pràctica per organitzar un dia perfecte de navegació: què emportar-vos, els millors horaris, cales imprescindibles i consells per llogar.',
    date: '2026-01-15',
    readTime: '6 min',
    category: 'Guies',
    image: '/images/blog/escapada-costa-brava.jpg',
    featured: true,
  },
  {
    slug: 'millors-llocs-esnorquel-costa-brava',
    title: 'Els 7 millors llocs per fer esnòrquel a la Costa Brava',
    excerpt:
      'Descobriu les cales i racons amb les aigües més cristal·lines per fer esnòrquel a prop de Roses i el Cap de Creus.',
    date: '2026-01-10',
    readTime: '5 min',
    category: 'Destinacions',
    image: '/images/blog/snorkel-costa-brava.jpg',
  },
  {
    slug: 'ruta-vaixell-cap-de-creus-roses',
    title: 'Ruta en vaixell pel Cap de Creus des de Roses',
    excerpt:
      'L\'itinerari complet per descobrir el parc natural del Cap de Creus navegant: parades, cales secretes i temps.',
    date: '2026-01-05',
    readTime: '7 min',
    category: 'Rutes',
    image: '/images/blog/cap-de-creus.jpg',
  },
  {
    slug: 'primera-vegada-vaixell-sense-llicencia-roses',
    title: 'La vostra primera vegada en vaixell sense llicència: tot el que cal saber',
    excerpt:
      'Sense experiència prèvia. Us expliquem com funciona el lloguer de vaixell sense llicència a Roses, què podeu fer i què no.',
    date: '2025-12-28',
    readTime: '5 min',
    category: 'Consells',
    image: '/images/blog/primera-vez-barco.jpg',
  },
];
