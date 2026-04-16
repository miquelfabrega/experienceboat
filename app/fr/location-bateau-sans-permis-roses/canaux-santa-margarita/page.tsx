import type { Metadata } from 'next';
import HeroCanales from '@/components/canales-santa-margarita/HeroCanales';
import IntroCanales from '@/components/canales-santa-margarita/IntroCanales';
import PorQueCanales from '@/components/canales-santa-margarita/PorQueCanales';
import QueVasAVer from '@/components/canales-santa-margarita/QueVasAVer';
import CapDeCreus from '@/components/canales-santa-margarita/CapDeCreus';
import InfoPractica from '@/components/canales-santa-margarita/InfoPractica';
import StickyCtaCanales from '@/components/canales-santa-margarita/StickyCtaCanales';
import SiloNavBlock from '@/components/SiloNavBlock';
import { canauxFr } from '@/lib/data/sin-licencia-fr';

export const dynamic = 'force-static';

/* ─── Metadata ────────────────────────────────────────────────────────────── */

export const metadata: Metadata = {
  title: 'Bateau sans permis canaux Santa Margarita',
  description:
    'Naviguez les canaux de Santa Margarita sans permis depuis Roses. Eaux calmes, maisons face à l\'eau et Costa Brava authentique. Réservez.',
  alternates: {
    canonical: 'https://www.experienceboat.es/fr/location-bateau-sans-permis-roses/canaux-santa-margarita',
    languages: {
      'x-default': 'https://www.experienceboat.es/alquiler-barco-sin-licencia-roses/canales-santa-margarita',
      es: 'https://www.experienceboat.es/alquiler-barco-sin-licencia-roses/canales-santa-margarita',
      fr: 'https://www.experienceboat.es/fr/location-bateau-sans-permis-roses/canaux-santa-margarita',
      en: 'https://www.experienceboat.es/en/boat-rental-without-licence-roses/santa-margarita-canals',
    },
  },
  openGraph: {
    title: 'Bateau sans permis canaux Santa Margarita',
    description:
      'Naviguez les canaux de Santa Margarita sans permis depuis Roses. Eaux calmes, maisons face à l\'eau et Costa Brava authentique. Réservez.',
    url: 'https://www.experienceboat.es/fr/location-bateau-sans-permis-roses/canaux-santa-margarita',
    siteName: 'Experience Boat',
    locale: 'fr_FR',
    type: 'website',
  },
};

/* ─── Schema: BreadcrumbList ──────────────────────────────────────────────── */

function BreadcrumbSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://www.experienceboat.es/fr' },
      { '@type': 'ListItem', position: 2, name: 'Location bateau sans permis Roses', item: 'https://www.experienceboat.es/fr/location-bateau-sans-permis-roses' },
      { '@type': 'ListItem', position: 3, name: 'Canaux de Santa Margarita', item: 'https://www.experienceboat.es/fr/location-bateau-sans-permis-roses/canaux-santa-margarita' },
    ],
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}

/* ─── Page ────────────────────────────────────────────────────────────────── */

export default function CanauxSantaMargaritaFrPage() {
  return (
    <>
      <BreadcrumbSchema />
      <main id="main-content">
        <HeroCanales t={canauxFr.hero} />
        <IntroCanales t={canauxFr.intro} />
        <PorQueCanales t={canauxFr.porQue} />
        <QueVasAVer t={canauxFr.queVasAVer} />
        <CapDeCreus t={canauxFr.capDeCreus} />
        <InfoPractica t={canauxFr.infoPractica} />
        <SiloNavBlock />
      </main>
      <StickyCtaCanales />
    </>
  );
}
