import { FileCheck, Users, Package, Euro, Calendar } from 'lucide-react';

const translations = {
  es: {
    label: 'Antes de reservar',
    title: '¿Cómo funciona el alquiler con licencia?',
    subtitle: 'Información práctica para que lo tengas todo claro antes de salir.',
    cta: 'Consultar disponibilidad ahora',
    items: [
      {
        icon: FileCheck,
        question: '¿Qué titulación necesito?',
        answer:
          'Para las embarcaciones de nuestra flota con licencia se requiere como mínimo la titulación PNB (Patrón de Navegación Básica) o equivalente. Si tienes dudas sobre si tu titulación es válida, consúltanos antes de reservar — te lo confirmamos en menos de 24 horas.',
      },
      {
        icon: Users,
        question: '¿Cuántas personas caben?',
        answer:
          'Depende del modelo. Consulta las cards de cada embarcación para ver la capacidad exacta y la eslora. Tenemos barcos desde 4 hasta 8 personas.',
      },
      {
        icon: Package,
        question: '¿Qué incluye el alquiler?',
        list: [
          'Embarcación con combustible incluido (consultar según modelo y ruta)',
          'Equipamiento de seguridad reglamentario',
          'Briefing de salida con información de la zona',
          'Mapa náutico de la bahía de Roses y Cap de Creus',
          'Asistencia en caso de incidencia',
        ],
      },
      {
        icon: Euro,
        question: '¿Cuáles son los precios?',
        prices: [
          { label: 'Medio día (4 horas)', value: 'desde 195 €' },
          { label: 'Día completo (8 horas)', value: 'desde 285 €' },
        ],
        note: 'Los precios varían según el modelo de embarcación y la temporada. Consulta disponibilidad para tu fecha.',
      },
      {
        icon: Calendar,
        question: '¿Con cuánta antelación debo reservar?',
        answer:
          'En temporada alta (julio y agosto) recomendamos reservar con un mínimo de dos semanas. En temporada media, con 48-72 horas es suficiente en la mayoría de casos.',
      },
    ],
  },
  en: {
    label: 'Before you book',
    title: 'How does renting with a licence work?',
    subtitle: 'The practical details, so you have everything clear before you head out.',
    cta: 'Check availability now',
    items: [
      {
        icon: FileCheck,
        question: 'What licence do I need?',
        answer:
          'For the boats in our licensed fleet you need at least a PNB (Basic Navigation Skipper) certificate or an equivalent. If you’re not sure whether your qualification counts, ask us before booking — we’ll confirm it within 24 hours.',
      },
      {
        icon: Users,
        question: 'How many people fit?',
        answer:
          'It depends on the boat. Check each boat’s card for the exact capacity and length. We have boats for anywhere from 4 to 8 people.',
      },
      {
        icon: Package,
        question: 'What’s included in the rental?',
        list: [
          'Boat with fuel included (varies by model and route — ask us)',
          'Regulation safety equipment',
          'A departure briefing with local information',
          'A nautical chart of the Bay of Roses and Cap de Creus',
          'Assistance if anything comes up',
        ],
      },
      {
        icon: Euro,
        question: 'What are the prices?',
        prices: [
          { label: 'Half day (4 hours)', value: 'from €195' },
          { label: 'Full day (8 hours)', value: 'from €285' },
        ],
        note: 'Prices vary with the boat and the season. Ask us for availability on your date.',
      },
      {
        icon: Calendar,
        question: 'How far ahead should I book?',
        answer:
          'In high season (July and August) we’d book at least two weeks ahead. In the shoulder season, 48–72 hours is usually enough.',
      },
    ],
  },
  fr: {
    label: 'Avant de réserver',
    title: 'Comment fonctionne la location avec permis ?',
    subtitle: 'Les informations pratiques, pour que tout soit clair avant de partir.',
    cta: 'Vérifier les disponibilités',
    items: [
      {
        icon: FileCheck,
        question: 'Quel permis me faut-il ?',
        answer:
          'Pour les bateaux de notre flotte avec permis, il faut au minimum le titre PNB (Patrón de Navegación Básica) ou un équivalent. Si vous ne savez pas si votre permis convient, demandez-nous avant de réserver — on vous le confirme en moins de 24 heures.',
      },
      {
        icon: Users,
        question: 'Combien de personnes à bord ?',
        answer:
          'Cela dépend du modèle. Consultez la fiche de chaque bateau pour la capacité exacte et la longueur. Nous avons des bateaux de 4 à 8 personnes.',
      },
      {
        icon: Package,
        question: 'Qu’est-ce qui est inclus dans la location ?',
        list: [
          'Bateau avec carburant inclus (selon le modèle et l’itinéraire — demandez-nous)',
          'Équipement de sécurité réglementaire',
          'Un briefing de départ avec les infos de la zone',
          'Une carte marine de la baie de Roses et du Cap de Creus',
          'Une assistance en cas d’imprévu',
        ],
      },
      {
        icon: Euro,
        question: 'Quels sont les tarifs ?',
        prices: [
          { label: 'Demi-journée (4 heures)', value: 'dès 195 €' },
          { label: 'Journée complète (8 heures)', value: 'dès 285 €' },
        ],
        note: 'Les tarifs varient selon le bateau et la saison. Demandez-nous les disponibilités pour votre date.',
      },
      {
        icon: Calendar,
        question: 'Combien de temps à l’avance faut-il réserver ?',
        answer:
          'En haute saison (juillet et août), on conseille de réserver au moins deux semaines à l’avance. En moyenne saison, 48 à 72 heures suffisent dans la plupart des cas.',
      },
    ],
  },
  ca: {
    label: 'Abans de reservar',
    title: 'Com funciona el lloguer amb llicència?',
    subtitle: 'Informació pràctica perquè ho tingueu tot clar abans de salpar.',
    cta: 'Consultar disponibilitat ara',
    items: [
      {
        icon: FileCheck,
        question: 'Quina titulació necessito?',
        answer:
          'Per a les embarcacions de la nostra flota amb llicència cal com a mínim la titulació PNB (Patró de Navegació Bàsica) o equivalent. Si teniu dubtes sobre si la vostra titulació és vàlida, consulteu-nos abans de reservar — us ho confirmem en menys de 24 hores.',
      },
      {
        icon: Users,
        question: 'Quantes persones hi caben?',
        answer:
          'Depèn del model. Consulteu la fitxa de cada embarcació per veure la capacitat exacta i l’eslora. Tenim vaixells de 4 fins a 8 persones.',
      },
      {
        icon: Package,
        question: 'Què inclou el lloguer?',
        list: [
          'Embarcació amb combustible inclòs (segons model i ruta — consulteu-nos)',
          'Equipament de seguretat reglamentari',
          'Un briefing de sortida amb informació de la zona',
          'Una carta nàutica de la badia de Roses i el Cap de Creus',
          'Assistència en cas d’imprevist',
        ],
      },
      {
        icon: Euro,
        question: 'Quins són els preus?',
        prices: [
          { label: 'Mig dia (4 hores)', value: 'des de 195 €' },
          { label: 'Dia complet (8 hores)', value: 'des de 285 €' },
        ],
        note: 'Els preus varien segons el model d’embarcació i la temporada. Consulteu la disponibilitat per a la vostra data.',
      },
      {
        icon: Calendar,
        question: 'Amb quanta antelació he de reservar?',
        answer:
          'En temporada alta (juliol i agost) recomanem reservar amb un mínim de dues setmanes. En temporada mitjana, amb 48-72 hores n’hi ha prou en la majoria de casos.',
      },
    ],
  },
};

