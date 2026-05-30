
import Image from 'next/image';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="relative w-full h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background photo */}
      <Image
        src="/images/experiencias/experiencias-roses-hero.webp"
        alt="Vista aérea de la bahía y el puerto deportivo de Roses, Costa Brava"
        fill
        sizes="100vw"
        className="object-cover"
        priority
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white flex flex-col items-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-10">
          Experiencias en barco en Roses — solo tu grupo, sin compartir
        </h1>

        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <Link
            href="#experiencias"
            className="inline-flex items-center justify-center px-8 py-4 rounded-full font-semibold shadow-lg hover:brightness-110 transition-all active:scale-95 bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 text-white"
          >
            Ver experiencias
          </Link>
          <a
            href="https://wa.me/34623995700?text=Hola%2C%20me%20interesa%20reservar%20una%20experiencia%20en%20barco%20en%20Roses"
            target="_blank"
            rel="nofollow noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 rounded-full font-semibold shadow-lg hover:brightness-110 transition-all active:scale-95 bg-green-500 text-white"
          >
            Hablar por WhatsApp
          </a>
        </div>

        <p className="text-sm text-gray-300 font-medium">
          Excursiones con patrón · Salidas privadas · Desde Santa Margarita
        </p>
      </div>
    </section>
  );
}
