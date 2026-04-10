import Script from 'next/script';

export interface ReviewsSectionT {
  sectionLabel?: string;
  h2?: string;
  desc?: string;
}

const defaults: Required<ReviewsSectionT> = {
  sectionLabel: 'Opiniones reales',
  h2: 'Qué opinan nuestros clientes',
  desc: 'Pedimos a nuestros clientes que sean específicos en sus reseñas — que mencionen dónde fueron, qué vieron y cómo fue la experiencia. Así tú puedes hacerte una idea real de lo que te espera.',
};

export default function ReviewsSection({ t }: { t?: ReviewsSectionT }) {
  const tx = { ...defaults, ...t };
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-4">
          <span className="text-sky-600 font-semibold text-sm uppercase tracking-widest">{tx.sectionLabel}</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 text-center mb-4">{tx.h2}</h2>
        <p className="text-gray-500 text-center max-w-2xl mx-auto mb-12 text-lg">{tx.desc}</p>

        <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-8 anim-fade-up">
          <div className="trustindex-widget" data-url="experienceboat.es" />
          <noscript>
            <p className="text-center text-gray-500 py-8">Les avis nécessitent JavaScript. Visitez notre profil Google pour les lire.</p>
          </noscript>
        </div>

        <Script id="trustindex-widget" src="https://cdn.trustindex.io/loader.js?experienceboat" strategy="lazyOnload" />
      </div>
    </section>
  );
}
