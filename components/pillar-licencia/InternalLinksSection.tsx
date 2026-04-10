import { ChevronRight, Ship, Users } from 'lucide-react';

export default function InternalLinksSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 gap-6">
          {/* Excursiones con patrón */}
          <a
            href="/experiencias-barco-roses"
            className="group flex gap-5 bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-7 text-white hover:from-slate-800 hover:to-slate-700 transition-all duration-300 shadow-xl anim-fade-right"
          >
            <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center shrink-0">
              <Users className="w-6 h-6 text-sky-300" />
            </div>
            <div>
              <p className="text-sky-300 text-xs font-semibold uppercase tracking-wider mb-1">¿Prefieres salir con patrón?</p>
              <h3 className="font-bold text-lg mb-2 leading-snug">
                Excursiones privadas con patrón
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-4">
                Si tienes licencia pero prefieres que alguien más se encargue del barco para disfrutar al
                máximo, también tenemos esa opción. Salen desde los mismos canales de Santa Margarita.
              </p>
              <span className="inline-flex items-center gap-1 text-sky-300 font-semibold text-sm group-hover:gap-2 transition-all">
                Ver excursiones privadas con patrón <ChevronRight className="w-4 h-4" />
              </span>
            </div>
          </a>

          {/* Alquiler sin licencia */}
          <a
            href="/alquiler-barco-sin-licencia-roses"
            className="group flex gap-5 bg-gradient-to-br from-sky-600 to-cyan-500 rounded-3xl p-7 text-white hover:from-sky-500 hover:to-cyan-400 transition-all duration-300 shadow-xl shadow-sky-500/20 anim-fade-left anim-delay-1"
          >
            <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center shrink-0">
              <Ship className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="text-sky-100 text-xs font-semibold uppercase tracking-wider mb-1">Sin titulación náutica</p>
              <h3 className="font-bold text-lg mb-2 leading-snug">
                Alquiler de barco sin licencia
              </h3>
              <p className="text-sky-100 text-sm leading-relaxed mb-4">
                Si alguien de tu grupo no tiene titulación náutica, no hay problema. Tenemos embarcaciones
                sin licencia perfectas para cualquier perfil, desde debutantes hasta grupos mixtos.
              </p>
              <span className="inline-flex items-center gap-1 text-white font-semibold text-sm group-hover:gap-2 transition-all">
                Ver barcos sin licencia <ChevronRight className="w-4 h-4" />
              </span>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
