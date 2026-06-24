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

const URL = 'https://www.experienceboat.es/ca/lloguer-llanxa-roses';

function ServiceSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Lloguer de llanxa',
    name: 'Lloguer de llanxa a Roses',
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
      url: 'https://www.experienceboat.es/ca/reserves',
    },
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}

function BreadcrumbSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Inici', item: 'https://www.experienceboat.es/ca' },
      { '@type': 'ListItem', position: 2, name: 'Lloguer de llanxa a Roses', item: URL },
    ],
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}

export const metadata: Metadata = {
  title: 'Lloguer de llanxa a Roses — Experience Boat',
  description:
    'Lloga una llanxa amb llicència a Roses i recorre la badia i el Cap de Creus. Flota de 115 a 250 CV, fins a 12 persones. Reserva en línia. Des de 195 €.',
  alternates: buildAlternates('lanchaRoses', 'ca'),
  openGraph: {
    title: 'Lloguer de llanxa a Roses — Experience Boat',
    description:
      'Lloga una llanxa amb llicència a Roses i recorre la badia i el Cap de Creus. Flota potent, fins a 12 persones. Des de 195 €.',
    url: URL,
    siteName: 'Experience Boat',
    locale: 'ca_ES',
    type: 'website',
    images: ['/images/hero/con-licencia-hero-1320.jpg'],
  },
  twitter: { card: 'summary_large_image', images: ['/images/hero/con-licencia-hero-1320.jpg'] },
};

export default function LloguerLlanxaRosesPage() {
  return (
    <>
      <ServiceSchema />
      <BreadcrumbSchema />
      <main id="main-content">
        <HeroSection lang="ca" />
        <RegiondoWidget
          widgetId="2ee25594-04e1-46b6-9407-da60041379da"
          title="Reserva la teva llanxa"
          subtitle="Disponibilitat en temps real. Confirmació immediata."
        />
        <ProductBoxSection lang="ca" />
        <IntroSection lang="ca" />
        <HighlightsSection lang="ca" />
        <MarinaSection lang="ca" />
        <PracticalInfoSection lang="ca" />
        <ReviewsSection lang="ca" />

        <section className="py-20 bg-sky-50 border-b border-sky-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-6">
              A punt per al teu dia en llanxa?
            </h2>
            <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
              Reserva la teva llanxa en línia en segons, o escriu-nos per WhatsApp i t&apos;ajudem a triar.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#reservar"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full font-bold shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all bg-[var(--nav-accent)] hover:bg-[var(--nav-accent-hover)] text-white"
              >
                Reservar en línia
              </a>
              <a
                href="https://wa.me/34623995700?text=Hola%2C%20vull%20llogar%20una%20llanxa%20a%20Roses"
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full font-bold shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all bg-green-500 hover:bg-green-600 text-white"
              >
                Contactar per WhatsApp
              </a>
            </div>
          </div>
        </section>
      </main>

      <StickyCTA lang="ca" />
    </>
  );
}
