import type { Metadata } from 'next';
import HeroSection from '@/components/sunset-experience/HeroSection';
import IntroSection from '@/components/sunset-experience/IntroSection';
import RouteSection from '@/components/sunset-experience/RouteSection';
import AudienceSection from '@/components/sunset-experience/AudienceSection';
import BestTimeSection from '@/components/sunset-experience/BestTimeSection';
import PracticalInfoSection from '@/components/sunset-experience/PracticalInfoSection';
import FAQSection from '@/components/sunset-experience/FAQSection';
import InternalLinksSection from '@/components/sunset-experience/InternalLinksSection';
import StickyCTA from '@/components/sunset-experience/StickyCTA';
import { faqData } from '@/components/sunset-experience/faq-data';

export const dynamic = 'force-static';

/* ─── Metadata & SEO ─────────────────────────────────────────────────────── */

export const metadata: Metadata = {
title: 'Sunset Experience en bateau à Roses',
  description:
    'Coucher de soleil en bateau à Roses. Naviguez les canaux de Santa Margarita et la baie au crépuscule. Réservez votre Sunset Experience.',
  alternates: {
    canonical: 'https://www.experienceboat.es/fr/experiences-bateau-roses/sunset-experience',
    languages: {
      'x-default': 'https://www.experienceboat.es/experiencias-barco-roses/sunset-experience',
      es: 'https://www.experienceboat.es/experiencias-barco-roses/sunset-experience',
      fr: 'https://www.experienceboat.es/fr/experiences-bateau-roses/sunset-experience',
      en: 'https://www.experienceboat.es/en/boat-experiences-roses/sunset-experience',
    },
  },
  openGraph: {
title: 'Sunset Experience en bateau à Roses',
    description:
      'Coucher de soleil en bateau à Roses. Naviguez les canaux de Santa Margarita et la baie au crépuscule. Réservez votre Sunset Experience.',
    url: 'https://www.experienceboat.es/fr/experiences-bateau-roses/sunset-experience',
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

/* ─── FAQ Schema Markup ───────────────────────────────────────────────────── */

function FAQSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqData.fr.map((faq) => ({
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

/* ─── TouristTrip Schema ─────────────────────────────────────────────────── */

function TouristTripSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'TouristTrip',
    '@id': 'https://www.experienceboat.es/fr/experiences-bateau-roses/sunset-experience',
    name: 'Sunset Experience en bateau à Roses',
    url: 'https://www.experienceboat.es/fr/experiences-bateau-roses/sunset-experience',
    description: "Sortie en bateau au coucher du soleil depuis Roses. 2 heures dans les canaux de Santa Margarita et la baie. L'expérience la plus romantique de la Costa Brava.",
    duration: 'PT2H',
    inLanguage: 'fr',
    provider: {
    '@type': 'LocalBusiness',
    '@id': 'https://www.experienceboat.es/#local-business',
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

/* ─── Breadcrumb Schema ───────────────────────────────────────────────────── */

function BreadcrumbSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Accueil',
        item: 'https://www.experienceboat.es/fr',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Expériences en bateau à Roses',
        item: 'https://www.experienceboat.es/fr/experiences-bateau-roses',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Sunset Experience',
        item: 'https://www.experienceboat.es/fr/experiences-bateau-roses/sunset-experience',
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

export default function SunsetExperienceFrPage() {
  return (
    <>
      <FAQSchema />
      <TouristTripSchema />
      <BreadcrumbSchema />

      <main id="main-content">
        <HeroSection lang="fr" />
        <IntroSection lang="fr" />
        <RouteSection lang="fr" />
        <AudienceSection lang="fr" />
        <BestTimeSection lang="fr" />
        <PracticalInfoSection lang="fr" />
        <FAQSection lang="fr" />
        <InternalLinksSection lang="fr" />
      </main>

      <StickyCTA lang="fr" />
    </>
  );
}
