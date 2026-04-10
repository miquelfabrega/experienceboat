import { Metadata } from 'next';
import HeroSection from '@/components/lancha/en/HeroSection';
import IntroSection from '@/components/lancha/en/IntroSection';
import RoutesSection from '@/components/lancha/en/RoutesSection';
import BoatGridSection from '@/components/lancha/en/BoatGridSection';
import CapDeCreusSection from '@/components/lancha/en/CapDeCreusSection';
import FaqSection from '@/components/lancha/en/FaqSection';
import CtaSection from '@/components/lancha/en/CtaSection';

export const dynamic = 'force-static';

export const metadata: Metadata = {
title: 'Motorboat Rental Costa Brava with Licence',
  description:
    'Rent a motorboat on the Costa Brava and reach Cap de Creus, wild sea-only coves and the most spectacular corners of the northern coast. Departure from Roses, Santa Margarita.',
  alternates: {
    canonical: 'https://experienceboat.es/en/boat-rental-with-licence-roses/motorboat-costa-brava',
    languages: {
      'x-default': 'https://experienceboat.es/alquiler-barco-con-licencia-roses/lancha-costa-brava',
      es: 'https://experienceboat.es/alquiler-barco-con-licencia-roses/lancha-costa-brava',
      fr: 'https://experienceboat.es/fr/location-bateau-avec-permis-roses/vedette-cote-sauvage',
      en: 'https://experienceboat.es/en/boat-rental-with-licence-roses/motorboat-costa-brava',
    },
  },
  openGraph: {
title: 'Motorboat Rental on the Costa Brava with Licence',
    description:
      'Explore the wildest coves of the Costa Brava at full speed. Private licensed motorboat rental from the Marina de Santa Margarita in Roses.',
    url: 'https://experienceboat.es/en/boat-rental-with-licence-roses/motorboat-costa-brava',
    siteName: 'Experience Boat',
    locale: 'en_GB',
    type: 'website',
    images: [
      {
        url: 'https://experienceboat.es/og-motorboat-costa-brava.jpg',
        width: 1200,
        height: 630,
        alt: 'Motorboat speeding along the Costa Brava towards Cap de Creus',
      },
    ],
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
      item: 'https://experienceboat.es/en',
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Boat rental with licence in Roses',
      item: 'https://experienceboat.es/en/boat-rental-with-licence-roses',
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Motorboat Costa Brava',
      item: 'https://experienceboat.es/en/boat-rental-with-licence-roses/motorboat-costa-brava',
    },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is the Costa Brava route suitable for any level of experience with a licence?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Bay of Roses is accessible for any valid licence holder. The route to Cap de Creus requires more experience as it involves open-water navigation. We will advise you on the most suitable route.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I reach France from Roses with a rented motorboat?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Our rental boats are for navigation in Spanish waters, specifically in the Roses and Cap de Creus area.',
      },
    },
    {
      '@type': 'Question',
      name: 'What happens if the Tramontane wind blows during my trip?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'If conditions are not appropriate for safe navigation, we will reschedule your trip at no cost. We always check the weather forecast before any departure.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does a route to Cap de Creus take?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'From Santa Margarita to Cap de Creus lighthouse takes approximately 45–60 minutes one way, depending on the boat and conditions. For a comfortable trip with stops, we recommend full-day rental.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you provide fishing equipment with the motorboat?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We do not include fishing equipment as standard. If you are interested in fishing, get in touch before booking and we will see what we can arrange.',
      },
    },
  ],
};

const productSchema = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'Licensed motorboat rental — Costa Brava from Roses',
  description:
    'Private rental of a licensed motorboat to explore the Costa Brava from the Marina de Santa Margarita in Roses. Half day (4 hours) or full day (8 hours) options available.',
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
      url: 'https://experienceboat.es/en/boat-rental-with-licence-roses/motorboat-costa-brava',
    },
    {
      '@type': 'Offer',
      priceCurrency: 'EUR',
      price: '350',
      priceValidUntil: '2026-12-31',
      availability: 'https://schema.org/InStock',
      name: 'Full day (8 hours)',
      url: 'https://experienceboat.es/en/boat-rental-with-licence-roses/motorboat-costa-brava',
    },
  ],
};

export default function MotorboatCoastaBravaPage() {
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
        <RoutesSection />
        <BoatGridSection />
        <CapDeCreusSection />
        <FaqSection />
        <CtaSection />
      </main>
    </>
  );
}
