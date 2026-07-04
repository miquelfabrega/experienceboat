# FASE 5 — Resumen de ejecución (quick wins + Clusters A, B, C, D)
*2026-07-04 · Rama `seo/quick-wins-cluster-a` · 7 commits, sin push · Build OK (169 páginas estáticas)*

## Clusters B, C y D — guías de destino (ES + FR)
Silo nuevo de guías con componente reutilizable `GuiaDestino` + datos en `lib/data/destinos.ts`. Cada guía: `TouristAttraction` + `FAQPage` + `BreadcrumbList`, hreflang ES/FR recíproco (EN/CA pendientes → fallback), enlaces internos (Footer ES/FR + related), CTA a Regiondo. Contenido nativo por idioma, cifras solo reales (fleet.ts).

- **Cluster B:** `/cap-de-creus-en-barco`, `/cala-montjoi`, `/cala-murtra` (+ `/fr/...`). Ataca cala montjoi (1.300 ES + 600 FR), cala murtra (1.600), cap de creus (9.000 / KD 13) — competencia con páginas flojas.
- **Cluster C:** `/que-ver-en-roses` + `/fr/que-faire-a-rosas` (que ver en roses 800 / que faire à rosas 250).
- **Cluster D:** `/cadaques-en-barco` + `/fr/cadaques-en-bateau`, **enfocada a excursión privada** (no ferry/línea colectiva, porque Els Blaus/Don Pancho no son competencia). Se eliminaron datos inventados del borrador (horarios de salida, precio/horario del museo, población).
- QA de contenido (content-quality-editor): ES sin cambios; FR con pulido menor aplicado.

**Pendiente en estas guías:** versiones EN/CA (hoy fallback a ES), y `aggregateRating` real en el schema cuando Clara facilite nota + nº de reseñas de la ficha de Google.

---

## Parte 1 — quick wins + Cluster A

## Qué se ha hecho

### Commit 1 — Quick wins (`1de49141`)
- **16 títulos/descripciones** de páginas de producto (pillars sin/con licencia, experiencias, lancha) en ES/FR/EN/CA: keyword-first, con gancho de precio en la description.
- **Bug corregido:** lancha/vedette/motorboat/llanxa duplicaban la marca (`… — Experience Boat | Experience Boat`) porque el layout ya añade `| Experience Boat` vía `title.template`. Ahora aparece una sola vez.
- **BlogPosting + datePublished** en los 4 posts de blog CA (ES/EN/FR ya lo tenían).

### Commit 2 — Cluster A (`7b4cb1f8`)
- Nueva página **"Precios y temporadas"** en 4 idiomas:
  - `/precios-alquiler-barco-roses` · `/fr/tarifs-location-bateau-roses` · `/en/boat-rental-prices-roses` · `/ca/preus-lloguer-vaixell-roses`
- Tablas **generadas desde `fleet.ts`** (temporada baja/media/alta, exactas), incluye/no incluye, temporadas, FAQ (6), CTA a Regiondo.
- Schema `FAQPage` + `BreadcrumbList` + `Service`/`AggregateOffer`.
- hreflang recíproco 4 idiomas + canonical; enlaces internos desde Footer (sitewide) y hacia los pillars.

### Commit 3 — Docs (`4e9d1f2f`)
- Informes FASE 0–3 (`seo/`).

## Verificación (checklist on-page)
- ✅ Build de producción sin errores; las 4 páginas de precios prerenderizan estáticas.
- ✅ JSON-LD presente y bien formado (FAQPage con 6 preguntas, BreadcrumbList, Service+AggregateOffer).
- ✅ hreflang: canonical + x-default + es/en/fr/ca recíprocos.
- ✅ Título con keyword + gancho de precio; description 150–160c con CTA.
- ✅ Tablas con tarifas reales de `fleet.ts` (no hardcodeadas).
- ✅ Un solo H1; breadcrumb; enlaces internos.
- ✅ QA de contenido (content-quality-editor): "muy buena calidad, nativo, sin patrones de IA"; aplicadas correcciones menores FR/CA.

## Correcciones de premisas del informe FASE 0 (verificadas en código)
- `/test` **ya** se excluye del sitemap; las fichas de barco EN/FR **sí** existen con `generateStaticParams`; los legales CA están **aplazados a propósito** por revisión jurídica. No se tocaron.
- Las 121 páginas **ya** tenían metadata (`export const metadata`); el trabajo fue de **calidad**, no de creación.

## Pendiente / no ejecutado (requiere decisión o es operativo)
- **GBP + reseñas** (P0 del plan): operativo, no es código. Es la mayor brecha (competidores ~900 reseñas vs ~2 nuestras). No accionable desde el repo.
- **Clusters B (destino/calas), C (Visiter Rosas FR), D (Cadaqués privado):** no aprobados aún.
- **Off-page** (visit.roses.cat, directorios, prensa): fuera del repo.
- **Nit menor pre-existente:** el `BreadcrumbList` de `/fr/location-bateau-avec-permis-roses` usa "Location bateau avec permis Roses" (sin preposiciones). No se tocó por estar fuera del alcance de este commit.

## Propuesta de medición GA4/GTM (NO implementado — requiere tu OK)
- Evento `view_pricing` al cargar la página de precios (segmentar demanda comercial).
- Evento `pricing_cta_click` en el botón "Consultar disponibilidad y reservar" → antesala de conversión Regiondo.
- `select_boat_row` (opcional) al interactuar con una fila de la tabla.
- Objetivo: atribuir la nueva página al flujo de reserva Regiondo (`G-RENN41ZP72` / `GTM-KF823TM7`).

## Seguimiento (30/60/90 días)
- **30d:** indexación de las 4 páginas de precios (GSC), CTR de las 16 páginas con títulos nuevos.
- **60d:** posición de "precios/tarif" (ES/FR) y de "location bateau sans permis roses" (hoy #4 FR).
- **90d:** impacto de reseñas GBP si se lanza la campaña (entrada al local pack).
