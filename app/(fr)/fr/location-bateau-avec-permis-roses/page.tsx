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
import { faqData } from '@/components/pillar-licencia/faq-data';

export const dynamic = 'force-static';

/* ─── Metadata & SEO ─────────────────────────────────────────────────────── */

export const metadata: Metadata = {
title: 'Location de bateau avec permis à Roses',
  description:
    'Louez un bateau avec permis à Roses (6–12 places) : Jeanneau, Zodiac ou llaüt dès 195€ la demi-journée. Skipper en option. Cap de Creus, Cadaqués.',
  alternates: buildAlternates('rentalWithLicence', 'fr'),
  openGraph: {
title: 'Location de bateau avec permis à Roses',
    description:
      'Louez un bateau avec permis à Roses (6–12 places) : Jeanneau, Zodiac ou llaüt dès 195€ la demi-journée. Skipper en option. Cap de Creus, Cadaqués.',
    url: 'https://www.experienceboat.es/fr/location-bateau-avec-permis-roses',
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
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Location de bateaux avec permis à Roses',
      itemListElement: [
        {
          '@type': 'Offer',
          name: 'Location de bateau avec permis — Demi-journée',
          price: 200,
          priceCurrency: 'EUR',
          description: 'Location de bateau avec permis à Roses pour 4 heures depuis la Marina de Santa Margarita.',
        },
        {
          '@type': 'Offer',
          name: 'Location de bateau avec permis — Journée complète',
          price: 350,
          priceCurrency: 'EUR',
          description: 'Location de bateau avec permis à Roses pour 8 heures depuis la Marina de Santa Margarita.',
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
        name: 'Accueil',
        item: 'https://www.experienceboat.es/fr',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Location bateau avec permis Roses',
        item: 'https://www.experienceboat.es/fr/location-bateau-avec-permis-roses',
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

export default function LocationBateauAvecPermisRosesPage() {
  return (
    <>
      <FAQSchema />
      <LocalBusinessSchema />
      <BreadcrumbSchema />

      <main id="main-content">
        <HeroSection lang="fr" />
        <IntroSection lang="fr" />
        <BoatGrid lang="fr" />
        <DestinationsSection />
        <WhyUsSection />
        <PracticalInfoSection />
        <InternalLinksSection />
        <ReviewsSection />
        <ContactSection />
        <FAQSection lang="fr" />
      </main>

      <StickyMobileCTA lang="fr" />
    </>
  );
}
