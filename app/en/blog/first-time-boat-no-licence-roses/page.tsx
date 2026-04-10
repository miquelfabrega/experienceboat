import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight, Clock, Calendar, BookOpen } from 'lucide-react';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'First time on a no-licence boat in Roses — Complete guide',
  description: 'Everything you need to know before hiring a no-licence boat in Roses for the first time. What to expect, how it works and why it\'s easier than you think.',
  alternates: {
    canonical: 'https://experienceboat.es/en/blog/first-time-boat-no-licence-roses',
    languages: {
      'x-default': 'https://experienceboat.es/blog/primera-vez-barco-sin-licencia-roses',
      es: 'https://experienceboat.es/blog/primera-vez-barco-sin-licencia-roses',
      fr: 'https://experienceboat.es/fr/blog/premiere-fois-bateau-sans-permis-roses',
      en: 'https://experienceboat.es/en/blog/first-time-boat-no-licence-roses',
    },
  },
  openGraph: {
    title: 'First time on a no-licence boat in Roses — Complete guide',
    description: 'Everything you need to know before hiring a no-licence boat in Roses for the first time.',
    url: 'https://experienceboat.es/en/blog/first-time-boat-no-licence-roses',
    locale: 'en_GB',
    type: 'article',
  },
};

const toc = [
  { id: 'licence', label: 'Do you need a licence?' },
  { id: 'difficult', label: 'Is it difficult?' },
  { id: 'canals', label: 'The Santa Margarita canals' },
  { id: 'departure-day', label: 'On the day' },
  { id: 'questions', label: 'The 6 most common questions' },
  { id: 'what-to-bring', label: 'What to bring' },
  { id: 'season', label: 'Peak vs. shoulder season' },
  { id: 'skipper', label: 'Prefer a skipper?' },
];

const faqs = [
  {
    q: 'What if I get lost?',
    a: 'The Santa Margarita canals are a very recognisable, relatively small environment. Getting lost is unlikely. Before you set off, we orient you with a map and you have our phone number for any questions during the trip. The Bay of Roses also has very clear visual landmarks — the village of Roses and the Pyrenees in the background are visible from anywhere in the bay.',
  },
  {
    q: 'What if I bump into something?',
    a: 'Minor scrapes are a normal part of canal navigation, especially on first outings. The boats have side fenders specifically for this reason. For more serious incidents, there is coverage included — check the exact terms when booking. The important thing is to go slowly and without rushing, which is exactly what the canals encourage.',
  },
  {
    q: 'Can I go alone, without any passengers?',
    a: 'Yes. Our no-licence boats are perfectly manageable by a single person. In fact, some of the most peaceful and enjoyable departures we have are solo early-morning trips to explore the canals.',
  },
  {
    q: 'Do I need to be able to swim?',
    a: 'It\'s not compulsory, but recommended if you plan to swim in the coves. Life jackets are included in the rental and we recommend wearing them, especially if there are children on board.',
  },
  {
    q: 'Can we bring food and drinks?',
    a: 'Yes, absolutely. In fact, we recommend it for full-day trips. A cool box with cold drinks, some snacks and the shade of the boat make lunchtime in a cove one of the best moments of the day.',
  },
  {
    q: 'What if the weather turns bad during the trip?',
    a: 'If the forecast is poor before you set off, we notify you in advance and cancel at no cost. If conditions deteriorate during the trip, the recommendation is always to return to port. The Santa Margarita canals are a natural refuge — in case of wind or rain, the inland waters remain navigable and safe.',
  },
];

function ArticleSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: 'First time on a no-licence boat in Roses — Complete guide',
    datePublished: '2026-04-06',
    dateModified: '2026-04-06',
    author: { '@type': 'Organization', name: 'Experience Boat' },
    publisher: {
      '@type': 'Organization',
      name: 'Experience Boat',
      logo: { '@type': 'ImageObject', url: 'https://experienceboat.es/logo.png' },
    },
    image: { '@type': 'ImageObject', url: 'https://experienceboat.es/images/hero/hero-1.jpg' },
    mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://experienceboat.es/en/blog/first-time-boat-no-licence-roses' },
    inLanguage: 'en',
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}

