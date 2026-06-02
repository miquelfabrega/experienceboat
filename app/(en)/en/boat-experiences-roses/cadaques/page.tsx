import type { Metadata } from 'next';
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
  alternates: {
    canonical: 'https://www.experienceboat.es/en/boat-experiences-roses/cadaques',
    languages: {
      'x-default': 'https://www.experienceboat.es/experiencias-barco-roses/cadaques',
      es: 'https://www.experienceboat.es/experiencias-barco-roses/cadaques',
      ca: 'https://www.experienceboat.es/ca/experiencies-vaixell-roses/cadaques',
      fr: 'https://www.experienceboat.es/fr/experiences-bateau-roses/cadaques',
      en: 'https://www.experienceboat.es/en/boat-experiences-roses/cadaques',
    },
  },
  openGraph: {
    title: 'Boat Trip to Cadaqués | ExperienceBoat',
    description:
      'Reach Cadaqués by boat from Roses. A boat trip around Cap de Creus to the most bohemian village on the Costa Brava.',
    url: 'https://www.experienceboat.es/en/boat-experiences-roses/cadaques',
    locale: 'en_US',
    type: 'website',
  },
};

const faqs = [
  {
    question: 'How long does it take to reach Cadaqués?',
    answer:
      'About 45 minutes of sailing from Roses, hugging the Cap de Creus coastline.',
  },
  {
    question: 'Is there time to visit the village?',
    answer:
      'Yes, we stop so you can stroll through Cadaqués and enjoy its charm.',
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
            Sail to the most bohemian village on the Costa Brava
          </p>
        </div>
      </section>

      {/* INTRO */}
      <section className="max-w-4xl mx-auto px-4 py-16 text-center">
        <h2 className="text-3xl font-bold mb-6 text-slate-900">
          Dalí’s refuge
        </h2>
        <p className="text-lg text-slate-600 leading-relaxed">
          Cadaqués captivated Salvador Dalí and captivates everyone who arrives.
          Sailing there is the most beautiful way to discover this unique corner,
          surrounded by mountains and sea.
        </p>
      </section>

      {/* CTA */}
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Book your crossing</h2>
          <p className="text-lg mb-8">Cadaqués awaits you by sea.</p>
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
