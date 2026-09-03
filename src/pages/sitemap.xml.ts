import type { APIRoute } from "astro";
import { projectSlugs } from "../data/projects";
import { withBase } from "../lib/base";
import { LANGS, homePath, projectsPath, projectPath, htmlLang } from "../i18n";

/**
 * Both locales, with an `xhtml:link` alternate on every entry so a crawler
 * knows the Spanish and the English page are the same page.
 */
export const GET: APIRoute = ({ site }) => {
  const origin = site ?? new URL("https://hacu9.github.io");
  const abs = (path: string) => new URL(withBase(path), origin).href;

  // One entry per page, each carrying the path in every locale.
  const pages: Record<string, string>[] = [
    Object.fromEntries(LANGS.map((l) => [l, homePath[l]])),
    Object.fromEntries(LANGS.map((l) => [l, projectsPath[l]])),
    ...projectSlugs.map((slug) =>
      Object.fromEntries(LANGS.map((l) => [l, projectPath(slug, l)])),
    ),
  ];

  const entries = pages.flatMap((page) =>
    LANGS.map((lang) => {
      const alternates = LANGS.map(
        (other) =>
          `    <xhtml:link rel="alternate" hreflang="${htmlLang[other]}" href="${abs(page[other])}"/>`,
      ).join("\n");
      return `  <url>\n    <loc>${abs(page[lang])}</loc>\n${alternates}\n  </url>`;
    }),
  );

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${entries.join("\n")}
</urlset>
`;
  return new Response(body, { headers: { "Content-Type": "application/xml" } });
};
