# **ExperienceBoat — Contexto completo de proyecto SEO**

## **Documento de referencia para implementación en Cursor**

## **Versión 4 — Flota y precios definitivos confirmados**

## **0\. STACK TECNOLÓGICO — DECISIÓN DE ARQUITECTURA**

### **Framework principal**

**Next.js 14+ (App Router)** con **TypeScript** estricto.

La web se construye como una aplicación Full-Stack utilizando **React Server Components (RSC)** por defecto. Solo los componentes que requieren interactividad en cliente (widgets de reserva, slider de flota, mapa embebido, botón WhatsApp flotante) se marcan con `"use client"`.

### **Estructura de carpetas (App Router)**

/app  
  /\[locale\]               ← i18n: es (default) \+ fr  
    /page.tsx             ← Home  
    /alquiler-barco-sin-licencia-roses/page.tsx  
    /alquiler-barco-con-licencia-roses/page.tsx  
    /excursiones-barco-roses/page.tsx  
    /canales-santa-margarita/page.tsx  
    /sunset-experience/page.tsx  
    /barcos/  
      /dream-line-430/page.tsx  
      /marine-breeze-compass-160-sc/page.tsx  
      /remus-450/page.tsx  
      /spirit-of-the-sea/page.tsx  
      /zodiac-medline-i/page.tsx  
      /zodiac-medline-ii/page.tsx  
      /tio-marc-mano/page.tsx  
    /blog/\[slug\]/page.tsx  
    /reservas/page.tsx  
    /contacto/page.tsx  
    /sobre-nosotros/page.tsx  
  /api  
    /availability/route.ts  ← Disponibilidad en tiempo real  
    /contact/route.ts  
/components  
  /ui/                    ← Componentes reutilizables  
  /seo/                   ← SchemaOrg, Metadata helpers  
  /fleet/                 ← Cards de barcos  
/lib  
  /i18n.ts  
  /schema.ts              ← Generadores de Schema.org  
/content  
  /es/                    ← Textos en español (MDX o JSON)  
  /fr/                    ← Textos en francés

### **Decisiones técnicas clave**

| Área | Solución |
| ----- | ----- |
| **Rendering** | SSG para páginas de contenido · ISR para precios/disponibilidad |
| **i18n** | `next-intl` — rutas `/` (ES) y `/fr/` (FR) con hreflang automático |
| **SEO metadata** | API `generateMetadata()` de Next.js — title, description, OG, hreflang |
| **Schema.org** | Componente RSC `<SchemaOrg />` inyecta JSON-LD en `<head>` |
| **Imágenes** | `next/image` con `priority` en hero · WebP · alt text obligatorio |
| **Fuente de verdad precios** | Fichero JSON/Markdown en `/content/` — no hardcoded en componentes |
| **Disponibilidad** | API Route `/api/availability` que conecta con sistema de reservas |
| **Estilos** | Tailwind CSS v3 |
| **Despliegue** | **Vercel** (opción principal) o **AWS** (App Runner \+ CloudFront) |
| **Analytics** | Vercel Analytics \+ Google Search Console verificado vía meta tag |

### **SEO técnico con Next.js App Router**

// app/\[locale\]/alquiler-barco-sin-licencia-roses/page.tsx  
export async function generateMetadata(): Promise\<Metadata\> {  
  return {  
    title: 'Alquiler de barco sin licencia en Roses | Experience Boat',  
    description: 'Alquila un barco sin licencia en Roses y navega por la bahía...',  
    alternates: {  
      canonical: 'https://experienceboat.es/alquiler-barco-sin-licencia-roses/',  
      languages: {  
        'fr': 'https://experienceboat.es/fr/location-bateau-sans-permis-roses/',  
      },  
    },  
    openGraph: { ... },  
  }  
}

### **Redirects 301 — next.config.ts**

Los redirects del apartado 8 se implementan en `next.config.ts` (no en plugin WordPress):

// next.config.ts  
const nextConfig \= {  
  async redirects() {  
    return \[  
      {  
        source: '/barco-en-roses/alquiler-de-barco-en-roses/alquiler-de-barcos-sin-licencia/',  
        destination: '/alquiler-barco-sin-licencia-roses/',  
        permanent: true,  
      },  
      {  
        source: '/barco-en-roses/alquiler-de-barco-en-roses/alquiler-de-barcos-con-licencia/',  
        destination: '/alquiler-barco-con-licencia-roses/',  
        permanent: true,  
      },  
      {  
        source: '/barco-en-roses/excursiones-en-barco-en-roses/',  
        destination: '/excursiones-barco-roses/',  
        permanent: true,  
      },  
      {  
        source: '/canal-tour/',  
        destination: '/canales-santa-margarita/',  
        permanent: true,  
      },  
      {  
        source: '/los-mejores-lugares-para-hacer-snorkel-en-la-costa-brava-explorando-las-maravillas-submarinas-de-la-region/',  
        destination: '/snorkel-costa-brava/',  
        permanent: true,  
      },  
    \]  
  },  
}

### **Nota de migración**

La web actual está en **WordPress**. La migración a Next.js supone:

1. Exportar contenido existente (posts, páginas) a formato MDX o JSON  
2. Mantener todos los redirects 301 del apartado 8 activos desde el primer deploy  
3. Verificar Search Console tras el deploy con las nuevas URLs canónicas  
4. El plugin Redirection de WordPress **ya no es necesario** — los redirects van en `next.config.ts`  
5. WP Rocket **ya no es necesario** — el rendimiento lo gestiona el propio Next.js \+ Vercel CDN

---

## **1\. INFORMACIÓN DE LA EMPRESA**

**Datos fiscales: Experience Bay SL B448782239**

**Nombre Comercial** Experience Boat **Web:** experienceboat.es (WordPress) **Ubicación:** Av. Clot Franquest Nord, 17480 Roses, Girona **Tel:** 623995700 **Email:** info@experienceboat.es **Coordenadas:** lat 42.2713962, lng 3.1343284 **Punto de salida:** Marina de Santa Margarita (entrada de los canales de Santa Margarita)

**Descripción:** Empresa joven y dinámica de alquiler de embarcaciones y excursiones náuticas privadas en Roses (Costa Brava). Opera en la bahía de Roses y el Parque Natural del Cap de Creus. Propuesta de valor: cercana, familiar y aventurera. Accesible sin pretensiones de lujo.

**Equipo:** Salvador (patrones — perfil cercano y profesional, humanizar la marca mencionándolos)

---

## **2\. SERVICIOS Y PRECIOS REALES**

IMPORTANTE: Todos los servicios son PRIVADOS. La embarcación es exclusivamente para el grupo del cliente. Nunca se comparte con otros clientes. Este es el argumento de venta diferencial frente a la competencia.

### **Servicio 1 — Alquiler sin patrón, SIN licencia de navegación**

Tres embarcaciones pequeñas para explorar la bahía de forma autónoma sin experiencia náutica previa.

