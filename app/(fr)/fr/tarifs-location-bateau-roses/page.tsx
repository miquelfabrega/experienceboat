import type { Metadata } from 'next';
import { buildAlternates } from '@/lib/i18n/routes';
import { PRECIOS_COPY } from '@/lib/data/precios';
import PreciosContent from '@/components/precios/PreciosContent';

export const dynamic = 'force-static';

const t = PRECIOS_COPY.fr;

export const metadata: Metadata = {
  title: { absolute: t.metaTitle },
  description: t.metaDescription,
  alternates: buildAlternates('prices', 'fr'),
  openGraph: {
    title: t.metaTitle,
    description: t.metaDescription,
    url: 'https://www.experienceboat.es/fr/tarifs-location-bateau-roses',
    siteName: 'Experience Boat',
    locale: 'fr_FR',
    type: 'website',
    images: ['/images/hero/hero-1.jpg'],
  },
  twitter: { card: 'summary_large_image', images: ['/images/hero/hero-1.jpg'] },
};

export default function TarifsPage() {
  return <PreciosContent lang="fr" />;
}
