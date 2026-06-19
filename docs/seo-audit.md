# Experience Boat — AI SEO Audit

**Fecha:** 2026-04-30
**Dominio canon:** [https://www.experienceboat.es](https://www.experienceboat.es)
**Mercados auditados:** ES (principal) + FR
**Stack:** Next.js 14 App Router · multiidioma con route groups `(es) (en) (fr)` · GTM `GTM-KF823TM7` · IndexNow activo
**Fuentes de datos:** Ahrefs Site Audit (proyecto `9650263`, crawl 2026-04-24, 140 URLs) · Ahrefs Site Explorer · Google Search Console (vía Ahrefs MCP) · Keywords Explorer · revisión de código del repo · contexto de marca [experienceboat1.md](../experienceboat1.md).

---

> ## 🔄 Actualización 2026-06-19 — corrige y reemplaza la postura sobre Empuriabrava
>
> **Esta auditoría es de abril 2026. Tras la auditoría de junio 2026 y una decisión de negocio, cambian el baseline y, sobre todo, la estrategia sobre Empuriabrava. El contenido de abril se conserva como histórico; en caso de conflicto, MANDA este bloque.**
>
> ### Corrección estratégica (IMPORTANTE)
> - **Zona de servicio = SOLO Roses / Marina de Santa Margarita.** No se crean landings de servicio para Empuriabrava, Cadaqués ni L'Escala: Experience Boat no opera comercialmente allí.
> - **Empuriabrava NO es una oportunidad de "crear landing".** Se trata únicamente como **ángulo competitivo**: su alquiler de barcos/canales compite con nuestro **Canal Tour Santa Margarita**, así que el contenido sobre Empuriabrava va orientado a captar su demanda hacia nuestro producto, no a posicionarnos como operador allí. → Esto **invalida** la "prioridad #1 / premio gordo / oportunidad #1 del audit" de las secciones *Resumen*, *4* y *8*.
> - **FR es el mercado prioritario SEO 2026** (cluster `location bateau roses/rosas/costa brava`, KD 0, ya en pos 8-10). EN secundario. **CA solo atención al cliente** (sin inversión de contenido; sí hreflang técnico).
>
> ### Baseline actualizado (Site Audit `9670320`, crawl 2026-06-17, 270 URLs · GSC 15-mar→15-jun-2026)
> | Métrica | Abr 2026 | Jun 2026 |
> |---|---|---|
> | Domain Rating | 10 | **16** |
> | Referring domains | 7 | **35** (mayoría spam/PBN → pendiente disavow) |
> | Health score | 96 | **86** (270 URLs vs 140) |
> | Clicks orgánicos (3 meses) | — | **29** (20 de marca "experience boat"; CTR no-marca ≈0) |
> | hreflang | "OK" | **roto**: `ca` no recíproco (31 errores Site Audit) → corregido en páginas canónicas |
>
> ### Aplicado y subido a `main` (commit `31c39a68`, 2026-06-19)
> - hreflang recíproco **centralizado** (`lib/i18n/routes.ts` → `buildAlternates`) en 40 páginas canónicas (4 idiomas).
> - `aggregateRating` placeholder **retirado** del JSON-LD (= quick win #4 de la sección 8: HECHO).
> - Quick wins de copy FR/ES (`location/alquiler` → "Roses (Rosas) / Costa Brava") + Open Graph en home ES.
>
> ### Pendiente
> - hreflang en sub-páginas (ES/EN/FR aún omiten `ca`) + anotaciones hreflang en `sitemap.ts`.
> - Imágenes picsum (manual), enlazado interno, cadenas de redirect, disavow de PBN, optimización GBP (Local Pack), contenido ruta Roses→Cadaqués/Cap de Creus.
>
> ---

## Resumen ejecutivo

Experience Boat es un sitio **bien estructurado técnicamente** (health score Ahrefs 96/100, sitemap dinámico, hreflang, Schema básico, IndexNow) pero con **autoridad muy baja** (Domain Rating **10**, solo **7 referring domains**). La curva de Search Console es **claramente alcista** (clicks/semana 1 → 20 entre enero y abril, posición media 24 → 13), confirmando que el trabajo SEO reciente está empezando a producir tracción.

**Fortaleza principal:** estructura silada (alquiler · experiencias · canales · flota) muy bien planteada en ES y FR, con URLs limpias y contenido específico por uso (parejas, familia, sunset).

**Tres prioridades top:**
1. **Quick wins FR (Roses/Santa Margarita)** — cluster `location bateau roses/rosas/costa brava` (KD 0, ya en pos 8-10): optimizar títulos/meta y reforzar las landings FR existentes. ⚠️ *Corrección 2026-06: la antigua "Atacar Empuriabrava" queda DESCARTADA como zona de servicio (ver banner superior); Empuriabrava solo como ángulo competitivo del Canal Tour.*
2. **Saneamiento técnico de quick wins** — títulos vacíos en páginas indexables, 21 redirects internos en chain, 13 páginas con structured data inválida, 10 OG incompletos. Trabajo de pocos días con impacto inmediato en CTR e indexación.
3. **AI Visibility no medible aún** — el addon Brand Radar de Ahrefs no está activado en la cuenta. Sin él no hay forma de saber si ChatGPT/Perplexity/AI Overviews citan a Experience Boat. Recomendación de activación + alternativa manual incluida abajo.

**Veredicto:** **fundación sólida, falta autoridad y conversión de impresiones en clics**. Con quick wins FR/ES + saneamiento técnico + GBP (Local Pack es el zero-click real del nicho) debería subir el tráfico orgánico antes del pico de temporada. *(El plan original de "pillar pages Empuriabrava + Cadaqués" queda revisado: la zona de servicio es solo Roses/Santa Margarita — ver banner.)*

---

## 1. Estado SEO con números reales

### Métricas del dominio

| Métrica | Valor | Comentario |
|---|---|---|
| Domain Rating (Ahrefs) | **10** | Muy bajo. Sitio joven, pocos backlinks. |
| Ahrefs Rank | 15.974.811 | Posición global del dominio en el índice de Ahrefs. |
| Referring domains | **7** | 1 con DR>50 (informa.es 67), 4 con DR<20, 2 sospechosos PBN/spam (DR 0 dofollow). |
| Site Audit health score | **96 / 100** | 5 errors · 39 warnings · 124 notices sobre 140 URLs crawleadas. |
| Páginas en sitemap | 73 | ES 31 · FR 25 · EN 17 (rutas exactas en [app/sitemap.ts](../app/sitemap.ts)). |

### Tendencia GSC últimas 17 semanas (ene 2026 → 27 abr 2026)

| Semana | Clicks | Impresiones | CTR | Pos. media |
|---|---|---|---|---|
| 2025-12-29 | 1 | 400 | 0,25 % | 18,6 |
| 2026-01-12 | 7 | 479 | 1,46 % | 15,3 |
| 2026-02-23 | 5 | 682 | 0,73 % | 19,3 |
| 2026-03-23 | 11 | 577 | 1,91 % | 12,4 |
| 2026-04-06 | **20** | **895** | **2,23 %** | **13,4** |
| 2026-04-20 | 17 | 690 | 2,46 % | 13,3 |

**Lectura:** clicks ×20, impresiones ×2, posición media baja de 19 a 13. La inversión SEO está dando resultados.

> ⚠️ Las tablas detalladas de GSC en Ahrefs (`gsc-keywords`, `gsc-pages`) devuelven vacío. Hay performance pero no detalle por página/keyword — verificar que la integración GSC↔Ahrefs esté completa. Mientras tanto, consultar GSC nativa.

---

## 2. Issues técnicos detectados

### Errores (5 URLs afectadas)

| Tipo | URLs | Impacto | Fix |
|---|---|---|---|
| Page has broken image | 3 | Mala UX, AI no puede usar la imagen como evidencia | Identificar imágenes 404 y reemplazar — listadas en [experiecne boat_17-apr-2026_all-issues_2026-04-18_11-57-34/Error-Page_has_broken_image.csv](../experiecne%20boat_17-apr-2026_all-issues_2026-04-18_11-57-34/Error-Page_has_broken_image.csv) |
| Image broken (asset directo) | 2 | Mismo | Mismo — ver `Error-Image_broken.csv` |

### Warnings (39 URLs)

| Tipo | URLs | Impacto | Fix |
|---|---|---|---|
| **3XX redirect interno** | 21 | Crawl budget, latencia, link equity diluido | Reemplazar enlaces internos por la URL final. Auditoría en `Notice-Redirect_chain.csv`. |
| Page has links to redirect | 10 | Misma raíz que el anterior | Reescribir hrefs a su destino final. |
| **Open Graph tags incompletos** | 10 | OG/Twitter card no muestra imagen/título en RRSS | Confirmar que `generateMetadata()` añade `openGraph.images`, `openGraph.title`, `twitter.image` en TODAS las pages — no solo en home. |

### Notices con valor SEO (no cosméticos)

| Tipo | URLs | Por qué importa |
|---|---|---|
| **Structured data has schema.org validation error** | 13 | Bloquea rich snippets, perjudica AI SEO. Sospechoso #1: `aggregateRating { ratingValue: 5.0, reviewCount: 47 }` está hardcoded en [components/layout/SchemaOrg.tsx:6-43](../components/layout/SchemaOrg.tsx) sin verificación contra Google Business Profile real. Google penaliza reviews ficticios. |
| Page has only one dofollow incoming internal link | 14 | Páginas casi-orphan que reciben un solo enlace interno dofollow. Mejorar interlinking. |
| More than three parameters in URL | 46 | Probablemente URLs `/_next/image?url=...` (ver siguiente bloque). |
| Redirect chain | 6 | 2 saltos o más. Limpiar a un solo 301. |

### Hallazgos no agrupados pero críticos (de page-explorer manual)

1. **Páginas indexables con `<title>` vacío.** Detectado en al menos:
   - `/en/boat-rental-with-licence-roses/`
   - `/en/boat-rental-no-licence-roses`
   - `/en/boat-experiences-roses/sunset-experience/`
   - `/fr/location-bateau-sans-permis-roses/`
   - `/experiencias-barco-roses/calas-cap-de-creus`

   Es probable que `generateMetadata()` no esté implementado en estas pages, o devuelve `title: ''`. Auditar cada `page.tsx` en [app/(en)/](../app/\(en\)/) y [app/(fr)/](../app/\(fr\)/) y completar metadata con title 50–60 chars + description 150–160 chars + OG.

2. **URLs de `next/image` aparecen en el crawl** (`/_next/image?url=https%3A%2F%2Fpicsum.photos%2Fseed%2F...`). Síntomas:
   - Estas URLs no tienen `<title>` ni Schema, lo que infla artificialmente el conteo de issues.
   - Algunas referencian `picsum.photos` (placeholders de stock) — significa que en producción todavía hay imágenes de relleno **picsum.photos** servidas en páginas reales. Revisar [components/](../components/) y reemplazar por imágenes reales del catálogo.
   - Bloquear `/_next/image*` en `robots.ts` o asegurar que esas URLs no se enlacen externamente.

3. **`reviewCount: 47` y `GBP_URL` placeholder en [SchemaOrg.tsx:6-9](../components/layout/SchemaOrg.tsx)**. El propio comentario dice "TODO: reemplazar con el número real de reseñas GBP". Hasta que esto sea real:
   - **Riesgo de penalización por structured data engañoso.**
   - El `sameAs` tampoco incluye GetYourGuide ni Civitatis (vacíos).

---

## 3. Análisis competitivo (ES + FR)

### Métricas comparativas

| Dominio | DR | Org. keywords | Org. traffic mensual | Top-3 keywords | Refdomains |
|---|---|---|---|---|---|
| **www.experienceboat.es** | **10** | tabla vacía Ahrefs (sitio joven) | ~70/sem GSC = 280/mes aprox | n/d | **7** |
| aventuranautica.com | n/d | 101 | **849** | **55** | 161 (homepage) |
| boatsmediterrani.com | n/d | **164** | 608 | 33 | 51 (homepage) |
| maxiboats.com | n/d | 22 | 97 | 5 | 43 (homepage) |

**Lectura:** Aventura Náutica es el competidor más fuerte por tráfico (849) y top-3 (55). Boats Mediterrani tiene más amplitud de keywords (164) pero menos posiciones top. Maxiboats es el más débil pero su homepage tiene el doble de refdomains que toda nuestra web.

### Lo que rankea cada competidor (top pages relevantes)

| URL competidor | Keyword | Vol | Pos | Insight |
|---|---|---|---|---|
| aventuranautica.com/alquiler-barcos-empuriabrava | alquiler barco empuriabrava | 200 | 1 | **Empuriabrava cubierta — gap nuestro** |
| aventuranautica.com/alquiler-barcos-roses | alquiler barco roses | 200 | 1 | Compite directo con nosotros |
| aventuranautica.com/alquiler-motos-agua-roses | alquiler moto de agua roses | 150 | 1 | Diversifica a jet skis |
| aventuranautica.com/fr/location-bateau-roses | location bateau roses | 100 | 1 | FR cubierto en el competidor #1 |
| boatsmediterrani.com/alquiler-barcos-sin-licencia-empuriabrava/ | alquiler barco empuriabrava | 250 | 5 | Gap Empuriabrava confirmado |
| boatsmediterrani.com/fr/location-de-bateaux-sans-permis-empuriabrava/ | location bateau sans permis empuriabrava | 100 | 1 | FR + Empuriabrava combinados |
| boatsmediterrani.com/alquiler-barco-cadaques/ | alquiler barcos cadaques | 150 | 3 | Cadaqués cubierto |
| boatsmediterrani.com/mejores-playas-y-calas-roses/ | calas roses | 60 | 8 | Posiciona blog "calas roses" |
| maxiboats.com/ | alquiler barco roses | 200 | 2 | Compite directo |

---

## 4. Oportunidad de keywords (ES + FR)

### Volúmenes y dificultad de las keywords objetivo

#### Mercado ES (España)

| Keyword | Vol/mes | KD (0–100) | CPC | Intent | Posición Experience Boat | Acción |
|---|---|---|---|---|---|---|
| alquiler barco costa brava | **600** | 10 | 25 € | comercial+local | n/d | **Pillar** — Reforzar [/alquiler-barco-con-licencia-roses](../app/(es)/alquiler-barco-con-licencia-roses/) y enlazar a "Costa Brava" en H1/H2. |
| alquiler barco roses | **200** | 7 | 30 € | comercial+local | n/d | **Atacar #1** — competidor en POS 1, dificultad baja. |
| alquiler barco empuriabrava | **200** | 15 | 35 € | comercial | n/d | **Crear landing nueva** — gap absoluto. |
| calas roses | **90** | 0 | 10 € | informacional | n/d | **Blog post** — fácil ranking. |
| alquiler barco cadaques | 80 | 1 | 25 € | comercial | n/d | **Crear landing** o ampliar `/experiencias-barco-roses/cadaques`. |
| actividades en roses | 60 | 0 | 9 € | informacional | n/d | **Blog post pillar** "qué hacer en Roses". |
| experience boat | 20 | n/d | n/d | branded | rankeando #1 ya | Mantener. |
| alquiler barco sin licencia roses | 10 | 1 | 30 € | comercial | n/d | Ya hay landing dedicada — optimizar internal links. |
| paseo en barco roses | 10 | n/d | 15 € | comercial | n/d | Long-tail apoyo. |

#### Mercado FR (Francia)

| Keyword | Vol/mes | KD | CPC | Intent | Acción |
|---|---|---|---|---|---|
| **location bateau empuriabrava** | **450** | 0 | 15 € | comercial+local | **Crear landing FR** — el premio gordo. Volumen mayor que cualquier KW ES. |
| location bateau roses | 200 | 0 | 20 € | comercial+local | Reforzar [/fr/location-bateau-sans-permis-roses](../app/(fr)/) — competencia directa. |
| location bateau costa brava | 150 | 0 | 30 € | comercial+local | Pillar FR equivalente al ES. |
| location bateau sans permis roses | 50 | 0 | 20 € | comercial | Optimizar landing actual. |
| excursion bateau roses | 20 | n/d | n/d | comercial | Long-tail. |

> **Insight clave (SUPERSEDED 2026-06):** el análisis de abril marcaba Empuriabrava como oportunidad #1 "vendible como zona de operación con misma flota". **Decisión de negocio (junio 2026): NO se opera en Empuriabrava.** Experience Boat opera solo desde Roses / Marina de Santa Margarita. Empuriabrava se trabaja únicamente como **ángulo competitivo** frente al Canal Tour Santa Margarita. La prioridad real es el cluster FR de Roses (KD 0) + optimización de GBP.

### Keywords donde ya rankeamos (GSC Search Console)

Datos detallados no disponibles vía Ahrefs MCP en este momento (tabla vacía). Pedir export de GSC nativa para enriquecer este bloque en la próxima iteración.

---

## 5. Análisis E-E-A-T y AI-friendliness

### Schema.org actual

✅ Presente en [components/layout/SchemaOrg.tsx](../components/layout/SchemaOrg.tsx):
- `LocalBusiness` con address, geo, openingHours, aggregateRating, sameAs.
- `TouristAttraction` con touristType, availableLanguage, geo.

✅ En algunas pages (`/alquiler-barco-con-licencia-roses/lancha-costa-brava`, varias `parejas`, `couples`):
- `BreadcrumbList`, `FAQPage`, `Product` añadidos correctamente.

⚠️ **Faltan o están incompletos:**

| Schema | Dónde añadir | Prioridad |
|---|---|---|
| `Product` + `Offer` con `priceRange` real | Cada [/barcos/[slug]](../app/(es)/barcos/[slug]/) — datos están en [lib/data/fleet.ts](../lib/data/fleet.ts) | **Alta** — los LLMs citan precios concretos. |
| `Service` con `areaServed: Roses, Empuriabrava, Cap de Creus` | Pages de servicio (`/alquiler-*`, `/experiencias-*`) | Alta |
| `FAQPage` | Toda página con bloque FAQs (faltan en muchas según page-explorer) | Alta |
| `Review` individuales (no solo aggregate) | Sección reviews homepage, importadas desde GBP/TripAdvisor | Media |
| `Event` para Sunset Experience | `/experiencias-barco-roses/sunset-experience` | Baja |

⚠️ **`aggregateRating` con valores hardcoded sin sustento real** — riesgo de manual action de Google. Los 13 issues de "Structured data has schema.org validation error" que reporta Ahrefs probablemente vienen de aquí. **Acción: deshabilitar `aggregateRating` hasta tener API o feed real de GBP/TripAdvisor.**

### Contenido "respondible" para LLMs

Los LLMs citan **párrafos cortos, directos y respuesta-a-pregunta**. Audit visual de las páginas top:
- ✅ Pages de servicio tienen FAQs estructuradas en algunas.
- ⚠️ No hay un bloque "datos clave" estandarizado por barco (precio desde, capacidad, eslora, motor, requisitos) que un LLM pueda parsear de un vistazo. **Acción:** componente `<FactsBox />` en cada `/barcos/[slug]` con datos de [lib/data/fleet.ts](../lib/data/fleet.ts) en formato lista clave-valor.
- ⚠️ Faltan respuestas literales a preguntas frecuentes a nivel global (qué incluye, edad mínima, requisitos licencia, política cancelación, idiomas, horarios). Centralizar en `/preguntas-frecuentes` (ES) + traducciones, marcar con `FAQPage`.

### Autoría y E-E-A-T humana

- ✅ Existe `/sobre-nosotros` (ES) y `/en/about`, `/fr/a-propos`. Mantener.
- ⚠️ El equipo (Miquel, Tomàs, Max) **no aparece nominalmente** en las páginas según el contexto del repo. Los LLMs citan más fácil cuando hay personas reales. **Acción:** añadir bloque "Quiénes somos al timón" con nombres + foto + 1 frase de credenciales en `/sobre-nosotros` y replicar en EN/FR.
- ✅ Salida diferencial (Marina Santa Margarita, canales) es un dato único y muy citable — asegurarse de que aparezca textualmente en H2 de la home y en `meta description` de pages clave.

---

## 6. AI Visibility (Brand Radar)

### Estado actual

❌ **No medible**. La cuenta Ahrefs vinculada (`hola@gironatour.com`) **no tiene activado el addon Brand Radar**. Todas las queries (`brand-radar-mentions-overview`, `brand-radar-cited-domains`, `brand-radar-ai-responses`, `brand-radar-sov-overview`) devuelven `Missing addon: Brand Radar`.

### Recomendación

**Opción A — Activar Brand Radar (recomendado).** Permite:
- Tracking continuo de menciones de "Experience Boat" en ChatGPT, Perplexity, Gemini, Google AI Overviews.
- Share of voice vs. Aventura Náutica, Boats Mediterrani, Maxiboats.
- Lista de dominios citados — para saber si los LLMs citan a `experienceboat.es` directamente o a TripAdvisor / Civitatis / blogs de turismo.
- Histórico para medir el efecto de las acciones SEO en visibilidad IA.

Una vez activado, configurar **report custom** con los 10 prompts ya definidos:

**Prompts ES:**
1. "¿Dónde puedo alquilar un barco sin licencia en Roses?"
2. "Mejor empresa para excursiones privadas en barco en Costa Brava"
3. "¿Cómo llegar a Cap de Creus en barco desde Roses?"
4. "Plan romántico atardecer en Costa Brava con barco"
5. "Alquilar barco para familia con niños en Costa Brava sin licencia"
6. "Diferencia entre alquilar barco con o sin licencia en España"

**Prompts FR:**
7. "Où louer un bateau sans permis à Roses, Costa Brava ?"
8. "Meilleure excursion en bateau privée Cap de Creus"
9. "Coucher de soleil en bateau à Roses"
10. "Activités à faire à Roses en bateau en famille"

**Opción B — Monitoreo manual mensual.** Si no se activa el addon, hacer pasada manual mensual: ejecutar los 10 prompts en ChatGPT (con browsing), Perplexity y Google AI Mode; anotar (a) si aparece Experience Boat, (b) qué competidores aparecen, (c) qué fuentes cita el LLM. Tabla en `docs/ai-visibility-log.md`. Escala mal pero da una baseline cualitativa.

---

## 7. Backlinks y autoridad

### Snapshot

- **Total referring domains: 7** (de los cuales 5 son útiles).
- Top: **informa.es** (DR 67, dofollow, traffic 24K) — perfil corporativo automático tras el alta de la S.L.
- 1 directorio local: `localitybiz.es` (DR 30, nofollow).
- 2 dominios sospechosos: **`alquilerbarcoroses.com`** y **`locationbateauroses.com`** (DR 0, dofollow, sin tráfico). Patrón típico de PBN o spam de microsite. **Acción: revisar manualmente — si no son tuyas, añadir a `public/disavow.txt`** (ya hay disavow gestionado por gente que ha trabajado el SEO).

### Brecha vs competidores

- aventuranautica.com homepage: **161 refdomains**.
- boatsmediterrani.com homepage: **51 refdomains**.
- maxiboats.com homepage: **43 refdomains**.
- experienceboat.es total: **7**.

**Conclusión:** la falta de autoridad es el principal techo del crecimiento orgánico, no el contenido. El contenido es decente; lo que no se rankea es porque no hay enlaces.

### Estrategia de link-building (90 días)

1. **Citations locales (semana 1–2):** alta en TripAdvisor (ya existe), GetYourGuide, Civitatis, Viator, Manawa, Roses Turisme, Costa Brava Pirineu de Girona, Visit Catalunya, Federación Española de Vela. Todos enlazan dofollow a la web del operador.
2. **Press digital regional (semana 3–6):** notas de prensa en `diaridegirona.cat`, `lavanguardia.com/local/girona`, `costabravadigital.com`, `empordatv.cat` con angle "joven empresa Roses lanza canal tour Santa Margarita".
3. **Partnerships con alojamiento (mes 2–3):** afiliación con hoteles/apartamentos de Roses (Almadraba Park, Vistabella, etc.) — link recíproco dofollow desde su página de "actividades".
4. **Contenido linkable (mes 2–3):** "Mapa interactivo de calas Cap de Creus accesibles solo en barco" + "Calendario de mejores días para sunset en Costa Brava". Recursos linkables que medios y blogs de turismo citan.

---

## 8. Plan de acción priorizado

### Quick wins (esta semana — impacto alto, esfuerzo bajo)

| # | Acción | Archivos / dónde | Impacto | Esfuerzo |
|---|---|---|---|---|
| 1 | Completar `<title>` y `<meta description>` en TODAS las pages de `/en` y `/fr` que actualmente vienen vacías (al menos 5 detectadas) | [app/(en)/](../app/(en)/) y [app/(fr)/](../app/(fr)/) — buscar `page.tsx` sin `generateMetadata` | Alto (CTR + indexación) | 2 h |
| 2 | Reemplazar imágenes `picsum.photos` placeholder por imágenes reales del catálogo | grep `picsum.photos` en [components/](../components/) | Alto (UX + AI) | 3 h |
| 3 | Reescribir hrefs internos que apuntan a redirects (10 pages) hacia destino final | grep en componentes de navegación | Medio (crawl budget) | 2 h |
| 4 | Quitar `aggregateRating` hardcoded de [SchemaOrg.tsx](../components/layout/SchemaOrg.tsx) hasta tener feed real GBP/TripAdvisor | una línea | Medio (penalty risk) | 15 min |
| 5 | Sustituir `GBP_URL` placeholder por la URL real del Google Knowledge Panel | [SchemaOrg.tsx:7](../components/layout/SchemaOrg.tsx) | Bajo (consistencia) | 5 min |
| 6 | Verificar y disavow `alquilerbarcoroses.com` y `locationbateauroses.com` si no son propios | [public/disavow.txt](../public/disavow.txt) | Medio (riesgo SEO) | 30 min |
| 7 | Completar OG tags en las 10 pages que los tienen incompletos | `generateMetadata().openGraph` por page | Medio (RRSS, AI snippets) | 2 h |
| 8 | Añadir `Product` + `Offer` schema a cada [/barcos/[slug]](../app/(es)/barcos/[slug]/) usando datos de [lib/data/fleet.ts](../lib/data/fleet.ts) | nueva utility en `lib/schema.ts` | Alto (rich snippets + AI) | 4 h |

### Inversiones estratégicas (este trimestre — Q2 2026)

| # | Acción | Detalle | Impacto | Esfuerzo |
|---|---|---|---|---|
| 1 | ~~Pillar page Empuriabrava (ES + FR)~~ **DESCARTADO** → en su lugar: **contenido competitivo "Canal Tour Santa Margarita vs canales de Empuriabrava"** para captar demanda hacia nuestro producto (NO posicionarnos como operador en Empuriabrava). Zona de servicio = solo Roses / Santa Margarita. | Medio (defensivo) | 1 día |
| 2 | **Pillar page Cadaqués (ES + FR)** | Misma estructura, `/experiencias-barco-roses/cadaques` ya existe — convertir en pillar real, crear `/fr/experiences-bateau-roses/cadaques` | Alto (80+ vol ES dif 1) | 2 días |
| 3 | **Hub de contenido "Calas Cap de Creus"** | Blog post pillar + 4 sub-posts (Pelosa, Jóncols, Rostella, Montjoi) con fotos exclusivas y datos de acceso. Linkbait. | Alto (linkbuilding orgánico, AI cita) | 5 días |
| 4 | **Bloque "Quiénes somos al timón"** con Miquel, Tomàs, Max (foto + bio breve + idiomas) en `/sobre-nosotros`, `/en/about`, `/fr/a-propos` | E-E-A-T humanizado | Medio | 1 día |
| 5 | **`<FactsBox />` por barco** con precio desde, capacidad, eslora, motor, requisitos | Schema `Product`/`Offer` + UX + AI-readable | Alto (CTR producto + LLM citation) | 2 días |
| 6 | **/preguntas-frecuentes (ES, EN, FR)** con `FAQPage` schema | 15-20 preguntas reales (qué incluye, edad mínima, licencia, cancelación, política, horarios, idiomas, qué llevar) | Alto (AI overviews + featured snippets) | 2 días |
| 7 | **Estrategia link-building 90 días** (sección 7) — citations + press + partnerships + linkbait | Pasar de 7 a 30 referring domains | Crítico (techo de DR) | 4-6 sem |
| 8 | **Activar Brand Radar de Ahrefs** + configurar report con los 10 prompts | Sin esto no hay forma de medir AI visibility | Crítico para AI SEO | 1 día setup + reporting mensual |
| 9 | **Reabrir EN como mercado prioritario** (hoy es secundario) | Auditar pages EN, completar metadata, aprovechar volumen "boat rental Costa Brava" | Medio | 1 sem |

---

## 9. KPIs a vigilar mensualmente

| KPI | Fuente | Baseline (abril 2026) | Objetivo Q3 2026 |
|---|---|---|---|
| Clicks orgánicos / mes (GSC) | Google Search Console | ~280 | **800+** |
| Posición media GSC | GSC | 13,3 | < 10 |
| Impresiones / mes | GSC | ~3.000 | 8.000+ |
| Domain Rating (Ahrefs) | Ahrefs | 10 | **18+** |
| Referring domains | Ahrefs | 7 | **30+** |
| Top-3 keywords en ES | Ahrefs site-explorer | n/d (tabla vacía) | 15+ |
| Top-10 keywords en FR | Ahrefs site-explorer | n/d | 20+ |
| Share of Voice IA (ES) | Brand Radar (cuando se active) | ❌ no medible | tracking establecido + 5 % SoV |
| Mentions IA / mes | Brand Radar | ❌ | 10+ menciones combinadas |
| Páginas con `<title>` válido | Site Audit | ~95 / 140 (estimación) | 140 / 140 |
| Health score Site Audit | Ahrefs Site Audit | 96 | 99+ |

---

## 10. Pendientes y supuestos

- **GSC keywords/pages tabla vacía vía Ahrefs MCP** — verificar integración de Search Console con Ahrefs project `9650263`. Mientras tanto, exportar manualmente desde GSC nativa.
- **Brand Radar addon no activo** — bloquea todo el bloque 6.
- Algunos topics (`excursion barco cap de creus`, `alquiler lancha roses`) reportan **volumen 0** en Keywords Explorer. No significa que no haya demanda — son long-tail con poco track. Mantener cobertura semántica pero no priorizar como pillar.
- Los 5 errors y 39 warnings de Site Audit están listados con detalle por URL en [experiecne boat_17-apr-2026_all-issues_2026-04-18_11-57-34/](../experiecne%20boat_17-apr-2026_all-issues_2026-04-18_11-57-34/). Iterar página a página al ejecutar quick wins.

---

*Auditoría preparada con MCPs de Ahrefs (Site Audit · Site Explorer · Keywords Explorer · GSC) y revisión de código del repo. Próxima revisión sugerida: 8 semanas tras ejecutar quick wins, para medir delta de Site Audit + GSC.*