| Tarifa | Temporada Normal | Temporada Alta (15 Jul – 31 Ago) |
| ----- | ----- | ----- |
| Medio día | 225 € | 250 € |
| Día completo | 290 € | 350 € |

### **Servicio 2 — Alquiler sin patrón, CON licencia de navegación**

Embarcaciones neumáticas de mayor potencia para clientes con titulación náutica.

| Duración | T. Baja | T. Media | T. Alta |
| ----- | ----- | ----- | ----- |
| ½ día | desde 181 € | desde 204 € | desde 285 € |
| 1 día | desde 257 € | desde 304 € | desde 380 € |
| 3 días | desde 684 € | desde 850 € | desde 1.069 € |
| 7 días | desde 1.477 € | desde 1.762 € | desde 2.303 € |

*Precios desde (Zodiac Medline I). Spirit of the Sea y Tio Marc Mano tienen tarifa propia — ver Silo 2\.*

### **Servicio 3 — Alquiler CON patrón**

Las mismas embarcaciones con Salvador incluido. Precio a consultar según embarcación y disponibilidad.

### **Servicio 4 — Excursiones privadas con patrón**

Salidas privadas con patrón por bahía de Roses, Cap de Creus y costa norte de Costa Brava.

**Rutas habituales:**

* Ruta al Cap de Creus: Calas Pelosa, Rostella y Jóncols. Parada en chiringuito de Cala Pelosa.  
* Baño y Snorkel: calas de aguas cristalinas en el entorno del Cap de Creus.  
* Sunset Experience: salida al atardecer desde los canales de Santa Margarita.

### **Servicio 5 — Sunset Experience**

Salida privada al atardecer. Combina recorrido por canales de Santa Margarita \+ bahía de Roses al caer el sol. Duración aprox. 2 horas.

---

## **3\. FLOTA COMPLETA — DATOS TÉCNICOS REALES**

La flota cuenta con **8 embarcaciones** organizadas en tres segmentos.

### **Embarcaciones SIN licencia (4 unidades — autoservicio)**

Ideales para explorar los canales de Santa Margarita y la bahía de Roses sin experiencia previa.

| Nombre | Eslora | Motor | Capacidad | Características |
| ----- | ----- | ----- | ----- | ----- |
| Dream Line 430 | 4,3 m | Mercury 15 CV | 4 pax | Sin licencia, capota, solarium |
| Marine Breeze – Compass 160 SC | 4,62 m | Mercury 15 CV | 6 pax | Sin licencia, capota, solarium |
| Remus 450 *(unidad 1\)* | 4,5 m | Mercury 15 CV | 6 pax | Sin licencia, capota, solarium |
| Remus 450 *(unidad 2\)* | 4,5 m | Mercury 15 CV | 6 pax | Sin licencia, capota, solarium |

**Nota de comunicación:** En la web mostrar las 4 embarcaciones como 3 modelos (Dream Line · Marine Breeze · Remus 450\) indicando "disponemos de 2 unidades del Remus 450" — mayor disponibilidad es argumento de venta.

### **Embarcaciones CON licencia — Neumáticas (3 unidades)**

Mayor potencia y capacidad. Requieren titulación náutica mínima PNB o pueden reservarse con patrón incluido (Salvador).

| Nombre | Tipo | Eslora | Motor | Capacidad | Características |
| ----- | ----- | ----- | ----- | ----- | ----- |
| Spirit of the Sea | Neumática | 6,75 m | Suzuki DF150 | 12 pax | Licencia o con patrón |
| Zodiac Medline I | Neumática | 6 m | Suzuki DF140 | 11 pax | Licencia o con patrón |
| Zodiac Medline II | Neumática | 6 m | Suzuki DF140 | 11 pax | Licencia o con patrón |

**Nota de comunicación:** En la web se pueden mostrar como "Spirit of the Sea" \+ "Zodiac Medline (disponemos de 2 unidades)" — la disponibilidad doble es argumento de venta frente a competidores.

### **Embarcación CON licencia — Lancha (1 unidad)**

La embarcación de mayor eslora y prestaciones de la flota. Ideal para grupos grandes, eventos y quien busca más espacio.

| Nombre | Tipo | Eslora | Motor | Capacidad | Características |
| ----- | ----- | ----- | ----- | ----- | ----- |
| Tio Marc Mano | Lancha | A confirmar | A confirmar | A confirmar | Con licencia o con patrón |

**Nota de implementación web:** La Tio Marc Mano se presenta en ficha propia `/barcos/tio-marc-mano/` enlazando a `/alquiler-barco-con-licencia-roses/`.

**Incluido en todas las embarcaciones:** chalecos salvavidas, capota plegable, solarium, seguro de responsabilidad civil, IVA.

**Nota de marca:** Las embarcaciones son de segunda mano. No presentarlas como premium — son funcionales, bien mantenidas y adecuadas para la experiencia. La autenticidad es parte de la marca. *La Tio Marc Mano puede comunicarse como la opción con más espacio y autonomía de la flota.*

---

## **4\. PÚBLICO OBJETIVO**

### **Segmentos principales**

* Familias con niños  
* Parejas  
* Grupos de amigos  
* Grupos para eventos (despedidas, cumpleaños, team building)

### **Origen geográfico (datos reales Search Console)**

* **Francia** — mercado extranjero prioritario en volumen de búsquedas y clics  
  * Queries principales: "location bateau roses", "location bateau rosas", "excursion bateau roses"  
* **España** — mercado nacional, mayor volumen total  
* **Bélgica y Países Bajos** — relevantes, buen CTR  
* **Alemania** — presencia moderada  
* **Reino Unido / Internacionales** — vía OTAs principalmente

### **Dispositivo dominante**

**Móvil: 78% del tráfico orgánico** → Implicación técnica: priorizar textos cortos, CTAs visibles y velocidad de carga en móvil

---

## **5\. DATOS SEO — SEARCH CONSOLE (últimos 16 meses)**

### **Páginas con mayor tráfico actual**

| Página | Clics | Impresiones | Notas |
| ----- | ----- | ----- | ----- |
| Homepage (www \+ non-www) | \~851 | \~47.500 | Principal |
| Sunset Experience | 7 | 437 | Pos \~31 — mejorable |
| Canal Tour | 4 | — | Excluida de brand manual |

### **Queries con más impresiones (oportunidades SEO confirmadas)**

| Query | Impresiones | Posición | Idioma |
| ----- | ----- | ----- | ----- |
| location bateau roses | 4.121 | 11,68 | Francés — alta prioridad |
| alquiler barco roses | 3.237 | 13,79 | Español |
| location bateau rosas | 2.308 | 8,63 | Francés |

### **Páginas con muchas impresiones y 0 clics — MEJORA URGENTE**

