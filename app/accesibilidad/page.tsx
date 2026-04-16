import type { Metadata } from 'next';
import LegalDocument from '@/components/legal/LegalDocument';
import { getLegalDoc, stripDuplicateTitle } from '@/lib/legal/getLegalDoc';

const title = 'Accesibilidad';

export const metadata: Metadata = {
  title: title,
  description: 'Declaración de accesibilidad de experienceboat.es. Conoce nuestro compromiso con la accesibilidad web y las medidas adoptadas para garantizar la inclusión digital.',
  alternates: { canonical: 'https://www.experienceboat.es/accesibilidad' },
};

export default async function AccesibilidadPage() {
  const raw = await getLegalDoc('accesibilidad');
  const body = stripDuplicateTitle(raw, title);
  return <LegalDocument title={title} body={body} />;
}
