import type { Metadata } from 'next';
import { buildAlternates } from '@/lib/i18n/routes';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight, Clock, Calendar, BookOpen, MapPin } from 'lucide-react';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'Tips for planning a boat trip Costa Brava',
  description: 'Practical guide to planning your boat outing on the Costa Brava: choosing the right vessel, routes, weather, safety and provisions.',
  alternates: buildAlternates('blogPlanning', 'en'),
  openGraph: {
    title: 'Tips for planning a boat trip Costa Brava',
    description: 'Practical guide to planning your boat outing: vessel choice, weather, safety and provisions.',
    url: 'https://www.experienceboat.es/en/blog/tips-planning-boat-trip-costa-brava',
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
  { id: 'vessel', label: '1. Choose the vessel' },
  { id: 'route', label: '2. Plan your route' },
  { id: 'weather', label: '3. Check the forecast' },
  { id: 'safety', label: '4. The safety kit' },
  { id: 'provisions', label: '5. Pack provisions' },
  { id: 'environment', label: '6. Protect the environment' },
  { id: 'enjoy', label: '7. Enjoy the ride' },
];

function ArticleSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: 'Tips for planning the perfect boat trip on the Costa Brava',
    datePublished: '2026-04-06',
    dateModified: '2026-04-06',
    author: { '@type': 'Organization', name: 'Experience Boat' },
    publisher: {
      '@type': 'Organization',
      name: 'Experience Boat',
      logo: { '@type': 'ImageObject', url: 'https://www.experienceboat.es/logo.png' },
    },
    image: { '@type': 'ImageObject', url: 'https://www.experienceboat.es/images/services/sin-licencia.jpg' },
    mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://www.experienceboat.es/en/blog/tips-planning-boat-trip-costa-brava' },
    inLanguage: 'en',
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}

export default function ArticlePlanningBoatTripEn() {
  return (
    <>
      <ArticleSchema />
      <main className="bg-white">

      {/* Hero */}
      <div className="relative h-[50vh] min-h-[360px] max-h-[520px] overflow-hidden">
        <Image
          src="/images/services/sin-licencia.jpg"
          alt="Couple enjoying a boat trip on the Costa Brava"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/10" />
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 w-full">
            <span className="inline-block bg-sky-500 text-white text-xs font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-wide">
              Guides
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
              Tips for planning the perfect boat trip on the Costa Brava
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
            5 min read
          </span>
          <span className="flex items-center gap-1.5">
            <MapPin className="w-4 h-4" />
            Costa Brava
          </span>
          <span className="flex items-center gap-1.5">
            <BookOpen className="w-4 h-4" />
            Practical guide
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
          <span className="text-gray-600 truncate">Planning a boat trip</span>
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
              Exploring the Costa Brava by boat is an unforgettable experience filled with stunning scenery, crystal-clear water and hidden coves. But to make sure your trip is a complete success, a little forward planning goes a long way.
            </p>
            <p>
              Whether it&apos;s your first time on the water or you have years of experience, keeping a few key things in mind makes the difference between a good day and a perfect one. Here are 7 practical tips to plan your next boat adventure on the Costa Brava.
            </p>

            {/* H2 #1 */}
            <h2 id="vessel">1. Choose the right type of vessel</h2>
            <p>
              Before casting off, it&apos;s important to select the right boat for your trip. Consider the group size, your navigation skills and the kind of experience you&apos;re after. From small <Link href="/en/boat-rental-without-licence-roses">no-licence boats</Link> to powerful <Link href="/en/boat-rental-with-licence-roses">licensed vessels</Link> with all the comforts, the Costa Brava offers a wide variety of options for every taste and budget.
            </p>

            {/* H2 #2 */}
            <h2 id="route">2. Plan your route</h2>
            <p>
              Once you&apos;ve chosen your boat, it&apos;s time to plan your route. The northern Costa Brava is full of beautiful places to explore, from the tranquil Santa Margarita canals to the dramatic rock formations of <Link href="/en/blog/boat-trip-cap-de-creus-from-roses">Cap de Creus</Link>.
            </p>
            <p>
              Research the different options and decide which coves you&apos;d like to visit. Factor in sailing distances and the time needed to travel between them, always remembering that on the water there&apos;s no point rushing.
            </p>

            {/* H2 #3 */}
            <h2 id="weather">3. Check the weather forecast</h2>
            <p>
              The weather and sea state are the most decisive factors for any boat outing. It&apos;s essential to check the forecast before you set off, paying special attention to local winds like the Tramuntana.
            </p>
            <p>
              Avoid heading out in strong winds or heavy swell, and make sure you have a backup plan if conditions deteriorate (such as sheltering in the inner canals or returning to port). In our case, we always cancel or modify bookings at no cost if the weather isn&apos;t safe.
            </p>

            {/* H2 #4 */}
            <h2 id="safety">4. Prepare the safety kit</h2>
            <p>
              Safety at sea is paramount. Make sure the rental boat includes a complete safety kit: life jackets for all passengers (especially child sizes if there are children on board), flares, a first-aid kit and an anchor.
            </p>
            <p>
              During the pre-departure <em>briefing</em>, familiarise yourself with how each item works and make sure all passengers know where to find them if needed.
            </p>

            {/* H2 #5 */}
            <h2 id="provisions">5. Stock up on provisions</h2>
            <p>
              Before you leave, make sure you have enough provisions for the whole trip. The sea makes you hungry and thirsty, so bring light food, fruit and plenty of drinks — especially fresh water to stay hydrated under the sun.
            </p>
            <p>
              An ice box is essential in summer. If you plan to anchor at lunchtime, a good picnic on board or booking a table at a beach bar accessible by boat (like the one at Cala Pelosa) will round off the day perfectly.
            </p>

            {/* H2 #6 */}
            <h2 id="environment">6. Protect the marine environment</h2>
            <p>
              Respect the marine environment and follow sustainable practices while sailing. It&apos;s everyone&apos;s responsibility:
            </p>
            <ul>
              <li>Never throw any rubbish or plastic into the sea (keep all your waste on board).</li>
              <li>NEVER anchor on <strong>posidonia</strong> seagrass meadows; always look for sandy beds or use the designated mooring buoys.</li>
              <li>Respect marine protection zones and the maximum permitted speed, especially when approaching the coast.</li>
            </ul>

            {/* H2 #7 */}
            <h2 id="enjoy">7. Enjoy the ride</h2>
            <p>
              Finally, once you&apos;re out on the water with everything under control, relax and enjoy. Take time to soak in the stunning coastal scenery, dive into the crystal-clear water for a swim and some snorkelling, and explore the coves that dot the coastline.
            </p>
            <p>
              Remember, the point isn&apos;t to get somewhere quickly — it&apos;s to enjoy the journey and create unforgettable memories with your group.
            </p>

            {/* Inline CTA */}
            <div className="not-prose my-10 rounded-2xl bg-sky-50 border border-sky-100 p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <p className="font-bold text-gray-900 mb-1">No licence? No problem.</p>
                <p className="text-gray-500 text-sm">We have easy-to-handle boats so you can head out to sea with no prior experience.</p>
              </div>
              <Link
                href="/en/boat-rental-without-licence-roses"
                className="shrink-0 inline-flex items-center gap-2 bg-sky-500 hover:bg-sky-400 text-white font-bold px-6 py-3 rounded-xl transition-colors text-sm whitespace-nowrap"
              >
                See no-licence boats <ChevronRight className="w-4 h-4" />
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
