import type { Metadata } from 'next';
import HeroSection from '@/components/sunset-experience/HeroSection';
import IntroSection from '@/components/sunset-experience/IntroSection';
import RouteSection from '@/components/sunset-experience/RouteSection';
import AudienceSection from '@/components/sunset-experience/AudienceSection';
import BestTimeSection from '@/components/sunset-experience/BestTimeSection';
import PracticalInfoSection from '@/components/sunset-experience/PracticalInfoSection';
import ReviewsSection from '@/components/sunset-experience/ReviewsSection';
import InternalLinksSection from '@/components/sunset-experience/InternalLinksSection';
import FAQSection from '@/components/sunset-experience/FAQSection';
import { faqData } from '@/components/sunset-experience/faq-data';
import StickyCTA from '@/components/sunset-experience/StickyCTA';
import SiloNavBlock from '@/components/SiloNavBlock';

export const dynamic = 'force-static';

/* ─── Metadata & SEO ─────────────────────────────────────────────────────── */

export const metadata: Metadata = {
title: 'Sunset Experience en barco en Roses',
  description:
    'Ver el atardecer desde un barco en Roses es una experiencia que no se olvida. Canales de Santa Margarita, bahía de Roses y el mejor momento del día. Reserva ya.',
  alternates: {
    canonical: 'https://experienceboat.es/experiencias-barco-roses/sunset-experience',
    languages: {
      'x-default': 'https://experienceboat.es/experiencias-barco-roses/sunset-experience',
      es: 'https://experienceboat.es/experiencias-barco-roses/sunset-experience',
      fr: 'https://experienceboat.es/fr/experiences-bateau-roses/sunset-experience',
      en: 'https://experienceboat.es/en/boat-experiences-roses/sunset-experience',
    },
  },
  openGraph: {
title: 'Sunset Experience en barco en Roses',
    description:
      'Ver el atardecer desde un barco en Roses es una experiencia que no se olvida. Canales de Santa Margarita, bahía de Roses y el mejor momento del día. Reserva ya.',
    url: 'https://experienceboat.es/experiencias-barco-roses/sunset-experience',
    siteName: 'Experience Boat',
    locale: 'es_ES',
    type: 'website',
  },
};

/* ─── TouristTrip Schema ─────────────────────────────────────────────────── */

function TouristTripSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'TouristTrip',
    '@id': 'https://experienceboat.es/experiencias-barco-roses/sunset-experience',
    name: 'Sunset Experience en barco en Roses',
    url: 'https://experienceboat.es/experiencias-barco-roses/sunset-experience',
    description: 'Salida en barco al atardecer desde Roses. 2 horas por los canales de Santa Margarita y la bahía. La experiencia más romántica de la Costa Brava.',
    duration: 'PT2H',
    inLanguage: 'es',
    provider: {
    '@type': 'LocalBusiness',
    '@id': 'https://experienceboat.es/#local-business',
    'name': 'Experience Boat',
    'telephone': '+34623995700',
    'url': 'https://experienceboat.es',
    'address': {
      '@type': 'PostalAddress',
      'streetAddress': 'Av. Clot Franquest Nord',
      'addressLocality': 'Roses',
      'postalCode': '17480',
      'addressRegion': 'Girona',
      'addressCountry': 'ES',
    },
  },
    availableLanguage: [
      { '@type': 'Language', 'name': 'Spanish' },
      { '@type': 'Language', 'name': 'French' },
      { '@type': 'Language', 'name': 'English' },
      { '@type': 'Language', 'name': 'Catalan' },
    ],
    offers: {
      '@type': 'Offer',
    price: '225',
      priceCurrency: 'EUR',
      availability: 'https://schema.org/InStock',
      validFrom: '2026-04-01',
      validThrough: '2026-10-31',
      url: 'https://experienceboat.es/reservas',
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

/* ─── BreadcrumbList Schema ──────────────────────────────────────────────── */

function BreadcrumbSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Inicio',
        item: 'https://experienceboat.es',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Experiencias en barco en Roses',
        item: 'https://experienceboat.es/experiencias-barco-roses',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Sunset Experience en barco en Roses',
        item: 'https://experienceboat.es/experiencias-barco-roses/sunset-experience',
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

/* ─── FAQ Schema Markup ───────────────────────────────────────────────────── */

function FAQSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqData.es.map((faq) => ({
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

export default function SunsetExperiencePage() {
  return (
    <>
      {/* Schema Markup */}
      <FAQSchema />
      <TouristTripSchema />
      <BreadcrumbSchema />

      {/* Page sections */}
      <main id="main-content">
        <HeroSection lang="es" />
        <IntroSection lang="es" />
        <RouteSection lang="es" />
        <AudienceSection lang="es" />
        <BestTimeSection lang="es" />
        <PracticalInfoSection lang="es" />
        <ReviewsSection />
        <FAQSection lang="es" />
        <InternalLinksSection lang="es" />
        <SiloNavBlock />
      </main>

      {/* Sticky CTA for Mobile */}
      <StickyCTA lang="es" />
    </>
  );
}
