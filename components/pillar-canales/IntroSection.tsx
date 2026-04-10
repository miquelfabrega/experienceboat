export default function IntroSection() {
  return (
    <section className="py-20 bg-white border-b border-gray-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Intro paragraph */}
        <p className="text-xl text-gray-600 leading-relaxed text-center mb-16">
          Hay un rincón de Roses que la mayoría ve desde tierra sin saber que desde el agua es
          completamente diferente. Los canales de Santa Margarita son una red de vías navegables bordeadas de
          casas con embarcadero privado, puentes de piedra y una calma que contrasta con el bullicio de la
          playa. En Experience Boat salimos desde aquí — y la excursión empieza antes de llegar al mar abierto.
        </p>

        {/* ¿Qué son los canales? */}
        <div id="que-son">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            ¿Qué son los canales de Santa Margarita?
          </h2>
          <div className="prose prose-lg prose-gray max-w-none space-y-4 text-gray-600">
            <p>
              Santa Margarita es una urbanización náutica única en la Costa Brava, construida sobre un sistema
              de canales artificiales que conectan con la bahía de Roses. Fue diseñada en los años 60 siguiendo
              el modelo de las ciudades canal holandesas y hoy es uno de los pocos enclaves de estas
              características en toda la costa mediterránea española.
            </p>
            <p>
              Más de 500 viviendas tienen acceso directo al agua desde su jardín. Cada casa tiene su propio
              embarcadero. Los canales se cruzan bajo puentes bajos de piedra blanca y crean una red de casi
              10 kilómetros de vías navegables protegidas del viento y el oleaje.
            </p>
            <p className="font-semibold text-gray-800 text-lg">
              Desde tierra, Santa Margarita parece un barrio residencial más de Roses. Desde el agua, es otro mundo.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
