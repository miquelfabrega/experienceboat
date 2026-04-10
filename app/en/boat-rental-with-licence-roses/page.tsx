import { Metadata } from 'next';
import HeroSection from '@/components/pillar-licencia/HeroSection';
import IntroSection from '@/components/pillar-licencia/IntroSection';
import BoatGrid from '@/components/pillar-licencia/BoatGrid';
import DestinationsSection from '@/components/pillar-licencia/DestinationsSection';
import WhyUsSection from '@/components/pillar-licencia/WhyUsSection';
import PracticalInfoSection from '@/components/pillar-licencia/PracticalInfoSection';
import InternalLinksSection from '@/components/pillar-licencia/InternalLinksSection';
import ReviewsSection from '@/components/pillar-licencia/ReviewsSection';
import FAQSection from '@/components/pillar-licencia/FAQSection';
import ContactSection from '@/components/pillar-licencia/ContactSection';
import StickyMobileCTA from '@/components/pillar-licencia/StickyMobileCTA';
import { faqData } from '@/components/pillar-licencia/faq-data';

export const dynamic = 'force-static';

export const metadata: Metadata = {
title: 'Boat Rental with Licence in Roses (Costa Brava)',
  description:
    'Rent a boat with your nautical licence in Roses and explore Cap de Creus, the Bay of Roses and the wildest coves of the Costa Brava. Departure from Marina de Santa Margarita.',
  alternates: {
    canonical: 'https://experienceboat.es/en/boat-rental-with-licence-roses',
    languages: {
      'x-default': 'https://experienceboat.es/alquiler-barco-con-licencia-roses',
      es: 'https://experienceboat.es/alquiler-barco-con-licencia-roses',
      fr: 'https://experienceboat.es/fr/location-bateau-avec-permis-roses',
      en: 'https://experienceboat.es/en/boat-rental-with-licence-roses',
    },
  },
  openGraph: {
title: 'Boat Rental with Licence in Roses',
    description:
      'Use your nautical licence to rent a boat in Roses and head to Cap de Creus, the wild coves of the Costa Brava and the Bay of Roses. Private, flexible, unforgettable.',
    url: 'https://experienceboat.es/en/boat-rental-with-licence-roses',
    siteName: 'Experience Boat',
    locale: 'en_GB',
    type: 'website',
    images: [
      {
        url: 'https://experienceboat.es/og-boat-rental-licence-roses.jpg',
        width: 1200,
        height: 630,
        alt: 'Motorboat with licence sailing in the Bay of Roses towards Cap de Creus',
      },
    ],
  },
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://experienceboat.es/#local-business',
  name: 'Experience Boat',
  url: 'https://experienceboat.es',
  telephone: '+34623995700',
  email: 'info@experienceboat.es',
  priceRange: '€€',
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqData.en.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
};

export default function BoatRentalWithLicenceRosesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <main id="main-content">
        <HeroSection lang="en" />
        <IntroSection lang="en" />
        <BoatGrid lang="en" />
        <DestinationsSection />
        <WhyUsSection />
        <PracticalInfoSection />
        <InternalLinksSection />
        <ReviewsSection />
        <ContactSection />
        <FAQSection lang="en" />
      </main>

      <StickyMobileCTA lang="en" />
    </>
  );
}
