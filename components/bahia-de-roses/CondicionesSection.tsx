import { Wind } from 'lucide-react';

const seasons = [
  {
    period: 'Mayo – Junio',
    emoji: '🌿',
    label: 'Temporada recomendada',
    accentBg: 'bg-emerald-50',
    accentBorder: 'border-emerald-400',
    accentText: 'text-emerald-700',
    badgeBg: 'bg-emerald-100 text-emerald-800',
    body: 'Condiciones excelentes. Tramuntana débil o moderada, temperatura del agua ya agradable para el baño, bahía poco masificada. El mejor momento para explorar el Cap de Creus con calma.',
    highlights: ['Tramuntana débil', 'Calas despejadas', 'Agua 18-20 °C'],
  },
  {
    period: 'Julio – Agosto',
    emoji: '☀️',
    label: 'Temporada alta',
    accentBg: 'bg-amber-50',
    accentBorder: 'border-amber-400',
    accentText: 'text-amber-700',
    badgeBg: 'bg-amber-100 text-amber-800',
    body: 'Más tráfico náutico en la bahía pero condiciones generalmente estables. Recomendamos salir temprano para llegar a las calas antes de que se llenen.',
    highlights: ['Salida madrugadora', 'Agua 24-26 °C', 'Brisa vespertina'],
  },
  {
    period: 'Septiembre – Octubre',
    emoji: '🍂',
    label: 'La mejor época',
    accentBg: 'bg-sky-50',
    accentBorder: 'border-sky-400',
    accentText: 'text-sky-700',
    badgeBg: 'bg-sky-100 text-sky-800',
    body: 'Posiblemente la mejor época para navegar. Agua caliente, días largos, mucho menos tráfico y algunos de los amaneceres más espectaculares del año.',
    highlights: ['Agua 22-24 °C', 'Tráfico mínimo', 'Días luminosos'],
  },
];

type Lang = 'es' | 'fr' | 'ca';

interface CondicionesSectionProps {
  lang?: Lang;
}

export default function CondicionesSection({ lang = 'es' }: CondicionesSectionProps) {
  return (
    <section className="bg-slate-50 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-3 mb-3">
          <Wind size={22} className="text-slate-500" />
          <span className="text-sm font-semibold text-slate-500 uppercase tracking-wider">
            Tramuntana y temporadas
          </span>
        </div>
        <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900 mb-4 leading-tight">
          Condiciones de navegación — tramuntana y temporadas
        </h2>
        <p className="text-slate-600 text-lg mb-12 max-w-2xl">
          La bahía de Roses tiene un viento característico: la tramuntana. Es un viento del norte
          que puede ser suave y agradable o fuerte e impredecible. En verano predominan las mañanas
          en calma y las tardes con brisa moderada.
        </p>

        <div className="grid sm:grid-cols-3 gap-6">
          {seasons.map((s, i) => (
            <article
              className={`${s.accentBg} border-t-4 ${s.accentBorder} rounded-2xl p-6 shadow-sm cursor-default`}
            >
              <div className="flex items-start justify-between mb-4">
                <span className="text-3xl">{s.emoji}</span>
                <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${s.badgeBg}`}>
                  {s.label}
                </span>
              </div>
              <h3 className={`font-serif text-xl font-bold mb-3 ${s.accentText}`}>{s.period}</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">{s.body}</p>
              <ul className="space-y-1">
                {s.highlights.map((h) => (
                  <li key={h} className="flex items-center gap-2 text-xs text-slate-500">
                    <span className={`w-1.5 h-1.5 rounded-full ${s.accentBorder.replace('border-', 'bg-')}`} />
                    {h}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <p className="mt-8 text-sm text-slate-500 flex items-center gap-2">
          <Wind size={14} className="shrink-0" />
          Monitorizamos la previsión meteorológica diariamente. Si las condiciones no son adecuadas
          para salir, avisamos con antelación y buscamos fecha alternativa.
        </p>
      </div>
    </section>
  );
}
