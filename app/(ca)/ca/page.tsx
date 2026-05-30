import { Metadata } from 'next';
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
import { homeDataCa } from '@/lib/data/home-ca';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Lloguer d\'embarcacions a Roses — Costa Brava',
    description: 'Lloguer d\'embarcacions amb i sense llicència a Roses, Costa Brava. Sortides privades des dels canals de Santa Margarida cap al Cap de Creus. Reserva en línia.',
    alternates: {
      canonical: 'https://www.experienceboat.es/ca',
      languages: {
        'x-default': 'https://www.experienceboat.es',
        es: 'https://www.experienceboat.es',
        ca: 'https://www.experienceboat.es/ca',
        fr: 'https://www.experienceboat.es/fr',
        en: 'https://www.experienceboat.es/en',
      },
    },
    openGraph: {
      title: 'Lloguer d\'embarcacions a Roses',
      description: 'Lloguer d\'embarcacions amb i sense llicència a Roses, Costa Brava. Sortides privades des dels canals de Santa Margarida.',
      url: 'https://www.experienceboat.es/ca',
      locale: 'ca_ES',
      images: ['/images/hero/hero-1.jpg'],
    },
    twitter: {
      card: 'summary_large_image',
      images: ['/images/hero/hero-1.jpg'],
    },
  };
}

export default function HomeCa() {
  return (
    <main className="flex min-h-screen flex-col bg-white">
      <HeroCarousel data={homeDataCa.hero} />
      <IntroSection translations={homeDataCa.intro} />
      <ServiceCards data={homeDataCa.services} />
      <FleetCards translations={homeDataCa.fleet} lang="ca" />
      <WhyUs data={homeDataCa.whyUs} />
      <TikTokSection t={{ title: 'Seguiu-nos a TikTok', subtitle: 'El mar, les cales i la vida a bord — des de dins.' }} />
      <TrustSection data={homeDataCa.trust} />
      <ReviewsBanner
        title="Ens encanta el que fem"
        subtitle="Estem millorant el nostre web per a vosaltres"
        rating={5}
        reviewCount={190}
        googleMapsUrl="https://maps.google.com/?q=Experience+Boat+Roses"
        phoneNumber="+34623995700"
        ctaText="Veure ressenyes a Google Maps"
        callButtonText="Trucar ara"
        footerText="Ens encanta el que fem. Expliqueu-nos la vostra experiència a Google Maps o contacteu amb nosaltres directament per tancar la reserva manualment."
      />
      <BookingPreview translations={homeDataCa.booking} />
      <LocationSection
        data={{
          ...homeDataCa.location,
          addressLabel: 'Adreça',
          phoneLabel: 'Telèfon',
          emailLabel: 'Correu electrònic',
        }}
      />
      <ClosingCTA data={homeDataCa.closing} />
    </main>
  );
}
