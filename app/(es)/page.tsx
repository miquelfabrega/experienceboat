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

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Alquiler de barco en Roses — Costa Brava',
    description: 'Alquiler de barcos con y sin licencia en Roses, Costa Brava. Salidas privadas desde los canales de Santa Margarita hacia el Cap de Creus. Reserva online.',
    alternates: buildAlternates('home', 'es'),
    openGraph: {
      title: 'Alquiler de barco en Roses — Costa Brava',
      description: 'Alquiler de barcos con y sin licencia en Roses, Costa Brava. Salidas privadas desde los canales de Santa Margarita hacia el Cap de Creus.',
      url: 'https://www.experienceboat.es',
      locale: 'es_ES',
      images: ['/images/hero/hero-1.jpg'],
    },
    twitter: {
      card: 'summary_large_image',
      images: ['/images/hero/hero-1.jpg'],
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
      <ReviewsBanner
        title="5,0 en Google con 276 reseñas"
        subtitle="Opiniones reales de gente que ha salido a navegar con nosotros"
        rating={5}
        reviewCount={276}
        googleMapsUrl="https://maps.google.com/?q=Experience+Boat+Roses"
        phoneNumber="+34623995700"
        ctaText="Ver reseñas en Google Maps"
        callButtonText="Llamar ahora"
        footerText="Léelas antes de reservar — cuentan mejor que nosotros cómo es la salida. Y si tienes dudas, escríbenos por WhatsApp y te ayudamos con la reserva."
      />
      <BookingPreview />
      <LocationSection />
      <ClosingCTA />
    </main>
  );
}