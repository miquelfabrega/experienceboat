import { Metadata } from 'next';
import HeroCarousel from '@/components/home/HeroCarousel';
import IntroSection from '@/components/home/IntroSection';
import ServiceCards from '@/components/home/ServiceCards';
import FleetCards from '@/components/home/FleetCards';
import WhyUs from '@/components/home/WhyUs';
import TrustSection from '@/components/home/TrustSection';
import BookingPreview from '@/components/home/BookingPreview';
import LocationSection from '@/components/home/LocationSection';
import ClosingCTA from '@/components/home/ClosingCTA';
import TikTokSection from '@/components/home/TikTokSection';
import { homeDataFr } from '@/lib/data/home-fr';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Location de bateau à Roses — Costa Brava',
    description: 'Location de bateaux avec et sans permis à Roses, Costa Brava. Sorties privées depuis les canaux de Santa Margarita vers le Cap de Creus. Réservation en ligne.',
    alternates: {
      canonical: 'https://experienceboat.es/fr',
      languages: {
        'x-default': 'https://experienceboat.es',
        es: 'https://experienceboat.es',
        fr: 'https://experienceboat.es/fr',
        en: 'https://experienceboat.es/en',
      },
    },
    openGraph: {
title: 'Location de bateau à Roses',
      description: 'Location de bateaux avec et sans permis à Roses, Costa Brava. Sorties privées depuis les canaux de Santa Margarita.',
      url: 'https://experienceboat.es/fr',
      locale: 'fr_FR',
    },
  };
}

export default function HomeFr() {
  return (
    <main className="flex min-h-screen flex-col bg-white">
      <HeroCarousel data={homeDataFr.hero} />
      <IntroSection translations={homeDataFr.intro} />
      <ServiceCards data={homeDataFr.services} />
      <FleetCards translations={homeDataFr.fleet} />
      <WhyUs data={homeDataFr.whyUs} />
      <TikTokSection t={{ title: 'Suivez-nous sur TikTok', subtitle: 'La mer, les criques et la vie à bord — de l\'intérieur.' }} />
      <TrustSection data={homeDataFr.trust} />
      <BookingPreview translations={homeDataFr.booking} />
      <LocationSection
        data={{
          ...homeDataFr.location,
          addressLabel: 'Adresse',
          phoneLabel: 'Téléphone',
          emailLabel: 'Email',
        }}
      />
      <ClosingCTA data={homeDataFr.closing} />
    </main>
  );
}
