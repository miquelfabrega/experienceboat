import type { Metadata } from 'next';
import { buildAlternates } from '@/lib/i18n/routes';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Cap de Creus and Coves by Boat | ExperienceBoat',
  description:
    'Sail around Cap de Creus and discover the most hidden coves by boat from Roses. Crystal-clear waters and unique Costa Brava landscapes.',
  keywords: [
    'Cap de Creus boat trip',
    'Cap de Creus coves',
    'boat tour Roses',
  ],
  alternates: buildAlternates('expCapCreus', 'en'),
  openGraph: {
    title: 'Cap de Creus and Coves by Boat | ExperienceBoat',
    description:
      'Sail around Cap de Creus and discover the most hidden coves by boat from Roses. Crystal-clear waters and unique Costa Brava landscapes.',
    url: 'https://www.experienceboat.es/en/boat-experiences-roses/cap-de-creus-coves',
    locale: 'en_US',
    type: 'website',
  },
};

const faqs = [
  {
    question: 'Which coves will we visit?',
    answer:
      'It depends on the wind and the sea, but we usually visit Cala Jugadora, Cala Culip and other corners of Cap de Creus.',
  },
  {
    question: 'Can we swim?',
    answer:
      'Yes, we stop at several coves so you can enjoy swimming in crystal-clear waters.',
  },
];

export default function CapDeCreusCovesPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* HERO */}
      <section className="relative h-[70vh] min-h-[500px] w-full overflow-hidden">
        <Image
          src="/images/hero/cap-de-creus-calas-2026.jpg"
          alt="Cap de Creus and coves by boat"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
            Cap de Creus and Coves
          </h1>
          <p className="text-lg md:text-2xl max-w-2xl drop-shadow-md">
            Discover the most hidden coves on the Costa Brava
          </p>
        </div>
      </section>

      {/* INTRO */}
      <section className="max-w-4xl mx-auto px-4 py-16 text-center">
        <h2 className="text-3xl font-bold mb-6 text-slate-900">
          The natural park from the sea
        </h2>
        <p className="text-lg text-slate-600 leading-relaxed">
          Cap de Creus is the easternmost point of the peninsula. From the boat
          you’ll discover unspoilt coves, unique rock formations and turquoise
          waters only seen from the water.
        </p>
      </section>

      {/* CTA */}
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Book your adventure</h2>
          <p className="text-lg mb-8">The best coves are waiting for you.</p>
          <Link
            href="/en/contact"
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