| URL | Impresiones | Posición | Acción |
| ----- | ----- | ----- | ----- |
| /alquiler-de-barcos-sin-licencia/ | 1.128 | 72 | Redirect 301 a nueva URL |
| /barco-en-roses/.../alquiler-de-barcos-sin-licencia/ | 1.091 | 61 | Redirect 301 a nueva URL |
| /los-mejores-lugares-para-hacer-snorkel-.../ | 1.507 | 73 | Acortar URL \+ redirect 301 |

---

## **6\. CALAS DE REFERENCIA — USAR EN CONTENIDO**

Estas son las calas reales que visitan en sus excursiones. Siempre usar nombres reales, nunca genéricos:

**Rutas habituales:**

* Cala Pelosa (parada habitual con chiringuito)  
* Cala Rostella  
* Cala Jóncols  
* Cala Montjoi  
* Cala Canyelles Petites  
* Cala Almadraba  
* Cala Culip  
* Cala Jugadora  
* Cala Fredosa

**Zona geográfica de referencia en todas las comunicaciones:** Roses · bahía de Roses · canales de Santa Margarita · Empuriabrava Cap de Creus · Parque Natural del Cap de Creus · Costa Brava norte · Alt Empordà

---

## **7\. ARQUITECTURA WEB — SITEMAP DEFINITIVO**

### **Reglas de la silo structure**

* Un silo por servicio principal  
* Cada pillar page ataca una keyword principal con KD bajo  
* Las supporting pages refuerzan su pillar page — nunca enlazan a otras silos directamente  
* Las pillar pages pueden enlazarse entre sí con anchor text geográfico  
* La home distribuye autoridad hacia todas las pillar pages (2 enlaces por silo: card de categoría \+ CTA del H2)  
* Todas las páginas mencionan canales de Santa Margarita con enlace a /canales-santa-margarita/

---

### **HOME**

URL: experienceboat.es/  
 Meta title: Alquiler de barco en Roses | Experience Boat  
 Meta desc: Alquiler de barcos con y sin licencia en Roses, Costa Brava. Salidas  
 privadas desde los canales de Santa Margarita hacia el Cap de Creus.  
 Reserva online.  
 H1: Alquiler de barco en Roses — Costa Brava  
 KW principal: alquiler barco roses (vol 200, KD 1\)  
 KW secundarias: barco roses · alquiler de barco roses · alquiler barca roses  
 Estado: CONTENIDO REDACTADO — implementar  
 Schema: LocalBusiness \+ GeoCoordinates

**Estructura de contenido home:**

1. H1 \+ párrafo intro (visible sin scroll — crítico)  
2. H2: Nuestros barcos en Roses → 4 cards de categoría (una por silo) con enlace a cada pillar page  
3. H2: Alquiler de barco sin licencia en Roses → CTA a /alquiler-barco-sin-licencia-roses/  
4. H2: Alquiler de barco con licencia en Roses → CTA a /alquiler-barco-con-licencia-roses/  
5. H2: Excursiones privadas en barco → CTA a /excursiones-barco-roses/  
6. H2: Salimos desde los canales de Santa Margarita → CTA a /canales-santa-margarita/  
7. H2: ¿Por qué elegir Experience Boat? (4 argumentos con icono)  
8. H2: Qué opinan de nosotros (Trustindex / reseñas Google)  
9. H2: Dónde encontrarnos (mapa embebido)

---

### **SILO 1 — SIN LICENCIA**

PILLAR PAGE  
 URL nueva: /alquiler-barco-sin-licencia-roses/  
 URL antigua: /barco-en-roses/alquiler-de-barco-en-roses/alquiler-de-barcos-sin-licencia/  
 Redirect 301: URL antigua → URL nueva  
 Meta title: Alquiler de barco sin licencia en Roses | Experience Boat  
 Meta desc: Alquila un barco sin licencia en Roses y navega por la bahía, los canales  
 de Santa Margarita y el Cap de Creus. Sin experiencia previa. Todo privado.  
 Reserva ya.  
 H1: Alquiler de barco sin licencia en Roses  
 KW principal: alquiler barco sin licencia roses (vol 200, KD 1\)  
 Estado: CONTENIDO REDACTADO — implementar  
 Schema: FAQPage (5 preguntas) \+ Product

**Precios a mostrar en esta página (datos reales de flota):**

| Duración | T. Baja | T. Media | T. Alta |
| ----- | ----- | ----- | ----- |
| 1 hora | desde 71 € | desde 76 € | desde 90 € |
| 2 horas | desde 133 € | desde 143 € | desde 165 € |
| 4 horas (medio día) | desde 166 € | desde 176 € | desde 200 € |
| Día completo | desde 223 € | desde 243 € | desde 280 € |

*Precios desde (embarcación más económica). Varían según modelo: Dream Point 71–280 € · Remus 450 90–320 €.*  
 *Temporada Alta: julio–agosto. T. Media: junio \+ septiembre. T. Baja: resto del año.*

**Estructura:**

* H1: Alquiler de barco sin licencia en Roses  
* H2: Nuestros barcos sin licencia en Roses → Cards: Dream Line 430 (4 pax) · Marine Breeze 160 SC (6 pax) · Remus 450 (6 pax)  
* H2: ¿Qué puedes hacer con un barco sin licencia en Roses? → Bullets: canales Santa Margarita · bahía de Roses · Cala Canyelles Petites · Cala Almadraba · Cap de Creus  
* H2: Todo privado — solo tu grupo a bordo  
* H2: ¿Cómo funciona el alquiler? — Información práctica → ¿Qué titulación necesito? / ¿Cuántas personas caben? / ¿Qué incluye? / Precios / Antelación reserva  
* H2: ¿Por qué alquilar sin licencia con Experience Boat? (4 argumentos)  
* H2: ¿También quieres ir con patrón? → enlace a /excursiones-barco-roses/  
* H2: Qué opinan nuestros clientes (Trustindex)  
* H2: Dónde encontrarnos (mapa)  
* FAQ Schema: 5 preguntas

SUPPORTING PAGE 1  
 URL: /alquiler-barco-sin-licencia-roses/canales-santa-margarita/  
 Meta title: Barco sin licencia en los canales de Santa Margarita — Roses  
 H1: Barco sin licencia en los canales de Santa Margarita  
 KW: canales santa margarita barco (KD 0\)  
 Estado: CONTENIDO REDACTADO — implementar

SUPPORTING PAGE 2  
 URL: /alquiler-barco-sin-licencia-roses/parejas/  
 Meta title: Barco sin licencia en Roses para parejas | Experience Boat  
 H1: Alquiler de barco sin licencia en Roses para parejas  
 KW: barco roses parejas · plan romántico roses  
 Estado: CONTENIDO REDACTADO — implementar

---

### **SILO 2 — CON LICENCIA**

