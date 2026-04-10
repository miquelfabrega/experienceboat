import { Heart, Compass, Sunrise } from 'lucide-react';

export interface Feature {
  title: string;
  desc: string;
}

export interface PorQueParejasT {
  sectionLabel?: string;
  h2?: string;
  features?: Feature[];
}

const defaultFeatures: Feature[] = [
  { title: 'Privacidad total', desc: 'La Costa Brava tiene playas y restaurantes. Pero ninguna de esas opciones te da lo que da un barco: privacidad total y libertad de movimiento. Es el tipo de día que no se olvida.' },
  { title: 'Calas inaccesibles', desc: 'Desde el agua, Roses y el Cap de Creus tienen una dimensión completamente diferente. Puedes fondear en una cala desierta a media mañana y bañarte en aguas cristalinas.' },
  { title: 'Sin experiencia previa', desc: 'No necesitáis experiencia náutica ni licencia de ningún tipo. En menos de 15 minutos desde que salís de los canales de Santa Margarita, ya estáis navegando solos con total soltura.' },
];

const icons = [Heart, Compass, Sunrise];

const defaults: Required<Omit<PorQueParejasT, 'features'>> = {
  sectionLabel: 'Mejor que cualquier plan en tierra',
  h2: 'Por qué un barco es el plan perfecto para una pareja en Roses',
};

const containerVariants = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };
const cardVariants = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.0, 0.0, 0.2, 1] as [number, number, number, number] } } };

export default function PorQueParejas({ t }: { t?: PorQueParejasT }) {
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
                <div className="w-14 h-14 bg-rose-50 rounded-2xl flex items-center justify-center mb-6"><Icon className="w-7 h-7 text-rose-500" /></div>
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
