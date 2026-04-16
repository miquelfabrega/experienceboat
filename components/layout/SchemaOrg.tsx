// ─── Actualizar estos valores con los datos reales de Google Business Profile ───
// reviewCount: número real de reseñas en GBP (verificar en google.com/business)
// GBP_URL: URL del perfil de Google Business Profile (google.com/maps/place/...)
// GETYOURGUIDE_URL: URL de la actividad en GetYourGuide
// CIVITATIS_URL: URL de la actividad en Civitatis
const REVIEW_COUNT = 47; // TODO: reemplazar con el número real de reseñas GBP
const GBP_URL = 'https://maps.google.com/?q=Experience+Boat+Roses'; // TODO: URL exacta GBP
const GETYOURGUIDE_URL = ''; // TODO: añadir cuando esté disponible
const CIVITATIS_URL = '';    // TODO: añadir cuando esté disponible

export default function SchemaOrg() {
  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://www.experienceboat.es/#local-business",
    "name": "Experience Boat",
    "url": "https://www.experienceboat.es",
    "telephone": "+34623995700",
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
      "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
      "opens": "08:00",
      "closes": "20:00"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": 5.0,
      "reviewCount": REVIEW_COUNT,
      "bestRating": 5,
      "worstRating": 1
    },
    "sameAs": [
      "https://www.instagram.com/experienceboat_roses/",
      "https://www.tripadvisor.com/Attraction_Review-g10060936-d27527826-Reviews-Experience_Boat-Roses_Province_of_Girona_Catalonia.html",
      GBP_URL,
      ...(GETYOURGUIDE_URL ? [GETYOURGUIDE_URL] : []),
      ...(CIVITATIS_URL ? [CIVITATIS_URL] : []),
    ]
  };

  const touristAttraction = {
    "@context": "https://schema.org",
    "@type": "TouristAttraction",
    "@id": "https://www.experienceboat.es/#tourist-attraction",
    "name": "Experience Boat — Alquiler de barcos en Roses",
    "description": "Alquiler de barcos con y sin licencia en Roses, Costa Brava. Excursiones, sunset experience y canal tour por los canales de Santa Margarita.",
    "url": "https://www.experienceboat.es",
    "touristType": ["Aventura", "Náutica", "Naturaleza"],
    "isAccessibleForFree": false,
    "availableLanguage": ["Spanish", "French", "English", "Catalan"],
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 42.2713962,
      "longitude": 3.1343284
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(touristAttraction) }}
      />
    </>
  );
}