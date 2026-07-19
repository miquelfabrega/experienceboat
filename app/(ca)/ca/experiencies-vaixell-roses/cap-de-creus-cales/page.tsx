import type { Metadata } from 'next';
import { buildAlternates } from '@/lib/i18n/routes';
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
  alternates: buildAlternates('expCapCreus', 'ca'),
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
      'Depèn del vent i del mar del dia: el patró tria el costat arrecerat. Cala Jugadora i Cala Culip hi són habituals, amb altres racons del Cap de Creus on només s’arriba en vaixell.',
  },
  {
    question: 'Ens podem banyar?',
    answer:
      'Sí, la sortida inclou tres parades de bany en cales verges, amb temps a cadascuna per nedar i fer esnòrquel en aigües cristal·lines abans de continuar.',
  },
];

export default function CapDeCreusCalesPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* HERO */}
      <section className="relative h-[70vh] min-h-[500px] w-full overflow-hidden">
        <Image
          src="/images/hero/cap-de-creus-calas-2026.jpg"
          alt="Vista aèria d'una cala del Cap de Creus amb vaixells fondejats en aigua turquesa"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
            Cap de Creus i Cales
          </h1>
          <p className="text-lg md:text-2xl max-w-2xl drop-shadow-md">
            De 3 a 5 hores des de Roses, amb bany a tres cales on només s&rsquo;arriba per mar
          </p>
        </div>
      </section>

      {/* INTRO */}
      <section className="max-w-4xl mx-auto px-4 py-16 text-center">
        <h2 className="text-3xl font-bold mb-6 text-slate-900">
          El parc natural des del mar
        </h2>
        <p className="text-lg text-slate-600 leading-relaxed">
          El Cap de Creus és la punta més oriental de la península Ibèrica, i les
          seves millors cales no tenen carretera per baixar-hi. Aquesta sortida
          guiada dura de 3 a 5 hores des de Roses, amb un patró professional que
          llegeix el vent i tria les tres parades de bany del dia — roca nua,
          aigua turquesa i, a la majoria, ningú que hi arribi a peu.
        </p>
      </section>

      {/* CTA */}
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Reserveu la vostra sortida</h2>
          <p className="text-lg mb-8">
            Des de 65 € per persona en temporada baixa, 75 € en temporada mitjana i
            80 € en temporada alta. Beguda i aperitiu a part.
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
