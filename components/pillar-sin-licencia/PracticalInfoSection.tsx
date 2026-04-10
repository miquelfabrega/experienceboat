import { FileCheck, Users, Package, Euro, Calendar } from 'lucide-react';

export interface PracticalInfoSectionT {
  sectionLabel?: string;
  h2?: string;
  desc?: string;
  items?: {
    question: string;
    answer?: string;
    list?: string[];
    prices?: { label: string; value: string }[];
    note?: string;
  }[];
  cta?: string;
}

const defaultItems = [
  { icon: FileCheck, question: '¿Necesito experiencia para llevar el barco?', answer: 'No. Nuestros barcos sin licencia tienen motores de baja potencia homologados para navegación sin titulación. Antes de salir, Tomàs o Max te explican el funcionamiento en unos minutos. La mayoría de clientes salen solos sin ningún problema desde el primer día.' },
  { icon: Users, question: '¿Cuántas personas caben?', answer: 'Depende de la embarcación. Tenemos barcos desde 4 hasta 11 personas. Consulta cada modelo para ver la capacidad exacta.' },
  { icon: Package, question: '¿Qué incluye el alquiler?', list: ['Embarcación con combustible incluido (consultar según modelo)', 'Chaleco salvavidas para todos los pasajeros', 'Briefing inicial con el patrón', 'Mapa de la zona y recomendaciones de ruta', 'Snorkel básico (según disponibilidad)'] },
  { icon: Euro, question: '¿Cuáles son los precios?', prices: [{ label: 'Medio día (4 horas)', value: 'desde 200 €' }, { label: 'Día completo (8 horas)', value: 'desde 350 €' }], note: 'Los precios varían según la embarcación y la temporada. Consulta disponibilidad para tu fecha concreta.' },
  { icon: Calendar, question: '¿Con cuánta antelación debo reservar?', answer: 'En julio y agosto recomendamos reservar con al menos dos semanas de antelación. El resto de la temporada, con 48-72 horas suele ser suficiente.' },
];

const icons = [FileCheck, Users, Package, Euro, Calendar];

const defaults: Required<Omit<PracticalInfoSectionT, 'items'>> = {
  sectionLabel: 'Antes de reservar',
  h2: '¿Cómo funciona el alquiler? — Información práctica',
  desc: 'Información práctica para que lo tengas todo claro antes de salir.',
  cta: 'Consultar disponibilidad ahora',
};

const containerVariants = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };
const itemVariants = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.0, 0.0, 0.2, 1] as [number, number, number, number] } } };

export default function PracticalInfoSection({ t }: { t?: PracticalInfoSectionT }) {
  const tx = { ...defaults, ...t };
  const items = t?.items ?? defaultItems;

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-4">
          <span className="text-sky-600 font-semibold text-sm uppercase tracking-widest">{tx.sectionLabel}</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 text-center mb-4">{tx.h2}</h2>
        <p className="text-gray-500 text-center mb-12 text-lg">{tx.desc}</p>

        <div whileInView="visible" viewport={{ once: true, margin: '-60px' }} className="anim-stagger grid gap-5">
          {items.map((item, i) => {
            const Icon = icons[i % icons.length];
            return (
              <div key={item.question}  className="anim-stagger bg-white rounded-2xl p-6 border border-gray-100 shadow-sm flex gap-5">
                <div className="w-11 h-11 bg-sky-50 rounded-xl flex items-center justify-center shrink-0 mt-0.5">
                  <Icon className="w-5 h-5 text-sky-500" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-gray-900 text-lg mb-2">{item.question}</h3>
                  {item.answer && <p className="text-gray-600 leading-relaxed text-sm">{item.answer}</p>}
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
                      {item.note && <p className="w-full text-xs text-gray-400 mt-1">{item.note}</p>}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-10 text-center anim-fade-up">
          <a href="#barcos" className="inline-flex items-center justify-center gap-2 bg-sky-500 hover:bg-sky-400 text-white font-bold text-lg px-10 py-4 rounded-2xl shadow-lg shadow-sky-500/30 transition-all duration-200 hover:scale-105">
            {tx.cta}
          </a>
        </div>
      </div>
    </section>
  );
}
