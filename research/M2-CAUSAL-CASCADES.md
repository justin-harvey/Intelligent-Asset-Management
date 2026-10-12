# M2 — Causal-Cascade Mapping (all 11 verticals)

**Project:** Intelligent Asset Lifecycle Orchestration · Market Research (see `MARKET-RESEARCH-PLAN.md`)
**Date:** 2026-10-11 · **Status:** First-pass, live-sourced · Builds on `M1-MACRO-SCAN.md`

> Method: for each vertical trace the chain **macro driver → capex → automation installed →
> automated-maintenance / orchestration demand → our layer**, then find the **weakest link** —
> the break point that invalidates it. A chain either survives its own break-point test or is
> dropped. Run for all 11 so the set is reusable for a deeper investigation later.

## The cross-cutting kill-risk: vendor/OEM capture of the maintenance layer

The brief's "horizontal trenchcoat" risk shows up concretely as **the automation vendor already
owns the maintenance layer** — via Robotics-as-a-Service (RaaS), OEM remote-monitoring, or
outcome-based "cost-per-hour" contracts. Where that holds, there is no seam for an independent
orchestrator. This is the single break point that recurs across the most verticals, so it is the
primary test applied below. **Our opening exists only where maintenance is (a) operator-owned and
(b) spans multiple vendors / asset classes that no single OEM tool covers.**

## Verdict summary

| # | Vertical | Weakest link (break point) | Verdict |
|---|---|---|:--:|
| 1 | **EV charging** | Closed networks (Tesla) self-serve | **SURVIVES — strongest** |
| 2 | **Ports / maritime** | OEM monitoring (Konecranes TRUCONNECT) — but single-OEM only | **SURVIVES w/ caveat (+access)** |
| 3 | **Energy / grid** | GE/Siemens ADMS + regulated slow buyer | Survives w/ caveat (DER edge) |
| 4 | **Logistics / delivery** | **RaaS vendors bundle maintenance** (Locus, inVia) | **WEAKENED** |
| 5 | **Mining** | **OEM cost-per-hour contracts capture it** (Cat JSS) | **WEAKENED (mixed-fleet only)** |
| 6 | **Data centers** | Hyperscaler in-house build + mature DCIM | BREAKS at hyperscale |
| 7 | **Civil infrastructure** | Assets not yet instrumented + gov buyer | WEAKENED (durable, slow) |
| 8 | **Healthcare / biomed** | Healthcare-CMMS incumbents own clinical asset mgmt | WEAKENED (narrow) |
| 9 | **Reshored manufacturing** | Capex peaked + crowded OT/APM incumbents | WEAKENED (timing) |
| 10 | **Semiconductor fabs** | Capex crashed + fab-locked stack + no access | **DROP (for now)** |
| 11 | **Residential** | No telemetry + thin software WTP | DROP (narrative only) |

---

## The chains

### 1. EV charging networks — SURVIVES (strongest)
**Chain:** NEVI funding + EV adoption → 500k-charger buildout → networked chargers with remote
diagnostics → **97% uptime legally mandated but reliability is the #1 unsolved problem** → an
orchestration/dispatch layer that turns fault signals into verified field-service fixes.
- **Must be true (holds):** uptime is funded (NEVI 97%); pain is acute (59% of operators call
  reliability the top challenge; real first-time success ~71%, falling below 70% by year 3);
  it is a *coordination* failure (45% cite slow maintenance response, only 17% have on-demand
  diagnostics) — i.e. exactly a detect→dispatch→verify loop.
- **Break point:** vertically-integrated networks (Tesla 99.2% uptime) run their own stack and
  need nobody. **Does not break the thesis** — the opening is the long tail of CPOs and the
  mixed-hardware networks (Blink 91.4%) where no maintenance system exists.
- **Verdict: survives cleanly.** Maintenance is operator-owned, cross-hardware, and already a
  funded compliance obligation. Lowest break-point exposure in the set.

### 2. Ports / maritime — SURVIVES with caveat (+ Justin's access)
**Chain:** port-infra funding + IMO retrofits + dry-dock backlog → terminal automation ($11→16–19B)
→ instrumented cranes/AGVs/RTGs → coordination of mixed-OEM, multi-asset-class maintenance →
our cross-system orchestration layer.
- **Break point:** crane OEMs already sell condition-based monitoring — **Konecranes TRUCONNECT**
  does predictive maintenance across its MHC/RTG/RMG/ASC lines. If OEM monitoring were enough, no gap.
