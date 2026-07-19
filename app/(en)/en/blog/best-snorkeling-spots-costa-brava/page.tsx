import type { Metadata } from 'next';
import { buildAlternates } from '@/lib/i18n/routes';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight, Clock, Calendar, BookOpen, MapPin } from 'lucide-react';

export const dynamic = 'force-static';

export const metadata: Metadata = {
title: 'Best Snorkelling Spots on the Costa Brava',
  description: 'Discover the must-visit coves and marine reserves for snorkelling on the Costa Brava. Cala Montjoi, Cala Murtra, Cap de Creus and more.',
  alternates: buildAlternates('blogSnorkel', 'en'),
  openGraph: {
title: 'Best Snorkelling Spots on the Costa Brava',
    description: 'Discover the must-visit coves and marine reserves for snorkelling on the northern Costa Brava.',
    url: 'https://www.experienceboat.es/en/blog/best-snorkeling-spots-costa-brava',
    locale: 'en_GB',
    type: 'article',
    images: ['/images/hero/hero-1.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/images/hero/hero-1.jpg'],
  },
};

const toc = [
  { id: 'montjoi', label: 'Cala Montjoi' },
  { id: 'murtra', label: 'Cala Murtra' },
  { id: 'cap-creus', label: 'Cap de Creus' },
  { id: 'joncols', label: 'Cala Jóncols' },
  { id: 'medas', label: 'What about the Medes Islands?' },
  { id: 'safety', label: 'Safety tips' },
];

const tips = [
  'Always snorkel with a companion and never swim alone.',
  'Choose a spot that matches your skill level and experience.',
  'Use proper equipment: a well-fitted mask, snorkel and fins.',
  'Stay aware of your surroundings and watch out for boat traffic.',
  'Respect the ecosystem: don\'t touch the seabed or disturb the wildlife, and always anchor clear of the posidonia.',
];

function ArticleSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: 'Best Snorkelling Spots on the Costa Brava',
    datePublished: '2026-04-06',
    dateModified: '2026-04-06',
    author: { '@type': 'Organization', name: 'Experience Boat' },
    publisher: {
      '@type': 'Organization',
      name: 'Experience Boat',
      logo: { '@type': 'ImageObject', url: 'https://www.experienceboat.es/logo.png' },
    },
    image: { '@type': 'ImageObject', url: 'https://www.experienceboat.es/images/services/canales.jpg' },
    mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://www.experienceboat.es/en/blog/best-snorkeling-spots-costa-brava' },
    inLanguage: 'en',
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}

