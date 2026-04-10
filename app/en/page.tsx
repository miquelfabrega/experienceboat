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
import { homeDataEn } from '@/lib/data/home-en';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Boat rental in Roses — Costa Brava',
    description: 'Boat rental with and without licence in Roses, Costa Brava. Private departures from the Santa Margarita canals to Cap de Creus. Online booking.',
    alternates: {
      canonical: 'https://experienceboat.es/en',
      languages: {
        'x-default': 'https://experienceboat.es',
        es: 'https://experienceboat.es',
        fr: 'https://experienceboat.es/fr',
        en: 'https://experienceboat.es/en',
      },
    },
    openGraph: {
title: 'Boat rental in Roses',
      description: 'Boat rental with and without licence in Roses, Costa Brava. Private departures from the Santa Margarita canals.',
      url: 'https://experienceboat.es/en',
      locale: 'en_GB',
    },
  };
}

export default function HomeEn() {
  return (
    <main className="flex min-h-screen flex-col bg-white">
      <HeroCarousel data={homeDataEn.hero} />
      <IntroSection translations={homeDataEn.intro} />
      <ServiceCards data={homeDataEn.services} />
      <FleetCards translations={homeDataEn.fleet} />
      <WhyUs data={homeDataEn.whyUs} />
      <TikTokSection t={{ title: 'Follow us on TikTok', subtitle: 'The sea, the coves and life on board — from the inside.' }} />
      <TrustSection data={homeDataEn.trust} />
      <BookingPreview translations={homeDataEn.booking} />
      <LocationSection
        data={{
          ...homeDataEn.location,
          addressLabel: 'Address',
          phoneLabel: 'Phone',
          emailLabel: 'Email',
        }}
      />
      <ClosingCTA data={homeDataEn.closing} />
    </main>
  );
}
