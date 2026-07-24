import { withBase } from "../lib/base";

export interface Testimonial {
  name: string;
  role: string;
  avatar: string;
  /** Each string is a paragraph. */
  quote: string[];
  profileUrl: string;
  /** INVENTED filler — must be replaced with a real quote or removed before launch. */
  placeholder?: boolean;
}

/**
 * ⚠️  Only Santiago Gallo's testimonial is real — it is the one quote that
 * exists in the Figma file (Component 24).
 *
 * The other six are INVENTED placeholder copy so the carousel reads correctly
 * during review. They are attached to real photographs of real people that came
 * out of Victor's Figma file, which means shipping them as-is would be putting
 * words in the mouths of identifiable individuals. Before launch each one must
 * either be replaced with a quote that person actually gave, or deleted.
 *
 * `placeholder: true` is the flag to filter on.
 */
export const testimonials: Testimonial[] = [
  {
    name: "Daniela Restrepo",
    role: "Head of Product en Nubia",
    avatar: "/img/avatar-1.png",
    quote: [
      "Victor entra a un proyecto y lo primero que hace es entender el negocio, no la pantalla. Eso cambió por completo la forma en que priorizamos nuestro roadmap.",
      "Su capacidad para traducir requerimientos difusos en flujos concretos nos ahorró meses de trabajo.",
    ],
    profileUrl: "#",
    placeholder: true,
  },
  {
    name: "Andrés Melo",
    role: "CTO en Fintrack",
    avatar: "/img/avatar-2.png",
    quote: [
      "Trabajar con Victor es de las pocas veces que el handoff no fue una fuente de fricción. Cada componente venía con sus estados, sus medidas y sus casos borde resueltos.",
      "El equipo de desarrollo dejó de adivinar y empezó a construir.",
    ],
    profileUrl: "#",
    placeholder: true,
  },
  {
    name: "Carolina Duque",
    role: "Product Manager en Zenda",
    avatar: "/img/avatar-3.png",
    quote: [
      "Lo que más valoro es que Victor cuestiona el brief cuando hace falta. No entrega lo que le pides, entrega lo que el problema necesita, y siempre con el argumento por delante.",
    ],
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
    name: "Mariana Ochoa",
    role: "Design Lead en Praxis Health",
    avatar: "/img/avatar-5.png",
    quote: [
      "Montó nuestro sistema de diseño desde cero y, más importante, nos enseñó a mantenerlo. Un año después el equipo sigue trabajando sobre esa base sin que se haya degradado.",
    ],
    profileUrl: "#",
    placeholder: true,
  },
  {
    name: "Julián Vergara",
    role: "Founder en Loopstack",
    avatar: "/img/avatar-6.png",
    quote: [
      "Llegamos con una idea y salimos con un producto validado. Victor nos acompañó desde las entrevistas con usuarios hasta el lanzamiento, y en cada etapa supo cuándo empujar y cuándo simplificar.",
      "Para una startup en etapa temprana, esa claridad vale más que cualquier entregable.",
    ],
    profileUrl: "#",
    placeholder: true,
  },
  {
    name: "Laura Cárdenas",
    role: "Head of Design en Altamar",
    avatar: "/img/avatar-7.png",
    quote: [
      "Es el tipo de diseñador que deja el equipo mejor de lo que lo encontró. Documenta, comparte criterio y sube el estándar de todos los que trabajan a su alrededor.",
    ],
    profileUrl: "#",
    placeholder: true,
  },
];

// Base-aware avatar paths for the GitHub Pages subpath.
for (const t of testimonials) t.avatar = withBase(t.avatar);

/** Santiago is the one Figma shows selected — and the only real quote. */
export const defaultTestimonial = 3;
