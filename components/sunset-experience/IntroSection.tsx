const translations = {
  es: {
    sectionId: 'que-es',
    title: '¿Qué es exactamente el Sunset Experience?',
    paragraphs: [
      'El Sunset Experience es una salida privada en barco al atardecer desde los canales de Santa Margarita: el sol cayendo sobre la bahía de Roses, los reflejos en el agua de los canales y esa luz mediterránea de última hora que convierte cualquier escena en algo irrepetible. Para parejas, para grupos pequeños, para quien quiere terminar el día de una manera que no se olvida.',
      'Es una salida privada en barco de tarde-noche pensada específicamente para disfrutar del atardecer desde el mar. Dura aproximadamente 2 horas y combina dos de los escenarios más fotogénicos de Roses: los canales de Santa Margarita al caer la tarde y la bahía de Roses con el sol en el horizonte.',
      'La salida empieza cuando el sol todavía está alto — con tiempo suficiente para recorrer los canales con la luz cálida de última hora — y termina cuando el cielo ha cambiado de color por completo y las últimas luces del día se apagan sobre el Mediterráneo.',
    ],
    quote: '"No es una excursión para ver sitios. Es una excursión para estar en el momento."'
  },
  fr: {
    sectionId: 'que-est',
    title: 'Qu\'est-ce que le Sunset Experience exactement ?',
    paragraphs: [
      'Le Sunset Experience est une sortie privée en bateau au coucher du soleil depuis les canaux de Santa Margarita : le soleil qui descend sur la baie de Roses, les reflets dans l\'eau des canaux et cette lumière méditerranéenne de fin de journée qui transforme chaque instant en quelque chose d\'inoubliable. Pour les couples, les petits groupes, pour ceux qui veulent terminer la journée d\'une façon dont ils se souviendront toujours.',
      'C\'est une sortie privée en bateau en fin d\'après-midi pensée spécialement pour profiter du coucher de soleil depuis la mer. Elle dure environ 2 heures et combine deux des paysages les plus photogéniques de Roses : les canaux de Santa Margarita à la tombée de la nuit et la baie de Roses avec le soleil à l\'horizon.',
      'La sortie commence quand le soleil est encore haut — avec suffisamment de temps pour parcourir les canaux avec la lumière chaude de fin de journée — et se termine quand le ciel a complètement changé de couleur et que les dernières lueurs du jour s\'éteignent sur la Méditerranée.',
    ],
    quote: '"Ce n\'est pas une excursion pour voir des sites. C\'est une excursion pour vivre l\'instant."'
  },
  en: {
    sectionId: 'what-is-it',
    title: 'What exactly is the Sunset Experience?',
    paragraphs: [
      'The Sunset Experience is a private boat trip at sunset departing from the Santa Margarita canals: the sun going down over Roses Bay, the reflections in the canal water and that late Mediterranean light that turns every moment into something impossible to forget. For couples, for small groups, for anyone who wants to end the day in a way they will never forget.',
      'It is a private evening boat trip designed specifically to enjoy the sunset from the sea. It lasts approximately 2 hours and combines two of the most photogenic settings in Roses: the Santa Margarita canals as dusk falls and Roses Bay with the sun on the horizon.',
      'The trip starts when the sun is still high — with enough time to cruise the canals in the warm late-day light — and ends when the sky has completely changed colour and the last daylight fades over the Mediterranean.',
    ],
    quote: '"This is not a sightseeing excursion. It is an experience about being in the moment."'
  }
};

interface IntroSectionProps {
  lang?: 'es' | 'fr' | 'en';
}

export default function IntroSection({ lang = 'es' }: IntroSectionProps) {
  const t = translations[lang];

  return (
    <section id={t.sectionId} className="py-20 bg-white border-b border-gray-100">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-6">
          {t.title}
        </h2>
        <div className="space-y-6 text-lg text-gray-600 leading-relaxed text-left">
          {t.paragraphs.map((para, idx) => (
            <p key={idx}>{para}</p>
          ))}
          <p className="font-semibold text-sky-700 italic text-center text-xl mt-8">
            {t.quote}
          </p>
        </div>
      </div>
    </section>
  );
}
