import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Cap de Creus i Cales en Vaixell | ExperienceBoat',
  description:
    'Navegueu pel Cap de Creus i descobriu les cales més amagades en vaixell des de Roses. Aigües cristal·lines i paisatges únics de la Costa Brava.',
  keywords: [
    'excursió Cap de Creus en vaixell',
    'cales Cap de Creus',
    'passeig en vaixell Roses',
  ],
  alternates: {
    canonical:
      'https://www.experienceboat.es/ca/experiencies-vaixell-roses/cap-de-creus-cales',
    languages: {
      'x-default':
        'https://www.experienceboat.es/experiencias-barco-roses/cap-de-creus-calas',
      es: 'https://www.experienceboat.es/experiencias-barco-roses/cap-de-creus-calas',
      ca: 'https://www.experienceboat.es/ca/experiencies-vaixell-roses/cap-de-creus-cales',
    },
  },
  openGraph: {
    title: 'Cap de Creus i Cales en Vaixell | ExperienceBoat',
    description:
      'Navegueu pel Cap de Creus i descobriu les cales més amagades en vaixell des de Roses. Aigües cristal·lines i paisatges únics de la Costa Brava.',
    url: 'https://www.experienceboat.es/ca/experiencies-vaixell-roses/cap-de-creus-cales',
    locale: 'ca_ES',
    type: 'website',
  },
};

const faqs = [
  {
    question: 'Quines cales visitarem?',
    answer:
      'Depèn del vent i del mar, però solem visitar Cala Jugadora, Cala Culip i altres racons del Cap de Creus.',
  },
  {
    question: 'Ens podem banyar?',
    answer:
      'Sí, parem a diverses cales perquè gaudiu del bany en aigües cristal·lines.',
  },
];

export default function CapDeCreusCalesPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* HERO */}
      <section className="relative h-[70vh] min-h-[500px] w-full overflow-hidden">
        <Image
          src="/images/experiencias/cap-de-creus-calas.webp"
          alt="Cap de Creus i cales en vaixell"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
            Cap de Creus i Cales
          </h1>
          <p className="text-lg md:text-2xl max-w-2xl drop-shadow-md">
            Descobriu les cales més amagades de la Costa Brava
          </p>
        </div>
      </section>

      {/* INTRO */}
      <section className="max-w-4xl mx-auto px-4 py-16 text-center">
        <h2 className="text-3xl font-bold mb-6 text-slate-900">
          El parc natural des del mar
        </h2>
        <p className="text-lg text-slate-600 leading-relaxed">
          El Cap de Creus és el punt més oriental de la península. Des del vaixell
          descobrireu cales verges, formacions rocoses úniques i aigües turquesa
          que només es veuen des de l’aigua.
        </p>
      </section>

      {/* CTA */}
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Reserveu la vostra aventura</h2>
          <p className="text-lg mb-8">Les millors cales us esperen.</p>
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