PILLAR PAGE  
 URL nueva: /alquiler-barco-con-licencia-roses/  
 URL antigua: /barco-en-roses/alquiler-de-barco-en-roses/alquiler-de-barcos-con-licencia/  
 Redirect 301: URL antigua → URL nueva  
 Meta title: Alquiler de barco con licencia en Roses | Experience Boat  
 Meta desc: Alquila un barco con licencia en Roses y navega libre por la bahía, el Cap  
 de Creus y las mejores calas de la Costa Brava. Embarcaciones potentes.  
 Reserva ya.  
 H1: Alquiler de barco con licencia en Roses  
 KW principal: alquiler barco con licencia roses (vol 50, KD 0\)  
 Estado: CONTENIDO REDACTADO — implementar  
 Schema: FAQPage (5 preguntas) \+ Product

**Precios a mostrar en esta página (datos reales de flota):**

| Embarcación | ½ día T.Baja | ½ día T.Media | ½ día T.Alta | 1 día T.Baja | 1 día T.Media | 1 día T.Alta |
| ----- | ----- | ----- | ----- | ----- | ----- | ----- |
| Zodiac Medline I | 181 € | 204 € | 285 € | 257 € | 304 € | 380 € |
| Zodiac Medline II | 235 € | 270 € | 310 € | 325 € | 375 € | 430 € |
| Spirit of the Sea | 260 € | 280 € | 340 € | 360 € | 405 € | 460 € |
| Tio Marc Mano | 245 € | 270 € | 320 € | 340 € | 390 € | 450 € |

*Precios con descuento ya aplicado en Spirit of the Sea (−5%) y Tio Marc Mano (−10%).*  
 *Para estancias de 3 y 7 días consultar disponibilidad y precio.*

**Titulación requerida:** mínimo PNB (Patrón de Navegación Básica) o equivalente

**Estructura:**

* H1: Alquiler de barco con licencia en Roses  
* H2: Nuestros barcos con licencia en Roses → Cards: Spirit of the Sea (6,75m · Suzuki DF150 · 12 pax) · Zodiac Medline I (6m · Suzuki DF140 · 11 pax) · Zodiac Medline II (6m · Suzuki DF140 · 11 pax) · Tio Marc Mano (lancha — categoría separada)  
* H2: ¿Qué puedes hacer con un barco con licencia en Roses? → Destinos: Cap de Creus · Cala Culip · Cala Tamariua · Cala Canyelles Petites · Cala Almadraba · bahía de Roses  
* H2: Todo privado — la embarcación es solo para vosotros  
* H2: ¿Cómo funciona el alquiler con licencia? — Información práctica  
* H2: ¿Por qué alquilar con licencia en Experience Boat? (4 argumentos)  
* H2: ¿Prefieres salir con patrón? → enlace a /excursiones-barco-roses/  
* H2: ¿Quieres navegar sin licencia? → enlace a /alquiler-barco-sin-licencia-roses/  
* H2: Qué opinan nuestros clientes  
* H2: Dónde encontrarnos  
* FAQ Schema: 5 preguntas

SUPPORTING PAGE 1  
 URL: /alquiler-barco-con-licencia-roses/bahia-de-roses/  
 Meta title: Barco con licencia en la bahía de Roses | Experience Boat  
 H1: Alquiler de barco con licencia en la bahía de Roses  
 KW: alquiler barco con licencia bahía roses  
 Estado: CONTENIDO REDACTADO — implementar

SUPPORTING PAGE 2  
 URL: /alquiler-lancha-costa-brava/  
 Meta title: Alquiler de lancha en la Costa Brava | Experience Boat  
 H1: Alquiler de lancha en la Costa Brava — Roses  
 KW: alquiler lancha costa brava (vol 60, KD 1, Traffic Potential 350\)  
 Estado: CONTENIDO REDACTADO — implementar  
 NOTA: Fuera del silo estricto pero enlaza a ambas pillar pages de licencia.  
 KD 1 con TP 350 — página de alta prioridad.

---

### **SILO 3 — EXCURSIONES**

PILLAR PAGE  
 URL nueva: /excursiones-barco-roses/  
 URL antigua: /barco-en-roses/excursiones-en-barco-en-roses/  
 Redirect 301: URL antigua → URL nueva  
 Meta title: Excursiones privadas en barco en Roses | Experience Boat  
 Meta desc: Excursiones privadas en barco desde Roses con patrón incluido. Cap de Creus,  
 calas vírgenes y bahía de Roses. Solo tu grupo a bordo. Reserva online ya.  
 H1: Excursiones privadas en barco en Roses  
 KW principal: excursiones en barco roses (vol 50, KD 2\)  
 Estado: CONTENIDO REDACTADO — implementar  
 Schema: FAQPage (5 preguntas) \+ Product

**Precios a mostrar en esta página:**

* Neumáticas con patrón (Spirit of the Sea / Zodiac Medline): medio día 300 € · día completo 600 € → Nota: precio a consultar según disponibilidad  
* Lancha con patrón: medio día 600 € · día completo 1.200 €

**Rutas reales a mencionar:**

* Ruta Cap de Creus: Cala Pelosa \+ Cala Rostella \+ Cala Jóncols (parada chiringuito Cala Pelosa)  
* Baño y Snorkel: calas cristalinas entorno Cap de Creus  
* Sunset Experience: salida al atardecer

**Estructura:**

* H1: Excursiones privadas en barco en Roses  
* H2: Nuestras excursiones desde Roses → Cards: neumáticas con patrón \+ lancha con patrón  
* H2: ¿A dónde vas en nuestras excursiones? → H3: Cap de Creus · H3: Calas del Cap (Pelosa, Rostella, Jóncols) · H3: Bahía de Roses · H3: Canales Santa Margarita  
* H2: ¿Cómo es una excursión con Experience Boat?  
* H2: Todo privado — ningún desconocido a bordo  
* H2: Información práctica (capacidad · duración · qué incluye · precios · antelación · personalización ruta)  
* H2: ¿Por qué elegir una excursión privada con Experience Boat? (4 argumentos)  
* H2: ¿Prefieres llevar tú el barco? → enlaces a con/sin licencia  
* H2: Qué opinan nuestros clientes  
* H2: Dónde encontrarnos  
* FAQ Schema: 5 preguntas

SUPPORTING PAGE 1  
 URL: /excursiones-barco-roses/calas-cap-de-creus/  
 Meta title: Excursión barco calas Cap de Creus desde Roses | Experience Boat  
 H1: Excursión en barco a las calas del Cap de Creus desde Roses  
 KW: excursión barco cap de creus · calas cap de creus en barco  
 Calas: Cala Culip · Cala Jugadora · Cala Fredosa · Cala Canyelles Petites · Cala Almadraba  
 Estado: CONTENIDO REDACTADO — implementar

