// @ts-check
import { defineConfig } from 'astro/config';

// Local dev/build serve at the domain root. CI (GitHub Pages) sets:
//  - SITE_BASE: "/" for the user site (devakros.github.io) or the repo
//    subpath (/victor-portafolio) for a project repo like hacu9's.
//  - SITE_URL:  the Pages origin, so sitemap/SEO point at the right account.
const base = process.env.SITE_BASE ?? '/';
const site = process.env.SITE_URL ?? 'https://hacu9.github.io';

// https://astro.build/config
export default defineConfig({
  site,
  base,
  vite: {
    preview: {
      // Vite's preview server rejects unknown Host headers with a 403, which a
      // Cloudflare tunnel surfaces to visitors as a 404. Allow the ephemeral
      // *.trycloudflare.com hostnames so `cloudflared tunnel` can share a
      // production build for review.
      allowedHosts: ['.trycloudflare.com'],
    },
  },
});
