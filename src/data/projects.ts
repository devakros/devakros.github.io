import { withBase } from "../lib/base";
import { defaultLang, type Lang } from "../i18n";

/** Copy that changes with the locale. Everything else is shared. */
export interface ProjectCopy {
  title: string;
  alt: string;
  desc: string;
  /** Headline split into a bright half and a muted half. `mutedLead` puts the
      muted half first — Coca-Cola is the one project whose muted clause comes
      second, which is why this is a flag and not a fixed order. */
  headline: { base: string; muted: string; mutedLead?: boolean };
  /** Card body. `**bold**` marks the runs the frame sets in bold. */
  intro: string;
}

export interface Project extends ProjectCopy {
  slug: string;
  /** Card thumbnail for the Home slider. */
  img: string;
  /** Tags shown on the case-study hero (from each project's Figma hero). */
  tags: string[];
  /** Tags shown on the slider card — Victor's card designs differ from the
   *  hero tags. Falls back to `tags` when omitted. */
  cardTags?: string[];
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
  /** Tags as the index frame lists them; differs from both `tags` (case-study
      hero) and `cardTags` (Home slider), so it gets its own field. */
  listTags: string[];
}

interface ProjectDef extends Omit<Project, keyof ProjectCopy> {
  copy: Record<Lang, ProjectCopy>;
}