SUPPORTING PAGE 2  
 URL: /excursiones-barco-roses/grupos/  
 Meta title: Excursión privada en barco para grupos en Roses | Experience Boat  
 H1: Excursión privada en barco para grupos en Roses  
 KW: excursión barco grupos roses · despedida soltero barco roses · team building barco costa brava  
 Precio por persona (referencia): neumática 12 pax día completo → desde 50 €/pax · lancha 12 pax → 100 €/pax  
 Estado: CONTENIDO REDACTADO — implementar  
 NOTA: Mayor ticket medio — prioridad para conversión

---

### **SILO 4 — CANALES SANTA MARGARITA ★**

PILLAR PAGE  
 URL nueva: /canales-santa-margarita/  
 URL antigua: /canal-tour/  
 Redirect 301: /canal-tour/ → /canales-santa-margarita/  
 Meta title: Canales de Santa Margarita en barco — Roses | Experience Boat  
 Meta desc: Explora los canales de Santa Margarita desde el agua. Casas frente al mar,  
 puentes pintorescos y la Costa Brava más auténtica. Salidas privadas desde  
 Roses.  
 H1: Los canales de Santa Margarita en barco — la experiencia más singular de Roses  
 KW principal: canales santa margarita barco (KD 0, SIN COMPETIDORES)  
 KW secundaria: canales santa margarita roses  
 Estado: CONTENIDO REDACTADO — implementar  
 Schema: FAQPage (5 preguntas) \+ TouristAttraction  
 VENTAJA: Ningún competidor tiene página dedicada. KD 0\. Diferencial máximo.

**Datos reales sobre los canales:**

* Red de vías navegables artificiales construida en los años 60  
* \+500 viviendas con acceso directo al agua y embarcadero privado  
* \~10 km de vías navegables protegidas  
* Única urbanización náutica de este tipo en la Costa Brava

**Estructura:**

* H1: Los canales de Santa Margarita en barco — la experiencia más singular de Roses  
* H2: ¿Qué son los canales de Santa Margarita?  
* H2: La ruta por los canales — qué vas a ver → H3: Canales interiores y casas · H3: Los puentes · H3: Salida a la bahía de Roses  
* H2: El punto de salida que ningún competidor tiene  
* H2: Canales de Santa Margarita — opciones disponibles → H3: Sin licencia · H3: Con patrón · H3: Con licencia  
* H2: Santa Margarita, Roses y el Cap de Creus — la ruta completa  
* H2: Cuándo visitar los canales (épocas del año)  
* H2: Preguntas frecuentes  
* H2: Qué opinan quienes han navegado por los canales  
* H2: Dónde encontrarnos  
* FAQ Schema: 5 preguntas \+ TouristAttraction schema

SUPPORTING PAGE 1  
 URL: /canales-santa-margarita/que-ver/  
 Meta title: Qué ver en los canales de Santa Margarita | Experience Boat  
 H1: Qué ver en los canales de Santa Margarita desde el agua  
 KW: qué ver canales santa margarita · santa margarita roses canales  
 Contenido: casas sobre el agua · puentes · fauna (garzas, martines pescadores) · luz al amanecer/atardecer  
 Estado: CONTENIDO REDACTADO — implementar

SUPPORTING PAGE 2  
 URL: /canales-santa-margarita/ruta-cap-de-creus/  
 Meta title: Ruta barco canales Santa Margarita al Cap de Creus | Experience Boat  
 H1: Ruta en barco de los canales de Santa Margarita al Cap de Creus  
 KW: ruta barco santa margarita cap de creus · ruta náutica roses cap de creus  
 Tabla: Distancias y tiempos por tramo (canales 3-4km · bahía 8km · costa norte 12km · total \~45km)  
 Estado: CONTENIDO REDACTADO — implementar

---

### **PRODUCTO — SUNSET EXPERIENCE**

URL: /sunset-experience/ (existente — NO cambiar URL)  
 Meta title: Sunset Experience en barco en Roses | Experience Boat  
 Meta desc: Ver el atardecer desde un barco en Roses es una experiencia que no se olvida.  
 Canales de Santa Margarita, bahía de Roses y el mejor momento del día.  
 Reserva ya.  
 H1: Sunset Experience — el atardecer más bonito de Roses desde el agua  
 KW: sunset barco roses · atardecer barco roses · paseo barco atardecer costa brava  
 Duración: Aproximadamente 2 horas  
 Hora: Variable según época del año — calculada para coincidir con el atardecer exacto  
 Estado: CONTENIDO REDACTADO — reescribir página existente  
 Schema: FAQPage \+ TouristAttraction \+ Product  
 Datos SC: 7 clics / 437 impresiones / pos \~31 — gran potencial de mejora

**Precios Sunset Experience:**

* Sin licencia: desde 225 € (temporada normal) / 250 € (temporada alta)  
* Con patrón neumática: precio a consultar

**Nota:** Dato importante — hora de salida se calcula en función del atardecer del día exacto de reserva.

---

### **FICHAS DE PRODUCTO (barcos individuales)**

Páginas existentes. Acción: optimizar meta titles \+ enlace interno a pillar page correspondiente.

/dream-line-430/  
 Meta title nuevo: Dream Line 430 — Barco sin licencia en Roses | Experience Boat  
 Datos técnicos: 4,3 m · Mercury 15 CV · 4 pax · capota · solarium  
 Enlace interno: → /alquiler-barco-sin-licencia-roses/

/marine-breeze-compass-160-sc/  
 Meta title nuevo: Marine Breeze Compass 160 SC — Sin licencia Roses | Experience Boat  
 Datos técnicos: 4,62 m · Mercury 15 CV · 6 pax · capota · solarium  
 Enlace interno: → /alquiler-barco-sin-licencia-roses/

/remus-450/  
 Meta title nuevo: Remus 450 — Barco sin licencia en Roses | Experience Boat  
 Datos técnicos: 4,5 m · Mercury 15 CV · 6 pax · capota · solarium  
 Enlace interno: → /alquiler-barco-sin-licencia-roses/

/spirit-of-the-sea/  
 Meta title nuevo: Spirit of the Sea — Barco con licencia Roses | Experience Boat  
 Datos técnicos: neumática 6,75 m · Suzuki DF150 · 12 pax  
 Enlace interno: → /alquiler-barco-con-licencia-roses/

/zodiac-medline-i/  
 Meta title nuevo: Zodiac Medline I — Barco con licencia Roses | Experience Boat  
 Datos técnicos: neumática · Suzuki DF140 · 11 pax  
 Enlace interno: → /alquiler-barco-con-licencia-roses/

/zodiac-medline-ii/  
 Meta title nuevo: Zodiac Medline II — Barco con licencia Roses | Experience Boat  
 Datos técnicos: neumática · Suzuki DF140 · 11 pax  
 Enlace interno: → /alquiler-barco-con-licencia-roses/

/tio-marc-mano/  
 Meta title nuevo: Tio Marc Mano — Lancha con licencia en Roses | Experience Boat  
 Datos técnicos: lancha · capacidad y motor a confirmar  
 Enlace interno: → /alquiler-barco-con-licencia-roses/  
 Nota: mayor espacio y autonomía de la flota — ideal grupos y eventos

