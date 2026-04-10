
import Link from 'next/link';

export interface IntroCanalesT {
  h2?: string;
  linkText?: string;
  linkHref?: string;
  text?: string;
}

const defaults: Required<IntroCanalesT> = {
  h2: 'El inicio perfecto para tu primera vez',
  linkText: 'alquiler de barco sin licencia',
  linkHref: '/alquiler-barco-sin-licencia-roses/',
  text: 'en Roses, los canales de Santa Margarita son el entorno perfecto para quien alquila un barco por primera vez. Aguas tranquilas, sin oleaje, sin corrientes y con un paisaje que no esperas encontrar en la Costa Brava: casas con embarcadero privado, puentes bajos de piedra y una calma que contrasta con el mar abierto. En Experience Boat salimos desde aquí — y para los debutantes, es el mejor comienzo posible.',
};

export default function IntroCanales({ t }: { t?: IntroCanalesT }) {
  const tx = { ...defaults, ...t };
  return (
    <section className="py-20 bg-white border-b border-gray-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">{tx.h2}</h2>
        <p className="text-xl text-gray-600 leading-relaxed">
          Si buscas un{' '}
          <Link href={tx.linkHref} className="text-blue-600 font-medium underline underline-offset-2 hover:text-blue-800">{tx.linkText}</Link>
          {' '}{tx.text}
        </p>
      </div>
    </section>
  );
}
