import { Anchor } from 'lucide-react';

type Lang = 'es' | 'fr';

interface VentajaTacticaSectionProps {
  lang?: Lang;
}

export default function VentajaTacticaSection({ lang = 'es' }: VentajaTacticaSectionProps) {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        {/* Info-box */}
        <div
          className="relative overflow-hidden rounded-3xl p-8 sm:p-12"
          style={{
            background:
              'linear-gradient(135deg, #0b1f3a 0%, #0d3545 50%, #0a3d47 100%)',
          }}
        >
          {/* Background shimmer */}
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage:
                'radial-gradient(ellipse 70% 50% at 80% 20%, #22d3ee 0%, transparent 70%)',
            }}
          />

          <div className="relative">
            {/* Badge + icon */}
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="inline-flex items-center gap-2 bg-cyan-400/20 border border-cyan-400/40 text-cyan-300 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full">
                <Anchor size={12} />
                Ventaja táctica
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white mb-6 leading-tight">
              Salida desde los canales de Santa Margarita
            </h2>

            <p className="text-blue-200 text-lg leading-relaxed mb-8 max-w-2xl">
              La mayoría de empresas de alquiler en Roses salen desde el Puerto Deportivo, situado
              en el centro de la bahía. Experience Boat sale desde los canales de Santa Margarita, en
              el extremo norte de Roses — considerablemente más cerca del Cap de Creus desde el
              primer minuto.
            </p>

            {/* Key stat */}
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 sm:p-8 inline-block">
              <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                <div>
                  <span
                    className="block font-bold text-white leading-none"
                    style={{ fontSize: 'clamp(3rem, 8vw, 5rem)' }}
                  >
                    15-20
                    <span className="text-cyan-300 text-3xl sm:text-4xl"> min</span>
                  </span>
                  <span className="text-blue-200 text-sm mt-1 block">
                    menos de navegación en cada sentido
                  </span>
                </div>
                <div className="h-px sm:h-16 sm:w-px bg-white/20 my-2 sm:my-0" />
                <p className="text-blue-200 text-sm max-w-xs">
                  vs. salir desde el Puerto Deportivo de Roses. En una jornada completa, eso es
                  tiempo real para explorar una cala más o llegar más lejos sin prisas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
