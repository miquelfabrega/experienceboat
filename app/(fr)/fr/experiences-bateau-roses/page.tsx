import type { Metadata } from 'next';
import { buildAlternates } from '@/lib/i18n/routes';
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
title: 'Excursions privées en bateau à Roses',
  description:
    'Excursions privées en bateau : coucher de soleil, Cap de Creus, Cadaqués, criques. Votre groupe seul, skipper local. Dès 160€. Baie de Roses.',
  alternates: buildAlternates('experiences', 'fr'),
  openGraph: {
title: 'Excursions privées en bateau à Roses',
    description:
      'Excursions privées en bateau : coucher de soleil, Cap de Creus, Cadaqués, criques. Votre groupe seul, skipper local. Dès 160€. Baie de Roses.',
    url: 'https://www.experienceboat.es/fr/experiences-bateau-roses',
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

/* ─── ItemList + TouristTrip Schema ──────────────────────────────────────── */

function ItemListSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Expériences en bateau à Roses — Experience Boat',
    url: 'https://www.experienceboat.es/fr/experiences-bateau-roses',
    description: 'Excursions privées, Sunset Experience et Canal Tour Santa Margarita. Sorties en bateau depuis Roses, Costa Brava.',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        item: {
          '@type': 'TouristTrip',
          '@id': 'https://www.experienceboat.es/fr/experiences-bateau-roses/excursions-privees',
          name: 'Excursions privées en bateau à Roses avec skipper',
          url: 'https://www.experienceboat.es/fr/experiences-bateau-roses/excursions-privees',
          description: 'Excursion privée en bateau au Cap de Creus, criques et baie de Roses. Skipper inclus, itinéraire adapté au groupe.',
          duration: 'PT4H',
          inLanguage: 'fr',
          provider: {
    '@type': 'LocalBusiness',
    '@id': 'https://www.experienceboat.es/#local-business',
  },
          offers: {
            '@type': 'Offer',
            price: 300,
            priceCurrency: 'EUR',
            availability: 'https://schema.org/InStock',
            url: 'https://www.experienceboat.es/fr/reservation',
          },
        },
      },
      {
        '@type': 'ListItem',
        position: 2,
        item: {
          '@type': 'TouristTrip',
          '@id': 'https://www.experienceboat.es/fr/experiences-bateau-roses/sunset-experience',
          name: 'Sunset Experience en bateau à Roses',
          url: 'https://www.experienceboat.es/fr/experiences-bateau-roses/sunset-experience',
          description: 'Sortie en bateau au coucher du soleil depuis Roses. 2 heures dans les canaux de Santa Margarita et la baie.',
          duration: 'PT2H',
          inLanguage: 'fr',
          provider: {
    '@type': 'LocalBusiness',
    '@id': 'https://www.experienceboat.es/#local-business',
  },
          offers: {
            '@type': 'Offer',
            price: 225,
            priceCurrency: 'EUR',
            availability: 'https://schema.org/InStock',
            url: 'https://www.experienceboat.es/fr/reservation',
          },
        },
      },
      {
        '@type': 'ListItem',
        position: 3,
        item: {
          '@type': 'TouristTrip',
          '@id': 'https://www.experienceboat.es/fr/experiences-bateau-roses/canal-tour-santa-margarita',
          name: 'Canal Tour Santa Margarita en bateau sans permis',
          url: 'https://www.experienceboat.es/fr/experiences-bateau-roses/canal-tour-santa-margarita',
          description: 'Promenade de 90 minutes en bateau sans permis dans les canaux de Santa Margarita à Roses.',
          duration: 'PT1H30M',
          inLanguage: 'fr',
          provider: {
    '@type': 'LocalBusiness',
    '@id': 'https://www.experienceboat.es/#local-business',
  },
          offers: {
            '@type': 'Offer',
            priceCurrency: 'EUR',
            availability: 'https://schema.org/InStock',
            url: 'https://www.experienceboat.es/fr/reservation',
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
        name: 'Accueil',
        item: 'https://www.experienceboat.es/fr',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Expériences en bateau à Roses',
        item: 'https://www.experienceboat.es/fr/experiences-bateau-roses',
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

export default function ExperiencesBateauRosesPage() {
  return (
    <>
      <FAQSchema />
      <ItemListSchema />
      <BreadcrumbSchema />

      <main id="main-content">
        <HeroSection lang="fr" />
        <IntroSection lang="fr" />
        <ExperiencesGrid lang="fr" />
        <CommonSection />
        <DestinationsSection />
        <TargetAudienceSection />
        <FAQSection lang="fr" />
      </main>

      <StickyMobileCTA />
    </>
  );
}
