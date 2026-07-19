import type { Metadata } from 'next';
import { buildAlternates } from '@/lib/i18n/routes';
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
  alternates: buildAlternates('expCadaques', 'fr'),
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
      'Environ une heure de navigation par trajet, selon la mer et le bateau. Tout le parcours longe le Cap de Creus : la traversée fait partie de la sortie.',
  },
  {
    question: 'Y a-t-il du temps pour visiter le village ?',
    answer:
      'Oui, du temps libre à Cadaqués est prévu. De quoi flâner dans les ruelles blanches, déjeuner ou prendre un café face à la baie avant le retour.',
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
            De Roses au village de Dalí par la mer — environ une heure le long du Cap de Creus
          </p>
        </div>
      </section>

      {/* INTRO */}
      <section className="max-w-4xl mx-auto px-4 py-16 text-center">
        <h2 className="text-3xl font-bold mb-6 text-slate-900">
          Le refuge de Dalí
        </h2>
        <p className="text-lg text-slate-600 leading-relaxed">
          Par la route, Cadaqués se mérite : une longue série de virages à travers
          la montagne. En bateau, on longe le Cap de Creus et on arrive comme les
          invités de Dalí autrefois — par l&rsquo;eau, avec les maisons blanches
          étagées au-dessus de la baie. Du temps libre à terre est prévu pour vous
          promener, manger ou vous poser en terrasse avant le retour.
        </p>
      </section>

      {/* CTA */}
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Réservez votre traversée</h2>
          <p className="text-lg mb-8">
            Dès 75 € par personne en basse saison, 85 € en moyenne saison et 95 €
            en haute saison. Visite et temps libre inclus ; repas et boissons non compris.
          </p>
          <Link
            href="/fr/reservation"
            className="inline-block bg-white text-blue-600 font-bold px-8 py-4 rounded-full hover:bg-slate-100 transition"
          >
            Réserver
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-4xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-10 text-center text-slate-900">
          Questions fréquentes
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
