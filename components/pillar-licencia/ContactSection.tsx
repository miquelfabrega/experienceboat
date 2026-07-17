import { MapPin, Phone, Mail } from 'lucide-react';

const translations = {
  es: {
    label: 'Punto de salida',
    title: 'Dónde encontrarnos — Marina de Santa Margarita, Roses',
    subtitle:
      'Estamos en la entrada de Roses, al inicio de la Marina de Santa Margarita. Fácil de encontrar con aparcamiento cercano.',
    addressLabel: 'Dirección',
    phoneLabel: 'Teléfono',
    emailLabel: 'Email',
    whatsappText: 'Hola%2C%20me%20interesa%20alquilar%20un%20barco%20con%20licencia%20en%20Roses',
    whatsappCta: 'Escribir por WhatsApp',
    mapTitle: 'Ubicación Experience Boat — Marina de Santa Margarita, Roses',
    mapAria: 'Mapa de ubicación de Experience Boat en la Marina de Santa Margarita, Roses',
  },
  en: {
    label: 'Departure point',
    title: 'Where to find us — Marina de Santa Margarita, Roses',
    subtitle:
      'We’re at the entrance to Roses, at the start of the Santa Margarita marina. Easy to find, with parking nearby.',
    addressLabel: 'Address',
    phoneLabel: 'Phone',
    emailLabel: 'Email',
    whatsappText: 'Hi%2C%20I%27m%20interested%20in%20renting%20a%20licensed%20boat%20in%20Roses',
    whatsappCta: 'Message us on WhatsApp',
    mapTitle: 'Experience Boat location — Marina de Santa Margarita, Roses',
    mapAria: 'Map showing Experience Boat at the Santa Margarita marina, Roses',
  },
  fr: {
    label: 'Point de départ',
    title: 'Où nous trouver — Marina de Santa Margarita, Roses',
    subtitle:
      'Nous sommes à l’entrée de Roses, au début de la marina de Santa Margarita. Facile à trouver, avec un parking à proximité.',
    addressLabel: 'Adresse',
    phoneLabel: 'Téléphone',
    emailLabel: 'E-mail',
    whatsappText: 'Bonjour%2C%20je%20suis%20int%C3%A9ress%C3%A9%28e%29%20par%20la%20location%20d%27un%20bateau%20avec%20permis%20%C3%A0%20Roses',
    whatsappCta: 'Écrivez-nous sur WhatsApp',
    mapTitle: 'Emplacement Experience Boat — Marina de Santa Margarita, Roses',
    mapAria: 'Carte de l’emplacement d’Experience Boat à la marina de Santa Margarita, Roses',
  },
  ca: {
    label: 'Punt de sortida',
    title: 'On ens trobareu — Marina de Santa Margarida, Roses',
    subtitle:
      'Som a l’entrada de Roses, a l’inici de la Marina de Santa Margarida. Fàcil de trobar i amb aparcament a prop.',
    addressLabel: 'Adreça',
    phoneLabel: 'Telèfon',
    emailLabel: 'Correu',
    whatsappText: 'Hola%2C%20estic%20interessat%2Fda%20a%20llogar%20un%20vaixell%20amb%20llic%C3%A8ncia%20a%20Roses',
    whatsappCta: 'Escriviu-nos per WhatsApp',
    mapTitle: 'Ubicació Experience Boat — Marina de Santa Margarida, Roses',
    mapAria: 'Mapa de la ubicació d’Experience Boat a la Marina de Santa Margarida, Roses',
  },
};

interface ContactSectionProps {
  lang?: 'es' | 'fr' | 'en' | 'ca';
}

export default function ContactSection({ lang = 'es' }: ContactSectionProps) {
  const t = translations[lang];

  return (
    <section className="py-20 bg-white">
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

        <div className="grid lg:grid-cols-2 gap-8 items-stretch">
          {/* Contact info */}
          <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100 flex flex-col justify-between anim-fade-right">
            <div>
              <div className="space-y-5 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-sky-50 rounded-xl flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-sky-500" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">{t.addressLabel}</p>
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
                    <p className="font-bold text-gray-900">{t.phoneLabel}</p>
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
                    <p className="font-bold text-gray-900">{t.emailLabel}</p>
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
              href={`https://wa.me/34623995700?text=${t.whatsappText}`}
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1ebe59] text-white font-bold py-3.5 px-6 rounded-2xl transition-colors shadow-md shadow-green-500/20"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              {t.whatsappCta}
            </a>
          </div>

          {/* Map embed */}
          <div className="rounded-3xl overflow-hidden border border-gray-100 shadow-sm min-h-[320px] anim-fade-left anim-delay-1">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2952.3338591325537!2d3.1317534761487!3d42.27139617120126!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12ba61c342377651%3A0xc63a24431ee4a6c8!2sExperience%20Boat!5e0!3m2!1ses!2ses!4v1775429547339!5m2!1ses!2ses"
              width="100%"
              height="100%"
              className="w-full h-full min-h-[320px]"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={t.mapTitle}
              aria-label={t.mapAria}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
