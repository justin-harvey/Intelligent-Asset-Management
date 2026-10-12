/* Lightweight client-side gate for the data room.
   NOTE: obscurity-grade only — the page source is still fetchable directly.
   Replace with Netlify password protection / Identity for real access control.
   Password is checked by SHA-256 so the literal never appears in source. */
(function () {
  var HASH = "c6af84a865c42cafbbada1dccd51db5738b140f947afc7d32bf9e5874b5b7721";
  var KEY = "dr_ok_v1";
  if (sessionStorage.getItem(KEY) === "1") return;

  // Hide the document until unlocked.
  var hideStyle = document.createElement("style");
  hideStyle.id = "dr-gate-hide";
  hideStyle.textContent = "body>*:not(#dr-gate){display:none!important}";
  (document.head || document.documentElement).appendChild(hideStyle);

  function sha256(str) {
    var buf = new TextEncoder().encode(str);
    return crypto.subtle.digest("SHA-256", buf).then(function (d) {
      return Array.prototype.map
        .call(new Uint8Array(d), function (b) { return ("0" + b.toString(16)).slice(-2); })
        .join("");
    });
  }

  function build() {
    var g = document.createElement("div");
    g.id = "dr-gate";
    g.setAttribute("style",
      "position:fixed;inset:0;z-index:9999;background:#111;color:#fff;" +
      "display:flex;align-items:center;justify-content:center;" +
      "font-family:Arial,Helvetica,sans-serif");
    g.innerHTML =
      '<canvas id="dr-particles" style="position:absolute;inset:0;width:100%;height:100%;display:block;z-index:0"></canvas>' +
      '<form id="dr-form" style="position:relative;z-index:1;width:320px;max-width:86vw;text-align:left">' +
      '<div style="font-size:11px;text-transform:uppercase;letter-spacing:.14em;font-weight:700;color:#bbb;margin-bottom:10px">Confidential · Data Room</div>' +
      '<div style="font-size:22px;font-weight:700;letter-spacing:-.02em;margin-bottom:18px">Intelligent Asset Lifecycle Orchestration</div>' +
      '<input id="dr-pw" type="password" autocomplete="off" placeholder="Access code" ' +
      'style="width:100%;padding:11px 12px;font-size:15px;border:1px solid #555;background:#1b1b1b;color:#fff;outline:none;margin-bottom:10px"/>' +
      '<button type="submit" style="width:100%;padding:11px 12px;font-size:14px;font-weight:700;background:#fff;color:#111;border:none;cursor:pointer">Enter</button>' +
      '<div id="dr-err" style="color:#e07a7a;font-size:12.5px;margin-top:10px;min-height:16px"></div>' +
      '</form>';
    document.body.appendChild(g);

    // Animated particle-drift background (degrades gracefully if unavailable).
    var stopParticles = function () {};
    if (window.ParticleDrift && window.ParticleDrift.mount) {
      stopParticles = window.ParticleDrift.mount(g.querySelector("#dr-particles"), {
        base: "#ffffff", accent: "#9db4d6", density: 130, dotSize: 2.2,
        speed: 32, direction: 25, hover: 70, linkDistance: 130, linkThickness: 1.1, restAlpha: 0.38
      });
    }

    var pw = g.querySelector("#dr-pw");
    var err = g.querySelector("#dr-err");
    pw.focus();
    g.querySelector("#dr-form").addEventListener("submit", function (e) {
      e.preventDefault();
      sha256(pw.value).then(function (h) {
        if (h === HASH) {
          sessionStorage.setItem(KEY, "1");
          var s = document.getElementById("dr-gate-hide");
          if (s) s.remove();
          stopParticles();
          g.remove();
        } else {
          err.textContent = "Incorrect code.";
          pw.value = "";
          pw.focus();
        }
      });
    });
  }

  if (document.body) build();
  else document.addEventListener("DOMContentLoaded", build);
})();
