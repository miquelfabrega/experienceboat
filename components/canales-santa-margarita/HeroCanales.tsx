
import Image from 'next/image';

type Lang = 'es' | 'fr' | 'en' | 'ca';

const t: Record<Lang, { badge: string; h1: string; desc: string; cta: string; waMessage: string }> = {
  es: {
    badge: 'Rutas sin licencia',
    h1: 'Barco sin licencia en los canales de Santa Margarita',
    desc: 'Navega por los canales de Santa Margarita sin licencia desde Roses. Aguas tranquilas, casas frente al agua y la Costa Brava más auténtica.',
    cta: 'Consultar disponibilidad',
    waMessage: 'Hola%2C%20me%20interesa%20alquilar%20un%20barco%20sin%20licencia%20para%20los%20canales%20de%20Santa%20Margarita',
  },
  fr: {
    badge: 'Itinéraires sans permis',
    h1: 'Bateau sans permis dans les canaux de Santa Margarita',
    desc: 'Naviguez sans permis dans les canaux de Santa Margarita au départ de Roses. Eaux calmes, maisons au bord de l\'eau et la Costa Brava la plus authentique.',
    cta: 'Vérifier les disponibilités',
    waMessage: 'Bonjour%2C%20je%20voudrais%20louer%20un%20bateau%20sans%20permis%20pour%20les%20canaux%20de%20Santa%20Margarita',
  },
  en: {
    badge: 'No-licence routes',
    h1: 'No-licence boat in the Santa Margarita canals',
    desc: 'Sail the Santa Margarita canals without a licence from Roses. Calm waters, waterfront houses and the most authentic Costa Brava.',
    cta: 'Check availability',
    waMessage: 'Hello%2C%20I%27d%20like%20to%20rent%20a%20no-licence%20boat%20for%20the%20Santa%20Margarita%20canals',
  },
  ca: {
    badge: 'Rutes sense llicència',
    h1: 'Vaixell sense llicència als canals de Santa Margarida',
    desc: 'Navegueu pels canals de Santa Margarida sense llicència des de Roses. Aigües tranquil·les, cases davant de l\'aigua i la Costa Brava més autèntica.',
    cta: 'Consultar disponibilitat',
    waMessage: 'Hola%2C%20m%27agradaria%20llogar%20un%20vaixell%20sense%20llic%C3%A8ncia%20per%20als%20canals%20de%20Santa%20Margarida',
  },
};

export default function HeroCanales({ lang = 'es' }: { lang?: Lang }) {
  const tx = t[lang];
  return (
    <section className="relative w-full h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
      <Image src="https://picsum.photos/seed/canales-santa-margarita/1600/900" alt="Navegando en barco sin licencia por los canales de Santa Margarita en Roses" fill className="object-cover" priority />
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
