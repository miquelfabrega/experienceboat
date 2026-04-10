import { ChevronRight, Ship, Users } from 'lucide-react';

export interface InternalLinksSectionT {
  card1Label?: string;
  card1Title?: string;
  card1Desc?: string;
  card1Cta?: string;
  card1Href?: string;
  card2Label?: string;
  card2Title?: string;
  card2Desc?: string;
  card2Cta?: string;
  card2Href?: string;
}

const defaults: Required<InternalLinksSectionT> = {
  card1Label: '¿También quieres ir con patrón?',
  card1Title: 'Excursiones privadas con patrón',
  card1Desc: 'Si prefieres que alguien más lleve el timón y tú solo te preocupes de disfrutar, tenemos esa opción también. Salen desde los mismos canales de Santa Margarita.',
  card1Cta: 'Ver excursiones con patrón',
  card1Href: '/experiencias-barco-roses/',
  card2Label: '¿Tienes titulación náutica?',
  card2Title: 'Alquiler de barco con licencia',
  card2Desc: 'Si tienes la titulación, disponemos de embarcaciones potentes para navegar libremente por la bahía de Roses y llegar hasta el Cap de Creus más rápido.',
  card2Cta: 'Ver barcos con licencia',
  card2Href: '/alquiler-barco-con-licencia-roses/',
};

export default function InternalLinksSection({ t }: { t?: InternalLinksSectionT }) {
  const tx = { ...defaults, ...t };
  return (
    <section className="py-16 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 gap-6">
          <a href={tx.card1Href} className="group flex gap-5 bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-7 text-white hover:from-slate-800 hover:to-slate-700 transition-all duration-300 shadow-xl anim-fade-right">
            <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center shrink-0">
              <Users className="w-6 h-6 text-sky-300" />
            </div>
            <div>
              <p className="text-sky-300 text-xs font-semibold uppercase tracking-wider mb-1">{tx.card1Label}</p>
              <h3 className="font-bold text-lg mb-2 leading-snug">{tx.card1Title}</h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-4">{tx.card1Desc}</p>
              <span className="inline-flex items-center gap-1 text-sky-300 font-semibold text-sm group-hover:gap-2 transition-all">
                {tx.card1Cta} <ChevronRight className="w-4 h-4" />
              </span>
            </div>
          </a>

          <a href={tx.card2Href} className="group flex gap-5 bg-gradient-to-br from-sky-600 to-cyan-500 rounded-3xl p-7 text-white hover:from-sky-500 hover:to-cyan-400 transition-all duration-300 shadow-xl shadow-sky-500/20 anim-fade-left anim-delay-1">
            <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center shrink-0">
              <Ship className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="text-sky-100 text-xs font-semibold uppercase tracking-wider mb-1">{tx.card2Label}</p>
              <h3 className="font-bold text-lg mb-2 leading-snug">{tx.card2Title}</h3>
              <p className="text-sky-100 text-sm leading-relaxed mb-4">{tx.card2Desc}</p>
              <span className="inline-flex items-center gap-1 text-white font-semibold text-sm group-hover:gap-2 transition-all">
                {tx.card2Cta} <ChevronRight className="w-4 h-4" />
              </span>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
