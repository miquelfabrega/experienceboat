import { ArrowRight } from 'lucide-react';

type Lang = 'es' | 'fr';

interface EnlacesInternosSectionProps {
  lang?: Lang;
}

const getEnlaces = (lang: Lang) => [
  {
    anchor: lang === 'es' ? 'Alquiler barco con licencia en Roses' : 'Location bateau avec permis à Roses',
    href: lang === 'es' ? '/alquiler-barco-con-licencia-roses' : '/fr/location-bateau-avec-permis-roses',
    desc: lang === 'es' ? 'Toda la flota con licencia disponible desde Santa Margarita' : 'Toute la flotte avec permis disponible depuis Santa Margarita',
  },
  {
    anchor: lang === 'es' ? 'Excursiones privadas con patrón' : 'Excursions privées avec skipper',
    href: lang === 'es' ? '/experiencias-barco-roses' : '/fr/experiences-bateau-roses',
    desc: lang === 'es' ? 'Salidas privadas con Salvador y el equipo — sin titulación necesaria' : 'Sorties privées avec Salvador et l\'équipe — aucune qualification nécessaire',
  },
  {
    anchor: lang === 'es' ? 'Canales de Santa Margarita' : 'Canaux de Santa Margarita',
    href: lang === 'es' ? '/canales-santa-margarita' : '/fr/canaux-santa-margarita',
    desc: lang === 'es' ? 'Salida navegando por los canales, directa a la bahía' : 'Départ en naviguant par les canaux, directement vers la baie',
  },
  {
    anchor: lang === 'es' ? 'Barco sin licencia' : 'Bateau sans permis',
    href: lang === 'es' ? '/alquiler-barco-sin-licencia-roses' : '/fr/location-bateau-sans-permis-roses',
    desc: lang === 'es' ? 'Barcos fáciles de llevar, sin titulación — para toda la familia' : 'Des bateaux faciles à piloter, sans permis — pour toute la famille',
  },
  {
    anchor: lang === 'es' ? 'Cap de Creus' : 'Cap de Creus',
    href: lang === 'es' ? '/experiencias-barco-roses' : '/fr/experiences-bateau-roses',
    desc: lang === 'es' ? 'El parque natural al que apuntan casi todas nuestras rutas' : 'Le parc naturel vers lequel pointent presque toutes nos routes',
  },
];

export default function EnlacesInternosSection({ lang = 'es' }: EnlacesInternosSectionProps) {
  const enlaces = getEnlaces(lang);
  const title = lang === 'es' ? 'También te puede interesar' : 'Vous pourriez aussi être intéressé';

  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-serif text-2xl font-bold text-slate-900 mb-8">
          {title}
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {enlaces.map((e) => (
            <a
              key={e.anchor}
              href={e.href}
              className="group flex flex-col gap-1 p-5 rounded-xl border border-slate-100 bg-slate-50 hover:bg-white hover:border-[#0d4a47]/30 hover:shadow-md transition-all"
            >
              <span className="flex items-center gap-2 font-semibold text-[#0d4a47] text-sm group-hover:gap-3 transition-all">
                {e.anchor}
                <ArrowRight size={14} className="shrink-0" />
              </span>
              <span className="text-xs text-slate-500 leading-snug">{e.desc}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
