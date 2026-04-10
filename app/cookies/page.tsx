import type { Metadata } from 'next';
import LegalDocument from '@/components/legal/LegalDocument';
import { getLegalDoc, stripDuplicateTitle } from '@/lib/legal/getLegalDoc';

const title = 'Política de cookies';

export const metadata: Metadata = {
  title: title,
  description: 'Uso de cookies en experienceboat.es.',
  alternates: { canonical: 'https://experienceboat.es/cookies' },
};

export default async function CookiesPage() {
  const raw = await getLegalDoc('cookies');
  const body = stripDuplicateTitle(raw, title);
  return <LegalDocument title={title} body={body} />;
}
