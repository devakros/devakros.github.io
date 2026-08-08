import type { APIRoute } from "astro";
import { projects } from "../data/projects";
import { withBase } from "../lib/base";

// Build-time sitemap so it always reflects the real base + project list.
export const GET: APIRoute = ({ site }) => {
  const origin = site ?? new URL("https://hacu9.github.io");
  // "/proyectos" is the index every "Ver todos los proyectos" CTA and the nav
  // point at, so it has to be listed as well as the individual case studies.
  const paths = ["/", "/proyectos", ...projects.map((p) => `/proyectos/${p.slug}`)];
  const urls = paths.map((p) => new URL(withBase(p), origin).href);
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((u) => `  <url><loc>${u}</loc></url>`).join("\n")}
</urlset>
`;
  return new Response(body, { headers: { "Content-Type": "application/xml" } });
};
