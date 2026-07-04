import type { Metadata } from 'next';
import { buildAlternates } from '@/lib/i18n/routes';
import { PRECIOS_COPY } from '@/lib/data/precios';
import PreciosContent from '@/components/precios/PreciosContent';

export const dynamic = 'force-static';

const t = PRECIOS_COPY.ca;

export const metadata: Metadata = {
  title: { absolute: t.metaTitle },
  description: t.metaDescription,
  alternates: buildAlternates('prices', 'ca'),
  openGraph: {
    title: t.metaTitle,
    description: t.metaDescription,
    url: 'https://www.experienceboat.es/ca/preus-lloguer-vaixell-roses',
    siteName: 'Experience Boat',
    locale: 'ca_ES',
    type: 'website',
    images: ['/images/hero/hero-1.jpg'],
  },
  twitter: { card: 'summary_large_image', images: ['/images/hero/hero-1.jpg'] },
};

export default function PreusPage() {
  return <PreciosContent lang="ca" />;
}
