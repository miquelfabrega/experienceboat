import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/test/', '/api/', '/_next/image/', '/_next/static/'],
      },
    ],
    sitemap: 'https://experienceboat.es/sitemap.xml',
    host: 'https://experienceboat.es',
  };
}
