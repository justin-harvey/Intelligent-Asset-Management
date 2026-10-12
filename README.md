# Intelligent Asset Lifecycle Orchestration — Data Room

A self-contained static data room for product direction and outreach. No build step —
every page is plain HTML + one stylesheet. Deploy by pointing Netlify at the repo root.

## Contents

| File | Purpose |
|---|---|
| `index.html` | Data room home — BLUF, three doors, full document index |
| `product.html` | Product Direction — the one product, the loop, positioning, dual wedge, roadmap |
| `market.html` | Market Thesis — 11-vertical ranking, break-point test, TAM anchors |
| `exit.html` | Exit Thesis — acquirer maps, comps, multiples, 5-year backcast |
| `outreach.html` | Outreach & Validation — M6 playbook + outreach scripts + tracker |
| `executive-brief.html` | The capstone one-read (entry strategy & acquisition thesis) |
| `research/` | Evidence appendix — the five source working docs (M1–M6) |
| `style.css` | Shared editorial stylesheet |
| `netlify.toml` | Static deploy config (noindex headers, no build) |
| `robots.txt` | Disallow crawlers — this is a private data room |

## Deploy (Netlify)

1. Push this folder to a GitHub repo.
2. In Netlify: **Add new site → Import from Git** → pick the repo.
3. Build command: *(none)* · Publish directory: `.`
4. Deploy. The `netlify.toml` already sets `noindex` headers.

The room is gated only by obscurity (unlisted URL + noindex). For real access control,
add Netlify password protection or Identity before sharing externally.

## Status

Desk research M1–M6 complete. The call is locked: dual wedge (EV charging primary +
ports beachhead), one product underneath. Next real-world step is M6 live validation —
5 unaffiliated CPOs + 1 terminal operator (see `outreach.html`).

Market and valuation figures are third-party research-firm estimates — directional
magnitude, not precision. Sources are cited in the `research/` appendix.
