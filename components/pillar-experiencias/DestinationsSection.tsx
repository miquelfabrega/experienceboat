import { MapPin } from 'lucide-react';
import Link from 'next/link';

const destinations = [
  {
    name: 'Los canales de Santa Margarita',
    desc: 'El punto de partida de todas las salidas y un destino en sí mismo. Casas con embarcadero privado y aguas completamente tranquilas. A primera hora de la mañana o al atardecer, los canales tienen una luz que no se encuentra en ningún otro punto de la Costa Brava.',
  },
  {
    name: 'La bahía de Roses',
    desc: (
      <>
        El escenario principal de nuestras salidas. Aguas protegidas, horizonte abierto y el Pirineo al fondo. Perfecta para el baño tranquilo y como punto de paso hacia los destinos más alejados. Al atardecer, la{' '}
        <Link href="/" className="text-sky-600 hover:text-sky-700 hover:underline font-medium">
          bahía de Roses
        </Link>{' '}
        se convierte en el escenario del Sunset Experience.
      </>
    ),
  },
  {
    name: 'Las calas del Cap de Creus',
    desc: 'El destino estrella de nuestras excursiones privadas. Cala Pelosa, Cala Rostella, Cala Jóncols — calas que solo se llegan en barco, con aguas de una transparencia que no tiene comparación en la Costa Brava. Para quien quiere llegar a donde la mayoría de turistas nunca llega.',
  },
];


export default function DestinationsSection() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 text-center mb-4">
          Dónde os llevaremos
        </h2>
        <p className="text-gray-500 text-center mb-12 text-lg">
          La zona de navegación de Experience Boat es una de las más espectaculares del Mediterráneo. Estos son los destinos habituales dependiendo de la experiencia elegida:
        </p>

        <div
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="anim-stagger space-y-6"
        >
          {destinations.map((dest) => (
            <div
              key={dest.name}
              
              className="anim-stagger flex gap-6 bg-white rounded-3xl p-8 border border-gray-100 shadow-sm"
            >
              <div className="w-12 h-12 bg-sky-50 rounded-2xl flex items-center justify-center shrink-0">
                <MapPin className="w-6 h-6 text-sky-500" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-xl mb-3">{dest.name}</h3>
                <p className="text-gray-600 leading-relaxed">{dest.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
