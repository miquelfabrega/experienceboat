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
    'Voir le coucher de soleil depuis un bateau à Roses est une expérience inoubliable. Canaux de Santa Margarita, baie de Roses et le plus beau moment de la journée. Réservez maintenant.',
  alternates: {
    canonical: 'https://experienceboat.es/fr/experiences-bateau-roses/sunset-experience',
    languages: {
      'x-default': 'https://experienceboat.es/experiencias-barco-roses/sunset-experience',
      es: 'https://experienceboat.es/experiencias-barco-roses/sunset-experience',
      fr: 'https://experienceboat.es/fr/experiences-bateau-roses/sunset-experience',
      en: 'https://experienceboat.es/en/boat-experiences-roses/sunset-experience',
    },
  },
  openGraph: {
title: 'Sunset Experience en bateau à Roses',
    description:
      'Voir le coucher de soleil depuis un bateau à Roses est une expérience inoubliable. Canaux de Santa Margarita, baie de Roses et le plus beau moment de la journée. Réservez maintenant.',
    url: 'https://experienceboat.es/fr/experiences-bateau-roses/sunset-experience',
    siteName: 'Experience Boat',
    locale: 'fr_FR',
    type: 'website',
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
    '@id': 'https://experienceboat.es/fr/experiences-bateau-roses/sunset-experience',
    name: 'Sunset Experience en bateau à Roses',
    url: 'https://experienceboat.es/fr/experiences-bateau-roses/sunset-experience',
    description: "Sortie en bateau au coucher du soleil depuis Roses. 2 heures dans les canaux de Santa Margarita et la baie. L'expérience la plus romantique de la Costa Brava.",
    duration: 'PT2H',
    inLanguage: 'fr',
    provider: {
    '@type': 'LocalBusiness',
    '@id': 'https://experienceboat.es/#local-business',
    'name': 'Experience Boat',
    'telephone': '+34623995700',
    'url': 'https://experienceboat.es',
    'address': {
      '@type': 'PostalAddress',
      'streetAddress': 'Av. Clot Franquest Nord',
      'addressLocality': 'Roses',
      'postalCode': '17480',
      'addressRegion': 'Girona',
      'addressCountry': 'ES',
    },
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
      url: 'https://experienceboat.es/reservas',
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
        item: 'https://experienceboat.es/fr',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Expériences en bateau à Roses',
        item: 'https://experienceboat.es/fr/experiences-bateau-roses',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Sunset Experience',
        item: 'https://experienceboat.es/fr/experiences-bateau-roses/sunset-experience',
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
