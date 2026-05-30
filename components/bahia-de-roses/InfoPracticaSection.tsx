import { GraduationCap, Clock, CheckCircle2 } from 'lucide-react';

const includes = [
  'Embarcación con combustible incluido (consultar según modelo y ruta prevista)',
  'Equipamiento de seguridad reglamentario',
  'Briefing de salida con información meteorológica y recomendaciones de ruta',
  'Mapa náutico de la bahía de Roses y Cap de Creus',
];

type Lang = 'es' | 'fr' | 'ca';

interface InfoPracticaSectionProps {
  lang?: Lang;
}

export default function InfoPracticaSection({ lang = 'es' }: InfoPracticaSectionProps) {
  return (
    <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900 mb-12 leading-tight">
          Información práctica
        </h2>

        <div className="grid sm:grid-cols-2 gap-6 mb-10 items-stretch">
          {/* Titulación */}
          <div className="flex gap-5 p-6 rounded-2xl bg-slate-50 border border-slate-100 h-full items-start">
            <div className="shrink-0 w-12 h-12 flex items-center justify-center rounded-xl bg-[#0b1f3a] text-cyan-300">
              <GraduationCap size={22} />
            </div>
            <div className="min-w-0 flex-1">
              <h3 className="font-semibold text-slate-900 mb-1">Titulación requerida</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Se requiere como mínimo el{' '}
                <strong className="text-slate-800">PNB (Patrón de Navegación Básica)</strong> o
                equivalente. Si tienes dudas sobre si tu titulación es válida, consúltanos antes de
                reservar.
              </p>
            </div>
          </div>

          {/* Horarios */}
          <div className="flex gap-5 p-6 rounded-2xl bg-slate-50 border border-slate-100 h-full items-start">
            <div className="shrink-0 w-12 h-12 flex items-center justify-center rounded-xl bg-[#0b1f3a] text-cyan-300">
              <Clock size={22} />
            </div>
            <div className="min-w-0 flex-1 w-full">
              <h3 className="font-semibold text-slate-900 mb-3">Opciones de jornada</h3>
              <ul className="space-y-2.5">
                <li className="flex items-center justify-between gap-3 rounded-xl border border-slate-200/90 bg-white px-3 py-2.5">
                  <span className="text-sm font-medium text-slate-800">Medio día</span>
                  <span className="shrink-0 text-xs font-bold tabular-nums bg-slate-200 text-slate-800 px-2.5 py-1 rounded-md">
                    4 h
                  </span>
                </li>
                <li className="rounded-xl border border-slate-200/90 bg-white px-3 py-2.5">
                  <div className="flex items-start justify-between gap-3">
                    <div className="min-w-0">
                      <span className="text-sm font-medium text-slate-800 block">Día completo</span>
                      <span className="text-xs text-slate-500 mt-0.5 block leading-snug">
                        Recomendado para llegar al Cap de Creus con calma
                      </span>
                    </div>
                    <span className="shrink-0 text-xs font-bold tabular-nums bg-[#0b1f3a] text-cyan-300 px-2.5 py-1 rounded-md">
                      8 h
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Qué incluye */}
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-slate-50 to-cyan-50 border border-cyan-100">
          <h3 className="font-semibold text-slate-900 mb-4 text-lg">Qué incluye el alquiler</h3>
          <ul className="space-y-3">
            {includes.map((item) => (
              <li key={item} className="flex items-start gap-3 text-slate-600 text-sm leading-relaxed">
                <CheckCircle2 size={18} className="shrink-0 text-emerald-500 mt-0.5" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <p className="mt-6 text-sm text-slate-600">
          ¿Prefieres ir acompañado de un patrón experto sin titulación náutica en Roses? Consulta
          nuestra opción de{' '}
          <a
            href="/alquiler-barco-sin-licencia-roses"
            className="text-[#0d4a47] font-medium underline underline-offset-2 hover:text-[#0b1f3a] transition-colors"
          >
            barco sin licencia
          </a>
          .
        </p>
      </div>
    </section>
  );
}
