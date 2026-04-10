import { ChevronRight } from 'lucide-react';

const routeSteps = [
  {
    label: 'Canales interiores de Santa Margarita',
    desc: 'Tranquilidad y arquitectura',
    color: 'bg-sky-500',
  },
  {
    label: 'Bahía de Roses',
    desc: 'Amplitud y horizonte',
    color: 'bg-sky-400',
  },
  {
    label: 'Cala Canyelles Petites',
    desc: 'Primera parada para el baño',
    color: 'bg-teal-500',
  },
  {
    label: 'Cala Almadraba',
    desc: 'Aguas cristalinas',
    color: 'bg-teal-400',
  },
  {
    label: 'Cap de Creus',
    desc: 'Paisaje volcánico y Mediterráneo',
    color: 'bg-emerald-500',
  },
];

export default function FullRouteSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <div
           className="anim-fade-right">
            <span className="text-sky-600 font-semibold text-sm uppercase tracking-widest mb-4 block">
              La ruta completa
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-6 leading-tight">
              Santa Margarita, Roses y el Cap de Creus — un día en el Mediterráneo
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Los canales de Santa Margarita no son solo un punto de partida. Son el primer capítulo de una
              ruta que puede llevaros desde las aguas más tranquilas de la Costa Brava hasta uno de los parques
              naturales marinos más impresionantes del Mediterráneo.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              En un día completo, con paradas para el baño y tiempo libre en las calas, es una de las mejores
              jornadas que puede ofrecer la Costa Brava norte. Cada tramo tiene su propia personalidad: los
              canales son tranquilidad y arquitectura; la bahía es amplitud y horizonte; el Cap de Creus es
              paisaje volcánico, luz mediterránea y la sensación de estar en un extremo del mundo.
            </p>
            <a
              href="/experiencias-barco-roses"
              className="inline-flex items-center gap-2 text-sky-600 font-semibold hover:text-sky-700 transition-colors group"
            >
              Ver excursiones hasta el Cap de Creus
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Route visual */}
          <div
            className="bg-slate-50 rounded-3xl p-8 border border-slate-100 anim-fade-left anim-delay-1"
          >
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-6">
              Secuencia natural de la ruta
            </p>
            <div className="space-y-0">
              {routeSteps.map((step, i) => (
                <div key={step.label} className="flex items-start gap-4">
                  {/* Line + dot */}
                  <div className="flex flex-col items-center">
                    <div className={`w-4 h-4 rounded-full ${step.color} shadow-md mt-1 shrink-0`} />
                    {i < routeSteps.length - 1 && (
                      <div className="w-0.5 bg-slate-200 flex-1 my-1 min-h-[32px]" />
                    )}
                  </div>
                  {/* Content */}
                  <div className="pb-6">
                    <p className="font-bold text-gray-900 leading-snug">{step.label}</p>
                    <p className="text-sm text-gray-500 mt-0.5">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
