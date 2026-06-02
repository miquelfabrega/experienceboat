import Image from 'next/image';
import Link from 'next/link';
import { Users, Ruler, Clock, ChevronRight } from 'lucide-react';
import { getBarcosActivos } from '@/lib/data/fleet';

type Lang = 'es' | 'fr' | 'en' | 'ca';

// Ficha de producto por idioma (solo ES y CA tienen ficha individual).
const boatFicheHref = (lang: Lang, slug?: string): string | null =>
  !slug ? null : lang === 'es' ? `/barcos/${slug}` : lang === 'ca' ? `/ca/embarcacions/${slug}` : null;

export interface BoatData {
  id: number;
  slug?: string;
  model: string;
  image: string;
  capacity: number;
  eslora: string;
  halfDay: string;
  fullDay: string;
  badge: string;
  badgeColor: string;
}

export interface BoatGridT {
  sectionLabel?: string;
  h2?: string;
  desc?: string;
  capacityLabel?: string;
  personLabel?: string;
  esloraLabel?: string;
  halfDayLabel?: string;
  fullDayLabel?: string;
  ctaBtn?: string;
  waMessagePrefix?: string;
  waMessageSuffix?: string;
  boats?: BoatData[];
}

const BADGE_STYLES = [
  'bg-sky-100 text-sky-700',
  'bg-orange-100 text-orange-700',
  'bg-teal-100 text-teal-700',
  'bg-violet-100 text-violet-700',
];

// Flota sin licencia derivada de la fuente de verdad (lib/data/fleet.ts).
const defaultBoats: BoatData[] = getBarcosActivos()
  .filter((b) => b.categoria === 'sin-licencia')
  .map((b, i) => ({
    id: i + 1,
    slug: b.slug,
    model: b.nombre,
    image: b.imagen,
    capacity: b.pax,
    eslora: b.eslora.replace(',', '.'),
    halfDay: `${b.tarifas.medioDia?.baja ?? b.precioDesde} €`,
    fullDay: b.tarifas.diaCompleto?.baja ? `${b.tarifas.diaCompleto.baja} €` : '—',
    badge: b.badge ?? '',
    badgeColor: BADGE_STYLES[i % BADGE_STYLES.length],
  }));

const defaults: Required<Omit<BoatGridT, 'boats'>> = {
  sectionLabel: 'Flota sin licencia',
  h2: 'Nuestros barcos sin licencia en Roses',
  desc: 'Disponemos de tres embarcaciones sin licencia, todas con capacidad para grupos de distintos tamaños. Salida desde la Marina de Santa Margarita. Reserva por medio día o día completo.',
  capacityLabel: 'Capacidad',
  personLabel: 'personas',
  esloraLabel: 'Eslora',
  halfDayLabel: 'Medio día (4h)',
  fullDayLabel: 'Día completo (8h)',
  ctaBtn: 'Ver disponibilidad',
  waMessagePrefix: 'Hola%2C%20me%20interesa%20el%20',
  waMessageSuffix: '%20sin%20licencia%20en%20Roses',
};

const containerVariants = { hidden: {}, visible: { transition: { staggerChildren: 0.12 } } };
const cardVariants = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.0, 0.0, 0.2, 1] as [number, number, number, number] } } };

export default function BoatGrid({ t, lang = 'es' }: { t?: BoatGridT; lang?: Lang }) {
  const tx = { ...defaults, ...t };
  const boats = t?.boats ?? defaultBoats;
  const ctaClass =
    'mt-auto flex items-center justify-center gap-2 w-full bg-sky-500 hover:bg-sky-400 text-white font-bold py-3 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-sky-400/30 group/btn';

  return (
    <section id="barcos" className="py-20 bg-white scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-4">
          <span className="text-sky-600 font-semibold text-sm uppercase tracking-widest">{tx.sectionLabel}</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 text-center mb-4">{tx.h2}</h2>
        <p className="text-gray-500 text-center max-w-2xl mx-auto mb-12 text-lg">{tx.desc}</p>

        <div
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="anim-stagger grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {boats.map((boat) => {
            const ficheHref = boatFicheHref(lang, boat.slug);
            return (
            <article
              key={boat.id}
              className="group bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col anim-fade-up"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                <Image
                  src={boat.image}
                  alt={`${boat.model}`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {boat.badge && <span className={`absolute top-3 left-3 text-xs font-bold px-3 py-1 rounded-full ${boat.badgeColor}`}>{boat.badge}</span>}
              </div>
              <div className="p-5 flex flex-col flex-1">
                <h3 className="font-bold text-gray-900 text-lg mb-3 leading-tight">{boat.model}</h3>
                <div className="flex flex-col gap-2 mb-4 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-sky-500 shrink-0" />
                    <span>{tx.capacityLabel}: <strong className="text-gray-900">{boat.capacity} {tx.personLabel}</strong></span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Ruler className="w-4 h-4 text-sky-500 shrink-0" />
                    <span>{tx.esloraLabel}: <strong className="text-gray-900">{boat.eslora}</strong></span>
                  </div>
                </div>
                <div className="bg-slate-50 rounded-xl p-3 mb-4 flex gap-3 justify-between text-sm">
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-4 h-4 text-sky-400" />
                    <div>
                      <div className="text-gray-500 text-xs">{tx.halfDayLabel}</div>
                      <div className="font-extrabold text-gray-900 text-base">{boat.halfDay}</div>
                    </div>
                  </div>
                  <div className="w-px bg-gray-200" />
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-4 h-4 text-sky-400" />
                    <div>
                      <div className="text-gray-500 text-xs">{tx.fullDayLabel}</div>
                      <div className="font-extrabold text-gray-900 text-base">{boat.fullDay}</div>
                    </div>
                  </div>
                </div>
                {ficheHref ? (
                  <Link href={ficheHref} className={ctaClass}>
                    {tx.ctaBtn}
                    <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                ) : (
                  <a
                    href={`https://wa.me/34623995700?text=${tx.waMessagePrefix}${encodeURIComponent(boat.model)}${tx.waMessageSuffix}`}
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                    className={ctaClass}
                  >
                    {tx.ctaBtn}
                    <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                )}
              </div>
            </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
