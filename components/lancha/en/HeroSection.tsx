
import Image from 'next/image';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="relative w-full h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden">
      <Image
        src="https://picsum.photos/seed/motorboat-costa-brava-en/1600/900"
        alt="Motorboat with licence speeding along the Costa Brava coast towards Cap de Creus"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white flex flex-col items-center">
        <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-sm text-white/70">
          <Link href="/en" className="hover:text-white transition-colors">Home</Link>
          <span>/</span>
          <Link href="/en/boat-rental-with-licence-roses" className="hover:text-white transition-colors">
            Boat rental with licence in Roses
          </Link>
          <span>/</span>
          <span className="text-white font-medium">Motorboat Costa Brava</span>
        </nav>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-10">
          Motorboat Rental on the Costa Brava with Licence
        </h1>

        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <Link
            href="#boats"
            className="inline-flex items-center justify-center px-8 py-4 rounded-full font-semibold shadow-lg hover:brightness-110 transition-all active:scale-95 bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 text-white"
          >
            View available motorboats
          </Link>
          <a
            href="https://wa.me/34623995700?text=Hello%2C%20I%27m%20interested%20in%20a%20motorboat%20on%20the%20Costa%20Brava%20with%20licence"
            target="_blank"
            rel="nofollow noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 rounded-full font-semibold shadow-lg hover:brightness-110 transition-all active:scale-95 bg-green-500 text-white"
          >
            Contact us on WhatsApp
          </a>
        </div>

        <p className="text-sm text-gray-300 font-medium">
          Explore the Costa Brava · Cap de Creus Natural Park · Departure from Santa Margarita
        </p>
      </div>
    </section>
  );
}
