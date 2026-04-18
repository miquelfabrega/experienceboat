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
import SiloNavBlock from '@/components/SiloNavBlock';
import StickyCtaLancha from '@/components/lancha/StickyCtaLancha';
import { faqsLancha } from '@/components/lancha/faq-data';

export const dynamic = 'force-static';

/* ─── Metadata ────────────────────────────────────────────────────────────── */

export const metadata: Metadata = {
title: 'Alquiler de lancha en la Costa Brava — Roses',
  description:
    'Alquila una lancha en la Costa Brava desde Santa Margarita, Roses. Con licencia o patrón. Acceso directo al Cap de Creus y bahía.',
  alternates: {
    canonical:
      'https://www.experienceboat.es/alquiler-barco-con-licencia-roses/lancha-costa-brava',
    languages: {
      'x-default': 'https://www.experienceboat.es/alquiler-barco-con-licencia-roses/lancha-costa-brava',
      es: 'https://www.experienceboat.es/alquiler-barco-con-licencia-roses/lancha-costa-brava',
      fr: 'https://www.experienceboat.es/fr/location-bateau-avec-permis-roses/vedette-cote-sauvage',
      en: 'https://www.experienceboat.es/en/boat-rental-with-licence-roses/motorboat-costa-brava',
    },
  },
  openGraph: {
title: 'Alquiler de lancha en la Costa Brava — Roses',
    description:
      'Alquila una lancha en la Costa Brava desde Santa Margarita, Roses. Con licencia o patrón. Acceso directo al Cap de Creus y bahía.',
    url: 'https://www.experienceboat.es/alquiler-barco-con-licencia-roses/lancha-costa-brava',
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
        name: 'Alquiler barco con licencia Roses',
        item: 'https://www.experienceboat.es/alquiler-barco-con-licencia-roses',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Alquiler de lancha en la Costa Brava',
        item: 'https://www.experienceboat.es/alquiler-barco-con-licencia-roses/lancha-costa-brava',
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
    mainEntity: faqsLancha.map((faq) => ({
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

/* ─── Schema: Product ─────────────────────────────────────────────────────── */

function ProductSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'Alquiler de lancha en la Costa Brava — Roses',
    description:
      'Alquiler de lancha desde los canales de Santa Margarita en Roses, Costa Brava norte. Con licencia o con patrón incluido.',
    brand: {
      '@type': 'Brand',
      name: 'Experience Boat',
    },
    offers: [
      {
        '@type': 'AggregateOffer',
        name: 'Lancha con licencia (sin patrón)',
        lowPrice: '200',
        highPrice: '350',
        priceCurrency: 'EUR',
        offerCount: 2,
        description: 'Alquiler de lancha con licencia en la Costa Brava, medio día o día completo desde Santa Margarita, Roses.',
      },
      {
        '@type': 'AggregateOffer',
        name: 'Lancha con patrón — Neumática',
        lowPrice: '300',
        highPrice: '600',
        priceCurrency: 'EUR',
        offerCount: 2,
        description: 'Excursión privada en neumática con patrón incluido desde Santa Margarita, Roses. Sin titulación necesaria.',
      },
      {
        '@type': 'AggregateOffer',
        name: 'Lancha con patrón — Embarcación Premium',
        lowPrice: '600',
        highPrice: '1200',
        priceCurrency: 'EUR',
        offerCount: 2,
        description: 'Excursión privada en lancha premium con patrón incluido desde Santa Margarita, Roses. Sin titulación necesaria.',
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
      streetAddress: 'Av. Clot Franquest Nord',
      addressLocality: 'Roses',
      postalCode: '17480',
      addressRegion: 'Girona',
      addressCountry: 'ES',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 42.2558,
      longitude: 3.1734,
    },
    priceRange: '€€',
    openingHours: 'Mo-Su 08:00-20:00',
    areaServed: {
      '@type': 'GeoCircle',
      geoMidpoint: {
        '@type': 'GeoCoordinates',
        latitude: 42.2558,
        longitude: 3.1734,
      },
      geoRadius: '30000',
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

export default function LanchaCostaBravaPage() {
  const lang = 'es' as const;

  return (
    <>
      {/* Schema Markup */}
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
        <SiloNavBlock currentPath="/alquiler-barco-con-licencia-roses/lancha-costa-brava" />
      </main>

      <StickyCtaLancha lang={lang} />
    </>
  );
}
