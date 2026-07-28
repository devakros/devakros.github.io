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
 * ⚠️ Two things to verify with Victor:
 *  - Michelle Penna and Lina Almeida currently carry the SAME quote — one of
 *    them is almost certainly a placeholder that still needs Lina's real words.
 *  - A couple of original typos were kept verbatim ("birllantes" → brillantes,
 *    "habilitadas" → habilidades). Fix at the source if the people are okay with it.
 *  - No profile URLs were provided, so "Ir a su perfil" points nowhere (#).
 */
export const testimonials: Testimonial[] = [
  {
    name: "Pedro Sanin",
    role: "CEO Blaster",
    avatar: "/img/avatar-1.png",
    quote: [
      "Victor is a great U/UI designer. He's fast, really fast, but thorough, attentive to details and precise. He was also great to have on our team, always had a good attitude, and happy to share his skills with the rest of our team. I highly recommend him, both as a professional, and as a person.",
    ],
    profileUrl: "#",
  },
  {
    name: "Alejandro Malagón",
    role: "Product Lead",
    avatar: "/img/avatar-2.png",
    quote: [
      "Working with Victor was a great experience, the type of experience that you believe people can create great products with business impact through teamwork.",
      "We collaborate on a very complex product that allowed a Fortune 100 company to manage finances across the globe on product trio mindset where Victor brought value on understanding the user and business problems and land useful solutions within the product experience.",
      "The tech lead and myself (Product Manager) were happy to have Victor in the team, not only because his design skills but his human way of working.",
      "Anyone wondering if he is any good? Feel free to reach out and talk further on his work.",
    ],
    profileUrl: "#",
  },
  {
    name: "Michelle Penna",
    role: "Web Developer en Digital FENSA",
    avatar: "/img/avatar-3.png",
    quote: [
      "Victor, es un gran diseñador, realizó diseños de otro mundo con ideas innovadoras y bastante birllantes, me encanto la forma de trabajar lo detallista que es, es un gran compañero de trabajo y nuestras reuniones eran bastante amenas y divertidas.",
    ],
    profileUrl: "#",
  },
  {
    name: "Eduardo Méndez",
    role: "Cofundador en Pukara",
    avatar: "/img/avatar-4.png",
    quote: [
      "Víctor es el diseñador UI más ingenioso y comprometido que he tenido el placer de trabajar. En Pukara, enfrentó y superó innumerables retos en nuestros productos, siempre con una actitud proactiva y aportando ideas innovadoras que realmente marcaron la diferencia en nuestros resultados.",
      "Admiro su meticulosa atención al detalle, su pasión por la excelencia, y su sincera dedicación tanto al logro de los objetivos como al bienestar del equipo.",
    ],
    profileUrl: "#",
  },
  {
    name: "Lina Almeida",
    role: "Web Developer Junior en Pukara",
    avatar: "/img/avatar-5.png",
    quote: [
      "Victor, es un gran diseñador, realizó diseños de otro mundo con ideas innovadoras y bastante birllantes, me encanto la forma de trabajar lo detallista que es, es un gran compañero de trabajo y nuestras reuniones eran bastante amenas y divertidas.",
    ],
    profileUrl: "#",
  },
  {
    name: "Henry Cabello",
    role: "Senior Software Engineer",
    avatar: "/img/avatar-6.png",
    quote: [
      "Trabajar con Victor me demostró que destaca mucho por estar constantemente innovando, buscando entender y mejorar el producto desde la raíz, usando sus habilitadas en UI combinado con psicología con el fin de darle al usuario la mejor experiencia siempre.",
      "Me encantó la habilidad que tiene para percibir imperfecciones durante el desarrollo y hacerles saber a los desarrolladores qué pixel mejorar…👌",
    ],
    profileUrl: "#",
  },
];

// Base-aware avatar paths for the GitHub Pages subpath.
for (const t of testimonials) t.avatar = withBase(t.avatar);

/** Eduardo's quote leads — a strong, mid-length Spanish testimonial. */
export const defaultTestimonial = 3;
