export interface IntroSectionT {
  h2?: string;
  text?: string;
}

const defaults: Required<IntroSectionT> = {
  h2: 'Conviértete en capitán por un día',
  text: 'Sin necesitar ninguna titulación: en Experience Boat puedes alquilar un barco sin licencia en Roses y salir directamente desde los canales de Santa Margarita hacia la bahía de Roses y el Parque Natural del Cap de Creus. No hace falta experiencia previa — nuestras embarcaciones están diseñadas para que cualquier persona pueda llevarlas desde el primer minuto.',
};

export default function IntroSection({ t }: { t?: IntroSectionT }) {
  const tx = { ...defaults, ...t };
  return (
    <section className="py-20 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">{tx.h2}</h2>
          <p className="text-lg text-gray-600 leading-relaxed">{tx.text}</p>
        </div>
      </div>
    </section>
  );
}
