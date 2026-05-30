import type { Metadata } from 'next';
import HeroSection from '@/components/sobre-nosotros/HeroSection';
import IntroSection from '@/components/sobre-nosotros/IntroSection';
import StatsSection from '@/components/sobre-nosotros/StatsSection';
import ValuesSection from '@/components/sobre-nosotros/ValuesSection';
import TeamSection from '@/components/sobre-nosotros/TeamSection';
import ServicesSection from '@/components/sobre-nosotros/ServicesSection';
import LocationSection from '@/components/sobre-nosotros/LocationSection';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'Sobre nosaltres | Experience Boat — Vaixells a Roses',
  description:
    'Coneix Experience Boat, la teva empresa de lloguer de vaixells a la badia de Roses. Flota pròpia, atenció personalitzada i passió per la Costa Brava.',
  keywords: [
    'empresa vaixells Roses',
    'lloguer vaixell Roses',
    'Experience Boat Costa Brava',
  ],
  alternates: {
    canonical: 'https://www.experienceboat.es/ca/sobre-nosaltres',
    languages: {
      'x-default': 'https://www.experienceboat.es/sobre-nosotros',
      es: 'https://www.experienceboat.es/sobre-nosotros',
      ca: 'https://www.experienceboat.es/ca/sobre-nosaltres',
      fr: 'https://www.experienceboat.es/fr/a-propos',
      en: 'https://www.experienceboat.es/en/about',
    },
  },
  openGraph: {
    title: 'Sobre nosaltres | Experience Boat',
    description:
      'Coneix Experience Boat, la teva empresa de lloguer de vaixells a la badia de Roses. Flota pròpia i passió per la Costa Brava.',
    url: 'https://www.experienceboat.es/ca/sobre-nosaltres',
    siteName: 'Experience Boat',
    locale: 'ca_ES',
    type: 'website',
    images: ['/images/hero/hero-1.jpg'],
  },
};

export default function SobreNosaltresPageCA() {
  return (
    <main id="main-content">
      <HeroSection lang="ca" />
      <IntroSection lang="ca" />
      <StatsSection lang="ca" />
      <ValuesSection lang="ca" />
      <TeamSection lang="ca" />
      <ServicesSection lang="ca" />
      <LocationSection lang="ca" />
    </main>
  );
}
