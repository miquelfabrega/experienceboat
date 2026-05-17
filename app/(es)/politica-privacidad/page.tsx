import type { Metadata } from 'next';
import LegalDocument from '@/components/legal/LegalDocument';
import { getLegalDoc, stripDuplicateTitle } from '@/lib/legal/getLegalDoc';

const title = 'Política de privacidad';

export const metadata: Metadata = {
  title: title,
  description: 'Política de privacidad y protección de datos personales (RGPD) de Experience Boat. Cómo recogemos, usamos y protegemos tu información al reservar.',
  alternates: { canonical: 'https://experienceboat.es/politica-privacidad' },
};

export default async function PoliticaPrivacidadPage() {
  const raw = await getLegalDoc('privacidad');
  const body = stripDuplicateTitle(raw, title);
  return <LegalDocument title={title} body={body} />;
}
