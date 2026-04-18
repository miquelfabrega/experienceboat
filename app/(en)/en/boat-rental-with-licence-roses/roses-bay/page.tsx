import { Metadata } from 'next';
import HeroSection from '@/components/bahia-de-roses/en/HeroSection';
import IntroSection from '@/components/bahia-de-roses/en/IntroSection';
import WhatToSeeSection from '@/components/bahia-de-roses/en/WhatToSeeSection';
import BoatGridSection from '@/components/bahia-de-roses/en/BoatGridSection';
import WhyBaySection from '@/components/bahia-de-roses/en/WhyBaySection';
import FaqSection from '@/components/bahia-de-roses/en/FaqSection';
import CtaSection from '@/components/bahia-de-roses/en/CtaSection';

export const dynamic = 'force-static';

export const metadata: Metadata = {
title: 'Boat Rental with Licence in the Bay of Roses',
  description:
    'Rent a boat with licence in the Bay of Roses: hidden coves, Cap de Creus Natural Park and coastline. Departure from Santa Margarita.',
  alternates: {
    canonical: 'https://www.experienceboat.es/en/boat-rental-with-licence-roses/roses-bay',
    languages: {
      'x-default': 'https://www.experienceboat.es/alquiler-barco-con-licencia-roses/bahia-de-roses',
      es: 'https://www.experienceboat.es/alquiler-barco-con-licencia-roses/bahia-de-roses',
      fr: 'https://www.experienceboat.es/fr/location-bateau-avec-permis-roses/baie-de-roses',
      en: 'https://www.experienceboat.es/en/boat-rental-with-licence-roses/roses-bay',
    },
  },
  openGraph: {
title: 'Boat Rental with Licence in the Bay of Roses',
    description:
      'Private rental with licence on the Bay of Roses. Coves, sea, Pyrenees and the Cap de Creus Natural Park within reach. Departure from Marina de Santa Margarita.',
    url: 'https://www.experienceboat.es/en/boat-rental-with-licence-roses/roses-bay',
    siteName: 'Experience Boat',
    locale: 'en_GB',
    type: 'website',
    images: [
      {
        url: 'https://www.experienceboat.es/og-bahia-roses-rental.jpg',
        width: 1200,
        height: 630,
        alt: 'Boat with licence in the Bay of Roses with Cap de Creus in the background',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/images/hero/hero-1.jpg'],
  },
};

const breadcrumbSchema = {
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
      name: 'Boat rental with licence in Roses',
      item: 'https://www.experienceboat.es/en/boat-rental-with-licence-roses',
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Bay of Roses',
      item: 'https://www.experienceboat.es/en/boat-rental-with-licence-roses/roses-bay',
    },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is the Bay of Roses suitable for beginners with a licence?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, it is one of the best areas for it. The bay is naturally sheltered and the waters are generally calm. We recommend going out early in the day.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does it take to reach Cap de Creus from the Bay of Roses?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Approximately 45 to 60 minutes depending on the boat and conditions. Better suited for full-day rental.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I anchor inside the Cap de Creus Natural Park?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Inside the park there are designated mooring areas. It is not permitted to anchor in certain protected coves. We will give you information before you head out.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the best season to rent a boat in the Bay of Roses?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The best season runs from May to October. Spring and September offer excellent conditions with fewer visitors.',
      },
    },
    {
      '@type': 'Question',
      name: 'How far is the Marina de Santa Margarita from central Roses?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'About 3 kilometres from the centre, at the northern entrance to the town. 5 minutes by car, 15 by bike. Free parking nearby.',
      },
    },
  ],
};

const productSchema = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'Boat rental with licence — Bay of Roses',
  description:
    'Private rental of a licensed boat to explore the Bay of Roses from the Marina de Santa Margarita. Choose between half day (4 hours) or full day (8 hours).',
  brand: {
    '@type': 'Brand',
    name: 'Experience Boat',
  },
  offers: [
    {
      '@type': 'Offer',
      priceCurrency: 'EUR',
      price: '200',
      priceValidUntil: '2026-12-31',
      availability: 'https://schema.org/InStock',
      name: 'Half day (4 hours)',
      url: 'https://www.experienceboat.es/en/boat-rental-with-licence-roses/roses-bay',
    },
    {
      '@type': 'Offer',
      priceCurrency: 'EUR',
      price: '350',
      priceValidUntil: '2026-12-31',
      availability: 'https://schema.org/InStock',
      name: 'Full day (8 hours)',
      url: 'https://www.experienceboat.es/en/boat-rental-with-licence-roses/roses-bay',
    },
  ],
};

export default function RosesBayPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <main>
        <HeroSection />
        <IntroSection />
        <WhatToSeeSection />
        <BoatGridSection />
        <WhyBaySection />
        <FaqSection />
        <CtaSection />
      </main>
    </>
  );
}
