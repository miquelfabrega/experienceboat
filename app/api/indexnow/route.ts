import { NextResponse } from 'next/server';

// IndexNow API — notifica a Google/Bing de cambios en tiempo real
// Documentación: https://www.indexnow.org/
// Key generada para experienceboat.es

const INDEXNOW_KEY = 'experienceboat2026';
const BASE_URL = 'https://www.experienceboat.es';

// URLs principales para notificar a Bing/Google
const URLS_TO_SUBMIT = [
  '/',
  '/alquiler-barco-sin-licencia-roses',
  '/alquiler-barco-con-licencia-roses',
  '/experiencias-barco-roses',
  '/canales-santa-margarita',
  '/barcos',
  '/blog',
  '/blog/ruta-barco-cap-de-creus-roses',
  '/blog/mejores-lugares-snorkel-costa-brava',
  '/blog/planificar-escapada-barco-costa-brava',
  '/blog/primera-vez-barco-sin-licencia-roses',
  '/fr',
  '/fr/location-bateau-sans-permis-roses',
  '/fr/experiences-bateau-roses',
  '/en',
  '/en/boat-rental-without-licence-roses',
  '/en/boat-experiences-roses',
  '/en/santa-margarita-canals-roses',
];

export async function POST() {
  try {
    const response = await fetch('https://api.indexnow.org/indexnow', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        host: 'experienceboat.es',
        key: INDEXNOW_KEY,
        keyLocation: `${BASE_URL}/${INDEXNOW_KEY}.txt`,
        urlList: URLS_TO_SUBMIT.map((path) => `${BASE_URL}${path}`),
      }),
    });

    if (response.ok || response.status === 202) {
      return NextResponse.json({
        success: true,
        message: `${URLS_TO_SUBMIT.length} URLs enviadas a IndexNow`,
        status: response.status,
      });
    }

    return NextResponse.json(
      { success: false, status: response.status },
      { status: 500 },
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, error: String(error) },
      { status: 500 },
    );
  }
}

export async function GET() {
  return NextResponse.json({
    message: 'Usa POST para enviar URLs a IndexNow',
    key: INDEXNOW_KEY,
    urls: URLS_TO_SUBMIT.length,
  });
}
