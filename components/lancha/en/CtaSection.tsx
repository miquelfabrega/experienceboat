
export default function CtaSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <div
         className="anim-fade-up">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-5">
            Ready to explore the Costa Brava by motorboat?
          </h2>
          <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
            Check availability for your chosen date. We will help you pick the right boat and
            the right route for an unforgettable experience on the Costa Brava.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#boats"
              className="inline-flex items-center justify-center px-10 py-4 rounded-2xl bg-sky-500 hover:bg-sky-400 text-white font-bold text-lg transition-colors shadow-xl shadow-sky-900/30"
            >
              View motorboats
            </a>
            <a
              href="https://wa.me/34623995700?text=Hello%2C%20I%27d%20like%20to%20rent%20a%20motorboat%20on%20the%20Costa%20Brava%20with%20my%20licence"
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="inline-flex items-center justify-center px-10 py-4 rounded-2xl bg-white/10 border border-white/20 text-white font-bold text-lg hover:bg-white/20 transition-colors"
            >
              WhatsApp enquiry
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
