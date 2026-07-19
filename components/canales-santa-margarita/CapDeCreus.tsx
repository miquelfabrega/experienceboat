
import Link from 'next/link';
import { localizedHref } from '@/lib/i18n/routes';

type Lang = 'es' | 'fr' | 'en' | 'ca';

const t: Record<Lang, { sectionLabel: string; h2: string; text: string; infoText: string; linkText: string }> = {
  es: {
    sectionLabel: 'Rutas posibles',
    h2: '¿Se puede llegar al Cap de Creus sin licencia desde los canales?',
    text: 'Sí, aunque con matices. Nuestros barcos sin licencia están diseñados para navegación costera tranquila. La bahía de Roses es perfectamente accesible y muy recomendable. Las calas más cercanas del Cap de Creus también están al alcance si las condiciones del mar son buenas.',
    infoText: 'Para adentrarse en el Parque Natural del Cap de Creus con más profundidad, recomendamos una de nuestras excursiones privadas con patrón — Salvador y el equipo conocen las rutas y las calas que merecen la pena según la época del año.',
    linkText: 'Ver excursiones privadas con patrón',
  },
  fr: {
    sectionLabel: 'Itinéraires possibles',
    h2: 'Peut-on rejoindre le Cap de Creus sans permis depuis les canaux ?',
    text: 'Oui, avec quelques nuances. Nos bateaux sans permis sont conçus pour une navigation côtière tranquille. La baie de Roses est parfaitement accessible et très recommandée. Les criques les plus proches du Cap de Creus sont également à portée si les conditions de mer sont bonnes.',
    infoText: 'Pour explorer plus en profondeur le Parc Naturel du Cap de Creus, nous recommandons l\'une de nos excursions privées avec skipper — Salvador et l\'équipe connaissent les itinéraires et les criques qui valent le détour selon la saison.',
    linkText: 'Voir les excursions privées avec skipper',
  },
  en: {
    sectionLabel: 'Possible routes',
    h2: 'Can you reach Cap de Creus without a licence from the canals?',
    text: 'Yes, with some caveats. Our no-licence boats are designed for calm coastal sailing. The bay of Roses is perfectly accessible and highly recommended. The closest coves of Cap de Creus are also within reach if sea conditions are good.',
    infoText: 'To explore the Cap de Creus Natural Park more deeply, we recommend one of our private skippered trips — Salvador and the team know the routes and the coves worth visiting depending on the time of year.',
    linkText: 'See private skippered trips',
  },
  ca: {
    sectionLabel: 'Rutes possibles',
    h2: 'Es pot arribar al Cap de Creus sense llicència des dels canals?',
    text: 'Sí, tot i que amb matisos. Els nostres vaixells sense llicència estan dissenyats per a una navegació costanera tranquil·la. La badia de Roses és perfectament accessible i molt recomanable. Les cales més properes del Cap de Creus també són a l\'abast si les condicions del mar són bones.',
    infoText: 'Per endinsar-vos al Parc Natural del Cap de Creus amb més profunditat, us recomanem una de les nostres excursions privades amb patró — en Salvador i l\'equip coneixen les rutes i les cales que valen la pena segons l\'època de l\'any.',
    linkText: 'Veure excursions privades amb patró',
  },
};

export default function CapDeCreus({ lang = 'es' }: { lang?: Lang }) {
  const tx = t[lang];
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="text-sky-600 font-semibold text-sm uppercase tracking-widest block mb-4">{tx.sectionLabel}</span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-6">{tx.h2}</h2>
        <div className="bg-white p-8 md:p-12 rounded-3xl border border-gray-100 shadow-sm text-left">
          <p className="text-lg text-gray-600 leading-relaxed mb-6">{tx.text}</p>
          <div className="flex gap-4 p-6 bg-sky-50 rounded-2xl mb-8">
            <svg className="w-6 h-6 text-sky-500 shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
            <p className="text-gray-700 text-sm leading-relaxed">{tx.infoText}</p>
          </div>
          <div className="text-center">
            <Link href={localizedHref('experiences', lang)} className="inline-flex items-center justify-center px-8 py-4 rounded-xl font-bold shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all bg-sky-600 text-white">
              {tx.linkText}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
