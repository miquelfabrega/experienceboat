import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import type { Locale } from '@/lib/i18n/routes';
import { absUrl, localizedHref } from '@/lib/i18n/routes';
import { getBarcosActivos, type Barco, type PrecioTemporada } from '@/lib/data/fleet';
import { PRECIOS_COPY } from '@/lib/data/precios';

/** Formatea un rango de temporada como "baja–alta€", o "—" si no aplica. */
function rango(t?: PrecioTemporada): string {
  if (!t) return '—';
  return t.baja === t.alta ? `${t.baja}€` : `${t.baja}–${t.alta}€`;
}

function precioMaximo(b: Barco): number {
  const { tarifas } = b;
  return (
    tarifas.sieteDias?.alta ??
    tarifas.tresDias?.alta ??
    tarifas.diaCompleto?.alta ??
    tarifas.medioDia?.alta ??
    b.precioDesde
  );
}

export default function PreciosContent({ lang }: { lang: Locale }) {
  const t = PRECIOS_COPY[lang];
  const activos = getBarcosActivos();
  const sinLicencia = activos.filter((b) => b.categoria === 'sin-licencia');
  const conLicencia = activos.filter((b) => b.categoria === 'con-licencia');

  const bookingsHref = localizedHref('bookings', lang);
  const pageUrl = absUrl(localizedHref('prices', lang));

  const lowPrice = Math.min(...activos.map((b) => b.precioDesde));
  const highPrice = Math.max(...activos.map(precioMaximo));

  // ─── Schema ──────────────────────────────────────────────────────────────
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
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Boat rental',
    name: t.h1,
    areaServed: { '@type': 'Place', name: 'Roses, Costa Brava' },
    provider: {
      '@type': 'LocalBusiness',
      '@id': 'https://www.experienceboat.es/#local-business',
      name: 'Experience Boat',
    },
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'EUR',
      lowPrice,
      highPrice,
      url: pageUrl,
    },
  };

  const cell = 'px-3 py-2 text-sm text-gray-700 whitespace-nowrap';
  const head = 'px-3 py-2 text-xs font-semibold uppercase tracking-wide text-gray-500 text-left';

  return (
    <main id="main-content" className="bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />

      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 text-sm text-gray-500">
        <ol className="flex items-center gap-2 flex-wrap">
          <li><Link href={localizedHref('home', lang)} className="hover:text-blue-600">{t.breadcrumbHome}</Link></li>
          <li aria-hidden><ChevronRight className="w-4 h-4" /></li>
          <li className="text-gray-900 font-medium" aria-current="page">{t.breadcrumbLabel}</li>
        </ol>
      </nav>

      {/* Header + intro */}
      <header className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-4">
        <span className="inline-block text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-4 bg-amber-100 text-amber-800">
          {t.kicker}
        </span>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">{t.h1}</h1>
        <div className="space-y-4 max-w-3xl text-lg text-gray-600">
          {t.intro.map((p, i) => <p key={i}>{p}</p>)}
        </div>
      </header>

      {/* Sin licencia */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">{t.sinLicenciaTitle}</h2>
        <p className="text-gray-600 mb-5 max-w-3xl">{t.sinLicenciaLead}</p>
        <div className="overflow-x-auto rounded-xl border border-gray-200">
          <table className="w-full min-w-[560px]">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className={head}>{t.thBoat}</th>
                <th className={head}>{t.thPax}</th>
                <th className={head}>{t.th1h}</th>
                <th className={head}>{t.th2h}</th>
                <th className={head}>{t.thHalf}</th>
                <th className={head}>{t.thFull}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {sinLicencia.map((b) => (
                <tr key={b.slug}>
                  <td className={`${cell} font-medium text-gray-900`}>{b.nombre}</td>
                  <td className={cell}>{b.pax}</td>
                  <td className={cell}>{rango(b.tarifas.unaHora)}</td>
                  <td className={cell}>{rango(b.tarifas.dosHoras)}</td>
                  <td className={cell}>{rango(b.tarifas.medioDia)}</td>
                  <td className={cell}>{rango(b.tarifas.diaCompleto)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-gray-500 mt-2">{t.seasonColHint}</p>
      </section>

      {/* Con licencia */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">{t.conLicenciaTitle}</h2>
        <p className="text-gray-600 mb-5 max-w-3xl">{t.conLicenciaLead}</p>
        <div className="overflow-x-auto rounded-xl border border-gray-200">
          <table className="w-full min-w-[640px]">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className={head}>{t.thBoat}</th>
                <th className={head}>{t.thPax}</th>
                <th className={head}>{t.thHalf}</th>
                <th className={head}>{t.thFull}</th>
                <th className={head}>{t.th3d}</th>
                <th className={head}>{t.th7d}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {conLicencia.map((b) => (
                <tr key={b.slug}>
                  <td className={`${cell} font-medium text-gray-900`}>
                    {b.nombre}{b.requiereCapitan ? <sup>¹</sup> : null}
                  </td>
                  <td className={cell}>{b.pax}</td>
                  <td className={cell}>{rango(b.tarifas.medioDia)}</td>
                  <td className={cell}>{rango(b.tarifas.diaCompleto)}</td>
                  <td className={cell}>{rango(b.tarifas.tresDias)}</td>
                  <td className={cell}>{rango(b.tarifas.sieteDias)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-gray-500 mt-2">{t.seasonColHint}</p>
        <p className="text-xs text-gray-500 mt-1">{t.captainNote}</p>
      </section>

      {/* Incluye / no incluye */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-emerald-100 bg-emerald-50/50 p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">{t.includesTitle}</h2>
          <ul className="space-y-2 text-gray-700">
            {t.includes.map((x) => (
              <li key={x} className="flex gap-2"><span aria-hidden className="text-emerald-600">✓</span><span>{x}</span></li>
            ))}
          </ul>
        </div>
        <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">{t.excludesTitle}</h2>
          <ul className="space-y-2 text-gray-700">
            {t.excludes.map((x) => (
              <li key={x} className="flex gap-2"><span aria-hidden className="text-gray-400">✗</span><span>{x}</span></li>
            ))}
          </ul>
        </div>
      </section>

      {/* Temporadas */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">{t.seasonsTitle}</h2>
        <p className="text-gray-600 mb-5 max-w-3xl">{t.seasonsLead}</p>
        <div className="grid gap-4 sm:grid-cols-3">
          {t.seasons.map((s) => (
            <div key={s.name} className="rounded-2xl border border-gray-200 p-5">
              <h3 className="font-bold text-gray-900">{s.name}</h3>
              <p className="text-sm text-amber-700 font-medium mb-2">{s.months}</p>
              <p className="text-sm text-gray-600">{s.note}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Sunset */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="rounded-2xl bg-gradient-to-r from-amber-500 to-orange-500 text-white p-8">
          <h2 className="text-2xl font-bold mb-2">{t.sunsetTitle}</h2>
          <p className="max-w-2xl text-white/95">{t.sunsetText}</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">{t.faqTitle}</h2>
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

      {/* CTA */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="rounded-2xl border border-blue-100 bg-blue-50 p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">{t.ctaTitle}</h2>
          <p className="text-gray-600 mb-5 max-w-2xl mx-auto">{t.ctaText}</p>
          <Link
            href={bookingsHref}
            className="inline-block bg-blue-600 text-white font-semibold px-6 py-3 rounded-full hover:bg-blue-700 transition-colors"
          >
            {t.ctaLabel}
          </Link>
        </div>
      </section>

      {/* Enlaces relacionados */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-14">
        <h2 className="text-lg font-bold text-gray-900 mb-4">{t.relatedTitle}</h2>
        <ul className="flex flex-wrap gap-3">
          <li>
            <Link href={localizedHref('rentalWithoutLicence', lang)} className="inline-block rounded-full border border-gray-200 px-4 py-2 text-sm text-gray-700 hover:border-blue-300 hover:text-blue-700">
              {t.relatedSinLicencia}
            </Link>
          </li>
          <li>
            <Link href={localizedHref('rentalWithLicence', lang)} className="inline-block rounded-full border border-gray-200 px-4 py-2 text-sm text-gray-700 hover:border-blue-300 hover:text-blue-700">
              {t.relatedConLicencia}
            </Link>
          </li>
          <li>
            <Link href={localizedHref('experiences', lang)} className="inline-block rounded-full border border-gray-200 px-4 py-2 text-sm text-gray-700 hover:border-blue-300 hover:text-blue-700">
              {t.relatedExperiencias}
            </Link>
          </li>
        </ul>
      </section>
    </main>
  );
}
