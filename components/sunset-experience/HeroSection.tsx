import Image from 'next/image';
import Link from 'next/link';

const translations = {
  es: {
    title: 'Sunset Experience — el atardecer más bonito de Roses desde el agua',
    subtitle: 'Hay un momento del día en Roses que la mayoría de turistas ven desde la playa o desde una terraza. Nosotros te lo enseñamos desde el agua.',
    discoverBtn: 'Descubrir la experiencia',
    bookBtn: 'Reservar Sunset Experience',
    whatsappText: 'Hola%2C%20quiero%20informaci%C3%B3n%20sobre%20el%20Sunset%20Experience',
    scrollAnchor: '#que-es',
    tagline: 'Salida privada en barco · Canales y Bahía · Momento irrepetible',
    altText: 'Sunset Experience en barco en Roses - El atardecer más bonito'
  },
  fr: {
    title: 'Sunset Experience — le plus beau coucher de soleil de Roses depuis l\'eau',
    subtitle: 'Il y a un moment de la journée à Roses que la plupart des touristes voient depuis la plage ou depuis une terrasse. Nous vous le faisons vivre depuis l\'eau.',
    discoverBtn: 'Découvrir l\'expérience',
    bookBtn: 'Réserver le Sunset Experience',
    whatsappText: 'Bonjour%2C%20je%20souhaite%20des%20informations%20sur%20le%20Sunset%20Experience',
    scrollAnchor: '#que-est',
    tagline: 'Sortie privée en bateau · Canaux et Baie · Moment inoubliable',
    altText: 'Sunset Experience en bateau à Roses — le plus beau coucher de soleil'
  },
  en: {
    title: 'Sunset Experience — the most beautiful sunset in Roses from the water',
    subtitle: 'There is a moment of the day in Roses that most tourists see from the beach or from a terrace. We show it to you from the water.',
    discoverBtn: 'Discover the experience',
    bookBtn: 'Book the Sunset Experience',
    whatsappText: 'Hello%2C%20I%27d%20like%20information%20about%20the%20Sunset%20Experience',
    scrollAnchor: '#what-is-it',
    tagline: 'Private boat trip · Canals & Bay · Unforgettable moment',
    altText: 'Sunset Experience boat trip in Roses — the most beautiful sunset'
  }
};

interface HeroSectionProps {
  lang?: 'es' | 'fr' | 'en';
}

export default function HeroSection({ lang = 'es' }: HeroSectionProps) {
  const t = translations[lang];

  return (
    <section className="relative w-full h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background photo */}
      <Image
        src="https://picsum.photos/seed/sunset-roses/1600/900"
        alt={t.altText}
        fill
        className="object-cover"
        priority
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white flex flex-col items-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
          {t.title}
        </h1>
        
        <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-3xl">
          {t.subtitle}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <Link
            href={t.scrollAnchor}
            className="inline-flex items-center justify-center px-8 py-4 rounded-full font-semibold shadow-lg hover:brightness-110 transition-all active:scale-95 bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 text-white"
          >
            {t.discoverBtn}
          </Link>
          <a
            href={`https://wa.me/34623995700?text=${t.whatsappText}`}
            target="_blank"
            rel="nofollow noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 rounded-full font-semibold shadow-lg hover:brightness-110 transition-all active:scale-95 bg-green-500 text-white"
          >
            {t.bookBtn}
          </a>
        </div>

        <p className="text-sm text-gray-300 font-medium">
          {t.tagline}
        </p>
      </div>
    </section>
  );
}
