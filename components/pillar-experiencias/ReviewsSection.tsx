import Script from 'next/script';

const translations = {
  es: {
    label: 'Opiniones reales',
    title: 'Qué opinan de nuestras experiencias',
    subtitle: 'Reseñas verificadas de clientes que han disfrutado de excursiones privadas y atardeceres con nuestro patrón.',
    noscript: 'Las reseñas requieren JavaScript para cargarse. Visita nuestro perfil de Google para leerlas.',
  },
  en: {
    label: 'Real reviews',
    title: 'What guests say about our trips',
    subtitle: 'Verified reviews from guests who have enjoyed private trips and sunsets with our skipper.',
    noscript: 'The reviews need JavaScript to load. Visit our Google profile to read them.',
  },
  fr: {
    label: 'Avis réels',
    title: 'Ce qu’ils pensent de nos sorties',
    subtitle: 'Avis vérifiés de clients qui ont profité de sorties privées et de couchers de soleil avec notre skipper.',
    noscript: 'Les avis ont besoin de JavaScript pour se charger. Consultez notre profil Google pour les lire.',
  },
  ca: {
    label: 'Opinions reals',
    title: 'Què en pensen de les nostres experiències',
    subtitle: 'Ressenyes verificades de clients que han gaudit d’excursions privades i capvespres amb el nostre patró.',
    noscript: 'Les ressenyes necessiten JavaScript per carregar-se. Visiteu el nostre perfil de Google per llegir-les.',
  },
};

interface ReviewsSectionProps {
  lang?: 'es' | 'fr' | 'en' | 'ca';
}

export default function ReviewsSection({ lang = 'es' }: ReviewsSectionProps) {
  const t = translations[lang];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-4">
          <span className="text-sky-600 font-semibold text-sm uppercase tracking-widest">{t.label}</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 text-center mb-4">
          {t.title}
        </h2>
        <p className="text-gray-500 text-center mb-12 text-lg">
          {t.subtitle}
        </p>

        <div className="bg-slate-50 rounded-3xl border border-slate-100 shadow-sm p-8 anim-fade-up">
          {/* Trustindex Google Reviews Widget */}
          <div
            className="trustindex-widget"
            data-url="experienceboat.es"
          />
          {/* Fallback mientras no está configurado el dominio en Trustindex */}
          <noscript>
            <p className="text-center text-gray-500 py-8">
              {t.noscript}
            </p>
          </noscript>
        </div>

        {/* Trustindex script */}
        <Script
          id="trustindex-widget"
          src="https://cdn.trustindex.io/loader.js?experienceboat"
          strategy="lazyOnload"
        />
      </div>
    </section>
  );
}
