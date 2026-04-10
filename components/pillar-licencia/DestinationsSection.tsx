import { MapPin, Waves } from 'lucide-react';

const destinations = [
  {
    name: 'Cap de Creus',
    desc: 'El punto más oriental de la Península Ibérica. Paisaje lunar desde el agua, calas de acceso exclusivo por mar y aguas de una transparencia excepcional.',
    time: '45–60 min',
  },
  {
    name: 'Cala Culip',
    desc: 'Una de las calas más salvajes y protegidas del Parque Natural. Solo se llega en barco.',
    time: '50 min',
  },
  {
    name: 'Cala Tamariua',
    desc: 'Aguas cristalinas rodeadas de roca volcánica. Muy poco masificada incluso en temporada alta.',
    time: '40 min',
  },
  {
    name: 'Cala Canyelles Petites',
    desc: 'Parada clásica desde Roses, perfecta para el baño y el snorkel.',
    time: '20 min',
  },
  {
    name: 'Cala Almadraba',
    desc: 'Accesible también a pie, pero desde el agua tiene otra dimensión.',
    time: '15 min',
  },
  {
    name: 'Bahía de Roses',
    desc: 'Ideal para salidas tranquilas de mañana o atardecer, con vistas al Pirineo de fondo.',
    time: '5 min',
  },
];


export default function DestinationsSection() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-4">
          <span className="text-sky-600 font-semibold text-sm uppercase tracking-widest">Costa Brava norte</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 text-center mb-4">
          ¿Qué puedes hacer con un barco con licencia en Roses?
        </h2>
        <p className="text-gray-500 text-center max-w-3xl mx-auto mb-12 text-lg">
          Con licencia, el radio de acción se amplía considerablemente. Puedes alejarte de la costa, llegar a
          calas que no están al alcance de embarcaciones más pequeñas y trazar tu propia ruta sin depender de
          nadie. La Costa Brava norte desde Roses es uno de los escenarios de navegación más espectaculares del
          Mediterráneo.
        </p>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Destinations grid */}
          <div
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="anim-stagger grid gap-4"
          >
            <p className="font-semibold text-gray-700 mb-2">
              Algunos de los destinos favoritos de nuestros clientes con licencia:
            </p>
            {destinations.map((dest) => (
              <div
                key={dest.name}
                
                className="anim-stagger flex gap-4 bg-white rounded-2xl p-4 border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-10 h-10 bg-sky-50 rounded-xl flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-sky-500" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <h3 className="font-bold text-gray-900 text-base">{dest.name}</h3>
                    <span className="text-xs text-sky-600 font-semibold bg-sky-50 px-2 py-0.5 rounded-full shrink-0">
                      {dest.time}
                    </span>
                  </div>
                  <p className="text-gray-500 text-sm leading-relaxed">{dest.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Right: private charter callout */}
          <div
            className="sticky top-28 anim-fade-up"
          >
            <div className="bg-gradient-to-br from-sky-600 to-cyan-500 rounded-3xl p-8 text-white shadow-2xl shadow-sky-500/30">
              <Waves className="w-10 h-10 mb-4 opacity-80" />
              <h3 className="text-2xl font-extrabold mb-3">Todo privado — la embarcación es solo para vosotros</h3>
              <p className="text-sky-100 leading-relaxed mb-6">
                Al igual que en todos nuestros servicios, cuando alquilas un barco con licencia en Experience
                Boat la embarcación es exclusivamente para tu grupo. No compartimos barco con otros clientes.
              </p>
              <p className="text-sky-100 leading-relaxed mb-8">
                Eso significa libertad total para elegir ruta, ritmo y paradas sin coordinarlo con nadie. Con
                una embarcación potente y sin nadie más a bordo, el Cap de Creus está a menos de una hora
                desde Santa Margarita.
              </p>
              <a
                href="#barcos"
                className="inline-flex items-center justify-center gap-2 bg-white text-sky-600 font-bold px-6 py-3 rounded-xl hover:bg-sky-50 transition-colors"
              >
                Ver barcos disponibles
              </a>
            </div>

            <div className="mt-4 bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
              <p className="text-sm text-gray-500 font-medium mb-2">Punto de salida exclusivo:</p>
              <p className="font-bold text-gray-900">
                Marina de Santa Margarita, Roses
              </p>
              <p className="text-sm text-gray-500 mt-1">
                No saldrás desde un puerto masificado — saldrás desde uno de los rincones más singulares de la
                Costa Brava.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
