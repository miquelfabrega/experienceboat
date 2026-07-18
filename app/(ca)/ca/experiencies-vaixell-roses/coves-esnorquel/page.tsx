import type { Metadata } from 'next';
import { buildAlternates } from '@/lib/i18n/routes';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Coves i Esnòrquel en Vaixell a Roses | ExperienceBoat',
  description:
    'Exploreu coves marines i feu esnòrquel a les millors cales de Roses i el Cap de Creus. Una experiència en vaixell per descobrir el fons marí.',
  keywords: [
    'esnòrquel Roses vaixell',
    'coves marines Cap de Creus',
    'passeig en vaixell Roses',
  ],
  alternates: buildAlternates('expSnorkel', 'ca'),
  openGraph: {
    title: 'Coves i Esnòrquel en Vaixell a Roses | ExperienceBoat',
    description:
      'Exploreu coves marines i feu esnòrquel a les millors cales de Roses i el Cap de Creus. Una experiència en vaixell per descobrir el fons marí.',
    url: 'https://www.experienceboat.es/ca/experiencies-vaixell-roses/coves-esnorquel',
    locale: 'ca_ES',
    type: 'website',
  },
};

const faqs = [
  {
    question: 'Inclou material d’esnòrquel?',
    answer:
      'Sí: ulleres, tub i aletes per a cada passatger, en diverses talles. Armilles salvavides i assegurança de RC incloses, amb un briefing de seguretat abans de cada parada.',
  },
  {
    question: 'És apte per a principiants?',
    answer:
      'Totalment. Triem cales tranquil·les i poc profundes, i la sortida va bé per a nens a partir de 6 anys amb supervisió. Porteu tovallola, crema solar i aigua; les sortides depenen de l’estat del mar.',
  },
];

export default function CovesEsnorquelPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* HERO */}
      <section className="relative h-[70vh] min-h-[500px] w-full overflow-hidden">
        <Image
          src="/images/experiencias/cuevas-snorkel.webp"
          alt="Coves i esnòrquel en vaixell a Roses"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
            Coves i Esnòrquel
          </h1>
          <p className="text-lg md:text-2xl max-w-2xl drop-shadow-md">
            Coves marines del Cap de Creus i parades d&rsquo;esnòrquel guiades — material inclòs
          </p>
        </div>
      </section>

      {/* INTRO */}
      <section className="max-w-4xl mx-auto px-4 py-16 text-center">
        <h2 className="text-3xl font-bold mb-6 text-slate-900">
          Un món sota l’aigua
        </h2>
        <p className="text-lg text-slate-600 leading-relaxed">
          El vaixell s&rsquo;endinsa en coves marines i arcs de roca del Cap de
          Creus on només s&rsquo;arriba per mar, i després para sobre els millors
          fons de la zona: praderies de posidònia, peixos i roca. El patró es
          queda a bord, les parades canvien segons el mar del dia, i el material
          complet d&rsquo;esnòrquel va inclòs amb el vaixell.
        </p>
      </section>

      {/* CTA */}
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Reserveu la vostra sortida
          </h2>
          <p className="text-lg mb-8">
            El preu depèn de la data i del nombre de persones — escriviu-nos i us
            confirmem la disponibilitat de seguida.
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
