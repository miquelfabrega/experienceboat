
import Image from 'next/image';
import Link from 'next/link';

export interface HeroSectionT {
  h1?: string;
  ctaPrimary?: string;
  ctaSecondary?: string;
  socialProof?: string;
  waMessage?: string;
  imageAlt?: string;
}

const defaults: Required<HeroSectionT> = {
  h1: 'Alquiler de barco sin licencia en Roses',
  ctaPrimary: 'Ver barcos disponibles',
  ctaSecondary: 'Hablar por WhatsApp',
  socialProof: '500+ salidas · 5★ Google · Salida desde Santa Margarita',
  waMessage: 'Hola%2C%20me%20interesa%20alquilar%20un%20barco%20sin%20licencia%20en%20Roses',
  imageAlt: 'Barco sin licencia fondeado en aguas turquesa de la bahía de Roses, vista aérea',
};

export default function HeroSection({ t }: { t?: HeroSectionT }) {
  const tx = { ...defaults, ...t };
  return (
    <section className="relative w-full h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden">
      <Image
        src="/images/hero/sin-licencia-roses-2026.jpg"
        alt={tx.imageAlt}
        fill
        className="object-cover"
        sizes="100vw"
        priority
      />
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white flex flex-col items-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-10">
          {tx.h1}
        </h1>
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <Link
            href="#barcos"
            className="inline-flex items-center justify-center px-8 py-4 rounded-full font-semibold shadow-lg hover:brightness-110 transition-all active:scale-95 bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 text-white"
          >
            {tx.ctaPrimary}
          </Link>
          <a
            href={`https://wa.me/34623995700?text=${tx.waMessage}`}
            target="_blank"
            rel="nofollow noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 rounded-full font-semibold shadow-lg hover:brightness-110 transition-all active:scale-95 bg-green-500 text-white"
          >
            {tx.ctaSecondary}
          </a>
        </div>
        <p className="text-sm text-gray-300 font-medium">{tx.socialProof}</p>
      </div>
    </section>
  );
}
