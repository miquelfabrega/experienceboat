import type { Metadata } from 'next';
import HeroSection from '@/components/pillar-sin-licencia/HeroSection';
import IntroSection from '@/components/pillar-sin-licencia/IntroSection';
import BoatGrid from '@/components/pillar-sin-licencia/BoatGrid';
import DestinationsSection from '@/components/pillar-sin-licencia/DestinationsSection';
import WhyUsSection from '@/components/pillar-sin-licencia/WhyUsSection';
import PracticalInfoSection from '@/components/pillar-sin-licencia/PracticalInfoSection';
import InternalLinksSection from '@/components/pillar-sin-licencia/InternalLinksSection';
import ReviewsSection from '@/components/pillar-sin-licencia/ReviewsSection';
import ContactSection from '@/components/pillar-sin-licencia/ContactSection';
import FAQSection from '@/components/pillar-sin-licencia/FAQSection';
import StickyMobileCTA from '@/components/pillar-sin-licencia/StickyMobileCTA';
import SiloNavBlock from '@/components/SiloNavBlock';
import { pillarEn } from '@/lib/data/sin-licencia-en';

export const dynamic = 'force-static';

/* ─── Metadata & SEO ─────────────────────────────────────────────────────── */

export const metadata: Metadata = {
title: 'Boat Rental without Licence in Roses (Costa Brava)',
  description:
    'Rent a boat without a licence in Roses and explore the Bay of Roses, the Santa Margarita canals and Cap de Creus. No experience needed. Fully private. Book now.',
  alternates: {
    canonical: 'https://www.experienceboat.es/en/boat-rental-without-licence-roses',
    languages: {
      'x-default': 'https://www.experienceboat.es/alquiler-barco-sin-licencia-roses',
      es: 'https://www.experienceboat.es/alquiler-barco-sin-licencia-roses',
      fr: 'https://www.experienceboat.es/fr/location-bateau-sans-permis-roses',
      en: 'https://www.experienceboat.es/en/boat-rental-without-licence-roses',
    },
  },
  openGraph: {
title: 'Boat Rental without Licence in Roses',
    description:
      'No licence, no experience needed. Rent a boat in Roses and explore the Santa Margarita canals, the Bay of Roses and Cap de Creus. Fully private.',
    url: 'https://www.experienceboat.es/en/boat-rental-without-licence-roses',
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

/* ─── FAQ Schema ─────────────────────────────────────────────────────────── */

function FAQSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: pillarEn.faq.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
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
        name: 'Home',
        item: 'https://www.experienceboat.es/en',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Boat rental without licence in Roses',
        item: 'https://www.experienceboat.es/en/boat-rental-without-licence-roses',
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

export default function BoatRentalWithoutLicenceRosesPage() {
  return (
    <>
      <FAQSchema />
      <BreadcrumbSchema />
      <main id="main-content">
        <HeroSection t={pillarEn.hero} />
        <IntroSection t={pillarEn.intro} />
        <BoatGrid t={pillarEn.boatGrid} />
        <DestinationsSection t={pillarEn.destinations} />
        <WhyUsSection t={pillarEn.whyUs} />
        <PracticalInfoSection t={pillarEn.practicalInfo} />
        <InternalLinksSection t={pillarEn.internalLinks} />
        <ReviewsSection t={pillarEn.reviews} />
        <ContactSection t={pillarEn.contact} />
        <FAQSection t={pillarEn.faq} />
        <SiloNavBlock />
      </main>
      <StickyMobileCTA t={pillarEn.stickyCTA} />
    </>
  );
}
