import { readFile } from 'fs/promises';
import path from 'path';

export type LegalSlug = 'accesibilidad' | 'aviso-legal' | 'privacidad' | 'cookies';

export async function getLegalDoc(slug: LegalSlug): Promise<string> {
  const filePath = path.join(process.cwd(), 'lib', 'legal', 'sources', `${slug}.txt`);
  return readFile(filePath, 'utf-8');
}

/** Evita duplicar el título si ya va en la primera línea del texto exportado desde Word. */
export function stripDuplicateTitle(body: string, title: string): string {
  const lines = body.split('\n');
  const first = lines[0]?.trim();
  if (!first) return body;
  const t = title.toLowerCase();
  const f = first.toLowerCase();
  const isDuplicateHeading =
    f === t || f.startsWith(`${t} `) || f.startsWith(`${t}(`) || f.startsWith(`${t} (`);
  if (isDuplicateHeading) {
    return lines.slice(1).join('\n').trimStart();
  }
  return body;
}
