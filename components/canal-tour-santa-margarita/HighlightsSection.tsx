import { Eye, Navigation, Home, ShieldCheck } from 'lucide-react';

const highlights = [
  {
    icon: Navigation,
    title: 'Auténtico Capitán',
    desc: 'Nuestros barcos no requieren ningún tipo de titulación náutica. Te damos unas sencillas instrucciones y tú mismo tomarás el timón, marcando el ritmo de tu propia aventura.',
  },
  {
    icon: Eye,
    title: 'Perspectiva 360º',
    desc: 'Descubre los canales desde dentro, una forma completamente diferente y privilegiada de visitar Santa Margarita, con vistas panorámicas desde el agua.',
  },
  {
    icon: Home,
    title: 'Casas Espectaculares',
    desc: 'Durante el recorrido te impresionarán las increíbles viviendas, chalets y villas con amarre propio. Auténticas joyas arquitectónicas a las orillas de los canales.',
  },
  {
    icon: ShieldCheck,
    title: 'Seguridad para la familia',
    desc: 'Una actividad tranquila, segura y perfecta para disfrutar en familia o con amigos. Los canales son aguas protegidas donde navegar es fácil y relajante.',
  },
];

export default function HighlightsSection() {
  return (
    <section className="py-20 bg-white border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
            La mejor forma de explorar los canales
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Te ofrecemos la oportunidad de sumergirte en este paisaje urbano y natural de una manera única y divertida.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="bg-slate-50 p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow flex items-start gap-5">
                <div className="w-12 h-12 shrink-0 bg-sky-100 rounded-xl flex items-center justify-center text-sky-600">
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}