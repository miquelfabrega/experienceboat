import Link from 'next/link';
import Image from 'next/image';
import { homeData } from '@/lib/data/home';

type ServicesData = typeof homeData.services;

export default function ServiceCards({ data }: { data?: ServicesData } = {}) {
  const { title, description, items } = data ?? homeData.services;

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{title}</h2>
          <p className="text-lg text-gray-500">{description}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {items.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 border border-gray-100 flex flex-col"
            >
              {/* Image */}
              <div className="relative w-full aspect-video overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 640px) 380px, (max-width: 1024px) 50vw, 700px"
                  quality={55}
                />
                {/* Category badge */}
                <span className="absolute top-4 left-4 px-3 py-1 text-xs font-bold rounded-full bg-white/90 backdrop-blur-sm text-gray-900 shadow-sm">
                  {item.tag}
                </span>
              </div>

              {/* Content */}
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-gray-900 mb-4 leading-snug">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed flex-grow mb-6">
                  {item.text}
                </p>
                <Link
                  href={item.href}
                  className="self-start inline-flex items-center gap-2 px-6 py-3 rounded-full bg-blue-600 text-white text-sm font-semibold shadow-md hover:bg-blue-700 hover:shadow-lg transition-all active:scale-95"
                >
                  {item.cta}
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}