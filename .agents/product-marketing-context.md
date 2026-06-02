# Product Marketing Context — Experience Boat

*Última actualización: junio 2026*
*Fuente: `experienceboat1.md` (documento de empresa) + código del proyecto Next.js (source of truth). Este archivo lo leen el resto de skills de marketing antes de ejecutarse.*

---

## Product Overview

**One-liner:** Alquiler de barcos (con y sin licencia) y excursiones náuticas **100 % privadas** en Roses (Costa Brava), con salida única desde los canales de Santa Margarita hacia la bahía de Roses y el Parque Natural del Cap de Creus.

**Qué hace:** Experience Boat (Experience Bay SL) alquila embarcaciones con y sin titulación y ofrece excursiones privadas con patrón. Cada salida es exclusiva para el grupo del cliente; nunca se comparte el barco. Opera de **abril a octubre**, 09:00–20:00, desde la Marina de Santa Margarita (Roses, Girona).

**Categoría de producto (cómo nos buscan):** alquiler de barcos / excursiones en barco en Roses–Costa Brava. Keywords reales: «alquiler barco roses», «location bateau roses/rosas», «barco sin licencia roses», «excursiones en barco roses».

**Tipo de producto:** servicio turístico/náutico B2C, local y **estacional**. Tres líneas: (1) alquiler sin licencia, (2) alquiler con licencia, (3) excursiones/experiencias con patrón (incl. Sunset).

**Modelo de negocio y precios:** reserva directa (web + widget de reservas + WhatsApp) y OTAs/plataformas náuticas (SamBoat y Click&Boat como prioritarias, GetYourGuide, Manawa, Viator). Precio por embarcación, duración y temporada (Baja / Media = jun+sep / Alta = jul–ago). Combustible no incluido.

**Tarifas de referencia (source of truth `fleet.ts`, flyer oficial):**
- **Sin licencia** (hasta 5 pax, sin titulación): **1 h desde 70 € · 2 h desde 135 € · ½ día (4 h) desde 165 € · día completo (8 h) desde 225 €.**
- **Con licencia** (requiere PNB o equivalente; patrón opcional): ½ día desde 195 € · día completo desde 285 € (según modelo, hasta 12 pax).
- **Sunset Experience** (2–3 h, privado): desde 160 €. Extras acuáticos: wakeboard 50 € · donut 40 € · ski 40 € · paddle surf 50 €.
- **Flota:** 8 embarcaciones propias activas (3 sin licencia + 5 con licencia).

---

## Target Audience

**Mercado:** turistas y residentes que quieren vivir el mar de la Costa Brava de forma activa, privada y personal — sin intermediarios ni masificación.

**Mercados geográficos (Search Console):**
- **Francia ★** (mayor mercado extranjero; «location bateau roses/rosas») y **España** (base nacional) → prioridad ALTA.
- **Cataluña/local** (locale CA), Bélgica, Países Bajos, Alemania → MEDIA.
- Reino Unido / otros vía OTAs → BAJA-MEDIA.
- **Dispositivo:** 78 % móvil → copy corto, CTAs visibles, mobile-first.

**Caso de uso principal:** pasar medio día o un día en el mar, en privado, explorando calas del Cap de Creus, la bahía de Roses y los canales de Santa Margarita, con o sin patrón.

**Jobs to be done:**
- «Quiero una experiencia exclusiva en el mar solo para mi grupo, sin compartir con desconocidos.»
- «Quiero disfrutar del Cap de Creus y calas inaccesibles por tierra, a mi ritmo.»
- «Quiero algo más que la playa: una actividad memorable para una ocasión especial (pareja, familia, despedida, cumpleaños).»

---

## Personas / Segmentos (negocio B2C)

| Segmento | Qué le importa | Reto / tensión | Valor que prometemos |
| --- | --- | --- | --- |
| **Familias con hijos** | Seguridad, diversión, privacidad | Que sea seguro y entretenido para niños | Aguas tranquilas (canales/bahía), patrón, calas con baño |
| **Parejas** | Romanticismo, exclusividad, belleza | Encontrar algo especial y a solas | Sunset Experience privado; día completo en calas |
| **Grupos de amigos (4–10)** | Diversión, baño, libertad | Espacio y flexibilidad para el grupo | Neumáticas grandes (Orange Kiwi, Spirit), día completo |
| **Eventos y celebraciones** | Experiencia memorable, capacidad | Organizar algo distinto para el grupo | Excursiones privadas, embarcaciones grandes |
| **Turistas Costa Brava (FR/ES/CA…)** | Descubrir la zona como un local | No quedarse solo en la playa | Salida desde los canales + Cap de Creus auténtico |

