import { ShieldCheck, Eye, Anchor } from 'lucide-react';

export interface Feature { title: string; desc: string; }

export interface PorQueCanalesT {
  sectionLabel?: string;
  h2?: string;
  features?: Feature[];
}

const defaultFeatures: Feature[] = [
  { title: 'Navegación segura y sin tráfico', desc: 'Las vías navegables interiores son estrechas, protegidas y con tráfico náutico muy limitado. No hay oleaje, no hay corrientes y los límites de velocidad son bajos. Es el entorno ideal para coger confianza con el barco antes de salir al mar.' },
  { title: 'La mejor forma de empezar', desc: 'Cuando se alquila un barco sin licencia por primera vez, la principal preocupación es siempre la misma: ¿seré capaz de manejarlo? Los canales de Santa Margarita eliminan esa incertidumbre desde el primer minuto.' },
  { title: 'Un paisaje único en sí mismo', desc: 'Además, el recorrido por los canales ya justifica la salida por sí solo. No hace falta llegar al Cap de Creus para tener una experiencia memorable — el propio paisaje de los canales, con las casas asomadas al agua, es algo que no se olvida.' },
];

const icons = [ShieldCheck, Anchor, Eye];

const defaults: Required<Omit<PorQueCanalesT, 'features'>> = {
  sectionLabel: 'Tranquilidad total',
  h2: 'Por qué los canales son ideales para navegar sin licencia',
};

const containerVariants = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };
const cardVariants = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.0, 0.0, 0.2, 1] as [number, number, number, number] } } };

export default function PorQueCanales({ t }: { t?: PorQueCanalesT }) {
  const tx = { ...defaults, ...t };
  const features = t?.features ?? defaultFeatures;
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-sky-600 font-semibold text-sm uppercase tracking-widest block mb-4">{tx.sectionLabel}</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 max-w-3xl mx-auto">{tx.h2}</h2>
        </div>
        <div whileInView="visible" viewport={{ once: true, margin: '-60px' }} className="anim-stagger grid md:grid-cols-3 gap-8">
          {features.map((item, idx) => {
            const Icon = icons[idx % icons.length];
            return (
              <div key={idx}  className="anim-stagger bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-14 h-14 bg-sky-50 rounded-2xl flex items-center justify-center mb-6"><Icon className="w-7 h-7 text-sky-500" /></div>
                <h3 className="font-bold text-gray-900 text-xl mb-4 leading-snug">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
