import { Sun, Sunset, Calendar, Flame } from 'lucide-react';

const timeSlots = [
  {
    icon: Sun,
    time: '8:00 – 10:00',
    label: 'Primera hora de la mañana',
    desc: 'La luz es espectacular, los canales están en calma total y hay muy poco tráfico náutico. La opción preferida para fotografía y para quienes quieren disfrutar sin aglomeraciones.',
    highlight: 'Ideal para fotografía',
    highlightColor: 'text-amber-600 bg-amber-50',
  },
  {
    icon: Sunset,
    time: '18:00 – 20:00',
    label: 'Atardecer',
    desc: 'Los reflejos en el agua al caer la tarde convierten los canales en un escenario irrepetible. Es el momento de nuestro Sunset Experience, la salida más especial del catálogo.',
    highlight: 'Sunset Experience',
    highlightColor: 'text-orange-600 bg-orange-50',
  },
  {
    icon: Calendar,
    time: 'Mayo · Junio · Septiembre',
    label: 'Temporada media',
    desc: 'Las mejores condiciones de navegación, menos masificación en las calas y precios más accesibles que en plena temporada alta.',
    highlight: 'Mejor relación calidad-precio',
    highlightColor: 'text-teal-600 bg-teal-50',
  },
  {
    icon: Flame,
    time: 'Julio · Agosto',
    label: 'Temporada alta',
    desc: 'La temporada alta. Más ambiente, más calor, más reservas. Recomendamos reservar con al menos dos semanas de antelación.',
    highlight: 'Reserva con antelación',
    highlightColor: 'text-red-600 bg-red-50',
  },
];

export default function BestTimeSection() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-4">
          <span className="text-sky-600 font-semibold text-sm uppercase tracking-widest">Planifica tu salida</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 text-center mb-4">
          Cuándo visitar los canales de Santa Margarita en barco
        </h2>
        <p className="text-gray-500 text-center mb-14 text-lg max-w-2xl mx-auto">
          Los canales son navegables durante toda la temporada náutica, de abril a octubre. Estos son los
          mejores momentos según lo que busques.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {timeSlots.map((slot, i) => {
            const Icon = slot.icon;
            return (
              <div
                className="bg-white rounded-3xl p-7 border border-gray-100 shadow-sm hover:shadow-md hover:border-sky-200 transition-all duration-300 group flex gap-5 anim-fade-up"
              >
                <div className="w-12 h-12 bg-sky-500 group-hover:bg-sky-600 rounded-2xl flex items-center justify-center shrink-0 transition-colors shadow-md shadow-sky-500/30 mt-1">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-semibold uppercase tracking-wider mb-1">{slot.time}</p>
                  <h3 className="font-bold text-gray-900 text-lg mb-2 leading-snug">{slot.label}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-3">{slot.desc}</p>
                  <span className={`text-xs font-bold px-3 py-1 rounded-full ${slot.highlightColor}`}>
                    {slot.highlight}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
