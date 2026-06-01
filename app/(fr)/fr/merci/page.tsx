import type { Metadata } from 'next';
import GraciasContent from '@/components/gracias/GraciasContent';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'Merci — Nous avons bien reçu votre message',
  description:
    'Merci d’avoir contacté Experience Boat. Nous avons bien reçu votre demande et vous répondrons sous 24 heures.',
  alternates: {
    canonical: 'https://www.experienceboat.es/fr/merci',
  },
  robots: {
    index: false,
    follow: true,
  },
  openGraph: {
    title: 'Merci — Nous avons bien reçu votre message',
    description:
      'Merci d’avoir contacté Experience Boat. Nous vous répondrons sous 24 heures.',
    url: 'https://www.experienceboat.es/fr/merci',
    siteName: 'Experience Boat',
    locale: 'fr_FR',
    type: 'website',
    images: ['/images/hero/hero-1.jpg'],
  },
};

export default function MerciPage() {
  return <GraciasContent lang="fr" />;
}
