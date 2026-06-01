import type { Metadata } from 'next';
import GraciasContent from '@/components/gracias/GraciasContent';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'Gracias — Hemos recibido tu mensaje',
  description:
    'Gracias por contactar con Experience Boat. Hemos recibido tu solicitud y te responderemos en menos de 24 horas.',
  alternates: {
    canonical: 'https://www.experienceboat.es/gracias',
  },
  robots: {
    index: false,
    follow: true,
  },
  openGraph: {
    title: 'Gracias — Hemos recibido tu mensaje',
    description:
      'Gracias por contactar con Experience Boat. Te responderemos en menos de 24 horas.',
    url: 'https://www.experienceboat.es/gracias',
    siteName: 'Experience Boat',
    locale: 'es_ES',
    type: 'website',
    images: ['/images/hero/hero-1.jpg'],
  },
};

export default function GraciasPage() {
  return <GraciasContent lang="es" />;
}
