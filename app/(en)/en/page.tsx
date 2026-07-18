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
import { homeDataEn } from '@/lib/data/home-en';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Boat rental in Roses — Costa Brava',
    description: 'Boat rental with and without licence in Roses, Costa Brava. Private departures from the Santa Margarita canals to Cap de Creus. Online booking.',
    alternates: buildAlternates('home', 'en'),
    openGraph: {
title: 'Boat rental in Roses',
      description: 'Boat rental with and without licence in Roses, Costa Brava. Private departures from the Santa Margarita canals.',
      url: 'https://www.experienceboat.es/en',
      locale: 'en_GB',
      images: ['/images/hero/hero-1.jpg'],
    },
    twitter: {
      card: 'summary_large_image',
      images: ['/images/hero/hero-1.jpg'],
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
      <ReviewsBanner
        title="5.0 on Google from 276 reviews"
        subtitle="Real reviews from people who've been out on the water with us"
        rating={5}
        reviewCount={276}
        googleMapsUrl="https://maps.google.com/?q=Experience+Boat+Roses"
        phoneNumber="+34623995700"
        ctaText="See reviews on Google Maps"
        callButtonText="Call now"
        footerText="Read them before you book — they describe the trip better than we can. And if you have any questions, message us on WhatsApp and we'll help you with the booking."
      />
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
