
export default function CtaSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-sky-700 to-cyan-500">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <div
         className="anim-fade-up">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-5">
            Ready to sail the Bay of Roses?
          </h2>
          <p className="text-sky-100 text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
            Book your rental today and enjoy a private, flexible and unforgettable experience.
            Choose your boat, choose your route, and we&apos;ll do the rest.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#boats"
              className="inline-flex items-center justify-center px-10 py-4 rounded-2xl bg-white text-sky-600 font-bold text-lg hover:bg-sky-50 transition-colors shadow-xl shadow-sky-900/20"
            >
              Check available boats
            </a>
            <a
              href="https://wa.me/34623995700?text=Hello%2C%20I%27m%20interested%20in%20hiring%20a%20boat%20in%20the%20Bay%20of%20Roses"
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="inline-flex items-center justify-center px-10 py-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/30 text-white font-bold text-lg hover:bg-white/20 transition-colors"
            >
              WhatsApp enquiry
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
