# M3 + M4 — Timing-Weighted Scoring, Entry Point & Acquirer Thesis

**Project:** Intelligent Asset Lifecycle Orchestration · Market Research (see `MARKET-RESEARCH-PLAN.md`)
**Date:** 2026-10-11 · **Status:** First-pass, live-sourced · Builds on `M1-MACRO-SCAN.md` + `M2-CAUSAL-CASCADES.md`

---

# M3 — Timing-weighted scoring → entry point

## Weighting (tuned for a ~5-year acquisition)

The edge of this product is orchestrating *operator-owned* maintenance in *undefended* space, fast.
So defensibility (whitespace, net of the M2 break-point) and timing carry the most weight:

| Axis | Weight | Why |
|---|:--:|---|
| **Defendants** (whitespace, M2-adjusted) | **35%** | the wedge *is* the opening; break-point capture kills it |
| **Timing** | **25%** | pull must land inside the 5-yr window |
| **Input** (instrumentation) | 20% | no live pulse, no product |
| **Value** (size × growth) | 20% | the prize |

Defendants score is taken **after** the M2 break-point haircut (RaaS / OEM capture reduces real
whitespace). Ports gets a +0.3 **access** adjustment (Justin can run a cheap design partnership).

## Weighted scorecard

| Vertical | Value | Input | Defend.(adj) | Timing | **Weighted /5** | Note |
|---|:--:|:--:|:--:|:--:|:--:|---|
| **EV charging** | 3 | 4 | **5** | **5** | **4.40** | clear #1 |
| **Ports / maritime** | 3 | 4 | 3 | **5** | **4.00** | incl. +access |
| Data centers | 5 | 5 | 1.5 | 5 | 3.78 | **gated out by M2 break-point** |
| Energy / grid | 5 | 4 | 3 | 3 | 3.60 | expansion |
| Civil infrastructure | 5 | 2 | 4 | 3 | 3.55 | durable, slow buyer |
| Logistics / delivery | 4 | 5 | 2 | 4 | 3.50 | RaaS-capped |
| Mining | 3 | 5 | 2 | 4 | 3.30 | mixed-fleet only |
| Healthcare / biomed | 4 | 3 | 2.5 | 4 | 3.28 | defended |
| Reshored manufacturing | 3 | 4 | 2 | 3 | 2.85 | timing wrong |
| Semiconductor fabs | 2 | 5 | 1 | 2 | 2.25 | parked |
| Residential | 2 | 1 | 4 | 1 | 2.25 | narrative only |

**Note on data centers:** the model still ranks it #3 on value/input/timing, but M2 showed the chain
*breaks* (hyperscaler in-house + mature DCIM). This is the case for **gating on the break-point, not
just the score** — a high number over a broken chain is a trap.

## Entry-point decision — a dual wedge, one product

**Primary wedge: EV charging networks.** Highest weighted score, lowest break-point exposure,
and demand is *funded by law* (NEVI 97% uptime). Maintenance is operator-owned, cross-hardware, and
currently unserved — reliability is the industry's #1 problem. This is where justified demand is
strongest.

**Design-partner beachhead: ports / maritime.** Lower growth, but Justin's **access** makes it the
cheapest place to prove the core engine — the cross-OEM, cross-asset-class coordinator — against a
real instrumented estate and a reference logo.

Both are the *same underlying product*: a **cross-vendor, cross-asset coordinator of operator-owned
maintenance**. EV charging supplies the undefended, funded market; ports supplies the proving ground
and the hardest technical proof (mixed-OEM orchestration). Everything else is expansion (logistics,
energy/grid, civil infra) or parked (manufacturing, fabs, residential).

---

# M4 — Acquirer landscape & exit thesis

## Comps & multiples (the exit math)

- **Vertical B2B SaaS ≈ 8.1× revenue** vs **horizontal ≈ 5.2×** — a **1.5–2× premium for entering
  vertical**. Direct argument for the wedge-first recalibration.
- **Industrial software ≈ 10.8× revenue** (Sept 2026); SaaS M&A median ≈ **3.8× revenue**, median
  deal ≈ **$80M**; strong private SaaS **8–10× ARR**.
- **Anchor comps:** IFS → **Copperleaf $742M** (AI asset investment planning) sets the "scaled
  asset-lifecycle platform" ceiling; EV-charging software tuck-ins (**Lynkwell $25.9M**, **Flipturn
  $38.4M**) set the "early strategic exit" floor.

## Acquirer map — primary wedge: EV charging  (active, many buyers)

| Acquirer type | Names | Why they buy |
|---|---|---|
| Charging networks (strategics) | ChargePoint, EVgo, Blink | bolt reliability/ops software onto the network |
| Industrial / tier-1 | **ABB** (bought InCharge Energy), Schneider, Siemens | round out EV + facility electrification |
| Payments / commerce | **Nayax** (bought Lynkwell $25.9M), FLEETCOR | add charging ops to payment rails |
| Fleet / mobility | **Einride** (Flipturn $38.4M), Virta, Pod Point/EDF | fleet-charging + energy management |

