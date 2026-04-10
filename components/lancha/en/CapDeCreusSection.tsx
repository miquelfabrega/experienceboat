import Image from 'next/image';

export default function CapDeCreusSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div
           className="anim-fade-right">
            <span className="text-sky-600 font-semibold text-sm uppercase tracking-widest block mb-4">
              The ultimate destination
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-6 leading-tight">
              Cap de Creus: the lighthouse at the end of the Pyrenees
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Cap de Creus is the eastern end of the Pyrenees mountain range — where the mountains
              meet the sea. The landscape is unlike anywhere else on the Iberian Peninsula: volcanic
              rock sculpted by millennia of wind, sea-only coves and waters of extraordinary clarity.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              The Cap de Creus Natural Park occupies a vast area of coastline that is largely
              inaccessible by land. By motorboat from Santa Margarita, you can explore this
              territory in about 45–60 minutes. It is one of the most spectacular experiences
              available on the entire Costa Brava.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              Several of the park&apos;s most sought-after coves — Cala Culip, Cala Guilola, Cala
              Tamariu de Cap de Creus — are only reachable by sea. You need a licensed motorboat
              powerful enough to handle the open-water passage from Roses.
            </p>

            <div className="grid grid-cols-3 gap-4">
              {[
                { value: '~45 min', label: 'from Santa Margarita' },
                { value: '3,000 ha', label: 'protected natural area' },
                { value: '>20', label: 'sea-only coves' },
              ].map((stat) => (
                <div key={stat.label} className="bg-slate-50 rounded-2xl p-4 text-center border border-slate-100">
                  <div className="text-2xl font-extrabold text-sky-600">{stat.value}</div>
                  <div className="text-xs text-gray-500 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div
            className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl anim-fade-left anim-delay-2"
          >
            <Image
              src="https://picsum.photos/seed/cap-de-creus-en/800/600"
              alt="Cap de Creus lighthouse viewed from a motorboat"
              fill
              className="object-cover"
            />
            <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/60 to-transparent p-6">
              <p className="text-white font-bold text-lg">Cap de Creus lighthouse</p>
              <p className="text-white/80 text-sm">Easternmost point of the Iberian Peninsula</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
