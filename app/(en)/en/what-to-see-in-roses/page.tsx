import type { Metadata } from 'next';
import { buildAlternates } from '@/lib/i18n/routes';
import { DESTINOS_COPY, DESTINO_HERO } from '@/lib/data/destinos';
import GuiaDestino from '@/components/destinos/GuiaDestino';

export const dynamic = 'force-static';

const t = DESTINOS_COPY.queVerRoses.en!;

export const metadata: Metadata = {
  title: t.metaTitle,
  description: t.metaDescription,
  alternates: buildAlternates('queVerRoses', 'en'),
  openGraph: {
    title: t.metaTitle,
    description: t.metaDescription,
    url: 'https://www.experienceboat.es/en/what-to-see-in-roses',
    siteName: 'Experience Boat',
    locale: 'en_GB',
    type: 'article',
    images: [DESTINO_HERO.queVerRoses],
  },
  twitter: { card: 'summary_large_image', images: [DESTINO_HERO.queVerRoses] },
};

export default function Page() {
  return <GuiaDestino lang="en" destino="queVerRoses" />;
}
