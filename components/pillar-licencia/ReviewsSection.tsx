import Script from 'next/script';

const translations = {
  es: {
    label: 'Opiniones reales',
    title: 'Qué opinan nuestros clientes',
    subtitle: 'Reseñas verificadas de Google de clientes que han salido desde Santa Margarita con nosotros.',
    noscript: 'Las reseñas requieren JavaScript para cargarse. Visita nuestro perfil de Google para leerlas.',
  },
  en: {
    label: 'Real reviews',
    title: 'What our guests say',
    subtitle: 'Verified Google reviews from guests who have sailed with us out of Santa Margarita.',
    noscript: 'The reviews need JavaScript to load. Visit our Google profile to read them.',
  },
  fr: {
    label: 'Avis réels',
    title: 'Ce que disent nos clients',
    subtitle: 'Avis Google vérifiés de clients partis avec nous depuis Santa Margarita.',
    noscript: 'Les avis ont besoin de JavaScript pour se charger. Consultez notre profil Google pour les lire.',
  },
  ca: {
    label: 'Opinions reals',
    title: 'Què en pensen els nostres clients',
    subtitle: 'Ressenyes verificades de Google de clients que han salpat des de Santa Margarida amb nosaltres.',
    noscript: 'Les ressenyes necessiten JavaScript per carregar-se. Visiteu el nostre perfil de Google per llegir-les.',
  },
};

interface ReviewsSectionProps {
  lang?: 'es' | 'fr' | 'en' | 'ca';
}

export default function ReviewsSection({ lang = 'es' }: ReviewsSectionProps) {
  const t = translations[lang];

  return (
    <section className="py-20 bg-slate-50">
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

        <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-8 anim-fade-up">
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

        {/* Trustindex script — carga asíncrona para no bloquear el render */}
        <Script
          id="trustindex-widget"
          src="https://cdn.trustindex.io/loader.js?experienceboat"
          strategy="lazyOnload"
        />
      </div>
    </section>
  );
}
