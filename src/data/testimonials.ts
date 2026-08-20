import { withBase } from "../lib/base";

export interface Testimonial {
  name: string;
  role: string;
  avatar: string;
  /** Each string is a paragraph. */
  quote: string[];
  profileUrl: string;
  placeholder?: boolean;
}

/**
 * Real testimonials supplied by Victor (transcribed from his source).
 *
 * Typos from the source were corrected ("birllantes" → "brillantes",
 * "habilitadas" → "habilidades", missing accents).
 *
 * Michelle Penna's quote is verbatim from Victor — not a placeholder.
 *
 * Profile URLs supplied 2026-08-20 (LinkedIn), wired into "Ir a su perfil".
 */
export const testimonials: Testimonial[] = [
  {
    name: "Pedro Sanin",
    role: "CEO Blaster",
    avatar: "/img/avatar-1.webp",
    quote: [
      "Victor is a great U/UI designer. He's fast, really fast, but thorough, attentive to details and precise. He was also great to have on our team, always had a good attitude, and happy to share his skills with the rest of our team. I highly recommend him, both as a professional, and as a person.",
    ],
    profileUrl: "https://www.linkedin.com/in/pedro-sanin/",
  },
  {
    name: "Alejandro Malagón",
    role: "Product Lead",
    avatar: "/img/avatar-2.webp",
    quote: [
      "Working with Victor was a great experience, the type of experience that you believe people can create great products with business impact through teamwork.",
      "We collaborate on a very complex product that allowed a Fortune 100 company to manage finances across the globe on product trio mindset where Victor brought value on understanding the user and business problems and land useful solutions within the product experience.",
      "The tech lead and myself (Product Manager) were happy to have Victor in the team, not only because his design skills but his human way of working.",
      "Anyone wondering if he is any good? Feel free to reach out and talk further on his work.",
    ],
    profileUrl: "https://www.linkedin.com/in/alejandromalagon/",
  },
  {
    name: "Michelle Penna",
    role: "Web Developer en Digital FENSA",
    avatar: "/img/avatar-3.webp",
    quote: [
      "Victor, es un gran diseñador, realizó diseños de otro mundo con ideas innovadoras y bastante brillantes, me encantó la forma de trabajar lo detallista que es, es un gran compañero de trabajo y nuestras reuniones eran bastante amenas y divertidas.",
    ],
    profileUrl: "https://www.linkedin.com/in/michellepennat/",
  },
  {
    name: "Eduardo Méndez",
    role: "Cofundador en Pukara",
    avatar: "/img/avatar-4.webp",
    quote: [
      "Víctor es el diseñador UI más ingenioso y comprometido que he tenido el placer de trabajar. En Pukara, enfrentó y superó innumerables retos en nuestros productos, siempre con una actitud proactiva y aportando ideas innovadoras que realmente marcaron la diferencia en nuestros resultados.",
      "Admiro su meticulosa atención al detalle, su pasión por la excelencia, y su sincera dedicación tanto al logro de los objetivos como al bienestar del equipo.",
    ],
    profileUrl: "https://www.linkedin.com/in/eduardo-mendez-devops/",
  },
  {
    name: "Luis Bernardo",
    role: "Supervisor directo en Blaster",
    avatar: "/img/avatar-5.webp",
    quote: [
      "Como supervisor directo de Víctor en Blaster, puedo decir que trabajar con él fue una experiencia excepcional. No solo es un diseñador de interfaz sumamente rápido y eficiente, sino que mantiene un nivel de rigor y atención al detalle impecable en cada entrega. Más allá de su talento técnico, Víctor es un gran compañero y un activo valioso para cualquier equipo: siempre proactivo, con una actitud excelente y genuinamente dispuesto a colaborar y potenciar a los demás. Lo recomiendo sin dudarlo, tanto por su calidad profesional como humana.",
    ],
    profileUrl: "https://www.linkedin.com/in/luis-bernardo-perez-ramirez/",
  },
  {
    name: "Henry Cabello",
    role: "Senior Software Engineer",
    avatar: "/img/avatar-6.webp",
    quote: [
      "Trabajar con Victor me demostró que destaca mucho por estar constantemente innovando, buscando entender y mejorar el producto desde la raíz, usando sus habilidades en UI combinadas con psicología con el fin de darle al usuario la mejor experiencia siempre.",
      "Me encantó la habilidad que tiene para percibir imperfecciones durante el desarrollo y hacerles saber a los desarrolladores qué pixel mejorar…👌",
    ],
    profileUrl: "https://www.linkedin.com/in/cabello986/",
  },
  {
    name: "Santiago Gallo",
    role: "Cofundador en Verticcal",
    avatar: "/img/avatar-7.webp",
    quote: [
      "Victor es el diseñador UI más responsable y creativo que conozco. Resolvió incontables desafíos en los productos de NuHome con su extraordinaria proactividad, al proponer ideas creativas cuyo impacto se reflejó en las métricas de nuestros productos.",
      "Destaco su atención al detalle, su inclinación a la excelencia y su genuina preocupación por el cumplimiento de las metas y del bienestar del equipo.",
    ],
    profileUrl: "https://www.linkedin.com/in/sgallorestrepo/",
  },
];

// Base-aware avatar paths for the GitHub Pages subpath.
for (const t of testimonials) t.avatar = withBase(t.avatar);

/** Eduardo's quote leads — a strong, mid-length Spanish testimonial. */
export const defaultTestimonial = 3;
