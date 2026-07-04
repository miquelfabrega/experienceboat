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

const URL = 'https://www.experienceboat.es/alquiler-lancha-roses';

function ServiceSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Alquiler de lancha',
    name: 'Alquiler de lancha en Roses',
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
      url: 'https://www.experienceboat.es/reservas',
    },
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}

function BreadcrumbSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Inicio', item: 'https://www.experienceboat.es' },
      { '@type': 'ListItem', position: 2, name: 'Alquiler de lancha en Roses', item: URL },
    ],
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}

export const metadata: Metadata = {
  title: 'Alquiler de lancha en Roses',
  description:
    'Alquiler de lancha rápida en Roses con o sin patrón. Cap de Creus, calas y bahía. Salidas privadas, solo tu grupo. Reserva directa. Costa Brava.',
  alternates: buildAlternates('lanchaRoses', 'es'),
  openGraph: {
    title: 'Alquiler de lancha en Roses',
    description:
      'Alquiler de lancha rápida en Roses con o sin patrón. Cap de Creus, calas y bahía. Salidas privadas, solo tu grupo. Reserva directa. Costa Brava.',
    url: URL,
    siteName: 'Experience Boat',
    locale: 'es_ES',
    type: 'website',
    images: ['/images/hero/con-licencia-hero-1320.jpg'],
  },
  twitter: { card: 'summary_large_image', images: ['/images/hero/con-licencia-hero-1320.jpg'] },
};

export default function AlquilerLanchaRosesPage() {
  return (
    <>
      <ServiceSchema />
      <BreadcrumbSchema />
      <main id="main-content">
        <HeroSection lang="es" />
        <RegiondoWidget
          widgetId="2ee25594-04e1-46b6-9407-da60041379da"
          title="Reserva tu lancha"
          subtitle="Disponibilidad en tiempo real. Confirmación inmediata."
        />
        <ProductBoxSection lang="es" />
        <IntroSection lang="es" />
        <HighlightsSection lang="es" />
        <MarinaSection lang="es" />
        <PracticalInfoSection lang="es" />
        <ReviewsSection lang="es" />

        <section className="py-20 bg-sky-50 border-b border-sky-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-6">
              ¿Listo para tu día en lancha?
            </h2>
            <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
              Reserva tu lancha online en segundos o escríbenos por WhatsApp y te ayudamos a elegir.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#reservar"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full font-bold shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all bg-[var(--nav-accent)] hover:bg-[var(--nav-accent-hover)] text-white"
              >
                Reservar Online
              </a>
              <a
                href="https://wa.me/34623995700?text=Hola%2C%20quiero%20alquilar%20una%20lancha%20en%20Roses"
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full font-bold shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all bg-green-500 hover:bg-green-600 text-white"
              >
                Contactar por WhatsApp
              </a>
            </div>
          </div>
        </section>
      </main>

      <StickyCTA lang="es" />
    </>
  );
}
