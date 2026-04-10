import type { Metadata } from 'next';
import HeroParejas from '@/components/sin-licencia-parejas/HeroParejas';
import IntroParejas from '@/components/sin-licencia-parejas/IntroParejas';
import PorQueParejas from '@/components/sin-licencia-parejas/PorQueParejas';
import CanalesParejas from '@/components/sin-licencia-parejas/CanalesParejas';
import CalasParejas from '@/components/sin-licencia-parejas/CalasParejas';
import DuracionParejas from '@/components/sin-licencia-parejas/DuracionParejas';
import QueLlevarParejas from '@/components/sin-licencia-parejas/QueLlevarParejas';
import PatronParejas from '@/components/sin-licencia-parejas/PatronParejas';
import ReviewsParejas from '@/components/sin-licencia-parejas/ReviewsParejas';
import ContactParejas from '@/components/sin-licencia-parejas/ContactParejas';
import FAQParejas from '@/components/sin-licencia-parejas/FAQParejas';
import StickyCtaParejas from '@/components/sin-licencia-parejas/StickyCtaParejas';
import SiloNavBlock from '@/components/SiloNavBlock';
import { couplesFr } from '@/lib/data/sin-licencia-fr';

export const dynamic = 'force-static';

/* ─── Metadata ────────────────────────────────────────────────────────────── */

export const metadata: Metadata = {
title: 'Location bateau sans permis à Roses pour couples',
  description:
    'Le plan le plus exclusif pour couples sur la Costa Brava. Louez un bateau sans permis, parcourez les canaux de Santa Margarita et découvrez des criques inaccessibles à votre rythme.',
  alternates: {
    canonical: 'https://experienceboat.es/fr/location-bateau-sans-permis-roses/couples',
    languages: {
      'x-default': 'https://experienceboat.es/alquiler-barco-sin-licencia-roses/parejas',
      es: 'https://experienceboat.es/alquiler-barco-sin-licencia-roses/parejas',
      fr: 'https://experienceboat.es/fr/location-bateau-sans-permis-roses/couples',
      en: 'https://experienceboat.es/en/boat-rental-without-licence-roses/couples',
    },
  },
  openGraph: {
title: 'Location bateau sans permis à Roses pour couples',
    description:
      'Le plan le plus exclusif pour couples sur la Costa Brava. Louez un bateau sans permis, parcourez les canaux de Santa Margarita et découvrez des criques inaccessibles à votre rythme.',
    url: 'https://experienceboat.es/fr/location-bateau-sans-permis-roses/couples',
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
      { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://experienceboat.es/fr' },
      { '@type': 'ListItem', position: 2, name: 'Location bateau sans permis Roses', item: 'https://experienceboat.es/fr/location-bateau-sans-permis-roses' },
      { '@type': 'ListItem', position: 3, name: 'Spécial couples', item: 'https://experienceboat.es/fr/location-bateau-sans-permis-roses/couples' },
    ],
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}

/* ─── Schema: FAQPage ─────────────────────────────────────────────────────── */

function FAQSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: couplesFr.faq.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}

/* ─── Page ────────────────────────────────────────────────────────────────── */

export default function CouplesSansPermisPage() {
  return (
    <>
      <BreadcrumbSchema />
      <FAQSchema />
      <main id="main-content">
        <HeroParejas t={couplesFr.hero} />
        <IntroParejas t={couplesFr.intro} />
        <PorQueParejas t={couplesFr.porQue} />
        <CanalesParejas t={couplesFr.canales} />
        <CalasParejas t={couplesFr.calas} />
        <DuracionParejas t={couplesFr.duracion} />
        <QueLlevarParejas t={couplesFr.queLlevar} />
        <PatronParejas t={couplesFr.patron} />
        <ReviewsParejas t={couplesFr.reviews} />
        <ContactParejas t={couplesFr.contact} />
        <FAQParejas t={couplesFr.faq} />
        <SiloNavBlock />
      </main>
      <StickyCtaParejas />
    </>
  );
}
