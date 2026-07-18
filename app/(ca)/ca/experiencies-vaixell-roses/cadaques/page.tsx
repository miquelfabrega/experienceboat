import type { Metadata } from 'next';
import { buildAlternates } from '@/lib/i18n/routes';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Excursió en Vaixell a Cadaqués | ExperienceBoat',
  description:
    'Arribeu a Cadaqués navegant des de Roses. Una excursió en vaixell pel Cap de Creus fins al poble més bohemi de la Costa Brava.',
  keywords: [
    'excursió vaixell Cadaqués',
    'vaixell Roses Cadaqués',
    'passeig en vaixell Roses',
  ],
  alternates: buildAlternates('expCadaques', 'ca'),
  openGraph: {
    title: 'Excursió en Vaixell a Cadaqués | ExperienceBoat',
    description:
      'Arribeu a Cadaqués navegant des de Roses. Una excursió en vaixell pel Cap de Creus fins al poble més bohemi de la Costa Brava.',
    url: 'https://www.experienceboat.es/ca/experiencies-vaixell-roses/cadaques',
    locale: 'ca_ES',
    type: 'website',
  },
};

const faqs = [
  {
    question: 'Quant es triga a arribar a Cadaqués?',
    answer:
      'Al voltant d’una hora de navegació per trajecte, segons el mar i el vaixell. Tot el recorregut voreja el Cap de Creus: la travessia ja és part de la sortida.',
  },
  {
    question: 'Hi ha temps per visitar el poble?',
    answer:
      'Sí, la sortida inclou temps lliure a Cadaqués. Prou per passejar pels carrerons blancs, dinar o fer un cafè davant de la badia abans de tornar.',
  },
];

export default function CadaquesPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* HERO */}
      <section className="relative h-[70vh] min-h-[500px] w-full overflow-hidden">
        <Image
          src="/cadaques/port-lligat.webp"
          alt="Excursió en vaixell a Cadaqués"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
            Excursió a Cadaqués
          </h1>
          <p className="text-lg md:text-2xl max-w-2xl drop-shadow-md">
            De Roses al poble de Dalí per mar — al voltant d&rsquo;una hora vorejant el Cap de Creus
          </p>
        </div>
      </section>

      {/* INTRO */}
      <section className="max-w-4xl mx-auto px-4 py-16 text-center">
        <h2 className="text-3xl font-bold mb-6 text-slate-900">
          El refugi de Dalí
        </h2>
        <p className="text-lg text-slate-600 leading-relaxed">
          Per carretera, Cadaqués es fa pregar: una bona estona de revolts per la
          muntanya. En vaixell, en canvi, voregeu el Cap de Creus i hi arribeu com
          hi arribaven els convidats de Dalí — per l&rsquo;aigua, amb les cases
          blanques esglaonades sobre la badia. Tindreu temps lliure a terra per
          passejar, menjar o seure en una terrassa abans de tornar.
        </p>
      </section>

      {/* CTA */}
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Reserveu la vostra travessia</h2>
          <p className="text-lg mb-8">
            Des de 75 € per persona en temporada baixa, 85 € en temporada mitjana i
            95 € en temporada alta. Visita i temps lliure inclosos; menjar i beguda a part.
          </p>
          <Link
            href="/ca/reserves"
            className="inline-block bg-white text-blue-600 font-bold px-8 py-4 rounded-full hover:bg-slate-100 transition"
          >
            Reservar ara
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-4xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-10 text-center text-slate-900">
          Preguntes Freqüents
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
