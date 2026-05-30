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
import RegiondoWidget from '@/components/experiencias/RegiondoWidget';

export const dynamic = 'force-static';

/* ─── TouristTrip Schema ─────────────────────────────────────────────────── */

function TouristTripSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'TouristTrip',
    '@id': 'https://www.experienceboat.es/ca/experiencies-vaixell-roses/canal-tour-santa-margarida',
    name: 'Canal Tour Santa Margarida en vaixell sense llicència',
    url: 'https://www.experienceboat.es/ca/experiencies-vaixell-roses/canal-tour-santa-margarida',
    description:
      'Passeig de 90 minuts en vaixell sense llicència pels canals de Santa Margarida a Roses. Motor Mercury 15 CV, 4-6 places. Sense experiència prèvia necessària.',
    duration: 'PT1H30M',
    inLanguage: 'ca',
    provider: {
      '@type': 'LocalBusiness',
      '@id': 'https://www.experienceboat.es/#local-business',
    },
    availableLanguage: [
      { '@type': 'Language', name: 'Spanish' },
      { '@type': 'Language', name: 'French' },
      { '@type': 'Language', name: 'English' },
      { '@type': 'Language', name: 'Catalan' },
    ],
    offers: {
      '@type': 'Offer',
      priceCurrency: 'EUR',
      availability: 'https://schema.org/InStock',
      validFrom: '2026-04-01',
      validThrough: '2026-10-31',
      url: 'https://www.experienceboat.es/reservas',
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
        name: 'Inici',
        item: 'https://www.experienceboat.es/ca',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Experiències en vaixell a Roses',
        item: 'https://www.experienceboat.es/ca/experiencies-vaixell-roses',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Canal Tour Santa Margarida',
        item: 'https://www.experienceboat.es/ca/experiencies-vaixell-roses/canal-tour-santa-margarida',
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
  title: 'Canal Tour Santa Margarida a Roses',
  description:
    'Sigueu vosaltres mateixos el capità en aquesta aventura pels canals de Santa Margarida. Passeig de 90 minuts sense necessitat de llicència.',
  keywords: [
    'canals Santa Margarida vaixell',
    'tour canals Roses',
    'passeig en vaixell Roses',
  ],
  alternates: {
    canonical:
      'https://www.experienceboat.es/ca/experiencies-vaixell-roses/canal-tour-santa-margarida',
    languages: {
      'x-default':
        'https://www.experienceboat.es/experiencias-barco-roses/canal-tour-santa-margarita',
      es: 'https://www.experienceboat.es/experiencias-barco-roses/canal-tour-santa-margarita',
      ca: 'https://www.experienceboat.es/ca/experiencies-vaixell-roses/canal-tour-santa-margarida',
      fr: 'https://www.experienceboat.es/fr/experiences-bateau-roses/canal-tour-santa-margarita',
      en: 'https://www.experienceboat.es/en/boat-experiences-roses/canal-tour-santa-margarita',
    },
  },
  openGraph: {
    title: 'Canal Tour Santa Margarida a Roses',
    description:
      'Sigueu vosaltres mateixos el capità en aquesta aventura pels canals de Santa Margarida. Passeig de 90 minuts sense necessitat de llicència.',
    url: 'https://www.experienceboat.es/ca/experiencies-vaixell-roses/canal-tour-santa-margarida',
    siteName: 'Experience Boat',
    locale: 'ca_ES',
    type: 'website',
    images: ['/images/hero/hero-1.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/images/hero/hero-1.jpg'],
  },
};

export default function CanalTourSantaMargaridaPage() {
  return (
    <>
      <TouristTripSchema />
      <BreadcrumbSchema />
      <main id="main-content">
        <HeroSection lang="ca" />
        <RegiondoWidget
          widgetId="c17a6fcb-a083-48ba-bb28-0225214443ee"
          title="Reserveu el vostre Canal Tour"
          subtitle="Disponibilitat en temps real. Confirmació immediata."
        />
        <IntroSection lang="ca" />
        <HighlightsSection lang="ca" />
        <ProductBoxSection lang="ca" />
        <MarinaSection lang="ca" />
        <PracticalInfoSection lang="ca" />
        <ReviewsSection />

        {/* Reservation Call to action segment */}
        <section className="py-20 bg-sky-50 border-b border-sky-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-6">
              A punt per navegar?
            </h2>
            <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
              Reserveu la vostra experiència de manera fàcil i ràpida en línia o contactant-nos directament.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/ca/reserves"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full font-bold shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all bg-[var(--nav-accent)] hover:bg-[var(--nav-accent-hover)] text-white"
              >
                Reservar en línia
              </a>
              <a
                href="https://wa.me/34623995700?text=Hola%2C%20vull%20informaci%C3%B3%20sobre%20el%20Canal%20Tour%20Santa%20Margarida"
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full font-bold shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all bg-green-500 hover:bg-green-600 text-white"
              >
                Contactar per WhatsApp
              </a>
            </div>
          </div>
        </section>

        <SiloNavBlock lang="ca" />
      </main>

      <StickyCTA lang="ca" />
    </>
  );
}
