type Lang = 'es' | 'fr';

interface IntroBahiaProps {
  lang?: Lang;
}

export default function IntroBahia({ lang = 'es' }: IntroBahiaProps) {
  return (
    <section className="py-20 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            La bahía de Roses, a tu ritmo con licencia
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            La bahía de Roses es uno de los escenarios de navegación más completos de la Costa Brava:
            protegida al norte por el Cap de Creus y abierta al sur hacia el golfo de León, ofrece
            condiciones excelentes la mayor parte de la temporada. Salimos desde los canales de Santa
            Margarita — el acceso más singular a la bahía — con embarcaciones para patrones con
            licencia que buscan espacio, calas y libertad de ruta. La flota y precios para titulados
            están en nuestra página de{' '}
            <a
              href="/alquiler-barco-con-licencia-roses"
              className="text-blue-600 font-medium underline underline-offset-2 hover:text-blue-800"
            >
              alquiler de barco con licencia en Roses
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
