import Script from 'next/script';

/**
 * Catálogo de productos de Regiondo. Lista todas las experiencias/barcos
 * reservables con su calendario. Se coloca en la landing de reservas, debajo
 * del título + subtítulo, para que la página de "reservar" permita reservar de
 * verdad (no solo WhatsApp/teléfono).
 */
export default function RegiondoCatalogWidget({
  widgetId = '911d910c-70fa-4bad-9fad-c4ea733c7390',
}: {
  widgetId?: string;
}) {
  return (
    <div className="min-h-[480px] mb-16">
      <product-catalog-widget widget-id={widgetId}></product-catalog-widget>
      <Script
        src="https://widgets.regiondo.net/catalog/v1/catalog-widget.min.js"
        strategy="afterInteractive"
      />
    </div>
  );
}