→ **Read:** a crowded, fast-moving buyer pool doing sub-$100M software deals = a realistic early
exit, and competitive tension on price.

## Acquirer map — beachhead: ports / maritime  (reshaping sector)

| Acquirer | Context | Why they buy |
|---|---|---|
| **Kalmar Corp** | spun out as standalone public co. (demerger Jun 2024) | needs a digital/automation edge as an independent |
| **Konecranes** | merger w/ Cargotec collapsed; runs TRUCONNECT | extend from single-OEM monitoring to cross-estate orchestration |
| **ABB** | marine + ports automation | software layer over its hardware |
| EAM majors | see below | mixed-asset estate coordination |

→ **Read:** the collapsed Konecranes–Cargotec merger and the Kalmar demerger left several
sub-scale, software-hungry players — good for a mid-size strategic exit.

## Acquirer map — the category consolidators (the big exit)

The EAM field is actively rolling up into "end-to-end asset lifecycle" — our exact category:

- **IFS** — serial acquirer: **Copperleaf ($742M, 2024)** + **TheLoops (2025, autonomous AI agents)**.
  The clearest "buy our way to end-to-end asset lifecycle" strategy.
- **Hexagon** — spun **Octave (2025)**, consolidating Asset Lifecycle Intelligence + adjacent SW.
- **IBM/Maximo, SAP, Siemens, AspenTech/Emerson** — all hold asset-management franchises to extend.

→ **Read:** these are the acquirers who'd pay the Copperleaf-style multiple for a proven
cross-vendor orchestration layer. They are the 3–5 year target, after the vertical wedge is proven.

## Exit thesis (acquisition as the goal)

1. **Enter vertical** (EV charging) for the demand + the ~1.5–2× vertical-SaaS multiple premium.
2. **Prove the engine in ports** (cross-OEM/cross-asset) using Justin's access → the hard technical
   moat + a reference logo.
3. **Two-stage exit optionality:**
   - *Near-term floor* — a charging strategic / tier-1 / payments buyer (ABB, Nayax, ChargePoint)
     at a Lynkwell/Flipturn-style tuck-in valuation.
   - *Scaled target* — an **EAM consolidator (IFS, Hexagon, IBM)** buying the cross-vendor
     orchestration layer to complete "end-to-end asset lifecycle," at a Copperleaf-style valuation.
4. **Position as vertical SaaS, not a horizontal platform** — same product, better multiple, and it
   dodges the brief's "horizontal trenchcoat" trap until you've earned the right to generalize.

---

## What M3+M4 lock in

- **Entry point:** EV charging (primary) + ports (design-partner beachhead), one product underneath.
- **Why it's defensible:** operator-owned, cross-vendor maintenance orchestration — the one seam the
  RaaS/OEM incumbents don't hold.
- **Why it exits:** active near-term buyer pool in EV charging; a category roll-up (IFS/Hexagon) as
  the scaled target; vertical-SaaS multiple premium throughout.

## Next
- **M5** — write the entry-point spec + the year-by-year **backcast** from the 2031 exit to the first
  deployment (what must be true each year to stay in an acquirer's path).
- **M6** — ground-truth the EV-charging + ports thesis against the brief's five falsifiable tests
  (talk to CPOs and a terminal operator) before any build.

## Sources (new in M4)
- EV charging M&A: [ABB acquires InCharge Energy](https://new.abb.com/news/detail/87137/abb-acquires-controlling-interest-in-incharge-energy-strengthening-its-ev-charging-solutions-in-the-u-s) · [Nayax acquires Lynkwell ($25.9M)](https://www.evinfrastructurenews.com/ev-networks/lynkwell-ai-ev-charging-platform-acquired-by-nayax) · [EV infrastructure M&A feed](https://www.evinfrastructurenews.com/keyword/m-a)
- Ports: [Konecranes–Cargotec merger called off](https://vertikal.net/en/news/story/39551/konecranes-and-cargotec-merger-off) · [Hiab/Cargotec + Kalmar demerger](https://en.wikipedia.org/wiki/Hiab_Corporation)
- EAM consolidation: [IFS buys Copperleaf ($742M)](https://www.techtarget.com/searcherp/news/366588732/IFS-buys-industrial-asset-management-provider-Copperleaf) · [IFS completes Copperleaf / end-to-end ALM](https://diginomica.com/ifs-completes-copperleaf-acquisition-extending-eam-realms-financial-planning) · [Hexagon → Octave spin-off](https://www.verdantix.com/client-portal/blog/octave-launches-with-a-unified-saas-offering-for-industrial-data--design-and-operations)
- Multiples: [Aventis — SaaS valuation multiples 2015–2026](https://aventis-advisors.com/saas-valuation-multiples/) · [Multiples.vc — software SaaS multiples](https://multiples.vc/insights/software-saas-valuation-multiples) · [SaaSRise — SaaS M&A report 2025](https://www.saasrise.com/blog/the-saas-m-a-report-2025)
