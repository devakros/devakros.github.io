export interface Testimonial {
  name: string;
  role: string;
  avatar: string;
  /** Each string is a paragraph. */
  quote: string[];
  profileUrl: string;
  /** Copy not yet supplied by Victor — keeps placeholders from shipping unnoticed. */
  placeholder?: boolean;
}

/**
 * Only Santiago Gallo's testimonial exists in the Figma file (Component 24).
 * The frame shows seven avatars, so the other six are real headshots from the
 * file with PENDIENTE copy until Victor supplies the quotes.
 */
export const testimonials: Testimonial[] = [
  {
    name: "PENDIENTE",
    role: "PENDIENTE",
    avatar: "/img/avatar-1.png",
    quote: ["PENDIENTE: testimonio por confirmar."],
    profileUrl: "#",
    placeholder: true,
  },
  {
    name: "PENDIENTE",
    role: "PENDIENTE",
    avatar: "/img/avatar-2.png",
    quote: ["PENDIENTE: testimonio por confirmar."],
    profileUrl: "#",
    placeholder: true,
  },
  {
    name: "PENDIENTE",
    role: "PENDIENTE",
    avatar: "/img/avatar-3.png",
    quote: ["PENDIENTE: testimonio por confirmar."],
    profileUrl: "#",
    placeholder: true,
  },
  {
    name: "Santiago Gallo",
    role: "Cofundador en Verticcal",
    avatar: "/img/avatar-4.png",
    quote: [
      "Victor es el diseñador UI más responsable y creativo que conozco. Resolvió incontables desafíos en los productos de NuHome con su extraordinaria proactividad, al proponer ideas creativas cuyo impacto se reflejó en las métricas de nuestros productos.",
      "Destaco su atención al detalle, su inclinación a la excelencia y su genuina preocupación por el cumplimiento de las metas y del bienestar del equipo.",
    ],
    profileUrl: "#",
  },
  {
    name: "PENDIENTE",
    role: "PENDIENTE",
    avatar: "/img/avatar-5.png",
    quote: ["PENDIENTE: testimonio por confirmar."],
    profileUrl: "#",
    placeholder: true,
  },
  {
    name: "PENDIENTE",
    role: "PENDIENTE",
    avatar: "/img/avatar-6.png",
    quote: ["PENDIENTE: testimonio por confirmar."],
    profileUrl: "#",
    placeholder: true,
  },
  {
    name: "PENDIENTE",
    role: "PENDIENTE",
    avatar: "/img/avatar-7.png",
    quote: ["PENDIENTE: testimonio por confirmar."],
    profileUrl: "#",
    placeholder: true,
  },
];

/** Santiago is the one Figma shows selected. */
export const defaultTestimonial = 3;
