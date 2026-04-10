import Image from 'next/image';

export interface CanalesParejasT {
  sectionLabel?: string;
  h2?: string;
  p1?: string;
  p2?: string;
  p3?: string;
}

const defaults: Required<CanalesParejasT> = {
  sectionLabel: 'Un inicio romántico',
  h2: 'Los canales de Santa Margarita — el comienzo perfecto',
  p1: 'Todas las salidas de Experience Boat empiezan por los canales de Santa Margarita, y para una pareja ese recorrido inicial es especialmente especial.',
  p2: 'Las aguas tranquilas, las casas con jardín asomadas al canal y los puentes bajos de piedra crean un ambiente que recuerda más a Ámsterdam que a la Costa Brava. Es el tipo de escena que da para muchas fotos y para empezar el día con calma antes de que el barco llegue a la bahía de Roses y el horizonte se abra.',
  p3: 'Si os gusta la fotografía, llevad la cámara preparada — la luz a primera hora de la mañana en los canales es difícil de superar.',
};

export default function CanalesParejas({ t }: { t?: CanalesParejasT }) {
  const tx = { ...defaults, ...t };
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-sky-600 font-semibold text-sm uppercase tracking-widest block mb-4">{tx.sectionLabel}</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-6 leading-tight">{tx.h2}</h2>
            <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
              <p>{tx.p1}</p>
              <p>{tx.p2}</p>
              <p>{tx.p3}</p>
            </div>
          </div>
          <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl anim-fade-left">
            <Image src="https://picsum.photos/seed/canales-pareja/800/600" alt="Pareja navegando por los canales de Santa Margarita" fill className="object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}
