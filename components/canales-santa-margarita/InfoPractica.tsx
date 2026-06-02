import { Clock, Baby, Sun, Euro } from 'lucide-react';

type Lang = 'es' | 'fr' | 'en' | 'ca';

interface InfoItem {
  question: string;
  answer?: string;
  prices?: { label: string; value: string }[];
}

const t: Record<Lang, { sectionLabel: string; h2: string; cta: string; waMessage: string; items: InfoItem[] }> = {
  es: {
    sectionLabel: 'Lo que debes saber',
    h2: 'Información práctica',
    cta: 'Consultar disponibilidad',
    waMessage: 'Hola%2C%20me%20interesa%20alquilar%20un%20barco%20sin%20licencia%20para%20los%20canales%20de%20Santa%20Margarita',
    items: [
      { question: '¿Cuánto tiempo dura el recorrido por los canales?', answer: 'El recorrido por los canales interiores dura entre 60 y 90 minutos. Si lo combinas con una salida a la bahía de Roses, puedes pasar un medio día completo en el agua sin necesidad de alejarte demasiado.' },
      { question: '¿Es apto para niños pequeños?', answer: 'Es uno de los entornos más seguros para familias con niños. Las aguas son tranquilas, la velocidad es baja y el paisaje mantiene a los más pequeños entretenidos durante todo el recorrido.' },
      { question: '¿Cuándo es mejor ir?', answer: 'A primera hora de la mañana los canales están en calma total y la luz es espectacular para fotografía. Al atardecer, los reflejos en el agua son igual de impresionantes. En temporada media (mayo, junio, septiembre) hay mucho menos tráfico náutico que en pleno agosto.' },
      { question: 'Precio del alquiler', prices: [{ label: '1 hora', value: 'desde 70 €' }, { label: '2 horas', value: 'desde 135 €' }, { label: 'Medio día (4 horas)', value: 'desde 165 €' }, { label: 'Día completo (8 horas)', value: 'desde 225 €' }] },
    ],
  },
  fr: {
    sectionLabel: 'Ce qu\'il faut savoir',
    h2: 'Informations pratiques',
    cta: 'Vérifier les disponibilités',
    waMessage: 'Bonjour%2C%20je%20voudrais%20louer%20un%20bateau%20sans%20permis%20pour%20les%20canaux%20de%20Santa%20Margarita',
    items: [
      { question: 'Combien de temps dure le parcours dans les canaux ?', answer: 'Le parcours dans les canaux intérieurs dure entre 60 et 90 minutes. Si vous le combinez avec une sortie dans la baie de Roses, vous pouvez passer une demi-journée complète sur l\'eau sans vous éloigner trop.' },
      { question: 'Est-ce adapté aux jeunes enfants ?', answer: 'C\'est l\'un des cadres les plus sûrs pour les familles avec enfants. Les eaux sont calmes, la vitesse est basse et le paysage tient les plus petits occupés pendant tout le parcours.' },
      { question: 'Quel est le meilleur moment pour y aller ?', answer: 'Tôt le matin, les canaux sont d\'un calme absolu et la lumière est superbe pour la photographie. Au coucher du soleil, les reflets sur l\'eau sont tout aussi impressionnants. En moyenne saison (mai, juin, septembre), le trafic nautique est bien moindre qu\'en plein mois d\'août.' },
      { question: 'Prix de la location', prices: [{ label: '1 heure', value: 'à partir de 70 €' }, { label: '2 heures', value: 'à partir de 135 €' }, { label: 'Demi-journée (4 heures)', value: 'à partir de 165 €' }, { label: 'Journée complète (8 heures)', value: 'à partir de 225 €' }] },
    ],
  },
  en: {
    sectionLabel: 'What you should know',
    h2: 'Practical information',
    cta: 'Check availability',
    waMessage: 'Hello%2C%20I%27d%20like%20to%20rent%20a%20no-licence%20boat%20for%20the%20Santa%20Margarita%20canals',
    items: [
      { question: 'How long does the canal route take?', answer: 'The route through the inner canals takes between 60 and 90 minutes. If you combine it with a trip out to the bay of Roses, you can spend a full half-day on the water without going too far.' },
      { question: 'Is it suitable for young children?', answer: 'It\'s one of the safest settings for families with children. The waters are calm, the speed is low and the scenery keeps little ones entertained throughout the trip.' },
      { question: 'When is the best time to go?', answer: 'Early in the morning the canals are perfectly still and the light is spectacular for photography. At sunset, the reflections on the water are just as stunning. In the shoulder season (May, June, September) there is far less boat traffic than in the height of August.' },
      { question: 'Rental price', prices: [{ label: '1 hour', value: 'from €70' }, { label: '2 hours', value: 'from €135' }, { label: 'Half day (4 hours)', value: 'from €165' }, { label: 'Full day (8 hours)', value: 'from €225' }] },
    ],
  },
  ca: {
    sectionLabel: 'El que cal saber',
    h2: 'Informació pràctica',
    cta: 'Consultar disponibilitat',
    waMessage: 'Hola%2C%20m%27agradaria%20llogar%20un%20vaixell%20sense%20llic%C3%A8ncia%20per%20als%20canals%20de%20Santa%20Margarida',
    items: [
      { question: 'Quant de temps dura el recorregut pels canals?', answer: 'El recorregut pels canals interiors dura entre 60 i 90 minuts. Si el combineu amb una sortida a la badia de Roses, podeu passar un mig dia complet a l\'aigua sense necessitat d\'allunyar-vos massa.' },
      { question: 'És apte per a nens petits?', answer: 'És un dels entorns més segurs per a famílies amb nens. Les aigües són tranquil·les, la velocitat és baixa i el paisatge manté els més petits entretinguts durant tot el recorregut.' },
      { question: 'Quan és millor anar-hi?', answer: 'A primera hora del matí els canals estan en calma total i la llum és espectacular per a la fotografia. Al capvespre, els reflexos a l\'aigua són igual d\'impressionants. A temporada mitjana (maig, juny, setembre) hi ha molt menys trànsit nàutic que en ple agost.' },
      { question: 'Preu del lloguer', prices: [{ label: '1 hora', value: 'des de 70 €' }, { label: '2 hores', value: 'des de 135 €' }, { label: 'Mig dia (4 hores)', value: 'des de 165 €' }, { label: 'Dia complet (8 hores)', value: 'des de 225 €' }] },
    ],
  },
};

