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
import { homeDataFr } from '@/lib/data/home-fr';

export const dynamic = 'force-static';

/* ─── Schema: LocalBusiness ──────────────────────────────────────────────── */

function LocalBusinessSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://experienceboat.es/#local-business',
    name: 'Experience Boat',
    description:
      "Spécialiste de la location de bateaux et des excursions nautiques à Roses, Costa Brava. Location sans permis, avec permis et excursions privées avec skipper dans la baie de Roses et au Cap de Creus.",
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
  title: 'Qui sommes-nous — Roses, Costa Brava',
  description: 'Votre spécialiste de la location de bateaux à Roses, Costa Brava. 8 embarcations en propre, navigation dans la baie et au Cap de Creus.',
  alternates: {
    canonical: 'https://experienceboat.es/fr/a-propos',
    languages: {
      'x-default': 'https://experienceboat.es/sobre-nosotros',
      es: 'https://experienceboat.es/sobre-nosotros',
      fr: 'https://experienceboat.es/fr/a-propos',
      en: 'https://experienceboat.es/en/about',
    },
  },
  openGraph: {
    title: 'Qui sommes-nous — Roses, Costa Brava',
    description: 'Votre spécialiste de la location de bateaux à Roses, Costa Brava.',
    url: 'https://experienceboat.es/fr/a-propos',
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

export default function AProposPage() {
  return (
    <>
      <LocalBusinessSchema />
      <main id="main-content" className="bg-white">
        <HeroSection lang="fr" />
        <StatsSection lang="fr" />
        <IntroSection lang="fr" />
        <ValuesSection lang="fr" />
        <TeamSection lang="fr" />
        <LocationSection lang="fr" />
        <ServicesSection lang="fr" />
        <ReviewsSection />
        <ClosingCTA data={homeDataFr.closing} />
      </main>
    </>
  );
}
