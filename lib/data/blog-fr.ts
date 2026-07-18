import type { BlogPost } from './blog';

export const blogPostsFr: BlogPost[] = [
  {
    slug: 'conseils-planifier-escapade-bateau-costa-brava',
    title: 'Conseils pour planifier l\'escapade parfaite en bateau sur la Costa Brava',
    excerpt: 'Guide pratique pour organiser votre sortie en bateau sur la Costa Brava : choix de l\'embarcation, itinéraires, météo, sécurité et provisions.',
    date: '2026-04-06',
    readTime: 5,
    category: 'Conseils',
    image: '/images/services/sin-licencia.jpg',
  },
  {
    slug: 'meilleurs-endroits-snorkeling-costa-brava',
    title: 'Les meilleurs endroits pour faire du snorkeling sur la Costa Brava',
    excerpt: 'Découvrez les criques et réserves marines incontournables pour plonger en apnée sur la Costa Brava nord : Cala Montjoi, îles Medas, Cap de Creus et plus encore.',
    date: '2026-04-06',
    readTime: 6,
    category: 'Découvrir',
    image: '/images/services/canales.jpg',
  },
  {
    slug: 'itineraire-bateau-cap-de-creus-roses',
    title: 'Itinéraire en bateau au Cap de Creus depuis Roses — guide complet',
    excerpt: 'Guide de l\'itinéraire en bateau depuis les canaux de Santa Margarita jusqu\'au Cap de Creus. Criques, arrêts gastronomiques et tout ce qu\'il faut savoir.',
    date: '2026-04-06',
    readTime: 7,
    category: 'Itinéraires',
    image: '/images/hero/hero-2.jpg',
  },
  {
    slug: 'premiere-fois-bateau-sans-permis-roses',
    title: 'Première fois en bateau sans permis à Roses — tout ce qu\'il faut savoir',
    excerpt: 'Tout ce que vous devez savoir avant de louer un bateau sans permis à Roses pour la première fois. À quoi s\'attendre, comment ça fonctionne et pourquoi c\'est plus facile qu\'on ne le croit.',
    date: '2026-04-06',
    readTime: 8,
    category: 'Guides',
    image: '/images/hero/hero-1.jpg',
  },
];

// Mapping ES slug → FR slug (for hreflang)
export const blogSlugMapFr: Record<string, string> = {
  'planificar-escapada-barco-costa-brava': 'conseils-planifier-escapade-bateau-costa-brava',
  'mejores-lugares-snorkel-costa-brava': 'meilleurs-endroits-snorkeling-costa-brava',
  'ruta-barco-cap-de-creus-roses': 'itineraire-bateau-cap-de-creus-roses',
  'primera-vez-barco-sin-licencia-roses': 'premiere-fois-bateau-sans-permis-roses',
};
