import Image from 'next/image';

export default function MarinaSection() {
  return (
    <section className="py-20 bg-slate-50 border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Image */}
          <div className="w-full lg:w-1/2 relative aspect-[4/3] rounded-3xl overflow-hidden shadow-lg">
            <Image
              src="/santa-margarita/marina-descubre.webp"
              alt="Vista aérea de los canales de Santa Margarita serpenteando hacia el mar al atardecer, Roses (Costa Brava)"
              fill
              className="object-cover"
            />
          </div>

          {/* Text Content */}
          <div className="w-full lg:w-1/2 space-y-6">
            <div className="inline-block px-3 py-1 bg-sky-100 text-sky-700 text-sm font-semibold rounded-full uppercase tracking-wide">
              El Entorno
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
              Descubre la Marina de Santa Margarita
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed text-lg">
              <p>
                Santa Margarita es una espectacular marina residencial construida en la antigua zona de marismas de la desembocadura del río Grau. Por ella serpentean <strong>quince kilómetros de canales navegables</strong>, ofreciendo una red acuática fascinante.
              </p>
              <p>
                Se encuentra situada en plena bahía de Roses, justo a la izquierda del Parc Natural dels Aiguamolls de l&apos;Empordà y a muy poca distancia del imponente litoral del cabo de Creus, lo que le otorga un entorno natural privilegiado.
              </p>
              <p>
                En esta extensa red de canales, conviven más de mil quinientos amarres y espectaculares casas con salida directa al agua. Navegando por aquí, te adentrarás en un ambiente náutico único, rodeado de arquitectura singular y embarcaciones de todo tipo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}