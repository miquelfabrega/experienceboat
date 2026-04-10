
import Image from 'next/image';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="relative w-full h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden">
      <Image
        src="https://picsum.photos/seed/roses-bay-en/1600/900"
        alt="Boat with licence sailing in the Bay of Roses with the Pyrenees in the background"
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
          <span className="text-white font-medium">Bay of Roses</span>
        </nav>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-10">
          Boat Rental with Licence in the Bay of Roses
        </h1>

        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <Link
            href="#boats"
            className="inline-flex items-center justify-center px-8 py-4 rounded-full font-semibold shadow-lg hover:brightness-110 transition-all active:scale-95 bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 text-white"
          >
            View available boats
          </Link>
          <a
            href="https://wa.me/34623995700?text=Hello%2C%20I%27m%20interested%20in%20hiring%20a%20boat%20with%20licence%20in%20the%20Bay%20of%20Roses"
            target="_blank"
            rel="nofollow noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 rounded-full font-semibold shadow-lg hover:brightness-110 transition-all active:scale-95 bg-green-500 text-white"
          >
            Contact us on WhatsApp
          </a>
        </div>

        <p className="text-sm text-gray-300 font-medium">
          The Bay of Roses by boat · Private rental · Departure from Santa Margarita
        </p>
      </div>
    </section>
  );
}
