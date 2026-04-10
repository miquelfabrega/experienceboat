import { Users, Anchor, MapPin, MessageCircle } from 'lucide-react';
import { homeData } from '@/lib/data/home';

const iconMap: Record<string, React.ElementType> = {
  Users,
  Anchor,
  MapPin,
  MessageCircle,
};

type WhyUsData = typeof homeData.whyUs;

export default function WhyUs({ data }: { data?: WhyUsData } = {}) {
  const { title, items } = data ?? homeData.whyUs;

  return (
    <section className="py-20 bg-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">
          {title}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item, index) => {
            const IconComponent = iconMap[item.icon];
            return (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-2xl bg-white text-blue-600 flex items-center justify-center shadow-md mb-6 rotate-3 hover:rotate-0 transition-transform duration-300">
                  {IconComponent && <IconComponent size={32} strokeWidth={1.5} />}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}