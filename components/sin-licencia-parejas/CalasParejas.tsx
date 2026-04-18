import { MapPin } from 'lucide-react';

export interface Cala {
  name: string;
  desc: string;
  link?: { text: string; href: string };
}

export interface CalasParejasT {
  sectionLabel?: string;
  h2?: string;
  intro?: string;
  calas?: Cala[];
}

const defaultCalas: Cala[] = [
  { name: 'Cala Canyelles Petites', desc: 'Una de las calas más fotografiadas de la Costa Brava norte, y con razón. Aguas turquesa, rodeada de pinos y con muy poca presión turística fuera de agosto. Está a unos 20 minutos desde Santa Margarita y es la parada más popular para el baño de mañana.' },
  { name: 'Cala Almadraba', desc: 'Más tranquila que Canyelles y con aguas especialmente cristalinas. Accesible también a pie pero desde el barco tiene otra dimensión — podéis fondear y tenéis la cala prácticamente para vosotros en temporada media.' },
  { name: 'Las calas del Cap de Creus', desc: 'Para los más aventureros, las calas del Parque Natural del Cap de Creus son el destino más espectacular de la zona. Paisaje volcánico, aguas de una transparencia excepcional y la sensación de estar en un rincón del mundo que poca gente conoce. Recomendamos la opción de día completo.' },
  { name: 'Los propios canales al atardecer', desc: 'Si preferís una salida más tranquila y romántica, el recorrido por los canales al atardecer es una de las experiencias más especiales que ofrece Roses. La luz de las últimas horas del día sobre el agua y las casas de Santa Margarita crea un ambiente mágico.', link: { text: 'Ver Sunset Experience', href: '/experiencias-barco-roses/sunset-experience' } },
];

const defaults: Required<Omit<CalasParejasT, 'calas'>> = {
  sectionLabel: 'Rincones ocultos',
  h2: 'Las mejores calas para una pareja desde Roses',
  intro: 'Uno de los grandes privilegios de alquilar un barco es poder llegar a calas que la mayoría de turistas nunca ven. Estas son las favoritas de las parejas que salen con nosotros:',
};

const containerVariants = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };
const itemVariants = { hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0, transition: { duration: 0.45, ease: [0.0, 0.0, 0.2, 1] as [number, number, number, number] } } };

export default function CalasParejas({ t }: { t?: CalasParejasT }) {
  const tx = { ...defaults, ...t };
  const calas = t?.calas ?? defaultCalas;
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-sky-600 font-semibold text-sm uppercase tracking-widest block mb-4">{tx.sectionLabel}</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-6">{tx.h2}</h2>
          <p className="text-lg text-gray-600">{tx.intro}</p>
        </div>
        <div whileInView="visible" viewport={{ once: true, margin: '-60px' }} className="anim-stagger space-y-6">
          {calas.map((cala) => (
            <div key={cala.name}  className="anim-stagger bg-white rounded-2xl p-6 md:p-8 border border-gray-100 shadow-sm flex gap-4 md:gap-6">
              <div className="w-12 h-12 bg-sky-50 rounded-xl flex items-center justify-center shrink-0 mt-1"><MapPin className="w-6 h-6 text-sky-500" /></div>
              <div>
                <h3 className="font-bold text-gray-900 text-xl mb-3">{cala.name}</h3>
                <p className="text-gray-600 leading-relaxed mb-4">{cala.desc}</p>
                {cala.link && (
                  <a href={cala.link.href} className="inline-flex text-sky-600 font-semibold hover:text-sky-800 transition-colors underline underline-offset-2">
                    {cala.link.text} →
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
