# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

KaroserieDoc is a bilingual (Czech/German) Astro website for an auto body repair service. It uses astro-i18next for internationalization with Czech (`cs`) as the default locale and German (`de`) as the secondary locale.

## Commands

```bash
npm run dev      # Start dev server at localhost:4321
npm run build    # Production build to ./dist/
npm run preview  # Preview production build locally
```

## Architecture

### Internationalization

- **Default locale**: Czech (`cs`)
- **Secondary locale**: German (`de`)
- **Config files**: `astro-i18next.config.mjs` and `astro.config.mjs` (i18n section)
- **Translation files**: `public/locales/{cs,de}/translation.json`
- **Route translations**: Defined in `astro-i18next.config.mjs` (e.g., `/sluzby` → `/de/dienstleistungen`)

German pages are duplicated in `src/pages/de/` with `changeLanguage("de")` calls at the top.

### Content Collections

Services are defined in `src/content/services/` as markdown files with frontmatter:
- Czech services: root of `services/` directory (e.g., `pneuservis.md`)
- German services: `services/de/` subdirectory

Schema (`src/content/config.ts`): title, description, headerImage, customClass, lang, uspItems

### Key Directories

- `src/components/` - Astro components (Hero, Services, Navigation, etc.)
- `src/layouts/` - Layout.astro (main), Header.astro, Footer.astro
- `src/pages/` - Czech pages at root, German pages in `de/` subdirectory
- `src/styles/` - SCSS variables auto-imported via Vite config
- `public/images/` - Static images

### Styling

- SCSS with variables auto-imported from `src/styles/variables.scss`
- Path alias: `@/` maps to `src/`
- Global styles in `Layout.astro`
- Icon font: elementskit (loaded from `src/styles/fonts/`)
- Fonts: Russo One (headings), Heebo (body)

### Dynamic Routes

- `[...slug].astro` - Renders service detail pages from content collection
- Services use `ServiceDetail.astro` component with markdown content

### External Dependencies

- Swiper for carousels
- PhotoSwipe for gallery
- AOS for scroll animations
- Uploadcare for file uploads
- Jolty (UI library)
