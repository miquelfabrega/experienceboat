import { Clock, Navigation, CheckCircle2, Euro, Anchor, MapPin } from 'lucide-react';

const infoItems = [
  {
    icon: Clock,
    title: '¿Cuánto dura el paseo?',
    desc: 'Cada recorrido tiene una duración aproximada de 90 minutos. Es el tiempo ideal para navegar con calma y disfrutar de las vistas.',
  },
  {
    icon: Navigation,
    title: 'Horarios',
    desc: 'Estamos disponibles todos los días de 9:00 am a 20:00 pm. Puedes elegir el momento del día que mejor se adapte a ti.',
  },
  {
    icon: Anchor,
    title: 'Nuestros Barcos',
    desc: 'Contamos con embarcaciones de 4,3m a 4,5m de eslora con motor Mercury 15 C.V. Tienen capacidad para 4 a 6 personas, solarium y chalecos salvavidas incluidos.',
  },
  {
    icon: CheckCircle2,
    title: '¿Se necesita licencia?',
    desc: 'No, nuestros barcos para el Canal Tour están diseñados para ser conducidos sin titulación. Te enseñaremos lo básico antes de zarpar.',
  },
  {
    icon: MapPin,
    title: 'Punto de encuentro',
    desc: 'La salida se realiza desde la Av. Clot Franquest Nord, 17480 Roses, Girona.',
  },
  {
    icon: Euro,
    title: 'Precios',
    desc: 'Para consultar las tarifas actualizadas y disponibilidad, por favor revisa nuestra página de reservas.',
  },
];

export default function PracticalInfoSection() {
  return (
    <section className="py-20 bg-white border-b border-gray-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
            Información práctica y Detalles
          </h2>
          <p className="text-lg text-gray-500">
            Todo lo que necesitas saber antes de embarcarte en tu aventura por los canales.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {infoItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="bg-slate-50 p-6 rounded-2xl border border-slate-100 flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-sky-100 rounded-full flex items-center justify-center text-sky-600 shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">{item.title}</h3>
                </div>
                <p className="text-gray-600 leading-relaxed text-sm flex-1">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}