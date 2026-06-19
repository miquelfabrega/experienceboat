import type { Metadata } from 'next';
import { buildAlternates } from '@/lib/i18n/routes';
import HeroSection from '@/components/pillar-experiencias/HeroSection';
import IntroSection from '@/components/pillar-experiencias/IntroSection';
import ExperiencesGrid from '@/components/pillar-experiencias/ExperiencesGrid';
import CommonSection from '@/components/pillar-experiencias/CommonSection';
import DestinationsSection from '@/components/pillar-experiencias/DestinationsSection';
import TargetAudienceSection from '@/components/pillar-experiencias/TargetAudienceSection';
import RentAlternativeSection from '@/components/pillar-experiencias/RentAlternativeSection';
import ReviewsSection from '@/components/pillar-experiencias/ReviewsSection';
import ContactSection from '@/components/pillar-experiencias/ContactSection';
import FAQSection from '@/components/pillar-experiencias/FAQSection';
import { faqData } from '@/components/pillar-experiencias/faq-data';
import StickyMobileCTA from '@/components/pillar-experiencias/StickyMobileCTA';
import SiloNavBlock from '@/components/SiloNavBlock';

export const dynamic = 'force-static';

/* ─── Metadata & SEO ─────────────────────────────────────────────────────── */

export const metadata: Metadata = {
  title: 'Experiències en vaixell a Roses — Cap de Creus',
  description:
    'Excursions privades i capvespres en vaixell des de Roses. Us portem a les cales del Cap de Creus i als canals de Santa Margarida.',
  keywords: [
    'passeig en vaixell Roses',
    'excursió Cap de Creus en vaixell',
    'experiències en vaixell Costa Brava',
  ],
  alternates: buildAlternates('experiences', 'ca'),
  openGraph: {
    title: 'Experiències en vaixell a Roses — Cap de Creus',
    description:
      'Excursions privades i capvespres en vaixell des de Roses. Us portem a les cales del Cap de Creus i als canals de Santa Margarida.',
    url: 'https://www.experienceboat.es/ca/experiencies-vaixell-roses',
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

/* ─── ItemList + TouristTrip Schema ──────────────────────────────────────── */

function ItemListSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Experiències en vaixell a Roses — Experience Boat',
    url: 'https://www.experienceboat.es/ca/experiencies-vaixell-roses',
    description:
      'Excursions privades, Sunset Experience, Canal Tour Santa Margarida, excursió al Cap de Creus, Cadaqués i Coves i Esnòrquel. Sortides en vaixell des de Roses, Costa Brava.',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        item: {
          '@type': 'TouristTrip',
          '@id': 'https://www.experienceboat.es/ca/experiencies-vaixell-roses/excursions-privades',
          name: 'Excursions privades en vaixell a Roses amb patró',
          url: 'https://www.experienceboat.es/ca/experiencies-vaixell-roses/excursions-privades',
          description:
            'Excursió privada en vaixell pel Cap de Creus, cales i badia de Roses. Patró inclòs, ruta adaptada al grup.',
          duration: 'PT4H',
          inLanguage: 'ca',
          provider: {
            '@type': 'LocalBusiness',
            '@id': 'https://www.experienceboat.es/#local-business',
          },
          offers: {
            '@type': 'Offer',
            price: 300,
            priceCurrency: 'EUR',
            availability: 'https://schema.org/InStock',
            url: 'https://www.experienceboat.es/reservas',
          },
        },
      },
      {
        '@type': 'ListItem',
        position: 2,
        item: {
          '@type': 'TouristTrip',
          '@id': 'https://www.experienceboat.es/ca/experiencies-vaixell-roses/sunset-experience',
          name: 'Sunset Experience en vaixell a Roses',
          url: 'https://www.experienceboat.es/ca/experiencies-vaixell-roses/sunset-experience',
          description:
            'Sortida en vaixell al capvespre des de Roses. 2 hores pels canals de Santa Margarida i la badia.',
          duration: 'PT2H',
          inLanguage: 'ca',
          provider: {
            '@type': 'LocalBusiness',
            '@id': 'https://www.experienceboat.es/#local-business',
          },
          offers: {
            '@type': 'Offer',
            price: 225,
            priceCurrency: 'EUR',
            availability: 'https://schema.org/InStock',
            url: 'https://www.experienceboat.es/reservas',
          },
        },
      },
      {
        '@type': 'ListItem',
        position: 3,
        item: {
          '@type': 'TouristTrip',
          '@id': 'https://www.experienceboat.es/ca/experiencies-vaixell-roses/canal-tour-santa-margarida',
          name: 'Canal Tour Santa Margarida en vaixell sense llicència',
          url: 'https://www.experienceboat.es/ca/experiencies-vaixell-roses/canal-tour-santa-margarida',
          description:
            'Passeig de 90 minuts en vaixell sense llicència pels canals de Santa Margarida a Roses.',
          duration: 'PT1H30M',
          inLanguage: 'ca',
          provider: {
            '@type': 'LocalBusiness',
            '@id': 'https://www.experienceboat.es/#local-business',
          },
          offers: {
            '@type': 'Offer',
            priceCurrency: 'EUR',
            availability: 'https://schema.org/InStock',
            url: 'https://www.experienceboat.es/reservas',
          },
        },
      },
      {
        '@type': 'ListItem',
        position: 4,
        item: {
          '@type': 'TouristTrip',
          '@id': 'https://www.experienceboat.es/ca/experiencies-vaixell-roses/cap-de-creus-cales',
          name: 'Excursió al Cap de Creus en vaixell — Bany a 3 cales',
          url: 'https://www.experienceboat.es/ca/experiencies-vaixell-roses/cap-de-creus-cales',
          description:
            'Excursió guiada de 3 a 5 hores al Cap de Creus des de Roses amb bany a 3 cales verges de la Costa Brava.',
          duration: 'PT4H',
          inLanguage: 'ca',
          provider: {
            '@type': 'LocalBusiness',
            '@id': 'https://www.experienceboat.es/#local-business',
          },
          offers: {
            '@type': 'AggregateOffer',
            lowPrice: 65,
            highPrice: 80,
            priceCurrency: 'EUR',
            availability: 'https://schema.org/InStock',
            url: 'https://www.experienceboat.es/ca/experiencies-vaixell-roses/cap-de-creus-cales',
          },
        },
      },
      {
        '@type': 'ListItem',
        position: 5,
        item: {
          '@type': 'TouristTrip',
          '@id': 'https://www.experienceboat.es/ca/experiencies-vaixell-roses/cadaques',
          name: 'Excursió a Cadaqués en vaixell des de Roses',
          url: 'https://www.experienceboat.es/ca/experiencies-vaixell-roses/cadaques',
          description:
            'Excursió en vaixell a Cadaqués amb visita guiada al poble de Dalí i temps lliure.',
          inLanguage: 'ca',
          provider: {
            '@type': 'LocalBusiness',
            '@id': 'https://www.experienceboat.es/#local-business',
          },
          offers: {
            '@type': 'AggregateOffer',
            lowPrice: 75,
            highPrice: 95,
            priceCurrency: 'EUR',
            availability: 'https://schema.org/InStock',
            url: 'https://www.experienceboat.es/ca/experiencies-vaixell-roses/cadaques',
          },
        },
      },
      {
        '@type': 'ListItem',
        position: 6,
        item: {
          '@type': 'TouristTrip',
          '@id': 'https://www.experienceboat.es/ca/experiencies-vaixell-roses/coves-esnorquel',
          name: 'Coves i Esnòrquel en vaixell — Costa Brava des de Roses',
          url: 'https://www.experienceboat.es/ca/experiencies-vaixell-roses/coves-esnorquel',
          description:
            'Excursió en vaixell per les coves marines del Cap de Creus amb parades per fer esnòrquel. Material inclòs.',
          inLanguage: 'ca',
          provider: {
            '@type': 'LocalBusiness',
            '@id': 'https://www.experienceboat.es/#local-business',
          },
          offers: {
            '@type': 'Offer',
            priceCurrency: 'EUR',
            availability: 'https://schema.org/InStock',
            url: 'https://www.experienceboat.es/ca/experiencies-vaixell-roses/coves-esnorquel',
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
        name: 'Experiències en vaixell a Roses',
        item: 'https://www.experienceboat.es/ca/experiencies-vaixell-roses',
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

export default function ExperienciesVaixellRosesPage() {
  return (
    <>
      {/* Schema Markup */}
      <FAQSchema />
      <ItemListSchema />
      <BreadcrumbSchema />

      {/* Page sections */}
      <main id="main-content">
        <HeroSection lang="ca" />
        <IntroSection lang="ca" />
        <ExperiencesGrid lang="ca" />
        <CommonSection />
        <DestinationsSection />
        <TargetAudienceSection />
        <RentAlternativeSection />
        <ReviewsSection />
        <ContactSection />
        <FAQSection lang="ca" />
        <SiloNavBlock lang="ca" />
      </main>

      {/* Sticky CTA */}
      <StickyMobileCTA lang="ca" />
    </>
  );
}
