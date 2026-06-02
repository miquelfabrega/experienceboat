import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import {
  getBarcoBySlug,
  getBarcoSlugs,
  getBarcosSimilares,
} from '@/lib/data/fleet';
import BarcoDetail from '@/components/barcos/BarcoDetail';

const SITE = 'https://www.experienceboat.es';

export const dynamic = 'force-static';
export const dynamicParams = false;

export function generateStaticParams() {
  return getBarcoSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const barco = getBarcoBySlug(params.slug);
  if (!barco) return { title: 'Embarcació no trobada' };

  const url = `${SITE}/ca/embarcacions/${barco.slug}`;
  const esUrl = `${SITE}/barcos/${barco.slug}`;
  const frUrl = `${SITE}/fr/bateaux/${barco.slug}`;
  const enUrl = `${SITE}/en/boats/${barco.slug}`;
  const title = `${barco.nombre} — Lloguer Roses`;
  const description = barco.descripcionCorta;

  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: {
        'x-default': esUrl,
        es: esUrl,
        ca: url,
        fr: frUrl,
        en: enUrl,
      },
    },
    openGraph: {
      title,
      description,
      url,
      siteName: 'Experience Boat',
      locale: 'ca_ES',
      type: 'website',
      images: [barco.imagen],
    },
    twitter: {
      card: 'summary_large_image',
      images: [barco.imagen],
    },
  };
}

export default function EmbarcacioSlugPage({
  params,
}: {
  params: { slug: string };
}) {
  const barco = getBarcoBySlug(params.slug);
  if (!barco) notFound();

  const similares = getBarcosSimilares(barco.slug, 3);
  const url = `${SITE}/ca/embarcacions/${barco.slug}`;

  const { tarifas } = barco;
  const offers = [
    ...(tarifas.medioDia
      ? [
          {
            '@type': 'Offer',
            name: 'Mitja jornada · temporada baixa',
            price: tarifas.medioDia.baja,
            priceCurrency: 'EUR',
            availability: 'https://schema.org/InStock',
            url,
          },
          {
            '@type': 'Offer',
            name: 'Mitja jornada · temporada alta',
            price: tarifas.medioDia.alta,
            priceCurrency: 'EUR',
            availability: 'https://schema.org/InStock',
            url,
          },
        ]
      : []),
    ...(tarifas.diaCompleto
      ? [
          {
            '@type': 'Offer',
            name: 'Jornada completa · temporada baixa',
            price: tarifas.diaCompleto.baja,
            priceCurrency: 'EUR',
            availability: 'https://schema.org/InStock',
            url,
          },
          {
            '@type': 'Offer',
            name: 'Jornada completa · temporada alta',
            price: tarifas.diaCompleto.alta,
            priceCurrency: 'EUR',
            availability: 'https://schema.org/InStock',
            url,
          },
        ]
      : []),
  ];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType:
      barco.categoria === 'sin-licencia'
        ? "Lloguer d'embarcació sense llicència"
        : "Lloguer d'embarcació amb llicència",
    name: `Lloguer ${barco.nombre} — Roses`,
    description: barco.descripcionCorta,
    image: [barco.imagen],
    provider: {
      '@type': 'LocalBusiness',
      '@id': 'https://www.experienceboat.es/#local-business',
      name: 'Experience Boat',
    },
    areaServed: {
      '@type': 'Place',
      name: 'Roses, Costa Brava',
    },
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'EUR',
      lowPrice: barco.precioDesde,
      highPrice:
        tarifas.sieteDias?.alta ??
        tarifas.diaCompleto?.alta ??
        tarifas.medioDia?.alta ??
        barco.precioDesde,
      offerCount: offers.length,
      offers,
      url,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BarcoDetail barco={barco} similares={similares} lang="ca" />
    </>
  );
}