- **Why it survives:** TRUCONNECT covers *Konecranes equipment only*. A real terminal runs
  cranes from multiple OEMs **plus** rail, pavement, utilities and vehicles that no single OEM tool
  spans. The orchestration seam is precisely cross-vendor + cross-asset — the brief's core thesis —
  not single-equipment monitoring.
- **Verdict: survives as the cross-OEM/cross-asset coordinator.** Modest market growth, but
  Justin's access makes it the cheapest place to prove the seam exists. Pair with EV charging.

### 3. Energy / grid — survives with caveat
**Chain:** electrification + renewables + grid hardening → smart-grid spend ($57→115–180B) →
AMI/sensors/SCADA + DER proliferation → utilities shifting from scheduled to condition-based
asset mgmt → orchestration across distributed, mixed-vendor grid-edge assets.
- **Break point:** GE Vernova / Siemens / Schneider / ABB own ADMS and grid APM; utility
  procurement is regulated and slow (rate-case cycles).
- **Opening:** the distribution edge and DER/behind-the-meter fleets are fragmenting faster than
  the incumbent ADMS stack covers — a genuine orchestration whitespace.
- **Verdict: durable and large, but mid-timing + slow buyer.** Expansion, not first wedge.

### 4. Logistics / delivery — WEAKENED
**Chain:** e-commerce → warehouse automation ($27→55–59B, AMRs 20%+ CAGR) → dense mobile-robot
fleets → maintenance of those fleets → our layer. *(Strongest fit for the recursive "robot is both
worker and asset" model — in theory.)*
- **Break point (bites hard):** the dominant commercial model is **RaaS — the vendor owns the
  robots and bundles maintenance, updates and 24/7 support** (Locus: ~125 customers / 300+ sites,
  pure RaaS; inVia owns and operates its robots). The vendor has every incentive to keep the
  maintenance layer in-house.
- **Residual opening:** owned (non-RaaS) fleets, **mixed-vendor** estates, and the broader
  material-handling / facility assets around the robots that RaaS doesn't touch.
- **Verdict: weaker than its M1 score implied.** The recursive model is elegant but the economics
  are already captured by RaaS. Re-scope to mixed-fleet + surrounding estate, or treat as later.

### 5. Mining & autonomous heavy equipment — WEAKENED (mixed-fleet only)
**Chain:** critical-minerals demand + remote-site labor gap → autonomous haulage → heavily
telemetered fleets → fleet maintenance/uptime → our layer.
- **Break point (bites hard):** OEMs capture it via **outcome contracts** — Cat's Job Site
  Solutions sells "cost-per-hour" with *dedicated Cat fleet management and condition monitoring*;
  Komatsu owns the autonomy software (dealers do service). Cat + Komatsu = **74% of autonomous
  trucks**. The OEM is contractually on the hook for uptime, so it owns the data and the loop.
- **Residual opening:** **mixed-fleet** autonomy is the only seam — Cat just signed its first
  mixed-fleet deal; Hexagon/xtonomy pushes "AHS for the masses." Cross-OEM orchestration is narrow
  but real.
- **Verdict: narrow.** Clear acquirers (Cat/Komatsu/Hexagon/Epiroc) if the mixed-fleet seam proves out.

### 6. Data centers — BREAKS at hyperscale
**Chain:** AI buildout → $1.7–3T capex → automated power/cooling → facility maintenance → our layer.
- **Break point (bites):** hyperscalers (≈half of global capex) **build everything in-house**; the
  colo/enterprise layer already runs mature DCIM/BMS (Schneider EcoStruxure, Vertiv, nlyte).
- **Residual opening:** mid-market colo and edge sites without a DCIM-grade stack — a shrinking,
  contested sliver.
- **Verdict: value trap.** Highest capex in the set, lowest defensibility. Not a wedge.

### 7. Civil infrastructure (bridges/roads/water/transit) — WEAKENED (durable but slow)
**Chain:** IIJA $1.2T + $3.4T backlog → SHM sensors + robotic inspection ($3.3→7–10B) → flood of
instrumented civil assets → coordination of inspection→repair across agencies → our layer.
- **Break point (two):** (a) the **pulse isn't there yet** — most civil assets remain
  uninstrumented, so the live-data premise lags the funding; (b) the buyer is **government** —
  slow procurement, and agencies may just buy SHM hardware + dashboards (Bentley et al.).
- **Verdict: real and politically durable, wrong speed for a 5-yr-exit first wedge.** Strong
  year-2+ expansion once SHM density rises.

### 8. Healthcare facilities & biomed — WEAKENED (narrow)
**Chain:** aging plant + care-robotics + compliance → instrumented plant + biomed devices →
clinical/biomed asset mgmt → our layer.
- **Break point:** healthcare-specific CMMS incumbents (Nuvolo on ServiceNow, Accruent) already own
  clinical asset management *with* the regulatory workflows (Joint Commission/FDA) that are the
  actual moat here.
- **Opening:** cross-domain coordination (clinical devices + building systems + logistics robots)
  that the siloed CMMS tools don't span — but regulated and fragmented.
- **Verdict: funded buyer exists, but defended and compliance-heavy.** Credible later, not first.

### 9. Reshored manufacturing — WEAKENED (timing)
**Chain:** CHIPS/tariffs/labor gap → factory capex → automated lines → maintenance of new
automation → our layer.
- **Break point:** (a) **timing** — construction spend down ~22% YoY / ~31% off peak, so the wave
  is receding; (b) crowded OT/APM incumbents (Rockwell, Siemens, PTC, AspenTech) own the plant floor.
- **Verdict: directionally real long-term, wrong phase now.** The premise Justin opened with is
  sound but the capex peak has passed.

### 10. Semiconductor fabs — DROP (for now)
**Chain:** same as manufacturing, sharper. **Break point:** fab construction **down ~58% from
peak**; the stack is locked by fab-specific players (Applied Materials, PEER Group, camLine); access
is near-impossible for a startup.
- **Verdict: park.** Revisit only if a new fab-build cycle starts and an access path appears.

### 11. Residential — DROP as wedge (narrative only)
**Chain:** breaks at the first link after the driver: **homes are ~uninstrumented (no pulse)** and
software WTP is thin (Super stuck ~$80M in a decade). Keep as the intuitive explainer, per the brief.

---

## What M2 changed vs. M1

- **The break-point test re-sorted the Tier-1.** M1 put EV charging, ports and logistics together.
  M2 **splits them**: EV charging and ports survive their break points; **logistics and mining are
  weakened** because RaaS and OEM cost-per-hour contracts already own the maintenance loop.
- **Refined lead pair: EV charging (whitespace + funded uptime) + ports (cross-OEM/cross-asset seam
  + Justin's access).** Logistics/mining demoted to "narrow mixed-fleet opening only."
- **The ports "threat" (Konecranes TRUCONNECT) is actually confirmation** — single-OEM monitoring
  existing *proves* the cross-OEM/cross-asset coordination gap is unclaimed.
- **General principle for the whole category:** the defensible version of this product is the
  **cross-vendor, cross-asset-class coordinator** of *operator-owned* maintenance. Any single-vendor
  or RaaS-captured segment is a trap.

## Next (M3 / M4)
- **M3** — timing-weighted scoring of the survivors → lock the entry point (expect EV charging primary,
  ports as design-partner beachhead).
- **M4** — acquirer map: EV charging (ChargePoint/EVgo, utilities, Schneider/ABB), ports (Konecranes,
  Kalmar/Cargotec, ABB), plus the fragmented-EAM consolidators (IFS, IBM, Hexagon).

## Sources (new in M2)
- EV charging reliability: [EV Engineering — reliability top challenge](https://www.evengineeringonline.com/report-finds-charger-reliability-remains-top-challenge-for-network-operators/) · [EVChargerScout — Q1 2026 uptime rankings](https://evchargerscout.com/articles/us-charging-network-uptime-reliability-q1-2026/) · [Paren — a broken charger = no charger](https://www.paren.app/blog/a-broken-charger-is-the-same-as-no-charger)
- RaaS / logistics: [Modern Materials Handling — RaaS catching fire](https://www.mmh.com/article/robotics_as_a_service_raas_catching_fire) · [Automated Warehouse — Robots as a Service](https://www.automatedwarehouseonline.com/robots-as-a-service/)
- Mining service models: [IM-Mining — Cat 2,000 autonomous trucks by 2030](https://im-mining.com/2025/11/07/caterpillar-sets-out-to-hit-over-2000-autonomous-mining-trucks-by-2030/) · [SMS Equipment — Komatsu AHS service](https://www.smsequipment.com/en-ca/advanced-technologies/smart-mining/autonomous-haulage-systems/)
- Port OEM monitoring: [Konecranes — predictive maintenance & remote monitoring](https://www.konecranes.com/en-us/service/predictive-maintenance-and-remote-monitoring) · [Konecranes — predictive services](https://www.konecranes.com/port-equipment-services/port-services/advanced-port-services/predictive-services)
- (Market-size sources carried from `M1-MACRO-SCAN.md`.)
