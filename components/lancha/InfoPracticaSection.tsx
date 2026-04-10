import { MapPin, Calendar } from 'lucide-react';

type Lang = 'es' | 'fr';

interface InfoPracticaSectionProps {
  lang?: Lang;
}

export default function InfoPracticaSection({ lang = 'es' }: InfoPracticaSectionProps) {
  return (
    <section className="bg-slate-50 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900 mb-10 leading-tight">
          Información práctica
        </h2>

        <div className="grid sm:grid-cols-2 gap-6">
          {/* Ubicación */}
          <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 flex gap-5">
            <div className="shrink-0 w-12 h-12 flex items-center justify-center rounded-xl bg-[#0b1f3a] text-cyan-300">
              <MapPin size={22} />
            </div>
            <div>
              <h3 className="font-semibold text-slate-900 mb-2">Ubicación</h3>
              <address className="not-italic text-sm text-slate-600 leading-relaxed mb-3">
                Marina de Santa Margarita
                <br />
                Av. Clot Franquest Nord
                <br />
                17480 Roses, Girona
              </address>
              <ul className="space-y-1 text-xs text-slate-500">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-300" />
                  3 h desde Barcelona
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-300" />
                  45 min desde Girona
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-300" />
                  30 min de la frontera francesa
                </li>
              </ul>
            </div>
          </div>

          {/* Antelación */}
          <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 flex gap-5">
            <div className="shrink-0 w-12 h-12 flex items-center justify-center rounded-xl bg-[#0b1f3a] text-cyan-300">
              <Calendar size={22} />
            </div>
            <div>
              <h3 className="font-semibold text-slate-900 mb-2">Antelación de reserva</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <span className="shrink-0 text-xs font-bold bg-amber-100 text-amber-800 px-2 py-0.5 rounded mt-0.5">
                    Jul – Ago
                  </span>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Temporada alta — mínimo{' '}
                    <strong className="text-slate-800">2 semanas</strong> de antelación.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="shrink-0 text-xs font-bold bg-sky-100 text-sky-800 px-2 py-0.5 rounded mt-0.5">
                    Resto
                  </span>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Temporada media —{' '}
                    <strong className="text-slate-800">48-72 horas</strong> es suficiente en la
                    mayoría de casos.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <p className="mt-6 text-sm text-slate-600">
          ¿Prefieres una salida sin llevar la licencia tú mismo? En la misma base de Roses
          gestionamos también salidas con patrón; pregunta al reservar según tu grupo.
        </p>
      </div>
    </section>
  );
}
