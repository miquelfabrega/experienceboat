import type { Metadata } from 'next';
import GraciasContent from '@/components/gracias/GraciasContent';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'Thank you — We’ve received your message',
  description:
    'Thank you for contacting Experience Boat. We’ve received your request and will get back to you within 24 hours.',
  alternates: {
    canonical: 'https://www.experienceboat.es/en/thank-you',
  },
  robots: {
    index: false,
    follow: true,
  },
  openGraph: {
    title: 'Thank you — We’ve received your message',
    description:
      'Thank you for contacting Experience Boat. We’ll get back to you within 24 hours.',
    url: 'https://www.experienceboat.es/en/thank-you',
    siteName: 'Experience Boat',
    locale: 'en_GB',
    type: 'website',
    images: ['/images/hero/hero-1.jpg'],
  },
};

export default function ThankYouPage() {
  return <GraciasContent lang="en" />;
}
