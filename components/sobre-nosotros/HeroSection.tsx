import Image from 'next/image';

type Lang = 'es' | 'fr' | 'en';

const t: Record<Lang, { alt: string; tag: string; h1: string; p: string }> = {
  es: {
    alt: 'Experience Boat - Empresa de alquiler de barcos en Roses',
    tag: 'Sobre Nosotros',
    h1: 'Tu empresa de barcos en Roses',
    p: 'Nos dedicamos al alquiler de embarcaciones en la bahía de Roses con un único propósito: que cada salida al mar sea una experiencia que quieras repetir.',
  },
  fr: {
    alt: 'Experience Boat - Location de bateaux à Roses',
    tag: 'À propos de nous',
    h1: 'Votre spécialiste de la location de bateaux à Roses',
    p: "Nous proposons la location de bateaux dans la baie de Roses avec un seul objectif : faire de chaque sortie en mer une expérience inoubliable.",
  },
  en: {
    alt: 'Experience Boat — Boat rental company in Roses',
    tag: 'About us',
    h1: 'Your boat rental company in Roses',
    p: "We specialise in boat rentals in the Bay of Roses with one single goal: to make every trip out to sea an experience you'll want to repeat.",
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
