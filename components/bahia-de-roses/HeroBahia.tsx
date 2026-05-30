import Image from 'next/image';
import Link from 'next/link';

type Lang = 'es' | 'fr' | 'ca';

interface HeroBahiaProps {
  lang?: Lang;
}

const t: Record<Lang, Record<string, string>> = {
  es: {
    home: 'Inicio',
    breadcrumbMiddle: 'Alquiler con licencia en Roses',
    title: 'Navega libre por la bahía de Roses',
    buttonBoats: 'Ver barcos disponibles',
    buttonWhatsApp: 'Hablar por WhatsApp',
    altText: 'Barco con licencia en la bahía de Roses',
    boatsAnchor: '#barcos',
    breadcrumbAnchor: '/alquiler-barco-con-licencia-roses',
    whatsappText: 'Hola%2C%20me%20interesa%20alquilar%20un%20barco%20en%20la%20bah%C3%ADa%20de%20Roses',
    subtext: '500+ salidas · 5★ Google · Salida desde Santa Margarita',
    aria: 'Ruta de navegación',
    navLabel: 'Bahía de Roses',
  },
  fr: {
    home: 'Accueil',
    breadcrumbMiddle: 'Location avec permis à Roses',
    title: 'Naviguez libre dans la baie de Roses',
    buttonBoats: 'Voir les bateaux disponibles',
    buttonWhatsApp: 'Nous contacter sur WhatsApp',
    altText: 'Bateau avec permis dans la baie de Roses',
    boatsAnchor: '#bateaux',
    breadcrumbAnchor: '/fr/location-bateau-avec-permis-roses',
    whatsappText: 'Bonjour%2C%20je%20suis%20int%C3%A9ress%C3%A9%20par%20la%20location%20d%27un%20bateau%20dans%20la%20baie%20de%20Roses',
    subtext: '500+ sorties · 5★ Google · Départ depuis Santa Margarita',
    aria: 'Fil d\'Ariane',
    navLabel: 'Baie de Roses',
  },
  ca: {
    home: 'Inici',
    breadcrumbMiddle: 'Lloguer amb llicència a Roses',
    title: 'Navegueu lliures per la badia de Roses',
    buttonBoats: 'Veure embarcacions disponibles',
    buttonWhatsApp: 'Parlar per WhatsApp',
    altText: 'Vaixell amb llicència a la badia de Roses',
    boatsAnchor: '#barcos',
    breadcrumbAnchor: '/ca/lloguer-vaixell-amb-llicencia-roses',
    whatsappText: 'Hola%2C%20m%27interessa%20llogar%20un%20vaixell%20a%20la%20badia%20de%20Roses',
    subtext: '500+ sortides · 5★ Google · Sortida des de Santa Margarida',
    aria: 'Camí de molla',
    navLabel: 'Badia de Roses',
  },
};

export default function HeroBahia({ lang = 'es' }: HeroBahiaProps) {
  const labels = t[lang];

  return (
    <section className="relative w-full h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden">
      <Image
        src="https://picsum.photos/seed/bahia-roses-hero/1600/900"
        alt={labels.altText}
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white flex flex-col items-center">
        <nav aria-label={labels.aria} className="w-full text-sm text-gray-300 mb-8">
          <ol className="flex flex-wrap justify-center items-center gap-2">
            <li>
              <a href={lang === 'es' ? '/' : lang === 'ca' ? '/ca' : '/fr'} className="hover:text-white transition-colors">
                {labels.home}
              </a>
            </li>
            <li aria-hidden className="text-gray-500">›</li>
            <li>
              <a href={labels.breadcrumbAnchor} className="hover:text-white transition-colors">
                {labels.breadcrumbMiddle}
              </a>
            </li>
            <li aria-hidden className="text-gray-500">›</li>
            <li className="text-white font-medium">{labels.navLabel}</li>
          </ol>
        </nav>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-10">
          {labels.title}
        </h1>

        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <Link
            href={labels.boatsAnchor}
            className="inline-flex items-center justify-center px-8 py-4 rounded-full font-semibold shadow-lg hover:brightness-110 transition-all active:scale-95 bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 text-white"
          >
            {labels.buttonBoats}
          </Link>
          <a
            href={`https://wa.me/34623995700?text=${labels.whatsappText}`}
            target="_blank"
            rel="nofollow noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 rounded-full font-semibold shadow-lg hover:brightness-110 transition-all active:scale-95 bg-green-500 text-white"
          >
            {labels.buttonWhatsApp}
          </a>
        </div>

        <p className="text-sm text-gray-300 font-medium">
          {labels.subtext}
        </p>
      </div>
    </section>
  );
}
