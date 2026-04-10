
import Image from 'next/image';

export interface HeroParejasT {
  badge?: string;
  h1?: string;
  desc?: string;
  cta?: string;
  waMessage?: string;
}

const defaults: Required<HeroParejasT> = {
  badge: 'Especial parejas',
  h1: 'Alquiler de barco sin licencia en Roses para parejas',
  desc: 'Un día en el mar con la persona que quieres, sin compartir espacio con nadie más y a vuestro ritmo.',
  cta: 'Consultar disponibilidad',
  waMessage: 'Hola%2C%20me%20interesa%20alquilar%20un%20barco%20sin%20licencia%20para%20parejas',
};

export default function HeroParejas({ t }: { t?: HeroParejasT }) {
  const tx = { ...defaults, ...t };
  return (
    <section className="relative w-full h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
      <Image src="https://picsum.photos/seed/parejas-barco-roses/1600/900" alt="Pareja en un barco sin licencia en Roses" fill className="object-cover" priority />
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <span className="inline-block py-1 px-3 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-xs font-semibold tracking-wider uppercase mb-6">{tx.badge}</span>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 leading-tight">{tx.h1}</h1>
        <p className="text-lg md:text-xl text-gray-200 font-medium max-w-2xl mx-auto mb-10">{tx.desc}</p>
        <a href={`https://wa.me/34623995700?text=${tx.waMessage}`} target="_blank" rel="nofollow noopener noreferrer" className="inline-flex items-center justify-center px-8 py-4 rounded-xl font-bold shadow-lg hover:brightness-110 transition-all active:scale-95 bg-sky-500 text-white">
          {tx.cta}
        </a>
      </div>
    </section>
  );
}
