import { Navigation, Anchor, Home } from 'lucide-react';

const stages = [
  {
    time: '9:00 – 11:00',
    label: 'Salida desde los canales',
    icon: Navigation,
    color: 'text-cyan-400',
    nodeBg: 'bg-cyan-400',
    cardBorder: 'border-cyan-400/30',
    body: 'Salida desde los canales de Santa Margarita con las primeras luces del día. Recorrido por las vías navegables interiores antes de que la bahía de Roses se despierte. Una de las salidas más fotográficas de la jornada.',
    badge: null,
  },
  {
    time: '11:00 – 13:00',
    label: 'Rumbo al Cap de Creus',
    icon: Navigation,
    color: 'text-sky-400',
    nodeBg: 'bg-sky-400',
    cardBorder: 'border-sky-400/30',
    body: 'Navegación hacia el Cap bordeando la costa norte de la bahía. Primera parada para el baño en Cala Canyelles o Cala Almadraba según las condiciones del día. Aguas turquesa y fondo de arena.',
    badge: null,
  },
  {
    time: '13:00 – 15:00',
    label: 'Fondeo en el Cap de Creus',
    icon: Anchor,
    color: 'text-emerald-400',
    nodeBg: 'bg-emerald-400',
    cardBorder: 'border-emerald-400/30',
    body: 'Fondeo en una cala del Cap de Creus. Baño, comida a bordo y tiempo libre en el agua. Las calas volcánicas del parque natural — inaccesibles por tierra — se convierten en vuestra terraza privada.',
    badge: '⭐ Momento favorito de nuestros clientes',
  },
  {
    time: '15:00 – 17:00',
    label: 'Regreso por la costa sur',
    icon: Home,
    color: 'text-violet-400',
    nodeBg: 'bg-violet-400',
    cardBorder: 'border-violet-400/30',
    body: 'Exploración de las calas más interiores del parque natural o regreso tranquilo bordeando la costa sur. Vuelta a la Marina de Santa Margarita antes del cierre con el día bien aprovechado.',
    badge: null,
  },
];


type Lang = 'es' | 'fr';

interface RouteTimelineProps {
  lang?: Lang;
}

export default function RouteTimeline({ lang = 'es' }: RouteTimelineProps) {
  return (
    <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="mb-3 flex items-center gap-2">
          <Navigation size={18} className="text-[#0d4a47]" />
          <span className="text-sm font-semibold text-[#0d4a47] uppercase tracking-wider">
            Día completo · 8 horas
          </span>
        </div>
        <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900 mb-4 leading-tight">
          La ruta clásica — de los canales al Cap de Creus
        </h2>
        <p className="text-slate-500 mb-12 text-lg">
          La jornada que más repiten nuestros clientes con licencia. 8 horas, cuatro etapas, cero
          prisas.
        </p>

        <div
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="anim-stagger relative"
        >
          {/* Vertical connector line */}
          <div className="absolute left-5 top-6 bottom-6 w-0.5 bg-gradient-to-b from-cyan-400 via-emerald-400 to-violet-400 opacity-40" />

          <div className="space-y-8">
            {stages.map((stage) => {
              const Icon = stage.icon;
              return (
                <div key={stage.label}  className="anim-stagger relative flex gap-6">
                  {/* Node */}
                  <div
                    className={`relative z-10 shrink-0 w-10 h-10 rounded-full ${stage.nodeBg} flex items-center justify-center shadow-lg`}
                  >
                    <Icon size={18} className="text-white" />
                  </div>

                  {/* Card */}
                  <div
                    className={`flex-1 bg-slate-50 border ${stage.cardBorder} rounded-2xl p-5 pb-6`}
                  >
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <span className="text-xs font-mono font-semibold text-slate-400">
                        {stage.time}
                      </span>
                      {stage.badge && (
                        <span className="text-xs font-semibold bg-amber-100 text-amber-800 px-2.5 py-0.5 rounded-full">
                          {stage.badge}
                        </span>
                      )}
                    </div>
                    <h3 className="font-serif text-lg font-bold text-slate-900 mb-2">
                      {stage.label}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{stage.body}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
