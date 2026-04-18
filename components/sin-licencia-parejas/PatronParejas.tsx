import { Users, ChevronRight } from 'lucide-react';

export interface PatronParejasT {
  h3?: string;
  desc?: string;
  cta?: string;
  href?: string;
}

const defaults: Required<PatronParejasT> = {
  h3: '¿Preferís que alguien más lleve el barco?',
  desc: 'Si lo que buscáis es desconectar completamente y que alguien más se encargue de la navegación mientras vosotros disfrutáis, nuestras excursiones privadas con patrón son exactamente eso. Tomàs o Max llevan el barco, conocen cada cala y se adaptan al ritmo que queráis — más activo o más relajado.',
  cta: 'Ver excursiones privadas con patrón',
  href: '/experiencias-barco-roses',
};

export default function PatronParejas({ t }: { t?: PatronParejasT }) {
  const tx = { ...defaults, ...t };
  return (
    <section className="py-16 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <a href={tx.href} className="group flex flex-col md:flex-row items-center gap-6 md:gap-10 bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-8 md:p-12 text-white hover:from-slate-800 hover:to-slate-700 transition-all duration-300 shadow-2xl anim-fade-up">
          <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center shrink-0"><Users className="w-8 h-8 text-sky-300" /></div>
          <div className="text-center md:text-left flex-1">
            <h3 className="font-extrabold text-2xl mb-3 leading-snug">{tx.h3}</h3>
            <p className="text-slate-300 text-lg leading-relaxed mb-4 max-w-2xl">{tx.desc}</p>
            <span className="inline-flex items-center justify-center gap-2 text-sky-300 font-bold text-lg group-hover:gap-3 transition-all">
              {tx.cta} <ChevronRight className="w-5 h-5" />
            </span>
          </div>
        </a>
      </div>
    </section>
  );
}
