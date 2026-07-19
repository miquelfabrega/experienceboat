import { MapPin, Waves } from 'lucide-react';

export interface Destination {
  name: string;
  desc: string;
}

export interface DestinationsSectionT {
  sectionLabel?: string;
  h2?: string;
  intro?: string;
  listIntro?: string;
  privateTitle?: string;
  privateDesc1?: string;
  privateDesc2?: string;
  privateCta?: string;
  pointLabel?: string;
  pointName?: string;
  pointDesc?: string;
  destinations?: Destination[];
}

const defaultDestinations: Destination[] = [
  { name: 'Canales de Santa Margarita', desc: 'El punto de salida: casas frente al agua y amarres privados que solo se ven bien desde el barco.' },
  { name: 'Bahía de Roses', desc: 'Aguas tranquilas, perfectas para debutantes y familias con niños. Vistas increíbles.' },
  { name: 'Cala Canyelles Petites', desc: 'Una de las calas más bonitas del Cap de Creus, accesible en barco.' },
  { name: 'Cala Almadraba', desc: 'Aguas cristalinas y muy poco masificada fuera de temporada alta.' },
  { name: 'Parque Natural del Cap de Creus', desc: 'El paisaje más espectacular de la Costa Brava desde el agua.' },
];

const defaults: Required<Omit<DestinationsSectionT, 'destinations'>> = {
  sectionLabel: 'Costa Brava norte',
  h2: '¿Qué puedes hacer con un barco sin licencia en Roses?',
  intro: 'Más de lo que imaginas. Salir desde los canales de Santa Margarita ya es una experiencia en sí misma: casas frente al agua y un ambiente único que solo se ve desde el mar. A partir de ahí, la bahía de Roses y el Cap de Creus están a pocos minutos. Tú decides la ruta, el ritmo y las paradas. No hay horarios fijos ni grupos con los que compartir la embarcación.',
  listIntro: 'Estos son algunos de los rincones que puedes explorar a tu ritmo:',
  privateTitle: 'Todo privado — solo tu grupo a bordo',
  privateDesc1: 'Esta es quizás la diferencia más importante respecto a otras opciones de la zona. Cuando alquilas un barco sin licencia con Experience Boat, la embarcación es exclusivamente para tu grupo. Sin desconocidos, sin horarios compartidos, sin tener que adaptar la ruta a lo que quiere otra familia.',
  privateDesc2: 'Es la forma más libre de disfrutar el mar en Roses: sales cuando quieres, paras donde quieres y vuelves cuando te apetece.',
  privateCta: 'Ver barcos disponibles',
  pointLabel: 'Punto de salida exclusivo:',
  pointName: 'Marina de Santa Margarita, Roses',
  pointDesc: 'No saldrás desde un puerto masificado — saldrás navegando entre los canales de Santa Margarita.',
};

const containerVariants = { hidden: {}, visible: { transition: { staggerChildren: 0.08 } } };
const itemVariants = { hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0, transition: { duration: 0.45, ease: [0.0, 0.0, 0.2, 1] as [number, number, number, number] } } };

export default function DestinationsSection({ t }: { t?: DestinationsSectionT }) {
  const tx = { ...defaults, ...t };
  const destinations = t?.destinations ?? defaultDestinations;

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-4">
          <span className="text-sky-600 font-semibold text-sm uppercase tracking-widest">{tx.sectionLabel}</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 text-center mb-4">{tx.h2}</h2>
        <p className="text-gray-500 text-center max-w-3xl mx-auto mb-12 text-lg">{tx.intro}</p>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div whileInView="visible" viewport={{ once: true, margin: '-60px' }} className="anim-stagger grid gap-4">
            <p className="font-semibold text-gray-700 mb-2">{tx.listIntro}</p>
            {destinations.map((dest) => (
              <div key={dest.name}  className="anim-stagger flex gap-4 bg-white rounded-2xl p-4 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-10 h-10 bg-sky-50 rounded-xl flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-sky-500" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-gray-900 text-base mb-1">{dest.name}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{dest.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="sticky top-28 anim-fade-up">
            <div className="bg-gradient-to-br from-sky-600 to-cyan-500 rounded-3xl p-8 text-white shadow-2xl shadow-sky-500/30">
              <Waves className="w-10 h-10 mb-4 opacity-80" />
              <h3 className="text-2xl font-extrabold mb-3">{tx.privateTitle}</h3>
              <p className="text-sky-100 leading-relaxed mb-6">{tx.privateDesc1}</p>
              <p className="text-sky-100 leading-relaxed mb-8">{tx.privateDesc2}</p>
              <a href="#barcos" className="inline-flex items-center justify-center gap-2 bg-white text-sky-600 font-bold px-6 py-3 rounded-xl hover:bg-sky-50 transition-colors">
                {tx.privateCta}
              </a>
            </div>
            <div className="mt-4 bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
              <p className="text-sm text-gray-500 font-medium mb-2">{tx.pointLabel}</p>
              <p className="font-bold text-gray-900">{tx.pointName}</p>
              <p className="text-sm text-gray-500 mt-1">{tx.pointDesc}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
