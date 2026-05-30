import type { Metadata } from 'next';
import HeroCanales from '@/components/canales-santa-margarita/HeroCanales';
import IntroCanales from '@/components/canales-santa-margarita/IntroCanales';
import PorQueCanales from '@/components/canales-santa-margarita/PorQueCanales';
import QueVasAVer from '@/components/canales-santa-margarita/QueVasAVer';
import CapDeCreus from '@/components/canales-santa-margarita/CapDeCreus';
import InfoPractica from '@/components/canales-santa-margarita/InfoPractica';
import StickyCtaCanales from '@/components/canales-santa-margarita/StickyCtaCanales';
import SiloNavBlock from '@/components/SiloNavBlock';
import { canauxCa } from '@/lib/data/sin-licencia-ca';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'Vaixell sense Llicència Canals Santa Margarida',
  description:
    "Navegueu pels canals de Santa Margarida sense llicència des de Roses. Aigües tranquil·les, cases a peu d'aigua i la Costa Brava més autèntica. Reserveu en línia.",
  alternates: {
    canonical: 'https://www.experienceboat.es/ca/lloguer-vaixell-sense-llicencia-roses/canals-santa-margarida',
    languages: {
      'x-default': 'https://www.experienceboat.es/alquiler-barco-sin-licencia-roses/canales-santa-margarita',
      es: 'https://www.experienceboat.es/alquiler-barco-sin-licencia-roses/canales-santa-margarita',
      ca: 'https://www.experienceboat.es/ca/lloguer-vaixell-sense-llicencia-roses/canals-santa-margarida',
      fr: 'https://www.experienceboat.es/fr/location-bateau-sans-permis-roses/canaux-santa-margarita',
      en: 'https://www.experienceboat.es/en/boat-rental-without-licence-roses/santa-margarita-canals',
    },
  },
  openGraph: {
    title: 'Vaixell sense Llicència Canals Santa Margarida',
    description:
      "Navegueu pels canals de Santa Margarida sense llicència des de Roses. Aigües tranquil·les, cases a peu d'aigua i la Costa Brava més autèntica.",
    url: 'https://www.experienceboat.es/ca/lloguer-vaixell-sense-llicencia-roses/canals-santa-margarida',
    siteName: 'Experience Boat',
    locale: 'ca_ES',
    type: 'website',
    images: ['/images/hero/hero-1.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/images/hero/hero-1.jpg'],
  },
};

function BreadcrumbSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Inici', item: 'https://www.experienceboat.es/ca' },
      { '@type': 'ListItem', position: 2, name: 'Lloguer vaixell sense llicència Roses', item: 'https://www.experienceboat.es/ca/lloguer-vaixell-sense-llicencia-roses' },
      { '@type': 'ListItem', position: 3, name: 'Canals de Santa Margarida', item: 'https://www.experienceboat.es/ca/lloguer-vaixell-sense-llicencia-roses/canals-santa-margarida' },
    ],
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}

export default function CanalsSantaMargaridaPage() {
  return (
    <>
      <BreadcrumbSchema />
      <main id="main-content">
        <HeroCanales t={canauxCa.hero} />
        <IntroCanales t={canauxCa.intro} />
        <PorQueCanales t={canauxCa.porQue} />
        <QueVasAVer t={canauxCa.queVasAVer} />
        <CapDeCreus t={canauxCa.capDeCreus} />
        <InfoPractica t={canauxCa.infoPractica} />
        <SiloNavBlock silo="sin-licencia" lang="ca" currentPath="/ca/lloguer-vaixell-sense-llicencia-roses/canals-santa-margarida" />
      </main>
      <StickyCtaCanales />
    </>
  );
}
