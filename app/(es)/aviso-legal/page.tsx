import type { Metadata } from 'next';
import LegalDocument from '@/components/legal/LegalDocument';
import { getLegalDoc, stripDuplicateTitle } from '@/lib/legal/getLegalDoc';

const title = 'Aviso legal';

export const metadata: Metadata = {
  title: title,
  description: 'Aviso legal y condiciones de uso de experienceboat.es conforme a la LSSI. Datos del titular, responsabilidad y propiedad intelectual del sitio.',
  alternates: { canonical: 'https://www.experienceboat.es/aviso-legal' },
};

export default async function AvisoLegalPage() {
  const raw = await getLegalDoc('aviso-legal');
  const body = stripDuplicateTitle(raw, title);
  return <LegalDocument title={title} body={body} />;
}
