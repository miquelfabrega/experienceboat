import type { Metadata } from 'next';
import HeroSection from '@/components/canal-tour/HeroSection';
import IntroSection from '@/components/canal-tour/IntroSection';
import HighlightsSection from '@/components/canal-tour/HighlightsSection';
import ProductBoxSection from '@/components/canal-tour/ProductBoxSection';
import MarinaSection from '@/components/canal-tour/MarinaSection';
import PracticalInfoSection from '@/components/canal-tour/PracticalInfoSection';
import StickyCTA from '@/components/canal-tour/StickyCTA';

export const dynamic = 'force-static';

/* ─── Metadata & SEO ─────────────────────────────────────────────────────── */

export const metadata: Metadata = {
title: 'Canal Tour Santa Margarita à Roses',
  description:
    'Soyez vous-même le capitaine dans cette aventure sur les canaux de Santa Margarita. Promenade de 90 minutes sans permis nautique requis.',
  alternates: {
    canonical: 'https://www.experienceboat.es/fr/experiences-bateau-roses/canal-tour-santa-margarita',
    languages: {
      'x-default': 'https://www.experienceboat.es/experiencias-barco-roses/canal-tour-santa-margarita',
      es: 'https://www.experienceboat.es/experiencias-barco-roses/canal-tour-santa-margarita',
      fr: 'https://www.experienceboat.es/fr/experiences-bateau-roses/canal-tour-santa-margarita',
      en: 'https://www.experienceboat.es/en/boat-experiences-roses/canal-tour-santa-margarita',
    },
  },
  openGraph: {
title: 'Canal Tour Santa Margarita à Roses',
    description:
      'Soyez vous-même le capitaine dans cette aventure sur les canaux de Santa Margarita. Promenade de 90 minutes sans permis nautique requis.',
    url: 'https://www.experienceboat.es/fr/experiences-bateau-roses/canal-tour-santa-margarita',
    siteName: 'Experience Boat',
    locale: 'fr_FR',
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
    '@id': 'https://www.experienceboat.es/fr/experiences-bateau-roses/canal-tour-santa-margarita',
    name: 'Canal Tour Santa Margarita — bateau sans permis à Roses',
    url: 'https://www.experienceboat.es/fr/experiences-bateau-roses/canal-tour-santa-margarita',
    description: 'Promenade de 90 minutes en bateau sans permis dans les canaux de Santa Margarita à Roses. Moteur Mercury 15 CV, 4 à 6 places. Aucune expérience requise.',
    duration: 'PT1H30M',
    inLanguage: 'fr',
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

/* ─── TouristAttraction Schema ────────────────────────────────────────────── */

function TouristAttractionSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'TouristAttraction',
    name: 'Canal Tour Santa Margarita',
    description: 'Promenade en bateau de 90 minutes sur les canaux de Santa Margarita à Roses, sans permis nautique requis.',
    url: 'https://www.experienceboat.es/fr/experiences-bateau-roses/canal-tour-santa-margarita',
    touristType: 'Famille, Couples, Groupes',
    availableLanguage: ['Espagnol', 'Français', 'Anglais'],
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Av. Clot Franquest Nord',
      addressLocality: 'Roses',
      postalCode: '17480',
      addressRegion: 'Girona',
      addressCountry: 'ES',
    },
    offers: {
      '@type': 'Offer',
      description: 'Bateau sans permis pour 4-6 personnes. Durée 90 minutes.',
      priceCurrency: 'EUR',
      availability: 'https://schema.org/InStock',
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
        name: 'Accueil',
        item: 'https://www.experienceboat.es/fr',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Expériences en bateau à Roses',
        item: 'https://www.experienceboat.es/fr/experiences-bateau-roses',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Canal Tour Santa Margarita',
        item: 'https://www.experienceboat.es/fr/experiences-bateau-roses/canal-tour-santa-margarita',
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

export default function CanalTourFrPage() {
  return (
    <>
      <TouristTripSchema />
      <TouristAttractionSchema />
      <BreadcrumbSchema />

      <main id="main-content">
        <HeroSection lang="fr" />
        <IntroSection lang="fr" />
        <HighlightsSection lang="fr" />
        <ProductBoxSection lang="fr" />
        <MarinaSection lang="fr" />
        <PracticalInfoSection lang="fr" />

        <section className="py-20 bg-sky-50 border-b border-sky-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-6">
              Prêt à naviguer ?
            </h2>
            <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
              Réservez votre expérience facilement en ligne ou en nous contactant directement.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/reservas"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full font-bold shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all bg-[var(--nav-accent)] hover:bg-[var(--nav-accent-hover)] text-white"
              >
                Réserver en ligne
              </a>
              <a
                href="https://wa.me/34623995700?text=Bonjour%2C%20je%20voudrais%20des%20informations%20sur%20le%20Canal%20Tour%20Santa%20Margarita"
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full font-bold shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all bg-green-500 hover:bg-green-600 text-white"
              >
                Contacter par WhatsApp
              </a>
            </div>
          </div>
        </section>
      </main>

      <StickyCTA lang="fr" />
    </>
  );
}
