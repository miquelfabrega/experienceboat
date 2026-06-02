import type { Metadata } from 'next';
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
  alternates: {
    canonical:
      'https://www.experienceboat.es/ca/experiencies-vaixell-roses/cadaques',
    languages: {
      'x-default':
        'https://www.experienceboat.es/experiencias-barco-roses/cadaques',
      es: 'https://www.experienceboat.es/experiencias-barco-roses/cadaques',
      ca: 'https://www.experienceboat.es/ca/experiencies-vaixell-roses/cadaques',
      fr: 'https://www.experienceboat.es/fr/experiences-bateau-roses/cadaques',
      en: 'https://www.experienceboat.es/en/boat-experiences-roses/cadaques',
    },
  },
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
      'Aproximadament 45 minuts de navegació des de Roses, vorejant el Cap de Creus.',
  },
  {
    question: 'Hi ha temps per visitar el poble?',
    answer:
      'Sí, fem parada perquè passegeu per Cadaqués i gaudiu del seu encant.',
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
            Navegueu fins al poble més bohemi de la Costa Brava
          </p>
        </div>
      </section>

      {/* INTRO */}
      <section className="max-w-4xl mx-auto px-4 py-16 text-center">
        <h2 className="text-3xl font-bold mb-6 text-slate-900">
          El refugi de Dalí
        </h2>
        <p className="text-lg text-slate-600 leading-relaxed">
          Cadaqués va enamorar Salvador Dalí i enamora tothom qui hi arriba.
          Navegar-hi és la manera més bonica de descobrir aquest racó únic,
          envoltat de muntanyes i mar.
        </p>
      </section>

      {/* CTA */}
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Reserveu la vostra travessia</h2>
          <p className="text-lg mb-8">Cadaqués us espera per mar.</p>
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
