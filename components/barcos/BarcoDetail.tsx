import Image from 'next/image';
import Link from 'next/link';
import {
  Users,
  Ruler,
  Gauge,
  Anchor,
  Check,
  Sparkles,
  ChevronRight,
  MessageCircle,
} from 'lucide-react';
import type { Barco } from '@/lib/data/fleet';
import FleetCard from '@/components/home/FleetCard';

const formatPrecio = (n: number | null) =>
  n === null ? '—' : `${n}€`;

const WHATSAPP_HREF = (nombre: string) =>
  `https://wa.me/34623995700?text=${encodeURIComponent(
    `Hola, me interesa alquilar el barco ${nombre}. ¿Disponibilidad?`
  )}`;

const FAQ_BASE = [
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
];

export default function BarcoDetail({
  barco,
  similares,
}: {
  barco: Barco;
  similares: Barco[];
}) {
  const tieneMedioDia = barco.precios.medioDiaBaja !== null;
  const categoriaLabel =
    barco.categoria === 'sin-licencia' ? 'Sin Licencia' : 'Con Licencia';
  const siloHref =
    barco.categoria === 'sin-licencia'
      ? '/alquiler-barco-sin-licencia-roses'
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
            <Link href="/" className="hover:text-blue-600">
              Inicio
            </Link>
          </li>
          <li aria-hidden>
            <ChevronRight className="w-4 h-4" />
          </li>
          <li>
            <Link href="/barcos" className="hover:text-blue-600">
              Barcos
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

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div className="relative aspect-[4/3] w-full rounded-3xl overflow-hidden shadow-lg">
            <Image
              src={barco.imagen}
              alt={`${barco.nombre} — alquiler de barco ${categoriaLabel.toLowerCase()} en Roses`}
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
          </div>

          <div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              {barco.nombre}
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              {barco.descripcionCorta}
            </p>

            <ul className="grid grid-cols-2 gap-4 mb-8">
              <li className="flex items-center gap-3 bg-gray-50 rounded-xl p-4">
                <Users className="w-5 h-5 text-blue-600" />
                <div>
                  <p className="text-xs text-gray-500">Capacidad</p>
                  <p className="font-semibold text-gray-900">
                    {barco.pax} personas
                  </p>
                </div>
              </li>
              <li className="flex items-center gap-3 bg-gray-50 rounded-xl p-4">
                <Ruler className="w-5 h-5 text-blue-600" />
                <div>
                  <p className="text-xs text-gray-500">Eslora</p>
                  <p className="font-semibold text-gray-900">{barco.eslora}</p>
                </div>
              </li>
              <li className="flex items-center gap-3 bg-gray-50 rounded-xl p-4">
                <Gauge className="w-5 h-5 text-blue-600" />
                <div>
                  <p className="text-xs text-gray-500">Motor</p>
                  <p className="font-semibold text-gray-900">{barco.motor}</p>
                </div>
              </li>
              <li className="flex items-center gap-3 bg-gray-50 rounded-xl p-4">
                <Anchor className="w-5 h-5 text-blue-600" />
                <div>
                  <p className="text-xs text-gray-500">Categoría</p>
                  <p className="font-semibold text-gray-900">
                    {categoriaLabel}
                  </p>
                </div>
              </li>
            </ul>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href={`/reservas?barco=${barco.slug}`}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-blue-600 text-white font-bold shadow-md hover:bg-blue-700 transition-colors"
              >
                Reservar este barco
              </Link>
              <a
                href={WHATSAPP_HREF(barco.nombre)}
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border-2 border-[#25D366] text-[#25D366] font-bold hover:bg-[#25D366] hover:text-white transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp
              </a>
            </div>
            <p className="text-sm text-gray-500 mt-4">
              Desde{' '}
              <span className="font-semibold text-gray-900">
                {barco.precioDesde}€
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* Equipamiento */}
      {barco.equipamiento.length > 0 && (
        <section className="bg-gray-50 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Equipamiento
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

      {/* Precios */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            Tarifas
          </h2>
          <div className="overflow-x-auto rounded-2xl border border-gray-200">
            <table className="w-full text-left">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-sm font-semibold text-gray-700">
                    Duración
                  </th>
                  <th className="px-4 py-3 text-sm font-semibold text-gray-700">
                    Temporada baja
                  </th>
                  <th className="px-4 py-3 text-sm font-semibold text-gray-700">
                    Temporada alta
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr>
                  <td className="px-4 py-3 font-medium text-gray-900">
                    Medio día
                    {barco.precios.notaMedioDia && (
                      <span className="block text-xs text-gray-500 font-normal">
                        {barco.precios.notaMedioDia}
                      </span>
                    )}
                  </td>
                  <td className="px-4 py-3 text-gray-800">
                    {tieneMedioDia
                      ? formatPrecio(barco.precios.medioDiaBaja)
                      : 'Consultar'}
                  </td>
                  <td className="px-4 py-3 text-gray-800">
                    {tieneMedioDia
                      ? formatPrecio(barco.precios.medioDiaAlta)
                      : 'Consultar'}
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-gray-900">
                    Día completo
                  </td>
                  <td className="px-4 py-3 text-gray-800">
                    {formatPrecio(barco.precios.diaCompletoBaja)}
                  </td>
                  <td className="px-4 py-3 text-gray-800">
                    {formatPrecio(barco.precios.diaCompletoAlta)}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-500 mt-3">
            Combustible y fianza no incluidos. Precios sujetos a disponibilidad.
          </p>
        </div>
      </section>

      {/* Extras */}
      {barco.extras && barco.extras.length > 0 && (
        <section className="bg-gray-50 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Extras disponibles
            </h2>
            <ul className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {barco.extras.map((extra) => (
                <li
                  key={extra.nombre}
                  className="bg-white rounded-xl p-5 shadow-sm flex items-center justify-between"
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
      )}

      {/* FAQ */}
      <section className="py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            Preguntas frecuentes
          </h2>
          <div className="space-y-3">
            {FAQ_BASE.map((item) => (
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
                Otros barcos {categoriaLabel.toLowerCase()}
              </h2>
              <Link
                href={siloHref}
                className="text-sm font-semibold text-blue-600 hover:text-blue-700"
              >
                Ver guía completa →
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {similares.map((b) => (
                <FleetCard key={b.slug} barco={b} />
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
