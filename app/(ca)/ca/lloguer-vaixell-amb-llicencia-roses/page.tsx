import type { Metadata } from 'next';
import { buildAlternates } from '@/lib/i18n/routes';
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
import StickyMobileCTA from '@/components/pillar-licencia/StickyMobileCTA';
import SiloNavBlock from '@/components/SiloNavBlock';
import { faqData } from '@/components/pillar-licencia/faq-data';

export const dynamic = 'force-static';

/* ─── Metadata & SEO ─────────────────────────────────────────────────────── */

export const metadata: Metadata = {
  title: 'Lloguer de vaixell amb llicència a Roses',
  description:
    'Lloga un vaixell amb llicència a Roses (6–12 pax): Jeanneau, Zodiac o llaüt des de 195€ el mig dia. Patró opcional. Cap de Creus i Cadaqués. Reserva.',
  keywords: [
    'lloguer vaixell amb llicència Roses',
    'lloguer llanxa Costa Brava',
    'embarcacions amb llicència Roses',
    'navegar Costa Brava',
    'lloguer embarcacions Roses',
  ],
  alternates: buildAlternates('rentalWithLicence', 'ca'),
  openGraph: {
    title: 'Lloguer de vaixell amb llicència a Roses',
    description:
      'Lloga un vaixell amb llicència a Roses (6–12 pax): Jeanneau, Zodiac o llaüt des de 195€ el mig dia. Patró opcional. Cap de Creus i Cadaqués. Reserva.',
    url: 'https://www.experienceboat.es/ca/lloguer-vaixell-amb-llicencia-roses',
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
      name: 'Lloguer de vaixells amb llicència a Roses',
      itemListElement: [
        {
          '@type': 'Offer',
          name: 'Lloguer de vaixell amb llicència — Mitja jornada',
          price: 195,
          priceCurrency: 'EUR',
          description: 'Lloguer de vaixell amb llicència a Roses per 4 hores des de la Marina de Santa Margarida.',
        },
        {
          '@type': 'Offer',
          name: 'Lloguer de vaixell amb llicència — Jornada completa',
          price: 285,
          priceCurrency: 'EUR',
          description: 'Lloguer de vaixell amb llicència a Roses per 8 hores des de la Marina de Santa Margarida.',
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
        name: 'Inici',
        item: 'https://www.experienceboat.es/ca',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Lloguer de vaixell amb llicència a Roses',
        item: 'https://www.experienceboat.es/ca/lloguer-vaixell-amb-llicencia-roses',
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

export default function LloguerVaixellAmbLlicenciaRosesPage() {
  return (
    <>
      {/* Schema Markup */}
      <FAQSchema />
      <LocalBusinessSchema />
      <BreadcrumbSchema />

      {/* Page sections */}
      <main id="main-content">
        <HeroSection lang="ca" />
        <IntroSection lang="ca" />
        <BoatGrid lang="ca" />
        <DestinationsSection lang="ca" />
        <WhyUsSection lang="ca" />
        <PracticalInfoSection lang="ca" />
        <InternalLinksSection lang="ca" />
        <ReviewsSection lang="ca" />
        <ContactSection lang="ca" />
        <FAQSection lang="ca" />
        <SiloNavBlock silo="licencia" lang="ca" />
      </main>

      {/* Sticky CTA — mobile bar + desktop FAB */}
      <StickyMobileCTA lang="ca" />
    </>
  );
}
