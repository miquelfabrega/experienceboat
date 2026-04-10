import { MapPin } from 'lucide-react';

const destinos = [
  {
    h3: 'El Parque Natural del Cap de Creus',
    subtitle: '45-60 min desde Santa Margarita',
    tag: 'Destino estrella',
    tagColor: 'bg-cyan-100 text-cyan-800',
    borderColor: 'border-cyan-400',
    body: (
      <>
        El destino por excelencia para cualquier patrón que navegue desde Roses con licencia. El
        Parque Natural del Cap de Creus es el punto más oriental de la Península Ibérica y el
        primer parque natural marino de Cataluña. Desde la bahía de Roses la travesía hasta el cabo
        dura entre 45 y 60 minutos según las condiciones. Lo que encontráis al llegar — calas
        volcánicas, aguas de una transparencia excepcional y un paisaje que no se parece a ningún
        otro de la costa mediterránea — justifica con creces cada minuto de navegación.
      </>
    ),
  },
  {
    h3: 'Cala Culip y las calas interiores del Cap',
    subtitle: 'Acceso solo por mar',
    tag: 'Solo en barco',
    tagColor: 'bg-emerald-100 text-emerald-800',
    borderColor: 'border-emerald-400',
    body: (
      <>
        Una vez en el Parque Natural, las calas más salvajes y menos conocidas están reservadas
        para quien llega en barco. Cala Culip, Cala Jugadora, Cala Fredosa — nombres que no salen
        en las guías turísticas porque son prácticamente inaccesibles por tierra. Con una
        embarcación con licencia tenéis acceso a todas ellas. Si preferís ir acompañados de un
        experto local, también ofrecemos{' '}
        <a
          href="/experiencias-barco-roses"
          className="text-[#0d4a47] font-medium underline underline-offset-2 hover:text-[#0b1f3a] transition-colors"
        >
          excursiones privadas con patrón
        </a>
        .
      </>
    ),
  },
  {
    h3: 'Cala Canyelles Petites y Cala Almadraba',
    subtitle: 'Opción días tranquilos',
    tag: 'Aguas turquesa',
    tagColor: 'bg-sky-100 text-sky-800',
    borderColor: 'border-sky-400',
    body: (
      <>
        Para jornadas más tranquilas o cuando las condiciones en el Cap no acompañan, las calas
        del entorno más cercano a Roses son una alternativa perfecta. Canyelles Petites es la
        favorita para el baño matinal — aguas turquesa, fondo de arena y suficiente espacio para
        fondear sin aglomeraciones fuera de agosto. Almadraba tiene un carácter más recogido y
        aguas especialmente cristalinas.
      </>
    ),
  },
  {
    h3: 'La costa norte hacia Llançà y Portbou',
    subtitle: 'Jornadas de día completo',
    tag: 'Ruta avanzada',
    tagColor: 'bg-violet-100 text-violet-800',
    borderColor: 'border-violet-400',
    body: (
      <>
        Para los patrones que quieren alejarse más, la costa norte desde Roses hacia Llançà y
        Portbou ofrece calas prácticamente desiertas y un paisaje de acantilados que muy pocos
        navegantes exploran. Es territorio para jornadas de día completo y para quienes ya conocen
        bien la zona más cercana.
      </>
    ),
  },
];

type Lang = 'es' | 'fr';

interface DestinosSectionProps {
  lang?: Lang;
}

export default function DestinosSection({ lang = 'es' }: DestinosSectionProps) {
  return (
    <section className="bg-slate-50 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-3">
          <MapPin size={20} className="text-[#0d4a47]" />
          <span className="text-sm font-semibold text-[#0d4a47] uppercase tracking-wider">
            Desde Santa Margarita
          </span>
        </div>
        <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900 mb-12 leading-tight">
          Los mejores destinos desde la bahía con licencia
        </h2>

        <div className="space-y-8">
          {destinos.map((d) => (
            <article
              key={d.h3}
              className={`bg-white rounded-2xl border-l-4 ${d.borderColor} shadow-sm p-6 sm:p-8`}
            >
              <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                <div>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-slate-900">
                    {d.h3}
                  </h3>
                  <p className="text-sm text-slate-500 mt-0.5">{d.subtitle}</p>
                </div>
                <span
                  className={`shrink-0 text-xs font-semibold px-3 py-1 rounded-full ${d.tagColor}`}
                >
                  {d.tag}
                </span>
              </div>
              <p className="text-slate-600 leading-relaxed">{d.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
