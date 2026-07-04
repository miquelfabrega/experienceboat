# FASE 0 — Inventario interno SEO · experienceboat.es

**Fecha:** 2026-07-04 · **Fuente:** lectura del repo (`/Users/gironatour/Desktop/work/experienceboat1`) · Sin cambios de código.

## 1. Resumen ejecutivo

- **Arquitectura:** Next.js App Router, 4 route groups `(es)` `(en)` `(fr)` `(ca)`, sin librería i18n. Tabla de rutas centralizada en `lib/i18n/routes.ts` con helpers `localizedHref()` / `buildAlternates()`. **No hay slugs hardcodeados de un solo idioma en nav/footer** — cada componente resuelve URL por `lang`.
- **Volumen:** 34 páginas ES · 29 EN · 29 FR · 29 CA (paridad 85,3%). El déficit son 4 legales + `/test` (solo ES).
- **Punto fuerte:** silos bien construidos (sin licencia / con licencia / experiencias / canales), pillars de 1.500–1.800 palabras, blog de 4 posts × 4 idiomas (~1.800–2.000 palabras), breadcrumbs y enlaces internos consistentes, widget Regiondo en todas las páginas de producto.
- **Punto débil crítico:** **solo ~8 de 121 páginas tienen `generateMetadata` propio** — el resto hereda title/description del layout. Es el fix on-page nº 1.

## 2. Mapa de rutas y paridad por idioma

| ES | EN | FR | CA | Tipo |
|---|---|---|---|---|
| `/` | `/en` | `/fr` | `/ca` | Home |
| `/barcos` + `/barcos/[slug]` | `/en/boats(/[slug])` | `/fr/bateaux(/[slug])` | `/ca/embarcacions(/[slug])` | Índice + ficha barco |
| `/alquiler-barco-sin-licencia-roses` (+ `/canales-santa-margarita`, `/parejas`) | ✓ | ✓ | ✓ | Pillar producto + soportes |
| `/alquiler-barco-con-licencia-roses` (+ `/bahia-de-roses`, `/lancha-costa-brava`) | ✓ | ✓ | ✓ | Pillar producto + soportes |
| `/alquiler-lancha-roses` | ✓ | ✓ | ✓ | Landing Ads lancha |
| `/experiencias-barco-roses` + 6 hijas (cap-de-creus-calas, cuevas-snorkel, canal-tour, cadaques, sunset, privadas) | ✓ | ✓ | ✓ | Pillar experiencias + fichas |
| `/canales-santa-margarita` (+ `/que-ver`, `/ruta-cap-de-creus`) | ✓ | ✓ | ✓ | Silo zona/guía |
| `/blog` + 4 posts | ✓ (slugs localizados) | ✓ | ✓ | Blog |
| `/sobre-nosotros`, `/contacto`, `/reservas`, `/gracias` | ✓ | ✓ | ✓ | Corporativas/conversión |
| `/politica-privacidad`, `/aviso-legal`, `/cookies`, `/accesibilidad` | — | — | — | Legales **solo ES** (`routes.ts:183-186`) |
| `/test` | — | — | — | Dev, **no debería indexarse** |

**Discrepancia a validar:** slugs CA de experiencias (`cap-de-creus-cales` etc.) — sincronía entre directorios `app/(ca)/ca/experiencies-vaixell-roses/` y `routes.ts`.

## 3. Estado técnico (tal como se genera en código)

| Aspecto | Estado | Detalle |
|---|---|---|
| hreflang | ✅ | `buildAlternates()` en `lib/i18n/routes.ts`; legales omiten idiomas null correctamente |
| Canonical | ✅ | `https://www.experienceboat.es` consistente en metadata, sitemap y robots |
| sitemap.xml | ✅/⚠️ | `app/sitemap.ts` (~150 URLs, 4 idiomas con alternates). ⚠️ Incluye fichas de barco EN/FR que **no generan static params** → URLs enlazadas sin página real. Revisar si `/test` está incluida |
| robots.txt | ✅ | `app/robots.ts`: bloquea `/test` y patrones WordPress legacy, host canónico www |
| **Metadata** | 🔴 | **~113/121 páginas sin title/description propios** (solo homes y pocas más tienen `generateMetadata`) |
| JSON-LD | ✅/⚠️ | LocalBusiness + TouristAttraction global (`components/layout/SchemaOrg.tsx`); FAQPage en ~16 pillars; Service + AggregateOffer en fichas de barco; TouristTrip en Sunset; BlogPosting verificado solo en ES. **Faltan:** Product+Offer con tiers, BlogPosting EN/FR/CA, aggregateRating, datePublished en 3 posts |
| Slugs compartidos | ✅ | Nav/footer/megamenu localizados vía `CHROME`/`COPY[lang]` — sin hardcode de idioma. ⚠️ Footer EN/FR/CA enlaza legales a ruta ES (fallback intencional) |

## 4. Contenido: profundidad y huecos

- **Pillars y blog: NO thin** (1.500–2.000 palabras). Fichas de experiencia: 800–1.200.
- **Thin (aceptable por función):** `/contacto`, `/reservas` (widget Regiondo), `/gracias`.
- **Huérfanas:** solo `/test`. Todo lo demás enlazado desde navbar, footer, silo blocks, breadcrumbs o home.
- **Blog:** 4 posts × 4 idiomas (snorkel, ruta Cap de Creus, planificar escapada, primera vez sin licencia). Solo 1 con fecha visible (6 abr 2026).
- **CTA/reserva:** widget Regiondo embebido en todas las experiencias y pillars (sticky mobile CTA); WhatsApp `+34 623 995 700` en home. Sin huérfanas de conversión.

## 5. Catálogo (fuente de verdad: `lib/data/fleet.ts`)

8 barcos activos con Service + AggregateOffer schema; tiers de precio por temporada definidos en `fleet.ts` (baja/media/alta). H1s home: ES «Alquiler de barco en Roses — Costa Brava» / FR «Location de bateau à Roses — Costa Brava» / EN «Boat rental in Roses — Costa Brava» / CA «Lloguer d'embarcacions a Roses — Costa Brava». Keyword targeting de home correcto por idioma (nativo, no traducción literal).

## 6. Acciones detectadas (se priorizan en FASE 3)

1. 🔴 Metadata (title/description) para las ~113 páginas que heredan del layout.
2. 🔴 Fichas de barco EN/FR: generar páginas o sacarlas del sitemap.
3. 🟡 BlogPosting schema + datePublished en EN/FR/CA y en los 3 posts sin fecha.
4. 🟡 `/test`: excluir del sitemap + noindex (robots ya la bloquea).
5. 🟡 Legales EN/FR/CA (footer multiidioma apunta a ES).
6. 🟢 Validar slugs CA de experiencias (directorios vs routes.ts).
