import Image from 'next/image';
import Link from 'next/link';
import { Clock, Users, ShieldCheck, MapPin, Euro } from 'lucide-react';

export default function ProductBoxSection() {
  return (
    <section className="py-16 bg-gradient-to-b from-slate-50 to-white border-b border-slate-100" id="producto">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <span className="text-sky-600 font-semibold text-sm uppercase tracking-widest">
            Experiencia
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-2">
            Canal Tour Santa Margarita
          </h2>
          <p className="text-gray-500 mt-2 max-w-2xl mx-auto">
            Paseo en barco sin licencia por los canales — reserva online o por WhatsApp.
          </p>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white shadow-xl shadow-slate-200/50 overflow-hidden flex flex-col lg:flex-row">
          <div className="relative lg:w-[42%] min-h-[240px] lg:min-h-0 aspect-[4/3] lg:aspect-auto">
            <Image
              src="/santa-margarita/canal-tour-card.webp"
              alt="Canal Tour Santa Margarita — vista aérea de un canal con barcos amarrados al atardecer, Roses"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 42vw"
            />
          </div>

          <div className="flex-1 p-8 lg:p-10 flex flex-col">
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide bg-sky-100 text-sky-800 px-3 py-1 rounded-full">
                <Clock className="w-3.5 h-3.5" />
                90 minutos
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full">
                <ShieldCheck className="w-3.5 h-3.5" />
                Sin licencia
              </span>
            </div>

            <p className="text-gray-600 leading-relaxed mb-6">
              Navega tú mismo por los canales de Santa Margarita en una embarcación de 4,3–4,5 m con
              motor Mercury 15 CV. Incluye instrucción previa, chalecos y todo lo necesario para una
              salida segura.
            </p>

            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3 text-gray-700">
                <Users className="w-5 h-5 text-sky-500 shrink-0 mt-0.5" />
                <span>
                  <strong>Capacidad:</strong> 4 a 6 personas según embarcación
                </span>
              </li>
              <li className="flex items-start gap-3 text-gray-700">
                <MapPin className="w-5 h-5 text-sky-500 shrink-0 mt-0.5" />
                <span>
                  <strong>Salida:</strong> Av. Clot Franquest Nord, Marina Santa Margarita, Roses
                </span>
              </li>
              <li className="flex items-start gap-3 text-gray-700">
                <Euro className="w-5 h-5 text-sky-500 shrink-0 mt-0.5" />
                <span>
                  <strong>Tarifas:</strong> según temporada y modelo de barco — consulta precios
                  actualizados al reservar
                </span>
              </li>
            </ul>

            <div className="mt-auto flex flex-col sm:flex-row gap-3 sm:items-end sm:justify-between border-t border-slate-100 pt-6">
              <div>
                <p className="text-sm text-gray-500 mb-1">Precio orientativo</p>
                <p className="text-2xl font-extrabold text-gray-900">Consultar en reservas</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/experiencias-barco-roses/canal-tour-santa-margarita"
                  className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl font-bold bg-[var(--nav-accent)] hover:bg-[var(--nav-accent-hover)] text-white shadow-lg shadow-sky-500/20 transition-all"
                >
                  Reservar
                </Link>
                <a
                  href="https://wa.me/34623995700?text=Hola%2C%20quiero%20informaci%C3%B3n%20sobre%20el%20Canal%20Tour%20Santa%20Margarita"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl font-bold bg-green-500 hover:bg-green-600 text-white transition-all"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
