# Victor Vivas — Portfolio

Portfolio de **Victor Vivas**, product designer (UX/UI, diseño de producto y sistemas de diseño). Sitio estático construido con **Astro**, servido por **GitHub Pages** desde el propio repo mediante GitHub Actions.

## 🔗 En vivo

| Cuenta | URL |
|---|---|
| `devakros` (user site, raíz) | https://devakros.github.io/ |
| `hacu9` (repo de proyecto) | https://hacu9.github.io/victor-portafolio/ |

> La raíz `hacu9.github.io/` es el portfolio personal de Henry Cabello (repo
> `hacu9/portfolio`), no este sitio.

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
│   │   └── pages/          # Cuerpo de cada página, compartido por los dos idiomas
│   ├── data/               # projects.ts, testimonials.ts, cases.ts (contenido real, es + en)
│   ├── i18n/               # index.ts (rutas por idioma) + ui.ts (diccionario de textos)
│   ├── layouts/            # Base.astro (transiciones, cursor, grano)
│   ├── lib/                # withBase() — rutas aware del base path
│   ├── pages/              # index, /proyectos y los 4 casos de estudio
│   │   └── en/             # Las mismas 6 páginas en inglés, bajo /en
│   └── styles/tokens.css   # Design tokens + grano + entrada
└── docs/design/            # Notas de diseño y decisiones
```

## 🌐 Idiomas

El sitio es bilingüe. El español es el idioma por defecto y conserva todas sus
URLs. El inglés vive bajo el prefijo `/en`.

| Página | Español | Inglés |
|---|---|---|
| Inicio | `/` | `/en/` |
| Índice de proyectos | `/proyectos` | `/en/projects` |
| Caso de estudio | `/proyectos/<slug>` | `/en/projects/<slug>` |

Reglas para editar:

- El idioma se deduce de la URL con `getLangFromUrl()`. Ningún componente
  recibe el idioma como prop.
- Los textos de interfaz (nav, botones, formulario, etiquetas ARIA) viven en
  `src/i18n/ui.ts`, con una columna por idioma.
- El contenido de los casos de estudio vive en `src/data/cases.ts`, también con
  una entrada por idioma.
- El cuerpo de cada página vive en `src/components/pages/`. Las rutas de
  `src/pages/` solo lo invocan. Así las dos versiones no se separan.
- Al añadir una página nueva, crea las dos rutas y añade el par a
  `pathsForUrl()` en `src/i18n/index.ts`, que alimenta el selector de idioma,
  los `hreflang` y el sitemap.

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

El mismo código se publica en **dos repos** (por eso el workflow es condicional a `github.repository` y `astro.config.mjs` lee `SITE_URL`/`SITE_BASE`):

- **User site** (`devakros/devakros.github.io`): base `/`, vive en la raíz.
- **Repo de proyecto** (`hacu9/victor-portafolio`): base `/victor-portafolio/`.

Regla en el workflow: si el nombre del repo termina en `.github.io` → raíz; si no, subruta `/<repo>`.

## ©️ Licencia

Todo el contenido, diseño y código de este repositorio pertenecen a Victor Vivas. Uso personal — ver `LICENSE`.
