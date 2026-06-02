import type { Metadata } from 'next';
import HeroSection from '@/components/pillar-experiencias/HeroSection';
import IntroSection from '@/components/pillar-experiencias/IntroSection';
import ExperiencesGrid from '@/components/pillar-experiencias/ExperiencesGrid';
import CommonSection from '@/components/pillar-experiencias/CommonSection';
import DestinationsSection from '@/components/pillar-experiencias/DestinationsSection';
import TargetAudienceSection from '@/components/pillar-experiencias/TargetAudienceSection';
import FAQSection from '@/components/pillar-experiencias/FAQSection';
import StickyMobileCTA from '@/components/pillar-experiencias/StickyMobileCTA';
import { faqData } from '@/components/pillar-experiencias/faq-data';

export const dynamic = 'force-static';

/* ─── Metadata & SEO ─────────────────────────────────────────────────────── */

export const metadata: Metadata = {
title: 'Boat Experiences in Roses — Cap de Creus & More',
  description:
    'Private boat excursions and sunset trips from Roses. The skipper takes you to Cap de Creus coves and Santa Margarita canals. Just your group on board.',
  alternates: {
    canonical: 'https://www.experienceboat.es/en/boat-experiences-roses',
    languages: {
      'x-default': 'https://www.experienceboat.es/experiencias-barco-roses',
      es: 'https://www.experienceboat.es/experiencias-barco-roses',
      fr: 'https://www.experienceboat.es/fr/experiences-bateau-roses',
      en: 'https://www.experienceboat.es/en/boat-experiences-roses',
    },
  },
  openGraph: {
title: 'Boat Experiences in Roses — Cap de Creus & More',
    description:
      'Private boat excursions and sunset trips from Roses. The skipper takes you to Cap de Creus coves and Santa Margarita canals. Just your group on board.',
    url: 'https://www.experienceboat.es/en/boat-experiences-roses',
    siteName: 'Experience Boat',
    locale: 'en_GB',
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
  const faqs = faqData.en;
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

/* ─── ItemList + TouristTrip Schema ──────────────────────────────────────── */

function ItemListSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Boat Experiences in Roses — Experience Boat',
    url: 'https://www.experienceboat.es/en/boat-experiences-roses',
    description: 'Private excursions, Sunset Experience and Canal Tour Santa Margarita. Boat trips from Roses, Costa Brava.',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        item: {
          '@type': 'TouristTrip',
          '@id': 'https://www.experienceboat.es/en/boat-experiences-roses/private-excursions',
          name: 'Private boat excursions in Roses with skipper',
          url: 'https://www.experienceboat.es/en/boat-experiences-roses/private-excursions',
          description: 'Private boat excursion to Cap de Creus, hidden coves and the Bay of Roses. Skipper included, route tailored to your group.',
          duration: 'PT4H',
          inLanguage: 'en',
          provider: {
    '@type': 'LocalBusiness',
    '@id': 'https://www.experienceboat.es/#local-business',
  },
          offers: {
            '@type': 'Offer',
            price: 300,
            priceCurrency: 'EUR',
            availability: 'https://schema.org/InStock',
            url: 'https://www.experienceboat.es/en/booking',
          },
        },
      },
      {
        '@type': 'ListItem',
        position: 2,
        item: {
          '@type': 'TouristTrip',
          '@id': 'https://www.experienceboat.es/en/boat-experiences-roses/sunset-experience',
          name: 'Sunset Experience by boat in Roses',
          url: 'https://www.experienceboat.es/en/boat-experiences-roses/sunset-experience',
          description: 'Sunset boat trip from Roses. 2 hours through Santa Margarita canals and the bay.',
          duration: 'PT2H',
          inLanguage: 'en',
          provider: {
    '@type': 'LocalBusiness',
    '@id': 'https://www.experienceboat.es/#local-business',
  },
          offers: {
            '@type': 'Offer',
            price: 225,
            priceCurrency: 'EUR',
            availability: 'https://schema.org/InStock',
            url: 'https://www.experienceboat.es/en/booking',
          },
        },
      },
      {
        '@type': 'ListItem',
        position: 3,
        item: {
          '@type': 'TouristTrip',
          '@id': 'https://www.experienceboat.es/en/boat-experiences-roses/canal-tour-santa-margarita',
          name: 'Canal Tour Santa Margarita — licence-free boat trip',
          url: 'https://www.experienceboat.es/en/boat-experiences-roses/canal-tour-santa-margarita',
          description: '90-minute licence-free boat trip through the Santa Margarita canals in Roses.',
          duration: 'PT1H30M',
          inLanguage: 'en',
          provider: {
    '@type': 'LocalBusiness',
    '@id': 'https://www.experienceboat.es/#local-business',
  },
          offers: {
            '@type': 'Offer',
            priceCurrency: 'EUR',
            availability: 'https://schema.org/InStock',
            url: 'https://www.experienceboat.es/en/booking',
          },
        },
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

/* ─── Breadcrumb Schema ───────────────────────────────────────────────────── */

function BreadcrumbSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://www.experienceboat.es/en',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Boat Experiences in Roses',
        item: 'https://www.experienceboat.es/en/boat-experiences-roses',
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

export default function BoatExperiencesRosesPage() {
  return (
    <>
      <FAQSchema />
      <ItemListSchema />
      <BreadcrumbSchema />

      <main id="main-content">
        <HeroSection lang="en" />
        <IntroSection lang="en" />
        <ExperiencesGrid lang="en" />
        <CommonSection />
        <DestinationsSection />
        <TargetAudienceSection />
        <FAQSection lang="en" />
      </main>

      <StickyMobileCTA />
    </>
  );
}