---

## Problems & Pain Points

**Problema central:** la mayoría de opciones náuticas en la zona son **excursiones masivas compartidas** (golondrinas, barcos llenos de desconocidos) o, en el otro extremo, **charter de lujo** caro y distante. Falta el punto medio: una experiencia **privada, accesible y auténtica**.

**Por qué las alternativas se quedan cortas:**
- Excursiones compartidas → sin intimidad, itinerario rígido, ritmo impuesto.
- Día de playa → masificación, sin acceso a calas remotas del Cap de Creus.
- Charter premium → precio elevado y tono aspiracional/frío.

**Qué les cuesta:** perder la ocasión especial por compartir barco; no poder llegar a las calas que solo se ven desde el mar; pagar de más por «lujo» que no necesitan.

**Tensión emocional:** querer una experiencia exclusiva y genuina, con la duda de «no tengo licencia / no sé navegar» y el temor a acabar en una excursión turística más.

---

## Competitive Landscape

**Directos (alquiler/excursiones en la zona):** Boats Mediterrani (el más fuerte en SEO, versión FR completa), Maxiboats (FR fuerte), Aventura Náutica (Empuriabrava, motos de agua), Rentaboat Roses. → Ninguno tiene página dedicada a los **canales de Santa Margarita** ni al **Cap de Creus** como nosotros.

**Secundarios (mismo problema, otra solución):** golondrinas/excursiones compartidas, alquiler en Empuriabrava, paseos turísticos masivos.

**Indirectos (enfoque alternativo):** día de playa/chiringuito, otras actividades de ocio en Roses, no hacer nada en el mar.

**Brechas sin cubrir (oportunidad):** canales de Santa Margarita (KD 0, sin competidores), alquiler con licencia en Roses, excursión privada Cap de Creus, contenido FR sobre canales, segmento «parejas barco roses».

---

## Differentiation

**Diferenciadores clave:**
1. **Privacidad total** — la embarcación es solo para tu grupo. Nunca se comparte. (DIFERENCIADOR PRINCIPAL)
2. **Salida desde los canales de Santa Margarita** — punto único en la zona; ningún competidor lo tiene.
3. **Entorno natural único** — bahía de Roses + Parque Natural del Cap de Creus; calas inaccesibles por tierra.
4. **Flexibilidad total** — sin itinerario fijo; el grupo elige ritmo, paradas y duración.
5. **Patrones locales y cercanos** — **Salvador «Toto»** y el equipo conocen cada rincón; no eres un número.
6. **Accesible para todos** — no hace falta licencia ni experiencia (barcos sin titulación + opción con patrón).

**Por qué es mejor:** experiencia personal y auténtica al precio de un alquiler normal, en un entorno que pocos aprovechan, con trato humano de marca persona.

**Por qué nos eligen:** combinación de privacidad + ubicación (canales/Cap de Creus) + cercanía del equipo + accesibilidad sin pretensiones de lujo.

---

## Objections & Anti-Persona

| Objeción | Respuesta |
| --- | --- |
| «¿Necesito licencia o experiencia?» | No. Tenemos barcos sin titulación; briefing antes de salir, y opción con patrón. |
| «¿Son barcos de lujo? ¿Caro?» | No vendemos lujo: barcos funcionales y bien mantenidos, privados y accesibles. Lo privado no significa caro (sin licencia desde 70 €/h). |
| «¿Acabaré en una excursión turística masiva?» | Nunca. Todas las salidas son 100 % privadas, solo para tu grupo. |

**Anti-persona:** quien busca un yate/charter de lujo premium, o una fiesta masiva compartida lo más barata posible. No somos ni una cosa ni la otra.

---

## Switching Dynamics (4 fuerzas JTBD)

