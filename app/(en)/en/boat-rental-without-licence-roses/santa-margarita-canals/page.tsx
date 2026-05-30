import type { Metadata } from 'next';
import HeroCanales from '@/components/canales-santa-margarita/HeroCanales';
import IntroCanales from '@/components/canales-santa-margarita/IntroCanales';
import PorQueCanales from '@/components/canales-santa-margarita/PorQueCanales';
import QueVasAVer from '@/components/canales-santa-margarita/QueVasAVer';
import CapDeCreus from '@/components/canales-santa-margarita/CapDeCreus';
import InfoPractica from '@/components/canales-santa-margarita/InfoPractica';
import StickyCtaCanales from '@/components/canales-santa-margarita/StickyCtaCanales';
import SiloNavBlock from '@/components/SiloNavBlock';
import { canauxEn } from '@/lib/data/sin-licencia-en';

export const dynamic = 'force-static';

/* ─── Metadata ────────────────────────────────────────────────────────────── */

export const metadata: Metadata = {
  title: 'No-Licence Boat in Santa Margarita Canals',
  description:
    'Navigate the Santa Margarita canals without a licence from Roses. Calm waters, waterfront houses and the most authentic Costa Brava. Book online.',
  alternates: {
    canonical: 'https://www.experienceboat.es/en/boat-rental-without-licence-roses/santa-margarita-canals',
    languages: {
      'x-default': 'https://www.experienceboat.es/alquiler-barco-sin-licencia-roses/canales-santa-margarita',
      es: 'https://www.experienceboat.es/alquiler-barco-sin-licencia-roses/canales-santa-margarita',
      fr: 'https://www.experienceboat.es/fr/location-bateau-sans-permis-roses/canaux-santa-margarita',
      en: 'https://www.experienceboat.es/en/boat-rental-without-licence-roses/santa-margarita-canals',
    },
  },
  openGraph: {
    title: 'No-Licence Boat in Santa Margarita Canals',
    description:
      'Navigate the Santa Margarita canals without a licence from Roses. Calm waters, waterfront houses and the most authentic Costa Brava.',
    url: 'https://www.experienceboat.es/en/boat-rental-without-licence-roses/santa-margarita-canals',
    siteName: 'Experience Boat',
    locale: 'en_GB',
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
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.experienceboat.es/en' },
      { '@type': 'ListItem', position: 2, name: 'Boat Rental without Licence Roses', item: 'https://www.experienceboat.es/en/boat-rental-without-licence-roses' },
      { '@type': 'ListItem', position: 3, name: 'Santa Margarita Canals', item: 'https://www.experienceboat.es/en/boat-rental-without-licence-roses/santa-margarita-canals' },
    ],
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}

/* ─── Page ────────────────────────────────────────────────────────────────── */

export default function SantaMargaritaCanalsEnPage() {
  return (
    <>
      <BreadcrumbSchema />
      <main id="main-content">
        <HeroCanales t={canauxEn.hero} />
        <IntroCanales t={canauxEn.intro} />
        <PorQueCanales t={canauxEn.porQue} />
        <QueVasAVer t={canauxEn.queVasAVer} />
        <CapDeCreus t={canauxEn.capDeCreus} />
        <InfoPractica t={canauxEn.infoPractica} />
        <SiloNavBlock />
      </main>
      <StickyCtaCanales />
    </>
  );
}
