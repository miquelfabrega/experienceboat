import { Users, Anchor, Map } from 'lucide-react';
import Link from 'next/link';

export default function CommonSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 text-center mb-4">
          ¿Qué tienen en común todas nuestras experiencias?
        </h2>
        <p className="text-gray-500 text-center max-w-3xl mx-auto mb-16 text-lg">
          Independientemente de la salida que elijas, hay tres cosas que nunca cambian:
        </p>

        <div className="grid md:grid-cols-3 gap-10">
          {/* Feature 1 */}
          <div
            className="flex flex-col items-center text-center anim-fade-up"
          >
            <div className="w-16 h-16 bg-sky-50 rounded-2xl flex items-center justify-center mb-6">
              <Users className="w-8 h-8 text-sky-500" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Todo privado</h3>
            <p className="text-gray-600 leading-relaxed">
              La embarcación es exclusivamente para tu grupo. Sin otras familias, sin desconocidos, sin tener que adaptar la ruta a lo que quiere otra persona. Cuando reservas con Experience Boat, el barco es vuestro.
            </p>
          </div>

          {/* Feature 2 */}
          <div
            className="flex flex-col items-center text-center anim-fade-up anim-delay-1"
          >
            <div className="w-16 h-16 bg-sky-50 rounded-2xl flex items-center justify-center mb-6">
              <Anchor className="w-8 h-8 text-sky-500" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Salvador al timón</h3>
            <p className="text-gray-600 leading-relaxed">
              Nuestro patrón conoce cada rincón de la bahía de Roses y el Parque Natural del Cap de Creus. Sabe cuáles son las mejores calas según la época del año, cuándo hay menos gente en cada fondeo y cómo hacer que el día salga bien independientemente de cómo empiece.
            </p>
          </div>

          {/* Feature 3 */}
          <div
            className="flex flex-col items-center text-center anim-fade-up anim-delay-2"
          >
            <div className="w-16 h-16 bg-sky-50 rounded-2xl flex items-center justify-center mb-6">
              <Map className="w-8 h-8 text-sky-500" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Salida desde los canales</h3>
            <p className="text-gray-600 leading-relaxed">
              Todas las experiencias salen desde la Marina de Santa Margarita — el enclave náutico más singular de Roses. El recorrido por los{' '}
              <Link href="/canales-santa-margarita" className="text-sky-600 hover:text-sky-700 hover:underline">
                canales de Santa Margarita
              </Link>{' '}
              antes de llegar al mar abierto ya forma parte de la experiencia.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
