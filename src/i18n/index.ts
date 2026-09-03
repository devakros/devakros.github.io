/**
 * Two-locale routing helpers.
 *
 * Spanish is the default locale and keeps every URL it already had:
 * `/`, `/proyectos`, `/proyectos/<slug>`. English lives under an `/en`
 * prefix with translated segment names: `/en/`, `/en/projects`,
 * `/en/projects/<slug>`.
 *
 * The locale is derived from the URL, so no component has to receive it as a
 * prop. `import.meta.env.BASE_URL` is stripped first, which keeps this correct
 * both at the domain root and under a GitHub Pages project subpath.
 */
export const LANGS = ["es", "en"] as const;
export type Lang = (typeof LANGS)[number];

export const defaultLang: Lang = "es";

/** BCP 47 tags for `<html lang>` and Open Graph. */
export const htmlLang: Record<Lang, string> = { es: "es", en: "en" };
export const ogLocale: Record<Lang, string> = { es: "es_ES", en: "en_US" };

const BASE = import.meta.env.BASE_URL.replace(/\/$/, "");

/** Remove the deploy base prefix so the rest of this module sees clean paths. */
export function stripBase(pathname: string): string {
  const p = BASE && pathname.startsWith(BASE) ? pathname.slice(BASE.length) : pathname;
  return p.startsWith("/") ? p : `/${p}`;
}

/** The locale of the page being rendered. */
export function getLangFromUrl(url: URL): Lang {
  const first = stripBase(url.pathname).split("/").filter(Boolean)[0];
  return first === "en" ? "en" : "es";
}

/**
 * Each language named in its OWN language, which is how a reader who cannot
 * read the current page still recognises the way out.
 */
export const langName: Record<Lang, string> = { es: "Español", en: "English" };

/** Root-absolute path of the projects index in each locale. */
export const projectsPath: Record<Lang, string> = {
  es: "/proyectos",
  en: "/en/projects",
};

/** Root-absolute path of the home page in each locale. */
export const homePath: Record<Lang, string> = {
  es: "/",
  en: "/en/",
};

/** Root-absolute path of one case study in each locale. */
export function projectPath(slug: string, lang: Lang): string {
  return `${projectsPath[lang]}/${slug}`;
}

/**
 * Both locale variants of the page currently being rendered. The language
 * switcher and the `hreflang` links both read from this, so a page can never
 * advertise an alternate URL that the switcher does not agree with.
 */
export function pathsForUrl(url: URL): Record<Lang, string> {
  const p = stripBase(url.pathname).replace(/\/+$/, "") || "/";

  if (p === "/proyectos" || p === "/en/projects") {
    return { es: projectsPath.es, en: projectsPath.en };
  }
  if (p.startsWith("/proyectos/")) {
    const slug = p.slice("/proyectos/".length);
    return { es: projectPath(slug, "es"), en: projectPath(slug, "en") };
  }
  if (p.startsWith("/en/projects/")) {
    const slug = p.slice("/en/projects/".length);
    return { es: projectPath(slug, "es"), en: projectPath(slug, "en") };
  }
  return { es: homePath.es, en: homePath.en };
}