interface PracticalItem {
  icon: typeof FileCheck;
  question: string;
  answer?: string;
  list?: string[];
  prices?: { label: string; value: string }[];
  note?: string;
}

interface PracticalInfoSectionProps {
  lang?: 'es' | 'fr' | 'en' | 'ca';
}

export default function PracticalInfoSection({ lang = 'es' }: PracticalInfoSectionProps) {
  const t = translations[lang];
  const items = t.items as PracticalItem[];

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-4">
          <span className="text-sky-600 font-semibold text-sm uppercase tracking-widest">{t.label}</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 text-center mb-4">
          {t.title}
        </h2>
        <p className="text-gray-500 text-center mb-12 text-lg">
          {t.subtitle}
        </p>

        <div className="anim-stagger grid gap-5">
          {items.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.question}
                className="anim-stagger bg-white rounded-2xl p-6 border border-gray-100 shadow-sm flex gap-5"
              >
                <div className="w-11 h-11 bg-sky-50 rounded-xl flex items-center justify-center shrink-0 mt-0.5">
                  <Icon className="w-5 h-5 text-sky-500" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-gray-900 text-lg mb-2">{item.question}</h3>
                  {item.answer && (
                    <p className="text-gray-600 leading-relaxed text-sm">{item.answer}</p>
                  )}
                  {item.list && (
                    <ul className="mt-1 space-y-1">
                      {item.list.map((li) => (
                        <li key={li} className="flex items-start gap-2 text-sm text-gray-600">
                          <span className="text-sky-500 mt-1 shrink-0">✓</span>
                          {li}
                        </li>
                      ))}
                    </ul>
                  )}
                  {item.prices && (
                    <div className="mt-2 flex flex-wrap gap-3">
                      {item.prices.map((p) => (
                        <div key={p.label} className="bg-slate-50 rounded-xl px-4 py-2 border border-slate-200">
                          <div className="text-xs text-gray-500">{p.label}</div>
                          <div className="font-extrabold text-gray-900 text-base">{p.value}</div>
                        </div>
                      ))}
                      {item.note && (
                        <p className="w-full text-xs text-gray-400 mt-1">{item.note}</p>
                      )}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Main CTA */}
        <div className="mt-10 text-center anim-fade-up">
          <a
            href="#barcos"
            className="inline-flex items-center justify-center gap-2 bg-sky-500 hover:bg-sky-400 text-white font-bold text-lg px-10 py-4 rounded-2xl shadow-lg shadow-sky-500/30 transition-all duration-200 hover:scale-105"
          >
            {t.cta}
          </a>
        </div>
      </div>
    </section>
  );
}
