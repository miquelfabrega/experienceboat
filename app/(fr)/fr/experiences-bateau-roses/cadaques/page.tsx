import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Excursion en Bateau à Cadaqués | ExperienceBoat',
  description:
    'Rejoignez Cadaqués en naviguant depuis Roses. Une excursion en bateau autour du Cap de Creus jusqu’au village le plus bohème de la Costa Brava.',
  keywords: [
    'excursion bateau Cadaqués',
    'bateau Roses Cadaqués',
    'balade en bateau Roses',
  ],
  alternates: {
    canonical: 'https://www.experienceboat.es/fr/experiences-bateau-roses/cadaques',
    languages: {
      'x-default': 'https://www.experienceboat.es/experiencias-barco-roses/cadaques',
      es: 'https://www.experienceboat.es/experiencias-barco-roses/cadaques',
      ca: 'https://www.experienceboat.es/ca/experiencies-vaixell-roses/cadaques',
      fr: 'https://www.experienceboat.es/fr/experiences-bateau-roses/cadaques',
      en: 'https://www.experienceboat.es/en/boat-experiences-roses/cadaques',
    },
  },
  openGraph: {
    title: 'Excursion en Bateau à Cadaqués | ExperienceBoat',
    description:
      'Rejoignez Cadaqués en naviguant depuis Roses. Une excursion en bateau autour du Cap de Creus jusqu’au village le plus bohème de la Costa Brava.',
    url: 'https://www.experienceboat.es/fr/experiences-bateau-roses/cadaques',
    locale: 'fr_FR',
    type: 'website',
  },
};

const faqs = [
  {
    question: 'Combien de temps pour rejoindre Cadaqués ?',
    answer:
      'Environ 45 minutes de navigation depuis Roses, en longeant le Cap de Creus.',
  },
  {
    question: 'Y a-t-il du temps pour visiter le village ?',
    answer:
      'Oui, nous faisons une halte pour que vous puissiez vous promener dans Cadaqués et profiter de son charme.',
  },
];

export default function CadaquesPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* HERO */}
      <section className="relative h-[70vh] min-h-[500px] w-full overflow-hidden">
        <Image
          src="/cadaques/port-lligat.webp"
          alt="Excursion en bateau à Cadaqués"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
            Excursion à Cadaqués
          </h1>
          <p className="text-lg md:text-2xl max-w-2xl drop-shadow-md">
            Naviguez jusqu’au village le plus bohème de la Costa Brava
          </p>
        </div>
      </section>

      {/* INTRO */}
      <section className="max-w-4xl mx-auto px-4 py-16 text-center">
        <h2 className="text-3xl font-bold mb-6 text-slate-900">
          Le refuge de Dalí
        </h2>
        <p className="text-lg text-slate-600 leading-relaxed">
          Cadaqués a séduit Salvador Dalí et séduit tous ceux qui y arrivent.
          Y aller en bateau est la plus belle façon de découvrir ce coin unique,
          entre montagnes et mer.
        </p>
      </section>

      {/* CTA */}
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Réservez votre traversée</h2>
          <p className="text-lg mb-8">Cadaqués vous attend par la mer.</p>
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
