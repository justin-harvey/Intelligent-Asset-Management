/* Plain-language tooltips for the data room.
   Self-injects its own CSS, then walks the page and wraps the FIRST plain-text
   occurrence of each jargon term with a hover/tap definition bubble. Works on
   every page regardless of which stylesheet it loads. No per-page markup needed.
   Definitions are written for a reader who knows nothing about EV charging,
   ports, asset management, or AI. */
(function () {
  var TIPS = {
    "CPO": "Charge Point Operator: the company that runs a network of public EV chargers. Our main customer.",
    "CPOs": "Charge Point Operators: the companies that run networks of public EV chargers. Our main customers.",
    "CPMS": "Charge Point Management System: the software that runs a charging network (billing, sessions, remote status). It sits below us and tells you a charger is down, but doesn't get it fixed.",
    "NEVI": "A US federal program funding public EV chargers. Its rules require each charger to work more than 97% of the time, so uptime is now the law.",
    "OCPP": "The open 'language' chargers use to report their status, no matter the brand. It's how we can read every vendor's equipment.",
    "EAM": "Enterprise Asset Management: the big software companies use to keep a master record of their physical equipment (e.g. IBM Maximo). A likely buyer of us one day.",
    "CMMS": "Maintenance and work-order software; often a part of a larger EAM system.",
    "RaaS": "A model where a vendor owns the robots or the repair crew and bundles the maintenance in. It locks out independents like us, so we design around it.",
    "DCIM": "Data Center Infrastructure Management: the mature software that already guards the data-center market, which is why we don't enter there.",
    "DCFC": "DC Fast Charger: the high-power public charger that is costliest to have broken.",
    "MTTR": "Mean Time To Repair: the average time it takes to fix broken equipment. The number we shrink.",
    "OEM": "Original Equipment Manufacturer: the company that built a given piece of equipment. Each OEM usually only monitors its own gear.",
    "OEMs": "Original Equipment Manufacturers: the companies that build the equipment. Each usually only monitors its own gear.",
    "SLA": "Service Level Agreement: a written promise about how fast and reliably something will be fixed.",
    "SaaS": "Software as a Service: software sold as an ongoing subscription rather than a one-time purchase.",
    "AI": "Software that learns patterns from data to make decisions, instead of following fixed hand-written rules.",
    "AI-native": "Built around AI from the start, rather than bolting it onto older software.",
    "MVP": "Minimum Viable Product: the simplest working version of a product, built to prove the idea before investing in the full build.",
    "GA": "General Availability: the point where a product is finished enough to sell to everyone.",
    "MRO": "Maintenance, Repair and Operations: all the spending and labor it takes to keep equipment working.",
    "TAM": "Total Addressable Market: the entire theoretical size of a market.",
    "SAM": "Serviceable Available Market: the realistically reachable slice of a market.",
    "SOM": "Serviceable Obtainable Market: the slice we could realistically win.",
    "ACV": "Annual Contract Value: the revenue from one customer in a year.",
    "CAC": "Customer Acquisition Cost: what it costs to win one customer.",
    "NRR": "Net Revenue Retention: whether existing customers spend more (or less) over time.",
    "ICP": "Ideal Customer Profile: the exact kind of buyer we go after first.",
    "DER": "Distributed Energy Resources: small grid-edge power assets like batteries and solar. A later expansion market for us.",
    "AGV": "Automated Guided Vehicle: a self-driving cart used to move cargo in ports and warehouses.",
    "RTG": "Rubber-Tyred Gantry crane: a large wheeled crane that stacks shipping containers at a port.",
    "capex": "Capital expenditure: large one-time spending on equipment and buildings.",
    "backcast": "Planning backwards from a target end state (here, an acquisition) to figure out what to do today.",
    "vertical SaaS": "Software built and sold for one specific industry, rather than one generic tool sold to everyone. It's worth more per dollar of revenue.",
    "detect": "The first step of our loop: notice that something has broken.",
    "dispatch": "Send the right person or vendor to make the repair.",
    "orchestration": "Coordinating many separate systems and people so a job actually gets done end to end.",
    "land-and-expand": "A sales strategy: win a small first deal, prove it works, then grow the account by selling more over time.",
    "cost of capital": "How expensive it is for a company to borrow money or raise investment. A solid track record lowers it.",
    "system of record": "The official master database a company treats as the single source of truth.",
    "flipped data play": "Our twist on data: instead of selling customers' data, we help them prove their equipment is in good shape so they can borrow money more cheaply."
  };

  // Longer phrases first so "AI-native" wins over "AI", "CPMS" over nothing, etc.
  var terms = Object.keys(TIPS).sort(function (a, b) { return b.length - a.length; });
  var used = {};
  var SKIP = { A: 1, SCRIPT: 1, STYLE: 1, CODE: 1, PRE: 1, NAV: 1, BUTTON: 1, TEXTAREA: 1, H1: 1, SUB: 1, TITLE: 1 };

  function esc(s) { return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"); }
  function makeRe(t) {
    var b = /^[A-Za-z0-9]/.test(t) ? "(?<![A-Za-z0-9])" : "(?<![A-Za-z0-9&])";
    var e = /[A-Za-z0-9]$/.test(t) ? "(?![A-Za-z0-9])" : "(?![A-Za-z0-9&])";
    return new RegExp(b + esc(t) + e);
  }

  function skip(node) {
    for (var p = node.parentNode; p && p.nodeType === 1; p = p.parentNode) {
      if (p.id === "dr-nav" || p.id === "dr-gate") return true;
      if (SKIP[p.tagName]) return true;
      if (p.classList && p.classList.contains("term")) return true;
    }
    return false;
  }

  function wrapTerm(term) {
    var re;
    try { re = makeRe(term); } catch (e) { return; } // old engine w/o lookbehind: skip quietly
    var walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null);
    var n;
    while ((n = walker.nextNode())) {
      if (skip(n)) continue;
      var m = n.nodeValue.match(re);
      if (!m) continue;
      var i = m.index, len = term.length;
      var after = n.splitText(i);
      after.nodeValue = after.nodeValue.slice(len);
      var span = document.createElement("span");
      span.className = "term";
      span.setAttribute("data-tip", TIPS[term]);
      span.setAttribute("tabindex", "0");
      span.textContent = term;
      after.parentNode.insertBefore(span, after);
      used[term] = true;
      return;
    }
  }

  function injectCSS() {
    var css =
      ".term{border-bottom:1px dotted #888;cursor:help;position:relative}" +
      ".term:hover,.term:focus{outline:none}" +
      ".term::after{content:attr(data-tip);position:absolute;left:0;bottom:calc(100% + 8px);" +
      "width:min(280px,78vw);background:#111;color:#fff;border:1px solid #444;padding:9px 11px;" +
      "font-size:12.5px;font-weight:400;line-height:1.45;letter-spacing:0;text-transform:none;" +
      "text-align:left;border-radius:3px;box-shadow:0 6px 20px rgba(0,0,0,.28);" +
      "opacity:0;visibility:hidden;transition:opacity .12s;z-index:200;pointer-events:none}" +
      ".term:hover::after,.term:focus::after,.term.open::after{opacity:1;visibility:visible}" +
      // tooltips sitting on the dark nav / verdict read fine because the bubble is dark itself
      "@media print{.term{border-bottom:none}.term::after{display:none}}";
    var s = document.createElement("style");
    s.id = "dr-tips-css";
    s.textContent = css;
    document.head.appendChild(s);
  }

  function run() {
    if (document.getElementById("dr-tips-css")) return;
    injectCSS();
    terms.forEach(function (t) { if (!used[t]) wrapTerm(t); });
    // Tap support on touch devices: toggle the open bubble.
    document.body.addEventListener("click", function (e) {
      var t = e.target.closest && e.target.closest(".term");
      document.querySelectorAll(".term.open").forEach(function (el) { if (el !== t) el.classList.remove("open"); });
      if (t) t.classList.toggle("open");
    });
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", run);
  else run();
})();
