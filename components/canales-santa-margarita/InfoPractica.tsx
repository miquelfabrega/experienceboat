import { Clock, Baby, Sun, Euro } from 'lucide-react';

export interface InfoPracticaT {
  sectionLabel?: string;
  h2?: string;
  items?: {
    question: string;
    answer?: string;
    prices?: { label: string; value: string }[];
  }[];
  cta?: string;
  waMessage?: string;
}

const defaultItems = [
  { icon: Clock, question: '¿Cuánto tiempo dura el recorrido por los canales?', answer: 'El recorrido por los canales interiores dura entre 60 y 90 minutos. Si lo combinas con una salida a la bahía de Roses, puedes pasar un medio día completo en el agua sin necesidad de alejarte demasiado.' },
  { icon: Baby, question: '¿Es apto para niños pequeños?', answer: 'Es uno de los entornos más seguros para familias con niños. Las aguas son tranquilas, la velocidad es baja y el paisaje mantiene a los más pequeños entretenidos durante todo el recorrido.' },
  { icon: Sun, question: '¿Cuándo es mejor ir?', answer: 'A primera hora de la mañana los canales están en calma total y la luz es espectacular para fotografía. Al atardecer, los reflejos en el agua son igual de impresionantes. En temporada media (mayo, junio, septiembre) hay mucho menos tráfico náutico que en pleno agosto.' },
  { icon: Euro, question: 'Precio del alquiler', prices: [{ label: '1 hora', value: 'desde 70 €' }, { label: '2 horas', value: 'desde 135 €' }, { label: 'Medio día (4 horas)', value: 'desde 165 €' }, { label: 'Día completo (8 horas)', value: 'desde 225 €' }] },
];

const icons = [Clock, Baby, Sun, Euro];

const defaults: Required<Omit<InfoPracticaT, 'items'>> = {
  sectionLabel: 'Lo que debes saber',
  h2: 'Información práctica',
  cta: 'Consultar disponibilidad',
  waMessage: 'Hola%2C%20me%20interesa%20alquilar%20un%20barco%20sin%20licencia%20para%20los%20canales%20de%20Santa%20Margarita',
};

const containerVariants = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };
const itemVariants = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.0, 0.0, 0.2, 1] as [number, number, number, number] } } };

export default function InfoPractica({ t }: { t?: InfoPracticaT }) {
  const tx = { ...defaults, ...t };
  const items = t?.items ?? defaultItems;
  return (
    <section className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-4">
          <span className="text-sky-600 font-semibold text-sm uppercase tracking-widest">{tx.sectionLabel}</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 text-center mb-12">{tx.h2}</h2>

        <div whileInView="visible" viewport={{ once: true, margin: '-60px' }} className="anim-stagger grid gap-5">
          {items.map((item, i) => {
            const Icon = icons[i % icons.length];
            return (
              <div key={item.question}  className="anim-stagger bg-slate-50 rounded-2xl p-6 border border-slate-100 shadow-sm flex gap-5">
                <div className="w-11 h-11 bg-sky-100 rounded-xl flex items-center justify-center shrink-0 mt-0.5"><Icon className="w-5 h-5 text-sky-600" /></div>
                <div className="flex-1">
                  <h3 className="font-bold text-gray-900 text-lg mb-2">{item.question}</h3>
                  {item.answer && <p className="text-gray-600 leading-relaxed text-sm">{item.answer}</p>}
                  {item.prices && (
                    <div className="mt-2 flex flex-wrap gap-3">
                      {item.prices.map((p) => (
                        <div key={p.label} className="bg-white rounded-xl px-4 py-2 border border-slate-200">
                          <div className="text-xs text-gray-500">{p.label}</div>
                          <div className="font-extrabold text-gray-900 text-base">{p.value}</div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <a href={`https://wa.me/34623995700?text=${tx.waMessage}`} target="_blank" rel="nofollow noopener noreferrer" className="inline-flex items-center justify-center px-8 py-4 rounded-xl font-bold shadow-lg hover:brightness-110 transition-all bg-[#25D366] text-white">
            {tx.cta}
          </a>
        </div>
      </div>
    </section>
  );
}