---

### **BLOG**

Artículo existente 1 — OPTIMIZAR (mantener URL)  
 URL: /ruta-en-barco-al-cap-de-creus/  
 Acción: optimizar meta title y H1. Enlazar a /excursiones-barco-roses/ y /canales-santa-margarita/

Artículo existente 2 — MOVER \+ REDIRECT 301  
 URL actual: /los-mejores-lugares-para-hacer-snorkel-en-la-costa-brava-explorando-las-maravillas-submarinas-de-la-region/  
 URL nueva: /snorkel-costa-brava/  
 Redirect: URL antigua → /snorkel-costa-brava/  
 Nota SC: 1.507 impresiones, pos 73 — URL demasiado larga perjudica CTR

Artículo nuevo 1 — CREAR (contenido redactado)  
 URL: /blog/primera-vez-barco-sin-licencia-roses/  
 Meta title: Primera vez en barco sin licencia en Roses — Guía completa  
 H1: Primera vez en barco sin licencia en Roses — todo lo que necesitas saber  
 KW: primera vez barco sin licencia · es difícil llevar un barco sin licencia  
 Intención: Informacional — usuario en consideración con dudas  
 CTA final: → /alquiler-barco-sin-licencia-roses/  
 Estado: CONTENIDO REDACTADO — implementar

Artículos nuevos pendientes (contenido por redactar):  
 \- /blog/mejores-calas-cap-de-creus/ — KW: mejores calas cap de creus barco (vol 50, KD 0\)  
 \- /blog/cuando-alquilar-barco-roses/ — KW: cuando alquilar barco roses (vol 30, KD 0\)  
 \- /blog/actividades-roses-costa-brava/ — KW: actividades en roses (vol 50, KD 0\) — Aventura Náutica pos.1 actualmente  
 \- /blog/licencia-barco-espana/ — KW: licencia para barco españa (vol 80, KD 0\)

---

### **PÁGINAS FIJAS — SIN CAMBIOS DE URL**

/barcos/ — mantener, optimizar title si necesario  
 /reservas/ — mantener  
 /contacto/ — mantener  
 /sobre-nosotros/ — mantener  
 /politica-de-privacidad/ — mantener  
 /aviso-legal/ — mantener  
 /politica-de-cookies-ue/ — mantener  
 /accesibilidad/ — mantener

### **PÁGINAS A DESINDEXAR URGENTE**

/test/ — añadir \<meta name="robots" content="noindex, nofollow"\>  
 MOTIVO: página de test indexada con contenido duplicado de un artículo de blog

---

## **8\. MAPA DE REDIRECTS 301 — IMPLEMENTAR ANTES DE PUBLICAR**

Configurar en WordPress con plugin Redirection (ya instalado) ANTES de crear las nuevas URLs.

\# SILOS — URLs profundas → URLs raíz  
 /barco-en-roses/alquiler-de-barco-en-roses/alquiler-de-barcos-sin-licencia/  
 → /alquiler-barco-sin-licencia-roses/

/barco-en-roses/alquiler-de-barco-en-roses/alquiler-de-barcos-con-licencia/  
 → /alquiler-barco-con-licencia-roses/

/barco-en-roses/excursiones-en-barco-en-roses/  
 → /excursiones-barco-roses/

/canal-tour/  
 → /canales-santa-margarita/

\# BLOG — URL larga → URL corta  
 /los-mejores-lugares-para-hacer-snorkel-en-la-costa-brava-explorando-las-maravillas-submarinas-de-la-region/  
 → /snorkel-costa-brava/

\# NOTA: /alquiler-de-barcos-sin-licencia/ también aparece en Search Console (1.128 impr)  
 \# Verificar si existe como URL independiente y añadir redirect si es necesario

---

## **9\. SCHEMA MARKUP — IMPLEMENTAR**

### **Schema LocalBusiness — home (en \<head\>)**

{  
 "@context": "https://schema.org",  
 "@type": "LocalBusiness",  
 "name": "Experience Boat",  
 "url": "https://experienceboat.es",  
 "telephone": "+34623995700",  
 "email": "info@experienceboat.es",  
 "address": {  
 "@type": "PostalAddress",  
 "streetAddress": "Av. Clot Franquest Nord",  
 "addressLocality": "Roses",  
 "postalCode": "17480",  
 "addressRegion": "Girona",  
 "addressCountry": "ES"  
 },  
 "geo": {  
 "@type": "GeoCoordinates",  
 "latitude": 42.2713962,  
 "longitude": 3.1343284  
 },  
 "openingHoursSpecification": {  
 "@type": "OpeningHoursSpecification",  
 "dayOfWeek": \["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"\],  
 "opens": "09:00",  
 "closes": "20:00"  
 }  
 }

### **Schema TouristAttraction — /canales-santa-margarita/**

{  
 "@context": "https://schema.org",  
 "@type": "TouristAttraction",  
 "name": "Canales de Santa Margarita — Excursión en barco",  
 "description": "Recorrido en barco por los canales navegables de Santa Margarita en Roses, Costa Brava. Salidas privadas con y sin licencia desde la Marina de Santa Margarita.",  
 "url": "https://experienceboat.es/canales-santa-margarita/",  
 "geo": {  
 "@type": "GeoCoordinates",  
 "latitude": 42.2713962,  
 "longitude": 3.1343284  
 },  
 "address": {  
 "@type": "PostalAddress",  
 "streetAddress": "Av. Clot Franquest Nord",  
 "addressLocality": "Roses",  
 "postalCode": "17480",  
 "addressRegion": "Girona",  
 "addressCountry": "ES"  
 }  
 }

### **Schema FAQPage — todas las pillar pages y páginas de producto**

Implementar en cada pillar page con las 5 preguntas específicas de cada una.

{  
 "@context": "https://schema.org",  
 "@type": "FAQPage",  
 "mainEntity": \[  
 {  
 "@type": "Question",  
 "name": "Pregunta aquí",  
 "acceptedAnswer": {  
 "@type": "Answer",  
 "text": "Respuesta aquí"  
 }  
 }  
 \]  
 }

---

## **10\. VERSIÓN FRANCESA — PLANIFICACIÓN (pendiente de crear)**

**Mercado:** Francia es el mercado extranjero prioritario (mayor volumen en Search Console) **Competidor a superar:** Maxiboats (pos.2 en "location bateau roses") y Boats Mediterrani (pos.1 en "location bateau sans permis roses")

**URLs FR a crear:**

/fr/location-bateau-roses/  
 KW: location bateau roses (vol 100, KD 0\) — 4.121 impresiones SC, pos 11,68

/fr/location-bateau-sans-permis-roses/  
 KW: location bateau sans permis roses (vol 40, KD 0\)  
 KW: location bateau rosas (vol 40, KD 0\) — 2.308 impresiones SC, pos 8,63

