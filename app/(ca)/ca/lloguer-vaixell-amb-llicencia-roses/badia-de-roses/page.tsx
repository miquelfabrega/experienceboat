import type { Metadata } from 'next';
import { buildAlternates } from '@/lib/i18n/routes';
import HeroBahia from '@/components/bahia-de-roses/HeroBahia';
import IntroBahia from '@/components/bahia-de-roses/IntroBahia';
import BahiaUnicaSection from '@/components/bahia-de-roses/BahiaUnicaSection';
import DestinosSection from '@/components/bahia-de-roses/DestinosSection';
import VentajaTacticaSection from '@/components/bahia-de-roses/VentajaTacticaSection';
import CondicionesSection from '@/components/bahia-de-roses/CondicionesSection';
import InfoPracticaSection from '@/components/bahia-de-roses/InfoPracticaSection';
import PreciosSection from '@/components/bahia-de-roses/PreciosSection';
import FAQBahia from '@/components/bahia-de-roses/FAQBahia';
import SiloNavBlock from '@/components/SiloNavBlock';
import StickyCtaBahia from '@/components/bahia-de-roses/StickyCtaBahia';
import { faqsBahiaCa } from '@/components/bahia-de-roses/faq-data';

export const dynamic = 'force-static';

/* ─── Metadata ────────────────────────────────────────────────────────────── */

export const metadata: Metadata = {
  title: 'Vaixell amb llicència a la badia de Roses',
  description:
    'Llogueu un vaixell amb llicència a la badia de Roses i navegueu lliures per la Costa Brava nord. Cales, Cap de Creus i total llibertat des de Santa Margarida.',
  keywords: [
    'badia de Roses',
    'navegar badia Roses',
    'cales Costa Brava',
    'lloguer vaixell amb llicència Roses',
  ],
  alternates: buildAlternates('rentalLicenceBay', 'ca'),
  openGraph: {
    title: 'Vaixell amb llicència a la badia de Roses',
    description:
      'Llogueu un vaixell amb llicència a la badia de Roses i navegueu lliures per la Costa Brava nord. Cales, Cap de Creus i total llibertat.',
    url: 'https://www.experienceboat.es/ca/lloguer-vaixell-amb-llicencia-roses/badia-de-roses',
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
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Inici',
        item: 'https://www.experienceboat.es/ca',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Lloguer vaixell amb llicència Roses',
        item: 'https://www.experienceboat.es/ca/lloguer-vaixell-amb-llicencia-roses',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Badia de Roses',
        item: 'https://www.experienceboat.es/ca/lloguer-vaixell-amb-llicencia-roses/badia-de-roses',
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
    mainEntity: faqsBahiaCa.map((faq) => ({
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

/* ─── Schema: LocalBusiness ───────────────────────────────────────────────── */

function LocalBusinessSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Experience Boat',
    url: 'https://www.experienceboat.es',
    telephone: '+34623995700',
    email: 'info@experienceboat.es',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Marina de Santa Margarita',
      addressLocality: 'Roses',
      postalCode: '17480',
      addressRegion: 'Girona',
      addressCountry: 'ES',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 42.2695,
      longitude: 3.1782,
    },
    priceRange: '€€',
    openingHours: 'Mo-Su 08:00-20:00',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Lloguer de vaixell amb llicència — Badia de Roses',
      itemListElement: [
        {
          '@type': 'Offer',
          name: 'Lloguer de vaixell amb llicència — Mitja jornada',
          price: 200,
          priceCurrency: 'EUR',
          description:
            'Lloguer de vaixell amb llicència a la badia de Roses, 4 hores des de la Marina de Santa Margarida.',
        },
        {
          '@type': 'Offer',
          name: 'Lloguer de vaixell amb llicència — Jornada completa',
          price: 350,
          priceCurrency: 'EUR',
          description:
            'Lloguer de vaixell amb llicència a la badia de Roses, 8 hores des de la Marina de Santa Margarida. Inclou accés al Cap de Creus.',
        },
      ],
    },
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

/* ─── Page ────────────────────────────────────────────────────────────────── */

export default function BadiaDeRosesPage() {
  return (
    <>
      {/* Schema Markup */}
      <BreadcrumbSchema />
      <FAQSchema />
      <LocalBusinessSchema />

      {/* Page content */}
      <main id="main-content">
        <HeroBahia lang="ca" />
        <IntroBahia lang="ca" />
        <BahiaUnicaSection lang="ca" />
        <DestinosSection lang="ca" />
        <VentajaTacticaSection lang="ca" />
        <CondicionesSection lang="ca" />
        <InfoPracticaSection lang="ca" />
        <PreciosSection lang="ca" />
        <FAQBahia lang="ca" />
        <SiloNavBlock
          silo="licencia"
          lang="ca"
          currentPath="/ca/lloguer-vaixell-amb-llicencia-roses/badia-de-roses"
        />
      </main>

      {/* Sticky CTA */}
      <StickyCtaBahia lang="ca" />
    </>
  );
}
