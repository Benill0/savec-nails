export interface PageSEO {
  title: string;
  description: string;
  image?: string;
  keywords?: string;
}

export const pagesData: Record<string, PageSEO> = {
  home: {
    title: "Savec Nails | Manicura Rusa, Uñas Acrílicas y Nail Art en Lima",
    description:
      "Expertas en el cuidado de tus manos. Especialistas en uñas acrílicas, gel, manicura rusa y diseños personalizados. ¡Reserva tu cita hoy!",
    image: "/images/og/home-og.jpg",
    keywords: "uñas lima, manicura rusa, uñas acrílicas savec, nail art perú",
  },
  about: {
    title: "Nosotros | Pasión por el Arte en tus Uñas",
    description:
      "Conoce la historia de Savec Nails. Un equipo apasionado por la belleza y el detalle, dedicado a ofrecerte una experiencia premium.",
    image: "/images/og/about-og.jpg",
  },
  services: {
    title: "Servicios | Manicura, Pedicura y Estilismo Profesional",
    description:
      "Desde uñas de diseño hasta corte y color. Descubre nuestra carta de servicios pensada para resaltar tu belleza natural.",
    image: "/images/og/services-og.jpg",
  },
  gallery: {
    title: "Galería de Diseños | Inspiración Savec Nails",
    description:
      "Explora nuestro portafolio de trabajos: acrílicos, diseños a mano alzada y las últimas tendencias en nail art.",
    image: "/images/og/gallery-og.jpg",
  },
  location: {
    title: "Ubicación | Encuentra nuestro Estudio en Lima",
    description:
      "Visítanos en nuestro local. Horarios de atención, dirección exacta y mapa para que llegues fácilmente a tu cita.",
    image: "/images/og/location-og.jpg",
  },
  contact: {
    title: "Contacto | Reserva tu Cita en Savec Nails",
    description:
      "¿Tienes dudas o quieres agendar? Escríbenos por WhatsApp o llámanos. Estamos listas para atenderte.",
    image: "/images/og/contact-og.jpg",
  },
};
