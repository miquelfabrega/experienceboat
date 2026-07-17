import { Metadata } from 'next';
import { buildAlternates } from '@/lib/i18n/routes';
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
title: 'Boat rental with licence in Roses',
  description:
    'Rent a licensed boat in Roses (6–12 guests): Jeanneau, Zodiac or llaüt from €195 per half-day. Skipper optional. Cap de Creus and Cadaqués. Book now.',
  alternates: buildAlternates('rentalWithLicence', 'en'),
  openGraph: {
title: 'Boat rental with licence in Roses',
    description:
      'Rent a licensed boat in Roses (6–12 guests): Jeanneau, Zodiac or llaüt from €195 per half-day. Skipper optional. Cap de Creus and Cadaqués. Book now.',
    url: 'https://www.experienceboat.es/en/boat-rental-with-licence-roses',
    siteName: 'Experience Boat',
    locale: 'en_GB',
    type: 'website',
    images: [
      {
        url: 'https://www.experienceboat.es/og-boat-rental-licence-roses.jpg',
        width: 1200,
        height: 630,
        alt: 'Motorboat with licence sailing in the Bay of Roses towards Cap de Creus',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/images/hero/hero-1.jpg'],
  },
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://www.experienceboat.es/#local-business',
  name: 'Experience Boat',
  url: 'https://www.experienceboat.es',
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
        <DestinationsSection lang="en" />
        <WhyUsSection lang="en" />
        <PracticalInfoSection lang="en" />
        <InternalLinksSection lang="en" />
        <ReviewsSection lang="en" />
        <ContactSection lang="en" />
        <FAQSection lang="en" />
      </main>

      <StickyMobileCTA lang="en" />
    </>
  );
}
