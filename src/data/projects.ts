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
  },
  {
    slug: "polestar",
    title: "Polestar",
    img: "/img/proj-polestar.png",
    alt: "Caso de estudio Polestar",
    tags: ["UI", "Prototype", "Landing Page", "Design System"],
    cardTags: ["UX", "UI", "Responsive", "Landing Page", "User Testing"],
    desc: "Rediseño integral de Polestar Pilates: Elevando la conversión mediante UX estratégica.",
    frame: "/img/case/polestar.png",
    frameHeight: 3847,
    year: "2025",
    role: "Product Design",
    built: true,
  },
  {
    slug: "leancore-studio",
    title: "LeanCore Studio",
    img: "/img/proj-leancore.png",
    alt: "Caso de estudio LeanCore Studio",
    tags: ["UI", "Prototype", "Landing Page", "Design System"],
    cardTags: ["UI", "WebApp", "Design System"],
    desc: "LeanCore Studio: Simplificando la complejidad financiera a través del diseño",
    frame: "/img/case/leancore-studio.png",
    frameHeight: 3579,
    year: "2026",
    role: "Product Design",
    built: true,
  },
];

// Make image paths base-aware so they resolve under the GitHub Pages subpath.
for (const p of projects) {
  p.img = withBase(p.img);
  p.frame = withBase(p.frame);
}

export const bySlug = (slug: string) => projects.find((p) => p.slug === slug);