const defs: ProjectDef[] = [
  {
    slug: "coca-cola",
    img: "/img/proj-coca.png",
    tags: ["UI", "Prototype", "Landing Page", "Design System"],
    frame: "/img/case/coca-cola.png",
    frameHeight: 3393,
    year: "2025",
    role: "Product Design",
    built: true,
    listTags: ["UX", "UI", "Prototype", "Landing Page", "Design System"],
    copy: {
      es: {
        title: "ICP Tool Coca-Cola",
        alt: "ICP Tool para Coca-Cola",
        desc: "Unificando la gestión de presupuestos de Coca-Cola: de la fragmentación a un sistema escalable.",
        headline: {
          base: "Unificando la gestión de presupuestos de Coca-Cola:",
          muted: "de la fragmentación a un sistema escalable",
        },
        intro:
          "**Investment Committee Prioritization Tool (ICPT)** es una plataforma desarrollada para **Coca-Cola**, diseñada para gestionar, parametrizar y organizar presupuestos y campañas de manera eficiente alrededor del mundo. Este sistema facilita la toma de decisiones estratégicas dentro del comité de inversión, asegurando una distribución óptima de recursos y alineando las iniciativas con los objetivos empresariales.",
      },
      en: {
        title: "ICP Tool Coca-Cola",
        alt: "ICP Tool for Coca-Cola",
        desc: "Unifying budget management at Coca-Cola: from fragmentation to a scalable system.",
        headline: {
          base: "Unifying budget management at Coca-Cola:",
          muted: "from fragmentation to a scalable system",
        },
        intro:
          "**Investment Committee Prioritization Tool (ICPT)** is a platform developed for **Coca-Cola**, designed to manage, parameterise and organise budgets and campaigns efficiently around the world. This system supports strategic decisions inside the investment committee, it secures an optimal distribution of resources and it aligns the initiatives with the business objectives.",
      },
    },
  },
  {
    slug: "polestar",
    img: "/img/proj-polestar.webp",
    tags: ["UI", "Prototype", "Landing Page", "Design System"],
    cardTags: ["UX", "UI", "Responsive", "Landing Page", "User Testing"],
    frame: "/img/case/polestar.png",
    frameHeight: 3847,
    year: "2025",
    role: "Product Design",
    built: true,
    listTags: ["UI", "Prototype", "Landing Page", "Design System"],
    copy: {
      es: {
        title: "Polestar",
        alt: "Caso de estudio Polestar",
        desc: "Rediseño integral de Polestar Pilates: Elevando la conversión mediante UX estratégica.",
        headline: {
          muted: "Rediseño integral de Polestar Pilates:",
          base: "Elevando la conversión mediante UX estratégica",
          mutedLead: true,
        },
        intro:
          "Más que un rediseño visual, este proyecto fue una intervención estratégica para transformar una plataforma de educación en Pilates donde el 70% de las fugas se concentraba en el home. Mi rol como UX/UI y Product Owner fue alinear la propuesta de valor con las necesidades reales del usuario para maximizar las ventas de cursos.",
      },
      en: {
        title: "Polestar",
        alt: "Polestar case study",
        desc: "Full redesign of Polestar Pilates: raising conversion through strategic UX.",
        headline: {
          muted: "Full redesign of Polestar Pilates:",
          base: "Raising conversion through strategic UX",
          mutedLead: true,
        },
        intro:
          "More than a visual redesign, this project was a strategic intervention to transform a Pilates education platform where 70% of the drop-offs were concentrated on the home page. My role as UX/UI and Product Owner was to align the value proposition with the real needs of the user in order to maximise course sales.",
      },
    },
  },
  {
    slug: "leancore-studio",
    img: "/img/proj-leancore.webp",
    tags: ["UI", "Prototype", "Landing Page", "Design System"],
    cardTags: ["UI", "WebApp", "Design System"],
    frame: "/img/case/leancore-studio.png",
    frameHeight: 3579,
    year: "2026",
    role: "Product Design",
    built: true,
    listTags: ["UX", "UI", "WebApp", "Design System", "Prototype"],
    copy: {
      es: {
        title: "LeanCore Studio",
        alt: "Caso de estudio LeanCore Studio",
        desc: "LeanCore Studio: Simplificando la complejidad financiera a través del diseño",
        headline: {
          muted: "LeanCore Studio:",
          base: "Simplificando la complejidad financiera a través del diseño",
          mutedLead: true,
        },
        intro:
          "El reto fue transformar procesos financieros altamente técnicos y abstractos en un sistema de automatización intuitivo. Mi rol como diseñador UX/UI fue diseñar una interfaz que no solo operara con precisión, sino que generara la confianza necesaria para que el usuario automatice sus decisiones financieras.",
      },
      en: {
        title: "LeanCore Studio",
        alt: "LeanCore Studio case study",
        desc: "LeanCore Studio: simplifying financial complexity through design",
        headline: {
          muted: "LeanCore Studio:",
          base: "Simplifying financial complexity through design",
          mutedLead: true,
        },
        intro:
          "The challenge was to turn highly technical and abstract financial processes into an intuitive automation system. My role as a UX/UI designer was to design an interface that not only operated with precision, but also built the confidence a user needs to automate their financial decisions.",
      },
    },
  },
  {
    slug: "leancore-web",
    img: "/img/proj-leancore-web-2x.webp",
    tags: ["UI", "Prototype", "Landing Page", "Design System"],
    cardTags: ["UI", "WebApp", "Design System"],
    frame: "/img/case/leancore-web.png",
    frameHeight: 3709,
    year: "2026",
    role: "Product Design",
    built: true,
    listTags: ["UX", "UI", "Prototype", "Landing Page", "Design System"],
    copy: {
      es: {
        title: "LeanCore — Sitio Web",
        alt: "Caso de estudio del sitio web de LeanCore",
        desc: "Sitio web de LeanCore: comunicando un producto fintech complejo con un mensaje claro que convierte.",
        headline: {
          muted: "Rediseño de LeanCore:",
          base: "Arquitectura de información y UI minimalista para la confianza fintech",
          mutedLead: true,
        },
        intro:
          "En el sector fintech, la interfaz es sinónimo de seguridad. El rediseño integral de LeanCore se centró en eliminar el ruido visual para transmitir absoluta confianza y profesionalismo, reestructurando y filtrando la información clave para que los usuarios comprendan su ecosistema de productos sin fricción.",
      },
      en: {
        title: "LeanCore Website",
        alt: "LeanCore website case study",
        desc: "LeanCore website: communicating a complex fintech product with a clear message that converts.",
        headline: {
          muted: "LeanCore redesign:",
          base: "Information architecture and a minimalist UI for fintech trust",
          mutedLead: true,
        },
        intro:
          "In the fintech sector the interface is a synonym for safety. The full redesign of LeanCore focused on the removal of visual noise in order to convey absolute trust and professionalism. It restructured and filtered the key information so that users understand the product ecosystem without friction.",
      },
    },
  },
];

for (const def of defs) {
  def.img = withBase(def.img);
  def.frame = withBase(def.frame);
}

const flatten = (def: ProjectDef, lang: Lang): Project => {
  const { copy, ...rest } = def;
  return { ...rest, ...(copy[lang] ?? copy[defaultLang]) };
};

/** Every project, with its copy resolved for one locale. */
export const getProjects = (lang: Lang): Project[] => defs.map((def) => flatten(def, lang));

/** One project by slug, with its copy resolved for one locale. */
export const bySlug = (slug: string, lang: Lang): Project | undefined => {
  const def = defs.find((d) => d.slug === slug);
  return def && flatten(def, lang);
};

/** Slugs in display order — used by the sitemap, which has no locale. */
export const projectSlugs = defs.map((d) => d.slug);
