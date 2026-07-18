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
    answer:
      'Oui : masque, tuba et palmes pour chaque passager, en plusieurs tailles. Gilets de sauvetage et assurance RC compris, avec un briefing de sécurité avant chaque arrêt.',
  },
  {
    question: 'Est-ce adapté aux débutants ?',
    answer:
      'Tout à fait. Nous choisissons des criques calmes et peu profondes, et la sortie convient aux enfants dès 6 ans sous surveillance. Prévoyez serviette, crème solaire et eau ; les départs dépendent de l’état de la mer.',
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
            Grottes marines du Cap de Creus et arrêts snorkeling guidés — matériel inclus
          </p>
        </div>
      </section>

      {/* INTRO */}
      <section className="max-w-4xl mx-auto px-4 py-16 text-center">
        <h2 className="text-3xl font-bold mb-6 text-slate-900">
          Un monde sous l’eau
        </h2>
        <p className="text-lg text-slate-600 leading-relaxed">
          Le bateau se glisse dans des grottes marines et sous des arches rocheuses
          du Cap de Creus accessibles uniquement par la mer, puis s&rsquo;arrête sur
          les meilleurs fonds de la zone : herbiers de posidonie, poissons et roche.
          Le skipper reste à bord, les arrêts changent selon la mer du jour, et le
          matériel complet de snorkeling est fourni avec le bateau.
        </p>
      </section>

      {/* CTA */}
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Réservez votre sortie
          </h2>
          <p className="text-lg mb-8">
            Le prix dépend de la date et du nombre de personnes — écrivez-nous et
            nous confirmons la disponibilité tout de suite.
          </p>
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
