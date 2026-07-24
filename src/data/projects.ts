import { withBase } from "../lib/base";

export interface Project {
  slug: string;
  title: string;
  /** Card thumbnail for the Home slider. */
  img: string;
  alt: string;
  tags: string[];
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
    tags: ["UI", "Web Design", "Motion"],
    desc: "PENDIENTE: descripción del caso de estudio Polestar.",
    frame: "/img/case/polestar.png",
    frameHeight: 3847,
    year: "2024",
    role: "Product Design",
    placeholder: true,
  },
  {
    slug: "leancore-studio",
    title: "LeanCore Studio",
    img: "/img/proj-leancore.png",
    alt: "Caso de estudio LeanCore Studio",
    tags: ["UI", "Design System", "Branding"],
    desc: "PENDIENTE: descripción del caso de estudio LeanCore Studio.",
    frame: "/img/case/leancore-studio.png",
    frameHeight: 3579,
    year: "2024",
    role: "Product Design",
    placeholder: true,
  },
];

// Make image paths base-aware so they resolve under the GitHub Pages subpath.
for (const p of projects) {
  p.img = withBase(p.img);
  p.frame = withBase(p.frame);
}

export const bySlug = (slug: string) => projects.find((p) => p.slug === slug);
