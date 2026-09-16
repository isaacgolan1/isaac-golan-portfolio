# Isaac Golan — Portfolio

React + Vite portfolio site. The home page is a one-page scroll (bento-grid
hero into Professional Experience / Projects lists); each experience and
project entry links out to its own detail route with a back link, built as
a skeleton to be filled in further per entry.

## Stack

- React 19 + Vite, routed with `react-router-dom`
- Tailwind CSS v4 (via `@tailwindcss/vite`)
- `webgl-fluid` for the interactive ink/smoke simulation in the hero grid
- Outfit (Google Fonts) as the display/body typeface

## Structure

```
src/
  App.jsx                    routes: "/" (home), "/experience/:slug",
                              "/projects/:slug"
  data/
    entries.js                single source of truth for every experience
                               and project entry (title, org, location,
                               period, and optional intro/logo/logoUrl/
                               note/description/sections/gallery)
  components/
    HeroSection.jsx           bento grid: bio, name, contact, fluid sim,
                               education, artwork
    FluidSimulation.jsx       webgl-fluid canvas used in the hero grid
    ExperienceSection.jsx     Professional Experience / Projects lists;
                               each card links to its detail page
  pages/
    EntryDetailPage.jsx       generic detail page, driven entirely by the
                               matched entry's fields in data/entries.js
  index.css                   Tailwind entry + border-collapse grid helpers
```

`components/ParticleBackground.jsx` (Three.js) and the `three` dependency
are leftover from an earlier version of the hero animation — no longer
imported anywhere, kept in place rather than deleted.

## Adding or editing content

Everything shown on the home page cards and their detail pages comes from
`src/data/entries.js` — add or edit an object in `PROFESSIONAL_EXPERIENCE`
or `PROJECTS` and both the list and the detail route pick it up
automatically via the entry's `slug`. Supported optional fields per entry:
`logo` / `logoUrl`, `intro`, `disclaimer`, `note`, `description` (string or
bullet array), `sections` (each with `content`, `image`, `demoUrl`, and/or
nested `subsections`), and `gallery` (image + caption pairs).
