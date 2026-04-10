import { Sun, Glasses, Sandwich, Camera, Music, Shirt } from 'lucide-react';

export interface QueLlevarParejasT {
  h2?: string;
  intro?: string;
  items?: string[];
}

const defaultItems = [
  'Protección solar alta — el sol refleja en el agua con mucha más intensidad de lo que parece.',
  'Gafas de sol polarizadas para los dos.',
  'Ropa de baño, toallas y una capa ligera para la vuelta si salís al atardecer.',
  'Nevera con bebidas frescas y algo de picar — comer en la cala es uno de los mejores momentos del día.',
  'Cámara o teléfono en funda impermeable — las calas del Cap de Creus merecen fotos buenas.',
  'Música — el barco tiene equipo de sonido, traed vuestra playlist.',
];

const icons = [Sun, Glasses, Shirt, Sandwich, Camera, Music];

const defaults: Required<Omit<QueLlevarParejasT, 'items'>> = {
  h2: 'Qué llevar para un día perfecto en el mar',
  intro: 'Pequeña lista para una salida en pareja sin que falte nada:',
};

const containerVariants = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };
const itemVariants = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.4 } } };

export default function QueLlevarParejas({ t }: { t?: QueLlevarParejasT }) {
  const tx = { ...defaults, ...t };
  const items = t?.items ?? defaultItems;
  return (
    <section className="py-20 bg-slate-50 border-t border-slate-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-6">{tx.h2}</h2>
          <p className="text-lg text-gray-600">{tx.intro}</p>
        </div>
        <div whileInView="visible" viewport={{ once: true, margin: '-60px' }} className="anim-stagger bg-white rounded-3xl p-8 md:p-10 border border-gray-100 shadow-sm">
          <ul className="space-y-6">
            {items.map((item, idx) => {
              const Icon = icons[idx % icons.length];
              return (
                <li className="flex items-start gap-4 anim-fade-up">
                  <div className="w-10 h-10 bg-sky-50 rounded-xl flex items-center justify-center shrink-0 mt-0.5"><Icon className="w-5 h-5 text-sky-500" /></div>
                  <p className="text-gray-700 leading-relaxed pt-2">{item}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
