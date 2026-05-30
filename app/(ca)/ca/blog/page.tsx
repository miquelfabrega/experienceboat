import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { blogPostsCa } from '@/lib/data/blog-ca';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'Blog nàutic — Consells i rutes en vaixell | Experience Boat',
  description:
    'Guies, rutes i consells per navegar per la Costa Brava: esnòrquel, Cap de Creus, lloguer sense llicència i molt més.',
  alternates: {
    canonical: 'https://www.experienceboat.es/ca/blog',
    languages: {
      'x-default': 'https://www.experienceboat.es/blog',
      es: 'https://www.experienceboat.es/blog',
      fr: 'https://www.experienceboat.es/fr/blog',
      en: 'https://www.experienceboat.es/en/blog',
      ca: 'https://www.experienceboat.es/ca/blog',
    },
  },
  openGraph: {
    title: 'Blog nàutic — Experience Boat',
    description: 'Guies, rutes i consells per navegar per la Costa Brava.',
    url: 'https://www.experienceboat.es/ca/blog',
    siteName: 'Experience Boat',
    locale: 'ca_ES',
    type: 'website',
  },
};

const CATEGORY_STYLES: Record<string, string> = {
  Guies: 'bg-blue-100 text-blue-700',
  Destinacions: 'bg-emerald-100 text-emerald-700',
  Rutes: 'bg-purple-100 text-purple-700',
  Consells: 'bg-amber-100 text-amber-700',
};

export default function BlogPage() {
  const featured = blogPostsCa.find((p) => p.featured);
  const rest = blogPostsCa.filter((p) => !p.featured);

  return (
    <main id="main-content" className="bg-gray-50 min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-sky-600 to-blue-700 text-white py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">
            Blog nàutic
          </h1>
          <p className="text-lg md:text-xl text-sky-50 max-w-2xl mx-auto">
            Guies, rutes i consells per treure el màxim partit al vostre dia al
            mar per la Costa Brava.
          </p>
        </div>
      </section>

      {/* Posts */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {featured && (
          <Link
            href={`/ca/blog/${featured.slug}`}
            className="group block mb-12 bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all overflow-hidden"
          >
            <div className="grid md:grid-cols-2 gap-0">
              <div className="relative aspect-[16/10] md:aspect-auto bg-slate-100">
                <Image
                  src={featured.image}
                  alt={featured.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-8 md:p-10 flex flex-col justify-center">
                <span className={`inline-block w-fit text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-4 ${CATEGORY_STYLES[featured.category] || 'bg-gray-100 text-gray-700'}`}>
                  {featured.category}
                </span>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 group-hover:text-sky-600 transition-colors">
                  {featured.title}
                </h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {featured.excerpt}
                </p>
                <div className="flex items-center gap-3 text-sm text-gray-400">
                  <span>{featured.date}</span>
                  <span aria-hidden>·</span>
                  <span>{featured.readTime}</span>
                </div>
              </div>
            </div>
          </Link>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {rest.map((post) => (
            <Link
              key={post.slug}
              href={`/ca/blog/${post.slug}`}
              className="group block bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all overflow-hidden"
            >
              <div className="relative aspect-[16/10] bg-slate-100">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  sizes="(max-width: 640px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <span className={`inline-block text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-3 ${CATEGORY_STYLES[post.category] || 'bg-gray-100 text-gray-700'}`}>
                  {post.category}
                </span>
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-sky-600 transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {post.excerpt}
                </p>
                <div className="flex items-center gap-2 text-xs text-gray-400">
                  <span>{post.date}</span>
                  <span aria-hidden>·</span>
                  <span>{post.readTime}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
