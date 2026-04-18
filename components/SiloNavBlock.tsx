import { ArrowRight } from 'lucide-react';

export const SILO_LICENCIA_CHILDREN = [
  {
    title: 'Navegar por la bahía de Roses con licencia',
    href: '/alquiler-barco-con-licencia-roses/bahia-de-roses',
    description: 'Espacio, calas y el Cap de Creus a 45 min.',
  },
  {
    title: 'Alquiler de lancha en la Costa Brava',
    href: '/alquiler-barco-con-licencia-roses/lancha-costa-brava',
    description: 'La ruta clásica de los canales al cabo.',
  },
] as const;

export const SILO_SIN_LICENCIA_CHILDREN = [
  {
    title: 'Barco sin licencia en los canales de Santa Margarita',
    href: '/alquiler-barco-sin-licencia-roses/canales-santa-margarita',
    description: 'Aguas tranquilas, casas frente al agua y el mejor punto de partida para debutantes.',
  },
  {
    title: 'Alquiler de barco sin licencia en Roses para parejas',
    href: '/alquiler-barco-sin-licencia-roses/parejas',
    description: 'Privacidad total, calas y rutas para celebrar un día especial.',
  },
] as const;

/** Silo temático /canales-santa-margarita/ — pilar + subpáginas; refuerza la guía principal. */
export const SILO_CANALES_CHILDREN = [
  {
    title: 'Guía completa: los canales de Santa Margarita',
    href: '/canales-santa-margarita',
    description:
      'Por qué navegar por los canales, opciones de salida y todo lo que necesitas saber antes de reservar.',
  },
  {
    title: 'Qué ver en los canales de Santa Margarita desde el agua',
    href: '/canales-santa-margarita/que-ver',
    description: 'Casas sobre el agua, fauna y la luz del amanecer y el atardecer.',
  },
  {
    title: 'Ruta en barco: canales de Santa Margarita al Cap de Creus',
    href: '/canales-santa-margarita/ruta-cap-de-creus',
    description: 'La ruta náutica completa desde los canales hasta el parque natural.',
  },
] as const;

function normalizePath(path: string) {
  const t = path.trim();
  if (t === '/' || t === '') return '/';
  return t.replace(/\/+$/, '') + '/';
}

type SiloNavBlockProps = {
  /** Ruta actual (pathname). En la pilar del silo canales, pasar la URL de la pilar para excluirla del listado. */
  currentPath?: string;
  /**
   * Silo de contenido. Si hay `currentPath` bajo `/canales-santa-margarita/` o `/alquiler-barco-sin-licencia-roses/`, se infiere automáticamente.
   */
  silo?: 'licencia' | 'sin-licencia' | 'canales';
};

function resolveSilo(
  currentPath: string | undefined,
  siloProp: SiloNavBlockProps['silo']
): 'licencia' | 'sin-licencia' | 'canales' {
  if (siloProp) return siloProp;
  if (currentPath?.includes('/canales-santa-margarita')) return 'canales';
  if (currentPath?.includes('/alquiler-barco-sin-licencia-roses')) return 'sin-licencia';
  return 'licencia';
}

export default function SiloNavBlock({ currentPath, silo: siloProp }: SiloNavBlockProps) {
  const silo = resolveSilo(currentPath, siloProp);
  const children =
    silo === 'sin-licencia'
      ? SILO_SIN_LICENCIA_CHILDREN
      : silo === 'canales'
        ? SILO_CANALES_CHILDREN
        : SILO_LICENCIA_CHILDREN;

  const here = currentPath ? normalizePath(currentPath) : '';
  const siblings =
    here.length > 0
      ? children.filter((p) => normalizePath(p.href) !== here)
      : [...children];

  if (siblings.length === 0) return null;

  const heading =
    silo === 'sin-licencia'
      ? 'Más sobre alquiler sin licencia en Roses'
      : silo === 'canales'
        ? 'Más sobre los canales de Santa Margarita'
        : 'Más sobre alquiler con licencia en Roses';

  const ariaLabel =
    silo === 'sin-licencia'
      ? 'Más sobre alquiler sin licencia'
      : silo === 'canales'
        ? 'Más sobre los canales de Santa Margarita'
        : 'Más sobre alquiler con licencia';

  return (
    <section className="bg-slate-50 border-t border-slate-200 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <nav aria-label={ariaLabel}>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900 mb-8">
            {heading}
          </h2>
          <ul className="grid sm:grid-cols-2 gap-4">
            {siblings.map((page) => (
              <li key={page.href}>
                <a
                  href={page.href}
                  className="group flex flex-col gap-1 p-5 rounded-2xl border border-slate-200 bg-white hover:border-[#0d4a47]/40 hover:shadow-md transition-all h-full"
                >
                  <span className="flex items-center gap-2 font-semibold text-[#0b1f3a] text-base group-hover:gap-3 transition-all">
                    {page.title}
                    <ArrowRight size={16} className="shrink-0 text-[#0d4a47]" />
                  </span>
                  <span className="text-sm text-slate-600 leading-snug">{page.description}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </section>
  );
}