const icons = [Clock, Baby, Sun, Euro];

export default function InfoPractica({ lang = 'es' }: { lang?: Lang }) {
  const tx = t[lang];
  const items = tx.items;
  return (
    <section className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-4">
          <span className="text-sky-600 font-semibold text-sm uppercase tracking-widest">{tx.sectionLabel}</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 text-center mb-12">{tx.h2}</h2>

        <div whileInView="visible" viewport={{ once: true, margin: '-60px' }} className="anim-stagger grid gap-5">
          {items.map((item, i) => {
            const Icon = icons[i % icons.length];
            return (
              <div key={item.question}  className="anim-stagger bg-slate-50 rounded-2xl p-6 border border-slate-100 shadow-sm flex gap-5">
                <div className="w-11 h-11 bg-sky-100 rounded-xl flex items-center justify-center shrink-0 mt-0.5"><Icon className="w-5 h-5 text-sky-600" /></div>
                <div className="flex-1">
                  <h3 className="font-bold text-gray-900 text-lg mb-2">{item.question}</h3>
                  {item.answer && <p className="text-gray-600 leading-relaxed text-sm">{item.answer}</p>}
                  {item.prices && (
                    <div className="mt-2 flex flex-wrap gap-3">
                      {item.prices.map((p) => (
                        <div key={p.label} className="bg-white rounded-xl px-4 py-2 border border-slate-200">
                          <div className="text-xs text-gray-500">{p.label}</div>
                          <div className="font-extrabold text-gray-900 text-base">{p.value}</div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <a href={`https://wa.me/34623995700?text=${tx.waMessage}`} target="_blank" rel="nofollow noopener noreferrer" className="inline-flex items-center justify-center px-8 py-4 rounded-xl font-bold shadow-lg hover:brightness-110 transition-all bg-[#25D366] text-white">
            {tx.cta}
          </a>
        </div>
      </div>
    </section>
  );
}
