import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Devolver 404 limpio para rutas WordPress heredadas (resuelve el 403 del WAF
  // y limita el "rastreado sin indexar" en Search Console).
  if (
    pathname.startsWith('/wp-admin') ||
    pathname.startsWith('/wp-content') ||
    pathname.startsWith('/wp-includes') ||
    pathname.startsWith('/wp-json') ||
    pathname.endsWith('.php')
  ) {
    return new NextResponse(null, { status: 404 });
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/wp-admin/:path*', '/wp-content/:path*', '/wp-includes/:path*', '/wp-json/:path*', '/:path*.php'],
};
