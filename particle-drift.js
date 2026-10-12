/* Particle Drift (Originkit) — ported from the React/WebGL component to vanilla JS.
   Usage: var stop = ParticleDrift.mount(canvasEl, { base:"#fff", accent:"#9db4d6", ... });
          stop();  // cancels the animation and removes listeners
   Renders with a transparent canvas so it layers over whatever background is behind it. */
(function () {
  var MAX_DPR = 2, MAX_LINES = 6000, EDGE = 20;

  var LINE_VERT =
    "precision highp float;attribute vec2 a_p0;attribute vec2 a_p1;attribute vec2 a_corner;" +
    "attribute vec3 a_shade;uniform vec2 uSize;varying float v_alpha;varying float v_mix;" +
    "varying float v_off;varying float v_half;void main(){vec2 d=a_p1-a_p0;float len=max(length(d),1e-5);" +
    "vec2 nrm=vec2(-d.y,d.x)/len;float half_=max(a_shade.z*0.5,0.35);float ext=half_+0.75;" +
    "vec2 p=mix(a_p0,a_p1,a_corner.x);p+=nrm*a_corner.y*ext;v_alpha=a_shade.x;v_mix=a_shade.y;" +
    "v_off=a_corner.y*ext;v_half=half_;gl_Position=vec4(p.x/uSize.x*2.0-1.0,1.0-p.y/uSize.y*2.0,0.0,1.0);}";

  var LINE_FRAG =
    "precision mediump float;uniform vec3 uBase,uAccent;varying float v_alpha;varying float v_mix;" +
    "varying float v_off;varying float v_half;void main(){float cov=clamp((v_half-abs(v_off))/0.75+0.5,0.0,1.0);" +
    "float a=v_alpha*cov;vec3 col=mix(uBase,uAccent,v_mix);gl_FragColor=vec4(col*a,a);}";

  var DOT_VERT =
    "precision highp float;attribute vec2 a_pos;attribute float a_lit;uniform vec2 uSize;" +
    "uniform float uDpr,uDot;varying float v_lit;void main(){gl_PointSize=max(1.0,uDot*uDpr);v_lit=a_lit;" +
    "gl_Position=vec4(a_pos.x/uSize.x*2.0-1.0,1.0-a_pos.y/uSize.y*2.0,0.0,1.0);}";

  var DOT_FRAG =
    "precision mediump float;uniform vec3 uBase,uAccent;uniform float uRestAlpha;varying float v_lit;" +
    "void main(){float d=length(gl_PointCoord-0.5)*2.0;float disc=1.0-smoothstep(0.72,1.0,d);" +
    "vec3 col=mix(uBase,uAccent,v_lit);float a=disc*mix(uRestAlpha,1.0,v_lit);if(a<=0.004)discard;" +
    "gl_FragColor=vec4(col*a,a);}";

  var CORNERS = [[0,-1],[1,-1],[1,1],[0,-1],[1,1],[0,1]];

  function compile(gl, type, src) {
    var sh = gl.createShader(type); gl.shaderSource(sh, src); gl.compileShader(sh);
    if (!gl.getShaderParameter(sh, gl.COMPILE_STATUS)) { gl.deleteShader(sh); return null; }
    return sh;
  }
  function link(gl, vsSrc, fsSrc) {
    var vs = compile(gl, gl.VERTEX_SHADER, vsSrc), fs = compile(gl, gl.FRAGMENT_SHADER, fsSrc);
    if (!vs || !fs) return null;
    var p = gl.createProgram(); gl.attachShader(p, vs); gl.attachShader(p, fs); gl.linkProgram(p);
    if (!gl.getProgramParameter(p, gl.LINK_STATUS)) return null;
    return p;
  }
  function parseColor(input, fb) {
    if (!input) return fb;
    var str = String(input).trim();
    if (str.charAt(0) === "#") {
      var hex = str.slice(1);
      if (hex.length === 3 || hex.length === 4) hex = hex[0]+hex[0]+hex[1]+hex[1]+hex[2]+hex[2];
      if (hex.length >= 6) {
        var r = parseInt(hex.slice(0,2),16), g = parseInt(hex.slice(2,4),16), b = parseInt(hex.slice(4,6),16);
        if (!isNaN(r)&&!isNaN(g)&&!isNaN(b)) return [r/255,g/255,b/255];
      }
      return fb;
    }
    var m = str.match(/[\d.]+/g);
    if (m && m.length >= 3) return [Math.min(255,parseFloat(m[0]))/255, Math.min(255,parseFloat(m[1]))/255, Math.min(255,parseFloat(m[2]))/255];
    return fb;
  }
  function num(v, fb) { return typeof v === "number" && isFinite(v) ? v : fb; }
  function clampN(v, lo, hi) { return v < lo ? lo : v > hi ? hi : v; }
  function rng(seed) {
    var a = seed >>> 0;
    return function () { a += 0x6d2b79f5; var t = a; t = Math.imul(t ^ (t>>>15), t|1); t ^= t + Math.imul(t ^ (t>>>7), t|61); return ((t ^ (t>>>14))>>>0)/4294967296; };
  }

  function mount(canvas, opts) {
    opts = opts || {};
    var gl = canvas.getContext("webgl", { alpha: true, antialias: false, depth: false, premultipliedAlpha: true });
    if (!gl) return function () {};
    var lineProg = link(gl, LINE_VERT, LINE_FRAG), dotProg = link(gl, DOT_VERT, DOT_FRAG);
    if (!lineProg || !dotProg) return function () {};

    var v = {
      base: opts.base || "#FFFFFF",
      accent: opts.accent || "#9db4d6",
      density: Math.round(clampN(num(opts.density, 140), 10, 400)),
      dotSize: clampN(num(opts.dotSize, 2), 1, 24),
      speed: clampN(num(opts.speed, 35), 0, 100) / 50,
      direction: clampN(num(opts.direction, 25), 0, 360),
      hover: clampN(num(opts.hover, 60), 0, 200) / 100,
      linkDistance: clampN(num(opts.linkDistance, 130), 0, 400),
      linkThickness: clampN(num(opts.linkThickness, 1.2), 0.5, 8),
      restAlpha: clampN(num(opts.restAlpha, 0.4), 0, 1)
    };

    var locs = {};
    function u(prog, name) { var key = (prog === lineProg ? "L:" : "D:") + name; if (!(key in locs)) locs[key] = gl.getUniformLocation(prog, name); return locs[key]; }

    var lP0 = new Float32Array(MAX_LINES*6*2), lP1 = new Float32Array(MAX_LINES*6*2),
        lCorner = new Float32Array(MAX_LINES*6*2), lShade = new Float32Array(MAX_LINES*6*3);
    for (var e = 0; e < MAX_LINES; e++) for (var c = 0; c < 6; c++) { var k = (e*6+c)*2; lCorner[k] = CORNERS[c][0]; lCorner[k+1] = CORNERS[c][1]; }
    var bP0 = gl.createBuffer(), bP1 = gl.createBuffer(), bCorner = gl.createBuffer(), bShade = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, bP0); gl.bufferData(gl.ARRAY_BUFFER, lP0.byteLength, gl.DYNAMIC_DRAW);
    gl.bindBuffer(gl.ARRAY_BUFFER, bP1); gl.bufferData(gl.ARRAY_BUFFER, lP1.byteLength, gl.DYNAMIC_DRAW);
    gl.bindBuffer(gl.ARRAY_BUFFER, bCorner); gl.bufferData(gl.ARRAY_BUFFER, lCorner, gl.STATIC_DRAW);
    gl.bindBuffer(gl.ARRAY_BUFFER, bShade); gl.bufferData(gl.ARRAY_BUFFER, lShade.byteLength, gl.DYNAMIC_DRAW);

    var R = rng(20260824);
    var nCount = 0, nx = new Float32Array(0), ny = new Float32Array(0), nSpd = new Float32Array(0),
        gPos = new Float32Array(0), gLit = new Float32Array(0);
    var bGPos = gl.createBuffer(), bGLit = gl.createBuffer();

    function buildNodes(n, w, h) {
      nCount = n; nx = new Float32Array(n); ny = new Float32Array(n); nSpd = new Float32Array(n);
      gPos = new Float32Array(n*2); gLit = new Float32Array(n);
      for (var i = 0; i < n; i++) { nx[i] = R()*w; ny[i] = R()*h; nSpd[i] = (R()*0.4+0.1)*60; }
      gl.bindBuffer(gl.ARRAY_BUFFER, bGPos); gl.bufferData(gl.ARRAY_BUFFER, gPos.byteLength, gl.DYNAMIC_DRAW);
      gl.bindBuffer(gl.ARRAY_BUFFER, bGLit); gl.bufferData(gl.ARRAY_BUFFER, gLit.byteLength, gl.DYNAMIC_DRAW);
    }

    var ptr = { x: -10000, y: -10000 };
    var raf = 0, last = performance.now(), builtN = -1, builtW = 0, builtH = 0;

    function render(now) {
      var dt = Math.min(0.05, (now - last) / 1000); last = now;
      var sp = v.speed;
      var dpr = Math.min(window.devicePixelRatio || 1, MAX_DPR);
      var cw = canvas.clientWidth || window.innerWidth || 1200;
      var ch = canvas.clientHeight || window.innerHeight || 800;
      var bw = Math.max(1, Math.round(cw*dpr)), bh = Math.max(1, Math.round(ch*dpr));
      if (canvas.width !== bw || canvas.height !== bh) { canvas.width = bw; canvas.height = bh; }
      gl.viewport(0, 0, bw, bh);

      if (v.density !== builtN) { buildNodes(v.density, cw, ch); builtN = v.density; builtW = cw; builtH = ch; }
      if (cw !== builtW || ch !== builtH) {
        var sx = cw / Math.max(builtW || cw, 1), sy = ch / Math.max(builtH || ch, 1);
        for (var q = 0; q < nCount; q++) { nx[q] *= sx; ny[q] *= sy; }
        builtW = cw; builtH = ch;
      }

      var reach = 180 * (v.hover > 0 ? 1 : 0);
      var LINKD = v.linkDistance, LINKW = v.linkThickness;
      var th = v.direction * Math.PI / 180, dirX = Math.sin(th), dirY = Math.cos(th);

      var lines = 0;
      function pushLine(x0, y0, x1, y1, a0, a1, mix, wpx) {
        if (lines >= MAX_LINES) return;
        for (var c = 0; c < 6; c++) {
          var k = (lines*6+c)*2, s3 = (lines*6+c)*3;
          lP0[k] = x0; lP0[k+1] = y0; lP1[k] = x1; lP1[k+1] = y1;
          lShade[s3] = CORNERS[c][0] === 0 ? a0 : a1; lShade[s3+1] = mix; lShade[s3+2] = wpx;
        }
        lines++;
      }

      for (var i = 0; i < nCount; i++) {
        nx[i] += nSpd[i]*dirX*dt*sp; ny[i] += nSpd[i]*dirY*dt*sp;
        if (nx[i] < -EDGE) { nx[i] = cw+EDGE; ny[i] = R()*ch; } else if (nx[i] > cw+EDGE) { nx[i] = -EDGE; ny[i] = R()*ch; }
        if (ny[i] < -EDGE) { ny[i] = ch+EDGE; nx[i] = R()*cw; } else if (ny[i] > ch+EDGE) { ny[i] = -EDGE; nx[i] = R()*cw; }
        var dx = ptr.x-nx[i], dy = ptr.y-ny[i], d = Math.sqrt(dx*dx+dy*dy);
        var lit = reach > 0 && d < reach ? 1 : 0;
        if (lit === 1) { var a = 0.5*(1-d/reach)*v.hover; pushLine(nx[i], ny[i], ptr.x, ptr.y, a, a, 1, LINKW); }
        gPos[i*2] = nx[i]; gPos[i*2+1] = ny[i]; gLit[i] = lit;
      }

      if (LINKD > 0) {
        var l2 = LINKD*LINKD;
        for (var m1 = 0; m1 < nCount && lines < MAX_LINES; m1++)
          for (var j = m1+1; j < nCount && lines < MAX_LINES; j++) {
            var ex = nx[m1]-nx[j], ey = ny[m1]-ny[j], dd = ex*ex+ey*ey;
            if (dd >= l2) continue;
            var la = 0.15*(1-Math.sqrt(dd)/LINKD);
            pushLine(nx[m1], ny[m1], nx[j], ny[j], la, la, 0, LINKW);
          }
      }

      gl.clearColor(0, 0, 0, 0); gl.clear(gl.COLOR_BUFFER_BIT);
      gl.disable(gl.DEPTH_TEST); gl.enable(gl.BLEND); gl.blendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA);

      var cb = parseColor(v.base, [1, 1, 1]), ca = parseColor(v.accent, [0.615, 0.705, 0.84]);

      if (lines > 0) {
        gl.useProgram(lineProg); var verts = lines*6;
        gl.bindBuffer(gl.ARRAY_BUFFER, bP0); gl.bufferSubData(gl.ARRAY_BUFFER, 0, lP0.subarray(0, verts*2));
        var aP0 = gl.getAttribLocation(lineProg, "a_p0"); gl.enableVertexAttribArray(aP0); gl.vertexAttribPointer(aP0, 2, gl.FLOAT, false, 0, 0);
        gl.bindBuffer(gl.ARRAY_BUFFER, bP1); gl.bufferSubData(gl.ARRAY_BUFFER, 0, lP1.subarray(0, verts*2));
        var aP1 = gl.getAttribLocation(lineProg, "a_p1"); gl.enableVertexAttribArray(aP1); gl.vertexAttribPointer(aP1, 2, gl.FLOAT, false, 0, 0);
        gl.bindBuffer(gl.ARRAY_BUFFER, bCorner);
        var aCorner = gl.getAttribLocation(lineProg, "a_corner"); gl.enableVertexAttribArray(aCorner); gl.vertexAttribPointer(aCorner, 2, gl.FLOAT, false, 0, 0);
        gl.bindBuffer(gl.ARRAY_BUFFER, bShade); gl.bufferSubData(gl.ARRAY_BUFFER, 0, lShade.subarray(0, verts*3));
        var aShade = gl.getAttribLocation(lineProg, "a_shade"); gl.enableVertexAttribArray(aShade); gl.vertexAttribPointer(aShade, 3, gl.FLOAT, false, 0, 0);
        gl.uniform2f(u(lineProg, "uSize"), cw, ch);
        gl.uniform3f(u(lineProg, "uBase"), cb[0], cb[1], cb[2]);
        gl.uniform3f(u(lineProg, "uAccent"), ca[0], ca[1], ca[2]);
        gl.drawArrays(gl.TRIANGLES, 0, verts);
        gl.disableVertexAttribArray(aP0); gl.disableVertexAttribArray(aP1); gl.disableVertexAttribArray(aCorner); gl.disableVertexAttribArray(aShade);
      }

      if (nCount > 0) {
        gl.useProgram(dotProg);
        gl.bindBuffer(gl.ARRAY_BUFFER, bGPos); gl.bufferSubData(gl.ARRAY_BUFFER, 0, gPos);
        var aPos = gl.getAttribLocation(dotProg, "a_pos"); gl.enableVertexAttribArray(aPos); gl.vertexAttribPointer(aPos, 2, gl.FLOAT, false, 0, 0);
        gl.bindBuffer(gl.ARRAY_BUFFER, bGLit); gl.bufferSubData(gl.ARRAY_BUFFER, 0, gLit);
        var aLit = gl.getAttribLocation(dotProg, "a_lit"); gl.enableVertexAttribArray(aLit); gl.vertexAttribPointer(aLit, 1, gl.FLOAT, false, 0, 0);
        gl.uniform2f(u(dotProg, "uSize"), cw, ch);
        gl.uniform1f(u(dotProg, "uDpr"), dpr);
        gl.uniform1f(u(dotProg, "uDot"), v.dotSize);
        gl.uniform1f(u(dotProg, "uRestAlpha"), v.restAlpha);
        gl.uniform3f(u(dotProg, "uBase"), cb[0], cb[1], cb[2]);
        gl.uniform3f(u(dotProg, "uAccent"), ca[0], ca[1], ca[2]);
        gl.drawArrays(gl.POINTS, 0, nCount);
        gl.disableVertexAttribArray(aPos); gl.disableVertexAttribArray(aLit);
      }
      raf = requestAnimationFrame(render);
    }

    function track(ev) {
      var r = canvas.getBoundingClientRect();
      if (r.width <= 0 || r.height <= 0) return;
      ptr.x = ((ev.clientX - r.left) / r.width) * (canvas.clientWidth || r.width);
      ptr.y = ((ev.clientY - r.top) / r.height) * (canvas.clientHeight || r.height);
    }
    function leave() { ptr.x = -10000; ptr.y = -10000; }
    window.addEventListener("pointermove", track);
    window.addEventListener("pointerleave", leave);
    raf = requestAnimationFrame(render);

    return function stop() {
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", track);
      window.removeEventListener("pointerleave", leave);
      var ext = gl.getExtension("WEBGL_lose_context");
      if (ext) ext.loseContext();
    };
  }

  window.ParticleDrift = { mount: mount };
})();
