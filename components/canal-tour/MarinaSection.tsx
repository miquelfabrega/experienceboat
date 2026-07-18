import Image from 'next/image';

const translations = {
  es: {
    label: 'El Entorno',
    title: 'Descubre la Marina de Santa Margarita',
    paragraphs: [
      'Santa Margarita es una espectacular marina residencial construida en la antigua zona de marismas de la desembocadura del río Grau. Por ella serpentean <strong>quince kilómetros de canales navegables</strong>, ofreciendo una red acuática fascinante.',
      'Se encuentra situada en plena bahía de Roses, justo a la izquierda del Parc Natural dels Aiguamolls de l\'Empordà y a muy poca distancia del imponente litoral del cabo de Creus, lo que le otorga un entorno natural privilegiado.',
      'En esta red conviven unos mil seiscientos amarres y casas con salida directa al agua. Los barcos que verás van desde la neumática de cuatro metros hasta esloras de veinte, que es el máximo que admiten los canales.'
    ],
    altImage: 'Marina de Santa Margarita en Roses'
  },
  fr: {
    label: 'L\'Environnement',
    title: 'Découvrez la Marina de Santa Margarita',
    paragraphs: [
      'Santa Margarita est une marina résidentielle spectaculaire construite dans l\'ancienne zone de marais à l\'embouchure du Rio Grau. Elle serpente sur <strong>quinze kilomètres de canaux navigables</strong>, offrant un réseau aquatique fascinant.',
      'Elle est située en pleine baie de Roses, juste à gauche du Parc Naturel dels Aiguamolls de l\'Empordà et très proche du littoral impressionnant du Cap de Creus, ce qui lui confère un environnement naturel privilégié.',
      'Ce réseau compte environ mille six cents anneaux et des maisons avec accès direct à l\'eau. Les bateaux que vous croiserez vont du pneumatique de quatre mètres aux vingt mètres de long, la limite que les canaux acceptent.'
    ],
    altImage: 'Marina de Santa Margarita à Roses'
  },
  en: {
    label: 'The Setting',
    title: 'Discover Santa Margarita Marina',
    paragraphs: [
      'Santa Margarita is a spectacular residential marina built in the former marshlands at the mouth of the Rio Grau. It winds through <strong>fifteen kilometres of navigable canals</strong>, offering a fascinating aquatic network.',
      'It is located right in Roses Bay, just to the left of the Aiguamolls de l\'Empordà Natural Park and very close to the impressive coastline of Cap de Creus, giving it a privileged natural setting.',
      'The network holds around sixteen hundred moorings and houses with direct access to the water. The boats you\'ll pass range from four-metre inflatables up to twenty metres, which is as long as the canals take.'
    ],
    altImage: 'Marina de Santa Margarita in Roses'
  },
  ca: {
    label: 'L\'Entorn',
    title: 'Descobriu la Marina de Santa Margarida',
    paragraphs: [
      'Santa Margarida és una espectacular marina residencial construïda a l\'antiga zona d\'aiguamolls de la desembocadura del riu Grau. Hi serpentegen <strong>quinze quilòmetres de canals navegables</strong>, que ofereixen una xarxa aquàtica fascinant.',
      'Es troba situada en plena badia de Roses, just a l\'esquerra del Parc Natural dels Aiguamolls de l\'Empordà i a molt poca distància de l\'imponent litoral del Cap de Creus, cosa que li atorga un entorn natural privilegiat.',
      'En aquesta xarxa hi conviuen uns mil sis-cents amarradors i cases amb sortida directa a l\'aigua. Els vaixells que veureu van des de la pneumàtica de quatre metres fins a eslores de vint metres, que és el màxim que admeten els canals.'
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
