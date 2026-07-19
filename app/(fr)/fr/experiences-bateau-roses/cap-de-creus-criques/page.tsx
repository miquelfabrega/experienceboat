import type { Metadata } from 'next';
import { buildAlternates } from '@/lib/i18n/routes';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Cap de Creus et Criques en Bateau | ExperienceBoat',
  description:
    'Naviguez autour du Cap de Creus et découvrez les criques les plus secrètes en bateau depuis Roses. 3 à 5 heures avec trois arrêts baignade dans des criques sans accès routier. Skipper inclus.',
  keywords: [
    'excursion Cap de Creus en bateau',
    'criques Cap de Creus',
    'balade en bateau Roses',
  ],
  alternates: buildAlternates('expCapCreus', 'fr'),
  openGraph: {
    title: 'Cap de Creus et Criques en Bateau | ExperienceBoat',
    description:
      'Naviguez autour du Cap de Creus et découvrez les criques les plus secrètes en bateau depuis Roses. 3 à 5 heures avec trois arrêts baignade dans des criques sans accès routier. Skipper inclus.',
    url: 'https://www.experienceboat.es/fr/experiences-bateau-roses/cap-de-creus-criques',
    locale: 'fr_FR',
    type: 'website',
  },
};

const faqs = [
  {
    question: 'Quelles criques visiterons-nous ?',
    answer:
      'Cela dépend du vent et de la mer du jour : le skipper choisit le côté abrité. Cala Jugadora et Cala Culip reviennent souvent, avec d’autres recoins du Cap de Creus accessibles uniquement en bateau.',
  },
  {
    question: 'Peut-on se baigner ?',
    answer:
      'Oui, la sortie comprend trois arrêts baignade dans des criques sauvages, avec le temps à chaque fois de nager et de faire du snorkeling en eaux cristallines.',
  },
];

export default function CapDeCreusCriquesPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* HERO */}
      <section className="relative h-[70vh] min-h-[500px] w-full overflow-hidden">
        <Image
          src="/images/hero/cap-de-creus-calas-2026.jpg"
          alt="Cap de Creus et criques en bateau"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
            Cap de Creus et Criques
          </h1>
          <p className="text-lg md:text-2xl max-w-2xl drop-shadow-md">
            3 à 5 heures depuis Roses, avec baignade dans trois criques accessibles seulement par la mer
          </p>
        </div>
      </section>

      {/* INTRO */}
      <section className="max-w-4xl mx-auto px-4 py-16 text-center">
        <h2 className="text-3xl font-bold mb-6 text-slate-900">
          Le parc naturel depuis la mer
        </h2>
        <p className="text-lg text-slate-600 leading-relaxed">
          Le Cap de Creus est la pointe la plus orientale de la péninsule Ibérique,
          et ses plus belles criques n&rsquo;ont pas de route pour y descendre.
          Cette sortie guidée dure 3 à 5 heures depuis Roses, avec un skipper
          professionnel qui lit le vent et choisit les trois arrêts baignade du
          jour — roche nue, eau turquoise et, dans la plupart, personne qui arrive
          à pied.
        </p>
      </section>

      {/* CTA */}
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Réservez votre sortie</h2>
          <p className="text-lg mb-8">
            Dès 65 € par personne en basse saison, 75 € en moyenne saison et 80 €
            en haute saison. Boissons et en-cas non compris.
          </p>
          <Link
            href="/fr/reservation"
            className="inline-block bg-white text-blue-600 font-bold px-8 py-4 rounded-full hover:bg-slate-100 transition"
          >
            Réserver
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-4xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-10 text-center text-slate-900">
          Questions fréquentes
        </h2>
        <div className="space-y-6 max-w-3xl mx-auto">
          {faqs.map((f, i) => (
            <div key={i} className="border-b border-slate-200 pb-4">
              <h3 className="font-semibold text-lg text-slate-900 mb-2">
                {f.question}
              </h3>
              <p className="text-slate-600">{f.answer}</p>
            </div>
          ))}
        </div>
      </section>

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqs.map((f) => ({
              '@type': 'Question',
              name: f.question,
              acceptedAnswer: { '@type': 'Answer', text: f.answer },
            })),
          }),
        }}
      />
    </main>
  );
}
