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

const URL = 'https://www.experienceboat.es/fr/location-vedette-roses';

function ServiceSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Location de vedette',
    name: 'Location de vedette à Roses',
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
      url: 'https://www.experienceboat.es/fr/reservation',
    },
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}

function BreadcrumbSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://www.experienceboat.es/fr' },
      { '@type': 'ListItem', position: 2, name: 'Location de vedette à Roses', item: URL },
    ],
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}

export const metadata: Metadata = {
  title: 'Location de vedette à Roses — Experience Boat',
  description:
    'Louez une vedette avec permis à Roses et explorez la baie et le Cap de Creus. Flotte de 115 à 250 CV, jusqu’à 12 personnes. Réservation en ligne. Dès 195 €.',
  alternates: buildAlternates('lanchaRoses', 'fr'),
  openGraph: {
    title: 'Location de vedette à Roses — Experience Boat',
    description:
      'Louez une vedette avec permis à Roses et explorez la baie et le Cap de Creus. Flotte puissante, jusqu’à 12 personnes. Dès 195 €.',
    url: URL,
    siteName: 'Experience Boat',
    locale: 'fr_FR',
    type: 'website',
    images: ['/images/hero/con-licencia-hero-1320.jpg'],
  },
  twitter: { card: 'summary_large_image', images: ['/images/hero/con-licencia-hero-1320.jpg'] },
};

export default function LocationVedetteRosesPage() {
  return (
    <>
      <ServiceSchema />
      <BreadcrumbSchema />
      <main id="main-content">
        <HeroSection lang="fr" />
        <RegiondoWidget
          widgetId="2ee25594-04e1-46b6-9407-da60041379da"
          title="Réservez votre vedette"
          subtitle="Disponibilité en temps réel. Confirmation immédiate."
        />
        <ProductBoxSection lang="fr" />
        <IntroSection lang="fr" />
        <HighlightsSection lang="fr" />
        <MarinaSection lang="fr" />
        <PracticalInfoSection lang="fr" />
        <ReviewsSection lang="fr" />

        <section className="py-20 bg-sky-50 border-b border-sky-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-6">
              Prêt pour votre journée en mer ?
            </h2>
            <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
              Réservez votre vedette en ligne en quelques secondes, ou écrivez-nous sur WhatsApp et nous vous aidons à choisir.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#reservar"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full font-bold shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all bg-[var(--nav-accent)] hover:bg-[var(--nav-accent-hover)] text-white"
              >
                Réserver en ligne
              </a>
              <a
                href="https://wa.me/34623995700?text=Bonjour%2C%20je%20souhaite%20louer%20une%20vedette%20%C3%A0%20Roses"
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
