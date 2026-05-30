import type { Metadata } from 'next';
import HeroLancha from '@/components/lancha/HeroLancha';
import IntroLancha from '@/components/lancha/IntroLancha';
import ProfileSelectorCards from '@/components/lancha/ProfileSelectorCards';
import TipoLanchaSection from '@/components/lancha/TipoLanchaSection';
import PorQueRosesSection from '@/components/lancha/PorQueRosesSection';
import RouteTimeline from '@/components/lancha/RouteTimeline';
import InfoPracticaSection from '@/components/lancha/InfoPracticaSection';
import PricingTable from '@/components/lancha/PricingTable';
import FAQAccordion from '@/components/lancha/FAQAccordion';
import CtaFinSection from '@/components/lancha/CtaFinSection';
import StickyCtaLancha from '@/components/lancha/StickyCtaLancha';
import { faqsLanchaFr } from '@/components/lancha/faq-data';

export const dynamic = 'force-static';

/* ─── Metadata ────────────────────────────────────────────────────────── */

export const metadata: Metadata = {
title: 'Location de vedette sur la Côte Sauvage — Roses',
  description:
    'Louez une vedette à Roses depuis les canaux de Santa Margarita. Avec permis ou capitaine. Accès direct au Cap de Creus et baie de Roses.',
  alternates: {
    canonical: 'https://www.experienceboat.es/fr/location-bateau-avec-permis-roses/vedette-cote-sauvage',
    languages: {
      'x-default': 'https://www.experienceboat.es/alquiler-barco-con-licencia-roses/lancha-costa-brava',
      es: 'https://www.experienceboat.es/alquiler-barco-con-licencia-roses/lancha-costa-brava',
      fr: 'https://www.experienceboat.es/fr/location-bateau-avec-permis-roses/vedette-cote-sauvage',
      en: 'https://www.experienceboat.es/en/boat-rental-with-licence-roses/motorboat-costa-brava',
    },
  },
  openGraph: {
title: 'Location de vedette sur la Côte Sauvage — Roses',
    description:
      'Louez une vedette à Roses depuis les canaux de Santa Margarita. Avec permis ou capitaine. Accès direct au Cap de Creus et baie de Roses.',
    url: 'https://www.experienceboat.es/fr/location-bateau-avec-permis-roses/vedette-cote-sauvage',
    siteName: 'Experience Boat',
    locale: 'fr_FR',
    type: 'website',
    images: ['/images/hero/hero-1.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/images/hero/hero-1.jpg'],
  },
};

/* ─── BreadcrumbList Schema ───────────────────────────────────────────── */

function BreadcrumbSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://www.experienceboat.es/fr' },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Location bateau avec permis Roses',
        item: 'https://www.experienceboat.es/fr/location-bateau-avec-permis-roses',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Vedette Côte Sauvage',
        item: 'https://www.experienceboat.es/fr/location-bateau-avec-permis-roses/vedette-cote-sauvage',
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

/* ─── FAQPage Schema ──────────────────────────────────────────────────── */

function FAQSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqsLanchaFr.map((faq) => ({
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

/* ─── Product Schema ──────────────────────────────────────────────────── */

function ProductSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Boat rental',
    name: 'Location de vedette sur la Côte Sauvage — Roses',
    description:
      'Location de vedette depuis les canaux de Santa Margarita à Roses, Costa Brava nord. Avec permis ou avec capitaine inclus.',
    provider: {
      '@type': 'LocalBusiness',
      '@id': 'https://www.experienceboat.es/#local-business',
      name: 'Experience Boat',
    },
    areaServed: {
      '@type': 'Place',
      name: 'Roses, Costa Brava',
    },
    offers: [
      {
        '@type': 'AggregateOffer',
        name: 'Vedette avec permis (sans capitaine)',
        lowPrice: 200,
        highPrice: 350,
        priceCurrency: 'EUR',
        offerCount: 2,
        description: 'Location de vedette avec permis sur la Costa Brava, demi-journée ou journée complète depuis Santa Margarita, Roses.',
      },
      {
        '@type': 'AggregateOffer',
        name: 'Vedette avec capitaine — Semi-rigide',
        lowPrice: 300,
        highPrice: 600,
        priceCurrency: 'EUR',
        offerCount: 2,
        description: 'Excursion privée en semi-rigide avec capitaine inclus depuis Santa Margarita, Roses. Sans permis nécessaire.',
      },
      {
        '@type': 'AggregateOffer',
        name: 'Vedette avec capitaine — Embarcation Premium',
        lowPrice: 600,
        highPrice: 1200,
        priceCurrency: 'EUR',
        offerCount: 2,
        description: 'Excursion privée en vedette premium avec capitaine inclus depuis Santa Margarita, Roses. Sans permis nécessaire.',
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

/* ─── LocalBusiness Schema ────────────────────────────────────────────── */

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
      streetAddress: 'Av. Clot Franquest Nord',
      addressLocality: 'Roses',
      postalCode: '17480',
      addressRegion: 'Girona',
      addressCountry: 'ES',
    },
    geo: { '@type': 'GeoCoordinates', latitude: 42.2558, longitude: 3.1734 },
    priceRange: '€€',
    openingHours: 'Mo-Su 08:00-20:00',
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

/* ─── Page ────────────────────────────────────────────────────────────── */

export default function VedetteCoteSauvagePage() {
  const lang = 'fr' as const;

  return (
    <>
      <BreadcrumbSchema />
      <FAQSchema />
      <ProductSchema />
      <LocalBusinessSchema />

      <main id="main-content">
        <HeroLancha lang={lang} />
        <IntroLancha lang={lang} />
        <ProfileSelectorCards lang={lang} />
        <TipoLanchaSection lang={lang} />
        <PorQueRosesSection lang={lang} />
        <RouteTimeline lang={lang} />
        <InfoPracticaSection lang={lang} />
        <PricingTable lang={lang} />
        <FAQAccordion lang={lang} />
        <CtaFinSection lang={lang} />
      </main>

      <StickyCtaLancha lang={lang} />
    </>
  );
}
