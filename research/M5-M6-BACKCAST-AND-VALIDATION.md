# M5 + M6 — Entry-Point Spec, 5-Year Backcast & Validation Gate

**Project:** Intelligent Asset Lifecycle Orchestration · Market Research (see `MARKET-RESEARCH-PLAN.md`)
**Date:** 2026-10-11 · Builds on `M1`–`M4`

---

# M5 — Entry-point specification

| Field | Decision |
|---|---|
| **Product** | A cross-vendor, cross-asset coordinator of **operator-owned** maintenance: detect a condition/fault → triage → dispatch a qualified actor → verify the fix → update the asset record. |
| **Primary market** | EV-charging **Charge Point Operators (CPOs)** — the long-tail and mixed-hardware networks, *not* vertically-integrated closed networks (Tesla). |
| **Economic buyer** | The person accountable for **NEVI 97% uptime compliance** / network operations (VP Ops or Head of Reliability at a CPO). |
| **First workflow** | Charger-fault → field-service dispatch → verified restoration, tied to the uptime SLA. Chosen because it's the #1 operator pain and a pure detect→dispatch→verify loop. |
| **Beachhead (proving ground)** | One instrumented **terminal** via Justin's access — proves the hard part: cross-OEM crane + mixed-asset-class coordination that no single OEM tool (e.g. Konecranes TRUCONNECT) spans. |
| **Positioning** | **Vertical SaaS**, not a horizontal platform — for the ~1.5–2× multiple premium and to avoid the "trenchcoat" trap until the engine is proven. |
| **Why now** | NEVI uptime penalties are live; reliability is the industry's top problem; no incumbent maintenance system exists for it. |

## 5-year backcast (work from the exit → today)

Each step states **what must be true** to stay on an acquirer's path.

| When | State of the company | Must be true |
|---|---|---|
| **2031 — exit** | Scaled cross-vendor asset-lifecycle orchestration layer across 2–3 verticals. | Repeatable integration economics proven; ARR at a scale that draws an **EAM consolidator (IFS/Hexagon/IBM)** at a Copperleaf-style valuation — *or* an earlier strategic exit was taken. |
| **2030 — Y4** | 2nd/3rd vertical live (ports proven; first expansion = energy-grid DER or logistics mixed-fleet). | The horizontal thesis is *earned*, not asserted — the same engine transferred with manageable integration cost. On the category consolidators' radar. |
| **2029 — Y3** | Clear leader in EV-charging maintenance orchestration; ports reference in production. | Near-term strategic acquirers (ABB, Nayax, ChargePoint) are credible bidders; measurable uptime lift documented. |
| **2028 — Y2** | EV-charging product GA; multiple paying CPOs; ports design partner in production. | Proof the product moves the NEVI uptime number and reduces coordination cost. |
| **2027 — Y1** | EV-charging MVP live with first paying CPO; ports design partnership signed. | Core engine built: detect→dispatch→verify + the first cross-vendor adapters. |
| **2026 H2 → 2027 — now** | Pre-build validation. | **M6 passes** (below), *then* build the one narrow workflow. |

---

# M6 — Ground-truth validation gate (ready to execute)

> The brief's five falsifiable tests, operationalized for **EV charging + ports**. These require
> real operator conversations — they are Justin's to run. Run all five **before** writing code.
> This section is the instrument: who to ask, what to ask, and the pass/fail bar.

### Who to talk to
- **5 CPOs** that are *not* affiliated with Justin and *not* closed networks (regional/independent
  networks, fleet-depot operators, retail/site-host operators running mixed hardware).
- **1 terminal operator** for the ports beachhead (the design-partner candidate).

### The five tests

| # | Test | Ask (verbatim-ish) | PASS bar | FAIL = |
|---|---|---|---|---|
| 1 | **Second-customer** | "What are your top 3 operational headaches? Where does charger reliability / maintenance dispatch rank?" | ≥3 of 5 name reliability/maintenance-dispatch as top-3, unprompted | a consulting gig (N=1) |
| 2 | **Budget-line** | "Who signs for uptime/reliability tooling, and what line does it come from — NEVI compliance, O&M, network ops?" | named signer + existing line item | a user, not a buyer |
| 3 | **Incumbent gap** | "What does your charger network-management software (CMS)/Maximo *not* do when a unit goes down across mixed hardware?" | one sentence the CMS structurally can't do (cross-vendor dispatch + verified restoration) | "do it better with AI" = a feature |
| 4 | **Painkiller** | "What does one downed charger cost you per day — lost sessions + NEVI penalty risk + driver churn?" | quantified $/day + penalty exposure | a vitamin |
| 5 | **Data consent (flipped)** | "Would you want verified uptime/condition evidence you *control*, to prove NEVI compliance / lower your own cost of capital?" | appetite for operator-controlled proof of good condition | capital-markets thesis must be re-architected |

### Baselines to capture (for the later ROI claim)
Time-to-detection · time-to-dispatch · mean-time-to-repair · human touches per incident ·
% uptime vs the 97% SLA · evidence completeness for compliance reporting.

### Decision rule
Commit to build only if **Tests 1–4 pass** for EV charging and Test 5 shows a viable path (even if
the original adverse-data thesis dies). If Test 1 fails, drop to the next survivor on the M3 shortlist
(ports-first, then energy/grid) rather than abandoning the project.

---

## Status
M1–M5 complete (desk research). **M6 is the live-validation gate Justin executes next.** The capstone
read is `EXECUTIVE-BRIEF.html`.
