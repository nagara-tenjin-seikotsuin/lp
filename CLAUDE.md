# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm dev        # Start dev server
pnpm build      # Build to ./dist/
pnpm preview    # Preview built site
```

No lint or test commands are configured.

## Architecture

Single-page landing site for 長良天神整骨院 built with **Astro 5** (SSG) + **Tailwind CSS 4**.

**Key paths:**
- `src/pages/index.astro` — the only page; all sections assembled here
- `src/layouts/Layout.astro` — HTML shell with SEO meta, GA, Clarity analytics
- `src/components/` — Astro components (Cv, Reviews, Map, Header, Footer, ElfsightReviews)
- `src/assets/` — images processed by Astro's Picture component (outputs avif/webp)
- `src/config/confg.json` — site metadata (title, description, canonical URL)
- `src/constants/reviews.ts` — hardcoded Google review data

**Import alias:** `@/*` → `./src/*`

**Environment variables** (`.env`, see `.env.sample`):
- `PUBLIC_GOOGLE_MAPS_API_KEY`
- `PUBLIC_PLACE_ID`

**Deployment:** GitHub Actions → GitHub Pages on push to `main`. Custom domain: `lp.nagara-tenjin-seikotsuin.com` (CNAME in `public/`).

**Design constraints:** Mobile-first, max-width 750px container. CTA buttons (`<Cv>`) link to Airrsv booking calendar.
