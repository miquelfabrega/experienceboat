import Script from 'next/script';
import { CalendarDays } from 'lucide-react';

export default function RegiondoWidget({
  widgetId,
  title = 'Reserva tu fecha',
  subtitle,
}: {
  widgetId: string;
  title?: string;
  subtitle?: string;
}) {
  return (
    <section
      id="reservar"
      className="py-12 bg-gradient-to-b from-white to-slate-50 scroll-mt-24"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-lg border border-gray-200 p-4 sm:p-6">
          <div className="flex items-center gap-2 mb-4">
            <CalendarDays className="w-5 h-5 text-blue-600" />
            <h2 className="text-lg sm:text-xl font-bold text-gray-900">
              {title}
            </h2>
          </div>
          {subtitle && (
            <p className="text-gray-600 mb-4 text-sm">{subtitle}</p>
          )}
          <div className="min-h-[420px]">
            <booking-widget widget-id={widgetId}></booking-widget>
            <Script
              src="https://widgets.regiondo.net/booking/v1/booking-widget.min.js"
              strategy="afterInteractive"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
