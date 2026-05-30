import { ArrowRight } from 'lucide-react';

const precios = [
  {
    duracion: 'Medio día',
    horas: '4 horas',
    precio: '195 €',
    desde: true,
    recommended: false,
    description: 'Ideal para calas cercanas: Canyelles Petites, Almadraba.',
  },
  {
    duracion: 'Día completo',
    horas: '8 horas',
    precio: '285 €',
    desde: true,
    recommended: true,
    description: 'Recomendado para llegar al Cap de Creus con tiempo.',
  },
];

type Lang = 'es' | 'fr';

interface PreciosSectionProps {
  lang?: Lang;
}

export default function PreciosSection({ lang = 'es' }: PreciosSectionProps) {
  return (
    <section
      className="py-20 px-4 sm:px-6 lg:px-8"
      style={{
        background: 'linear-gradient(135deg, #0b1f3a 0%, #0d3a45 100%)',
      }}
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white mb-3 leading-tight">
          Precios
        </h2>
        <p className="text-blue-200 text-lg mb-12">
          Tarifas para alquiler de barco con licencia desde la Marina de Santa Margarita.
        </p>

        {/* Pricing table */}
        <div className="grid sm:grid-cols-2 gap-6 mb-10">
          {precios.map((p) => (
            <div
              key={p.duracion}
              className={`relative rounded-2xl p-6 sm:p-8 border transition-all ${
                p.recommended
                  ? 'bg-white border-cyan-400 ring-2 ring-cyan-400/50'
                  : 'bg-white/10 backdrop-blur-sm border-white/20 text-white'
              }`}
            >
              {p.recommended && (
                <span className="absolute -top-3 left-6 bg-cyan-400 text-[#0b1f3a] text-xs font-bold px-3 py-1 rounded-full">
                  Recomendado
                </span>
              )}
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3
                    className={`font-serif text-xl font-bold ${
                      p.recommended ? 'text-slate-900' : 'text-white'
                    }`}
                  >
                    {p.duracion}
                  </h3>
                  <span
                    className={`text-sm ${p.recommended ? 'text-slate-500' : 'text-blue-300'}`}
                  >
                    {p.horas}
                  </span>
                </div>
                <div className="text-right">
                  <span
                    className={`text-xs ${p.recommended ? 'text-slate-400' : 'text-blue-400'}`}
                  >
                    desde
                  </span>
                  <p
                    className={`text-3xl font-bold leading-none ${
                      p.recommended ? 'text-slate-900' : 'text-white'
                    }`}
                  >
                    {p.precio}
                  </p>
                </div>
              </div>
              <p
                className={`text-sm leading-relaxed ${
                  p.recommended ? 'text-slate-600' : 'text-blue-200'
                }`}
              >
                {p.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA inline */}
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <a
            href="/alquiler-barco-con-licencia-roses"
            className="inline-flex items-center gap-2 bg-cyan-400 hover:bg-cyan-300 text-[#0b1f3a] font-bold px-8 py-4 rounded-xl transition-colors text-base"
          >
            Consultar disponibilidad
            <ArrowRight size={18} />
          </a>
          <p className="text-blue-300 text-sm">
            Precios orientativos. El precio final depende del modelo de embarcación y fecha.
          </p>
        </div>
      </div>
    </section>
  );
}
