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

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Alquiler de barco en Roses — Costa Brava',
    description: 'Alquiler de barcos con y sin licencia en Roses, Costa Brava. Salidas privadas desde los canales de Santa Margarita hacia el Cap de Creus. Reserva online.',
    alternates: {
      canonical: 'https://experienceboat.es',
      languages: {
        'x-default': 'https://experienceboat.es',
        es: 'https://experienceboat.es',
        fr: 'https://experienceboat.es/fr',
        en: 'https://experienceboat.es/en',
      },
    },
  }
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-white">
      <HeroCarousel />
      <IntroSection />
      <ServiceCards />
      <FleetCards />
      <WhyUs />
      <TikTokSection />
      <TrustSection />
      <BookingPreview />
      <LocationSection />
      <ClosingCTA />
    </main>
  );
}