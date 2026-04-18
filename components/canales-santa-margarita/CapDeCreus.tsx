
import Link from 'next/link';

export interface CapDeCreusT {
  sectionLabel?: string;
  h2?: string;
  text?: string;
  infoText?: string;
  linkText?: string;
  linkHref?: string;
}

const defaults: Required<CapDeCreusT> = {
  sectionLabel: 'Rutas posibles',
  h2: '¿Se puede llegar al Cap de Creus sin licencia desde los canales?',
  text: 'Sí, aunque con matices. Nuestros barcos sin licencia están diseñados para navegación costera tranquila. La bahía de Roses es perfectamente accesible y muy recomendable. Las calas más cercanas del Cap de Creus también están al alcance si las condiciones del mar son buenas.',
  infoText: 'Para adentrarse en el Parque Natural del Cap de Creus con más profundidad, recomendamos una de nuestras excursiones privadas con patrón — Tomàs o Max conocen las rutas y las calas que merecen la pena según la época del año.',
  linkText: 'Ver excursiones privadas con patrón',
  linkHref: '/experiencias-barco-roses',
};

export default function CapDeCreus({ t }: { t?: CapDeCreusT }) {
  const tx = { ...defaults, ...t };
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="text-sky-600 font-semibold text-sm uppercase tracking-widest block mb-4">{tx.sectionLabel}</span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-6">{tx.h2}</h2>
        <div className="bg-white p-8 md:p-12 rounded-3xl border border-gray-100 shadow-sm text-left">
          <p className="text-lg text-gray-600 leading-relaxed mb-6">{tx.text}</p>
          <div className="flex gap-4 p-6 bg-sky-50 rounded-2xl mb-8">
            <svg className="w-6 h-6 text-sky-500 shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
            <p className="text-gray-700 text-sm leading-relaxed">{tx.infoText}</p>
          </div>
          <div className="text-center">
            <Link href={tx.linkHref} className="inline-flex items-center justify-center px-8 py-4 rounded-xl font-bold shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all bg-sky-600 text-white">
              {tx.linkText}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
