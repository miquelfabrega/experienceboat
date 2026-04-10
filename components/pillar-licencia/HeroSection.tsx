import Image from 'next/image';
import Link from 'next/link';

type Lang = 'es' | 'fr' | 'en';

const t: Record<Lang, Record<string, string>> = {
  es: {
    title: 'Alquiler de barco con licencia en Roses',
    boatsLink: 'Ver barcos disponibles',
    whatsapp: 'Hablar por WhatsApp',
    subtitle: '500+ salidas · 5★ Google · Salida desde Santa Margarita',
    alt: 'Barco con licencia navegando por la bahía de Roses hacia el Cap de Creus',
  },
  fr: {
    title: 'Location de bateau avec permis à Roses',
    boatsLink: 'Voir les bateaux disponibles',
    whatsapp: 'Nous contacter sur WhatsApp',
    subtitle: '500+ sorties · 5★ Google · Départ depuis Santa Margarita',
    alt: 'Bateau avec permis naviguant dans la baie de Roses vers le Cap de Creus',
  },
  en: {
    title: 'Boat rental with licence in Roses',
    boatsLink: 'View available boats',
    whatsapp: 'Contact us on WhatsApp',
    subtitle: '500+ departures · 5★ Google · Departing from Santa Margarita',
    alt: 'Licensed boat sailing in the Bay of Roses towards Cap de Creus',
  },
};

export default function HeroSection({ lang = 'es' }: { lang?: Lang }) {
  const texts = t[lang];
  const anchorId = lang === 'fr' ? '#bateaux' : '#barcos';
  const whatsappUrl =
    lang === 'es'
      ? 'https://wa.me/34623995700?text=Hola%2C%20me%20interesa%20alquilar%20un%20barco%20con%20licencia%20en%20Roses'
      : lang === 'fr'
        ? 'https://wa.me/34623995700?text=Bonjour%2C%20je%20suis%20int%C3%A9ress%C3%A9%20par%20la%20location%20d%27un%20bateau%20avec%20permis%20%C3%A0%20Roses'
        : 'https://wa.me/34623995700?text=Hello%2C%20I%20am%20interested%20in%20renting%20a%20boat%20with%20licence%20in%20Roses';

  return (
    <section className="relative w-full h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden">
      <Image
        src="https://picsum.photos/seed/licencia-roses-hero/1600/900"
        alt={texts.alt}
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white flex flex-col items-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-10">
          {texts.title}
        </h1>

        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <Link
            href={anchorId}
            className="inline-flex items-center justify-center px-8 py-4 rounded-full font-semibold shadow-lg hover:brightness-110 transition-all active:scale-95 bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 text-white"
          >
            {texts.boatsLink}
          </Link>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="nofollow noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 rounded-full font-semibold shadow-lg hover:brightness-110 transition-all active:scale-95 bg-green-500 text-white"
          >
            {texts.whatsapp}
          </a>
        </div>

        <p className="text-sm text-gray-300 font-medium">{texts.subtitle}</p>
      </div>
    </section>
  );
}
