import Image from 'next/image';

const translations = {
  es: {
    label: 'El Punto de Partida',
    title: 'Tu salida desde la Marina de Santa Margarita',
    paragraphs: [
      'Todas nuestras lanchas zarpan desde la <strong>Marina de Santa Margarita, en Roses</strong>, nuestro punto de partida único. Desde aquí accederás directamente a la bahía de Roses sin trayectos ni traslados intermedios.',
      'La ubicación es inmejorable: en pocos minutos de navegación estarás surcando las aguas abiertas de la bahía, con el imponente litoral del <strong>Cap de Creus</strong> al alcance del timón.',
      'Antes de salir te damos las instrucciones de la zona y la ruta recomendada, y a bordo encontrarás todo el equipo de seguridad reglamentario. Solo necesitas tu titulación náutica para llevar el timón y empezar la aventura.'
    ],
    altImage: 'Lancha amarrada en la Marina de Santa Margarita en Roses, lista para alquiler con licencia'
  },
  fr: {
    label: 'Le Point de Départ',
    title: 'Votre départ depuis la Marina de Santa Margarita',
    paragraphs: [
      'Tous nos bateaux partent depuis la <strong>Marina de Santa Margarita, à Roses</strong>, notre point de départ unique. De là, vous accédez directement à la baie de Roses, sans trajets ni transferts intermédiaires.',
      'L\'emplacement est imbattable : en quelques minutes de navigation, vous sillonnerez les eaux ouvertes de la baie, avec l\'impressionnant littoral du <strong>Cap de Creus</strong> à portée de barre.',
      'Avant le départ, nous vous donnons les consignes de la zone et l\'itinéraire recommandé, et vous trouverez à bord tout l\'équipement de sécurité réglementaire. Il vous suffit de votre titre nautique pour prendre la barre et commencer l\'aventure.'
    ],
    altImage: 'Bateau amarré à la Marina de Santa Margarita à Roses, prêt pour la location avec permis'
  },
  en: {
    label: 'The Starting Point',
    title: 'Your departure from Santa Margarita Marina',
    paragraphs: [
      'All our boats set off from <strong>Santa Margarita Marina, in Roses</strong>, our single starting point. From here you reach Roses Bay directly, with no intermediate journeys or transfers.',
      'The location is unbeatable: within minutes of sailing you\'ll be cruising the open waters of the bay, with the impressive coastline of <strong>Cap de Creus</strong> within reach of the helm.',
      'Before you leave we give you the instructions for the area and the recommended route, and on board you\'ll find all the regulatory safety equipment. All you need is your boating licence to take the helm and start the adventure.'
    ],
    altImage: 'Boat moored at Santa Margarita Marina in Roses, ready for licensed rental'
  },
  ca: {
    label: 'El Punt de Partida',
    title: 'La teva sortida des de la Marina de Santa Margarida',
    paragraphs: [
      'Totes les nostres llanxes salpen des de la <strong>Marina de Santa Margarida, a Roses</strong>, el nostre punt de partida únic. Des d\'aquí accediràs directament a la badia de Roses, sense trajectes ni trasllats intermedis.',
      'La ubicació és immillorable: en pocs minuts de navegació estaràs solcant les aigües obertes de la badia, amb l\'imponent litoral del <strong>Cap de Creus</strong> a l\'abast del timó.',
      'Abans de sortir et donem les instruccions de la zona i la ruta recomanada, i a bord hi trobaràs tot l\'equip de seguretat reglamentari. Només necessites la teva titulació nàutica per dur el timó i començar l\'aventura.'
    ],
    altImage: 'Llanxa amarrada a la Marina de Santa Margarida a Roses, a punt per a lloguer amb llicència'
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
              src="/boats/orange-kiwi-620/orange-kiwi-620-hero.webp"
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
