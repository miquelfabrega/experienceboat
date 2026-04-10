import type { Metadata } from 'next';
import HeroSection from '@/components/pillar-sin-licencia/HeroSection';
import IntroSection from '@/components/pillar-sin-licencia/IntroSection';
import BoatGrid from '@/components/pillar-sin-licencia/BoatGrid';
import DestinationsSection from '@/components/pillar-sin-licencia/DestinationsSection';
import WhyUsSection from '@/components/pillar-sin-licencia/WhyUsSection';
import PracticalInfoSection from '@/components/pillar-sin-licencia/PracticalInfoSection';
import InternalLinksSection from '@/components/pillar-sin-licencia/InternalLinksSection';
import ReviewsSection from '@/components/pillar-sin-licencia/ReviewsSection';
import ContactSection from '@/components/pillar-sin-licencia/ContactSection';
import FAQSection from '@/components/pillar-sin-licencia/FAQSection';
import StickyMobileCTA from '@/components/pillar-sin-licencia/StickyMobileCTA';
import SiloNavBlock from '@/components/SiloNavBlock';
import { pillarFr } from '@/lib/data/sin-licencia-fr';

export const dynamic = 'force-static';

/* ─── Metadata & SEO ─────────────────────────────────────────────────────── */

export const metadata: Metadata = {
title: 'Location de bateau sans permis à Roses',
  description:
    'Louez un bateau sans permis à Roses et naviguez dans la baie, les canaux de Santa Margarita et le Cap de Creus. Sans expérience préalable. Tout privatif. Réservez dès maintenant.',
  alternates: {
    canonical: 'https://experienceboat.es/fr/location-bateau-sans-permis-roses',
    languages: {
      'x-default': 'https://experienceboat.es/alquiler-barco-sin-licencia-roses',
      es: 'https://experienceboat.es/alquiler-barco-sin-licencia-roses',
      fr: 'https://experienceboat.es/fr/location-bateau-sans-permis-roses',
      en: 'https://experienceboat.es/en/boat-rental-without-licence-roses',
    },
  },
  openGraph: {
title: 'Location de bateau sans permis à Roses',
    description:
      'Louez un bateau sans permis à Roses et naviguez dans la baie, les canaux de Santa Margarita et le Cap de Creus. Sans expérience préalable. Tout privatif.',
    url: 'https://experienceboat.es/fr/location-bateau-sans-permis-roses',
    siteName: 'Experience Boat',
    locale: 'fr_FR',
    type: 'website',
  },
};

/* ─── FAQ Schema ─────────────────────────────────────────────────────────── */

function FAQSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: pillarFr.faq.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}

/* ─── BreadcrumbList Schema ───────────────────────────────────────────────── */

function BreadcrumbSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Accueil',
        item: 'https://experienceboat.es/fr',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Location de bateau sans permis à Roses',
        item: 'https://experienceboat.es/fr/location-bateau-sans-permis-roses',
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

export default function LocationBateauSansPermisPage() {
  return (
    <>
      <FAQSchema />
      <BreadcrumbSchema />
      <main id="main-content">
        <HeroSection t={pillarFr.hero} />
        <IntroSection t={pillarFr.intro} />
        <BoatGrid t={pillarFr.boatGrid} />
        <DestinationsSection t={pillarFr.destinations} />
        <WhyUsSection t={pillarFr.whyUs} />
        <PracticalInfoSection t={pillarFr.practicalInfo} />
        <InternalLinksSection t={pillarFr.internalLinks} />
        <ReviewsSection t={pillarFr.reviews} />
        <ContactSection t={pillarFr.contact} />
        <FAQSection t={pillarFr.faq} />
        <SiloNavBlock />
      </main>
      <StickyMobileCTA t={pillarFr.stickyCTA} />
    </>
  );
}
