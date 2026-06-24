import Image from 'next/image';
import Link from 'next/link';

const translations = {
  es: {
    title: 'Alquiler de lancha en Roses',
    subtitle: 'Potencia para llegar a las calas del Cap de Creus y la bahía de Roses, con tu licencia tú al timón.',
    discoverBtn: 'Ver la flota',
    bookBtn: 'Reservar mi lancha',
    scrollAnchor: '#producto',
    tagline: 'Con licencia · Bahía de Roses y Cap de Creus · Desde 195 €',
    altText: 'Alquiler de lancha en Roses'
  },
  fr: {
    title: 'Location de vedette à Roses',
    subtitle: 'La puissance pour rejoindre les criques du Cap de Creus et la baie de Roses — avec votre permis, vous à la barre.',
    discoverBtn: 'Voir la flotte',
    bookBtn: 'Réserver ma vedette',
    scrollAnchor: '#producto',
    tagline: 'Avec permis · Baie de Roses et Cap de Creus · Dès 195 €',
    altText: 'Location de vedette à Roses'
  },
  en: {
    title: 'Motorboat rental in Roses',
    subtitle: 'The power to reach the Cap de Creus coves and the bay of Roses — with your licence, you at the helm.',
    discoverBtn: 'See the fleet',
    bookBtn: 'Book my motorboat',
    scrollAnchor: '#producto',
    tagline: 'Licence required · Bay of Roses and Cap de Creus · From €195',
    altText: 'Motorboat rental in Roses'
  },
  ca: {
    title: 'Lloguer de llanxa a Roses',
    subtitle: 'Potència per arribar a les cales del Cap de Creus i la badia de Roses, amb la teva llicència tu al timó.',
    discoverBtn: 'Veure la flota',
    bookBtn: 'Reservar la meva llanxa',
    scrollAnchor: '#producto',
    tagline: 'Amb llicència · Badia de Roses i Cap de Creus · Des de 195 €',
    altText: 'Lloguer de llanxa a Roses'
  }
};

interface HeroSectionProps {
  lang?: 'es' | 'fr' | 'en' | 'ca';
}

export default function HeroSection({ lang = 'es' }: HeroSectionProps) {
  const t = translations[lang];

  return (
    <section className="relative w-full h-[62vh] min-h-[520px] flex items-center justify-center overflow-hidden">
      <Image
        src="/images/hero/con-licencia-hero-1320.jpg"
        alt={t.altText}
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black/50" />

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
          <Link
            href="#reservar"
            className="inline-flex items-center justify-center px-8 py-4 rounded-full font-semibold shadow-lg hover:brightness-110 transition-all active:scale-95 bg-[var(--nav-accent)] text-white"
          >
            {t.bookBtn}
          </Link>
        </div>

        <p className="text-sm text-gray-300 font-medium">
          {t.tagline}
        </p>
      </div>
    </section>
  );
}
