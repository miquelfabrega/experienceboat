import type { Metadata } from 'next';
import { buildAlternates } from '@/lib/i18n/routes';
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
import { pillarCa } from '@/lib/data/sin-licencia-ca';

export const dynamic = 'force-static';

/* ─── Metadata & SEO ─────────────────────────────────────────────────────── */

export const metadata: Metadata = {
  title: 'Lloguer de vaixell sense llicència a Roses',
  description:
    'Navega sense llicència ni experiència. Dream Point, Remus o Marine Brezze des de 70€/h. Briefing i assegurança inclosos. Privat, només el teu grup. Roses.',
  alternates: buildAlternates('rentalWithoutLicence', 'ca'),
  openGraph: {
    title: 'Lloguer de vaixell sense llicència a Roses',
    description:
      'Navega sense llicència ni experiència. Dream Point, Remus o Marine Brezze des de 70€/h. Briefing i assegurança inclosos. Privat, només el teu grup. Roses.',
    url: 'https://www.experienceboat.es/ca/lloguer-vaixell-sense-llicencia-roses',
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

/* ─── FAQ Schema ─────────────────────────────────────────────────────────── */

function FAQSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: pillarCa.faq.faqs.map((faq) => ({
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
        name: 'Inici',
        item: 'https://www.experienceboat.es/ca',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Lloguer de vaixell sense llicència a Roses',
        item: 'https://www.experienceboat.es/ca/lloguer-vaixell-sense-llicencia-roses',
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

export default function LloguerVaixellSenseLlicenciaRosesPage() {
  return (
    <>
      <FAQSchema />
      <BreadcrumbSchema />
      <main id="main-content">
        <HeroSection t={pillarCa.hero} />
        <IntroSection t={pillarCa.intro} />
        <BoatGrid t={pillarCa.boatGrid} lang="ca" />
        <DestinationsSection t={pillarCa.destinations} />
        <WhyUsSection t={pillarCa.whyUs} />
        <PracticalInfoSection t={pillarCa.practicalInfo} />
        <InternalLinksSection t={pillarCa.internalLinks} />
        <ReviewsSection t={pillarCa.reviews} />
        <ContactSection t={pillarCa.contact} />
        <FAQSection t={pillarCa.faq} />
        <SiloNavBlock silo="sin-licencia" lang="ca" />
      </main>
      <StickyMobileCTA t={pillarCa.stickyCTA} />
    </>
  );
}
