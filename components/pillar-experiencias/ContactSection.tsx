import { MapPin, Phone, Mail } from 'lucide-react';

export default function ContactSection() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-4">
          <span className="text-sky-600 font-semibold text-sm uppercase tracking-widest">Punto de salida</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 text-center mb-4">
          Dónde encontrarnos — Marina de Santa Margarita, Roses
        </h2>
        <p className="text-gray-500 text-center mb-12 text-lg">
          Estamos en la entrada de Roses, al inicio de la Marina de Santa Margarita. Fácil de encontrar con
          aparcamiento cercano.
        </p>

        <div className="grid lg:grid-cols-2 gap-8 items-stretch">
          {/* Contact info */}
          <div
            className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm flex flex-col justify-between anim-fade-right"
          >
            <div>
              <div className="space-y-5 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-sky-50 rounded-xl flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-sky-500" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">Dirección</p>
                    <p className="text-gray-600 text-sm mt-0.5">
                      Av. Clot Franquest Nord<br />
                      17480 Roses, Girona
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-sky-50 rounded-xl flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-sky-500" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">Teléfono</p>
                    <a
                      href="tel:+34623995700"
                      className="text-sky-600 hover:text-sky-700 text-sm mt-0.5 block font-medium"
                    >
                      +34 623 99 57 00
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-sky-50 rounded-xl flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-sky-500" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">Email</p>
                    <a
                      href="mailto:info@experienceboat.es"
                      className="text-sky-600 hover:text-sky-700 text-sm mt-0.5 block font-medium"
                    >
                      info@experienceboat.es
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <a
              href="https://wa.me/34623995700?text=Hola%2C%20me%20interesa%20reservar%20una%20experiencia%20en%20barco%20en%20Roses"
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1ebe59] text-white font-bold py-3.5 px-6 rounded-2xl transition-colors shadow-md shadow-green-500/20"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Escribir por WhatsApp
            </a>
          </div>

          {/* Map embed */}
          <div
            className="rounded-3xl overflow-hidden border border-gray-100 shadow-sm min-h-[320px] anim-fade-left anim-delay-1"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2952.3338591325537!2d3.1317534761487!3d42.27139617120126!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12ba61c342377651%3A0xc63a24431ee4a6c8!2sExperience%20Boat!5e0!3m2!1ses!2ses!4v1775429547339!5m2!1ses!2ses"
              width="100%"
              height="100%"
              className="w-full h-full min-h-[320px]"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación Experience Boat — Marina de Santa Margarita, Roses"
              aria-label="Mapa de ubicación de Experience Boat en la Marina de Santa Margarita, Roses"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
