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
import StickyCtaParejas from '@/components/sin-licencia-parejas/StickyCtaParejas';
import SiloNavBlock from '@/components/SiloNavBlock';
import { couplesCa } from '@/lib/data/sin-licencia-ca';

export const dynamic = 'force-static';

/* ─── Metadata ────────────────────────────────────────────────────────────── */

export const metadata: Metadata = {
  title: 'Vaixell sense Llicència Roses per a Parelles',
  description:
    'Pla exclusiu per a parelles a la Costa Brava: vaixell sense llicència pels canals de Santa Margarida i cales amagades al vostre ritme. Reserveu en línia.',
  alternates: buildAlternates('rentalNoLicenceCouples', 'ca'),
  openGraph: {
    title: 'Vaixell sense Llicència Roses per a Parelles',
    description:
      'Pla exclusiu per a parelles a la Costa Brava: vaixell sense llicència pels canals de Santa Margarida i cales amagades al vostre ritme.',
    url: 'https://www.experienceboat.es/ca/lloguer-vaixell-sense-llicencia-roses/parelles',
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

/* ─── Schema: BreadcrumbList ──────────────────────────────────────────────── */

function BreadcrumbSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Inici', item: 'https://www.experienceboat.es/ca' },
      { '@type': 'ListItem', position: 2, name: 'Lloguer vaixell sense llicència Roses', item: 'https://www.experienceboat.es/ca/lloguer-vaixell-sense-llicencia-roses' },
      { '@type': 'ListItem', position: 3, name: 'Especial Parelles', item: 'https://www.experienceboat.es/ca/lloguer-vaixell-sense-llicencia-roses/parelles' },
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
    mainEntity: couplesCa.faq.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
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

export default function ParellesSenseLlicenciaPage() {
  return (
    <>
      <BreadcrumbSchema />
      <FAQSchema />

      <main id="main-content">
        <HeroParejas t={couplesCa.hero} />
        <IntroParejas t={couplesCa.intro} />
        <PorQueParejas t={couplesCa.porQue} />
        <CanalesParejas t={couplesCa.canales} />
        <CalasParejas t={couplesCa.calas} />
        <DuracionParejas t={couplesCa.duracion} />
        <QueLlevarParejas t={couplesCa.queLlevar} />
        <PatronParejas t={couplesCa.patron} />
        <ReviewsParejas t={couplesCa.reviews} />
        <ContactParejas t={couplesCa.contact} />
        <FAQParejas t={couplesCa.faq} />
        <SiloNavBlock silo="sin-licencia" lang="ca" currentPath="/ca/lloguer-vaixell-sense-llicencia-roses/parelles" />
      </main>

      <StickyCtaParejas />
    </>
  );
}
