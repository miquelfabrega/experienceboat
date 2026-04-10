import type { Metadata } from 'next';
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
import { faqsBahia } from '@/components/bahia-de-roses/faq-data';

export const dynamic = 'force-static';

/* ─── Metadata ────────────────────────────────────────────────────────────── */

export const metadata: Metadata = {
title: 'Barco con licencia en la bahía de Roses',
  description:
    'Alquila un barco con licencia en la bahía de Roses y navega libre por la Costa Brava norte. Calas, Cap de Creus y total libertad. Salida desde Santa Margarita.',
  alternates: {
    canonical:
      'https://experienceboat.es/alquiler-barco-con-licencia-roses/bahia-de-roses',
    languages: {
      'x-default': 'https://experienceboat.es/alquiler-barco-con-licencia-roses/bahia-de-roses',
      es: 'https://experienceboat.es/alquiler-barco-con-licencia-roses/bahia-de-roses',
      fr: 'https://experienceboat.es/fr/location-bateau-avec-permis-roses/baie-de-roses',
      en: 'https://experienceboat.es/en/boat-rental-with-licence-roses/roses-bay',
    },
  },
  openGraph: {
title: 'Barco con licencia en la bahía de Roses',
    description:
      'Alquila un barco con licencia en la bahía de Roses y navega libre por la Costa Brava norte. Calas, Cap de Creus y total libertad. Salida desde Santa Margarita.',
    url: 'https://experienceboat.es/alquiler-barco-con-licencia-roses/bahia-de-roses',
    siteName: 'Experience Boat',
    locale: 'es_ES',
    type: 'website',
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
        item: 'https://experienceboat.es',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Alquiler barco con licencia Roses',
        item: 'https://experienceboat.es/alquiler-barco-con-licencia-roses',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Bahía de Roses',
        item: 'https://experienceboat.es/alquiler-barco-con-licencia-roses/bahia-de-roses',
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
    mainEntity: faqsBahia.map((faq) => ({
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
    url: 'https://experienceboat.es',
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
      name: 'Alquiler de barco con licencia — Bahía de Roses',
      itemListElement: [
        {
          '@type': 'Offer',
          name: 'Alquiler de barco con licencia — Medio día',
          price: '200',
          priceCurrency: 'EUR',
          description:
            'Alquiler de barco con licencia en la bahía de Roses, 4 horas desde la Marina de Santa Margarita.',
        },
        {
          '@type': 'Offer',
          name: 'Alquiler de barco con licencia — Día completo',
          price: '350',
          priceCurrency: 'EUR',
          description:
            'Alquiler de barco con licencia en la bahía de Roses, 8 horas desde la Marina de Santa Margarita. Incluye acceso al Cap de Creus.',
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

export default function BahiaDeRosesPage() {
  return (
    <>
      {/* Schema Markup */}
      <BreadcrumbSchema />
      <FAQSchema />
      <LocalBusinessSchema />

      {/* Page content */}
      <main id="main-content">
        <HeroBahia lang="es" />
        <IntroBahia lang="es" />
        <BahiaUnicaSection lang="es" />
        <DestinosSection lang="es" />
        <VentajaTacticaSection lang="es" />
        <CondicionesSection lang="es" />
        <InfoPracticaSection lang="es" />
        <PreciosSection lang="es" />
        <FAQBahia lang="es" />
        <SiloNavBlock currentPath="/alquiler-barco-con-licencia-roses/bahia-de-roses/" />
      </main>

      {/* Sticky CTA */}
      <StickyCtaBahia lang="es" />
    </>
  );
}
