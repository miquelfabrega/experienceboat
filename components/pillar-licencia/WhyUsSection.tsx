import { Anchor, Compass, Wrench, MessageCircle } from 'lucide-react';

const reasons = [
  {
    icon: Anchor,
    title: 'Salida desde Santa Margarita',
    desc: 'Partimos desde los canales de Santa Margarita, un enclave único en la Costa Brava. No saldrás desde un puerto masificado — saldrás desde uno de los rincones más singulares de Roses.',
    highlight: 'Propuesta de valor única',
  },
  {
    icon: Compass,
    title: 'Zona de navegación excepcional',
    desc: 'La bahía de Roses y el Parque Natural del Cap de Creus son dos de los entornos náuticos más valorados del Mediterráneo occidental. Aguas protegidas, calas vírgenes y paisaje de referencia.',
    highlight: 'Cap de Creus a 45 min',
  },
  {
    icon: Wrench,
    title: 'Flota bien mantenida',
    desc: 'Nuestras embarcaciones no son nuevas, pero están en perfectas condiciones de uso. Funcionales, seguras y adecuadas para el tipo de navegación que ofrece la zona.',
    highlight: 'Seguridad garantizada',
  },
  {
    icon: MessageCircle,
    title: 'Reserva directa sin intermediarios',
    desc: 'Hablas con Tomàs o Max directamente, y si necesitas ajustar algo — fecha, duración, modelo — lo resolvemos sin burocracia.',
    highlight: 'Atención personalizada',
  },
];


export default function WhyUsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-4">
          <span className="text-sky-600 font-semibold text-sm uppercase tracking-widest">Nuestra diferencia</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 text-center mb-4">
          ¿Por qué alquilar con licencia en Experience Boat?
        </h2>
        <p className="text-gray-500 text-center max-w-2xl mx-auto mb-14 text-lg">
          Cuatro razones por las que nuestros clientes repiten temporada tras temporada.
        </p>

        <div
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="anim-stagger grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {reasons.map((reason) => {
            const Icon = reason.icon;
            return (
              <div
                key={reason.title}
                
                className="anim-stagger bg-slate-50 rounded-3xl p-6 border border-slate-100 hover:border-sky-200 hover:bg-sky-50/50 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-sky-500 group-hover:bg-sky-600 rounded-2xl flex items-center justify-center mb-4 transition-colors shadow-md shadow-sky-500/30">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <span className="text-xs text-sky-600 font-semibold uppercase tracking-wider mb-2 block">
                  {reason.highlight}
                </span>
                <h3 className="font-bold text-gray-900 text-lg mb-3 leading-snug">{reason.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{reason.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
