import type { Metadata } from 'next';
import HeroSection from '@/components/pillar-canales/HeroSection';
import IntroSection from '@/components/pillar-canales/IntroSection';
import RouteSection from '@/components/pillar-canales/RouteSection';
import DifferentiatorSection from '@/components/pillar-canales/DifferentiatorSection';
import OptionsSection from '@/components/pillar-canales/OptionsSection';
import BestTimeSection from '@/components/pillar-canales/BestTimeSection';
import ContactSection from '@/components/pillar-canales/ContactSection';
import FAQSection from '@/components/pillar-canales/FAQSection';
import StickyMobileCTA from '@/components/pillar-canales/StickyMobileCTA';
import ProductBoxSection from '@/components/canal-tour/ProductBoxSection';
import { faqData } from '@/components/pillar-canales/faq-data';

export const dynamic = 'force-static';

/* ─── Metadata & SEO ─────────────────────────────────────────────────────── */

export const metadata: Metadata = {
title: 'Canaux de Santa Margarita en bateau — Roses',
  description:
    'Explorez les canaux de Santa Margarita depuis l\'eau. Maisons face à la mer et la Costa Brava la plus authentique. Sorties privées depuis Roses.',
  alternates: {
    canonical: 'https://www.experienceboat.es/fr/canaux-santa-margarita',
    languages: {
      'x-default': 'https://www.experienceboat.es/canales-santa-margarita',
      es: 'https://www.experienceboat.es/canales-santa-margarita',
      fr: 'https://www.experienceboat.es/fr/canaux-santa-margarita',
      en: 'https://www.experienceboat.es/en/santa-margarita-canals-roses',
    },
  },
  openGraph: {
title: 'Canaux de Santa Margarita en bateau — Roses',
    description:
      'Explorez les canaux de Santa Margarita depuis l\'eau. Maisons face à la mer et la Costa Brava la plus authentique. Sorties privées depuis Roses.',
    url: 'https://www.experienceboat.es/fr/canaux-santa-margarita',
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

/* ─── FAQ Schema ──────────────────────────────────────────────────────────── */

function FAQSchema() {
  const faqs = faqData.fr;
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

/* ─── LocalBusiness Schema ────────────────────────────────────────────────── */

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
        name: 'Accueil',
        item: 'https://www.experienceboat.es/fr',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Canaux de Santa Margarita',
        item: 'https://www.experienceboat.es/fr/canaux-santa-margarita',
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

export default function CanauxSantaMargaritaPage() {
  return (
    <>
      <FAQSchema />
      <LocalBusinessSchema />
      <BreadcrumbSchema />

      <main id="main-content">
        <HeroSection lang="fr" />
        <IntroSection lang="fr" />
        <RouteSection lang="fr" />
        <DifferentiatorSection lang="fr" />
        <OptionsSection lang="fr" />
        <BestTimeSection lang="fr" />
        <ProductBoxSection lang="fr" />
        <ContactSection lang="fr" />
        <FAQSection lang="fr" />
      </main>

      <StickyMobileCTA lang="fr" />
    </>
  );
}
