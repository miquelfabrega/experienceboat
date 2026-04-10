import { Anchor, Baby, Car } from 'lucide-react';

const points = [
  {
    icon: Anchor,
    title: 'La experiencia empieza antes de tocar el mar',
    desc: 'Salir desde los canales significa que el recorrido interior por las vías navegables de Santa Margarita es en sí mismo un destino — no solo el camino hacia otro sitio.',
  },
  {
    icon: Baby,
    title: 'Perfecto para familias con niños',
    desc: 'Las aguas de los canales son completamente tranquilas, protegidas del viento y sin oleaje. Los más pequeños pueden ver las casas desde el agua, pasar bajo los puentes y vivir la experiencia náutica sin la incertidumbre del mar abierto.',
  },
  {
    icon: Car,
    title: 'Aparca y embarca',
    desc:
      'Mientras otros amarran lejos y tú buscas aparcamiento, en Santa Margarita llegas, aparcas al lado y embarcas. Sin complicaciones logísticas. Más tiempo disfrutando, menos tiempo gestionando.',
  },
];

export default function DifferentiatorSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-4">
          <span className="text-sky-600 font-semibold text-sm uppercase tracking-widest">Nuestra diferencia</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 text-center mb-4">
          El punto de salida que nadie más tiene
        </h2>
        <p className="text-gray-500 text-center mb-14 text-lg max-w-2xl mx-auto">
          Salimos desde los canales de Santa Margarita, con aparcamiento justo al lado, sin colas, sin cargar el
          material caminando. Menos logística.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {points.map((point, i) => {
            const Icon = point.icon;
            return (
              <div
                className="bg-gradient-to-br from-sky-50 to-white rounded-3xl p-8 border border-sky-100 hover:border-sky-300 transition-all duration-300 group anim-fade-up"
              >
                <div className="w-12 h-12 bg-sky-500 group-hover:bg-sky-600 rounded-2xl flex items-center justify-center mb-5 transition-colors shadow-md shadow-sky-500/30">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-gray-900 text-lg mb-3 leading-snug">{point.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{point.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
