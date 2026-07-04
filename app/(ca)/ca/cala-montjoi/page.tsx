import type { Metadata } from 'next';
import { buildAlternates } from '@/lib/i18n/routes';
import { DESTINOS_COPY, DESTINO_HERO } from '@/lib/data/destinos';
import GuiaDestino from '@/components/destinos/GuiaDestino';

export const dynamic = 'force-static';

const t = DESTINOS_COPY.calaMontjoi.ca!;

export const metadata: Metadata = {
  title: t.metaTitle,
  description: t.metaDescription,
  alternates: buildAlternates('calaMontjoi', 'ca'),
  openGraph: {
    title: t.metaTitle,
    description: t.metaDescription,
    url: 'https://www.experienceboat.es/ca/cala-montjoi',
    siteName: 'Experience Boat',
    locale: 'ca_ES',
    type: 'article',
    images: [DESTINO_HERO.calaMontjoi],
  },
  twitter: { card: 'summary_large_image', images: [DESTINO_HERO.calaMontjoi] },
};

export default function Page() {
  return <GuiaDestino lang="ca" destino="calaMontjoi" />;
}
