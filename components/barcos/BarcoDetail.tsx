import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';
import {
  Users,
  Ruler,
  Gauge,
  Anchor,
  Check,
  Sparkles,
  ChevronRight,
  MessageCircle,
  CalendarDays,
  PackageCheck,
} from 'lucide-react';
import type { Barco } from '@/lib/data/fleet';
import { EXTRAS_DISPONIBLES } from '@/lib/data/fleet';
import { getGallery } from '@/lib/data/boats-gallery';
import BoatGallery from '@/components/BoatGallery';
import FleetCard from '@/components/home/FleetCard';

type DetailLang = 'es' | 'ca';

const formatPrecio = (n: number | null) =>
  n === null ? '—' : `${n}€`;

const WHATSAPP_HREF = (nombre: string, lang: DetailLang) =>
  `https://wa.me/34623995700?text=${encodeURIComponent(
    lang === 'ca'
      ? `Hola, m'interessa llogar l'embarcació ${nombre}. Disponibilitat?`
      : `Hola, me interesa alquilar el barco ${nombre}. ¿Disponibilidad?`
  )}`;

const FAQ_BASE: Record<DetailLang, { q: string; a: string }[]> = {
  es: [
    {
      q: '¿Necesito licencia para navegar?',
      a: 'Solo para los barcos marcados como "Con Licencia". Las embarcaciones sin licencia se pueden alquilar a partir de 18 años con DNI o pasaporte.',
    },
    {
      q: '¿El precio incluye combustible?',
      a: 'No. El consumo se calcula al final del alquiler según las horas y el motor. Te lo explicamos antes de zarpar para que no haya sorpresas.',
    },
    {
      q: '¿Hay que dejar fianza?',
      a: 'Sí, se solicita una fianza al embarcar que se devuelve íntegra al regresar el barco en las mismas condiciones.',
    },
  ],
  ca: [
    {
      q: 'Necessito llicència per navegar?',
      a: 'Només per a les embarcacions marcades com a "Amb llicència". Les embarcacions sense llicència es poden llogar a partir dels 18 anys amb DNI o passaport.',
    },
    {
      q: 'El preu inclou el combustible?',
      a: 'No. El consum es calcula al final del lloguer segons les hores i el motor. Us ho expliquem abans de salpar perquè no hi hagi sorpreses.',
    },
    {
      q: 'Cal deixar una fiança?',
      a: 'Sí, es demana una fiança en embarcar que es retorna íntegra en tornar l\'embarcació en les mateixes condicions.',
    },
  ],
};

