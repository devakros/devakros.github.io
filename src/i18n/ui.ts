import type { Lang } from "./index";

/**
 * Every user-facing string that is not case-study content.
 *
 * The Spanish column is the copy that already shipped, character for
 * character. The English column is a translation of it and nothing more: no
 * claim, metric, client or credential is added, removed or upgraded here.
 */
export const ui = {
  es: {
    // --- Navigation ------------------------------------------------------
    "nav.aria": "Principal",
    "nav.projects": "Proyectos",
    "nav.resume": "Resumen",
    "nav.cta": "¡Hablemos!",
    "nav.burger": "Abrir menú",
    "nav.burgerClose": "Cerrar menú",
    "nav.langSwitch": "View in English",
    "nav.langCode": "EN",

    // --- Logo ------------------------------------------------------------
    "logo.aria": "Victor Vivas — UX UI Designer",

    // --- Home ------------------------------------------------------------
    "home.title": "Victor Vivas — IA Powered product designer",
    "home.description":
      "Product designer y estratega de experiencia de usuario. +8 años creando soluciones de UX/UI con impacto para Coca-Cola, Polestar y LeanCore.",
    "home.hero.lead": "IA",
    "home.hero.base": "Powered product designer",
    "home.hero.muted": "+ estratega de experiencia de usuario",

    "home.approach.base":
      "Mi enfoque combina estética moderna con principios de usabilidad y diseño tradicional,",
    "home.approach.muted":
      "creando productos digitales que no son solo plataformas, sino experiencias.",

    "home.kpi1.label": "Años creando soluciones de UX/UI con impacto",
    "home.kpi1.body":
      "Mi sólida trayectoria me capacita para liderar y ejecutar con éxito cualquier tipo de proyecto, alineando siempre los principios de usabilidad y experiencia de usuario con los objetivos de negocio.",
    "home.kpi2.label": "Empresas que han confiado en mi experiencia",
    "home.kpi2.body":
      "He colaborado con empresas de diversas escalas, desde grandes corporaciones hasta medianas y pequeñas empresas, además de impulsar la estrategia de startups en pleno crecimiento.",
    "home.kpi3.label": "Proyectos donde he dejado mi huella y mi corazón",
    "home.kpi3.body":
      "He participado en proyectos de diferentes escalas y modelos, desde soluciones B2B hasta B2C, con experiencia clave en industrias como proptech, fintech y healthtech, entre otras.",

    "home.tools.aria": "Herramientas que uso",
    "home.testimonials.title": "Mira lo que están diciendo de mi...",

    // --- Projects index --------------------------------------------------
    "projects.title": "Proyectos seleccionados — Victor Vivas",
    "projects.description":
      "Una colección de casos de estudio donde la estrategia de producto, la arquitectura de información y el diseño UI resuelven problemas complejos de negocio.",
    "projects.hero.muted": "Proyectos seleccionados:",
    "projects.hero.base": "Estrategia, diseño e impacto real",
    "projects.hero.desc":
      "Una colección de casos de estudio donde la estrategia de producto, la arquitectura de información y el diseño UI se unen para resolver problemas complejos de negocio y transformar la experiencia de los usuarios.",
    "projects.cta": "Ver proyecto",

    // --- Shared case-study chrome ---------------------------------------
    "case.back": "Volver",
    "case.launchedBy": "Lanzado por",
    "case.related.title": "Proyectos clave que he ayudado a hacer realidad",
    "case.related.desc":
      "Trabajos seleccionados de proyectos que se lanzaron al mercado. Problemas reales, soluciones reales.",
    "case.related.cta": "Ver todos los proyectos",

    // --- Project slider --------------------------------------------------
    "slider.prev": "Proyecto anterior",
    "slider.next": "Proyecto siguiente",
    "slider.dots": "Proyectos",

    // --- Showreel --------------------------------------------------------
    "reel.preview": "Showreel de {name} (preview)",
    "reel.sound": "Showreel de {name}, con sonido",
    "reel.play": "Reproducir con sonido",
    "reel.close": "Cerrar",

    // --- Testimonials ----------------------------------------------------
    "testimonials.aria": "Testimonios",
    "testimonials.profile": "Ir a su perfil",

    // --- Footer ----------------------------------------------------------
    "footer.aria": "Pie de página",

    // --- Contact drawer --------------------------------------------------
    "contact.close": "Cerrar",
    "contact.title": "¿Empezamos?",
    "contact.sub": "Estoy listo para escuchar tu propuesta. Escríbeme y hablemos de negocios.",
    "contact.name": "Nombre",
    "contact.email": "Correo",
    "contact.message": "¿Qué tienes en mente?",
    "contact.submit": "Iniciar conversación",
    "contact.sending": "Enviando…",
    "contact.ok": "¡Listo! Tu mensaje ya va en camino. Te respondo pronto.",
    "contact.error": "No se pudo enviar. Intenta de nuevo.",
    "contact.errorNetwork": "No se pudo enviar. Revisa tu conexión e intenta de nuevo.",
    "contact.subject": "Nuevo mensaje desde el portafolio",
  },

  en: {
    // --- Navigation ------------------------------------------------------
    "nav.aria": "Main",
    "nav.projects": "Projects",
    "nav.resume": "Resume",
    "nav.cta": "Let's talk!",
    "nav.burger": "Open menu",
    "nav.burgerClose": "Close menu",
    "nav.langSwitch": "Ver en español",
    "nav.langCode": "ES",

    // --- Logo ------------------------------------------------------------
    "logo.aria": "Victor Vivas, UX UI Designer",

    // --- Home ------------------------------------------------------------
    "home.title": "Victor Vivas | AI Powered product designer",
    "home.description":
      "Product designer and user experience strategist. +8 years creating UX/UI solutions with impact for Coca-Cola, Polestar and LeanCore.",
    "home.hero.lead": "AI",
    "home.hero.base": "Powered product designer",
    "home.hero.muted": "+ user experience strategist",

    "home.approach.base":
      "My approach combines modern aesthetics with usability principles and traditional design,",
    "home.approach.muted":
      "creating digital products that are not only platforms, but experiences.",

    "home.kpi1.label": "Years creating UX/UI solutions with impact",
    "home.kpi1.body":
      "My solid track record allows me to lead and deliver any kind of project successfully, and I always align usability and user experience principles with business goals.",
    "home.kpi2.label": "Companies that have trusted my experience",
    "home.kpi2.body":
      "I have worked with companies of many sizes, from large corporations to medium and small businesses, and I have also driven the strategy of startups in full growth.",
    "home.kpi3.label": "Projects where I left my mark and my heart",
    "home.kpi3.body":
      "I have taken part in projects of different sizes and models, from B2B to B2C solutions, with key experience in industries such as proptech, fintech and healthtech, among others.",

    "home.tools.aria": "Tools I use",
    "home.testimonials.title": "See what people are saying about me...",

    // --- Projects index --------------------------------------------------
    "projects.title": "Selected projects | Victor Vivas",
    "projects.description":
      "A collection of case studies where product strategy, information architecture and UI design solve complex business problems.",
    "projects.hero.muted": "Selected projects:",
    "projects.hero.base": "Strategy, design and real impact",
    "projects.hero.desc":
      "A collection of case studies where product strategy, information architecture and UI design come together to solve complex business problems and transform the user experience.",
    "projects.cta": "View project",

    // --- Shared case-study chrome ---------------------------------------
    "case.back": "Back",
    "case.launchedBy": "Launched by",
    "case.related.title": "Key projects I have helped bring to life",
    "case.related.desc":
      "Selected work from projects that went to market. Real problems, real solutions.",
    "case.related.cta": "View all projects",

    // --- Project slider --------------------------------------------------
    "slider.prev": "Previous project",
    "slider.next": "Next project",
    "slider.dots": "Projects",

    // --- Showreel --------------------------------------------------------
    "reel.preview": "Showreel by {name} (preview)",
    "reel.sound": "Showreel by {name}, with sound",
    "reel.play": "Play with sound",
    "reel.close": "Close",

    // --- Testimonials ----------------------------------------------------
    "testimonials.aria": "Testimonials",
    "testimonials.profile": "Go to profile",

    // --- Footer ----------------------------------------------------------
    "footer.aria": "Footer",

    // --- Contact drawer --------------------------------------------------
    "contact.close": "Close",
    "contact.title": "Shall we start?",
    "contact.sub": "I am ready to hear your proposal. Write to me and let's talk business.",
    "contact.name": "Name",
    "contact.email": "Email",
    "contact.message": "What do you have in mind?",
    "contact.submit": "Start the conversation",
    "contact.sending": "Sending…",
    "contact.ok": "Done! Your message is on its way. I will reply soon.",
    "contact.error": "The message could not be sent. Please try again.",
    "contact.errorNetwork": "The message could not be sent. Check your connection and try again.",
    "contact.subject": "New message from the portfolio",
  },
} as const;

export type UIKey = keyof (typeof ui)["es"];

/** `t("nav.projects")` for the given locale, with `{name}` style placeholders. */
export function useTranslations(lang: Lang) {
  return function t(key: UIKey, vars?: Record<string, string>): string {
    const raw: string = (ui[lang] as Record<string, string>)[key] ?? ui.es[key];
    if (!vars) return raw;
    return raw.replace(/\{(\w+)\}/g, (_, name) => vars[name] ?? `{${name}}`);
  };
}
