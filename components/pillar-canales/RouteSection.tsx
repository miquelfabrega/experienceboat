import { Waves, Camera, Compass } from 'lucide-react';

const stops = [
  {
    icon: Waves,
    number: '01',
    title: 'La entrada por los canales interiores',
    desc: 'Salimos desde la Marina de Santa Margarita y nos adentramos en los canales interiores. A ambos lados, las casas muestran su cara más auténtica: terrazas sobre el agua, jardines con palmeras, embarcaciones privadas amarradas a pocos metros de las puertas. Es el tipo de imagen que no esperas encontrar en la Costa Brava y que se queda grabada.',
  },
  {
    icon: Camera,
    number: '02',
    title: 'Un barrio por el que navegas',
    desc:
      'Los canales atraviesan un barrio residencial real: casas con jardín, embarcaciones amarradas en el amarre privado de cada vivienda. No es un parque temático ni un circuito turístico — es un barrio por el que navegas. Esa sensación de colarte en la vida cotidiana de alguien es lo que lo hace distinto. Y cuando la superficie está quieta, las fachadas se duplican en el canal.',
  },
  {
    icon: Compass,
    number: '03',
    title: 'La salida a la bahía de Roses',
    desc: 'Cuando los canales se abren al mar, el escenario cambia de golpe. La bahía de Roses se extiende frente a vosotros con el macizo del Pirineo al fondo y el Cap de Creus al noreste. Desde aquí, según el tiempo disponible y las ganas del grupo, podemos seguir hacia las calas del Cap de Creus o simplemente fondear en la bahía y disfrutar del agua.',
  },
];


export default function RouteSection() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-4">
          <span className="text-sky-600 font-semibold text-sm uppercase tracking-widest">El recorrido</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 text-center mb-4">
          La ruta por los canales — qué vas a ver
        </h2>
        <p className="text-gray-500 text-center mb-14 text-lg max-w-2xl mx-auto">
          Una salida típica por los canales de Santa Margarita dura entre 60 y 90 minutos dependiendo del
          ritmo y las paradas. Este es el recorrido habitual.
        </p>

        <div
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="anim-stagger grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {stops.map((stop) => {
            const Icon = stop.icon;
            return (
              <div
                key={stop.number}
                
                className="anim-stagger bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-md hover:border-sky-200 transition-all duration-300 group"
              >
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-12 h-12 bg-sky-500 group-hover:bg-sky-600 rounded-2xl flex items-center justify-center shrink-0 transition-colors shadow-md shadow-sky-500/30">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-4xl font-black text-slate-100 select-none">{stop.number}</span>
                </div>
                <h3 className="font-bold text-gray-900 text-lg mb-3 leading-snug">{stop.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{stop.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
