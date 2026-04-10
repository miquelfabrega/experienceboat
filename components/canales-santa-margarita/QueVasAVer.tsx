import { Home, Trees, Bird, Map } from 'lucide-react';
import Image from 'next/image';

export interface PointOfInterest { title: string; desc: string; }

export interface QueVasAVerT {
  sectionLabel?: string;
  h2?: string;
  items?: PointOfInterest[];
}

const defaultItems: PointOfInterest[] = [
  { title: 'Casas con embarcadero privado', desc: 'Más de 500 viviendas tienen acceso directo al agua. Desde el barco ves la vida de Santa Margarita desde una perspectiva que ningún turista a pie puede tener.' },
  { title: 'Puentes de piedra', desc: 'Los canales están cruzados por puentes bajos que obligan a navegar despacio. Esa lentitud convierte el recorrido en algo contemplativo y muy fotogénico.' },
  { title: 'Fauna local', desc: 'En los canales es habitual ver aves acuáticas, patos y en ocasiones alguna garceta. Especialmente interesante para familias con niños.' },
  { title: 'La salida a la bahía', desc: 'Cuando los canales se abren al mar, el contraste es espectacular. La bahía de Roses con el Pirineo al fondo y el Cap de Creus al horizonte.' },
];

const icons = [Home, Trees, Bird, Map];

const defaults: Required<Omit<QueVasAVerT, 'items'>> = {
  sectionLabel: 'Puntos de interés',
  h2: 'Qué vas a ver navegando por los canales',
};

export default function QueVasAVer({ t }: { t?: QueVasAVerT }) {
  const tx = { ...defaults, ...t };
  const items = t?.items ?? defaultItems;
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl anim-fade-right">
            <Image src="https://picsum.photos/seed/canales-mar/800/600" alt="Casas con embarcadero en los canales de Santa Margarita" fill className="object-cover" />
          </div>
          <div>
            <span className="text-sky-600 font-semibold text-sm uppercase tracking-widest block mb-4">{tx.sectionLabel}</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-8 leading-tight">{tx.h2}</h2>
            <div className="space-y-6">
              {items.map((item, i) => {
                const Icon = icons[i % icons.length];
                return (
                  <div className="flex gap-5 anim-fade-up">
                    <div className="w-12 h-12 bg-slate-50 border border-slate-100 rounded-xl flex items-center justify-center shrink-0 mt-1"><Icon className="w-5 h-5 text-slate-700" /></div>
                    <div>
                      <h3 className="font-bold text-gray-900 text-lg mb-2">{item.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
