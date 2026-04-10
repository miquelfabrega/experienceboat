import type { Metadata } from 'next';
import Link from 'next/link';
import { Mail, MapPin, Phone, Clock } from 'lucide-react';

export const dynamic = 'force-static';

const GOOGLE_FORM_EMBED_URL =
  'https://docs.google.com/forms/d/e/1FAIpQLSdCwfeIbzLGgn9ZOOS_VjvfMQukSazdarJJvKj1J9lqUssISw/viewform?embedded=true';

export const metadata: Metadata = {
  title: 'Contactez Experience Boat — Location de bateaux à Roses',
  description:
    'Contactez-nous pour réserver votre bateau à Roses ou résoudre toute question. Nous sommes à la Marina de Santa Margarita. Réponse en moins de 24 heures.',
  alternates: {
    canonical: 'https://experienceboat.es/fr/contact',
    languages: {
      'x-default': 'https://experienceboat.es/contacto',
      es: 'https://experienceboat.es/contacto',
      fr: 'https://experienceboat.es/fr/contact',
      en: 'https://experienceboat.es/en/contact',
    },
  },
  openGraph: {
    title: 'Contactez Experience Boat — Location de bateaux à Roses',
    description:
      'Contactez-nous pour réserver votre bateau à Roses ou résoudre toute question. Nous sommes à la Marina de Santa Margarita. Réponse en moins de 24 heures.',
    url: 'https://experienceboat.es/fr/contact',
    siteName: 'Experience Boat',
    locale: 'fr_FR',
    type: 'website',
  },
};

/* ─── Schema: BreadcrumbList ──────────────────────────────────────────────── */

function BreadcrumbSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://experienceboat.es/fr' },
      { '@type': 'ListItem', position: 2, name: 'Contact', item: 'https://experienceboat.es/fr/contact' },
    ],
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}

export default function ContactFrPage() {
  return (
    <>
      <BreadcrumbSchema />
      <main id="main-content" className="bg-white min-h-[70vh]">
        <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

            {/* Colonne gauche : textes et coordonnées */}
            <div>
              <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
                Contactez-nous, parlons-en.
              </h1>
              <p className="text-lg text-gray-600 mb-12">
                Si vous avez des questions sur nos bateaux, souhaitez faire une réservation ou ne
                savez tout simplement pas par où commencer, écrivez-nous. Nous répondons rapidement.
              </p>

              <ul className="space-y-8">
                <li className="flex gap-4 items-start">
                  <Phone className="w-6 h-6 text-sky-600 shrink-0 mt-1" aria-hidden />
                  <div>
                    <p className="font-semibold text-gray-900 text-lg">Téléphone / WhatsApp</p>
                    <a href="tel:+34623995700" className="text-sky-600 hover:text-sky-700 font-medium text-lg block mt-1">
                      +34 623 99 57 00
                    </a>
                    <p className="text-sm text-gray-500 mt-1">Disponible de 9 h à 20 h · Saison avril–octobre</p>
                  </div>
                </li>

                <li className="flex gap-4 items-start">
                  <Mail className="w-6 h-6 text-sky-600 shrink-0 mt-1" aria-hidden />
                  <div>
                    <p className="font-semibold text-gray-900 text-lg">Email</p>
                    <a href="mailto:info@experienceboat.es" className="text-sky-600 hover:text-sky-700 font-medium text-lg block mt-1">
                      info@experienceboat.es
                    </a>
                  </div>
                </li>

                <li className="flex gap-4 items-start">
                  <MapPin className="w-6 h-6 text-sky-600 shrink-0 mt-1" aria-hidden />
                  <div>
                    <p className="font-semibold text-gray-900 text-lg">Où nous trouver</p>
                    <p className="text-gray-600 mt-1 leading-relaxed">
                      Marina de Santa Margarita<br />
                      Roses, 17480 · Girona
                    </p>
                  </div>
                </li>

                <li className="flex gap-4 items-start">
                  <Clock className="w-6 h-6 text-sky-600 shrink-0 mt-1" aria-hidden />
                  <div>
                    <p className="font-semibold text-gray-900 text-lg">Horaires</p>
                    <p className="text-gray-600 mt-1 leading-relaxed">
                      Lundi au dimanche · 9 h – 20 h<br />
                      <span className="text-sm text-gray-500">(haute saison)</span>
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Colonne droite : formulaire */}
            <div className="bg-gray-50 rounded-2xl p-4 sm:p-5 lg:p-6 border border-gray-100 shadow-sm flex flex-col gap-3">
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-1">Envoyez-nous un message</h2>
                <p className="text-sm text-gray-600">
                  Remplissez le formulaire et nous vous répondrons rapidement. Vous pouvez aussi{' '}
                  <a
                    href="https://wa.me/34623995700?text=Bonjour%2C%20je%20voudrais%20des%20informations%20sur%20Experience%20Boat"
                    className="text-sky-600 hover:text-sky-700 font-medium"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    nous écrire sur WhatsApp
                  </a>
                  .
                </p>
              </div>

              <div className="w-full overflow-hidden rounded-xl bg-white border border-gray-200 shadow-sm">
                <iframe
                  src={GOOGLE_FORM_EMBED_URL}
                  title="Formulaire de contact — Coordonnées (Google Forms)"
                  width="100%"
                  height={600}
                  className="block w-full border-0"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <p className="text-center text-sm">
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSdCwfeIbzLGgn9ZOOS_VjvfMQukSazdarJJvKj1J9lqUssISw/viewform"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-600 hover:text-sky-700 underline"
                >
                  Ouvrir le formulaire dans un nouvel onglet
                </a>
              </p>

              <p className="text-xs text-gray-500">
                L&apos;envoi est géré via Google Forms. Consultez notre{' '}
                <Link href="/politica-privacidad" className="underline hover:text-gray-800 focus:outline-none focus:ring-2 focus:ring-sky-600 focus:ring-offset-2">
                  politique de confidentialité
                </Link>
                .
              </p>

              <div className="pt-4 border-t border-gray-200">
                <p className="text-sm text-gray-600">
                  Vous préférez appeler directement ? Pas de problème. Nous sommes au ponton et nous
                  aimons parler avec les gens avant qu&apos;ils montent à bord.
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* Carte */}
        <section className="w-full bg-gray-100" aria-label="Carte Experience Boat">
          <div className="relative w-full h-[min(60vh,600px)] min-h-[400px] sm:min-h-[500px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7308.478698802148!2d3.1348328814582076!3d42.26846554393358!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12ba61c342377651%3A0xc63a24431ee4a6c8!2sExperience%20Boat!5e0!3m2!1ses!2ses!4v1775514197510!5m2!1ses!2ses"
              title="Localisation d'Experience Boat sur Google Maps"
              aria-label="Carte interactive avec la localisation d'Experience Boat"
              className="absolute inset-0 block h-full w-full border-0"
              style={{ border: 0 }}
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              allow="fullscreen; geolocation"
            />
          </div>
        </section>
      </main>
    </>
  );
}
