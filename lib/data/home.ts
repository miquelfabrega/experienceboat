export const homeData = {
  hero: {
    title: 'Alquiler de barco en Roses — Costa Brava',
    description: 'Navega a tu ritmo por la bahía de Roses, los canales de Santa Margarita y el Parque Natural del Cap de Creus. En Experience Boat ofrecemos alquiler de barcos con y sin licencia, excursiones privadas con patrón y paseos al atardecer. Todo privado — solo tu grupo, ningún desconocido a bordo.',
    ctaPrimary: {
      text: 'Ver barcos disponibles',
      href: '/barcos/'
    },
    ctaSecondary: {
      text: 'Hablar por WhatsApp',
      href: 'https://wa.me/34623995700?text=Hola%2C%20quiero%20informaci%C3%B3n%20sobre%20el%20alquiler%20de%20barcos%20en%20Roses'
    },
    socialProof: 'Más de 500 salidas privadas · Valoración 5★ en Google',
    slides: [
      {
        id: 1,
        src: '/images/hero/hero-1.jpg',
        alt: 'Alquiler de barco en Roses — navega por la bahía y el Cap de Creus, Costa Brava',
      },
      {
        id: 2,
        src: '/images/hero/hero-2.jpg',
        alt: 'Barcos sin licencia en Roses — salida privada desde los canales de Santa Margarita',
      },
    ]
  },
  services: {
    title: 'Nuestros barcos en Roses',
    description: 'Cuatro formas de disfrutar el mar en Roses. Elige la que mejor encaja con tu grupo.',
    items: [
      {
        title: 'Alquiler de barco sin licencia en Roses',
        tag: 'Sin licencia',
        text: 'No necesitas experiencia previa ni titulación náutica. Nuestros barcos sin licencia están diseñados para que cualquiera pueda salir al mar desde el primer minuto. Perfectos para familias, parejas y grupos de amigos que quieren explorar la bahía de Roses a su propio ritmo. Salen desde los canales de Santa Margarita y pueden llegar hasta las calas del Cap de Creus.',
        cta: 'Ver barcos sin licencia →',
        href: '/alquiler-barco-sin-licencia-roses/',
        image: '/images/services/sin-licencia.jpg' // TODO: replace with IMG_0545
      },
      {
        title: 'Alquiler de barco con licencia en Roses',
        tag: 'Con licencia',
        text: 'Si tienes titulación náutica, tenemos las embarcaciones que estás buscando. Barcos potentes para navegar libremente por la Costa Brava norte: la bahía de Roses, el cabo de Creus, Cala Canyelles, Cala Almadraba y todo lo que encuentres por el camino. Sin patrón, sin límites de ruta.',
        cta: 'Ver barcos con licencia →',
        href: '/alquiler-barco-con-licencia-roses/',
        image: 'https://picsum.photos/seed/conlicencia-roses/800/600' // TODO: replace with IMG_1308
      },
      {
        title: 'Experiencias en barco en Roses',
        tag: 'Con patrón',
        text: '¿Prefieres que alguien más lleve el timón? Ofrecemos dos tipos de salida privada: excursiones al Cap de Creus con patrón —ruta adaptada a tu grupo— y el Sunset Experience, una salida al atardecer por los canales y la bahía de Roses. Ninguna excursión compartida. Solo tu grupo a bordo.',
        cta: 'Ver experiencias →',
        href: '/experiencias-barco-roses/',
        image: '/images/services/excursiones.jpg'
      },
      {
        title: 'Salimos desde los canales de Santa Margarita',
        tag: 'Canal Tour',
        text: 'Nuestro punto de salida es la Marina de Santa Margarita, en la entrada de Roses. Una ubicación única: los canales de Santa Margarita son en sí mismos una experiencia, con casas frente al agua y un ambiente que solo se puede vivir desde los canales.',
        cta: 'Ver cómo llegar →',
        href: '/canales-santa-margarita/',
        image: '/images/services/canales.jpg'
      }
    ]
  },
  whyUs: {
    title: '¿Por qué elegir Experience Boat?',
    items: [
      {
        icon: 'Users',
        title: 'Todo privado',
        text: 'Tu embarcación es solo para tu grupo. Sin compartir barco con desconocidos, a diferencia de otras excursiones de la zona.'
      },
      {
        icon: 'Anchor',
        title: 'Con o sin licencia',
        text: 'Tenemos barcos para todos los perfiles: debutantes totales, familias con niños y navegantes con titulación.'
      },
      {
        icon: 'MapPin',
        title: 'Zona única',
        text: 'Operamos en una de las zonas más singulares de la Costa Brava: bahía de Roses, canales de Santa Margarita y Parque Natural del Cap de Creus.'
      },
      {
        icon: 'MessageCircle',
        title: 'Trato directo',
        text: 'Reserva por WhatsApp o web. Sin intermediarios, sin sorpresas. Si tienes dudas, Tomàs o Max te responden personalmente.'
      }
    ]
  },
  trust: {
    title: 'Qué opinan de nosotros',
    reviews: [
      {
        id: 1,
        author: 'Mar G.',
        rating: 5,
        text: 'Alquilamos el Remus 450 para una tarde en familia y fue perfecto. Muy fácil de llevar, los canales de Santa Margarita son una pasada y llegamos hasta Cala Almadraba. Todo el barco para nosotros solos.'
      },
      {
        id: 2,
        author: 'Thomas D.',
        rating: 5,
        text: 'Excursion privée magnifique vers le Cap de Creus. Salvador connaît chaque crique. On a nagé dans des eaux turquoise sans personne autour. À refaire absolument.'
      },
      {
        id: 3,
        author: 'Carles B.',
        rating: 5,
        text: 'Teníamos licencia y alquilamos el Spirit of the Sea para un grupo de 10. Trato inmejorable, barco en perfecto estado. La zona es espectacular y la salida desde los canales ya es una experiencia en sí misma.'
      }
    ],
    stats: '500+ salidas · 5★ valoración · 8 barcos disponibles'
  },
  location: {
    title: 'Salimos desde los canales de Santa Margarita',
    description: 'Nuestro punto de salida es la Marina de Santa Margarita, en la entrada de Roses. Una ubicación única: los canales de Santa Margarita son en sí mismos una experiencia, con casas frente al agua y un ambiente que solo se puede vivir desde los canales.',
    address: 'Av. Clot Franquest Nord, 17480 Roses, Girona',
    phone: '+34 623 99 57 00',
    email: 'info@experienceboat.es',
    coordinates: {
      lat: 42.2713962,
      lng: 3.1343284
    },
    cta: {
      text: 'Ver cómo llegar',
      href: '/contacto/'
    }
  },
  closing: {
    title: '¿Listo para salir desde los canales de Santa Margarita?',
    ctaPrimary: {
      text: 'Ver barcos disponibles',
      href: '/barcos/'
    },
    ctaSecondary: {
      text: 'Escribir por WhatsApp',
      href: 'https://wa.me/34623995700?text=Hola%2C%20quiero%20informaci%C3%B3n%20sobre%20el%20alquiler%20de%20barcos%20en%20Roses'
    }
  }
};