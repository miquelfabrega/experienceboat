import type { Metadata } from 'next';
import LegalDocument from '@/components/legal/LegalDocument';
import { getLegalDoc, stripDuplicateTitle } from '@/lib/legal/getLegalDoc';

const title = 'Política de cookies';

export const metadata: Metadata = {
  title: title,
  description: 'Política de cookies de experienceboat.es. Tipos de cookies que utilizamos, finalidad de cada una y cómo gestionar tus preferencias de navegación.',
  alternates: { canonical: 'https://www.experienceboat.es/cookies' },
};

export default async function CookiesPage() {
  const raw = await getLegalDoc('cookies');
  const body = stripDuplicateTitle(raw, title);
  return <LegalDocument title={title} body={body} />;
}
