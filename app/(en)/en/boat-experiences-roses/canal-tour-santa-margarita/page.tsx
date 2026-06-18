import type { Metadata } from 'next';
import HeroSection from '@/components/canal-tour/HeroSection';
import IntroSection from '@/components/canal-tour/IntroSection';
import HighlightsSection from '@/components/canal-tour/HighlightsSection';
import ProductBoxSection from '@/components/canal-tour/ProductBoxSection';
import MarinaSection from '@/components/canal-tour/MarinaSection';
import PracticalInfoSection from '@/components/canal-tour/PracticalInfoSection';
import ReviewsSection from '@/components/canal-tour/ReviewsSection';
import StickyCTA from '@/components/canal-tour/StickyCTA';
import RegiondoWidget from '@/components/experiencias/RegiondoWidget';

export const dynamic = 'force-static';

/* ─── Metadata & SEO ─────────────────────────────────────────────────────── */

export const metadata: Metadata = {
title: 'Canal Tour Santa Margarita in Roses',
  description:
    'Be the captain in this adventure through the Santa Margarita canals. 90-minute boat tour with no boat licence required.',
  alternates: {
    canonical: 'https://www.experienceboat.es/en/boat-experiences-roses/canal-tour-santa-margarita',
    languages: {
      'x-default': 'https://www.experienceboat.es/experiencias-barco-roses/canal-tour-santa-margarita',
      es: 'https://www.experienceboat.es/experiencias-barco-roses/canal-tour-santa-margarita',
      fr: 'https://www.experienceboat.es/fr/experiences-bateau-roses/canal-tour-santa-margarita',
      en: 'https://www.experienceboat.es/en/boat-experiences-roses/canal-tour-santa-margarita',
    },
  },
  openGraph: {
title: 'Canal Tour Santa Margarita in Roses',
    description:
      'Be the captain in this adventure through the Santa Margarita canals. 90-minute boat tour with no boat licence required.',
    url: 'https://www.experienceboat.es/en/boat-experiences-roses/canal-tour-santa-margarita',
    siteName: 'Experience Boat',
    locale: 'en_GB',
    type: 'website',
    images: ['/images/hero/hero-1.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/images/hero/hero-1.jpg'],
  },
};

/* ─── TouristTrip Schema ─────────────────────────────────────────────────── */

function TouristTripSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'TouristTrip',
    '@id': 'https://www.experienceboat.es/en/boat-experiences-roses/canal-tour-santa-margarita',
    name: 'Canal Tour Santa Margarita — licence-free boat trip in Roses',
    url: 'https://www.experienceboat.es/en/boat-experiences-roses/canal-tour-santa-margarita',
    description: '90-minute licence-free boat trip through the Santa Margarita canals in Roses. Mercury 15 HP engine, 4-6 seats. No experience required.',
    duration: 'PT1H30M',
    inLanguage: 'en',
    provider: {
    '@type': 'LocalBusiness',
    '@id': 'https://www.experienceboat.es/#local-business',
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
      url: 'https://www.experienceboat.es/en/booking',
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

/* ─── Breadcrumb Schema ───────────────────────────────────────────────────── */

function BreadcrumbSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://www.experienceboat.es/en',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Boat Experiences in Roses',
        item: 'https://www.experienceboat.es/en/boat-experiences-roses',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Canal Tour Santa Margarita',
        item: 'https://www.experienceboat.es/en/boat-experiences-roses/canal-tour-santa-margarita',
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

/* ─── Page ────────────────────────────────────────────────────────────────── */

export default function CanalTourEnPage() {
  return (
    <>
      <TouristTripSchema />
      <BreadcrumbSchema />

      <main id="main-content">
        <HeroSection lang="en" />
        <RegiondoWidget
          widgetId="c17a6fcb-a083-48ba-bb28-0225214443ee"
          title="Book your Canal Tour"
          subtitle="Real-time availability. Instant confirmation."
        />
        <IntroSection lang="en" />
        <HighlightsSection lang="en" />
        <ProductBoxSection lang="en" />
        <MarinaSection lang="en" />
        <PracticalInfoSection lang="en" />
        <ReviewsSection lang="en" />

        <section className="py-20 bg-sky-50 border-b border-sky-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-6">
              Ready to sail?
            </h2>
            <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
              Book your experience easily online or get in touch with us directly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#reservar"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full font-bold shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all bg-[var(--nav-accent)] hover:bg-[var(--nav-accent-hover)] text-white"
              >
                Book Online
              </a>
              <a
                href="https://wa.me/34623995700?text=Hello%2C%20I%27d%20like%20information%20about%20the%20Canal%20Tour%20Santa%20Margarita"
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full font-bold shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all bg-green-500 hover:bg-green-600 text-white"
              >
                Contact via WhatsApp
              </a>
            </div>
          </div>
        </section>
      </main>

      <StickyCTA lang="en" />
    </>
  );
}
