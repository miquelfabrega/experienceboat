import type { Metadata } from 'next';
import HeroSection from '@/components/canal-tour/HeroSection';
import IntroSection from '@/components/canal-tour/IntroSection';
import MarinaSection from '@/components/canal-tour/MarinaSection';
import HighlightsSection from '@/components/canal-tour/HighlightsSection';
import ProductBoxSection from '@/components/canal-tour/ProductBoxSection';
import PracticalInfoSection from '@/components/canal-tour/PracticalInfoSection';
import ReviewsSection from '@/components/sunset-experience/ReviewsSection';
import SiloNavBlock from '@/components/SiloNavBlock';
import StickyCTA from '@/components/canal-tour/StickyCTA';

export const dynamic = 'force-static';

/* ─── TouristTrip Schema ─────────────────────────────────────────────────── */

function TouristTripSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'TouristTrip',
    '@id': 'https://experienceboat.es/experiencias-barco-roses/canal-tour-santa-margarita',
    name: 'Canal Tour Santa Margarita en barco sin licencia',
    url: 'https://experienceboat.es/experiencias-barco-roses/canal-tour-santa-margarita',
    description: 'Paseo de 90 minutos en barco sin licencia por los canales de Santa Margarita en Roses. Motor Mercury 15 CV, 4-6 plazas. Sin experiencia previa necesaria.',
    duration: 'PT1H30M',
    inLanguage: 'es',
    provider: {
    '@type': 'LocalBusiness',
    '@id': 'https://experienceboat.es/#local-business',
    'name': 'Experience Boat',
    'telephone': '+34623995700',
    'url': 'https://experienceboat.es',
    'address': {
      '@type': 'PostalAddress',
      'streetAddress': 'Av. Clot Franquest Nord',
      'addressLocality': 'Roses',
      'postalCode': '17480',
      'addressRegion': 'Girona',
      'addressCountry': 'ES',
    },
  },
    availableLanguage: [
      { '@type': 'Language', 'name': 'Spanish' },
      { '@type': 'Language', 'name': 'French' },
      { '@type': 'Language', 'name': 'English' },
      { '@type': 'Language', 'name': 'Catalan' },
    ],
    offers: {
      '@type': 'Offer',

      priceCurrency: 'EUR',
      availability: 'https://schema.org/InStock',
      validFrom: '2026-04-01',
      validThrough: '2026-10-31',
      url: 'https://experienceboat.es/reservas',
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

function BreadcrumbSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Inicio',
        item: 'https://experienceboat.es',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Experiencias en barco en Roses',
        item: 'https://experienceboat.es/experiencias-barco-roses',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Canal Tour Santa Margarita',
        item: 'https://experienceboat.es/experiencias-barco-roses/canal-tour-santa-margarita',
      },
    ],
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export const metadata: Metadata = {
title: 'Canal Tour Santa Margarita en Roses',
  description: 'Sé tú mismo el capitán en esta aventura por los canales de Santa Margarita. Paseo de 90 minutos sin necesidad de licencia.',
  alternates: {
    canonical: 'https://experienceboat.es/experiencias-barco-roses/canal-tour-santa-margarita',
    languages: {
      'x-default': 'https://experienceboat.es/experiencias-barco-roses/canal-tour-santa-margarita',
      es: 'https://experienceboat.es/experiencias-barco-roses/canal-tour-santa-margarita',
      fr: 'https://experienceboat.es/fr/experiences-bateau-roses/canal-tour-santa-margarita',
      en: 'https://experienceboat.es/en/boat-experiences-roses/canal-tour-santa-margarita',
    },
  },
  openGraph: {
title: 'Canal Tour Santa Margarita en Roses',
    description: 'Sé tú mismo el capitán en esta aventura por los canales de Santa Margarita. Paseo de 90 minutos sin necesidad de licencia.',
    url: 'https://experienceboat.es/experiencias-barco-roses/canal-tour-santa-margarita',
    siteName: 'Experience Boat',
    locale: 'es_ES',
    type: 'website',
  },
};

export default function CanalTourSantaMargaritaPage() {
  return (
    <>
      <TouristTripSchema />
      <BreadcrumbSchema />
      <main id="main-content">
        <HeroSection lang="es" />
        <IntroSection lang="es" />
        <HighlightsSection lang="es" />
        <ProductBoxSection lang="es" />
        <MarinaSection lang="es" />
        <PracticalInfoSection lang="es" />
        <ReviewsSection />
        
        {/* Reservation Call to action segment */}
        <section className="py-20 bg-sky-50 border-b border-sky-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-6">
              ¿Listo para navegar?
            </h2>
            <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
              Reserva tu experiencia de manera fácil y rápida online o contactándonos directamente.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/reservas"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full font-bold shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all bg-[var(--nav-accent)] hover:bg-[var(--nav-accent-hover)] text-white"
              >
                Reservar Online
              </a>
              <a
                href="https://wa.me/34623995700?text=Hola%2C%20quiero%20informaci%C3%B3n%20sobre%20el%20Canal%20Tour%20Santa%20Margarita"
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full font-bold shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all bg-green-500 hover:bg-green-600 text-white"
              >
                Contactar por WhatsApp
              </a>
            </div>
          </div>
        </section>

        <SiloNavBlock />
      </main>

      <StickyCTA lang="es" />
    </>
  );
}
