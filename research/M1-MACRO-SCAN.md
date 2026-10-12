# M1 — Macro Trend & 5-Year Investment-Forecast Scan

**Project:** Intelligent Asset Lifecycle Orchestration · Market Research (see `MARKET-RESEARCH-PLAN.md`)
**Date:** 2026-10-11 · **Status:** First-pass, live-sourced · **Owner:** Justin

> Purpose: justify demand top-down so it can name the entry point. Each vertical scored on the
> three axes Justin set — **Value**, **Input opportunity**, **Lack of defendants** — plus
> **Timing**. All market figures are third-party research-firm estimates (they vary widely by
> methodology); treat them as directional magnitude, not precision. Discipline from the brief:
> what we sell is the **orchestration/software slice**, not MRO or the whole automation capex.

## Scoring rubric (1–5)

- **Value** — size + growth of the 5-yr capital/demand wave behind the vertical.
- **Input** — instrumentation available today = the "live pulse" the product orchestrates on. No pulse, no product.
- **Defendants** — *inverted*: 5 = wide-open whitespace, 1 = locked down by entrenched incumbents.
- **Timing** — when the automated-maintenance pull actually hits: 5 = now, 1 = late in / beyond the window.

## The software slice we actually sell (anchors)

- **Predictive maintenance:** ~$11–13B (2024) → **$30–56B by 2030**, CAGR **~27–28%**.
- **EAM:** ~$6.6–9.4B (2026), CAGR ~11–14% — and **fragmented**: IFS 9.4%, IBM/Maximo ~9%, ABB 8.4%, SAP 8.3%. *No dominant defendant at the orchestration layer* — the top 4 hold only ~35%.

---

## Per-vertical findings

