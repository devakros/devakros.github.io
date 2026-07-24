// @ts-check
import { defineConfig } from 'astro/config';

// Local dev/build serve at the domain root; CI (GitHub Pages) sets SITE_BASE to
// the repo subpath so assets and links resolve under /victor-portafolio/.
const base = process.env.SITE_BASE ?? '/';

// https://astro.build/config
export default defineConfig({
  site: 'https://hacu9.github.io',
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
