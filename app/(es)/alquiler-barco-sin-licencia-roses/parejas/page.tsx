import type { Metadata } from 'next';
import { buildAlternates } from '@/lib/i18n/routes';
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
import { faqParejas } from '@/components/sin-licencia-parejas/faq-data-parejas';
import StickyCtaParejas from '@/components/sin-licencia-parejas/StickyCtaParejas';
import SiloNavBlock from '@/components/SiloNavBlock';

export const dynamic = 'force-static';

/* ─── Metadata ────────────────────────────────────────────────────────────── */

export const metadata: Metadata = {
title: 'Barco sin licencia en Roses para parejas',
  description:
    'Plan exclusivo para parejas en la Costa Brava. Barco sin licencia por los canales de Santa Margarita y calas inaccesibles a vuestro ritmo.',
  alternates: buildAlternates('rentalNoLicenceCouples', 'es'),
  openGraph: {
title: 'Barco sin licencia en Roses para parejas',
    description:
      'Plan exclusivo para parejas en la Costa Brava. Barco sin licencia por los canales de Santa Margarita y calas inaccesibles a vuestro ritmo.',
    url: 'https://www.experienceboat.es/alquiler-barco-sin-licencia-roses/parejas',
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
        item: 'https://www.experienceboat.es',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Alquiler barco sin licencia Roses',
        item: 'https://www.experienceboat.es/alquiler-barco-sin-licencia-roses',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Especial Parejas',
        item: 'https://www.experienceboat.es/alquiler-barco-sin-licencia-roses/parejas',
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

/* ─── Schema: FAQPage ─────────────────────────────────────────────────────── */

function FAQSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqParejas.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

/* ─── Page ────────────────────────────────────────────────────────────────── */

export default function ParejasSinLicenciaPage() {
  return (
    <>
      <BreadcrumbSchema />
      <FAQSchema />

      <main id="main-content">
        <HeroParejas />
        <IntroParejas />
        <PorQueParejas />
        <CanalesParejas />
        <CalasParejas />
        <DuracionParejas />
        <QueLlevarParejas />
        <PatronParejas />
        <ReviewsParejas />
        <ContactParejas />
        <FAQParejas />
        <SiloNavBlock currentPath="/alquiler-barco-sin-licencia-roses/parejas" />
      </main>

      <StickyCtaParejas />
    </>
  );
}