/fr/excursion-privee-cap-de-creus/  
 /fr/canaux-santa-margarita/  
 KW: canaux santa margarita roses (vol 10, KD 0\)

**Hreflang — implementar en todas las páginas cuando exista versión FR:**

\<link rel="alternate" hreflang="es" href="https://experienceboat.es/alquiler-barco-sin-licencia-roses/"/\>  
 \<link rel="alternate" hreflang="fr" href="https://experienceboat.es/fr/location-bateau-sans-permis-roses/"/\>  
 \<link rel="alternate" hreflang="x-default" href="https://experienceboat.es/alquiler-barco-sin-licencia-roses/"/\>

**Nota editorial FR:** Traducción adaptada, no literal. Tono cálido. Destacar proximidad con frontera francesa. Usar "Roses" y "Rosas" indistintamente según contexto.

---

## **11\. MAPA DE KEYWORDS — ASIGNACIÓN COMPLETA**

### **Home**

| Keyword | Vol | KD | Rol |
| ----- | ----- | ----- | ----- |
| alquiler barco roses | 200 | 1 | Principal |
| alquiler de barco roses | 200 | 1 | Principal |
| barco roses | 200 | 1 | Principal |
| alquiler barcos roses | 50 | 4 | Secundaria |
| barcos costa brava | 90 | 9 | Secundaria |
| alquilar barco costa brava | 100 | 4 | Secundaria |
| alquiler de barco costa brava | 60 | 7 | Secundaria |
| alquiler barca | 100 | 0 | Secundaria |
| alquiler barca costa brava | 70 | 1 | Secundaria |
| barcos privados | 30 | 3 | Secundaria |

### **/alquiler-barco-sin-licencia-roses/**

| Keyword | Vol | KD | Rol |
| ----- | ----- | ----- | ----- |
| alquiler barco sin licencia roses | 200 | 1 | Principal |
| alquiler de barcos sin licencia roses | 200 | 1 | Principal |
| barco sin licencia roses | 150 | 2 | Principal |
| barcos sin licencia | 250 | 0 | Secundaria |
| barco sin licencia | 300 | 2 | Secundaria |
| alquiler barco sin licencia costa brava | 100 | 2 | Secundaria |
| alquiler de barcos en roses | 10 | 4 | Secundaria |
| rent a boat roses | 20 | 0 | Secundaria |

### **/alquiler-barco-con-licencia-roses/**

| Keyword | Vol | KD | Rol |
| ----- | ----- | ----- | ----- |
| alquiler barco con licencia roses | 50 | 0 | Principal |
| alquiler barco con licencia | 50 | 0 | Principal |
| alquiler de lanchas | 150 | 3 | Secundaria |
| alquiler de lancha | 70 | 0 | Secundaria |
| lancha alquiler | 20 | 5 | Secundaria |
| alquiler lancha costa brava | 60 | 1 | Secundaria (TP 350\) |
| barco de alquiler | 150 | 2 | Secundaria |

### **/excursiones-barco-roses/**

| Keyword | Vol | KD | Rol |
| ----- | ----- | ----- | ----- |
| excursión privada cap de creus | 0 | 0 | Principal |
| excursiones en barco roses | 50 | 2 | Principal |
| paseos en barco roses | 30 | 1 | Secundaria |
| excursión barco bahía de roses | 30 | 0 | Secundaria |
| alquilar barco con patrón roses | 20 | 0 | Secundaria |
| barcos privados roses | 30 | 3 | Secundaria (TP 900\) |

### **/canales-santa-margarita/**

| Keyword | Vol | KD | Rol |
| ----- | ----- | ----- | ----- |
| canales santa margarita barco | 0 | 0 | Principal |
| canales santa margarita roses | 0 | 0 | Principal |
| canal tour roses | 0 | 0 | Secundaria |
| canales santa margarita | 0 | 0 | Secundaria |

### **/fr/location-bateau-roses/**

| Keyword | Vol | KD | Rol |
| ----- | ----- | ----- | ----- |
| location bateau roses | 100 | 0 | Principal |
| location bateau sans permis roses | 40 | 0 | Principal |
| location bateau rosas | 40 | 0 | Secundaria |
| bateau roses | 30 | 7 | Secundaria |
| canaux santa margarita roses | 10 | 0 | Secundaria (página propia FR) |

---

## **12\. COMPETIDORES — DATOS AHREFS**

| Competidor | Dominio | Tráfico org. | Punto fuerte |
| ----- | ----- | ----- | ----- |
| Boats Mediterrani | boatsmediterrani.com | \~330/mes | alquiler barco roses pos.1 · versión FR completa |
| Aventura Náutica | aventuranautica.com | \~286/mes | location bateau empuriabrava pos.1 · motos agua |
| Maxiboats | maxiboats.com | \~62/mes | location bateau roses pos.2 · FR fuerte |
| Rentaboat Roses | rentaboatroses.com | \~37/mes | rent a boat roses pos.1 · SEO orgánico débil |
| ExperienceBoat | experienceboat.es | \~0/mes | Punto de partida — todo por construir |

**Brechas de mercado sin cubrir por ningún competidor:**

* Página canales de Santa Margarita → ExperienceBoat es el único con punto de salida allí  
* Alquiler barco con licencia roses → nadie en pos.1 con página dedicada  
* Excursión privada Cap de Creus → nadie con página dedicada  
* Contenido FR sobre canales → nadie  
* Segmento parejas barco roses → nadie

**Nota:** Boats Mediterrani es el competidor más peligroso en SEO. Tiene estrategia profesional con páginas dedicadas por servicio y versión FR completa. Sin embargo, no tiene nada sobre Santa Margarita ni Cap de Creus — ahí está la apertura.

---

## **13\. PRIORIDADES DE IMPLEMENTACIÓN**

### **FASE 1 — URGENTE (antes de mayo — inicio temporada)**

\[ \] 1\. Definir los 5 redirects 301 en `next.config.ts`  
 \[ \] 2\. Excluir /test/ con `generateMetadata` o `robots.ts`  
 \[ \] 3\. Publicar home con contenido nuevo \+ schema LocalBusiness  
 \[ \] 4\. Publicar /alquiler-barco-sin-licencia-roses/  
 \[ \] 5\. Publicar /alquiler-barco-con-licencia-roses/  
 \[ \] 6\. Publicar /canales-santa-margarita/  
 \[ \] 7\. Implementar componente `<SchemaOrg type="FAQPage" />` en pillar pages

### **FASE 2 — IMPORTANTE (mayo)**

\[ \] 8\. Publicar /excursiones-barco-roses/  
 \[ \] 9\. Reescribir /sunset-experience/  
 \[ \] 10\. Publicar supporting pages Silo 1 (canales sin licencia \+ parejas)  
 \[ \] 11\. Publicar supporting pages Silo 2 (bahía de Roses \+ alquiler lancha)  
 \[ \] 12\. Optimizar meta titles de fichas de producto  
 \[ \] 13\. Redirect snorkel añadido a `next.config.ts`