const UI: Record<DetailLang, {
  inicio: string; barcos: string; barcosHref: string;
  reservaFecha: string; integrando: string; consultarDisp: string;
  capacidad: string; personas: string; eslora: string; motor: string; categoria: string;
  dudas: string; equipamiento: string; galeria: string; queIncluye: string;
  tarifas: string; duracion: string; tempBaja: string; tempMedia: string; tempAlta: string;
  unaHora: string; dosHoras: string;
  medioDia: string; diaCompleto: string; tresDias: string; sieteDias: string;
  patronObligatorio: string; medioDiaParen: string; diaCompletoParen: string;
  sunsetTitle: string; combustibleFianza: string;
  extras: string; extrasLead: string;
  faq: string; otrosBarcos: string; guiaCompleta: string;
  sinLicencia: string; conLicencia: string;
  desde: string;
}> = {
  es: {
    inicio: 'Inicio', barcos: 'Barcos', barcosHref: '/barcos',
    reservaFecha: 'Reserva tu fecha',
    integrando: 'Estamos integrando el calendario online para este barco. Mientras tanto, contáctanos por WhatsApp y te confirmamos disponibilidad al momento.',
    consultarDisp: 'Consultar disponibilidad',
    capacidad: 'Capacidad', personas: 'personas', eslora: 'Eslora', motor: 'Motor', categoria: 'Categoría',
    dudas: '¿Dudas? Pregúntanos por WhatsApp',
    equipamiento: 'Equipamiento del barco', galeria: 'Galería', queIncluye: '¿Qué incluye el alquiler?',
    tarifas: 'Tarifas', duracion: 'Duración', tempBaja: 'Temp. baja', tempMedia: 'Temp. media', tempAlta: 'Temp. alta',
    unaHora: '1 hora', dosHoras: '2 horas',
    medioDia: 'Medio día', diaCompleto: 'Día completo', tresDias: '3 días', sieteDias: '7 días',
    patronObligatorio: 'Patrón obligatorio:', medioDiaParen: '(medio día)', diaCompletoParen: '(día completo)',
    sunsetTitle: 'Sunset en barco (2-3 h)',
    combustibleFianza: 'Combustible y fianza no incluidos. Precios sujetos a disponibilidad.',
    extras: 'Extras contratables', extrasLead: 'Añade actividades náuticas al alquiler de tu barco. Disponibles bajo solicitud al hacer la reserva.',
    faq: 'Preguntas frecuentes', otrosBarcos: 'Otros barcos', guiaCompleta: 'Ver guía completa →',
    sinLicencia: 'Sin Licencia', conLicencia: 'Con Licencia',
    desde: 'Desde ',
  },
  ca: {
    inicio: 'Inici', barcos: 'Embarcacions', barcosHref: '/ca/embarcacions',
    reservaFecha: 'Reserveu la vostra data',
    integrando: 'Estem integrant el calendari en línia per a aquesta embarcació. Mentrestant, contacteu-nos per WhatsApp i us confirmem la disponibilitat al moment.',
    consultarDisp: 'Consultar disponibilitat',
    capacidad: 'Capacitat', personas: 'persones', eslora: 'Eslora', motor: 'Motor', categoria: 'Categoria',
    dudas: 'Teniu dubtes? Pregunteu-nos per WhatsApp',
    equipamiento: 'Equipament de l\'embarcació', galeria: 'Galeria', queIncluye: 'Què inclou el lloguer?',
    tarifas: 'Tarifes', duracion: 'Durada', tempBaja: 'Temp. baixa', tempMedia: 'Temp. mitjana', tempAlta: 'Temp. alta',
    unaHora: '1 hora', dosHoras: '2 hores',
    medioDia: 'Mitja jornada', diaCompleto: 'Jornada completa', tresDias: '3 dies', sieteDias: '7 dies',
    patronObligatorio: 'Patró obligatori:', medioDiaParen: '(mitja jornada)', diaCompletoParen: '(jornada completa)',
    sunsetTitle: 'Capvespre en vaixell (2-3 h)',
    combustibleFianza: 'Combustible i fiança no inclosos. Preus subjectes a disponibilitat.',
    extras: 'Extres contractables', extrasLead: 'Afegiu activitats nàutiques al lloguer de la vostra embarcació. Disponibles sota petició en fer la reserva.',
    faq: 'Preguntes freqüents', otrosBarcos: 'Altres embarcacions', guiaCompleta: 'Veure guia completa →',
    sinLicencia: 'Sense llicència', conLicencia: 'Amb llicència',
    desde: 'Des de ',
  },
};

