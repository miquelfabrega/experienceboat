import Script from 'next/script';

export default function ReviewsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-4">
          <span className="text-sky-600 font-semibold text-sm uppercase tracking-widest">Opiniones reales</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 text-center mb-4">
          Qué opinan quienes han navegado por los canales
        </h2>
        <p className="text-gray-500 text-center mb-12 text-lg">
          Reseñas verificadas de Google de clientes que han salido desde la Marina de Santa Margarita con nosotros.
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
              Las reseñas requieren JavaScript para cargarse. Visita nuestro perfil de Google para leerlas.
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
