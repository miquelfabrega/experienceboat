import { Anchor, FileCheck, Compass, MessageCircle } from 'lucide-react';

export interface Reason {
  title: string;
  desc: string;
  highlight: string;
}

export interface WhyUsSectionT {
  sectionLabel?: string;
  h2?: string;
  desc?: string;
  reasons?: Reason[];
}

const defaultReasons: Reason[] = [
  { icon: Anchor, title: 'Salida única desde Santa Margarita', desc: 'Partimos desde los canales de Santa Margarita, un entorno que ya vale el viaje antes de llegar al mar abierto.', highlight: 'Punto de salida exclusivo' } as any,
  { icon: FileCheck, title: 'Sin burocracia', desc: 'No necesitas licencia, no necesitas experiencia. Solo ganas de navegar y disfrutar del mar.', highlight: 'Fácil y rápido' } as any,
  { icon: Compass, title: 'Zona protegida y espectacular', desc: 'Operamos en la bahía de Roses y el Parque Natural del Cap de Creus, dos espacios naturales protegidos del Mediterráneo.', highlight: 'Entorno de primera' } as any,
  { icon: MessageCircle, title: 'Trato directo', desc: 'Reservas con nosotros, no con una plataforma. Si tienes una duda o necesitas cambiar la fecha, llamas y te atendemos personalmente.', highlight: 'Atención personalizada' } as any,
];

const icons = [Anchor, FileCheck, Compass, MessageCircle];

const defaults: Required<Omit<WhyUsSectionT, 'reasons'>> = {
  sectionLabel: 'Nuestra diferencia',
  h2: '¿Por qué alquilar sin licencia con Experience Boat?',
  desc: 'Cuatro razones por las que nuestros clientes nos eligen temporada tras temporada.',
};

const containerVariants = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };
const cardVariants = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.0, 0.0, 0.2, 1] as [number, number, number, number] } } };

export default function WhyUsSection({ t }: { t?: WhyUsSectionT }) {
  const tx = { ...defaults, ...t };
  const reasons = t?.reasons ?? defaultReasons;

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-4">
          <span className="text-sky-600 font-semibold text-sm uppercase tracking-widest">{tx.sectionLabel}</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 text-center mb-4">{tx.h2}</h2>
        <p className="text-gray-500 text-center max-w-2xl mx-auto mb-14 text-lg">{tx.desc}</p>

        <div whileInView="visible" viewport={{ once: true, margin: '-60px' }} className="anim-stagger grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, i) => {
            const Icon = icons[i % icons.length];
            return (
              <div key={reason.title}  className="anim-stagger bg-slate-50 rounded-3xl p-6 border border-slate-100 hover:border-sky-200 hover:bg-sky-50/50 transition-all duration-300 group">
                <div className="w-12 h-12 bg-sky-500 group-hover:bg-sky-600 rounded-2xl flex items-center justify-center mb-4 transition-colors shadow-md shadow-sky-500/30">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <span className="text-xs text-sky-600 font-semibold uppercase tracking-wider mb-2 block">{reason.highlight}</span>
                <h3 className="font-bold text-gray-900 text-lg mb-3 leading-snug">{reason.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{reason.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
