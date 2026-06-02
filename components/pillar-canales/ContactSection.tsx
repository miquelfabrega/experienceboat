import { MapPin, Phone, Mail } from 'lucide-react';

type Lang = 'es' | 'fr' | 'en' | 'ca';

const t: Record<Lang, {
  eyebrow: string;
  h2: string;
  intro: string;
  addressLabel: string;
  phoneLabel: string;
  emailLabel: string;
  whatsappText: string;
  whatsappMsg: string;
  mapTitle: string;
  mapAria: string;
}> = {
  es: {
    eyebrow: 'Punto de salida',
    h2: 'Dónde encontrarnos — en la entrada de los canales',
    intro:
      'Nuestro punto de encuentro está en la entrada de la Marina de Santa Margarita, justo al inicio de los canales. Fácil de encontrar y con aparcamiento cercano. Desde Roses centro, menos de 5 minutos en coche.',
    addressLabel: 'Dirección',
    phoneLabel: 'Teléfono',
    emailLabel: 'Email',
    whatsappText: 'Escribir por WhatsApp',
    whatsappMsg: 'Hola, me interesa navegar por los canales de Santa Margarita en Roses',
    mapTitle: 'Ubicación Experience Boat — Marina de Santa Margarita, entrada de los canales, Roses',
    mapAria: 'Mapa de ubicación de Experience Boat en la entrada de los canales de Santa Margarita, Roses',
  },
  fr: {
    eyebrow: 'Point de départ',
    h2: 'Où nous trouver — à l\'entrée des canaux',
    intro:
      'Notre point de rendez-vous se situe à l\'entrée de la Marina de Santa Margarita, juste au début des canaux. Facile à trouver et avec un parking à proximité. Depuis le centre de Roses, à moins de 5 minutes en voiture.',
    addressLabel: 'Adresse',
    phoneLabel: 'Téléphone',
    emailLabel: 'E-mail',
    whatsappText: 'Écrire sur WhatsApp',
    whatsappMsg: 'Bonjour, je souhaite naviguer sur les canaux de Santa Margarita à Roses',
    mapTitle: 'Emplacement Experience Boat — Marina de Santa Margarita, entrée des canaux, Roses',
    mapAria: 'Carte de localisation d\'Experience Boat à l\'entrée des canaux de Santa Margarita, Roses',
  },
  en: {
    eyebrow: 'Departure point',
    h2: 'Where to find us — at the entrance to the canals',
    intro:
      'Our meeting point is at the entrance to the Marina de Santa Margarita, right at the start of the canals. Easy to find and with parking nearby. Less than a 5-minute drive from central Roses.',
    addressLabel: 'Address',
    phoneLabel: 'Phone',
    emailLabel: 'Email',
    whatsappText: 'Message us on WhatsApp',
    whatsappMsg: 'Hello, I am interested in sailing the Santa Margarita canals in Roses',
    mapTitle: 'Experience Boat location — Marina de Santa Margarita, entrance to the canals, Roses',
    mapAria: 'Location map of Experience Boat at the entrance to the Santa Margarita canals, Roses',
  },
  ca: {
    eyebrow: 'Punt de sortida',
    h2: 'On trobar-nos — a l\'entrada dels canals',
    intro:
      'El nostre punt de trobada és a l\'entrada de la Marina de Santa Margarida, just a l\'inici dels canals. Fàcil de trobar i amb aparcament a prop. Des del centre de Roses, a menys de 5 minuts en cotxe.',
    addressLabel: 'Adreça',
    phoneLabel: 'Telèfon',
    emailLabel: 'Correu electrònic',
    whatsappText: 'Escriure per WhatsApp',
    whatsappMsg: 'Hola, m\'interessa navegar pels canals de Santa Margarida a Roses',
    mapTitle: 'Ubicació Experience Boat — Marina de Santa Margarida, entrada dels canals, Roses',
    mapAria: 'Mapa d\'ubicació d\'Experience Boat a l\'entrada dels canals de Santa Margarida, Roses',
  },
};

export default function ContactSection({ lang = 'es' }: { lang?: Lang }) {
  const c = t[lang];
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-4">
          <span className="text-sky-600 font-semibold text-sm uppercase tracking-widest">{c.eyebrow}</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 text-center mb-4">
          {c.h2}
        </h2>
        <p className="text-gray-500 text-center mb-12 text-lg">
          {c.intro}
        </p>

        <div className="grid lg:grid-cols-2 gap-8 items-stretch">
          {/* Contact info */}
          <div
            className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm flex flex-col justify-between anim-fade-right"
          >
            <div>
              <div className="space-y-5 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-sky-50 rounded-xl flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-sky-500" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">{c.addressLabel}</p>
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
                    <p className="font-bold text-gray-900">{c.phoneLabel}</p>
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
                    <p className="font-bold text-gray-900">{c.emailLabel}</p>
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
              href={`https://wa.me/34623995700?text=${encodeURIComponent(c.whatsappMsg)}`}
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1ebe59] text-white font-bold py-3.5 px-6 rounded-2xl transition-colors shadow-md shadow-green-500/20"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              {c.whatsappText}
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
              title={c.mapTitle}
              aria-label={c.mapAria}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
