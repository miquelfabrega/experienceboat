import type { Metadata } from 'next';
import { buildAlternates } from '@/lib/i18n/routes';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight, Clock, Calendar, BookOpen, MapPin } from 'lucide-react';

export const dynamic = 'force-static';

export const metadata: Metadata = {
title: 'Best Snorkelling Spots on the Costa Brava',
  description: 'Discover the must-visit coves and marine reserves for snorkelling on the Costa Brava. Cala Montjoi, Medes Islands, Cap de Creus and more.',
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
  { id: 'medas', label: 'Medes Islands' },
  { id: 'cap-creus', label: 'Cap de Creus' },
  { id: 'joncols', label: 'Cala Jóncols' },
  { id: 'rovellada', label: 'Cala Rovellada' },
  { id: 'safety', label: 'Safety tips' },
];

const tips = [
  'Always snorkel with a companion and never swim alone.',
  'Choose a spot that matches your skill level and experience.',
  'Use proper equipment: a well-fitted mask, snorkel and fins.',
  'Stay aware of your surroundings and watch out for boat traffic.',
  'Respect the ecosystem: avoid touching corals or disturbing marine life.',
];

function ArticleSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: 'Best Snorkelling Spots on the Costa Brava | Experience Boat',
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
              Best Snorkelling Spots on the Costa Brava | Experience Boat
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
              The Costa Brava, with its rugged coastline and crystal-clear waters, is a paradise for snorkelling enthusiasts. From hidden coves to impressive marine reserves, this region offers a wide variety of spots to dive in and discover the fascinating marine life that inhabits its waters.
            </p>
            <p>
              In this article we explore some of the best snorkelling spots on the northern Costa Brava, what marine life to expect in each area, and practical tips to make the most of it safely.
            </p>

            {/* H2 #1 */}
            <h2 id="montjoi">1. Cala Montjoi: Exploring an underwater paradise</h2>
            <p>
              Located very close to Roses, <strong>Cala Montjoi</strong> is one of the most accessible and popular snorkelling destinations. With calm, sheltered waters, this bay is home to a great variety of fish and sea creatures.
            </p>
            <p>
              Dip below the surface and you&apos;ll easily encounter shoals of colourful fish, octopuses hiding among the rocks and small corals adorning the seabed. Thanks to its size and natural shelter, it&apos;s an ideal spot for beginners and families.
            </p>

            {/* H2 #2 */}
            <h2 id="medas">2. Medes Islands: An underwater sanctuary</h2>
            <p>
              Situated off the coast of L&apos;Estartit, the <strong>Medes Islands</strong> form an archipelago that has been a protected marine reserve for decades. They are considered one of the finest diving spots in the entire Mediterranean.
            </p>
            <p>
              The level of marine life here is astounding. Snorkelling, you can observe enormous groupers, sea fans (gorgonians), vast shoals of white bream and, with luck, a ray or two. The crystal-clear waters and total fishing ban make the Medas a must-visit. To reach them, the best option is to rent a boat or book a dedicated excursion.
            </p>

            {/* H2 #3 */}
            <h2 id="cap-creus">3. Cap de Creus: Discovering hidden treasures</h2>
            <p>
              The rugged coastline of the <strong>Cap de Creus Natural Park</strong> is dotted with hidden coves and sea caves, making it the perfect place for those seeking wild adventure.
            </p>
            <p>
              The area stands out for its water clarity, naturally filtered by posidonia seagrass meadows. Keep your eyes open for moray eels, red starfish, sea urchins and nudibranchs that inhabit the rocky seabed. Since land access is long and complicated for many of its coves, <Link href="/en/boat-experiences-roses">arriving by boat is the best option</Link> to explore the reserve&apos;s best snorkelling spots.
            </p>

            {/* H2 #4 */}
            <h2 id="joncols">4. Cala Jóncols: A quiet oasis</h2>
            <p>
              Isolated among tall rocky cliffs and pine forests, <strong>Cala Jóncols</strong> is an oasis away from the crowds. Its seabed is mainly pebble and rock, guaranteeing excellent underwater visibility.
            </p>
            <p>
              Being more remote, with access only via a very rough track, human pressure is lower. It&apos;s easy to spot anemones, gilt-head bream and octopuses hunting among the rocks. Whether you&apos;re a beginner or experienced snorkeller, Jóncols delivers a very authentic experience.
            </p>

            {/* H2 #5 */}
            <h2 id="rovellada">5. Cala Rovellada: Hidden gem</h2>
            <p>
              Further north, approaching Colera and Portbou, you&apos;ll find <strong>Cala Rovellada</strong>. It is known for its rich marine biodiversity and unique rock formations.
            </p>
            <p>
              Snorkellers can explore the rock walls and small underwater crevices where shy seahorses, white bream and damselfish hide. It&apos;s a charming bay, perfect for those seeking pristine waters off the beaten track.
            </p>

            {/* H2 #6 */}
            <h2 id="safety">Safety tips and equipment recommendations</h2>
            <p>
              Before embarking on a snorkelling adventure, it&apos;s important to ensure your safety and that of the environment.
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
              By following these tips and exploring the areas we&apos;ve covered, you&apos;re set for an unforgettable underwater adventure. Grab your mask, hop aboard and discover the hidden wonders beneath the surface of the Costa Brava.
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
