type Lang = 'es' | 'fr';

interface BahiaUnicaSectionProps {
  lang?: Lang;
}

export default function BahiaUnicaSection({ lang = 'es' }: BahiaUnicaSectionProps) {
  return (
    <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900 mb-8 leading-tight">
          La bahía de Roses desde el agua —{' '}
          <span className="text-[#0d4a47]">qué hace única esta zona</span>
        </h2>

        <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
          <p>
            Si estás planificando una jornada completa por la bahía con tu licencia en Roses, consulta
            primero nuestra página de{' '}
            <a
              href="/alquiler-barco-con-licencia-roses"
              className="text-[#0d4a47] font-medium underline underline-offset-2 hover:text-[#0b1f3a] transition-colors"
            >
              alquiler de barco con licencia en Roses
            </a>
            : allí encontrarás toda la flota disponible, precios por temporada y cómo reservar para
            la Costa Brava.
          </p>
          <p>
            La bahía de Roses mide aproximadamente{' '}
            <strong className="text-slate-800 font-semibold">15 kilómetros de costa</strong> y está
            delimitada por dos de los entornos naturales más singulares de Cataluña: el Parque Natural
            de los Aiguamolls del Empordà al sur y el Parque Natural del Cap de Creus al norte.
            Desde el agua, esa combinación de naturaleza protegida, costa escarpada y aguas
            mediterráneas transparentes crea un escenario que muy pocos lugares del litoral español
            pueden igualar.
          </p>

          <div className="relative pl-6 border-l-4 border-cyan-400">
            <p className="text-slate-700">
              Para un patrón con licencia, la bahía de Roses ofrece algo que no abunda en la Costa
              Brava:{' '}
              <strong className="text-slate-900 text-xl font-bold">espacio</strong>. Puedes alejarte
              de la costa, trazar rutas largas, explorar el Cap de Creus en profundidad o simplemente
              navegar durante horas sin cruzarte con nadie más que alguna barca de pesca local. Esa
              libertad de movimiento — sin límites de zona ni de tiempo de navegación — es el
              argumento principal para elegir una embarcación con licencia frente a otras opciones.
            </p>
          </div>
        </div>

        {/* Visual accent */}
        <div className="mt-12 grid grid-cols-3 gap-6">
          {[
            {
              icon: '🌊',
              title: 'Costa protegida',
              desc: 'Dos parques naturales enmarcan la bahía',
            },
            {
              icon: '⚓',
              title: 'Fondeos libres',
              desc: 'Calas volcánicas acceso libre por mar',
            },
            {
              icon: '🧭',
              title: 'Rutas sin límite',
              desc: 'Navega a Cap de Creus, Llançà y más',
            },
          ].map((item) => (
            <div
              key={item.title}
              className="flex flex-col items-center text-center p-6 rounded-2xl bg-slate-50 border border-slate-100"
            >
              <span className="text-3xl mb-3">{item.icon}</span>
              <h3 className="font-semibold text-slate-900 mb-1 text-sm">{item.title}</h3>
              <p className="text-xs text-slate-500">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
