
import Link from 'next/link';

export interface IntroParejasT {
  h2?: string;
  linkText?: string;
  linkHref?: string;
  text?: string;
}

const defaults: Required<IntroParejasT> = {
  h2: 'El plan más exclusivo de la Costa Brava',
  linkText: 'alquiler de barco sin licencia',
  linkHref: '/alquiler-barco-sin-licencia-roses',
  text: 'en Roses en pareja, hay pocas experiencias en la Costa Brava que igualen la de pasar un día en el mar con la persona que quieres, sin compartir espacio con nadie más, a vuestro ritmo y con el Cap de Creus como fondo. En Experience Boat podéis alquilar un barco sin licencia en Roses sin necesitar experiencia náutica previa y salir directamente desde los canales de Santa Margarita hacia las calas más espectaculares de la Costa Brava norte. Vosotros solos, sin grupos, sin horarios fijos.',
};

export default function IntroParejas({ t }: { t?: IntroParejasT }) {
  const tx = { ...defaults, ...t };
  return (
    <section className="py-20 bg-white border-b border-gray-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">{tx.h2}</h2>
        <p className="text-xl text-gray-600 leading-relaxed">
          Para un{' '}
          <Link href={tx.linkHref} className="text-blue-600 font-medium underline underline-offset-2 hover:text-blue-800">{tx.linkText}</Link>
          {' '}{tx.text}
        </p>
      </div>
    </section>
  );
}
