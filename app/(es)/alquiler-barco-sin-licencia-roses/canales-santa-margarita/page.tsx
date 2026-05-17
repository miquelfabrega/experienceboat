import type { Metadata } from 'next';
import HeroCanales from '@/components/canales-santa-margarita/HeroCanales';
import IntroCanales from '@/components/canales-santa-margarita/IntroCanales';
import PorQueCanales from '@/components/canales-santa-margarita/PorQueCanales';
import QueVasAVer from '@/components/canales-santa-margarita/QueVasAVer';
import CapDeCreus from '@/components/canales-santa-margarita/CapDeCreus';
import InfoPractica from '@/components/canales-santa-margarita/InfoPractica';
import StickyCtaCanales from '@/components/canales-santa-margarita/StickyCtaCanales';
import SiloNavBlock from '@/components/SiloNavBlock';

export const dynamic = 'force-static';

/* ─── Metadata ────────────────────────────────────────────────────────────── */

export const metadata: Metadata = {
  title: 'Barco sin licencia en canales Santa Margarita',
  description:
    'Navega por los canales de Santa Margarita sin licencia desde Roses. Aguas tranquilas, casas frente al agua y la Costa Brava más auténtica. Reserva online.',
  alternates: {
    canonical: 'https://experienceboat.es/alquiler-barco-sin-licencia-roses/canales-santa-margarita',
    languages: {
      'x-default': 'https://experienceboat.es/alquiler-barco-sin-licencia-roses/canales-santa-margarita',
      es: 'https://experienceboat.es/alquiler-barco-sin-licencia-roses/canales-santa-margarita',
      fr: 'https://experienceboat.es/fr/location-bateau-sans-permis-roses/canaux-santa-margarita',
      en: 'https://experienceboat.es/en/boat-rental-without-licence-roses/santa-margarita-canals',
    },
  },
  openGraph: {
    title: 'Barco sin licencia en canales Santa Margarita',
    description:
      'Navega por los canales de Santa Margarita sin licencia desde Roses. Aguas tranquilas, casas frente al agua y la Costa Brava más auténtica. Reserva online.',
    url: 'https://experienceboat.es/alquiler-barco-sin-licencia-roses/canales-santa-margarita',
    siteName: 'Experience Boat',
    locale: 'es_ES',
    type: 'website',
    images: ['/images/hero/hero-1.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/images/hero/hero-1.jpg'],
  },
};

/* ─── Schema: BreadcrumbList ──────────────────────────────────────────────── */

function BreadcrumbSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Inicio',
        item: 'https://experienceboat.es',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Alquiler barco sin licencia Roses',
        item: 'https://experienceboat.es/alquiler-barco-sin-licencia-roses',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Canales de Santa Margarita',
        item: 'https://experienceboat.es/alquiler-barco-sin-licencia-roses/canales-santa-margarita',
      },
    ],
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

/* ─── Page ────────────────────────────────────────────────────────────────── */

export default function CanalesSantaMargaritaPage() {
  return (
    <>
      <BreadcrumbSchema />

      <main id="main-content">
        <HeroCanales />
        <IntroCanales />
        <PorQueCanales />
        <QueVasAVer />
        <CapDeCreus />
        <InfoPractica />
        <SiloNavBlock currentPath="/alquiler-barco-sin-licencia-roses/canales-santa-margarita" />
      </main>

      <StickyCtaCanales />
    </>
  );
}
