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
import StickyCtaBahia from '@/components/bahia-de-roses/StickyCtaBahia';
import { faqsBahiaFr as faqsBahiaFrFr } from '@/components/bahia-de-roses/faq-data';

export const dynamic = 'force-static';

/* ─── Metadata ────────────────────────────────────────────────────────────── */

export const metadata: Metadata = {
title: 'Location bateau avec permis, baie de Roses',
  description:
    'Louez un bateau avec permis dans la baie de Roses et naviguez librement sur la Costa Brava nord. Criques, Cap de Creus et totale liberté. Départ depuis Santa Margarita.',
  alternates: {
    canonical: 'https://experienceboat.es/fr/location-bateau-avec-permis-roses/baie-de-roses',
    languages: {
      'x-default': 'https://experienceboat.es/alquiler-barco-con-licencia-roses/bahia-de-roses',
      es: 'https://experienceboat.es/alquiler-barco-con-licencia-roses/bahia-de-roses',
      fr: 'https://experienceboat.es/fr/location-bateau-avec-permis-roses/baie-de-roses',
      en: 'https://experienceboat.es/en/boat-rental-with-licence-roses/roses-bay',
    },
  },
  openGraph: {
title: 'Location bateau avec permis, baie de Roses',
    description:
      'Louez un bateau avec permis dans la baie de Roses et naviguez librement sur la Costa Brava nord. Criques, Cap de Creus et totale liberté. Départ depuis Santa Margarita.',
    url: 'https://experienceboat.es/fr/location-bateau-avec-permis-roses/baie-de-roses',
    siteName: 'Experience Boat',
    locale: 'fr_FR',
    type: 'website',
  },
};

/* ─── BreadcrumbList Schema ───────────────────────────────────────────────── */

function BreadcrumbSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://experienceboat.es/fr' },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Location bateau avec permis Roses',
        item: 'https://experienceboat.es/fr/location-bateau-avec-permis-roses',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Baie de Roses',
        item: 'https://experienceboat.es/fr/location-bateau-avec-permis-roses/baie-de-roses',
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

/* ─── FAQPage Schema ──────────────────────────────────────────────────────── */

function FAQSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqsBahiaFrFr.map((faq) => ({
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

/* ─── LocalBusiness Schema ────────────────────────────────────────────────── */

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
    geo: { '@type': 'GeoCoordinates', latitude: 42.2695, longitude: 3.1782 },
    priceRange: '€€',
    openingHours: 'Mo-Su 08:00-20:00',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Location de bateau avec permis — Baie de Roses',
      itemListElement: [
        {
          '@type': 'Offer',
          name: 'Location de bateau avec permis — Demi-journée',
          price: '200',
          priceCurrency: 'EUR',
          description: 'Location de bateau avec permis dans la baie de Roses, 4 heures depuis la Marina de Santa Margarita.',
        },
        {
          '@type': 'Offer',
          name: 'Location de bateau avec permis — Journée complète',
          price: '350',
          priceCurrency: 'EUR',
          description: 'Location de bateau avec permis dans la baie de Roses, 8 heures depuis la Marina de Santa Margarita. Inclut l\'accès au Cap de Creus.',
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

export default function BaieDeRosesPage() {
  return (
    <>
      <BreadcrumbSchema />
      <FAQSchema />
      <LocalBusinessSchema />

      <main id="main-content">
        <HeroBahia lang="fr" />
        <IntroBahia lang="fr" />
        <BahiaUnicaSection lang="fr" />
        <DestinosSection lang="fr" />
        <VentajaTacticaSection lang="fr" />
        <CondicionesSection lang="fr" />
        <InfoPracticaSection lang="fr" />
        <PreciosSection lang="fr" />
        <FAQBahia lang="fr" />
      </main>

      <StickyCtaBahia lang="fr" />
    </>
  );
}
