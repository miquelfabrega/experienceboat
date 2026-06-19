import type { Metadata } from 'next';
import { buildAlternates } from '@/lib/i18n/routes';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Grottes et Snorkeling en Bateau à Roses | ExperienceBoat',
  description:
    'Explorez les grottes marines et faites du snorkeling dans les plus belles criques de Roses et du Cap de Creus. Une expérience en bateau pour découvrir les fonds marins.',
  keywords: [
    'snorkeling Roses bateau',
    'grottes marines Cap de Creus',
    'balade en bateau Roses',
  ],
  alternates: buildAlternates('expSnorkel', 'fr'),
  openGraph: {
    title: 'Grottes et Snorkeling en Bateau à Roses | ExperienceBoat',
    description:
      'Explorez les grottes marines et faites du snorkeling dans les plus belles criques de Roses et du Cap de Creus. Une expérience en bateau pour découvrir les fonds marins.',
    url: 'https://www.experienceboat.es/fr/experiences-bateau-roses/grottes-snorkeling',
    locale: 'fr_FR',
    type: 'website',
  },
};

const faqs = [
  {
    question: 'Le matériel de snorkeling est-il inclus ?',
    answer: 'Oui, nous fournissons masque et tuba à tous les passagers.',
  },
  {
    question: 'Est-ce adapté aux débutants ?',
    answer:
      'Tout à fait. Nous choisissons des criques calmes et peu profondes, idéales pour s’initier.',
  },
];

export default function GrottesSnorkelingPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* HERO */}
      <section className="relative h-[70vh] min-h-[500px] w-full overflow-hidden">
        <Image
          src="/images/experiencias/cuevas-snorkel.webp"
          alt="Grottes et snorkeling en bateau à Roses"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
            Grottes et Snorkeling
          </h1>
          <p className="text-lg md:text-2xl max-w-2xl drop-shadow-md">
            Découvrez les fonds marins de la Costa Brava
          </p>
        </div>
      </section>

      {/* INTRO */}
      <section className="max-w-4xl mx-auto px-4 py-16 text-center">
        <h2 className="text-3xl font-bold mb-6 text-slate-900">
          Un monde sous l’eau
        </h2>
        <p className="text-lg text-slate-600 leading-relaxed">
          Les eaux du Cap de Creus cachent des grottes et des fonds pleins de vie.
          Équipez-vous de votre masque et tuba et plongez dans un monde de couleurs
          dans des criques aux eaux transparentes.
        </p>
      </section>

      {/* CTA */}
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Réservez votre aventure sous-marine
          </h2>
          <p className="text-lg mb-8">Les fonds marins vous attendent.</p>
          <Link
            href="/fr/contact"
            className="inline-block bg-white text-blue-600 font-bold px-8 py-4 rounded-full hover:bg-slate-100 transition"
          >
            Réserver
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-4xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-10 text-center text-slate-900">
          Questions Fréquentes
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
