import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Caves and Snorkeling by Boat in Roses | ExperienceBoat',
  description:
    'Explore sea caves and snorkel in the best coves of Roses and Cap de Creus. A boat experience to discover the seabed.',
  keywords: [
    'snorkeling Roses boat',
    'sea caves Cap de Creus',
    'boat tour Roses',
  ],
  alternates: {
    canonical: 'https://www.experienceboat.es/en/boat-experiences-roses/caves-snorkeling',
    languages: {
      'x-default': 'https://www.experienceboat.es/experiencias-barco-roses/cuevas-snorkel',
      es: 'https://www.experienceboat.es/experiencias-barco-roses/cuevas-snorkel',
      ca: 'https://www.experienceboat.es/ca/experiencies-vaixell-roses/coves-esnorquel',
      fr: 'https://www.experienceboat.es/fr/experiences-bateau-roses/grottes-snorkeling',
      en: 'https://www.experienceboat.es/en/boat-experiences-roses/caves-snorkeling',
    },
  },
  openGraph: {
    title: 'Caves and Snorkeling by Boat in Roses | ExperienceBoat',
    description:
      'Explore sea caves and snorkel in the best coves of Roses and Cap de Creus. A boat experience to discover the seabed.',
    url: 'https://www.experienceboat.es/en/boat-experiences-roses/caves-snorkeling',
    locale: 'en_US',
    type: 'website',
  },
};

const faqs = [
  {
    question: 'Is snorkeling gear included?',
    answer: 'Yes, we provide mask and snorkel for all passengers.',
  },
  {
    question: 'Is it suitable for beginners?',
    answer:
      'Absolutely. We choose calm, shallow coves, ideal for getting started.',
  },
];

export default function CavesSnorkelingPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* HERO */}
      <section className="relative h-[70vh] min-h-[500px] w-full overflow-hidden">
        <Image
          src="/images/experiencias/cuevas-snorkel.webp"
          alt="Caves and snorkeling by boat in Roses"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
            Caves and Snorkeling
          </h1>
          <p className="text-lg md:text-2xl max-w-2xl drop-shadow-md">
            Discover the seabed of the Costa Brava
          </p>
        </div>
      </section>

      {/* INTRO */}
      <section className="max-w-4xl mx-auto px-4 py-16 text-center">
        <h2 className="text-3xl font-bold mb-6 text-slate-900">
          A world underwater
        </h2>
        <p className="text-lg text-slate-600 leading-relaxed">
          The waters of Cap de Creus hide caves and seabeds full of life. Grab your
          snorkel and dive into a world of colour in coves with transparent water.
        </p>
      </section>

      {/* CTA */}
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Book your underwater adventure
          </h2>
          <p className="text-lg mb-8">The seabed awaits.</p>
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
