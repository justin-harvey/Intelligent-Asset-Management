/* Shared top navigation for the data room. Injected with inline styles so it
   works on every page regardless of which stylesheet the page loads. Current
   page is detected from the URL and highlighted. */
(function () {
  // "|" entries render as a thin separator between logical groups.
  var pages = [
    ["index.html", "Asset Lifecycle Orchestration", true],
    ["product.html", "Product"],
    ["architecture.html", "Architecture"],
    ["structure.html", "Structure"],
    ["pricing.html", "Pricing"],
    ["|"],
    ["market.html", "Market"],
    ["competitive.html", "Competitive"],
    ["painpoints.html", "Pain Points"],
    ["nevi.html", "NEVI"],
    ["roi.html", "ROI"],
    ["|"],
    ["financials.html", "Financials"],
    ["gtm.html", "GTM"],
    ["exit.html", "Exit"],
    ["risks.html", "Risks"],
    ["|"],
    ["outreach.html", "Outreach"],
    ["team.html", "Team"],
    ["|"],
    ["executive-brief.html", "Brief"],
    ["one-pager.html", "1-Pager"]
  ];
  var here = (location.pathname.split("/").pop() || "index.html").toLowerCase();
  if (here === "") here = "index.html";

  function build() {
    if (document.getElementById("dr-nav")) return;
    var nav = document.createElement("nav");
    nav.id = "dr-nav";
    nav.setAttribute("style", "position:sticky;top:0;z-index:50;background:#111;border-bottom:1px solid #000");
    var html = '<div style="max-width:980px;margin:0 auto;padding:11px 28px;display:flex;flex-wrap:wrap;align-items:center;gap:6px 15px;font-family:Arial,Helvetica,sans-serif">';
    pages.forEach(function (p) {
      if (p[0] === "|") { html += '<span style="color:#555;font-size:12px">|</span>'; return; }
      var file = p[0], label = p[1], brand = p[2], cur = (file === here);
      var st = "text-decoration:none;font-size:13px;letter-spacing:.02em;";
      if (brand) st += "color:#fff;font-weight:700;margin-right:6px;";
      else if (cur) st += "color:#fff;border-bottom:2px solid #fff;padding-bottom:2px;";
      else st += "color:#bbb;";
      html += '<a href="' + file + '" style="' + st + '">' + label + '</a>';
    });
    html += '</div>';
    nav.innerHTML = html;
    document.body.insertBefore(nav, document.body.firstChild);
  }

  if (document.body) build();
  else document.addEventListener("DOMContentLoaded", build);
})();
