
import Image from 'next/image';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="relative w-full h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background photo */}
      <Image
        src="https://picsum.photos/seed/canales-roses-hero/1600/900"
        alt="Barco navegando por los canales de Santa Margarita en Roses, Costa Brava"
        fill
        className="object-cover"
        priority
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white flex flex-col items-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-10 max-w-4xl">
          Los canales de Santa Margarita en barco — la experiencia más singular de Roses
        </h1>

        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <Link
            href="#opciones"
            className="inline-flex items-center justify-center px-8 py-4 rounded-full font-semibold shadow-lg hover:brightness-110 transition-all active:scale-95 bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 text-white"
          >
            Ver opciones disponibles
          </Link>
          <a
            href="https://wa.me/34623995700?text=Hola%2C%20me%20interesa%20navegar%20por%20los%20canales%20de%20Santa%20Margarita%20en%20Roses"
            target="_blank"
            rel="nofollow noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 rounded-full font-semibold shadow-lg hover:brightness-110 transition-all active:scale-95 bg-green-500 text-white"
          >
            Hablar por WhatsApp
          </a>
        </div>

        <p className="text-sm text-gray-300 font-medium">
          500+ salidas · 5★ Google · Salida desde la Marina de Santa Margarita
        </p>
      </div>
    </section>
  );
}
