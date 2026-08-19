# Victor Vivas — Portfolio

Portfolio de **Victor Vivas**, product designer (UX/UI, diseño de producto y sistemas de diseño). Sitio estático construido con **Astro**, servido por **GitHub Pages** desde el propio repo mediante GitHub Actions.

## 🔗 En vivo

| Cuenta | URL |
|---|---|
| `devakros` (user site, raíz) | https://devakros.github.io/ |
| `hacu9` (user site, raíz) | https://hacu9.github.io/ |
| `hacu9` (repo de proyecto) | https://hacu9.github.io/victor-portafolio/ |

## ✨ Características

- Página de inicio con intro animada, showreel, slider de proyectos y testimonios.
- Páginas de caso de estudio: Coca‑Cola (ICP Tool), Polestar, LeanCore Studio y LeanCore Web.
- Tema claro/oscuro por bandas, grano de película animado, cursor personalizado, scroll suave (Lenis) y transición de página tipo "curtain".
- Diseño implementado en markup real + CSS, reconstruido desde los frames de Figma (ver `docs/design/`).
- Assets optimizados (WebP/AVIF, derivados 2x, video re-codificado) para rendimiento y nitidez en pantallas HiDPI.

## 🧱 Stack

- [Astro](https://astro.build) (SSG, sin runtime de framework)
- [Lenis](https://github.com/darkroomengineering/lenis) (smooth scroll)
- CSS con custom properties (`src/styles/tokens.css`), tipografía Outfit (`@fontsource-variable/outfit`)
- Deploy: GitHub Actions → GitHub Pages (`actions/deploy-pages`)

## 📁 Estructura

```text
/
├── public/                 # Assets estáticos servidos tal cual
│   ├── img/                # Imágenes (WebP/PNG), poster y shots de casos
│   └── video/              # Showreel (derivado 2x)
├── src/
│   ├── components/         # Nav, Showreel, Testimonials, CaseStudy, slider…
│   ├── data/               # projects.ts, testimonials.ts (contenido real)
│   ├── layouts/            # Base.astro (transiciones, cursor, grano)
│   ├── lib/                # withBase() — rutas aware del base path
│   ├── pages/              # index, /proyectos y los 4 casos de estudio
│   └── styles/tokens.css   # Design tokens + grano + entrada
└── docs/design/            # Notas de diseño y decisiones
```

## 🚀 Desarrollo

```sh
npm install       # instala dependencias (Node >= 22.12)
npm run dev       # dev server en http://localhost:4321
npm run build     # build de producción a ./dist/
npm run preview   # sirve el build localmente
```

### Compartir un build en local (túnel de revisión)

```sh
npm run build
npm run preview
cloudflared tunnel --url http://localhost:4321
```

## ☁️ Deploy (GitHub Pages)

El workflow `.github/workflows/deploy.yml` se dispara con un push a `main` y despliega automáticamente.

El mismo código se publica en **tres repos** (por eso el workflow es condicional a `github.repository` y `astro.config.mjs` lee `SITE_URL`/`SITE_BASE`):

- **User sites** (`<user>.github.io`, p. ej. `devakros/devakros.github.io` y `hacu9/hacu9.github.io`): base `/`, viven en la raíz.
- **Repo de proyecto** (`hacu9/victor-portafolio`): base `/victor-portafolio/`.

Regla en el workflow: si el nombre del repo termina en `.github.io` → raíz; si no, subruta `/<repo>`.

## ©️ Licencia

Todo el contenido, diseño y código de este repositorio pertenecen a Victor Vivas. Uso personal — ver `LICENSE`.
