import type { Metadata } from 'next';
import HeroSection from '@/components/pillar-licencia/HeroSection';
import IntroSection from '@/components/pillar-licencia/IntroSection';
import BoatGrid from '@/components/pillar-licencia/BoatGrid';
import DestinationsSection from '@/components/pillar-licencia/DestinationsSection';
import WhyUsSection from '@/components/pillar-licencia/WhyUsSection';
import PracticalInfoSection from '@/components/pillar-licencia/PracticalInfoSection';
import InternalLinksSection from '@/components/pillar-licencia/InternalLinksSection';
import ReviewsSection from '@/components/pillar-licencia/ReviewsSection';
import ContactSection from '@/components/pillar-licencia/ContactSection';
import FAQSection from '@/components/pillar-licencia/FAQSection';

import { faqs } from '@/components/pillar-licencia/faq-data';
import StickyMobileCTA from '@/components/pillar-licencia/StickyMobileCTA';
import SiloNavBlock from '@/components/SiloNavBlock';

export const dynamic = 'force-static';

/* ─── Metadata & SEO ─────────────────────────────────────────────────────── */

export const metadata: Metadata = {
title: 'Alquiler de barco con licencia en Roses',
  description:
    'Alquila un barco con licencia en Roses y navega libre por la bahía, el Cap de Creus y las mejores calas de la Costa Brava. Embarcaciones potentes. Reserva ya.',
  alternates: {
    canonical: 'https://www.experienceboat.es/alquiler-barco-con-licencia-roses',
    languages: {
      'x-default': 'https://www.experienceboat.es/alquiler-barco-con-licencia-roses',
      es: 'https://www.experienceboat.es/alquiler-barco-con-licencia-roses',
      fr: 'https://www.experienceboat.es/fr/location-bateau-avec-permis-roses',
      en: 'https://www.experienceboat.es/en/boat-rental-with-licence-roses',
    },
  },
  openGraph: {
title: 'Alquiler de barco con licencia en Roses',
    description:
      'Alquila un barco con licencia en Roses y navega libre por la bahía, el Cap de Creus y las mejores calas de la Costa Brava. Embarcaciones potentes. Reserva ya.',
    url: 'https://www.experienceboat.es/alquiler-barco-con-licencia-roses',
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

/* ─── Local Business Schema ───────────────────────────────────────────────── */

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
      latitude: 42.268,
      longitude: 3.168,
    },
    priceRange: '€€',
    openingHours: 'Mo-Su 08:00-20:00',
    sameAs: [
      'https://www.instagram.com/experienceboat_roses',
      'https://www.tripadvisor.com/Attraction_Review-g10060936-d27527826-Reviews-Experience_Boat-Roses_Province_of_Girona_Catalonia.html',
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Alquiler de barcos con licencia en Roses',
      itemListElement: [
        {
          '@type': 'Offer',
          name: 'Alquiler de barco con licencia — Medio día',
          price: 195,
          priceCurrency: 'EUR',
          description: 'Alquiler de barco con licencia en Roses para 4 horas desde la Marina de Santa Margarita.',
        },
        {
          '@type': 'Offer',
          name: 'Alquiler de barco con licencia — Día completo',
          price: 285,
          priceCurrency: 'EUR',
          description: 'Alquiler de barco con licencia en Roses para 8 horas desde la Marina de Santa Margarita.',
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
        name: 'Alquiler de barco con licencia en Roses',
        item: 'https://www.experienceboat.es/alquiler-barco-con-licencia-roses',
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

export default function AlquilerBarcoConLicenciaRosesPage() {
  return (
    <>
      {/* Schema Markup */}
      <FAQSchema />
      <LocalBusinessSchema />
      <BreadcrumbSchema />

      {/* Page sections */}
      <main id="main-content">
        <HeroSection lang="es" />
        <IntroSection lang="es" />
        <BoatGrid lang="es" />
        <DestinationsSection />
        <WhyUsSection />
        <PracticalInfoSection />
        <InternalLinksSection />
        <ReviewsSection />
        <ContactSection />
        <FAQSection lang="es" />
        <SiloNavBlock />
      </main>

      {/* Sticky CTA — mobile bar + desktop FAB */}
      <StickyMobileCTA lang="es" />
    </>
  );
}