export default function BarcoDetail({
  barco,
  similares,
  lang = 'es',
}: {
  barco: Barco;
  similares: Barco[];
  lang?: DetailLang;
}) {
  const t = UI[lang];
  const { tarifas } = barco;
  const galeria = getGallery(barco.slug);
  const FILAS_TARIFAS = [
    { label: t.unaHora, precios: tarifas.unaHora },
    { label: t.dosHoras, precios: tarifas.dosHoras },
    { label: t.medioDia, nota: barco.notaMedioDia, precios: tarifas.medioDia },
    { label: t.diaCompleto, precios: tarifas.diaCompleto },
    { label: t.tresDias, precios: tarifas.tresDias },
    { label: t.sieteDias, precios: tarifas.sieteDias },
  ].filter(
    (f): f is { label: string; nota?: string; precios: { baja: number; media: number; alta: number } } =>
      Boolean(f.precios)
  );
  const categoriaLabel =
    barco.categoria === 'sin-licencia' ? t.sinLicencia : t.conLicencia;
  const siloHref =
    barco.categoria === 'sin-licencia'
      ? lang === 'ca'
        ? '/ca/lloguer-vaixell-sense-llicencia-roses'
        : '/alquiler-barco-sin-licencia-roses'
      : lang === 'ca'
        ? '/ca/lloguer-vaixell-amb-llicencia-roses'
        : '/alquiler-barco-con-licencia-roses';

  return (
    <main className="bg-white">
      {/* Breadcrumb */}
      <nav
        aria-label="Breadcrumb"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 text-sm text-gray-500"
      >
        <ol className="flex items-center gap-2 flex-wrap">
          <li>
            <Link href={lang === 'ca' ? '/ca' : '/'} className="hover:text-blue-600">
              {t.inicio}
            </Link>
          </li>
          <li aria-hidden>
            <ChevronRight className="w-4 h-4" />
          </li>
          <li>
            <Link href={t.barcosHref} className="hover:text-blue-600">
              {t.barcos}
            </Link>
          </li>
          <li aria-hidden>
            <ChevronRight className="w-4 h-4" />
          </li>
          <li className="text-gray-900 font-medium" aria-current="page">
            {barco.nombre}
          </li>
        </ol>
      </nav>

      {/* Hero — imagen + calendario lado a lado */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-10">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-2">
          {barco.nombre}
        </h1>
        <p className="text-lg text-gray-600 mb-6 max-w-3xl">
          {barco.descripcionCorta}
        </p>

        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-stretch">
          <div className="relative aspect-[4/3] lg:aspect-auto lg:min-h-[480px] w-full rounded-3xl overflow-hidden shadow-lg">
            <Image
              src={barco.imagen}
              alt={
                lang === 'ca'
                  ? `${barco.nombre} — lloguer d'embarcació ${categoriaLabel.toLowerCase()} a Roses`
                  : `${barco.nombre} — alquiler de barco ${categoriaLabel.toLowerCase()} en Roses`
              }
              fill
              priority
              className="object-cover"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
            <div className="absolute top-4 left-4 flex flex-col gap-2">
              <span
                className={`px-3 py-1 text-xs font-bold rounded-full text-white ${
                  barco.categoria === 'sin-licencia'
                    ? 'bg-green-500'
                    : 'bg-blue-500'
                }`}
              >
                {categoriaLabel}
              </span>
              {barco.badge && (
                <span className="px-3 py-1 text-xs font-bold rounded-full bg-purple-500 text-white shadow-md">
                  {barco.badge}
                </span>
              )}
            </div>
            <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 text-sm shadow-md">
              <span className="text-gray-500">{t.desde}</span>
              <span className="font-bold text-gray-900">{barco.precioDesde}€</span>
            </div>
          </div>

          <div
            id="reservar"
            className="bg-white rounded-3xl shadow-lg border border-gray-200 p-4 sm:p-6 flex flex-col scroll-mt-24"
          >
            <div className="flex items-center gap-2 mb-4">
              <CalendarDays className="w-5 h-5 text-blue-600" />
              <h2 className="text-lg font-bold text-gray-900">
                {t.reservaFecha}
              </h2>
            </div>
            <div className="flex-1 flex items-center justify-center min-h-[380px]">
              {barco.widgetReservaId ? (
                <div className="w-full">
                  <booking-widget widget-id={barco.widgetReservaId}></booking-widget>
                  <Script
                    src="https://widgets.regiondo.net/booking/v1/booking-widget.min.js"
                    strategy="afterInteractive"
                  />
                </div>
              ) : (
                <div className="text-center max-w-sm">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-blue-50 mb-4">
                    <CalendarDays className="w-7 h-7 text-blue-600" />
                  </div>
                  <p className="text-gray-700 mb-4">
                    {t.integrando}
                  </p>
                  <a
                    href={WHATSAPP_HREF(barco.nombre, lang)}
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#25D366] text-white font-semibold hover:bg-[#1faa55] transition-colors"
                  >
                    <MessageCircle className="w-5 h-5" />
                    {t.consultarDisp}
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Specs row */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
        <ul className="grid grid-cols-2 lg:grid-cols-4 gap-3">
          <li className="flex items-center gap-3 bg-gray-50 rounded-xl p-4">
            <Users className="w-5 h-5 text-blue-600" />
            <div>
              <p className="text-xs text-gray-500">{t.capacidad}</p>
              <p className="font-semibold text-gray-900">{barco.pax} {t.personas}</p>
            </div>
          </li>
          <li className="flex items-center gap-3 bg-gray-50 rounded-xl p-4">
            <Ruler className="w-5 h-5 text-blue-600" />
            <div>
              <p className="text-xs text-gray-500">{t.eslora}</p>
              <p className="font-semibold text-gray-900">{barco.eslora}</p>
            </div>
          </li>
          <li className="flex items-center gap-3 bg-gray-50 rounded-xl p-4">
            <Gauge className="w-5 h-5 text-blue-600" />
            <div>
              <p className="text-xs text-gray-500">{t.motor}</p>
              <p className="font-semibold text-gray-900">{barco.motor}</p>
            </div>
          </li>
          <li className="flex items-center gap-3 bg-gray-50 rounded-xl p-4">
            <Anchor className="w-5 h-5 text-blue-600" />
            <div>
              <p className="text-xs text-gray-500">{t.categoria}</p>
              <p className="font-semibold text-gray-900">{categoriaLabel}</p>
            </div>
          </li>
        </ul>
        <div className="mt-6 flex justify-end">
          <a
            href={WHATSAPP_HREF(barco.nombre, lang)}
            target="_blank"
            rel="nofollow noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#25D366] hover:underline"
          >
            <MessageCircle className="w-4 h-4" />
            {t.dudas}
          </a>
        </div>
      </section>

      {/* Equipamiento */}
      {barco.equipamiento.length > 0 && (
        <section className="bg-gray-50 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              {t.equipamiento}
            </h2>
            <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {barco.equipamiento.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 bg-white rounded-xl p-4 shadow-sm"
                >
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="text-gray-800">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* Galería */}
      {galeria.length > 0 && (
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              {t.galeria}
            </h2>
            <BoatGallery images={galeria} nombre={barco.nombre} />
          </div>
        </section>
      )}

      {/* Inclusiones */}
      {barco.inclusiones && barco.inclusiones.length > 0 && (
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-6">
              <PackageCheck className="w-7 h-7 text-blue-600" />
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                {t.queIncluye}
              </h2>
            </div>
            <ul className="grid sm:grid-cols-2 gap-3">
              {barco.inclusiones.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 bg-blue-50/50 border border-blue-100 rounded-xl p-4"
                >
                  <Check className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-800">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* Precios */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            {t.tarifas}
          </h2>
          <div className="overflow-x-auto rounded-2xl border border-gray-200 bg-white">
            <table className="w-full text-left">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-sm font-semibold text-gray-700">
                    {t.duracion}
                  </th>
                  <th className="px-4 py-3 text-sm font-semibold text-gray-700">
                    {t.tempBaja}
                  </th>
                  <th className="px-4 py-3 text-sm font-semibold text-gray-700">
                    {t.tempMedia}
                  </th>
                  <th className="px-4 py-3 text-sm font-semibold text-gray-700">
                    {t.tempAlta}
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {FILAS_TARIFAS.map((fila) => (
                  <tr key={fila.label}>
                    <td className="px-4 py-3 font-medium text-gray-900">
                      {fila.label}
                      {fila.nota && (
                        <span className="block text-xs text-gray-500 font-normal">
                          {fila.nota}
                        </span>
                      )}
                    </td>
                    <td className="px-4 py-3 text-gray-800">
                      {formatPrecio(fila.precios.baja)}
                    </td>
                    <td className="px-4 py-3 text-gray-800">
                      {formatPrecio(fila.precios.media)}
                    </td>
                    <td className="px-4 py-3 text-gray-800">
                      {formatPrecio(fila.precios.alta)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {barco.requiereCapitan && barco.suplementoCapitan && (
            <p className="text-sm text-gray-700 mt-3">
              <strong>{t.patronObligatorio}</strong>{' '}
              {lang === 'ca' ? 'suplement de' : 'suplemento de'}{' '}
              {barco.suplementoCapitan.medioDia}€ {t.medioDiaParen} /{' '}
              {barco.suplementoCapitan.diaCompleto}€ {t.diaCompletoParen}.
            </p>
          )}

          {barco.sunset && (
            <div className="mt-6 rounded-2xl border border-gray-200 bg-white p-5">
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                {t.sunsetTitle}
              </h3>
              <div className="flex flex-wrap gap-3 text-sm">
                <span className="rounded-full bg-gray-50 px-4 py-2">
                  {t.tempBaja} <strong>{barco.sunset.baja}€</strong>
                </span>
                <span className="rounded-full bg-gray-50 px-4 py-2">
                  {t.tempMedia} <strong>{barco.sunset.media}€</strong>
                </span>
                <span className="rounded-full bg-gray-50 px-4 py-2">
                  {t.tempAlta} <strong>{barco.sunset.alta}€</strong>
                </span>
              </div>
            </div>
          )}

          <p className="text-sm text-gray-500 mt-3">
            {t.combustibleFianza}
          </p>
        </div>
      </section>

      {/* Extras */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
            {t.extras}
          </h2>
          <p className="text-gray-600 mb-6">
            {t.extrasLead}
          </p>
          <ul className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {EXTRAS_DISPONIBLES.map((extra) => (
              <li
                key={extra.nombre}
                className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm flex items-center justify-between"
              >
                <div className="flex items-center gap-3">
                  <Sparkles className="w-5 h-5 text-purple-500" />
                  <span className="font-medium text-gray-900">
                    {extra.nombre}
                  </span>
                </div>
                <span className="font-semibold text-gray-900">
                  {extra.precio}€
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            {t.faq}
          </h2>
          <div className="space-y-3">
            {FAQ_BASE[lang].map((item) => (
              <details
                key={item.q}
                className="group bg-gray-50 rounded-xl p-5"
              >
                <summary className="cursor-pointer font-semibold text-gray-900 flex items-center justify-between">
                  {item.q}
                  <ChevronRight className="w-5 h-5 transition-transform group-open:rotate-90" />
                </summary>
                <p className="mt-3 text-gray-700">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Otros barcos */}
      {similares.length > 0 && (
        <section className="bg-gray-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-end justify-between mb-8 flex-wrap gap-3">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                {t.otrosBarcos} {categoriaLabel.toLowerCase()}
              </h2>
              <Link
                href={siloHref}
                className="text-sm font-semibold text-blue-600 hover:text-blue-700"
              >
                {t.guiaCompleta}
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {similares.map((b) => (
                <FleetCard key={b.slug} barco={b} lang={lang} />
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
