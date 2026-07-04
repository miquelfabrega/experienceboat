import type { Metadata } from 'next';
import HeroSection from '@/components/lancha-roses/HeroSection';
import ProductBoxSection from '@/components/lancha-roses/ProductBoxSection';
import IntroSection from '@/components/lancha-roses/IntroSection';
import HighlightsSection from '@/components/lancha-roses/HighlightsSection';
import MarinaSection from '@/components/lancha-roses/MarinaSection';
import PracticalInfoSection from '@/components/lancha-roses/PracticalInfoSection';
import ReviewsSection from '@/components/canal-tour/ReviewsSection';
import StickyCTA from '@/components/lancha-roses/StickyCTA';
import RegiondoWidget from '@/components/experiencias/RegiondoWidget';
import { buildAlternates } from '@/lib/i18n/routes';

export const dynamic = 'force-static';

const URL = 'https://www.experienceboat.es/en/motorboat-rental-roses';

function ServiceSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Motorboat rental',
    name: 'Motorboat rental in Roses',
    url: URL,
    areaServed: { '@type': 'Place', name: 'Roses, Costa Brava' },
    provider: { '@type': 'LocalBusiness', '@id': 'https://www.experienceboat.es/#local-business' },
    offers: {
      '@type': 'Offer',
      priceCurrency: 'EUR',
      price: '195',
      availability: 'https://schema.org/InStock',
      validFrom: '2026-04-01',
      validThrough: '2026-10-31',
      url: 'https://www.experienceboat.es/en/booking',
    },
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}

function BreadcrumbSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.experienceboat.es/en' },
      { '@type': 'ListItem', position: 2, name: 'Motorboat rental in Roses', item: URL },
    ],
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}

export const metadata: Metadata = {
  title: 'Motorboat rental in Roses',
  description:
    'Fast motorboat rental in Roses with or without skipper. Cap de Creus, coves and bay. Private outings, your group only. Book directly. Costa Brava.',
  alternates: buildAlternates('lanchaRoses', 'en'),
  openGraph: {
    title: 'Motorboat rental in Roses',
    description:
      'Fast motorboat rental in Roses with or without skipper. Cap de Creus, coves and bay. Private outings, your group only. Book directly. Costa Brava.',
    url: URL,
    siteName: 'Experience Boat',
    locale: 'en_GB',
    type: 'website',
    images: ['/images/hero/con-licencia-hero-1320.jpg'],
  },
  twitter: { card: 'summary_large_image', images: ['/images/hero/con-licencia-hero-1320.jpg'] },
};

export default function MotorboatRentalRosesPage() {
  return (
    <>
      <ServiceSchema />
      <BreadcrumbSchema />
      <main id="main-content">
        <HeroSection lang="en" />
        <RegiondoWidget
          widgetId="2ee25594-04e1-46b6-9407-da60041379da"
          title="Book your motorboat"
          subtitle="Real-time availability. Instant confirmation."
        />
        <ProductBoxSection lang="en" />
        <IntroSection lang="en" />
        <HighlightsSection lang="en" />
        <MarinaSection lang="en" />
        <PracticalInfoSection lang="en" />
        <ReviewsSection lang="en" />

        <section className="py-20 bg-sky-50 border-b border-sky-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-6">
              Ready for your day on the water?
            </h2>
            <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
              Book your motorboat online in seconds, or message us on WhatsApp and we&apos;ll help you choose.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#reservar"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full font-bold shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all bg-[var(--nav-accent)] hover:bg-[var(--nav-accent-hover)] text-white"
              >
                Book Online
              </a>
              <a
                href="https://wa.me/34623995700?text=Hello%2C%20I%27d%20like%20to%20rent%20a%20motorboat%20in%20Roses"
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
