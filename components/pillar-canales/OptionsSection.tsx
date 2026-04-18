import { ChevronRight, Ship, Users, Sailboat } from 'lucide-react';

const options = [
  {
    icon: Ship,
    tag: 'Sin titulación',
    tagColor: 'bg-sky-100 text-sky-700',
    badge: 'Más popular',
    title: 'Barco sin licencia',
    subtitle: 'Explora los canales a tu ritmo',
    desc: 'La opción más popular para familias y grupos sin experiencia náutica. Nuestros barcos sin licencia son perfectos para navegar por los canales interiores y la bahía de Roses. No necesitas titulación, no necesitas experiencia previa. Salís solos y marcáis el ritmo vosotros.',
    href: '/alquiler-barco-sin-licencia-roses',
    cta: 'Ver barcos sin licencia',
    gradient: 'from-sky-600 to-cyan-500',
    shadowColor: 'shadow-sky-500/20',
    hoverGradient: 'hover:from-sky-500 hover:to-cyan-400',
  },
  {
    icon: Users,
    tag: 'Con patrón',
    tagColor: 'bg-slate-100 text-slate-700',
    badge: 'Experiencia completa',
    title: 'Experiencias en barco en Roses',
    subtitle: 'DÉJATE LLEVAR',
    desc:
      'Salidas privadas desde los canales de Santa Margarita. Salvador se encarga de la navegación — tú solo de disfrutar. El Cap de Creus, la bahía de Roses y las calas más vírgenes de la Costa Brava, solo para tu grupo.',
    href: '/experiencias-barco-roses',
    cta: 'Ver experiencias →',
    gradient: 'from-slate-900 to-slate-800',
    shadowColor: 'shadow-slate-900/20',
    hoverGradient: 'hover:from-slate-800 hover:to-slate-700',
  },
  {
    icon: Sailboat,
    tag: 'Con licencia',
    tagColor: 'bg-teal-100 text-teal-700',
    badge: 'Total libertad',
    title: 'Barco con licencia',
    subtitle: 'Para navegantes con titulación',
    desc: 'Si tienes licencia náutica y quieres total libertad de ruta, nuestras embarcaciones con licencia te permiten salir desde los canales y llegar tan lejos como quieras. La Costa Brava norte está a tu disposición.',
    href: '/alquiler-barco-con-licencia-roses',
    cta: 'Ver barcos con licencia',
    gradient: 'from-teal-600 to-emerald-500',
    shadowColor: 'shadow-teal-500/20',
    hoverGradient: 'hover:from-teal-500 hover:to-emerald-400',
  },
];


export default function OptionsSection() {
  return (
    <section id="opciones" className="py-20 bg-slate-50 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-4">
          <span className="text-sky-600 font-semibold text-sm uppercase tracking-widest">Reserva tu salida</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 text-center mb-4">
          Canales de Santa Margarita en barco — opciones disponibles
        </h2>
        <p className="text-gray-500 text-center mb-14 text-lg max-w-2xl mx-auto">
          Puedes explorar los canales de Santa Margarita de tres maneras distintas según tu experiencia y lo
          que busques.
        </p>

        <div
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="anim-stagger grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {options.map((option) => {
            const Icon = option.icon;
            return (
              <a
                href={option.href}
                className={`group flex flex-col bg-gradient-to-br ${option.gradient} ${option.hoverGradient} rounded-3xl p-7 text-white transition-all duration-300 shadow-xl ${option.shadowColor} hover:-translate-y-1`}
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <span className={`text-xs font-bold px-3 py-1 rounded-full ${option.tagColor}`}>
                    {option.badge}
                  </span>
                </div>
                <p className="text-white/70 text-xs font-semibold uppercase tracking-wider mb-1">
                  {option.subtitle}
                </p>
                <h3 className="font-bold text-xl mb-3 leading-snug">{option.title}</h3>
                <p className="text-white/80 text-sm leading-relaxed mb-6 flex-1">{option.desc}</p>
                <span className="inline-flex items-center gap-2 text-white font-semibold text-sm group-hover:gap-3 transition-all">
                  {option.cta}
                  {!option.cta.trim().endsWith('→') ? <ChevronRight className="w-4 h-4" /> : null}
                </span>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
