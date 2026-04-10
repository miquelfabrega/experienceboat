import type { BlogPost } from './blog';

export const blogPostsEn: BlogPost[] = [
  {
    slug: 'tips-planning-boat-trip-costa-brava',
    title: 'Tips for planning the perfect boat trip on the Costa Brava',
    excerpt: 'Practical guide to planning your boat outing on the Costa Brava: choosing the right vessel, routes, weather, safety and provisions. Everything you need to know.',
    date: '2026-04-06',
    readTime: 5,
    category: 'Guides',
    image: '/images/services/sin-licencia.jpg',
  },
  {
    slug: 'best-snorkeling-spots-costa-brava',
    title: 'The best snorkelling spots on the Costa Brava',
    excerpt: 'Discover the must-visit coves and marine reserves for snorkelling on the northern Costa Brava: Cala Montjoi, the Medes Islands, Cap de Creus and more.',
    date: '2026-04-06',
    readTime: 6,
    category: 'Explore',
    image: '/images/services/canales.jpg',
  },
  {
    slug: 'boat-trip-cap-de-creus-from-roses',
    title: 'Boat trip to Cap de Creus from Roses — complete guide',
    excerpt: 'Guide to the boat route from the Santa Margarita canals to Cap de Creus. Coves, food stops and everything you need to know before setting off.',
    date: '2026-04-06',
    readTime: 7,
    category: 'Routes',
    image: '/images/hero/hero-2.jpg',
  },
  {
    slug: 'first-time-boat-no-licence-roses',
    title: 'First time on a no-licence boat in Roses — everything you need to know',
    excerpt: 'Everything you need to know before hiring a no-licence boat in Roses for the first time. What to expect, how it works and why it\'s easier than you think.',
    date: '2026-04-06',
    readTime: 8,
    category: 'Guides',
    image: '/images/hero/hero-1.jpg',
  },
];

// Mapping ES slug → EN slug (for hreflang)
export const blogSlugMapEn: Record<string, string> = {
  'planificar-escapada-barco-costa-brava': 'tips-planning-boat-trip-costa-brava',
  'mejores-lugares-snorkel-costa-brava': 'best-snorkeling-spots-costa-brava',
  'ruta-barco-cap-de-creus-roses': 'boat-trip-cap-de-creus-from-roses',
  'primera-vez-barco-sin-licencia-roses': 'first-time-boat-no-licence-roses',
};