- **Push:** decepción con excursiones compartidas/golondrinas; playas masificadas; ganas de algo más memorable.
- **Pull:** privacidad total + salida por los canales + Cap de Creus + la cara cercana de Salvador «Toto» en TikTok/IG.
- **Habit:** reservar «la típica» excursión turística o quedarse en la playa.
- **Anxiety:** «no tengo licencia / no sé navegar» → se resuelve con barcos sin licencia y opción con patrón; «¿estará bien el barco?» → mantenimiento y seguro incluidos.

---

## Customer Language

**Cómo describen el problema/deseo (verbatim de reseñas):**
- «Todo el barco para nosotros solos.»
- «La salida desde los canales ya es una experiencia en sí misma.»
- «Salvador connaît chaque crique. On a nagé dans des eaux turquoise sans personne autour.»

**Cómo nos describen:** cercano, privado, auténtico, fácil de llevar, trato inmejorable, zona espectacular.

**Palabras que SÍ usamos:** privado · exclusivo · calas · Cap de Creus · bahía de Roses · aguas cristalinas · a vuestro ritmo · aventura · auténtico · Salvador «Toto» · Costa Brava · libre · personalizado · cercano.

**Palabras que EVITAMOS:** premium · lujo · high-end · élite · de ensueño · inigualable · revolucionario · sofisticado · clase mundial · líder del mercado.

**Glosario:**
| Término | Significado |
| --- | --- |
| Sin licencia | Barco con motor homologado para navegar sin titulación (hasta 5 pax) |
| Con licencia | Embarcación que requiere PNB o equivalente; patrón opcional |
| Canales de Santa Margarita | Red de ~10 km de vías navegables en Roses; nuestro punto de salida único |
| Sunset Experience | Salida privada al atardecer (2–3 h) |

---

## Brand Voice

**Marca persona:** la voz es la de **Salvador «Toto»** (patrón, anfitrión y rostro de la marca), respaldado por **Tomàs y el equipo fundador**. Hablamos en primera persona, de tú a tú — no como una corporación. El crecimiento en **TikTok e Instagram** impulsa este giro a marca persona.

**Tono:** cercano · entusiasta · directo · auténtico · profesional.
**Estilo:** informal pero cuidado en la web; muy cercano y rápido en WhatsApp/redes; con keywords y «private/exclusive» en OTAs.
**Personalidad:** joven · dinámica · cercana · familiar · aventurera.

> Ajustes pendientes a nivel web: parte del contenido aún dice «Tomàs y Max»; debe migrarse principalmente a **Salvador**, manteniendo al equipo fundador.

---

## Proof Points

- **8 embarcaciones propias** + salida desde un enclave **único** (canales de Santa Margarita).
- **Reseñas 5★** (ES/FR) destacando privacidad, trato y entorno.
- Tracción SEO: homepage ~851 clics / ~47.500 impresiones (Search Console); mercado FR líder en impresiones («location bateau roses» 4.121 impr).
- Acceso a zonas que pocos competidores trabajan: Cap de Creus, calas del Parque Natural, canales.

**Temas de valor → prueba:**
| Tema | Prueba |
| --- | --- |
| Privacidad | «Todo el barco para nosotros solos» (reseña) |
| Conocimiento local | «Salvador connaît chaque crique» (reseña FR) |
| Ubicación única | Único operador con salida desde los canales de Santa Margarita |

---

## Goals

**Objetivo de negocio:** aumentar las **reservas directas** (web/WhatsApp/widget) reduciendo dependencia de OTAs, y crecer en el mercado **francés** y **local (CA/ES)**.

**Acción de conversión principal:** reserva por la web (widget de reservas `/reservas/`) y cierre por **WhatsApp** (`+34 623 99 57 00`).

**Métricas actuales / contexto:** web Next.js en 4 idiomas (ES/FR/EN/CA), host canónico `www.experienceboat.es`; punto de partida orgánico bajo frente a competidores (todo por construir), con ventajas claras en canales de Santa Margarita (KD 0) y Cap de Creus.

---

## Notas de uso para otras skills

- **Precios:** usar siempre las tarifas de `lib/data/fleet.ts` / este documento. Sin licencia se tarifica por **1 h / 2 h / ½ día (4 h) / día completo (8 h)** — NO por 3/7 días.
- **Idiomas:** todo contenido nuevo se replica en **ES, FR, EN y CA**.
- **Cara de marca:** Salvador «Toto» (no «Tomàs y Max»).
- **Nunca** posicionar como lujo/premium. Privado ≠ caro.
