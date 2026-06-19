import type { Metadata } from 'next';
import { buildAlternates } from '@/lib/i18n/routes';
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
  title: 'Sunset Experience en vaixell a Roses',
  description:
    'Viure el capvespre des d’un vaixell a Roses és una experiència que no s’oblida. Canals de Santa Margarida i badia de Roses al millor moment del dia.',
  keywords: [
    'excursió capvespre vaixell Costa Brava',
    'capvespre en vaixell Roses',
    'passeig en vaixell Roses',
  ],
  alternates: buildAlternates('expSunset', 'ca'),
  openGraph: {
    title: 'Sunset Experience en vaixell a Roses',
    description:
      'Viure el capvespre des d’un vaixell a Roses és una experiència que no s’oblida. Canals de Santa Margarida i badia de Roses al millor moment del dia.',
    url: 'https://www.experienceboat.es/ca/experiencies-vaixell-roses/sunset-experience',
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

/* ─── TouristTrip Schema ─────────────────────────────────────────────────── */

function TouristTripSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'TouristTrip',
    '@id': 'https://www.experienceboat.es/ca/experiencies-vaixell-roses/sunset-experience',
    name: 'Sunset Experience en vaixell a Roses',
    url: 'https://www.experienceboat.es/ca/experiencies-vaixell-roses/sunset-experience',
    description:
      'Sortida en vaixell al capvespre des de Roses. 2 hores pels canals de Santa Margarida i la badia. L’experiència més romàntica de la Costa Brava.',
    duration: 'PT2H',
    inLanguage: 'ca',
    provider: {
      '@type': 'LocalBusiness',
      '@id': 'https://www.experienceboat.es/#local-business',
    },
    availableLanguage: [
      { '@type': 'Language', name: 'Spanish' },
      { '@type': 'Language', name: 'French' },
      { '@type': 'Language', name: 'English' },
      { '@type': 'Language', name: 'Catalan' },
    ],
    offers: {
      '@type': 'Offer',
      price: 225,
      priceCurrency: 'EUR',
      availability: 'https://schema.org/InStock',
      validFrom: '2026-04-01',
      validThrough: '2026-10-31',
      url: 'https://www.experienceboat.es/reservas',
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
        name: 'Inici',
        item: 'https://www.experienceboat.es/ca',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Experiències en vaixell a Roses',
        item: 'https://www.experienceboat.es/ca/experiencies-vaixell-roses',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Sunset Experience en vaixell a Roses',
        item: 'https://www.experienceboat.es/ca/experiencies-vaixell-roses/sunset-experience',
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
        <HeroSection lang="ca" />
        <IntroSection lang="ca" />
        <RouteSection lang="ca" />
        <AudienceSection lang="ca" />
        <BestTimeSection lang="ca" />
        <PracticalInfoSection lang="ca" />
        <ReviewsSection />
        <FAQSection lang="ca" />
        <InternalLinksSection lang="ca" />
        <SiloNavBlock lang="ca" />
      </main>

      {/* Sticky CTA for Mobile */}
      <StickyCTA lang="ca" />
    </>
  );
}
