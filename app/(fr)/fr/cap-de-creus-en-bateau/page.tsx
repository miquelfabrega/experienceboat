import type { Metadata } from 'next';
import { buildAlternates } from '@/lib/i18n/routes';
import { DESTINOS_COPY, DESTINO_HERO } from '@/lib/data/destinos';
import GuiaDestino from '@/components/destinos/GuiaDestino';

export const dynamic = 'force-static';

const t = DESTINOS_COPY.capDeCreusGuide.fr!;

export const metadata: Metadata = {
  title: t.metaTitle,
  description: t.metaDescription,
  alternates: buildAlternates('capDeCreusGuide', 'fr'),
  openGraph: {
    title: t.metaTitle,
    description: t.metaDescription,
    url: 'https://www.experienceboat.es/fr/cap-de-creus-en-bateau',
    siteName: 'Experience Boat',
    locale: 'fr_FR',
    type: 'article',
    images: [DESTINO_HERO.capDeCreusGuide],
  },
  twitter: { card: 'summary_large_image', images: [DESTINO_HERO.capDeCreusGuide] },
};

export default function Page() {
  return <GuiaDestino lang="fr" destino="capDeCreusGuide" />;
}
