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
    'Exclusive plan for couples on the Costa Brava. No-licence boat through Santa Margarita canals and hidden coves at your own pace.',
  alternates: {
    canonical: 'https://www.experienceboat.es/en/boat-rental-without-licence-roses/couples',
    languages: {
      'x-default': 'https://www.experienceboat.es/alquiler-barco-sin-licencia-roses/parejas',
      es: 'https://www.experienceboat.es/alquiler-barco-sin-licencia-roses/parejas',
      fr: 'https://www.experienceboat.es/fr/location-bateau-sans-permis-roses/couples',
      en: 'https://www.experienceboat.es/en/boat-rental-without-licence-roses/couples',
    },
  },
  openGraph: {
title: 'Boat Rental without Licence in Roses for Couples',
    description:
      'Exclusive plan for couples on the Costa Brava. No-licence boat through Santa Margarita canals and hidden coves at your own pace.',
    url: 'https://www.experienceboat.es/en/boat-rental-without-licence-roses/couples',
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
      { '@type': 'ListItem', position: 3, name: 'Couples Special', item: 'https://www.experienceboat.es/en/boat-rental-without-licence-roses/couples' },
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
