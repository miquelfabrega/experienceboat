import Link from 'next/link';
import { MapPin, Phone, Mail } from 'lucide-react';
import { homeData } from '@/lib/data/home';

type LocationData = typeof homeData.location & {
  addressLabel?: string;
  phoneLabel?: string;
  emailLabel?: string;
};

export default function LocationSection({ data }: { data?: LocationData } = {}) {
  const base = data ?? homeData.location;
  const { title, description, address, phone, email, cta } = base;
  const addressLabel = (data as LocationData | undefined)?.addressLabel ?? 'Dirección';
  const phoneLabel = (data as LocationData | undefined)?.phoneLabel ?? 'Teléfono';
  const emailLabel = (data as LocationData | undefined)?.emailLabel ?? 'Email';

  return (
    <section className="py-20 bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Info */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {title}
            </h2>
            <p className="text-lg text-gray-600 mb-10 leading-relaxed">
              {description}
            </p>
            
            <div className="space-y-6 mb-10">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">{addressLabel}</h4>
                  <p className="text-gray-600">{address}</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">{phoneLabel}</h4>
                  <a href="tel:+34623995700" className="text-gray-600 hover:text-blue-600 transition-colors">{phone}</a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">{emailLabel}</h4>
                  <a href="mailto:info@experienceboat.es" className="text-gray-600 hover:text-blue-600 transition-colors">{email}</a>
                </div>
              </div>
            </div>
            
            <Link 
              href={cta.href}
              className="inline-block px-8 py-4 rounded-full bg-gray-900 text-white font-bold shadow-md hover:bg-black hover:shadow-lg transition-all active:scale-95"
            >
              {cta.text}
            </Link>
          </div>

          {/* Map */}
          <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-200 h-[400px] lg:h-[500px] w-full">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2952.3338591325605!2d3.1317534761486985!3d42.27139617120126!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12ba61c342377651%3A0xc63a24431ee4a6c8!2sExperience%20Boat!5e0!3m2!1ses!2ses!4v1775426561109!5m2!1ses!2ses"
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Experience Boat en Google Maps"
            ></iframe>
          </div>

        </div>
      </div>
    </section>
  );
}