export default function ArticleFirstTimeBotEn() {
  return (
    <>
      <ArticleSchema />
      <main className="bg-white">

      {/* Hero */}
      <div className="relative h-[50vh] min-h-[360px] max-h-[520px] overflow-hidden">
        <Image
          src="/images/hero/hero-1.jpg"
          alt="No-licence boat navigating the Santa Margarita canals in Roses"
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
              First time on a no-licence boat in Roses — everything you need to know
            </h1>
          </div>
        </div>
      </div>

      {/* Article meta */}
      <div className="border-b border-gray-100 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-wrap items-center gap-5 text-sm text-gray-500">
          <span className="flex items-center gap-1.5">
            <Calendar className="w-4 h-4" />
            6 April 2026
          </span>
          <span className="flex items-center gap-1.5">
            <Clock className="w-4 h-4" />
            8 min read
          </span>
          <span className="flex items-center gap-1.5">
            <BookOpen className="w-4 h-4" />
            Informational
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
          <span className="text-gray-600 truncate">First time on a no-licence boat</span>
        </nav>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex gap-16 items-start">

          {/* Table of contents — desktop sticky sidebar */}
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

          {/* Article body */}
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
              Every season, dozens of people arrive in Roses with the same idea: rent a boat and explore the coast. And every season, many of them hesitate at the last moment. Will it be hard? Do I need some kind of licence? What happens if I get lost or something goes wrong?
            </p>
            <p>
              This guide exists to answer those questions honestly. Without overstating how easy it is or glossing over what you need to know. After reading it, you&apos;ll have all the information to decide whether a no-licence boat is the right choice for you — and if so, how to make the most of it from day one.
            </p>

            {/* H2 #1 */}
            <h2 id="licence">Do you need a licence to rent a boat in Roses?</h2>
            <p>
              The short answer is <strong>no</strong>. In Spain, nautical regulations allow you to rent vessels up to 5 metres in length with engines up to 15 HP without any qualification. No nautical school, no card, no prior paperwork. The only condition is that the person at the helm must be over 18.
            </p>
            <p>
              Passengers can be any age — in fact, families with young children are one of the groups that enjoy this type of outing most, especially in calm environments like the Santa Margarita canals.
            </p>
            <p>
              This regulation is specific to Spain. If you&apos;re from a country with stricter rules, it may surprise you — but it&apos;s completely legal and standard practice along the entire Spanish Mediterranean coast.
            </p>

            {/* H2 #2 */}
            <h2 id="difficult">Is it hard to handle a no-licence boat?</h2>
            <p>
              It depends what you mean by hard. Compared to driving a car in a city, handling a no-licence boat through the Santa Margarita canals is considerably easier. No traffic lights, no pedestrians stepping out and the maximum speed in the inner canals is very low.
            </p>
            <p>
              No-licence boats have low-power engines that respond gently and predictably. They don&apos;t accelerate suddenly, have no clutch and the steering is intuitive. <strong>Most people get the hang of it within the first 10–15 minutes</strong> of canal navigation.
            </p>
            <p>
              What does require some attention is mooring and manoeuvring in the narrowest stretches of the inner canals, where you need to keep a steady, low speed. These moments call for concentration, but with the instructions from the pre-departure briefing and by going slowly, they pose no real problem.
            </p>
            <p>
              The key is not to rush. A no-licence boat is not a vehicle for going fast — it&apos;s a vehicle for enjoying things slowly.
            </p>

            {/* H2 #3 */}
            <h2 id="canals">The Santa Margarita canals — the best place to start</h2>
            <p>
              Not all environments are equal for a first outing. Setting off directly into open sea with waves and heavy nautical traffic can be overwhelming for someone without experience. The Santa Margarita canals are exactly the opposite.
            </p>
            <p>
              The Santa Margarita inland waterways are completely sheltered: no swell, no currents and low speed limits. It&apos;s the ideal environment to gain confidence with the boat before venturing into the Bay of Roses.
            </p>
            <p>
              But what&apos;s most interesting is that the canals aren&apos;t just a practice ground — they&apos;re a destination in their own right. On both sides of the waterways, over 500 homes have direct water access from their gardens. Each with its own private pontoon, terrace overlooking the canal and small boat tied up alongside. It&apos;s an image you don&apos;t expect to find on the Costa Brava and one that stays with you.
            </p>
            <p>
              By the time you reach the Bay of Roses after navigating the canals, you&apos;ve already been on the water 30–40 minutes and handling the boat is no longer a worry. You can focus on enjoying the view.
            </p>

            {/* H2 #4 */}
            <h2 id="departure-day">What happens on the day</h2>
            <p>So there are no surprises, here is what happens from the moment you arrive to when you return.</p>

            <h3 className="text-lg font-bold text-gray-900 mt-6 mb-2">Before you set off — the briefing</h3>
            <p>
              We meet you at the Santa Margarita Marina at the agreed time. One of our skippers — Tomàs or Max — welcomes you and spends 10–15 minutes explaining how the boat works: how to start it, accelerate, steer, stop and manoeuvre in the canals. We also orient you with a map of the area and recommend a route based on available time and sea conditions.
            </p>
            <p>It&apos;s not a lecture. It&apos;s a practical conversation in front of the boat. If you have questions, that&apos;s the time to ask them.</p>

            <h3 className="text-lg font-bold text-gray-900 mt-6 mb-2">The first minutes in the canals</h3>
            <p>
              The first part of the trip always takes place in the inner canals. It&apos;s the moment to get familiar with the boat without pressure: low speed, calm waters and a landscape that holds your attention. Most people leave the canals feeling it was easier than expected.
            </p>

            <h3 className="text-lg font-bold text-gray-900 mt-6 mb-2">The Bay of Roses and beyond</h3>
            <p>
              Once in the bay, the world opens up. You can stay close and anchor in a cove, or venture towards the coves of Cap de Creus if conditions allow. You decide the pace and the route — there&apos;s no obligation to go anywhere in particular.
            </p>

            <h3 className="text-lg font-bold text-gray-900 mt-6 mb-2">The return</h3>
            <p>
              You return to the marina at the agreed time according to the option you booked. If any question or incident arises during the trip, you have our phone number available at all times.
            </p>

            {/* H2 #5 — FAQ */}
            <h2 id="questions">The 6 questions first-timers ask us most</h2>

            <div className="not-prose space-y-5 my-8">
              {faqs.map((faq, i) => (
                <div key={i} className="rounded-2xl border border-gray-100 bg-gray-50 p-6">
                  <p className="font-bold text-gray-900 mb-2">{faq.q}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>

            {/* H2 #6 */}
            <h2 id="what-to-bring">What to bring on the day</h2>
            <p>Basic checklist for a first no-licence outing from Roses:</p>
            <ul>
              <li>High-factor sunscreen — the sun&apos;s reflection off the water multiplies exposure</li>
              <li>Polarised sunglasses</li>
              <li>Swimwear and a towel if you plan to swim</li>
              <li>Footwear with non-slip soles — never flat flip-flops without grip</li>
              <li>Cool box with water and cold drinks, especially in July and August</li>
              <li>Phone in a waterproof case or dry bag</li>
              <li>A light layer for the return trip if you&apos;re heading out at sunset — it gets cooler on the water than you&apos;d expect</li>
            </ul>

            {/* H2 #7 */}
            <h2 id="season">Shoulder season vs. peak season — when to go</h2>
            <p>
              This question deserves an honest answer. July and August in Roses are spectacular months but also the busiest. Coves get more crowded, nautical traffic in the bay is heavier and boat availability sells out weeks in advance.
            </p>
            <p>
              If you have flexibility, <strong>May, June and September</strong> offer excellent sailing conditions with far less crowding. The water is perfect for swimming, the coves are peaceful and the Santa Margarita canal experience has an entirely different quality when you&apos;re not sharing the space with dozens of other boats.
            </p>
            <p>
              For families with young children, June is probably the ideal month: water already warm, long days and none of the August crowds.
            </p>

            {/* H2 #8 */}
            <h2 id="skipper">What if you&apos;d rather someone else take the wheel?</h2>
            <p>
              If after reading this you decide you&apos;d prefer to enjoy the day without worrying about navigation, we have that option too. Our private skippered excursions combine a journey through the Santa Margarita canals with a trip to Cap de Creus and the most spectacular coves on the northern Costa Brava. Tomàs or Max take care of everything — you just focus on enjoying the ride.
            </p>

            {/* Inline CTA */}
            <div className="not-prose my-8 rounded-2xl bg-sky-50 border border-sky-100 p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <p className="font-bold text-gray-900 mb-1">Private skippered excursions</p>
                <p className="text-gray-500 text-sm">Cap de Creus, wild coves and canals. The skipper handles the route.</p>
              </div>
              <Link
                href="/en/boat-experiences-roses"
                className="shrink-0 inline-flex items-center gap-2 bg-sky-500 hover:bg-sky-400 text-white font-bold px-6 py-3 rounded-xl transition-colors text-sm whitespace-nowrap"
              >
                See experiences <ChevronRight className="w-4 h-4" />
              </Link>
            </div>

          </article>
        </div>
      </div>

      {/* Closing CTAs */}
      <div className="bg-gray-900 py-16 mt-8">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Ready to book?</h2>
          <p className="text-gray-400 mb-10 text-lg">
            The next step is to see which boats we have available and choose the one that best suits your group. If you have any questions, write to us — Tomàs or Max will reply personally.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/alquiler-barco-sin-licencia-roses"
              className="px-8 py-4 rounded-full bg-white text-gray-900 font-bold hover:bg-gray-100 transition-colors shadow-md"
            >
              See no-licence boats in Roses →
            </Link>
            <a
              href="https://wa.me/34623995700?text=Hello%2C%20I%20have%20a%20question%20about%20no-licence%20boat%20rental"
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="px-8 py-4 rounded-full bg-[#25D366] text-white font-bold hover:bg-[#1ebe59] transition-colors shadow-md"
            >
              Write to us on WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Back to blog */}
      <div className="py-10 text-center">
        <Link href="/en/blog" className="text-sm text-gray-400 hover:text-gray-600 transition-colors inline-flex items-center gap-2">
          ← Back to blog
        </Link>
      </div>

    </main>
    </>
  );
}
