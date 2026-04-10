
export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/34623995700?text=Hola%2C%20quiero%20informaci%C3%B3n%20sobre%20el%20alquiler%20de%20barcos%20en%20Roses"
      target="_blank"
      rel="nofollow noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:shadow-2xl hover:scale-110 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center group"
      aria-label="Contactar por WhatsApp"
    >
      <svg 
        viewBox="0 0 24 24" 
        width="32" 
        height="32" 
        stroke="currentColor" 
        strokeWidth="2" 
        fill="currentColor" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      >
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" fill="none"></path>
      </svg>
      <span className="absolute right-full mr-4 bg-white text-gray-900 font-bold px-3 py-1 rounded-lg text-sm shadow-md opacity-0 pointer-events-none group-hover:opacity-100 group-hover:translate-x-0 translate-x-2 transition-all whitespace-nowrap">
        ¿Hablamos?
      </span>
    </a>
  );
}