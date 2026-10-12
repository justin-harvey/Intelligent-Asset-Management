# Data Room Handoff — Intelligent Asset Lifecycle Orchestration

Last updated: 2026-10-12 · Repo: github.com/justin-harvey/Intelligent-Asset-Management

This is the pick-up-where-we-left-off doc for the data room. It covers the current
state, how the thing is wired, and the outstanding work split by who can do it.

---

## 1. Current state (what's live)

A self-contained static data room, 17 HTML pages + research appendix, deployed on
Netlify from `main` (no build step; `netlify.toml` sets `base="/"`, `publish="."`,
noindex headers; `robots.txt` disallows crawlers).

Pages, grouped as on the home index:
- **Product & build:** product, architecture (inline-SVG diagram), pricing
- **Market & evidence:** market, competitive, nevi, roi
- **Business & GTM:** financials, gtm, exit, risks, team
- **Validation & outreach:** outreach, M6 scorecard
- **Read & reference:** executive-brief, one-pager, glossary
- **Evidence appendix:** research/ (the five M1–M6 working docs)

Live assets:
- **Gate:** `gate.js` client-side password overlay (code `6942069`, stored as a SHA-256
  hash), with the `particle-drift.js` WebGL background behind the form.
- **M6 scorecard CMS:** a live Google Sheet, `M6_Validation_Scorecard`
  (docs.google.com/spreadsheets/d/1neTvgz7xmFZLgVCDM2Bnqc22QNHFD2ipA4KFv1vbNO4/edit),
  linked from outreach.html + index. The `.xlsx` copy stays in the repo as an offline fallback.

---

## 2. How it's wired (so edits are safe)

- **Shared nav:** `nav.js` injects the top nav on every page and highlights the current one.
  To add or reorder pages, edit the `pages` array in `nav.js` only (use `"|"` for a group
  separator). Do not hand-add `<nav>` blocks to pages.
- **Gate:** `gate.js` on every page; `particle-drift.js` must load before it (already wired).
  To change the access code, replace the `HASH` in `gate.js` with the SHA-256 of the new code
  (`printf 'NEWCODE' | sha256sum`).
- **Styling:** one shared `style.css` (editorial black-on-white). The executive brief keeps
  its own inline styles and does not load `style.css` (by design).
- **Voice rule:** no em dashes anywhere. Use commas/semicolons, colons for label:value, and
  en-dashes only in numeric ranges.
- **Deploy:** push to `main`; Netlify auto-deploys. Justin pastes a GitHub PAT inline per push
  (remote is stored token-free; nothing persisted).

Honest-labeling discipline already in place: pricing, ROI, and financials are marked
**illustrative**; market/valuation figures are flagged as directional third-party estimates.

---

## 3. Outstanding work — needs Justin (content only he has)

1. **Team & Raise page** (`team.html`) — fill the `[bracketed]` fields: founder bio, any
   team/advisors, raise stage + amount, instrument, runway, and the use-of-funds split.
2. **One-pager** (`one-pager.html`) — fill the `[ask]` (raise amount) and `[traction]`
   placeholders, confirm the contact line.
3. **Named target list** — the M6 scorecard's Target List tab is seeded with segments, not
   real operators. Populate with actual unaffiliated/NEVI-funded CPOs + contacts (Claude can
   research and propose a draft list for you to vet).
4. **Google Sheet sharing** — the Sheet is owned by highstdevelopment@gmail.com and is not yet
   shared. Set its sharing (Share → "anyone with the link," or add specific people) before
   sending the data-room link to anyone, or the scorecard link will hit a permission wall.

---

## 4. Outstanding work — Claude can draft next session

1. **Populate the target-list draft** (research real CPOs; Justin vets).
2. **Consolidated sources page** — one citations page pulling the links now scattered across
   nevi.html and the research appendix.
3. **Printable deck/export polish** — the one-pager prints clean; could add a print stylesheet
   pass to the exec brief and key pages if a PDF set is wanted.
4. **Case-study slot** — an empty template to drop the first design-partner result into once M6
   produces a before/after.

---

## 5. Security / access notes

- The gate is **obscurity-grade only**: page HTML and the `research/*.md` files are still
  directly fetchable by URL. For real control, turn on **Netlify password protection** (Site
  settings → Access & security) or Identity, then `gate.js` can be retired.
- Don't commit secrets. The GitHub PAT is pasted inline per push and never stored.

---

## 6. The one real-world next step (the point of all this)

Run **M6 live validation**: 5 unaffiliated CPOs + 1 terminal operator, scored in the live
Sheet against the five tests, with baselines captured (time-to-detect, dispatch, MTTR, touches,
uptime vs 97%). Decision rule: build only if Tests 1–4 pass and Test 5 shows a viable path.
Everything else in the room exists to support that conversation and the build it unlocks.
