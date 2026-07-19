import Script from 'next/script';

const translations = {
  es: {
    eyebrow: 'Reseñas de Google',
    title: 'Lo que dicen quienes han navegado los canales',
    subtitle: 'Opiniones reales de familias, parejas y grupos que han sido capitanes por un día en Santa Margarita.',
    noscript: 'Las reseñas requieren JavaScript para cargarse. Visita nuestro perfil de Google para leerlas.',
  },
  fr: {
    eyebrow: 'Avis Google',
    title: 'Ce que disent ceux qui ont navigué sur les canaux',
    subtitle: 'Avis authentiques de familles, couples et groupes devenus capitaines d\'un jour à Santa Margarita.',
    noscript: 'Les avis nécessitent JavaScript pour se charger. Consultez notre profil Google pour les lire.',
  },
  en: {
    eyebrow: 'Google reviews',
    title: 'What guests who sailed the canals say',
    subtitle: 'Real reviews from families, couples and groups who became captain for a day in Santa Margarita.',
    noscript: 'Reviews require JavaScript to load. Visit our Google profile to read them.',
  },
  ca: {
    eyebrow: 'Ressenyes de Google',
    title: 'El que diuen els qui han navegat pels canals',
    subtitle: 'Opinions reals de famílies, parelles i grups que han estat capitans per un dia a Santa Margarida.',
    noscript: 'Les ressenyes requereixen JavaScript per carregar-se. Visiteu el nostre perfil de Google per llegir-les.',
  },
};

interface ReviewsSectionProps {
  lang?: 'es' | 'fr' | 'en' | 'ca';
}

export default function ReviewsSection({ lang = 'es' }: ReviewsSectionProps) {
  const t = translations[lang];

  return (
    <section className="py-20 bg-slate-50 border-b border-gray-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-4">
          <span className="text-sky-600 font-semibold text-sm uppercase tracking-widest">{t.eyebrow}</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 text-center mb-4">
          {t.title}
        </h2>
        <p className="text-gray-500 text-center mb-12 text-lg">
          {t.subtitle}
        </p>

        <div
          className="bg-white rounded-3xl border border-gray-100 shadow-sm p-8 anim-fade-up"
        >
          {/* Trustindex Google Reviews Widget */}
          <div
            className="trustindex-widget"
            data-url="experienceboat.es"
          />
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
