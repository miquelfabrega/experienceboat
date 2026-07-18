import { Metadata } from 'next';
import { buildAlternates } from '@/lib/i18n/routes';
import HeroCarousel from '@/components/home/HeroCarousel';
import IntroSection from '@/components/home/IntroSection';
import ServiceCards from '@/components/home/ServiceCards';
import FleetCards from '@/components/home/FleetCards';
import WhyUs from '@/components/home/WhyUs';
import TrustSection from '@/components/home/TrustSection';
import ReviewsBanner from '@/components/home/ReviewsBanner';
import BookingPreview from '@/components/home/BookingPreview';
import LocationSection from '@/components/home/LocationSection';
import ClosingCTA from '@/components/home/ClosingCTA';
import TikTokSection from '@/components/home/TikTokSection';
import { homeDataFr } from '@/lib/data/home-fr';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Location de bateau à Roses — Costa Brava',
    description: 'Location de bateaux avec et sans permis à Roses (Rosas), Costa Brava. Sorties privées depuis les canaux de Santa Margarita vers le Cap de Creus. Réservation en ligne.',
    alternates: buildAlternates('home', 'fr'),
    openGraph: {
title: 'Location de bateau à Roses',
      description: 'Location de bateaux avec et sans permis à Roses, Costa Brava. Sorties privées depuis les canaux de Santa Margarita.',
      url: 'https://www.experienceboat.es/fr',
      locale: 'fr_FR',
      images: ['/images/hero/hero-1.jpg'],
    },
    twitter: {
      card: 'summary_large_image',
      images: ['/images/hero/hero-1.jpg'],
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
      <ReviewsBanner
        title="5,0 sur Google avec 276 avis"
        subtitle="Des avis authentiques de personnes qui ont navigué avec nous"
        rating={5}
        reviewCount={276}
        googleMapsUrl="https://maps.google.com/?q=Experience+Boat+Roses"
        phoneNumber="+34623995700"
        ctaText="Voir les avis sur Google Maps"
        callButtonText="Appeler maintenant"
        footerText="Lisez-les avant de réserver — ils racontent la sortie mieux que nous. Et pour toute question, écrivez-nous sur WhatsApp : nous vous aidons avec la réservation."
      />
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
