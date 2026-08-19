import { withBase } from "../lib/base";

export interface Project {
  slug: string;
  title: string;
  /** Card thumbnail for the Home slider. */
  img: string;
  alt: string;
  /** Tags shown on the case-study hero (from each project's Figma hero). */
  tags: string[];
  /** Tags shown on the slider card — Victor's card designs differ from the
   *  hero tags. Falls back to `tags` when omitted. */
  cardTags?: string[];
  desc: string;
  /** Full case-study frame render, used as the page body until each case
   *  study is built out as real markup. */
  frame: string;
  frameHeight: number;
  year?: string;
  role?: string;
  /** Copy not yet supplied by Victor — keeps placeholders from shipping. */
  placeholder?: boolean;
  /** True once the case study exists as real markup rather than a frame render. */
  built?: boolean;

  /* ── Fields below drive the /proyectos index (frame 1127:6636) ────────
     They are the SAME strings each case-study hero already shows, lifted
     here so the index and the case study cannot drift apart. */

  /** Headline split into a bright half and a muted half. `mutedLead` puts the
      muted half first — Coca-Cola is the one project whose muted clause comes
      second, which is why this is a flag and not a fixed order. */
  headline: { base: string; muted: string; mutedLead?: boolean };
  /** Card body. `**bold**` marks the runs the frame sets in bold. */
  intro: string;
  /** Tags as the index frame lists them; differs from both `tags` (case-study
      hero) and `cardTags` (Home slider), so it gets its own field. */
  listTags: string[];
}

export const projects: Project[] = [
  {
    slug: "coca-cola",
    title: "ICP Tool Coca-Cola",
    img: "/img/proj-coca.png",
    alt: "ICP Tool para Coca-Cola",
    tags: ["UI", "Prototype", "Landing Page", "Design System"],
    desc: "Unificando la gestión de presupuestos de Coca-Cola: de la fragmentación a un sistema escalable.",
    frame: "/img/case/coca-cola.png",
    frameHeight: 3393,
    year: "2025",
    role: "Product Design",
    built: true,
    headline: {
      base: "Unificando la gestión de presupuestos de Coca-Cola:",
      muted: "de la fragmentación a un sistema escalable",
    },
    intro:
      "**Investment Committee Prioritization Tool (ICPT)** es una plataforma desarrollada para **Coca-Cola**, diseñada para gestionar, parametrizar y organizar presupuestos y campañas de manera eficiente alrededor del mundo. Este sistema facilita la toma de decisiones estratégicas dentro del comité de inversión, asegurando una distribución óptima de recursos y alineando las iniciativas con los objetivos empresariales.",
    listTags: ["UX", "UI", "Prototype", "Landing Page", "Design System"],
  },
  {
    slug: "polestar",
    title: "Polestar",
    img: "/img/proj-polestar.webp",
    alt: "Caso de estudio Polestar",
    tags: ["UI", "Prototype", "Landing Page", "Design System"],
    cardTags: ["UX", "UI", "Responsive", "Landing Page", "User Testing"],
    desc: "Rediseño integral de Polestar Pilates: Elevando la conversión mediante UX estratégica.",
    frame: "/img/case/polestar.png",
    frameHeight: 3847,
    year: "2025",
    role: "Product Design",
    built: true,
    headline: {
      muted: "Rediseño integral de Polestar Pilates:",
      base: "Elevando la conversión mediante UX estratégica",
      mutedLead: true,
    },
    intro:
      "Más que un rediseño visual, este proyecto fue una intervención estratégica para transformar una plataforma de educación en Pilates con una tasa de rebote del 70%. Mi rol como UX/UI y Product Owner fue alinear la propuesta de valor con las necesidades reales del usuario para maximizar las ventas de cursos.",
    listTags: ["UI", "Prototype", "Landing Page", "Design System"],
  },
  {
    slug: "leancore-studio",
    title: "LeanCore Studio",
    img: "/img/proj-leancore.webp",
    alt: "Caso de estudio LeanCore Studio",
    tags: ["UI", "Prototype", "Landing Page", "Design System"],
    cardTags: ["UI", "WebApp", "Design System"],
    desc: "LeanCore Studio: Simplificando la complejidad financiera a través del diseño",
    frame: "/img/case/leancore-studio.png",
    frameHeight: 3579,
    year: "2026",
    role: "Product Design",
    built: true,
    headline: {
      muted: "LeanCore Studio:",
      base: "Simplificando la complejidad financiera a través del diseño",
      mutedLead: true,
    },
    intro:
      "El reto fue transformar procesos financieros altamente técnicos y abstractos en un sistema de automatización intuitivo. Mi rol como diseñador UX/UI fue diseñar una interfaz que no solo operara con precisión, sino que generara la confianza necesaria para que el usuario automatice sus decisiones financieras.",
    listTags: ["UX", "UI", "WebApp", "Design System", "Prototype"],
  },
  {
    slug: "leancore-web",
    title: "LeanCore — Sitio Web",
    img: "/img/proj-leancore-web-2x.webp",
    alt: "Caso de estudio del sitio web de LeanCore",
    tags: ["UI", "Prototype", "Landing Page", "Design System"],
    cardTags: ["UI", "WebApp", "Design System"],
    desc: "Sitio web de LeanCore: comunicando un producto fintech complejo con un mensaje claro que convierte.",
    frame: "/img/case/leancore-web.png",
    frameHeight: 3709,
    year: "2026",
    role: "Product Design",
    built: true,
    headline: {
      muted: "Rediseño de LeanCore:",
      base: "Arquitectura de información y UI minimalista para la confianza fintech",
      mutedLead: true,
    },
    intro:
      "En el sector fintech, la interfaz es sinónimo de seguridad. El rediseño integral de LeanCore se centró en eliminar el ruido visual para transmitir absoluta confianza y profesionalismo, reestructurando y filtrando la información clave para que los usuarios comprendan su ecosistema de productos sin fricción.",
    listTags: ["UX", "UI", "Prototype", "Landing Page", "Design System"],
  },
];

// Make image paths base-aware so they resolve under the GitHub Pages subpath.
for (const p of projects) {
  p.img = withBase(p.img);
  p.frame = withBase(p.frame);
}

export const bySlug = (slug: string) => projects.find((p) => p.slug === slug);
