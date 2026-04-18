import type { Metadata } from 'next';
import HeroSection from '@/components/sobre-nosotros/HeroSection';
import StatsSection from '@/components/sobre-nosotros/StatsSection';
import IntroSection from '@/components/sobre-nosotros/IntroSection';
import ValuesSection from '@/components/sobre-nosotros/ValuesSection';
import TeamSection from '@/components/sobre-nosotros/TeamSection';
import LocationSection from '@/components/sobre-nosotros/LocationSection';
import ServicesSection from '@/components/sobre-nosotros/ServicesSection';
import CTASection from '@/components/home/ClosingCTA';

export const dynamic = 'force-static';

/* ─── Schema: LocalBusiness ──────────────────────────────────────────────── */

function LocalBusinessSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://www.experienceboat.es/#local-business',
    name: 'Experience Boat',
    description:
      'Empresa de alquiler de barcos y excursiones náuticas en Roses, Costa Brava. Alquiler sin licencia, con licencia y excursiones privadas con patrón por la bahía de Roses y el Cap de Creus.',
    url: 'https://www.experienceboat.es',
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
      'https://www.instagram.com/experienceboat_roses/',
      'https://www.tripadvisor.com/Attraction_Review-g10060936-d27527826-Reviews-Experience_Boat-Roses_Province_of_Girona_Catalonia.html',
    ],
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}

export const metadata: Metadata = {
  title: 'Sobre nosotros — Experience Boat, Roses, Costa Brava',
  description: 'Somos tu empresa de alquiler de barcos en Roses, Costa Brava. Navegamos la bahía y el Cap de Creus con pasión, calidad y seguridad.',
  alternates: {
    canonical: 'https://www.experienceboat.es/sobre-nosotros',
    languages: {
      'x-default': 'https://www.experienceboat.es/sobre-nosotros',
      es: 'https://www.experienceboat.es/sobre-nosotros',
      en: 'https://www.experienceboat.es/en/about',
      fr: 'https://www.experienceboat.es/fr/a-propos',
    },
  },
  openGraph: {
    title: 'Sobre nosotros — Experience Boat, Roses, Costa Brava',
    description: 'Somos tu empresa de alquiler de barcos en Roses, Costa Brava. Navegamos la bahía y el Cap de Creus con pasión, calidad y seguridad.',
    url: 'https://www.experienceboat.es/sobre-nosotros',
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

export default function SobreNosotrosPage() {
  return (
    <>
      <LocalBusinessSchema />
      <main id="main-content" className="bg-white">
        <HeroSection />
        <StatsSection />
        <IntroSection />
        <ValuesSection />
        <TeamSection />
        <LocationSection />
        <ServicesSection />
        <CTASection />
      </main>
    </>
  );
}
