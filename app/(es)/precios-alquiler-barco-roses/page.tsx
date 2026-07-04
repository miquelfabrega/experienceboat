import type { Metadata } from 'next';
import { buildAlternates } from '@/lib/i18n/routes';
import { PRECIOS_COPY } from '@/lib/data/precios';
import PreciosContent from '@/components/precios/PreciosContent';

export const dynamic = 'force-static';

const t = PRECIOS_COPY.es;

export const metadata: Metadata = {
  title: { absolute: t.metaTitle },
  description: t.metaDescription,
  alternates: buildAlternates('prices', 'es'),
  openGraph: {
    title: t.metaTitle,
    description: t.metaDescription,
    url: 'https://www.experienceboat.es/precios-alquiler-barco-roses',
    siteName: 'Experience Boat',
    locale: 'es_ES',
    type: 'website',
    images: ['/images/hero/hero-1.jpg'],
  },
  twitter: { card: 'summary_large_image', images: ['/images/hero/hero-1.jpg'] },
};

export default function PreciosPage() {
  return <PreciosContent lang="es" />;
}
