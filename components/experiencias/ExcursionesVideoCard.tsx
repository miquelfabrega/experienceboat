/**
 * Tarjeta de vídeo (patrón canal-tour) para la sección "Nuestras excursiones
 * desde Roses" de la página de excursiones privadas. Vídeo vertical contenido,
 * con controles y sonido (click-to-play). CTA al widget de reserva (#reservar).
 */
const COPY = {
  es: {
    text: 'Así es un día a bordo con nosotros: tu grupo, tu ritmo y la ruta que tú elijas.',
    cta: 'Reservar excursión',
    waText: 'Hola%2C%20quiero%20reservar%20una%20excursi%C3%B3n%20privada%20desde%20Roses',
    alt: 'Vídeo de una excursión privada en barco desde Roses',
  },
  en: {
    text: 'This is a day on board with us: your group, your pace and the route you choose.',
    cta: 'Book your excursion',
    waText: 'Hello%2C%20I%27d%20like%20to%20book%20a%20private%20excursion%20from%20Roses',
    alt: 'Video of a private boat excursion from Roses',
  },
  fr: {
    text: 'Voici une journée à bord avec nous : votre groupe, votre rythme et l’itinéraire que vous choisissez.',
    cta: 'Réserver l’excursion',
    waText: 'Bonjour%2C%20je%20souhaite%20r%C3%A9server%20une%20excursion%20priv%C3%A9e%20depuis%20Roses',
    alt: 'Vidéo d’une excursion privée en bateau depuis Roses',
  },
  ca: {
    text: 'Així és un dia a bord amb nosaltres: el teu grup, el teu ritme i la ruta que tu triïs.',
    cta: 'Reservar excursió',
    waText: 'Hola%2C%20vull%20reservar%20una%20excursi%C3%B3%20privada%20des%20de%20Roses',
    alt: 'Vídeo d’una excursió privada en vaixell des de Roses',
  },
};

export default function ExcursionesVideoCard({ lang = 'es' }: { lang?: 'es' | 'en' | 'fr' | 'ca' }) {
  const t = COPY[lang];
  return (
    <div className="rounded-3xl border border-slate-200 bg-white shadow-xl shadow-slate-200/50 overflow-hidden flex flex-col lg:flex-row">
      <div className="relative w-full lg:w-[42%] aspect-[9/16] lg:aspect-auto lg:min-h-[460px] bg-slate-900">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          controls
          playsInline
          preload="metadata"
          poster="/excursiones/excursiones-7399-poster.jpg"
          aria-label={t.alt}
        >
          <source src="/excursiones/excursiones-7399.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="flex-1 p-8 lg:p-10 flex flex-col justify-center">
        <p className="text-gray-600 leading-relaxed mb-6 text-lg">{t.text}</p>
        <div className="flex flex-col sm:flex-row gap-3">
          <a
            href="#reservar"
            className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl font-bold bg-[var(--nav-accent)] hover:bg-[var(--nav-accent-hover)] text-white shadow-lg shadow-sky-500/20 transition-all"
          >
            {t.cta}
          </a>
          <a
            href={`https://wa.me/34623995700?text=${t.waText}`}
            target="_blank"
            rel="nofollow noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl font-bold bg-green-500 hover:bg-green-600 text-white transition-all"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
