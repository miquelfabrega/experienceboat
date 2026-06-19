import type { Metadata } from 'next';
import { buildAlternates } from '@/lib/i18n/routes';
import HeroCanales from '@/components/canales-santa-margarita/HeroCanales';
import IntroCanales from '@/components/canales-santa-margarita/IntroCanales';
import PorQueCanales from '@/components/canales-santa-margarita/PorQueCanales';
import QueVasAVer from '@/components/canales-santa-margarita/QueVasAVer';
import CapDeCreus from '@/components/canales-santa-margarita/CapDeCreus';
import InfoPractica from '@/components/canales-santa-margarita/InfoPractica';
import StickyCtaCanales from '@/components/canales-santa-margarita/StickyCtaCanales';
import SiloNavBlock from '@/components/SiloNavBlock';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'Vaixell sense Llicència Canals Santa Margarida',
  description:
    "Navegueu pels canals de Santa Margarida sense llicència des de Roses. Aigües tranquil·les, cases a peu d'aigua i la Costa Brava més autèntica. Reserveu en línia.",
  alternates: buildAlternates('rentalNoLicenceCanals', 'ca'),
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
        <HeroCanales lang="ca" />
        <IntroCanales lang="ca" />
        <PorQueCanales lang="ca" />
        <QueVasAVer lang="ca" />
        <CapDeCreus lang="ca" />
        <InfoPractica lang="ca" />
        <SiloNavBlock silo="sin-licencia" lang="ca" currentPath="/ca/lloguer-vaixell-sense-llicencia-roses/canals-santa-margarida" />
      </main>
      <StickyCtaCanales lang="ca" />
    </>
  );
}
