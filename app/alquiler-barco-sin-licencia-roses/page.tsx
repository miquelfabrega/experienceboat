import type { Metadata } from 'next';
import HeroSection from '@/components/pillar-sin-licencia/HeroSection';
import IntroSection from '@/components/pillar-sin-licencia/IntroSection';
import BoatGrid from '@/components/pillar-sin-licencia/BoatGrid';
import DestinationsSection from '@/components/pillar-sin-licencia/DestinationsSection';
import WhyUsSection from '@/components/pillar-sin-licencia/WhyUsSection';
import PracticalInfoSection from '@/components/pillar-sin-licencia/PracticalInfoSection';
import InternalLinksSection from '@/components/pillar-sin-licencia/InternalLinksSection';
import ReviewsSection from '@/components/pillar-sin-licencia/ReviewsSection';
import ContactSection from '@/components/pillar-sin-licencia/ContactSection';
import FAQSection from '@/components/pillar-sin-licencia/FAQSection';
import { faqs } from '@/components/pillar-sin-licencia/faq-data';
import StickyMobileCTA from '@/components/pillar-sin-licencia/StickyMobileCTA';
import SiloNavBlock from '@/components/SiloNavBlock';

export const dynamic = 'force-static';

/* ─── Metadata & SEO ─────────────────────────────────────────────────────── */

export const metadata: Metadata = {
title: 'Alquiler de barco sin licencia en Roses',
  description:
    'Alquila un barco sin licencia en Roses y navega por la bahía, los canales de Santa Margarita y el Cap de Creus. Sin experiencia previa. Todo privado. Reserva ya.',
  alternates: {
    canonical: 'https://experienceboat.es/alquiler-barco-sin-licencia-roses',
    languages: {
      'x-default': 'https://experienceboat.es/alquiler-barco-sin-licencia-roses',
      es: 'https://experienceboat.es/alquiler-barco-sin-licencia-roses',
      fr: 'https://experienceboat.es/fr/location-bateau-sans-permis-roses',
      en: 'https://experienceboat.es/en/boat-rental-without-licence-roses',
    },
  },
  openGraph: {
title: 'Alquiler de barco sin licencia en Roses',
    description:
      'Alquila un barco sin licencia en Roses y navega por la bahía, los canales de Santa Margarita y el Cap de Creus. Sin experiencia previa. Todo privado. Reserva ya.',
    url: 'https://experienceboat.es/alquiler-barco-sin-licencia-roses',
    siteName: 'Experience Boat',
    locale: 'es_ES',
    type: 'website',
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
    url: 'https://experienceboat.es',
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
      name: 'Alquiler de barcos sin licencia en Roses',
      itemListElement: [
        {
          '@type': 'Offer',
          name: 'Alquiler de barco sin licencia — Medio día',
          price: '200',
          priceCurrency: 'EUR',
          description: 'Alquiler de barco sin licencia en Roses para 4 horas desde la Marina de Santa Margarita.',
        },
        {
          '@type': 'Offer',
          name: 'Alquiler de barco sin licencia — Día completo',
          price: '350',
          priceCurrency: 'EUR',
          description: 'Alquiler de barco sin licencia en Roses para 8 horas desde la Marina de Santa Margarita.',
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
        item: 'https://experienceboat.es',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Alquiler de barco sin licencia en Roses',
        item: 'https://experienceboat.es/alquiler-barco-sin-licencia-roses',
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

export default function AlquilerBarcoSinLicenciaRosesPage() {
  return (
    <>
      {/* Schema Markup */}
      <FAQSchema />
      <LocalBusinessSchema />
      <BreadcrumbSchema />

      {/* Page sections */}
      <main id="main-content">
        <HeroSection />
        <IntroSection />
        <BoatGrid />
        <DestinationsSection />
        <WhyUsSection />
        <PracticalInfoSection />
        <InternalLinksSection />
        <ReviewsSection />
        <ContactSection />
        <FAQSection />
        <SiloNavBlock silo="sin-licencia" />
      </main>

      {/* Sticky CTA — mobile bar + desktop FAB */}
      <StickyMobileCTA />
    </>
  );
}
