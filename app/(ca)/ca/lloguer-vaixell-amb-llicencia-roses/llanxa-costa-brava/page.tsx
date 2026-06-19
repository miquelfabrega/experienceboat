import type { Metadata } from 'next';
import { buildAlternates } from '@/lib/i18n/routes';
import HeroLancha from '@/components/lancha/HeroLancha';
import IntroLancha from '@/components/lancha/IntroLancha';
import ProfileSelectorCards from '@/components/lancha/ProfileSelectorCards';
import TipoLanchaSection from '@/components/lancha/TipoLanchaSection';
import PorQueRosesSection from '@/components/lancha/PorQueRosesSection';
import RouteTimeline from '@/components/lancha/RouteTimeline';
import InfoPracticaSection from '@/components/lancha/InfoPracticaSection';
import PricingTable from '@/components/lancha/PricingTable';
import FAQAccordion from '@/components/lancha/FAQAccordion';
import CtaFinSection from '@/components/lancha/CtaFinSection';
import SiloNavBlock from '@/components/SiloNavBlock';
import StickyCtaLancha from '@/components/lancha/StickyCtaLancha';
import { faqsLanchaCa } from '@/components/lancha/faq-data';

export const dynamic = 'force-static';

/* ─── Metadata ────────────────────────────────────────────────────────────── */

export const metadata: Metadata = {
  title: 'Lloguer de llanxa a la Costa Brava — Roses',
  description:
    'Llogueu una llanxa a la Costa Brava des de Santa Margarida, Roses. Amb llicència o patró. Accés directe al Cap de Creus i la badia. Reserveu la vostra sortida.',
  keywords: [
    'lloguer llanxa Costa Brava',
    'llanxa Roses',
    'lloguer llanxa a motor',
    'llanxa amb llicència',
  ],
  alternates: buildAlternates('rentalLicenceMotorboat', 'ca'),
  openGraph: {
    title: 'Lloguer de llanxa a la Costa Brava — Roses',
    description:
      'Llogueu una llanxa a la Costa Brava des de Santa Margarida, Roses. Amb llicència o patró. Accés directe al Cap de Creus i la badia.',
    url: 'https://www.experienceboat.es/ca/lloguer-vaixell-amb-llicencia-roses/llanxa-costa-brava',
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

/* ─── Schema: BreadcrumbList ──────────────────────────────────────────────── */

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
        name: 'Lloguer vaixell amb llicència Roses',
        item: 'https://www.experienceboat.es/ca/lloguer-vaixell-amb-llicencia-roses',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Lloguer de llanxa a la Costa Brava',
        item: 'https://www.experienceboat.es/ca/lloguer-vaixell-amb-llicencia-roses/llanxa-costa-brava',
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

/* ─── Schema: FAQPage ─────────────────────────────────────────────────────── */

function FAQSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqsLanchaCa.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

/* ─── Schema: Service ─────────────────────────────────────────────────────── */

function ProductSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Boat rental',
    name: 'Lloguer de llanxa a la Costa Brava — Roses',
    description:
      'Lloguer de llanxa des dels canals de Santa Margarida a Roses, Costa Brava nord. Amb llicència o amb patró inclòs.',
    provider: {
      '@type': 'LocalBusiness',
      '@id': 'https://www.experienceboat.es/#local-business',
      name: 'Experience Boat',
    },
    areaServed: {
      '@type': 'Place',
      name: 'Roses, Costa Brava',
    },
    offers: [
      {
        '@type': 'AggregateOffer',
        name: 'Llanxa amb llicència (sense patró)',
        lowPrice: 200,
        highPrice: 350,
        priceCurrency: 'EUR',
        offerCount: 2,
        description: 'Lloguer de llanxa amb llicència a la Costa Brava, mitja jornada o jornada completa des de Santa Margarida, Roses.',
      },
      {
        '@type': 'AggregateOffer',
        name: 'Llanxa amb patró — Pneumàtica',
        lowPrice: 300,
        highPrice: 600,
        priceCurrency: 'EUR',
        offerCount: 2,
        description: 'Excursió privada en pneumàtica amb patró inclòs des de Santa Margarida, Roses. Sense titulació necessària.',
      },
      {
        '@type': 'AggregateOffer',
        name: 'Llanxa amb patró — Embarcació Premium',
        lowPrice: 600,
        highPrice: 1200,
        priceCurrency: 'EUR',
        offerCount: 2,
        description: 'Excursió privada en llanxa premium amb patró inclòs des de Santa Margarida, Roses. Sense titulació necessària.',
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

/* ─── Schema: LocalBusiness ───────────────────────────────────────────────── */

function LocalBusinessSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Experience Boat',
    url: 'https://www.experienceboat.es',
    telephone: '+34623995700',
    email: 'info@experienceboat.es',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Av. Clot Franquest Nord',
      addressLocality: 'Roses',
      postalCode: '17480',
      addressRegion: 'Girona',
      addressCountry: 'ES',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 42.2558,
      longitude: 3.1734,
    },
    priceRange: '€€',
    openingHours: 'Mo-Su 08:00-20:00',
    areaServed: {
      '@type': 'GeoCircle',
      geoMidpoint: {
        '@type': 'GeoCoordinates',
        latitude: 42.2558,
        longitude: 3.1734,
      },
      geoRadius: '30000',
    },
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

/* ─── Page ────────────────────────────────────────────────────────────────── */

export default function LlanxaCostaBravaPage() {
  const lang = 'ca' as const;

  return (
    <>
      {/* Schema Markup */}
      <BreadcrumbSchema />
      <FAQSchema />
      <ProductSchema />
      <LocalBusinessSchema />

      <main id="main-content">
        <HeroLancha lang={lang} />
        <IntroLancha lang={lang} />
        <ProfileSelectorCards lang={lang} />
        <TipoLanchaSection lang={lang} />
        <PorQueRosesSection lang={lang} />
        <RouteTimeline lang={lang} />
        <InfoPracticaSection lang={lang} />
        <PricingTable lang={lang} />
        <FAQAccordion lang={lang} />
        <CtaFinSection lang={lang} />
        <SiloNavBlock
          silo="licencia"
          lang="ca"
          currentPath="/ca/lloguer-vaixell-amb-llicencia-roses/llanxa-costa-brava"
        />
      </main>

      <StickyCtaLancha lang={lang} />
    </>
  );
}