### Data centers
- **Value 5** — global data-center capex ~$1T in 2026 → **$1.7T (Dell'Oro) to $3T+ (Nvidia/McKinsey) by 2030**; top-4 US hyperscalers entered 2026 at ~$600B combined.
- **Input 5** — densely instrumented (DCIM, power/cooling telemetry everywhere).
- **Defendants 2** — mature DCIM/BMS layer (Schneider EcoStruxure, Vertiv, nlyte); hyperscalers build in-house. Well defended.
- **Timing 5** — now, steepest capex curve in the set.
- **Read:** biggest prize, hardest to hold. Highly acquisitive owners (Schneider, Vertiv, hyperscalers) = good exit, but you'd fight an established software layer.

### EV charging networks  ★ sharpest whitespace
- **Value 3** — fast growth (NA ~$10B by 2030, ~21% CAGR; global $94–227B by 2030, 30–37% CAGR) but smaller absolute base; NEVI goal 500k chargers by 2030.
- **Input 4** — networked chargers with remote diagnostics; telemetry native.
- **Defendants 5** — brand-new asset class, **no incumbent maintenance regime** (no Maximo to displace).
- **Timing 5** — now, and **uptime is legally funded**: NEVI mandates **97% uptime**.
- **Read:** the cleanest wedge. Mandated uptime = a funded budget line + a painkiller + an incumbent gap, all at once. Smaller TAM is the only knock.

### Transportation & delivery / logistics
- **Value 4** — warehouse automation $27B (2026) → **$55–59B by 2030**, CAGR ~15–19%; AMRs/AGVs 20%+ CAGR.
- **Input 5** — AMRs/ASRS fully instrumented and networked.
- **Defendants 3** — AMR vendors own single-fleet management; cross-fleet/mixed-vendor orchestration is thin.
- **Timing 4** — early–mid.
- **Read:** best fit for the recursive "robot is both worker and asset" model; strong input + growth. Acquirers: material-handling majors + logistics tech.

### Mining & autonomous heavy equipment
- **Value 3** — autonomous-mining-equipment estimates range widely ($3.3–5.9B near-term; some to $12–30B by 2030–33); downtime value per asset is enormous even if the software TAM is modest.
- **Input 5** — autonomous haul fleets heavily telemetered.
- **Defendants 3** — Cat MineStar, Komatsu FrontRunner, Hexagon, Epiroc own fleet mgmt; mixed-fleet orchestration is the gap.
- **Timing 4** — now–early.
- **Read:** narrow but clean, with obvious strategic acquirers (Cat/Komatsu/Hexagon/Epiroc).

### Ports / maritime  ← brief's beachhead
- **Value 3** — terminal automation ~$11B → **$16–19B by 2030** (~6–7% CAGR); ship-repair $33→48B adjacency.
- **Input 4** — instrumented terminals, unevenly.
- **Defendants 3** — Maximo/SAP hold estates; Navis/Kalmar/ABB run terminal ops; AI-orchestration thin.
- **Timing 5** — now.
- **Read:** modest growth, but **Justin has direct access** — the one place to run a real design partnership cheaply. Access is its own axis here.

### Energy / grid
- **Value 5** — smart grid $57B (2025) → **$115–180B by 2030**, CAGR ~20%; utilities (~60% of spend) shifting to condition-based/AI asset mgmt.
- **Input 4** — AMI + sensors + SCADA; distribution-edge improving.
- **Defendants 3** — GE Vernova, Siemens, Schneider, ABB present; orchestration whitespace exists.
- **Timing 3–4** — mid.
- **Read:** huge, durable, reliability-critical. Mid-timing and regulated utility sales cycle hold it back from being the first wedge.

### Civil infrastructure (bridges / roads / water / transit)
- **Value 5** — IIJA $1.2T; ASCE "C" / ~$3.4T backlog; SHM market $3.3–3.7B → **$7–10B by 2030** (CAGR 15–19%); bridges/dams = ~56% of SHM revenue.
- **Input 2–3** — SHM being installed but most civil assets still uninstrumented; improving.
- **Defendants 4** — no dominant orchestration player (Bentley/engineering firms adjacent).
- **Timing 3** — funded now but **government-paced** procurement.
- **Read:** the demand is real and politically durable, but the slow public buyer makes it a poor *first* wedge for a 5-year exit. Strong year-2+ expansion.

### Healthcare facilities & biomedical
- **Value 4** — healthcare asset mgmt $26B → **$67–109B by 2030** (CAGR 23–29%); healthcare facilities mgmt $110B → $180B.
- **Input 3** — RTLS/biomed tagging growing; plant telemetry uneven.
- **Defendants 3** — healthcare CMMS incumbents (Nuvolo, Accruent); orchestration whitespace partial.
- **Timing 4** — mid; **existing funded buyer** (clinical/biomed engineering).
- **Read:** real budget exists today, but fragmented and compliance-heavy. Credible, not first.

### Advanced / reshored manufacturing  ▼ downgraded
- **Value 3** (was 4) — **the wave has crested**: US manufacturing construction spend down **~22% YoY** (July 2026) and **31% off its Sept-2024 peak**, though still ~2.6× 2020. Reshoring intent still rising (36% of mfrs).
- **Input 4** — automated lines instrumented.
- **Defendants 2** — crowded (SAP, Rockwell, Siemens, PTC, AspenTech).
- **Timing 3** — capex cresting, not building.
- **Read:** the macro premise Justin started from (reshoring → automated factories → automated maintenance) is *directionally* real but the **capex peak has passed** — you'd be entering a decelerating build, not a rising one.

### Semiconductor fabs  ▼▼ downgraded hard
- **Value 2–3** — fab-related construction **down ~58% from peak / ~47% YoY** (June 2026); 92% of the manufacturing-construction drop is chips/electronics.
- **Input 5** — most instrumented facilities on earth.
- **Defendants 1** — locked by fab-specific players (Applied Materials, PEER Group, camLine) and secretive operators.
- **Timing 2** — capex crashed; brutal access.
- **Read:** was the "sharpest tip," but the live data says the fab build has rolled over. Park it.

### Residential  (late-horizon per brief)
- **Value 2**, **Input 1** (homes ~uninstrumented), **Defendants 4** (no modern layer, for structural reasons), **Timing 1**.
- **Read:** confirms the brief — narrative device, not a paid wedge.

---

## Scorecard

| Vertical | Value | Input | Defendants | Timing | Σ /20 | Tier |
|---|:--:|:--:|:--:|:--:|:--:|:--:|
| **EV charging networks** | 3 | 4 | **5** | **5** | **17** | **1** |
| **Data centers** | **5** | **5** | 2 | **5** | **17** | 1* |
| **Logistics / delivery** | 4 | **5** | 3 | 4 | **16** | **1** |
| **Ports / maritime** | 3 | 4 | 3 | **5** | 15 | **1** (+access) |
| **Energy / grid** | **5** | 4 | 3 | 3 | 15 | 2 |
| **Mining & autonomous eq.** | 3 | **5** | 3 | 4 | 15 | 2 |
| **Civil infrastructure** | **5** | 2 | 4 | 3 | 14 | 2 (gov-paced) |
| **Healthcare facilities/biomed** | 4 | 3 | 3 | 4 | 14 | 2 |
| **Reshored manufacturing** | 3 | 4 | 2 | 3 | 12 | 3 ▼ |
| **Semiconductor fabs** | 2 | **5** | 1 | 2 | 10 | 4 ▼▼ |
| **Residential** | 2 | 1 | 4 | 1 | 8 | 4 |

\* Data centers tie on raw score but are **discounted by the Defendants axis** — a mature DCIM layer
is already there. Raw sum rewards value+input; the wedge thesis rewards *undefended* value.

## Entry-priority read (judgment over raw score)

1. **EV charging** — the only vertical scoring 5 on *both* whitespace and timing, with uptime
   legally funded. Highest-confidence wedge; main risk is TAM ceiling → test the expansion path early.
2. **Ports / maritime** — modest growth, but Justin's **access** makes it the cheapest place to run
   a real design partnership and generate a reference. Beachhead-by-access, EV-charging-by-whitespace.
3. **Logistics / delivery** — best input + the recursive robot-as-asset model; strong year-1–2 expansion.
4. **Data centers / energy-grid** — biggest prizes, but defended (DC) or mid-timing + regulated (grid).
   Revisit as expansion or if an undefended sub-segment appears.
5. **Deprioritize manufacturing + fabs** — the capex wave Justin intuited has **already peaked**;
   you'd ride a receding tide. Civil infra and healthcare are durable but slow/fragmented (year-2+).

## What the live data changed vs. the seeded hypotheses

- **The reshoring/fab thesis is softer than it looked.** Construction spend peaked ~Sept 2024 and is
  down 22–58%. The causal chain still holds long-term; the *timing* is wrong for a 5-yr-exit wedge.
- **EV charging emerged as the standout** — NEVI's 97% uptime mandate converts "maintenance" into a
  funded compliance obligation in a market with no incumbent maintenance system.
- **"No dominant defendant" is empirically supported** — the EAM leader holds <10% share; the
  orchestration layer specifically is unclaimed. Good for the horizontal thesis *generally*.
- **Data centers are the value trap** — highest capex, but you'd be displacing a mature DCIM stack.

## Next (M2)

Trace the full causal cascade for the Tier-1 set (EV charging, ports, logistics) with explicit
break points, then M3 timing-weighted scoring → entry point, M4 acquirer map in parallel.

## Sources
- Data centers: [Dell'Oro — $1.7T by 2030](https://www.delloro.com/news/ai-boom-drives-data-center-capex-to-1-7-trillion-by-2030/) · [DatacenterKnowledge — $3T](https://www.datacenterknowledge.com/ai-data-centers/ai-infrastructure-pushes-data-center-capex-forecast-above-3-trillion) · [Goldman Sachs](https://www.goldmansachs.com/insights/articles/private-markets-expected-to-have-growing-role-in-data-center-financing)
- EV charging: [PwC US EV charging to 2030](https://www.pwc.com/us/en/industries/industrial-products/library/electric-vehicle-charging-market-growth.html) · [NextMSC EV charging market](https://www.nextmsc.com/report/electric-vehicle-charging-infrastructure-market) · [SEPA — NEVI 97% uptime](https://sepapower.org/knowledge/ev-charging-infrastructure/)
- Mining: [MarketsandMarkets mining automation $5.93B 2030](https://www.marketsandmarkets.com/PressReleases/mining-automation.asp) · [Grand View autonomous mining](https://www.grandviewresearch.com/industry-analysis/autonomous-mining-equipment-market-report)
- Logistics: [LogisticsIQ — $55B by 2030](https://www.prnewswire.com/news-releases/warehouse-automation-market-to-reach-55-billion-by-2030-driven-by-e-commerce-and-supply-chain-transformation---logisticsiq-302252709.html) · [Grand View warehouse automation](https://www.grandviewresearch.com/industry-analysis/warehouse-automation-market-report)
- Manufacturing/reshoring: [Manufacturing.net — construction spending fell 22%](https://www.manufacturingmag.com/article/reshoring-announcements-vs-census-construction-spending-2026) · [BuildWCG — boom peaked](https://www.buildwcg.com/blog-posts/us-manufacturing-construction-spending-peak-2026-chips-act-ira)
- SHM / infrastructure: [Mordor SHM market](https://www.mordorintelligence.com/industry-reports/structural-health-monitoring-market) · [Straits — $7.59B by 2030](https://www.globenewswire.com/en/news-release/2022/08/02/2490603/0/en/Structural-Health-Monitoring-Market-Size-is-projected-to-reach-USD-7-59-Billion-by-2030-growing-at-a-CAGR-of-14-7-Straits-Research.html)
- Grid: [Smart grid $145B by 2030 (Yahoo/GlobeNewswire)](https://finance.yahoo.com/sectors/energy/articles/global-smart-grid-market-reach-132200747.html) · [market.us power grid modernization](https://market.us/report/power-grid-modernization-market/)
- Ports: [Mordor terminal automation](https://www.mordorintelligence.com/industry-reports/terminal-automation-market) · [OpenPR — $10.86B by 2030](https://www.openpr.com/news/4646314/terminal-automation-market-analysis-highlights-growth)
- Healthcare: [Grand View healthcare asset management](https://www.grandviewresearch.com/industry-analysis/healthcare-asset-management-market-report) · [MarketsandMarkets facility management](https://www.marketsandmarkets.com/PressReleases/facilities-management.asp)
- EAM incumbents: [MarketResearchFuture EAM companies](https://www.marketresearchfuture.com/reports/enterprise-asset-management-market/companies) · [Mordor EAM](https://www.mordorintelligence.com/industry-reports/enterprise-asset-management-market)
- Predictive maintenance: [Verified Market Research — $49.5B by 2030](https://www.prnewswire.com/news-releases/predictive-maintenance-market-size-worth-usd-49-54-billion-globally-by-2030-at-27-45-cagr-verified-market-research-301937435.html) · [NextMSC predictive maintenance](https://www.nextmsc.com/report/predictive-maintenance-market)
