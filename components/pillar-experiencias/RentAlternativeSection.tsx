import Link from 'next/link';
import { Ship, ChevronRight } from 'lucide-react';

export default function RentAlternativeSection() {
  return (
    <section className="py-20 bg-slate-50 border-y border-gray-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center mx-auto mb-6">
          <Ship className="w-8 h-8 text-sky-500" />
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-6">
          ¿Prefieres llevar tú el barco?
        </h2>
        <p className="text-lg text-gray-600 leading-relaxed mb-10">
          Si tienes ganas de llevar el timón y explorar la zona a tu ritmo, también tenemos esa opción. Nuestros barcos de alquiler — con o sin licencia — salen desde los mismos canales de Santa Margarita y llegan a los mismos destinos.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/alquiler-barco-sin-licencia-roses"
            className="flex items-center justify-center gap-2 bg-white text-gray-900 border border-gray-200 font-bold py-4 px-8 rounded-xl transition-all duration-200 hover:border-sky-300 hover:bg-sky-50 group"
          >
            Ver alquiler de barco sin licencia
            <ChevronRight className="w-4 h-4 text-sky-500 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="/alquiler-barco-con-licencia-roses"
            className="flex items-center justify-center gap-2 bg-sky-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-200 hover:bg-sky-400 hover:shadow-lg hover:shadow-sky-400/30 group"
          >
            Ver alquiler de barco con licencia
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
