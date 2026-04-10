import type { Metadata } from 'next';
import LegalDocument from '@/components/legal/LegalDocument';
import { getLegalDoc, stripDuplicateTitle } from '@/lib/legal/getLegalDoc';

const title = 'Aviso legal';

export const metadata: Metadata = {
  title: title,
  description: 'Aviso legal y condiciones de uso (LSSI) de experienceboat.es.',
  alternates: { canonical: 'https://experienceboat.es/aviso-legal' },
};

export default async function AvisoLegalPage() {
  const raw = await getLegalDoc('aviso-legal');
  const body = stripDuplicateTitle(raw, title);
  return <LegalDocument title={title} body={body} />;
}
