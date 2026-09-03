import { withBase } from "../lib/base";
import { defaultLang, type Lang } from "../i18n";

/** Bulleted point with a bold lead-in term, inline. An empty term renders plain. */
export interface Bullet {
  term: string;
  body: string;
}

export interface Block {
  /** Muted eyebrow heading (#4A5856, 20/30). */
  heading: string;
  /** Prominent lead sentence (#B3D6D3, 25/30). */
  lead?: string;
  /** Body paragraphs (16/300). A newline inside a string becomes a line break. */
  paras?: string[];
  bullets?: Bullet[];
}

/** Geometry of one screenshot. Shared by both locales; only the alt differs. */
export interface ShotGeom {
  src: string;
  w: number;
  h: number;
  half?: boolean;
  bed?: boolean;
}

export interface Shot extends ShotGeom {
  alt: string;
}

export interface CaseCopy {
  /** `<meta name="description">` for the case-study page. */
  description: string;
  /** Two-tone hero headline. */
  headline: { base: string; muted: string };
  /** Hero paragraph. `**bold**` marks the runs the frame sets in bold. */
  intro: string;
  blocks: Block[];
  /** Alt text, one per entry of `shots`, in the same order. */
  shotAlts: string[];
}

export interface CaseDef {
  slug: string;
  /** Render the muted half of the headline BEFORE the bright half. */
  mutedLead?: boolean;
  tags: string[];
  meta: { year: string; client: string };
  shots: ShotGeom[];
  copy: Record<Lang, CaseCopy>;
}

/**
 * Case-study bodies for every project, in both locales.
 *
 * The Spanish is Victor's copy exactly as it already shipped. The English is a
 * translation of that Spanish and nothing else: no extra client, metric,
 * responsibility or outcome appears on the English side that is absent from
 * the Spanish side.
 */
