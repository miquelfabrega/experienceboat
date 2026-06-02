import { Waves, Camera, Compass } from 'lucide-react';

type Lang = 'es' | 'fr' | 'en' | 'ca';

const t: Record<Lang, {
  eyebrow: string;
  h2: string;
  intro: string;
  stops: { number: string; title: string; desc: string }[];
}> = {
  es: {
    eyebrow: 'El recorrido',
    h2: 'La ruta por los canales — qué vas a ver',
    intro:
      'Una salida típica por los canales de Santa Margarita dura entre 60 y 90 minutos dependiendo del ritmo y las paradas. Este es el recorrido habitual.',
    stops: [
      {
        number: '01',
        title: 'La entrada por los canales interiores',
        desc: 'Salimos desde la Marina de Santa Margarita y nos adentramos en los canales interiores. A ambos lados, las casas muestran su cara más auténtica: terrazas sobre el agua, jardines con palmeras, embarcaciones privadas amarradas a pocos metros de las puertas. Es el tipo de imagen que no esperas encontrar en la Costa Brava y que se queda grabada.',
      },
      {
        number: '02',
        title: 'Un barrio por el que navegas',
        desc: 'Los canales atraviesan un barrio residencial real: casas con jardín, embarcaciones amarradas en el amarre privado de cada vivienda. No es un parque temático ni un circuito turístico — es un barrio por el que navegas. Esa sensación de colarte en la vida cotidiana de alguien es lo que lo hace distinto. Y cuando la superficie está quieta, las fachadas se duplican en el canal.',
      },
      {
        number: '03',
        title: 'La salida a la bahía de Roses',
        desc: 'Cuando los canales se abren al mar, el escenario cambia de golpe. La bahía de Roses se extiende frente a vosotros con el macizo del Pirineo al fondo y el Cap de Creus al noreste. Desde aquí, según el tiempo disponible y las ganas del grupo, podemos seguir hacia las calas del Cap de Creus o simplemente fondear en la bahía y disfrutar del agua.',
      },
    ],
  },
  fr: {
    eyebrow: 'Le parcours',
    h2: 'L\'itinéraire des canaux — ce que vous allez voir',
    intro:
      'Une sortie typique sur les canaux de Santa Margarita dure entre 60 et 90 minutes selon le rythme et les arrêts. Voici le parcours habituel.',
    stops: [
      {
        number: '01',
        title: 'L\'entrée par les canaux intérieurs',
        desc: 'Nous partons de la Marina de Santa Margarita et nous engageons dans les canaux intérieurs. De part et d\'autre, les maisons dévoilent leur visage le plus authentique : terrasses sur l\'eau, jardins de palmiers, embarcations privées amarrées à quelques mètres des portes. Le genre d\'image qu\'on n\'imagine pas trouver sur la Costa Brava et qui reste gravée.',
      },
      {
        number: '02',
        title: 'Un quartier que l\'on navigue',
        desc: 'Les canaux traversent un véritable quartier résidentiel : maisons avec jardin, bateaux amarrés au ponton privé de chaque habitation. Ce n\'est ni un parc à thème ni un circuit touristique — c\'est un quartier que l\'on navigue. Cette sensation de se glisser dans le quotidien des autres est ce qui rend l\'expérience unique. Et quand la surface est immobile, les façades se reflètent dans le canal.',
      },
      {
        number: '03',
        title: 'La sortie vers la baie de Roses',
        desc: 'Lorsque les canaux s\'ouvrent sur la mer, le décor change d\'un coup. La baie de Roses s\'étend devant vous avec le massif des Pyrénées en arrière-plan et le Cap de Creus au nord-est. De là, selon le temps disponible et l\'envie du groupe, nous pouvons continuer vers les criques du Cap de Creus ou simplement mouiller dans la baie et profiter de l\'eau.',
      },
    ],
  },
  en: {
    eyebrow: 'The route',
    h2: 'The canal route — what you will see',
    intro:
      'A typical trip through the Santa Margarita canals lasts between 60 and 90 minutes depending on the pace and the stops. This is the usual route.',
    stops: [
      {
        number: '01',
        title: 'The entrance through the inner canals',
        desc: 'We set off from the Marina de Santa Margarita and head into the inner canals. On both sides, the houses reveal their most authentic side: terraces over the water, gardens with palm trees, private boats moored just metres from the front doors. It is the kind of scene you wouldn\'t expect to find on the Costa Brava, and it stays with you.',
      },
      {
        number: '02',
        title: 'A neighbourhood you navigate through',
        desc: 'The canals run through a real residential neighbourhood: houses with gardens, boats moored at each home\'s private berth. It is neither a theme park nor a tourist circuit — it is a neighbourhood you navigate through. That feeling of slipping into someone\'s everyday life is what makes it different. And when the water is still, the façades double in the canal.',
      },
      {
        number: '03',
        title: 'The opening onto the Bay of Roses',
        desc: 'When the canals open onto the sea, the scene changes all at once. The Bay of Roses stretches out before you with the Pyrenees in the background and Cap de Creus to the northeast. From here, depending on the time available and the group\'s mood, we can carry on towards the coves of Cap de Creus or simply anchor in the bay and enjoy the water.',
      },
    ],
  },
  ca: {
    eyebrow: 'El recorregut',
    h2: 'La ruta pels canals — què veureu',
    intro:
      'Una sortida típica pels canals de Santa Margarida dura entre 60 i 90 minuts segons el ritme i les parades. Aquest és el recorregut habitual.',
    stops: [
      {
        number: '01',
        title: 'L\'entrada pels canals interiors',
        desc: 'Sortim de la Marina de Santa Margarida i ens endinsem pels canals interiors. A banda i banda, les cases mostren la seva cara més autèntica: terrasses sobre l\'aigua, jardins amb palmeres, embarcacions privades amarrades a pocs metres de les portes. És el tipus d\'imatge que no espereu trobar a la Costa Brava i que se us queda gravada.',
      },
      {
        number: '02',
        title: 'Un barri pel qual navegueu',
        desc: 'Els canals travessen un barri residencial real: cases amb jardí, embarcacions amarrades a l\'amarrador privat de cada habitatge. No és un parc temàtic ni un circuit turístic — és un barri pel qual navegueu. Aquesta sensació de colar-vos en la vida quotidiana d\'algú és el que el fa diferent. I quan la superfície està quieta, les façanes es dupliquen al canal.',
      },
      {
        number: '03',
        title: 'La sortida a la badia de Roses',
        desc: 'Quan els canals s\'obren al mar, l\'escenari canvia de cop. La badia de Roses s\'estén davant vostre amb el massís del Pirineu al fons i el Cap de Creus al nord-est. Des d\'aquí, segons el temps disponible i les ganes del grup, podem continuar cap a les cales del Cap de Creus o simplement fondejar a la badia i gaudir de l\'aigua.',
      },
    ],
  },
};

const icons = [Waves, Camera, Compass];

export default function RouteSection({ lang = 'es' }: { lang?: Lang }) {
  const c = t[lang];
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-4">
          <span className="text-sky-600 font-semibold text-sm uppercase tracking-widest">{c.eyebrow}</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 text-center mb-4">
          {c.h2}
        </h2>
        <p className="text-gray-500 text-center mb-14 text-lg max-w-2xl mx-auto">
          {c.intro}
        </p>

        <div
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="anim-stagger grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {c.stops.map((stop, i) => {
            const Icon = icons[i];
            return (
              <div
                key={stop.number}

                className="anim-stagger bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-md hover:border-sky-200 transition-all duration-300 group"
              >
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-12 h-12 bg-sky-500 group-hover:bg-sky-600 rounded-2xl flex items-center justify-center shrink-0 transition-colors shadow-md shadow-sky-500/30">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-4xl font-black text-slate-100 select-none">{stop.number}</span>
                </div>
                <h3 className="font-bold text-gray-900 text-lg mb-3 leading-snug">{stop.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{stop.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
