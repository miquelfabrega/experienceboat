import { ArrowRight } from 'lucide-react';

const enlaces = [
  {
    anchor: 'Alquiler barco con licencia en Roses',
    href: '/alquiler-barco-con-licencia-roses/',
    desc: 'Página principal — todos los barcos con licencia disponibles',
  },
  {
    anchor: 'Canales de Santa Margarita',
    href: '/canales-santa-margarita/',
    desc: 'Descubre el punto de salida más singular de Roses',
  },
  {
    anchor: 'Excursiones privadas con patrón',
    href: '/experiencias-barco-roses/',
    desc: 'Navega sin necesidad de licencia con un patrón experto',
  },
  {
    anchor: 'Parque Natural del Cap de Creus',
    href: '/experiencias-barco-roses/',
    desc: 'El destino estrella desde la bahía de Roses',
  },
  {
    anchor: 'Barco sin licencia',
    href: '/alquiler-barco-sin-licencia-roses/',
    desc: 'Alquiler incluido patrón — sin titulación requerida',
  },
];

type Lang = 'es' | 'fr';

interface EnlacesInternosSectionProps {
  lang?: Lang;
}

export default function EnlacesInternosSection({ lang = 'es' }: EnlacesInternosSectionProps) {
  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-serif text-2xl font-bold text-slate-900 mb-8">
          También te puede interesar
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
