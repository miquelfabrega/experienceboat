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
import { couplesEn } from '@/lib/data/sin-licencia-en';

export const dynamic = 'force-static';

/* ─── Metadata ────────────────────────────────────────────────────────────── */

export const metadata: Metadata = {
title: 'Boat Rental without Licence in Roses for Couples',
  description:
    'The most exclusive plan for couples on the Costa Brava. Rent a boat without a licence, cruise the Santa Margarita canals and discover inaccessible coves at your own pace.',
  alternates: {
    canonical: 'https://experienceboat.es/en/boat-rental-without-licence-roses/couples',
    languages: {
      'x-default': 'https://experienceboat.es/alquiler-barco-sin-licencia-roses/parejas',
      es: 'https://experienceboat.es/alquiler-barco-sin-licencia-roses/parejas',
      fr: 'https://experienceboat.es/fr/location-bateau-sans-permis-roses/couples',
      en: 'https://experienceboat.es/en/boat-rental-without-licence-roses/couples',
    },
  },
  openGraph: {
title: 'Boat Rental without Licence in Roses for Couples',
    description:
      'The most exclusive plan for couples on the Costa Brava. Rent a boat without a licence, cruise the Santa Margarita canals and discover inaccessible coves at your own pace.',
    url: 'https://experienceboat.es/en/boat-rental-without-licence-roses/couples',
    siteName: 'Experience Boat',
    locale: 'en_GB',
    type: 'website',
  },
};

/* ─── Schema: BreadcrumbList ──────────────────────────────────────────────── */

function BreadcrumbSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://experienceboat.es/en' },
      { '@type': 'ListItem', position: 2, name: 'Boat Rental without Licence Roses', item: 'https://experienceboat.es/en/boat-rental-without-licence-roses' },
      { '@type': 'ListItem', position: 3, name: 'Couples Special', item: 'https://experienceboat.es/en/boat-rental-without-licence-roses/couples' },
    ],
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}

/* ─── Schema: FAQPage ─────────────────────────────────────────────────────── */

function FAQSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: couplesEn.faq.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}

/* ─── Page ────────────────────────────────────────────────────────────────── */

export default function CouplesNoLicenceEnPage() {
  return (
    <>
      <BreadcrumbSchema />
      <FAQSchema />
      <main id="main-content">
        <HeroParejas t={couplesEn.hero} />
        <IntroParejas t={couplesEn.intro} />
        <PorQueParejas t={couplesEn.porQue} />
        <CanalesParejas t={couplesEn.canales} />
        <CalasParejas t={couplesEn.calas} />
        <DuracionParejas t={couplesEn.duracion} />
        <QueLlevarParejas t={couplesEn.queLlevar} />
        <PatronParejas t={couplesEn.patron} />
        <ReviewsParejas t={couplesEn.reviews} />
        <ContactParejas t={couplesEn.contact} />
        <FAQParejas t={couplesEn.faq} />
        <SiloNavBlock />
      </main>
      <StickyCtaParejas />
    </>
  );
}
