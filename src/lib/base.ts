/**
 * Prefix a root-absolute path with the deploy base so the site works both at
 * the domain root (local dev, `base: "/"`) and under a subpath on GitHub Pages
 * (`base: "/victor-portafolio/"`). Vite inlines `import.meta.env.BASE_URL` at
 * build time; it always ends in a slash.
 *
 * Only touches paths that start with "/". Hashes ("#contacto"), relative and
 * external URLs are returned untouched.
 */
export const withBase = (path: string): string => {
  if (!path.startsWith("/")) return path;
  return import.meta.env.BASE_URL.replace(/\/$/, "") + path;
};
