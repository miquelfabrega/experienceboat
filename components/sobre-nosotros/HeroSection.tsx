import Image from 'next/image';

type Lang = 'es' | 'fr' | 'en' | 'ca';

const t: Record<Lang, { alt: string; tag: string; h1: string; p: string }> = {
  ca: {
    alt: 'Experience Boat - Empresa de lloguer de vaixells a Roses',
    tag: 'Sobre nosaltres',
    h1: 'Els vaixells d\'en Toto a Roses',
    p: 'Em dic Salvador, però aquí tothom em coneix com en Toto. Llogo vaixells a la badia de Roses amb el meu equip, i aquesta pàgina va de qui som i de com ens agrada sortir a navegar.',
  },
  es: {
    alt: 'Experience Boat - Empresa de alquiler de barcos en Roses',
    tag: 'Sobre Nosotros',
    h1: 'Los barcos de Toto en Roses',
    p: 'Me llamo Salvador, pero aquí todo el mundo me conoce como Toto. Alquilo barcos en la bahía de Roses con mi equipo, y esta página va de quiénes somos y de cómo nos gusta salir a navegar.',
  },
  fr: {
    alt: 'Experience Boat - Location de bateaux à Roses',
    tag: 'À propos de nous',
    h1: 'Les bateaux de Toto à Roses',
    p: "Je m'appelle Salvador, mais ici tout le monde m'appelle Toto. Je loue des bateaux dans la baie de Roses avec mon équipe, et cette page raconte qui nous sommes et comment nous aimons naviguer.",
  },
  en: {
    alt: 'Experience Boat — Boat rental company in Roses',
    tag: 'About us',
    h1: 'Toto\'s boats in Roses',
    p: "My name is Salvador, but around here everyone calls me Toto. I rent out boats in the Bay of Roses with my team, and this page is about who we are and how we like to get out on the water.",
  },
};

export default function HeroSection({ lang = 'es' }: { lang?: Lang }) {
  const tx = t[lang];
  return (
    <section className="relative w-full h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
      <Image
        src="https://picsum.photos/seed/sobre-nosotros-hero/1600/900"
        alt={tx.alt}
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center text-white">
        <span className="text-sky-400 font-semibold tracking-widest uppercase text-sm mb-4 block">
          {tx.tag}
        </span>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
          {tx.h1}
        </h1>
        <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
          {tx.p}
        </p>
      </div>
    </section>
  );
}
