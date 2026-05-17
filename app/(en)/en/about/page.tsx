import type { Metadata } from 'next';
import HeroSection from '@/components/sobre-nosotros/HeroSection';
import StatsSection from '@/components/sobre-nosotros/StatsSection';
import IntroSection from '@/components/sobre-nosotros/IntroSection';
import ValuesSection from '@/components/sobre-nosotros/ValuesSection';
import TeamSection from '@/components/sobre-nosotros/TeamSection';
import LocationSection from '@/components/sobre-nosotros/LocationSection';
import ServicesSection from '@/components/sobre-nosotros/ServicesSection';
import ReviewsSection from '@/components/sunset-experience/ReviewsSection';
import ClosingCTA from '@/components/home/ClosingCTA';
import { homeDataEn } from '@/lib/data/home-en';

export const dynamic = 'force-static';

/* ─── Schema: LocalBusiness ──────────────────────────────────────────────── */

function LocalBusinessSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://experienceboat.es/#local-business',
    name: 'Experience Boat',
    description:
      'Boat rental and nautical tour company in Roses, Costa Brava. No-licence rentals, skippered private excursions and licensed charters across the Bay of Roses and Cap de Creus Natural Park.',
    url: 'https://experienceboat.es',
    telephone: '+34623995700',
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
      latitude: 42.2713962,
      longitude: 3.1343284,
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '08:00',
      closes: '20:00',
    },
    sameAs: [
      'https://www.instagram.com/experienceboat_roses',
      'https://www.tripadvisor.com/Attraction_Review-g10060936-d27527826-Reviews-Experience_Boat-Roses_Province_of_Girona_Catalonia.html',
    ],
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}

export const metadata: Metadata = {
  title: 'About Us — Boat Rental in Roses',
  description: 'Your boat rental company in Roses, Costa Brava. 8 boats of our own, sailing the bay and Cap de Creus. Meet the Experience Boat team.',
  alternates: {
    canonical: 'https://experienceboat.es/en/about',
    languages: {
      'x-default': 'https://experienceboat.es/sobre-nosotros',
      es: 'https://experienceboat.es/sobre-nosotros',
      fr: 'https://experienceboat.es/fr/a-propos',
      en: 'https://experienceboat.es/en/about',
    },
  },
  openGraph: {
    title: 'About Us — Boat Rental in Roses',
    description: 'Your boat rental company in Roses, Costa Brava. 8 boats of our own, sailing the bay and Cap de Creus.',
    url: 'https://experienceboat.es/en/about',
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

export default function AboutPage() {
  return (
    <>
      <LocalBusinessSchema />
      <main id="main-content" className="bg-white">
        <HeroSection lang="en" />
        <StatsSection lang="en" />
        <IntroSection lang="en" />
        <ValuesSection lang="en" />
        <TeamSection lang="en" />
        <LocationSection lang="en" />
        <ServicesSection lang="en" />
        <ReviewsSection />
        <ClosingCTA data={homeDataEn.closing} />
      </main>
    </>
  );
}
