import { FileCheck, Users, Package, Euro, Calendar } from 'lucide-react';

const items = [
  {
    icon: FileCheck,
    question: '¿Qué titulación necesito?',
    answer:
      'Para las embarcaciones de nuestra flota con licencia se requiere como mínimo la titulación PNB (Patrón de Navegación Básica) o equivalente. Si tienes dudas sobre si tu titulación es válida, consúltanos antes de reservar — te lo confirmamos en menos de 24 horas.',
  },
  {
    icon: Users,
    question: '¿Cuántas personas caben?',
    answer:
      'Depende del modelo. Consulta las cards de cada embarcación para ver la capacidad exacta y la eslora. Tenemos barcos desde 4 hasta 8 personas.',
  },
  {
    icon: Package,
    question: '¿Qué incluye el alquiler?',
    answer: null,
    list: [
      'Embarcación con combustible incluido (consultar según modelo y ruta)',
      'Equipamiento de seguridad reglamentario',
      'Briefing de salida con información de la zona',
      'Mapa náutico de la bahía de Roses y Cap de Creus',
      'Asistencia en caso de incidencia',
    ],
  },
  {
    icon: Euro,
    question: '¿Cuáles son los precios?',
    answer: null,
    prices: [
      { label: 'Medio día (4 horas)', value: 'desde 195 €' },
      { label: 'Día completo (8 horas)', value: 'desde 285 €' },
    ],
    note: 'Los precios varían según el modelo de embarcación y la temporada. Consulta disponibilidad para tu fecha.',
  },
  {
    icon: Calendar,
    question: '¿Con cuánta antelación debo reservar?',
    answer:
      'En temporada alta (julio y agosto) recomendamos reservar con un mínimo de dos semanas. En temporada media, con 48-72 horas es suficiente en la mayoría de casos.',
  },
];


export default function PracticalInfoSection() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-4">
          <span className="text-sky-600 font-semibold text-sm uppercase tracking-widest">Antes de reservar</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 text-center mb-4">
          ¿Cómo funciona el alquiler con licencia?
        </h2>
        <p className="text-gray-500 text-center mb-12 text-lg">
          Información práctica para que lo tengas todo claro antes de salir.
        </p>

        <div
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="anim-stagger grid gap-5"
        >
          {items.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.question}
                
                className="anim-stagger bg-white rounded-2xl p-6 border border-gray-100 shadow-sm flex gap-5"
              >
                <div className="w-11 h-11 bg-sky-50 rounded-xl flex items-center justify-center shrink-0 mt-0.5">
                  <Icon className="w-5 h-5 text-sky-500" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-gray-900 text-lg mb-2">{item.question}</h3>
                  {item.answer && (
                    <p className="text-gray-600 leading-relaxed text-sm">{item.answer}</p>
                  )}
                  {item.list && (
                    <ul className="mt-1 space-y-1">
                      {item.list.map((li) => (
                        <li key={li} className="flex items-start gap-2 text-sm text-gray-600">
                          <span className="text-sky-500 mt-1 shrink-0">✓</span>
                          {li}
                        </li>
                      ))}
                    </ul>
                  )}
                  {item.prices && (
                    <div className="mt-2 flex flex-wrap gap-3">
                      {item.prices.map((p) => (
                        <div key={p.label} className="bg-slate-50 rounded-xl px-4 py-2 border border-slate-200">
                          <div className="text-xs text-gray-500">{p.label}</div>
                          <div className="font-extrabold text-gray-900 text-base">{p.value}</div>
                        </div>
                      ))}
                      {item.note && (
                        <p className="w-full text-xs text-gray-400 mt-1">{item.note}</p>
                      )}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Main CTA */}
        <div
          className="mt-10 text-center anim-fade-up"
        >
          <a
            href="#barcos"
            className="inline-flex items-center justify-center gap-2 bg-sky-500 hover:bg-sky-400 text-white font-bold text-lg px-10 py-4 rounded-2xl shadow-lg shadow-sky-500/30 transition-all duration-200 hover:scale-105"
          >
            Consultar disponibilidad ahora
          </a>
        </div>
      </div>
    </section>
  );
}
