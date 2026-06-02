import Script from 'next/script';

type Lang = 'es' | 'fr' | 'en' | 'ca';

const t: Record<Lang, {
  eyebrow: string;
  h2: string;
  intro: string;
  noscript: string;
}> = {
  es: {
    eyebrow: 'Opiniones reales',
    h2: 'Qué opinan quienes han navegado por los canales',
    intro:
      'Reseñas verificadas de Google de clientes que han salido desde la Marina de Santa Margarita con nosotros.',
    noscript:
      'Las reseñas requieren JavaScript para cargarse. Visita nuestro perfil de Google para leerlas.',
  },
  fr: {
    eyebrow: 'Avis authentiques',
    h2: 'Ce que pensent ceux qui ont navigué sur les canaux',
    intro:
      'Avis Google vérifiés de clients qui sont partis avec nous depuis la Marina de Santa Margarita.',
    noscript:
      'Les avis nécessitent JavaScript pour se charger. Consultez notre profil Google pour les lire.',
  },
  en: {
    eyebrow: 'Real reviews',
    h2: 'What those who have sailed the canals have to say',
    intro:
      'Verified Google reviews from customers who have set off with us from the Marina de Santa Margarita.',
    noscript:
      'Reviews require JavaScript to load. Visit our Google profile to read them.',
  },
  ca: {
    eyebrow: 'Opinions reals',
    h2: 'Què opinen els qui han navegat pels canals',
    intro:
      'Ressenyes verificades de Google de clients que han sortit amb nosaltres des de la Marina de Santa Margarida.',
    noscript:
      'Les ressenyes requereixen JavaScript per carregar-se. Visiteu el nostre perfil de Google per llegir-les.',
  },
};

export default function ReviewsSection({ lang = 'es' }: { lang?: Lang }) {
  const c = t[lang];
  return (
    <section className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-4">
          <span className="text-sky-600 font-semibold text-sm uppercase tracking-widest">{c.eyebrow}</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 text-center mb-4">
          {c.h2}
        </h2>
        <p className="text-gray-500 text-center mb-12 text-lg">
          {c.intro}
        </p>

        <div
          className="bg-slate-50 rounded-3xl border border-gray-100 shadow-sm p-8 anim-fade-up"
        >
          {/* Trustindex Google Reviews Widget */}
          <div
            className="trustindex-widget"
            data-url="experienceboat.es"
          />
          <noscript>
            <p className="text-center text-gray-500 py-8">
              {c.noscript}
            </p>
          </noscript>
        </div>

        {/* Trustindex script — carga asíncrona para no bloquear el render */}
        <Script
          id="trustindex-widget-canales"
          src="https://cdn.trustindex.io/loader.js?experienceboat"
          strategy="lazyOnload"
        />
      </div>
    </section>
  );
}
