import type { Metadata } from 'next';
import { buildAlternates } from '@/lib/i18n/routes';
import HeroSection from '@/components/pillar-canales/HeroSection';
import IntroSection from '@/components/pillar-canales/IntroSection';
import RouteSection from '@/components/pillar-canales/RouteSection';
import DifferentiatorSection from '@/components/pillar-canales/DifferentiatorSection';
import OptionsSection from '@/components/pillar-canales/OptionsSection';
import FullRouteSection from '@/components/pillar-canales/FullRouteSection';
import BestTimeSection from '@/components/pillar-canales/BestTimeSection';
import ReviewsSection from '@/components/pillar-canales/ReviewsSection';
import ContactSection from '@/components/pillar-canales/ContactSection';
import FAQSection from '@/components/pillar-canales/FAQSection';
import StickyMobileCTA from '@/components/pillar-canales/StickyMobileCTA';
import SiloNavBlock from '@/components/SiloNavBlock';
import ProductBoxSection from '@/components/canal-tour-santa-margarita/ProductBoxSection';
import { faqData } from '@/components/pillar-canales/faq-data';

export const dynamic = 'force-static';

/* ─── Metadata & SEO ─────────────────────────────────────────────────────── */

export const metadata: Metadata = {
  title: 'Excursió canals Santa Margarida amb vaixell — Roses',
  description:
    'Descobreix els canals de Santa Margarida des de l\'aigua. Cases vora el mar i la Costa Brava més autèntica. Sortides privades amb vaixell des de Roses.',
  keywords: [
    'excursió canals Santa Margarida',
    'vaixell canals Castelló d\'Empúries',
    'canals Santa Margarida amb vaixell',
    'lloguer vaixell Roses',
  ],
  alternates: buildAlternates('canals', 'ca'),
  openGraph: {
    title: 'Excursió canals Santa Margarida amb vaixell — Roses',
    description:
      'Descobreix els canals de Santa Margarida des de l\'aigua. Cases vora el mar i la Costa Brava més autèntica. Sortides privades amb vaixell des de Roses.',
    url: 'https://www.experienceboat.es/ca/canals-santa-margarida',
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

/* ─── FAQ Schema Markup ───────────────────────────────────────────────────── */

function FAQSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqData.ca.map((faq) => ({
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

/* ─── TouristAttraction Schema ────────────────────────────────────────────── */

function TouristAttractionSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'TouristAttraction',
    name: 'Canals de Santa Margarida — Excursió amb vaixell',
    description:
      'Recorregut amb vaixell pels canals navegables de Santa Margarida a Roses, Costa Brava. Sortides privades amb i sense llicència des de la Marina de Santa Margarida.',
    url: 'https://www.experienceboat.es/ca/canals-santa-margarida',
    touristType: 'Famílies, parelles, grups d\'amics',
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 42.2713962,
      longitude: 3.1343284,
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Av. Clot Franquest Nord',
      addressLocality: 'Roses',
      postalCode: '17480',
      addressRegion: 'Girona',
      addressCountry: 'ES',
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

/* ─── BreadcrumbList Schema ───────────────────────────────────────────────── */

function BreadcrumbSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Inici',
        item: 'https://www.experienceboat.es/ca',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Canals de Santa Margarida amb vaixell',
        item: 'https://www.experienceboat.es/ca/canals-santa-margarida',
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

export default function CanalsSantaMargaridaPillarPageCA() {
  return (
    <>
      {/* Schema Markup */}
      <FAQSchema />
      <TouristAttractionSchema />
      <BreadcrumbSchema />

      {/* Page sections — todas las secciones del silo pilar reciben lang="ca". */}
      <main id="main-content">
        <HeroSection lang="ca" />
        <IntroSection lang="ca" />
        <ProductBoxSection lang="ca" />
        <RouteSection lang="ca" />
        <DifferentiatorSection lang="ca" />
        <OptionsSection lang="ca" />
        <FullRouteSection lang="ca" />
        <BestTimeSection lang="ca" />
        <ReviewsSection lang="ca" />
        <ContactSection lang="ca" />
        <FAQSection lang="ca" />
        <SiloNavBlock silo="canales" lang="ca" currentPath="/ca/canals-santa-margarida" />
      </main>

      {/* Sticky CTA — mobile bar + desktop FAB */}
      <StickyMobileCTA lang="ca" />
    </>
  );
}