### **FASE 3 — MEDIO PLAZO (junio)**

\[ \] 14\. Publicar supporting pages Silo 3 (calas Cap de Creus \+ grupos)  
 \[ \] 15\. Publicar supporting pages Silo 4 (qué ver \+ ruta Cap de Creus)  
 \[ \] 16\. Publicar artículo blog: primera vez sin licencia  
 \[ \] 17\. Publicar /alquiler-lancha-costa-brava/  
 \[ \] 18\. Optimizar artículos de blog existentes  
 \[ \] 19\. Iniciar versión francesa (empezar por /fr/location-bateau-roses/)

---

## **14\. CHECKLIST TÉCNICO**

\[ \] Redirects 301 definidos en `next.config.ts` (ver apartado 0 — NO usar plugin WordPress)  
 \[ \] Página /test/ excluida via `robots.txt` o `generateMetadata({ robots: 'noindex,nofollow' })`  
 \[ \] Schema LocalBusiness implementado como componente RSC `<SchemaOrg />` en layout raíz  
 \[ \] Schema FAQPage generado dinámicamente en cada pillar page (ver `/lib/schema.ts`)  
 \[ \] Schema TouristAttraction en /canales-santa-margarita/ y /sunset-experience/  
 \[ \] Canonical tag via `generateMetadata({ alternates: { canonical: '...' } })` en cada page.tsx  
 \[ \] `sitemap.ts` (App Router) genera sitemap dinámico — excluye /test/ y noindex  
 \[ \] `robots.ts` (App Router) configura robots.txt sin bloqueos incorrectos  
 \[ \] Hreflang implementado via `next-intl` — automático cuando exista versión FR  
 \[ \] WP Rocket **eliminado** — rendimiento gestionado por Next.js \+ Vercel Edge Network  
 \[ \] Imágenes via `next/image` con prop `alt` obligatorio (incluir keywords locales)  
 \[ \] Componente `<WhatsAppButton />` (`"use client"`) flotante en layout de páginas de servicio  
 \[ \] Mapa embebido como componente `"use client"` en todas las páginas (coords: 42.2713962, 3.1343284)  
 \[ \] Middleware Next.js gestiona www → non-www redirect (o configurar en Vercel dashboard)  
 \[ \] `next/font` para carga óptima de tipografías (sin layout shift)  
 \[ \] Vercel Analytics habilitado en producción

---

## **15\. WHATSAPP — MENSAJES PRECARGADOS POR PÁGINA**

Usar formato: `https://wa.me/34623995700?text=MESSAGE` (MESSAGE en formato URL-encoded)

Home / General:  
 "Hola, quiero información sobre el alquiler de barcos en Roses"

Sin licencia:  
 "Hola, quiero información sobre el alquiler de barco sin licencia"

Con licencia:  
 "Hola, quiero información sobre el alquiler de barco con licencia"

Excursiones:  
 "Hola, quiero información sobre las excursiones privadas en barco"

Canales:  
 "Hola, quiero información sobre el paseo por los canales de Santa Margarita"

Grupos:  
 "Hola, quiero información para una excursión de grupo"

Sunset:  
 "Hola, quiero información sobre el Sunset Experience"

Primera vez (blog):  
 "Hola, tengo una duda sobre el alquiler sin licencia"

---

## **16\. CANALES DE VENTA — CONTEXTO PARA IMPLEMENTACIÓN**

| Canal | Tipo | Notas para implementación |
| ----- | ----- | ----- |
| experienceboat.es | Web propia | Canal principal — máxima prioridad |
| WhatsApp 623995700 | Venta directa | Botón flotante en todas las páginas de servicio |
| Viator | OTA | No afecta a implementación web |
| GetYourGuide | OTA | No afecta a implementación web |
| Click and Boat | Plataforma náutica | No afecta a implementación web |
| Samboat | Plataforma náutica | No afecta a implementación web |

---

## **17\. TONO Y ESTILO — REGLAS EDITORIALES**

**Atributos de marca:** Joven · Dinámica · Cercana · Familiar · Aventurera

**Tono en textos web:** Informal, directo, entusiasta. Cercano sin ser vulgar. El cliente debe sentir que habla con personas reales que aman el mar.

**Lo que NO es ExperienceBoat:**

* No es una empresa de lujo  
* No usa lenguaje aspiracional ni distante  
* Los barcos no son nuevos ni de alta gama — esto es parte de la autenticidad

**Argumentos de venta que deben aparecer en TODAS las páginas de servicio:**

1. Todo privado — la embarcación es solo para tu grupo  
2. Salida desde los canales de Santa Margarita (punto único en la zona)  
3. Zona excepcional — bahía de Roses \+ Parque Natural del Cap de Creus  
4. Trato directo con Salvador — sin intermediarios

**Keywords geográficas que deben aparecer en TODAS las páginas:** Roses · Costa Brava · Santa Margarita · canales de Santa Margarita · bahía de Roses · Cap de Creus · Parque Natural del Cap de Creus

**Calas a mencionar por nombre real (nunca genéricas):** Cala Pelosa · Cala Rostella · Cala Jóncols · Cala Canyelles Petites · Cala Almadraba · Cala Culip · Cala Jugadora · Cala Fredosa

---

## **18\. GOOGLE BUSINESS PROFILE — PENDIENTE DE OPTIMIZAR**

Categoría principal: Empresa de alquiler de barcos  
 Categorías secundarias:  
 \- Empresa de excursiones en barco  
 \- Servicio de chárter náutico  
 \- Empresa de actividades acuáticas

Descripción (primeros 250 caracteres son los más indexados):  
 "Alquiler de barcos privados en Roses, Costa Brava. Salidas desde los canales de Santa  
 Margarita hacia la Bahía de Roses y el Parque Natural de Cap de Creus. Con o sin licencia.  
 Excursiones privadas con patrón."

Calendario de posts GBP: 8 semanas — pendiente de desarrollar  
 Sistema de captación de reseñas: pendiente de desarrollar

---

## **19\. CITATIONS Y DIRECTORIOS — PENDIENTE**

NAP exacto a usar en todos los directorios (debe ser idéntico en todos):

* Nombre: Experience Boat  
* Dirección: Av. Clot Franquest Nord, 17480 Roses, Girona  
* Teléfono: 623995700

**Directorios prioritarios:**

1. Google Business Profile (verificar y optimizar)  
2. TripAdvisor (crear perfil si no existe)  
3. Páginas Amarillas  
4. costabrava.org (Turisme Costa Brava)  
5. Visit Roses (web oficial del municipio)  
6. Petit Futé (guía turística francesa — mercado FR prioritario)  
7. Routard.com (comunidad viajera francesa muy activa en Costa Brava)  
8. Yelp España

