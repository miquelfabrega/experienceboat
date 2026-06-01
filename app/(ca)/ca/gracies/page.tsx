import type { Metadata } from 'next';
import GraciasContent from '@/components/gracias/GraciasContent';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'Gràcies — Hem rebut el vostre missatge',
  description:
    'Gràcies per contactar amb Experience Boat. Hem rebut la vostra sol·licitud i us respondrem en menys de 24 hores.',
  alternates: {
    canonical: 'https://www.experienceboat.es/ca/gracies',
  },
  robots: {
    index: false,
    follow: true,
  },
  openGraph: {
    title: 'Gràcies — Hem rebut el vostre missatge',
    description:
      'Gràcies per contactar amb Experience Boat. Us respondrem en menys de 24 hores.',
    url: 'https://www.experienceboat.es/ca/gracies',
    siteName: 'Experience Boat',
    locale: 'ca_ES',
    type: 'website',
    images: ['/images/hero/hero-1.jpg'],
  },
};

export default function GraciesPage() {
  return <GraciasContent lang="ca" />;
}
