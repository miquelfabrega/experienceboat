import Image from 'next/image';

const translations = {
  es: {
    label: 'El Entorno',
    title: 'Descubre la Marina de Santa Margarita',
    paragraphs: [
      'Santa Margarita es una espectacular marina residencial construida en la antigua zona de marismas de la desembocadura del río Grau. Por ella serpentean <strong>quince kilómetros de canales navegables</strong>, ofreciendo una red acuática fascinante.',
      'Se encuentra situada en plena bahía de Roses, justo a la izquierda del Parc Natural dels Aiguamolls de l\'Empordà y a muy poca distancia del imponente litoral del cabo de Creus, lo que le otorga un entorno natural privilegiado.',
      'En esta extensa red de canales, conviven más de mil quinientos amarres y espectaculares casas con salida directa al agua. Navegando por aquí, te adentrarás en un ambiente náutico único, rodeado de arquitectura singular y embarcaciones de todo tipo.'
    ],
    altImage: 'Marina de Santa Margarita en Roses'
  },
  fr: {
    label: 'L\'Environnement',
    title: 'Découvrez la Marina de Santa Margarita',
    paragraphs: [
      'Santa Margarita est une marina résidentielle spectaculaire construite dans l\'ancienne zone de marais à l\'embouchure du Rio Grau. Elle serpente sur <strong>quinze kilomètres de canaux navigables</strong>, offrant un réseau aquatique fascinant.',
      'Elle est située en pleine baie de Roses, juste à gauche du Parc Naturel dels Aiguamolls de l\'Empordà et très proche du littoral impressionnant du Cap de Creus, ce qui lui confère un environnement naturel privilégié.',
      'Dans ce vaste réseau de canaux, coexistent plus de mille cinq cents amarres et des maisons spectaculaires avec accès direct à l\'eau. En naviguant ici, vous entrerez dans une atmosphère nautique unique, entouré d\'une architecture singulière et d\'embarcations de tous types.'
    ],
    altImage: 'Marina de Santa Margarita à Roses'
  },
  en: {
    label: 'The Setting',
    title: 'Discover Santa Margarita Marina',
    paragraphs: [
      'Santa Margarita is a spectacular residential marina built in the former marshlands at the mouth of the Rio Grau. It winds through <strong>fifteen kilometres of navigable canals</strong>, offering a fascinating aquatic network.',
      'It is located right in Roses Bay, just to the left of the Aiguamolls de l\'Empordà Natural Park and very close to the impressive coastline of Cap de Creus, giving it a privileged natural setting.',
      'In this extensive network of canals, there are over fifteen hundred moorings and spectacular houses with direct access to the water. Sailing here, you\'ll enter a unique nautical atmosphere, surrounded by singular architecture and boats of all kinds.'
    ],
    altImage: 'Marina de Santa Margarita in Roses'
  },
  ca: {
    label: 'L\'Entorn',
    title: 'Descobriu la Marina de Santa Margarida',
    paragraphs: [
      'Santa Margarida és una espectacular marina residencial construïda a l\'antiga zona d\'aiguamolls de la desembocadura del riu Grau. Hi serpentegen <strong>quinze quilòmetres de canals navegables</strong>, que ofereixen una xarxa aquàtica fascinant.',
      'Es troba situada en plena badia de Roses, just a l\'esquerra del Parc Natural dels Aiguamolls de l\'Empordà i a molt poca distància de l\'imponent litoral del Cap de Creus, cosa que li atorga un entorn natural privilegiat.',
      'En aquesta extensa xarxa de canals hi conviuen més de mil cinc-cents amarradors i espectaculars cases amb sortida directa a l\'aigua. Navegant per aquí us endinsareu en un ambient nàutic únic, envoltats d\'arquitectura singular i embarcacions de tota mena.'
    ],
    altImage: 'Marina de Santa Margarida a Roses'
  }
};

interface MarinaSectionProps {
  lang?: 'es' | 'fr' | 'en' | 'ca';
}

export default function MarinaSection({ lang = 'es' }: MarinaSectionProps) {
  const t = translations[lang];

  return (
    <section className="py-20 bg-slate-50 border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="w-full lg:w-1/2 relative aspect-[4/3] rounded-3xl overflow-hidden shadow-lg">
            <Image
              src="/santa-margarita/marina-descubre.webp"
              alt={t.altImage}
              fill
              className="object-cover"
            />
          </div>

          <div className="w-full lg:w-1/2 space-y-6">
            <div className="inline-block px-3 py-1 bg-sky-100 text-sky-700 text-sm font-semibold rounded-full uppercase tracking-wide">
              {t.label}
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
              {t.title}
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed text-lg">
              {t.paragraphs.map((para, idx) => (
                <p key={idx} dangerouslySetInnerHTML={{ __html: para }} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