export default function ArticleSnorkellingEn() {
  return (
    <>
      <ArticleSchema />
      <main className="bg-white">

      {/* Hero */}
      <div className="relative h-[50vh] min-h-[360px] max-h-[520px] overflow-hidden">
        <Image
          src="/images/services/canales.jpg"
          alt="Snorkelling in the crystal-clear waters of the Costa Brava"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/10" />
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 w-full">
            <span className="inline-block bg-sky-500 text-white text-xs font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-wide">
              Explore
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
              Best Snorkelling Spots on the Costa Brava
            </h1>
          </div>
        </div>
      </div>

      {/* Meta bar */}
      <div className="border-b border-gray-100 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-wrap items-center gap-5 text-sm text-gray-500">
          <span className="flex items-center gap-1.5">
            <Calendar className="w-4 h-4" />
            6 April 2026
          </span>
          <span className="flex items-center gap-1.5">
            <Clock className="w-4 h-4" />
            6 min read
          </span>
          <span className="flex items-center gap-1.5">
            <MapPin className="w-4 h-4" />
            Northern Costa Brava
          </span>
          <span className="flex items-center gap-1.5">
            <BookOpen className="w-4 h-4" />
            Cove guide
          </span>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <nav className="flex items-center gap-1.5 text-xs text-gray-400" aria-label="Breadcrumb">
          <Link href="/en" className="hover:text-gray-600 transition-colors">Home</Link>
          <ChevronRight className="w-3 h-3" />
          <Link href="/en/blog" className="hover:text-gray-600 transition-colors">Blog</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-gray-600 truncate">Snorkelling on the Costa Brava</span>
        </nav>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex gap-16 items-start">

          {/* Table of contents — desktop */}
          <aside className="hidden xl:block w-56 shrink-0 sticky top-28 self-start">
            <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">In this article</p>
            <nav className="space-y-2">
              {toc.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="block text-sm text-gray-500 hover:text-sky-600 transition-colors leading-snug py-0.5"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </aside>

          {/* Article */}
          <article className="max-w-3xl w-full min-w-0 prose prose-gray prose-lg max-w-none
            prose-headings:font-bold prose-headings:text-gray-900
            prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-5
            prose-p:leading-relaxed prose-p:text-gray-700
            prose-li:text-gray-700 prose-li:leading-relaxed
            prose-a:text-sky-600 prose-a:no-underline hover:prose-a:underline
            prose-strong:text-gray-900
          ">

            {/* Intro */}
            <p className="text-xl text-gray-600 leading-relaxed font-normal not-prose mb-10 border-l-4 border-sky-500 pl-5 py-1">
              We sail the Bay of Roses and Cap de Creus almost every day, and a good share of our stops end with a mask on. These are the coves in our patch where the snorkelling is genuinely worth it — all reachable by boat from the Marina de Santa Margarita.
            </p>
            <p>
              Here&apos;s what you&apos;ll see at each one, how far it is from Roses, and an honest note about the Medes Islands, which aren&apos;t in our area but come up in questions all the time.
            </p>

            {/* H2 #1 */}
            <h2 id="montjoi">1. Cala Montjoi, the reliable classic</h2>
            <p>
              About 20 minutes&apos; sailing from Santa Margarita, <strong>Cala Montjoi</strong> is the most accessible snorkelling stop in our area. Calm, sheltered water, a rocky seabed with posidonia and very good visibility most of the year.
            </p>
            <p>
              Below the surface you&apos;ll find rockfish, the odd octopus tucked between the stones and posidonia meadows. Its size and natural shelter make it the one we usually recommend to beginners and families — and ashore there&apos;s the elBulli1846 connection, though the summer parking is another story.
            </p>

            {/* H2 #2 */}
            <h2 id="murtra">2. Cala Murtra, the aquarium without the glass</h2>
            <p>
              Around 10 minutes&apos; sailing away, in the Punta Falconera area, <strong>Cala Murtra</strong> is the surprise on this list. Access on foot is so awkward that hardly anyone bothers, and the water shows it: clean, calm and with a rocky bottom full of life.
            </p>
            <p>
              We often anchor in its shallow water and the mask comes out on its own: small fish between the rocks, anemones and that aquarium-without-the-glass feeling only empty coves give you. Quiet, understated Mediterranean snorkelling.
            </p>

            {/* H2 #3 */}
            <h2 id="cap-creus">3. Cap de Creus: Culip, Jugadora and the caves</h2>
            <p>
              The rugged coastline of the <strong>Cap de Creus Natural Park</strong> is the wildest snorkelling in the area. Cala Culip and Cala Jugadora, sheltered near the lighthouse, are our usual stops when the sea allows; between them lie caves and rock arches you can only reach from the water.
            </p>
            <p>
              The water here is exceptionally clear, filtered by the posidonia meadows. Keep your eyes open for moray eels, red starfish, sea urchins and nudibranchs on the rocky seabed. Since land access is long and complicated for most of these coves, <Link href="/en/boat-experiences-roses">arriving by boat is the best option</Link> — we head up with a skipper or a licensed boat depending on the day.
            </p>

            {/* H2 #4 */}
            <h2 id="joncols">4. Cala Jóncols, between cliffs and pines</h2>
            <p>
              Tucked between cliffs and pine forest on the way to Cap de Creus, <strong>Cala Jóncols</strong> is one you earn by sea: the dirt track is rough enough that most visitors arrive by boat. Its pebble-and-rock bottom gives excellent visibility.
            </p>
            <p>
              With less human pressure than the roadside coves, it&apos;s easy to spot anemones, gilt-head bream and octopuses hunting among the rocks. Beginner or old hand with a mask, Jóncols repays the trip.
            </p>

            {/* H2 #5 */}
            <h2 id="medas">5. What about the Medes Islands?</h2>
            <p>
              We get asked all the time, so here&apos;s the honest answer: the <strong>Medes Islands</strong>, off L&apos;Estartit, are an extraordinary marine reserve — huge groupers, gorgonians, shoals of white bream — but <strong>they sit outside our rental area</strong>. Our boats operate between the Bay of Roses and Cap de Creus, and the Medes (like the coves near Colera and Portbou further north) are best visited with operators based there. If that reserve is your plan, start from L&apos;Estartit; if you want wild snorkelling without leaving here, Cap de Creus more than holds its own.
            </p>

            {/* H2 #6 */}
            <h2 id="safety">Safety tips and equipment recommendations</h2>
            <p>
              Before you get in the water, a few basics — for your own safety and the environment's.
            </p>

            <ul className="not-prose mt-6 space-y-3">
              {tips.map((tip, i) => (
                <li key={i} className="flex gap-3 text-gray-700 bg-gray-50 rounded-xl p-4 border border-gray-100">
                  <div className="shrink-0 mt-0.5 w-5 h-5 rounded-full bg-sky-100 text-sky-600 flex items-center justify-center font-bold text-xs">
                    {i + 1}
                  </div>
                  {tip}
                </li>
              ))}
            </ul>

            <p className="mt-8">
              That plus a little common sense, and the water does the rest. If you come out with us, snorkelling gear is included on the caves trip — and if you rent a no-licence boat, bring your mask: Montjoi and Murtra are under half an hour from the pontoon.
            </p>

            {/* Inline CTA */}
            <div className="not-prose my-10 rounded-2xl bg-sky-50 border border-sky-100 p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <p className="font-bold text-gray-900 mb-1">Reach the best coves by boat</p>
                <p className="text-gray-500 text-sm">Rent a no-licence boat and explore the coast at your own pace.</p>
              </div>
              <Link
                href="/en/boat-rental-without-licence-roses"
                className="shrink-0 inline-flex items-center gap-2 bg-sky-500 hover:bg-sky-400 text-white font-bold px-6 py-3 rounded-xl transition-colors text-sm whitespace-nowrap"
              >
                See available boats <ChevronRight className="w-4 h-4" />
              </Link>
            </div>

          </article>
        </div>
      </div>

      {/* Back to blog */}
      <div className="py-10 border-t border-gray-100 text-center bg-gray-50">
        <Link href="/en/blog" className="text-sm text-gray-500 hover:text-gray-900 transition-colors inline-flex items-center gap-2 font-medium">
          ← Back to blog
        </Link>
      </div>

    </main>
    </>
  );
}
