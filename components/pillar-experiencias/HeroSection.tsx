
import Image from 'next/image';
import Link from 'next/link';

type Lang = 'es' | 'fr' | 'en';

const t: Record<Lang, {
  imgAlt: string; h1: string; ctaPrimary: string; ctaWhatsapp: string; subtitle: string; waText: string;
}> = {
  es: {
    imgAlt: 'Vista aérea de la bahía y el puerto deportivo de Roses, Costa Brava',
    h1: 'Experiencias en barco en Roses — solo tu grupo, sin compartir',
    ctaPrimary: 'Ver experiencias',
    ctaWhatsapp: 'Hablar por WhatsApp',
    subtitle: 'Excursiones con patrón · Salidas privadas · Desde Santa Margarita',
    waText: 'Hola, me interesa reservar una experiencia en barco en Roses',
  },
  fr: {
    imgAlt: 'Vue aérienne de la baie et du port de plaisance de Roses, Costa Brava',
    h1: 'Expériences en bateau à Roses — rien que votre groupe, sans partage',
    ctaPrimary: 'Voir les expériences',
    ctaWhatsapp: 'Discuter sur WhatsApp',
    subtitle: 'Excursions avec skipper · Sorties privées · Depuis Santa Margarita',
    waText: 'Bonjour, je souhaite réserver une expérience en bateau à Roses',
  },
  en: {
    imgAlt: 'Aerial view of the bay and marina of Roses, Costa Brava',
    h1: 'Boat experiences in Roses — just your group, no sharing',
    ctaPrimary: 'See experiences',
    ctaWhatsapp: 'Chat on WhatsApp',
    subtitle: 'Skippered trips · Private outings · From Santa Margarita',
    waText: 'Hello, I would like to book a boat experience in Roses',
  },
};

export default function HeroSection({ lang = 'es' }: { lang?: Lang }) {
  const tx = t[lang];
  return (
    <section className="relative w-full h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background photo */}
      <Image
        src="/images/experiencias/experiencias-roses-hero.webp"
        alt={tx.imgAlt}
        fill
        sizes="100vw"
        className="object-cover"
        priority
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white flex flex-col items-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-10">
          {tx.h1}
        </h1>

        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <Link
            href="#experiencias"
            className="inline-flex items-center justify-center px-8 py-4 rounded-full font-semibold shadow-lg hover:brightness-110 transition-all active:scale-95 bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 text-white"
          >
            {tx.ctaPrimary}
          </Link>
          <a
            href={`https://wa.me/34623995700?text=${encodeURIComponent(tx.waText)}`}
            target="_blank"
            rel="nofollow noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 rounded-full font-semibold shadow-lg hover:brightness-110 transition-all active:scale-95 bg-green-500 text-white"
          >
            {tx.ctaWhatsapp}
          </a>
        </div>

        <p className="text-sm text-gray-300 font-medium">
          {tx.subtitle}
        </p>
      </div>
    </section>
  );
}
