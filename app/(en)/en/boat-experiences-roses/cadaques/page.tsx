import type { Metadata } from 'next';
import { buildAlternates } from '@/lib/i18n/routes';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Boat Trip to Cadaqués | ExperienceBoat',
  description:
    'Reach Cadaqués by boat from Roses. A boat trip around Cap de Creus to the most bohemian village on the Costa Brava.',
  keywords: [
    'boat trip Cadaqués',
    'boat Roses Cadaqués',
    'boat tour Roses',
  ],
  alternates: buildAlternates('expCadaques', 'en'),
  openGraph: {
    title: 'Boat Trip to Cadaqués | ExperienceBoat',
    description:
      'Reach Cadaqués by boat from Roses. A boat trip around Cap de Creus to the most bohemian village on the Costa Brava.',
    url: 'https://www.experienceboat.es/en/boat-experiences-roses/cadaques',
    locale: 'en_GB',
    type: 'website',
  },
};

const faqs = [
  {
    question: 'How long does it take to reach Cadaqués?',
    answer:
      'Around an hour each way, depending on the sea and the boat. The whole route hugs the Cap de Creus coastline, so the crossing is part of the trip.',
  },
  {
    question: 'Is there time to visit the village?',
    answer:
      'Yes — free time in Cadaqués is included. Enough to walk the whitewashed lanes, have lunch or sit down for a coffee by the water before we head back.',
  },
];

export default function CadaquesPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* HERO */}
      <section className="relative h-[70vh] min-h-[500px] w-full overflow-hidden">
        <Image
          src="/cadaques/port-lligat.webp"
          alt="Boat trip to Cadaqués"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
            Trip to Cadaqués
          </h1>
          <p className="text-lg md:text-2xl max-w-2xl drop-shadow-md">
            From Roses to Dalí&apos;s village by sea — about an hour along the Cap de Creus
          </p>
        </div>
      </section>

      {/* INTRO */}
      <section className="max-w-4xl mx-auto px-4 py-16 text-center">
        <h2 className="text-3xl font-bold mb-6 text-slate-900">
          Dalí’s refuge
        </h2>
        <p className="text-lg text-slate-600 leading-relaxed">
          By road, Cadaqués means a long stretch of hairpin bends over the mountains.
          By boat you skirt the Cap de Creus instead and arrive the way Dalí&apos;s
          visitors used to — from the water, with the white houses stacked above the
          bay. You get free time ashore to wander, eat or just sit at a terrace
          before the return leg.
        </p>
      </section>

      {/* CTA */}
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Book your crossing</h2>
          <p className="text-lg mb-8">
            From €75 per person in low season, €85 in mid season and €95 in high
            season. Village visit and free time included; food and drinks are not.
          </p>
          <Link
            href="/en/booking"
            className="inline-block bg-white text-blue-600 font-bold px-8 py-4 rounded-full hover:bg-slate-100 transition"
          >
            Book now
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-4xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-10 text-center text-slate-900">
          Frequently Asked Questions
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
