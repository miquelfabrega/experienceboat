
import Image from 'next/image';
import Link from 'next/link';

type Lang = 'es' | 'fr' | 'en' | 'ca';

const t: Record<Lang, {
  alt: string;
  h1: string;
  optionsCta: string;
  whatsappCta: string;
  whatsappText: string;
  badge: string;
}> = {
  es: {
    alt: 'Vista aérea de la red de canales de Santa Margarita al atardecer, Roses (Costa Brava)',
    h1: 'Los canales de Santa Margarita en barco — la experiencia más singular de Roses',
    optionsCta: 'Ver opciones disponibles',
    whatsappCta: 'Hablar por WhatsApp',
    whatsappText: 'Hola, me interesa navegar por los canales de Santa Margarita en Roses',
    badge: '500+ salidas · 5★ Google · Salida desde la Marina de Santa Margarita',
  },
  fr: {
    alt: 'Vue aérienne du réseau de canaux de Santa Margarita au coucher du soleil, Roses (Costa Brava)',
    h1: 'Les canaux de Santa Margarita en bateau — l\'expérience la plus singulière de Roses',
    optionsCta: 'Voir les options disponibles',
    whatsappCta: 'Parler sur WhatsApp',
    whatsappText: 'Bonjour, je souhaite naviguer sur les canaux de Santa Margarita à Roses',
    badge: '500+ sorties · 5★ Google · Départ depuis la Marina de Santa Margarita',
  },
  en: {
    alt: 'Aerial view of the Santa Margarita canal network at sunset, Roses (Costa Brava)',
    h1: 'The Santa Margarita canals by boat — the most singular experience in Roses',
    optionsCta: 'See available options',
    whatsappCta: 'Message us on WhatsApp',
    whatsappText: 'Hello, I\'m interested in a boat trip on the Santa Margarita canals in Roses',
    badge: '500+ trips · 5★ Google · Departure from Marina de Santa Margarita',
  },
  ca: {
    alt: 'Vista aèria de la xarxa de canals de Santa Margarida al capvespre, Roses (Costa Brava)',
    h1: 'Els canals de Santa Margarida amb vaixell — l\'experiència més singular de Roses',
    optionsCta: 'Veure les opcions disponibles',
    whatsappCta: 'Parleu-nos per WhatsApp',
    whatsappText: 'Hola, ens interessa navegar pels canals de Santa Margarida a Roses',
    badge: '500+ sortides · 5★ Google · Sortida des de la Marina de Santa Margarida',
  },
};

export default function HeroSection({ lang = 'es' }: { lang?: Lang }) {
  const c = t[lang];
  const whatsappUrl = `https://wa.me/34623995700?text=${encodeURIComponent(c.whatsappText)}`;

  return (
    <section className="relative w-full h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background photo */}
      <Image
        src="/santa-margarita/hero-canales.webp"
        alt={c.alt}
        fill
        className="object-cover"
        priority
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white flex flex-col items-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-10 max-w-4xl">
          {c.h1}
        </h1>

        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <Link
            href="#opciones"
            className="inline-flex items-center justify-center px-8 py-4 rounded-full font-semibold shadow-lg hover:brightness-110 transition-all active:scale-95 bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 text-white"
          >
            {c.optionsCta}
          </Link>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="nofollow noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 rounded-full font-semibold shadow-lg hover:brightness-110 transition-all active:scale-95 bg-green-500 text-white"
          >
            {c.whatsappCta}
          </a>
        </div>

        <p className="text-sm text-gray-300 font-medium">
          {c.badge}
        </p>
      </div>
    </section>
  );
}