const defs: CaseDef[] = [
  // ── Coca-Cola ────────────────────────────────────────────────────────────
  {
    slug: "coca-cola",
    tags: ["UI", "Prototype", "Landing Page", "Design System"],
    meta: { year: "2025", client: "Coca Cola" },
    shots: [
      { src: "/img/case/coca/shot-1.png", w: 678, h: 535 },
      { src: "/img/case/coca/shot-2.png", w: 678, h: 653 },
      { src: "/img/case/coca/shot-3.png", w: 678, h: 517 },
    ],
    copy: {
      es: {
        description:
          "Investment Committee Prioritization Tool (ICPT): unificando la gestión de presupuestos de Coca-Cola, de la fragmentación a un sistema escalable.",
        headline: {
          base: "Unificando la gestión de presupuestos de Coca-Cola:",
          muted: "de la fragmentación a un sistema escalable",
        },
        intro:
          "**Investment Committee Prioritization Tool (ICPT)** es una plataforma desarrollada para **Coca-Cola**, diseñada para gestionar, parametrizar y organizar presupuestos y campañas de manera eficiente alrededor del mundo. Este sistema facilita la toma de decisiones estratégicas dentro del comité de inversión, asegurando una distribución óptima de recursos y alineando las iniciativas con los objetivos empresariales.",
        blocks: [
          {
            heading: "El problema y la solución:",
            lead: "La fragmentación de herramientas en Coca-Cola limitaba la eficiencia operativa. Mi rol como diseñador Sr. fue liderar la transición hacia una plataforma unificada (ICPT) que estandarizara la toma de decisiones estratégicas.",
          },
          {
            heading: "Desafíos y decisiones estratégicas",
            bullets: [
              {
                term: "El dilema del alcance:",
                body: "Ante un cronograma de 7 meses, priorizamos la estandarización de los flujos de trabajo más críticos sobre funcionalidades secundarias, garantizando la viabilidad del MVP.",
              },
              {
                term: "Validando con usuarios:",
                body: "Las decisiones de diseño no fueron suposiciones; se validaron mediante entrevistas con miembros del comité de inversión, lo que permitió ajustar la interfaz para reducir la carga cognitiva en la gestión de campañas.",
              },
            ],
          },
          {
            heading: "Un sistema, no pantallas sueltas",
            paras: [
              "Diseñamos un sistema de diseño escalable para eliminar la inconsistencia visual entre regiones, además la reutilización de componentes permitió reducir los tiempos de carga operativa y aseguró una identidad de marca coherente en toda la webapp.",
            ],
          },
          {
            heading: "Colaboración y viabilidad técnica",
            paras: [
              "Un diseño genial es inútil si no es ejecutable. Trabajé estrechamente con un equipo de 4 desarrolladores para asegurar que cada componente fuera técnicamente viable.",
              "Implementamos metodologías de handoff con especificaciones técnicas claras para evitar errores de traducción al código.\nSesiones semanales de sincronización para auditar la viabilidad técnica antes de finalizar cada sprint.",
            ],
          },
          {
            heading: "Impacto de Negocio",
            lead: "El resultado de la unificación fue una mejora tangible en la eficiencia operativa.",
            bullets: [
              {
                term: "Eficiencia:",
                body: "Reducción de fricción operativa mediante la estandarización de procesos globales.",
              },
              {
                term: "Escalabilidad",
                body: "Un sistema de diseño unificado que permite futuras integraciones de forma ágil.",
              },
              { term: "UX", body: "Interfaz intuitiva enfocada en la toma de decisiones rápidas y precisas." },
            ],
          },
          {
            heading: "Reflexión Final",
            lead: "Mi aprendizaje clave en este proyecto: el seniority no se mide en la cantidad de píxeles, sino en cómo tus decisiones de diseño resuelven problemas reales de negocio y facilitan el trabajo del equipo de desarrollo.",
          },
        ],
        shotAlts: [
          "Vista de solicitudes del Investment Committee Prioritization Tool",
          "Panel de decisión y calendario del comité de inversión",
          "Detalle de sesión del comité con métricas de aprobación",
        ],
      },
      en: {
        description:
          "Investment Committee Prioritization Tool (ICPT): unifying budget management at Coca-Cola, from fragmentation to a scalable system.",
        headline: {
          base: "Unifying budget management at Coca-Cola:",
          muted: "from fragmentation to a scalable system",
        },
        intro:
          "**Investment Committee Prioritization Tool (ICPT)** is a platform developed for **Coca-Cola**, designed to manage, parameterise and organise budgets and campaigns efficiently around the world. This system supports the strategic decisions of the investment committee, it secures an optimal distribution of resources and it aligns the initiatives with the business objectives.",
        blocks: [
          {
            heading: "The problem and the solution:",
            lead: "Tool fragmentation at Coca-Cola limited operational efficiency. My role as Sr. designer was to lead the transition towards a unified platform (ICPT) that standardised strategic decisions.",
          },
          {
            heading: "Challenges and strategic decisions",
            bullets: [
              {
                term: "The scope dilemma:",
                body: "With a schedule of 7 months, we gave priority to the standardisation of the most critical workflows over secondary features, which secured the viability of the MVP.",
              },
              {
                term: "Validation with users:",
                body: "The design decisions were not assumptions; we validated them through interviews with members of the investment committee, which let us adjust the interface and reduce the cognitive load of campaign management.",
              },
            ],
          },
          {
            heading: "A system, not loose screens",
            paras: [
              "We designed a scalable design system to remove the visual inconsistency between regions. Component reuse also cut the operational load times and secured a coherent brand identity across the whole web app.",
            ],
          },
          {
            heading: "Collaboration and technical viability",
            paras: [
              "A brilliant design is useless if nobody can build it. I worked closely with a team of 4 developers to make sure every component was technically viable.",
              "We put handoff methods in place with clear technical specifications, in order to avoid translation errors in the code.\nWeekly synchronisation sessions audited technical viability before the close of each sprint.",
            ],
          },
          {
            heading: "Business impact",
            lead: "The result of the unification was a tangible improvement in operational efficiency.",
            bullets: [
              {
                term: "Efficiency:",
                body: "Less operational friction through the standardisation of global processes.",
              },
              {
                term: "Scalability",
                body: "A unified design system that allows future integrations in an agile way.",
              },
              { term: "UX", body: "An intuitive interface focused on fast and precise decisions." },
            ],
          },
          {
            heading: "Final reflection",
            lead: "My key lesson on this project: seniority is not measured in the number of pixels, but in how your design decisions solve real business problems and make the work of the development team easier.",
          },
        ],
        shotAlts: [
          "Requests view of the Investment Committee Prioritization Tool",
          "Decision panel and calendar of the investment committee",
          "Committee session detail with approval metrics",
        ],
      },
    },
  },

  // ── Polestar ─────────────────────────────────────────────────────────────
  {
    slug: "polestar",
    tags: ["UI", "Prototype", "Landing Page", "Design System"],
    meta: { year: "2025", client: "Polestar Pilates" },
    shots: [
      { src: "/img/case/polestar/shot-1.webp", w: 1356, h: 1070 },
      { src: "/img/case/polestar/shot-2.webp", w: 1356, h: 1056 },
      { src: "/img/case/polestar/shot-3.webp", w: 1356, h: 1070 },
      { src: "/img/case/polestar/shot-4.webp", w: 1356, h: 1070 },
    ],
    copy: {
      es: {
        description:
          "Rediseño integral de Polestar Pilates: elevando la conversión mediante UX estratégica, de una tasa de rebote del 70% a un funnel enfocado en la venta de cursos.",
        headline: {
          base: "Rediseño integral de Polestar Pilates:",
          muted: "Elevando la conversión mediante UX estratégica",
        },
        intro:
          "Más que un rediseño visual, este proyecto fue una intervención estratégica para transformar una plataforma de educación en Pilates con una tasa de rebote del 70%. Mi rol como UX/UI y Product Owner fue alinear la propuesta de valor con las necesidades reales del usuario para maximizar las ventas de cursos.",
        blocks: [
          {
            heading: "El desafío: Más allá de la estética",
            lead: "El problema no era solo visual; era un cuello de botella en el funnel de conversión. Los usuarios abandonaban porque la carga cognitiva era excesiva y la información clave estaba oculta.",
            bullets: [
              {
                term: "Priorización estratégica:",
                body: "En lugar de rediseñar todo a ciegas, identificamos que el 70% de las fugas ocurrían en el home, por lo que enfocamos el esfuerzo en simplificar la arquitectura de información allí.",
              },
              {
                term: "Impacto de negocio:",
                body: 'El objetivo fue pasar de una "plataforma informativa" a una "máquina de conversión" donde cada clic tuviera una intención clara.',
              },
            ],
          },
          {
            heading: "Validando con usuarios: ¿Por qué este camino?",
            paras: [
              "¿Cómo supimos que el nuevo flujo funcionaría? No fue por consenso interno, sino por evidencia. Utilizamos Useberry para testear flujos con usuarios reales. Esto nos permitió validar que la nueva estructura guía al alumno hacia la compra de manera intuitiva, eliminando las fricciones que antes causaban desconfianza.",
            ],
          },
          {
            heading: "El Sistema de Diseño como motor de escalabilidad",
            paras: [
              "Un sistema de diseño robusto es la diferencia entre un proyecto que se rompe al escalar y uno que crece ordenadamente.",
              "Más allá de 'lo visual', construimos un sistema orientado a la escalabilidad. Incluir estados de carga y componentes reutilizables no solo mejoró la UI, sino que redujo la fricción técnica durante la implementación.",
            ],
          },
          {
            heading: "Handoff: Colaboración real con Desarrollo",
            lead: 'El éxito del proyecto dependió de una estrecha colaboración con los 4 desarrolladores del equipo. Nuestro flujo de trabajo evitó que el diseño se "perdiera" en la traducción al código.',
            paras: [
              "Entregamos archivos con estados de carga definidos y anotaciones técnicas, asegurando que el equipo de desarrollo no tuviera que adivinar las interacciones, sino que pudieran enfocarse en la eficiencia del producto.",
            ],
          },
          {
            heading: "Resultados (Medibles)",
            bullets: [
              {
                term: "Reducción de fricción:",
                body: "Optimización del flujo de incorporación (onboarding) para reducir la tasa de rebote.",
              },
              {
                term: "Claridad de información:",
                body: "Arquitectura de información centrada en lo que el usuario necesita para tomar la decisión de compra.",
              },
              {
                term: "Optimización técnica:",
                body: "Mejora del rendimiento percibido mediante estados de carga definidos desde el diseño.",
              },
            ],
          },
        ],
        shotAlts: [
          "App del curso de Pilates de Polestar en un iPhone",
          "Página de inicio rediseñada de Polestar Pilates",
          "Página del curso Mat Teacher de Polestar Pilates",
          "Detalle del programa de formación en la app de Polestar",
        ],
      },
      en: {
        description:
          "Full redesign of Polestar Pilates: raising conversion through strategic UX, from a bounce rate of 70% to a funnel focused on course sales.",
        headline: {
          base: "Full redesign of Polestar Pilates:",
          muted: "Raising conversion through strategic UX",
        },
        intro:
          "More than a visual redesign, this project was a strategic intervention to transform a Pilates education platform with a bounce rate of 70%. My role as UX/UI and Product Owner was to align the value proposition with the real needs of the user in order to maximise course sales.",
        blocks: [
          {
            heading: "The challenge: beyond aesthetics",
            lead: "The problem was not only visual; it was a bottleneck in the conversion funnel. Users left because the cognitive load was excessive and the key information stayed hidden.",
            bullets: [
              {
                term: "Strategic prioritisation:",
                body: "Instead of a blind redesign of everything, we identified that 70% of the losses happened on the home page, so we focused the effort on a simpler information architecture there.",
              },
              {
                term: "Business impact:",
                body: 'The goal was to move from an "informational platform" to a "conversion machine" where every click had a clear intention.',
              },
            ],
          },
          {
            heading: "Validation with users: why this path?",
            paras: [
              "How did we know the new flow would work? Not through internal consensus, but through evidence. We used Useberry to test flows with real users. That let us confirm that the new structure guides the student towards the purchase in an intuitive way, and that it removes the friction that used to create distrust.",
            ],
          },
          {
            heading: "The design system as an engine for scalability",
            paras: [
              "A robust design system is the difference between a project that breaks as it scales and one that grows in an orderly way.",
              "Beyond 'the visual', we built a system oriented towards scalability. Loading states and reusable components did not only improve the UI, they also reduced the technical friction during implementation.",
            ],
          },
          {
            heading: "Handoff: real collaboration with development",
            lead: 'The success of the project depended on close collaboration with the 4 developers on the team. Our way of working kept the design from getting "lost" in the translation to code.',
            paras: [
              "We delivered files with defined loading states and technical annotations, so the development team never had to guess the interactions and could focus on the efficiency of the product.",
            ],
          },
          {
            heading: "Results (measurable)",
            bullets: [
              {
                term: "Less friction:",
                body: "Optimisation of the onboarding flow in order to reduce the bounce rate.",
              },
              {
                term: "Clearer information:",
                body: "Information architecture centred on what the user needs in order to make the purchase decision.",
              },
              {
                term: "Technical optimisation:",
                body: "Better perceived performance through loading states defined from the design.",
              },
            ],
          },
        ],
        shotAlts: [
          "The Polestar Pilates course app on an iPhone",
          "Redesigned home page of Polestar Pilates",
          "Mat Teacher course page of Polestar Pilates",
          "Detail of the training programme in the Polestar app",
        ],
      },
    },
  },

  // ── LeanCore Studio ──────────────────────────────────────────────────────
  {
    slug: "leancore-studio",
    tags: ["UI", "Prototype", "Landing Page", "Design System"],
    meta: { year: "2026", client: "LeanCore" },
    shots: [
      { src: "/img/case/leancore/shot-1.webp", w: 1356, h: 1070 },
      { src: "/img/case/leancore/shot-2.webp", w: 1356, h: 754 },
      { src: "/img/case/leancore/shot-3.webp", w: 1356, h: 950 },
      { src: "/img/case/leancore/shot-4.webp", w: 1356, h: 950 },
    ],
    copy: {
      es: {
        description:
          "LeanCore Studio: simplificando la complejidad financiera a través del diseño — una interfaz de automatización fintech que genera confianza y opera con precisión.",
        headline: {
          base: "LeanCore Studio:",
          muted: "Simplificando la complejidad financiera a través del diseño",
        },
        intro:
          "El reto fue transformar procesos financieros altamente técnicos y abstractos en un sistema de automatización intuitivo. Mi rol como diseñador UX/UI fue diseñar una interfaz que no solo operara con precisión, sino que generara la confianza necesaria para que el usuario automatice sus decisiones financieras.",
        blocks: [
          {
            heading: "El desafío",
            lead: "UX para la complejidad financiera",
            bullets: [
              {
                term: "La gestión de la carga cognitiva:",
                body: "La automatización fintech suele ser abrumadora. La decisión estratégica más difícil fue ocultar la complejidad del 'backend' bajo una capa de control sencilla, permitiendo al usuario configurar flujos de trabajo complejos sin necesidad de conocimientos técnicos.",
              },
              {
                term: "Diseño basado en la predictibilidad:",
                body: "Cada flujo de automatización se diseñó para que el usuario siempre mantenga el control. Se validó la lógica de la interfaz para asegurar que el sistema sea predecible, reduciendo la incertidumbre ante operaciones automatizadas.",
              },
            ],
          },
          {
            heading: "Sistema de diseño",
            lead: "Orden, jerarquía y confianza",
            paras: [
              "En una plataforma fintech, la interfaz es sinónimo de seguridad. Creé un sistema de componentes estrictamente ordenado, siguiendo la nomenclatura exacta de los nodos que definí para garantizar la escalabilidad técnica.",
              "La reutilización de componentes para los flujos de datos asegura que la experiencia del usuario sea consistente, independientemente de qué tan compleja sea la regla de automatización que esté creando.",
            ],
          },
          {
            heading: "Handoff",
            lead: "Cuando el diseño habla el lenguaje de los datos",
            paras: [
              "La arquitectura de este sistema fintech requirió una coordinación técnica impecable entre diseño y desarrollo.",
            ],
            bullets: [
              {
                term: "Nomenclatura precisa:",
                body: "Toda la documentación del diseño respeta los nombres de nodos exactos para evitar errores de implementación en el backend.",
              },
              {
                term: "Especificación de estados:",
                body: "Definí visualmente cómo debe comportarse el sistema ante errores de procesamiento, garantizando que el usuario siempre reciba un feedback claro y seguro.",
              },
            ],
          },
          {
            heading: "Impacto",
            lead: "Impacto de negocio: Eficiencia y escalabilidad",
            bullets: [
              {
                term: "Control:",
                body: "Autonomía total del usuario para gestionar reglas financieras complejas sin asistencia técnica.",
              },
              {
                term: "Escalabilidad:",
                body: "Un sistema de diseño que soporta la adición constante de nuevos nodos y reglas.",
              },
              {
                term: "Confianza:",
                body: "Interfaz diseñada para minimizar el error humano en la automatización de transacciones.",
              },
            ],
          },
          {
            heading: "Reflexión",
            lead: "Este proyecto reforzó mi visión: un diseñador UI/UX en fintech no solo diseña pantallas, diseña la confianza con la que un usuario confía sus finanzas a un sistema automatizado. El seniority se demuestra al entregar un producto que es técnicamente robusto y humanamente comprensible.",
          },
        ],
        shotAlts: [
          "Constructor de flujos de automatización de LeanCore Studio",
          "Estados de advertencia y edición de nodos en el editor",
          "Configuración de un nodo Enviar SMS con variables",
          "Flujo de decisión con asignación de cupo y envío de SMS",
        ],
      },
      en: {
        description:
          "LeanCore Studio: simplifying financial complexity through design, a fintech automation interface that builds trust and operates with precision.",
        headline: {
          base: "LeanCore Studio:",
          muted: "Simplifying financial complexity through design",
        },
        intro:
          "The challenge was to turn highly technical and abstract financial processes into an intuitive automation system. My role as a UX/UI designer was to design an interface that not only operated with precision, but also built the confidence a user needs in order to automate their financial decisions.",
        blocks: [
          {
            heading: "The challenge",
            lead: "UX for financial complexity",
            bullets: [
              {
                term: "Managing the cognitive load:",
                body: "Fintech automation is usually overwhelming. The hardest strategic decision was to hide the complexity of the 'backend' under a simple layer of control, which lets the user configure complex workflows without technical knowledge.",
              },
              {
                term: "Design based on predictability:",
                body: "Every automation flow was designed so that the user always keeps control. We validated the logic of the interface to make the system predictable, which reduces the uncertainty around automated operations.",
              },
            ],
          },
          {
            heading: "Design system",
            lead: "Order, hierarchy and trust",
            paras: [
              "In a fintech platform the interface is a synonym for safety. I created a strictly ordered component system that follows the exact node naming I defined, in order to guarantee technical scalability.",
              "Component reuse across the data flows keeps the user experience consistent, no matter how complex the automation rule being created is.",
            ],
          },
          {
            heading: "Handoff",
            lead: "When design speaks the language of data",
            paras: [
              "The architecture of this fintech system required impeccable technical coordination between design and development.",
            ],
            bullets: [
              {
                term: "Precise naming:",
                body: "All the design documentation respects the exact node names in order to avoid implementation errors in the backend.",
              },
              {
                term: "State specification:",
                body: "I defined visually how the system must behave when a processing error happens, which guarantees that the user always receives clear and safe feedback.",
              },
            ],
          },
          {
            heading: "Impact",
            lead: "Business impact: efficiency and scalability",
            bullets: [
              {
                term: "Control:",
                body: "Total user autonomy to manage complex financial rules without technical assistance.",
              },
              {
                term: "Scalability:",
                body: "A design system that supports the constant addition of new nodes and rules.",
              },
              {
                term: "Trust:",
                body: "An interface designed to minimise human error in the automation of transactions.",
              },
            ],
          },
          {
            heading: "Reflection",
            lead: "This project reinforced my view: a UI/UX designer in fintech does not only design screens, they design the trust with which a user hands their finances to an automated system. Seniority shows in the delivery of a product that is technically robust and humanly understandable.",
          },
        ],
        shotAlts: [
          "Automation flow builder in LeanCore Studio",
          "Warning states and node editing in the editor",
          "Configuration of a Send SMS node with variables",
          "Decision flow with credit limit assignment and an SMS send",
        ],
      },
    },
  },

  // ── LeanCore website ─────────────────────────────────────────────────────
  {
    slug: "leancore-web",
    mutedLead: true,
    tags: ["UX", "UI", "Responsive", "Design System", "Prototype"],
    meta: { year: "2026", client: "LeanCore" },
    shots: [
      { src: "/img/case/leancore-web/shot-1.webp", w: 1356, h: 1070 },
      { src: "/img/case/leancore-web/roadmap-v3.webp", w: 644, h: 644, bed: true, half: true },
      { src: "/img/case/leancore-web/shot-3.webp", w: 644, h: 826, half: true },
      { src: "/img/case/leancore-web/shot-2.webp", w: 1356, h: 950 },
      { src: "/img/case/leancore-web/shot-4.webp", w: 1356, h: 900 },
    ],
    copy: {
      es: {
        description:
          "Rediseño de LeanCore: arquitectura de información y una UI minimalista para transmitir la confianza que exige el sector fintech.",
        headline: {
          base: "Arquitectura de información y UI minimalista para la confianza fintech",
          muted: "Rediseño de LeanCore:",
        },
        intro:
          "En el sector fintech, la interfaz es sinónimo de seguridad. El rediseño integral de LeanCore se centró en eliminar el ruido visual para transmitir absoluta confianza y profesionalismo, reestructurando y filtrando la información clave para que los usuarios comprendan su ecosistema de productos sin fricción.",
        blocks: [
          {
            heading: "El desafío",
            lead: "Simplificar la complejidad financiera",
            bullets: [
              {
                term: "Ordenando el caos de productos:",
                body: "El reto principal no era solo estético, sino estructural. Tomamos la decisión difícil de reagrupar y filtrar la arquitectura de información, eliminando la sobrecarga cognitiva para guiar al usuario de forma natural hacia lo que realmente importa.",
              },
              {
                term: "Diseño enfocado en la conversión y la seguridad:",
                body: "Cada decisión de diseño se validó bajo la premisa de que un usuario fintech necesita claridad inmediata para sentirse seguro. Limpiamos los flujos de navegación para reducir el abandono y potenciar la retención.",
              },
            ],
          },
          {
            heading: "Sistema de diseño",
            lead: "Un sistema visual limpio y minimalista",
            paras: [
              "La confianza visual se construye con precisión. Desarrollamos un sistema de diseño minimalista donde cada componente tipográfico, espaciado y retícula cumple una función estricta.",
              "La estandarización de los elementos visuales aseguró que la plataforma se sintiera moderna, coherente y escalable en cualquier dispositivo.",
            ],
          },
          {
            heading: "Handoff",
            lead: "Sincronización y ejecución técnica",
            paras: [
              "Un diseño web minimalista exige una ejecución técnica impecable para mantener la nitidez y el rendimiento. Trabajamos codo a codo con el equipo de desarrollo para cuidar cada detalle de implementación.",
            ],
            bullets: [
              {
                term: "",
                body: "Entrega de especificaciones limpias en Figma para asegurar que la traducción al código respetara la retícula y los espacios en blanco.",
              },
              {
                term: "",
                body: "Sincronización constante para validar que los filtros de información y las interacciones respondieran con fluidez.",
              },
            ],
          },
          {
            heading: "Impacto de negocio",
            lead: "El resultado fue una plataforma que no solo se ve elegante, sino que optimiza el negocio.",
            bullets: [
              {
                term: "Claridad:",
                body: "Reagrupamiento estratégico de productos que facilita la lectura y comprensión del servicio.",
              },
              {
                term: "Confianza:",
                body: "Interfaz minimalista y profesional diseñada específicamente para mitigar la fricción en servicios financieros.",
              },
              {
                term: "Escalabilidad:",
                body: "Una arquitectura web flexible que permite incorporar nuevos productos sin alterar la armonía visual.",
              },
            ],
          },
          {
            heading: "Reflexión",
            lead: "El rediseño de LeanCore me recordó que en el mundo fintech el minimalismo no es solo una elección estética, es una herramienta de conversión y seguridad. La verdadera madurez en UX/UI se demuestra cuando eres capaz de simplificar la complejidad técnica para construir un espacio donde el usuario sienta confianza desde el primer segundo.",
          },
        ],
        shotAlts: [
          "Landing de LeanCore en móvil: 'Mueve dinero, gestiona crédito y escala tu operación'",
          "Roadmap del producto LeanCore: despliegue automático de nuevas funciones",
          "Detalle móvil de LeanCore: 'Tu operación de crédito empieza hoy'",
          "Página de inicio de LeanCore en escritorio con el mensaje principal y prueba social",
          "Flujo nativo de oportunidades: prospectos calificados con crecimiento de cartera del 97.5%",
        ],
      },
      en: {
        description:
          "LeanCore redesign: information architecture and a minimalist UI that carry the trust the fintech sector demands.",
        headline: {
          base: "Information architecture and a minimalist UI for fintech trust",
          muted: "LeanCore redesign:",
        },
        intro:
          "In the fintech sector the interface is a synonym for safety. The full redesign of LeanCore focused on the removal of visual noise in order to convey absolute trust and professionalism. It restructured and filtered the key information so that users understand the product ecosystem without friction.",
        blocks: [
          {
            heading: "The challenge",
            lead: "Simplify financial complexity",
            bullets: [
              {
                term: "Bringing order to the product chaos:",
                body: "The main challenge was not only aesthetic, it was structural. We took the hard decision to regroup and filter the information architecture, which removed the cognitive overload and guides the user naturally towards what really matters.",
              },
              {
                term: "Design focused on conversion and safety:",
                body: "Every design decision was validated on the premise that a fintech user needs immediate clarity in order to feel safe. We cleaned the navigation flows to reduce abandonment and to strengthen retention.",
              },
            ],
          },
          {
            heading: "Design system",
            lead: "A clean and minimalist visual system",
            paras: [
              "Visual trust is built with precision. We developed a minimalist design system where every typographic component, every space and every grid serves a strict function.",
              "The standardisation of the visual elements made the platform feel modern, coherent and scalable on any device.",
            ],
          },
          {
            heading: "Handoff",
            lead: "Synchronisation and technical execution",
            paras: [
              "A minimalist web design demands impeccable technical execution in order to keep the sharpness and the performance. We worked side by side with the development team to look after every implementation detail.",
            ],
            bullets: [
              {
                term: "",
                body: "Delivery of clean specifications in Figma, so that the translation to code respected the grid and the white space.",
              },
              {
                term: "",
                body: "Constant synchronisation to confirm that the information filters and the interactions responded fluidly.",
              },
            ],
          },
          {
            heading: "Business impact",
            lead: "The result was a platform that does not only look elegant, it also optimises the business.",
            bullets: [
              {
                term: "Clarity:",
                body: "Strategic regrouping of the products, which makes the service easier to read and to understand.",
              },
              {
                term: "Trust:",
                body: "A minimalist and professional interface designed specifically to reduce friction in financial services.",
              },
              {
                term: "Scalability:",
                body: "A flexible web architecture that allows new products to arrive without any change to the visual harmony.",
              },
            ],
          },
          {
            heading: "Reflection",
            lead: "The LeanCore redesign reminded me that in the fintech world minimalism is not only an aesthetic choice, it is a tool for conversion and for safety. Real maturity in UX/UI shows when you are able to simplify technical complexity and build a space where the user feels trust from the first second.",
          },
        ],
        shotAlts: [
          "LeanCore landing page on mobile with the headline 'Mueve dinero, gestiona crédito y escala tu operación'",
          "LeanCore product roadmap: automatic rollout of new features",
          "LeanCore mobile detail with the headline 'Tu operación de crédito empieza hoy'",
          "LeanCore home page on desktop with the main message and social proof",
          "Native opportunity flow: qualified prospects with portfolio growth of 97.5%",
        ],
      },
    },
  },
];

for (const def of defs) {
  for (const shot of def.shots) shot.src = withBase(shot.src);
}

export interface ResolvedCase {
  slug: string;
  mutedLead: boolean;
  tags: string[];
  meta: { year: string; client: string };
  description: string;
  headline: { base: string; muted: string };
  intro: string;
  blocks: Block[];
  shots: Shot[];
}

/** One case study, with its copy and its alt text resolved for one locale. */
export function getCase(slug: string, lang: Lang): ResolvedCase {
  const def = defs.find((d) => d.slug === slug);
  if (!def) throw new Error(`Unknown case study: ${slug}`);
  const copy = def.copy[lang] ?? def.copy[defaultLang];
  return {
    slug: def.slug,
    mutedLead: def.mutedLead ?? false,
    tags: def.tags,
    meta: def.meta,
    description: copy.description,
    headline: copy.headline,
    intro: copy.intro,
    blocks: copy.blocks,
    shots: def.shots.map((shot, i) => ({ ...shot, alt: copy.shotAlts[i] ?? "" })),
  };
}
