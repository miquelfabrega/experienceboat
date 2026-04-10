
const translations = {
  es: {
    title: 'Cómo es la salida — de los canales al atardecer en la bahía',
    description: 'Un recorrido de 2 horas diseñado para disfrutar de cada cambio de luz.',
    steps: [
      {
        title: 'La primera hora — los canales de Santa Margarita al caer la tarde',
        desc: 'La salida empieza en la Marina de Santa Margarita cuando el sol ya ha bajado lo suficiente para que la luz sea cálida y los reflejos en el agua sean perfectos. Las casas se tiñen de naranja, las palmeras proyectan sombras largas y el ambiente de la urbanización tiene una calidad casi cinematográfica. Es el tramo más fotogénico.'
      },
      {
        title: 'La salida a la bahía — el espectáculo empieza',
        desc: 'Cuando la embarcación deja los canales y se abre a la bahía de Roses, el escenario cambia de escala. El sol está ya próximo al horizonte, el cielo empieza a coger color y la bahía se convierte en un espejo. Fondeamos o navegamos despacio para que el atardecer sea lo más espectacular posible.'
      },
      {
        title: 'El momento del atardecer',
        desc: 'Cuando el sol toca el horizonte, el tiempo se detiene un poco. El cielo pasa del naranja al rosa, del rosa al violeta. El Pirineo al fondo, el Cap de Creus a la derecha, el agua perfectamente quieta. Si habéis traído algo para brindar, Tomàs o Max saben exactamente cuándo parar el motor y dejar que el silencio y el color lo llenen todo.'
      },
      {
        title: 'El regreso por los canales de noche',
        desc: 'La vuelta por los canales cuando ya ha anochecido tiene un ambiente completamente diferente. Las casas tienen las luces encendidas, los reflejos en el agua son de otro color y los canales tienen esa quietud nocturna casi irreal. Es el cierre perfecto para una salida que ha empezado con luz y termina con oscuridad.'
      }
    ]
  },
  fr: {
    title: 'Comment est la sortie — des canaux au coucher de soleil dans la baie',
    description: 'Un parcours de 2 heures conçu pour profiter de chaque changement de lumière.',
    steps: [
      {
        title: 'La première heure — les canaux de Santa Margarita à la tombée du jour',
        desc: 'La sortie commence au Port de Santa Margarita quand le soleil s\'est assez couché pour que la lumière soit chaude et les reflets dans l\'eau parfaits. Les maisons se teintent d\'orange, les palmiers projettent des ombres longues et l\'atmosphère de l\'urbanisation a une qualité presque cinématographique. C\'est le tronçon le plus photogénique.'
      },
      {
        title: 'La sortie vers la baie — le spectacle commence',
        desc: 'Quand l\'embarcation quitte les canaux et s\'ouvre sur la baie de Roses, la mise en scène change d\'échelle. Le soleil est déjà proche de l\'horizon, le ciel commence à se colorer et la baie devient un miroir. Nous mouillons l\'ancre ou naviguons lentement pour que le coucher de soleil soit aussi spectaculaire que possible.'
      },
      {
        title: 'Le moment du coucher de soleil',
        desc: 'Quand le soleil touche l\'horizon, le temps s\'arrête un peu. Le ciel passe du orange au rose, du rose au violet. Les Pyrénées en arrière-plan, le Cap de Creus à droite, l\'eau parfaitement calme. Si vous avez apporté quelque chose pour porter un toast, le skipper sait exactement quand arrêter le moteur et laisser le silence et la couleur tout remplir.'
      },
      {
        title: 'Le retour par les canaux de nuit',
        desc: 'Le retour par les canaux une fois la nuit tombée a une atmosphère complètement différente. Les maisons ont leurs lumières allumées, les reflets dans l\'eau sont d\'une autre couleur et les canaux ont cette tranquillité nocturne presque irréelle. C\'est la conclusion parfaite pour une sortie qui a commencé avec la lumière et se termine par l\'obscurité.'
      }
    ]
  },
  en: {
    title: 'What is the trip like — from the canals to the sunset in the bay',
    description: 'A 2-hour journey designed to enjoy every change of light.',
    steps: [
      {
        title: 'The first hour — Santa Margarita canals as dusk falls',
        desc: 'The trip starts at Santa Margarita Marina when the sun has set enough for the light to be warm and the reflections in the water are perfect. The houses turn orange, the palm trees cast long shadows, and the atmosphere of the residential area has an almost cinematic quality. This is the most photogenic section.'
      },
      {
        title: 'Leaving the canals for the bay — the show begins',
        desc: 'When the boat leaves the canals and opens into Roses Bay, the scenery changes in scale. The sun is already close to the horizon, the sky begins to fill with colour, and the bay becomes a mirror. We anchor or cruise slowly so the sunset is as spectacular as possible.'
      },
      {
        title: 'The moment of sunset',
        desc: 'When the sun touches the horizon, time pauses a little. The sky changes from orange to pink, from pink to purple. The Pyrenees in the background, Cap de Creus to the right, the water perfectly still. If you\'ve brought something to toast with, the skipper knows exactly when to stop the engine and let silence and colour fill everything.'
      },
      {
        title: 'The return through the canals at night',
        desc: 'The return through the canals after dark has a completely different atmosphere. The houses have their lights on, the reflections in the water are a different colour, and the canals have that almost surreal nighttime tranquility. It\'s the perfect ending to a trip that started with light and ends with darkness.'
      }
    ]
  }
};

interface RouteSectionProps {
  lang?: 'es' | 'fr' | 'en';
}

export default function RouteSection({ lang = 'es' }: RouteSectionProps) {
  const t = translations[lang];

  return (
    <section className="py-20 bg-slate-50 border-b border-gray-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
            {t.title}
          </h2>
          <p className="text-lg text-gray-500">
            {t.description}
          </p>
        </div>

        <div className="space-y-12">
          {t.steps.map((step, index) => (
            <div
              className="flex flex-col md:flex-row gap-6 items-start anim-fade-up"
            >
              <div className="flex-shrink-0 w-12 h-12 bg-sky-100 rounded-full flex items-center justify-center text-sky-600 font-bold text-xl">
                {index + 1}
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
