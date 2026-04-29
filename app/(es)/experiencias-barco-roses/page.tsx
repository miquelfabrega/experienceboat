import type { Metadata } from 'next';
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
import { faqs } from '@/components/pillar-experiencias/faq-data';
import StickyMobileCTA from '@/components/pillar-experiencias/StickyMobileCTA';
import SiloNavBlock from '@/components/SiloNavBlock';

export const dynamic = 'force-static';

/* ─── Metadata & SEO ─────────────────────────────────────────────────────── */

export const metadata: Metadata = {
title: 'Experiencias en barco en Roses — Cap de Creus',
  description:
    'Excursiones privadas y atardeceres en barco desde Roses. Salvador te lleva a las calas del Cap de Creus y los canales de Santa Margarita. Solo tu grupo a bordo.',
  alternates: {
    canonical: 'https://www.experienceboat.es/experiencias-barco-roses',
    languages: {
      'x-default': 'https://www.experienceboat.es/experiencias-barco-roses',
      es: 'https://www.experienceboat.es/experiencias-barco-roses',
      fr: 'https://www.experienceboat.es/fr/experiences-bateau-roses',
      en: 'https://www.experienceboat.es/en/boat-experiences-roses',
    },
  },
  openGraph: {
title: 'Experiencias en barco en Roses — Cap de Creus',
    description:
      'Excursiones privadas y atardeceres en barco desde Roses. Salvador te lleva a las calas del Cap de Creus y los canales de Santa Margarita. Solo tu grupo a bordo.',
    url: 'https://www.experienceboat.es/experiencias-barco-roses',
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

/* ─── ItemList + TouristTrip Schema ──────────────────────────────────────── */

function ItemListSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Experiencias en barco en Roses — Experience Boat',
    url: 'https://www.experienceboat.es/experiencias-barco-roses',
    description: 'Excursiones privadas, Sunset Experience, Canal Tour Santa Margarita, excursión al Cap de Creus, Cadaqués y Cuevas & Snorkel. Salidas en barco desde Roses, Costa Brava.',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        item: {
          '@type': 'TouristTrip',
          '@id': 'https://www.experienceboat.es/experiencias-barco-roses/excursiones-privadas',
          name: 'Excursiones privadas en barco en Roses con patrón',
          url: 'https://www.experienceboat.es/experiencias-barco-roses/excursiones-privadas',
          description: 'Excursión privada en barco por el Cap de Creus, calas y bahía de Roses. Patrón incluido, ruta adaptada al grupo.',
          duration: 'PT4H',
          inLanguage: 'es',
          provider: {
    '@type': 'LocalBusiness',
    '@id': 'https://www.experienceboat.es/#local-business',
  },
          offers: {
            '@type': 'Offer',
            price: '300',
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
          '@id': 'https://www.experienceboat.es/experiencias-barco-roses/sunset-experience',
          name: 'Sunset Experience en barco en Roses',
          url: 'https://www.experienceboat.es/experiencias-barco-roses/sunset-experience',
          description: 'Salida en barco al atardecer desde Roses. 2 horas por los canales de Santa Margarita y la bahía.',
          duration: 'PT2H',
          inLanguage: 'es',
          provider: {
    '@type': 'LocalBusiness',
    '@id': 'https://www.experienceboat.es/#local-business',
  },
          offers: {
            '@type': 'Offer',
            price: '225',
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
          '@id': 'https://www.experienceboat.es/experiencias-barco-roses/canal-tour-santa-margarita',
          name: 'Canal Tour Santa Margarita en barco sin licencia',
          url: 'https://www.experienceboat.es/experiencias-barco-roses/canal-tour-santa-margarita',
          description: 'Paseo de 90 minutos en barco sin licencia por los canales de Santa Margarita en Roses.',
          duration: 'PT1H30M',
          inLanguage: 'es',
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
          '@id': 'https://www.experienceboat.es/experiencias-barco-roses/cap-de-creus-calas',
          name: 'Excursión al Cap de Creus en barco — Baño en 3 calas',
          url: 'https://www.experienceboat.es/experiencias-barco-roses/cap-de-creus-calas',
          description: 'Excursión guiada de 3 a 5 horas al Cap de Creus desde Roses con baño en 3 calas vírgenes de la Costa Brava.',
          duration: 'PT4H',
          inLanguage: 'es',
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
            url: 'https://www.experienceboat.es/experiencias-barco-roses/cap-de-creus-calas',
          },
        },
      },
      {
        '@type': 'ListItem',
        position: 5,
        item: {
          '@type': 'TouristTrip',
          '@id': 'https://www.experienceboat.es/experiencias-barco-roses/cadaques',
          name: 'Excursión a Cadaqués en barco desde Roses',
          url: 'https://www.experienceboat.es/experiencias-barco-roses/cadaques',
          description: 'Excursión en barco a Cadaqués con visita guiada al pueblo de Dalí y tiempo libre.',
          inLanguage: 'es',
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
            url: 'https://www.experienceboat.es/experiencias-barco-roses/cadaques',
          },
        },
      },
      {
        '@type': 'ListItem',
        position: 6,
        item: {
          '@type': 'TouristTrip',
          '@id': 'https://www.experienceboat.es/experiencias-barco-roses/cuevas-snorkel',
          name: 'Cuevas & Snorkel en barco — Costa Brava desde Roses',
          url: 'https://www.experienceboat.es/experiencias-barco-roses/cuevas-snorkel',
          description: 'Excursión en barco por las cuevas marinas del Cap de Creus con paradas para hacer snorkel. Equipo incluido.',
          inLanguage: 'es',
          provider: {
            '@type': 'LocalBusiness',
            '@id': 'https://www.experienceboat.es/#local-business',
          },
          offers: {
            '@type': 'Offer',
            priceCurrency: 'EUR',
            availability: 'https://schema.org/InStock',
            url: 'https://www.experienceboat.es/experiencias-barco-roses/cuevas-snorkel',
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
        name: 'Inicio',
        item: 'https://www.experienceboat.es',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Experiencias en barco en Roses',
        item: 'https://www.experienceboat.es/experiencias-barco-roses',
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

export default function ExperienciasBarcoRosesPage() {
  return (
    <>
      {/* Schema Markup */}
      <FAQSchema />
      <ItemListSchema />
      <BreadcrumbSchema />

      {/* Page sections */}
      <main id="main-content">
        <HeroSection />
        <IntroSection />
        <ExperiencesGrid />
        <CommonSection />
        <DestinationsSection />
        <TargetAudienceSection />
        <RentAlternativeSection />
        <ReviewsSection />
        <ContactSection />
        <FAQSection lang="es" />
        <SiloNavBlock />
      </main>

      {/* Sticky CTA */}
      <StickyMobileCTA />
    </>
  );
}
