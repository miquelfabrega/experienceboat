import Image from 'next/image';
import { Users, Ruler, Zap, Clock, ChevronRight } from 'lucide-react';

const boats = [
  {
    id: 1,
    model: 'Bayliner Element E5',
    image: 'https://picsum.photos/seed/boat1/600/400',
    capacity: 4,
    length: '4.6 m',
    power: '90 CV',
    halfDay: '€200',
    fullDay: '€350',
    badge: 'Ideal for couples',
    badgeColor: 'bg-sky-100 text-sky-700',
  },
  {
    id: 2,
    model: 'Quicksilver 475 Activ',
    image: 'https://picsum.photos/seed/boat2/600/400',
    capacity: 5,
    length: '4.7 m',
    power: '100 CV',
    halfDay: '€220',
    fullDay: '€380',
    badge: 'Most popular',
    badgeColor: 'bg-orange-100 text-orange-700',
  },
  {
    id: 3,
    model: 'Bayliner VR5',
    image: 'https://picsum.photos/seed/boat3/600/400',
    capacity: 6,
    length: '5.2 m',
    power: '115 CV',
    halfDay: '€250',
    fullDay: '€420',
    badge: 'Medium groups',
    badgeColor: 'bg-teal-100 text-teal-700',
  },
  {
    id: 4,
    model: 'Quicksilver 605 Open',
    image: 'https://picsum.photos/seed/boat4/600/400',
    capacity: 8,
    length: '6.0 m',
    power: '150 CV',
    halfDay: '€300',
    fullDay: '€500',
    badge: 'Large groups',
    badgeColor: 'bg-violet-100 text-violet-700',
  },
];


export default function BoatGridSection() {
  return (
    <section id="boats" className="py-20 bg-white scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-4">
          <span className="text-sky-600 font-semibold text-sm uppercase tracking-widest">Licensed motorboat fleet</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 text-center mb-4">
          Our motorboats available for rental on the Costa Brava
        </h2>
        <p className="text-gray-500 text-center max-w-2xl mx-auto mb-12 text-lg">
          All our boats are powerful enough to reach Cap de Creus comfortably, even in choppier
          conditions. Choose by capacity and your planned route.
        </p>

        <div
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="anim-stagger grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {boats.map((boat) => (
            <article
              className="group bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col anim-fade-up"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                <Image
                  src={boat.image}
                  alt={`${boat.model} motorboat for rental on the Costa Brava`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className={`absolute top-3 left-3 text-xs font-bold px-3 py-1 rounded-full ${boat.badgeColor}`}>
                  {boat.badge}
                </span>
              </div>

              <div className="p-5 flex flex-col flex-1">
                <h3 className="font-bold text-gray-900 text-lg mb-3 leading-tight">{boat.model}</h3>

                <div className="flex flex-col gap-2 mb-4 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-sky-500 shrink-0" />
                    <span>Capacity: <strong className="text-gray-900">{boat.capacity} people</strong></span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Ruler className="w-4 h-4 text-sky-500 shrink-0" />
                    <span>Length: <strong className="text-gray-900">{boat.length}</strong></span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Zap className="w-4 h-4 text-sky-500 shrink-0" />
                    <span>Engine: <strong className="text-gray-900">{boat.power}</strong></span>
                  </div>
                </div>

                <div className="bg-slate-50 rounded-xl p-3 mb-4 flex gap-3 justify-between text-sm">
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-4 h-4 text-sky-400" />
                    <div>
                      <div className="text-gray-500 text-xs">Half day (4h)</div>
                      <div className="font-extrabold text-gray-900 text-base">{boat.halfDay}</div>
                    </div>
                  </div>
                  <div className="w-px bg-gray-200" />
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-4 h-4 text-sky-400" />
                    <div>
                      <div className="text-gray-500 text-xs">Full day (8h)</div>
                      <div className="font-extrabold text-gray-900 text-base">{boat.fullDay}</div>
                    </div>
                  </div>
                </div>

                <a
                  href={`https://wa.me/34623995700?text=Hello%2C%20I%27m%20interested%20in%20the%20${encodeURIComponent(boat.model)}%20motorboat%20on%20the%20Costa%20Brava`}
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="mt-auto flex items-center justify-center gap-2 w-full bg-sky-500 hover:bg-sky-400 text-white font-bold py-3 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-sky-400/30 group/btn"
                  aria-label={`Check availability for ${boat.model}`}
                >
                  Check availability
                  <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
