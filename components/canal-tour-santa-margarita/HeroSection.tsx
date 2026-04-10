import Image from 'next/image';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="relative w-full h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background photo */}
      <Image
        src="https://picsum.photos/seed/canal-tour/1600/900"
        alt="Tour en Barco por los canales de Santa Margarita"
        fill
        className="object-cover"
        priority
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white flex flex-col items-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
          Tour en Barco por los canales de Santa Margarita
        </h1>
        
        <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-3xl">
          Conviértete en el capitán de tu propia aventura navegando por los impresionantes canales de Santa Margarita sin necesidad de licencia.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <Link
            href="#que-es"
            className="inline-flex items-center justify-center px-8 py-4 rounded-full font-semibold shadow-lg hover:brightness-110 transition-all active:scale-95 bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 text-white"
          >
            Descubrir la experiencia
          </Link>
          <Link
            href="/reservas"
            className="inline-flex items-center justify-center px-8 py-4 rounded-full font-semibold shadow-lg hover:brightness-110 transition-all active:scale-95 bg-[var(--nav-accent)] text-white"
          >
            Reservar Canal Tour
          </Link>
        </div>

        <p className="text-sm text-gray-300 font-medium">
          Sin licencia · Canales de Santa Margarita · 90 Minutos
        </p>
      </div>
    </section>
  );
}