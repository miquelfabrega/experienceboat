import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight } from 'lucide-react';
import type { Locale } from '@/lib/i18n/routes';
import { absUrl, localizedHref } from '@/lib/i18n/routes';
import {
  DESTINOS_COPY,
  DESTINO_HERO,
  GUIA_RELATED,
  type DestinoKey,
} from '@/lib/data/destinos';

export default function GuiaDestino({
  lang,
  destino,
}: {
  lang: Locale;
  destino: DestinoKey;
}) {
  const t = DESTINOS_COPY[destino][lang]!;
  const hero = DESTINO_HERO[destino];
  const related = GUIA_RELATED[lang === 'fr' ? 'fr' : 'es'];
  const pageUrl = absUrl(localizedHref(destino, lang));
  const bookingsHref = localizedHref('bookings', lang);

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: t.breadcrumbHome, item: absUrl(localizedHref('home', lang)) },
      { '@type': 'ListItem', position: 2, name: t.breadcrumbLabel, item: pageUrl },
    ],
  };
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: t.faq.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };
  const attractionSchema = {
    '@context': 'https://schema.org',
    '@type': 'TouristAttraction',
    name: t.breadcrumbLabel,
    description: t.introLead,
    image: absUrl(hero),
    url: pageUrl,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Roses',
      addressRegion: 'Girona',
      addressCountry: 'ES',
    },
  };

  return (
    <main id="main-content" className="bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(attractionSchema) }} />

      {/* Hero */}
      <div className="relative h-[46vh] min-h-[320px] max-h-[520px] overflow-hidden">
        <Image src={hero} alt={t.heroAlt} fill priority sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-black/10" />
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-10 w-full">
            <span className="inline-block bg-amber-500 text-white text-xs font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-wide">
              {t.kicker}
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">{t.h1}</h1>
          </div>
        </div>
      </div>

      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 text-sm text-gray-500">
        <ol className="flex items-center gap-2 flex-wrap">
          <li><Link href={localizedHref('home', lang)} className="hover:text-blue-600">{t.breadcrumbHome}</Link></li>
          <li aria-hidden><ChevronRight className="w-4 h-4" /></li>
          <li className="text-gray-900 font-medium" aria-current="page">{t.breadcrumbLabel}</li>
        </ol>
      </nav>

      {/* Article */}
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <p className="text-xl text-gray-600 font-medium mb-8">{t.introLead}</p>

        {t.sections.map((s) => (
          <section key={s.h2} className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">{s.h2}</h2>
            <div className="space-y-3 text-gray-700 leading-relaxed">
              {s.body.map((p, i) => <p key={i}>{p}</p>)}
            </div>
          </section>
        ))}

        {/* FAQ */}
        <section className="mt-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-5">{t.faqTitle}</h2>
          <div className="divide-y divide-gray-200 border-t border-gray-200">
            {t.faq.map((f) => (
              <details key={f.q} className="group py-4">
                <summary className="flex justify-between items-center cursor-pointer list-none font-medium text-gray-900">
                  {f.q}
                  <ChevronRight className="w-5 h-5 text-gray-400 transition-transform group-open:rotate-90" />
                </summary>
                <p className="mt-3 text-gray-600">{f.a}</p>
              </details>
            ))}
          </div>
        </section>
      </article>

      {/* CTA */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="rounded-2xl border border-blue-100 bg-blue-50 p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">{t.ctaTitle}</h2>
          <p className="text-gray-600 mb-5 max-w-2xl mx-auto">{t.ctaText}</p>
          <Link href={bookingsHref} className="inline-block bg-blue-600 text-white font-semibold px-6 py-3 rounded-full hover:bg-blue-700 transition-colors">
            {t.ctaLabel}
          </Link>
        </div>
      </section>

      {/* Related */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-14">
        <h2 className="text-lg font-bold text-gray-900 mb-4">{t.relatedTitle}</h2>
        <ul className="flex flex-wrap gap-3">
          {related.map((r) => (
            <li key={r.routeId}>
              <Link href={localizedHref(r.routeId, lang)} className="inline-block rounded-full border border-gray-200 px-4 py-2 text-sm text-gray-700 hover:border-blue-300 hover:text-blue-700">
                {r.label}
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
