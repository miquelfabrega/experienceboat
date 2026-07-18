import Image from 'next/image';
import Link from 'next/link';

const translations = {
  es: {
    title: 'Tour en Barco por los canales de Santa Margarita',
    subtitle: '90 minutos por los quince kilómetros de canales de Santa Margarita, con el timón en tus manos y sin licencia.',
    discoverBtn: 'Descubrir la experiencia',
    bookBtn: 'Reservar Canal Tour',
    scrollAnchor: '#que-es',
    tagline: 'Sin licencia · Canales de Santa Margarita · 90 Minutos',
    altText: 'Tour en Barco por los canales de Santa Margarita'
  },
  fr: {
    title: 'Tour en bateau sur les canaux de Santa Margarita',
    subtitle: '90 minutes sur les quinze kilomètres de canaux de Santa Margarita, la barre entre vos mains et sans permis.',
    discoverBtn: 'Découvrir l\'expérience',
    bookBtn: 'Réserver le Canal Tour',
    scrollAnchor: '#que-est',
    tagline: 'Sans permis · Canaux de Santa Margarita · 90 minutes',
    altText: 'Tour en bateau sur les canaux de Santa Margarita à Roses'
  },
  en: {
    title: 'Canal Tour through the Santa Margarita canals',
    subtitle: '90 minutes along the fifteen kilometres of Santa Margarita canals, with the helm in your hands and no licence needed.',
    discoverBtn: 'Discover the experience',
    bookBtn: 'Book the Canal Tour',
    scrollAnchor: '#what-is-it',
    tagline: 'No licence required · Santa Margarita canals · 90 minutes',
    altText: 'Canal Tour boat trip through Santa Margarita canals in Roses'
  },
  ca: {
    title: 'Tour en vaixell pels canals de Santa Margarida',
    subtitle: '90 minuts pels quinze quilòmetres de canals de Santa Margarida, amb el timó a les vostres mans i sense llicència.',
    discoverBtn: 'Descobrir l\'experiència',
    bookBtn: 'Reservar Canal Tour',
    scrollAnchor: '#que-es',
    tagline: 'Sense llicència · Canals de Santa Margarida · 90 minuts',
    altText: 'Tour en vaixell pels canals de Santa Margarida a Roses'
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
        src="/santa-margarita/hero-canal-tour.webp"
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
