import type { Metadata } from 'next';
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
import { faqs } from '@/components/pillar-canales/faq-data';

export const dynamic = 'force-static';

/* ─── Metadata & SEO ─────────────────────────────────────────────────────── */

export const metadata: Metadata = {
title: 'Canales de Santa Margarita en barco — Roses',
  description:
    'Explora los canales de Santa Margarita desde el agua. Casas frente al mar y la Costa Brava más auténtica. Salidas privadas desde Roses.',
  alternates: {
    canonical: 'https://www.experienceboat.es/canales-santa-margarita',
    languages: {
      'x-default': 'https://www.experienceboat.es/canales-santa-margarita',
      es: 'https://www.experienceboat.es/canales-santa-margarita',
      fr: 'https://www.experienceboat.es/fr/canaux-santa-margarita',
      en: 'https://www.experienceboat.es/en/santa-margarita-canals-roses',
    },
  },
  openGraph: {
title: 'Canales de Santa Margarita en barco — Roses',
    description:
      'Explora los canales de Santa Margarita desde el agua. Casas frente al mar y la Costa Brava más auténtica. Salidas privadas desde Roses.',
    url: 'https://www.experienceboat.es/canales-santa-margarita',
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

/* ─── FAQ Schema Markup ───────────────────────────────────────────────────── */

function FAQSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
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
    name: 'Canales de Santa Margarita — Excursión en barco',
    description:
      'Recorrido en barco por los canales navegables de Santa Margarita en Roses, Costa Brava. Salidas privadas con y sin licencia desde la Marina de Santa Margarita.',
    url: 'https://www.experienceboat.es/canales-santa-margarita',
    touristType: 'Familias, parejas, grupos de amigos',
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
        name: 'Inicio',
        item: 'https://www.experienceboat.es',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Canales de Santa Margarita en barco',
        item: 'https://www.experienceboat.es/canales-santa-margarita',
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

export default function CanalesSantaMargaritaPillarPage() {
  return (
    <>
      {/* Schema Markup */}
      <FAQSchema />
      <TouristAttractionSchema />
      <BreadcrumbSchema />

      {/* Page sections */}
      <main id="main-content">
        <HeroSection />
        <IntroSection />
        <ProductBoxSection />
        <RouteSection />
        <DifferentiatorSection />
        <OptionsSection />
        <FullRouteSection />
        <BestTimeSection />
        <ReviewsSection />
        <ContactSection />
        <FAQSection lang="es" />
        <SiloNavBlock currentPath="/canales-santa-margarita" />
      </main>

      {/* Sticky CTA — mobile bar + desktop FAB */}
      <StickyMobileCTA />
    </>
  );
}
