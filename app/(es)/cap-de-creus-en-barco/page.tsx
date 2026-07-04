import type { Metadata } from 'next';
import { buildAlternates } from '@/lib/i18n/routes';
import { DESTINOS_COPY, DESTINO_HERO } from '@/lib/data/destinos';
import GuiaDestino from '@/components/destinos/GuiaDestino';

export const dynamic = 'force-static';

const t = DESTINOS_COPY.capDeCreusGuide.es!;

export const metadata: Metadata = {
  title: t.metaTitle,
  description: t.metaDescription,
  alternates: buildAlternates('capDeCreusGuide', 'es'),
  openGraph: {
    title: t.metaTitle,
    description: t.metaDescription,
    url: 'https://www.experienceboat.es/cap-de-creus-en-barco',
    siteName: 'Experience Boat',
    locale: 'es_ES',
    type: 'article',
    images: [DESTINO_HERO.capDeCreusGuide],
  },
  twitter: { card: 'summary_large_image', images: [DESTINO_HERO.capDeCreusGuide] },
};

export default function Page() {
  return <GuiaDestino lang="es" destino="capDeCreusGuide" />;
}
