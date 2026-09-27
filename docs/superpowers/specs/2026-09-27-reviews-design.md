# Reviews — Design

Date: 2026-09-27
Status: Approved design, pending spec review

## Goal

Add short reviews of books, TV shows, and movies to the portfolio site. Two placements
are built on separate branches so they can be compared side by side before one is merged.

## Content model

New file `src/data/reviews.js`, exporting `REVIEWS` (same pattern as `src/data/entries.js`).

```js
{
  slug: 'dune',              // unique, used as React key
  title: 'Dune',
  type: 'book',              // 'book' | 'tv' | 'movie'
  creator: 'Frank Herbert',  // author, director, or network
  year: 1965,                // release year
  rating: 4,                 // integer 1–5
  finished: '2026-08-14',    // ISO date finished watching/reading
  cover: duneCover,          // optional, imported from src/assets
  text: 'One paragraph…',    // the review
}
```

Initial content: 6 placeholder reviews, 2 per type, with no covers, marked with a
`// PLACEHOLDER` comment so they are easy to replace.

## Shared components (`src/components/Reviews.jsx`)

**`ReviewItem`** — renders one review in full:
- Cover on the left (~80px wide). If `cover` is missing, a neutral tile shows the type
  label (`BOOK`, `TV`, `MOVIE`, or a generic label for unknown types).
- Right side: title (bold), a meta line `creator · year · type`, a 5-star rating
  (filled/empty), the finished date formatted as `Mon YYYY`, then the paragraph.

**`ReviewList`** — renders a list of `ReviewItem`s.
- Props: `reviews`, `limit` (optional), `showTabs` (default `true`).
- Filter tabs: All / Books / TV / Movies. Within any tab, reviews sort newest `finished` first.
- `limit` truncates after filtering and sorting.
- Empty tab shows "No reviews yet."

Styling follows existing patterns: white rows, `border-black/10` borders, `text-ink`,
`#555`/`#666` secondary text, and type sizes matching `src/pages/EntryDetailPage.jsx`.

## Reviews page (shared)

`src/pages/ReviewsPage.jsx`, routed at `/reviews` in `src/App.jsx`.
- Layout matches `EntryDetailPage`: `max-w-[990px]` container, same padding, "← Back" link to `/`.
- Heading "Reviews", then `<ReviewList reviews={REVIEWS} />` with tabs.

Both variants need this page (the home-section variant links to it via "See all"),
so it lives on the base branch.

## Variants

**`reviews-home-section`** — `src/components/ExperienceSection.jsx` gets a third group,
"Reviews", below Projects. It renders `<ReviewList limit={3} showTabs={false} />` followed
by a "See all reviews →" link to `/reviews`.

**`reviews-standalone`** — in `src/components/HeroSection.jsx`, the bottom-right artwork
cell becomes a `<Link to="/reviews">`. On hover, the image dims and a dark overlay with a
"REVIEWS" label fades in. Below the `md` breakpoint the label is always visible, because
touch devices have no hover. No other home page changes.

## Edge cases

- **Dates:** format by splitting the `YYYY-MM-DD` string, not with `new Date(iso)`, which
  parses as UTC midnight and shows the previous day in US time zones.
- **Rating:** round and clamp to 1–5 before drawing stars.
- **Unknown `type`:** shown under "All" only, with a generic cover tile.
- **Empty filter result:** "No reviews yet."

## Branches and workflow

1. `reviews-base` from `main`: data file, `Reviews.jsx`, `ReviewsPage.jsx`, `/reviews` route, this spec.
2. `reviews-home-section` and `reviews-standalone` branch from `reviews-base`.
3. Worktrees at `../website-v2-home` and `../website-v2-standalone`, each with its own `npm install`.
4. Dev servers: home variant on port 5174, standalone on 5175; `main` stays on 5173.
5. After comparison, merge the chosen variant into `main`, remove both worktrees, and
   delete the unused branch. Nothing is pushed without explicit approval.

## Verification

No test framework is added (explicit decision). For each branch:
- `npm run build` and `npm run lint` pass.
- In a browser: tabs filter correctly, newest first, empty tab message, 3-item limit and
  "See all" link (home variant), hover overlay and always-visible mobile label (standalone
  variant), Back link returns to `/`, and page opens scrolled to top.

## Out of scope

Per-review detail pages, search, pagination, tests, and real review content.
