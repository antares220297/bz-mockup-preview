/* «Il libro» · prototipo WebGL. Questo file (piccolo, senza dipendenze) impagina il palco, mostra il poster del libro chiuso
   e carica assets/libro-3d.js (three.js + motore) solo quando la sezione si avvicina o al primo tocco.
   Con «riduci movimento» o senza WebGL il libro resta in HTML: stesse pagine, dissolvenze al posto dello sfoglio. */
(function () {
  var root = document.querySelector('.lb'); if (!root) return;
  var Q = location.search;
  var RM = matchMedia('(prefers-reduced-motion: reduce)').matches || /rm=1/.test(Q);
  var stage = root.querySelector('.lb-stage'), gl = root.querySelector('.lb-gl'), flip = root.querySelector('.lb-flip');
  var openB = root.querySelector('.lb-open'), live = root.querySelector('#lb-live');
  var prevB = root.querySelector('.lb-prev'), nextB = root.querySelector('.lb-next');
  var tabs = [].slice.call(root.querySelectorAll('.tab')), chaps = [].slice.call(root.querySelectorAll('.lb-ch'));
  var all = [].slice.call(flip.querySelectorAll('.pg'));
  function webgl() { try { var c = document.createElement('canvas'); return !!(window.WebGLRenderingContext && (c.getContext('webgl2') || c.getContext('webgl'))); } catch (e) { return false; } }
  var plain = RM || /plain=1/.test(Q) || !webgl();
  root.classList.toggle('is-plain', plain);
  var state = 'closed', C = null, loading = false, pendingGo = null, desk = false, Lw = 0, lay = null, sheet = 0;

  // ---- geometria: la stessa della camera WebGL (unità libro: pagina larga 1, alta 1.4; dorso in x = 0)
  var OV = .018, HALF = .7, ZTOP = .135, PM = .1;
  var DIST = 2.99 * Math.tan(20 * Math.PI / 180) / Math.tan(13 * Math.PI / 180);
  function layout() {
    var vw = document.documentElement.clientWidth, vh = window.innerHeight, pw;
    desk = vw >= 1024;
    pw = desk ? Math.min(560, (vw - 176) / 2, (vh - 190) / 1.4) : Math.min((vw - 10) / 1.19, (vh - 300) / 1.4);
    pw = Math.floor(pw); var ph = Math.floor(pw * 1.4), fs = pw / 22;
    var sw = desk ? Math.min(vw, Math.round(2 * pw + 300)) : vw, top = 12 + Math.round(OV * pw * 1.5);
    var sh = Math.round(top + ph + OV * pw + 2.6 * fs);
    var pageL = desk ? sw / 2 : Math.round(.07 * pw + .085 * .4 * pw + 4);   // a sinistra il filo della metà letta, con i suoi segnapagina
    var vy = (top + ph / 2 - sh / 2) / pw;
    var vxOpen = desk ? 0 : (sw / 2 - pageL) / pw, vxClosed = desk ? .5 : vxOpen;
    function P(x, y, z, vx) { var k = DIST / (DIST - z); return { x: sw / 2 + (x - vx) * pw * k, y: sh / 2 - (y - vy) * pw * k }; }
    var c0 = P(0, HALF + OV, ZTOP, vxClosed), c1 = P(1 + OV, -(HALF + OV), ZTOP, vxClosed);
    var t0 = P(0, HALF, .05, vxOpen), t1 = P(1, -HALF, .05, vxOpen), tc = P(0, HALF, ZTOP, vxClosed);
    var p0 = P(-PM, HALF + OV + PM, 0, vxClosed), p1 = P(1 + OV + PM, 0, 0, vxClosed);
    lay = { P: P, DIST: DIST, desk: desk, pw: pw, ph: ph, fs: fs, sw: sw, sh: sh, view: { x: state === 'closed' ? vxClosed : vxOpen, y: vy, s: pw }, vxOpen: vxOpen, vxClosed: vxClosed };
    var S = root.style, px = function (v) { return v.toFixed(1) + 'px'; };
    S.setProperty('--pw', pw + 'px'); S.setProperty('--ph', ph + 'px'); S.setProperty('--fs', fs.toFixed(3) + 'px');
    S.setProperty('--sw', sw + 'px'); S.setProperty('--sh', sh + 'px');
    S.setProperty('--cx', px(c0.x)); S.setProperty('--cy', px(c0.y)); S.setProperty('--cw', px(c1.x - c0.x)); S.setProperty('--ch', px(c1.y - c0.y));
    S.setProperty('--tx', px(t0.x)); S.setProperty('--ty', px(t0.y)); S.setProperty('--pw', px(t1.x - t0.x)); S.setProperty('--ph', px(t1.y - t0.y));
    S.setProperty('--tdx', px(tc.x - t0.x));
    S.setProperty('--px0', px(p0.x)); S.setProperty('--py0', px(p0.y)); S.setProperty('--pw0', px(p1.x - p0.x));
    root.classList.toggle('is-portrait', !desk);
    return lay;
  }
  layout(); Lw = document.documentElement.clientWidth;

  // ---- stato, linguette, regione live
  function visibleNs() {
    if (C) return C.visible(sheet).filter(Boolean).map(function (f) { return f.el && f.el.classList.contains('pg--text') ? +f.el.dataset.n : -1; });
    return plainNs();
  }
  function mark() {
    var ns = state === 'closed' ? [] : visibleNs(), top = Math.max.apply(null, ns.concat([-1])), act = -1;
    tabs.forEach(function (t, i) { if (top >= +t.dataset.to) act = i; });
    tabs.concat(chaps).forEach(function (t, i) { if (i % tabs.length === act) t.setAttribute('aria-current', 'true'); else t.removeAttribute('aria-current'); });
    var max = C ? C.book.sheetCount : plainMax();
    prevB.disabled = state === 'closed' || sheet <= 0;
    nextB.disabled = sheet >= max;
    var lab = act >= 0 ? 'Capitolo «' + tabs[act].textContent + '»' : (sheet === 0 ? 'Copertina' : '');
    live.textContent = state === 'closed' ? 'Libro chiuso' : (lab ? lab + ', ' : '') + (top > 0 ? 'pagina ' + top : '');
  }
  function sheetFor(n) {
    if (C) return C.sheetForPage(n);
    return plainSheetFor(n);
  }

  // ---- WebGL
  function load() {
    if (plain || C || loading) return; loading = true;
    var tl = performance.now();
    import('./libro-3d.js?v=g9d').then(function (m) {
      return m.init(root, {
        host: gl, single: !desk, pw: lay.pw, view: lay.view, base: 'assets/', maxDpr: +(Q.match(/dpr=([\d.]+)/) || [0, 2])[1],
        shadowMap: desk ? 2048 : 1024,
        onSpread: function (t) { sheet = t; mark(); },
        onIdle: function (t) { sheet = t; mark(); if (fps) fps.stop(); }
      });
    }).then(function (c) {
      C = c; C.stats.load = performance.now() - tl; root.classList.add('is-3d'); loading = false;
      if (want) { want = false; open3d(); }
      mark();
    }).catch(function (e) { console.warn('libro 3D non disponibile, resta in HTML', e); loading = false; plain = true; root.classList.add('is-plain'); plainShow(); });
  }

  var want = false, untie0 = 0;
  function flush() { var f = pendingGo; pendingGo = null; if (f) setTimeout(f, 40); }
  function open(then) {
    if (then) pendingGo = then;
    if (state === 'open') { flush(); return; }
    if (state === 'opening') return;
    state = 'opening'; untie0 = performance.now(); root.classList.add('is-untying');   // il nastro si scioglie (resta data-state=closed)
    if (plain) { setTimeout(function () { state = 'open'; root.dataset.state = 'open'; root.classList.remove('is-untying'); plainGo(1); flush(); }, RM ? 260 : 620); return; }
    if (!C) { want = true; load(); return; }   // si apre appena il motore è pronto
    open3d();
  }
  function open3d() {
    setTimeout(function () {
      root.dataset.state = 'open';
      C.book.set('flip.flipTime', 1.15); C.book.set('book.interactive', true);
      if (fps) fps.start();
      C.book.next();
      if (desk) C.book.setView({ x: lay.vxOpen }, 1150);
      setTimeout(function () { C.book.set('flip.flipTime', .9); state = 'open'; root.classList.remove('is-untying'); mark(); flush(); }, 1180);
    }, Math.max(0, 600 - (performance.now() - untie0)));
  }
  function go(n) {
    if (state !== 'open') { open(function () { go(n); }); return; }
    var t = sheetFor(n); if (t === sheet && !(C && C.book.busy)) { mark(); return; }
    if (plain) { plainGo(t); return; }
    if (fps) fps.start();
    C.book.jumpTo(t);
  }
  function step(d) {
    if (state === 'closed') { if (d > 0) open(); return; }
    if (state !== 'open') return;
    if (plain) { plainGo(sheet + d); return; }
    if (fps) fps.start();
    if (d > 0) C.book.next(); else C.book.prev();
  }

  // ---- HTML semplice (riduci movimento / niente WebGL): stesse pagine, una o due alla volta, in dissolvenza
  var text = all.filter(function (p) { return p.classList.contains('pg--text'); });
  function plainSheets() { // ogni "foglio" è ciò che si vede insieme
    if (!desk) return [[all[0]]].concat(text.map(function (p) { return [p]; }));
    var out = [[null, all[0]]], rest = all.slice(1, -1);
    for (var i = 0; i < rest.length; i += 2) out.push([rest[i], rest[i + 1] || null]);
    return out;
  }
  function plainMax() { return plainSheets().length - 1; }
  function plainNs() { var s = plainSheets()[sheet] || []; return s.map(function (p) { return p && p.classList.contains('pg--text') ? +p.dataset.n : -1; }); }
  function plainSheetFor(n) { var S = plainSheets(); for (var i = 0; i < S.length; i++) if (S[i].some(function (p) { return p && +p.dataset.n === n; })) return i; return 0; }
  function plainShow() {
    var s = plainSheets()[sheet] || [];
    all.forEach(function (p) { p.classList.remove('is-on', 'at-l'); });
    if (state === 'closed') return;
    s.forEach(function (p, i) { if (!p) return; p.classList.add('is-on'); if (desk && i === 0) p.classList.add('at-l'); });
  }
  function plainGo(t) { t = Math.max(0, Math.min(plainMax(), t)); if (t === sheet && state === 'open' && flip.querySelector('.is-on')) return; sheet = t; plainShow(); mark(); }

  // ---- misuratore ?fps=1 (sul telefono vero)
  var fps = null;
  if (/fps=1/.test(Q)) {
    var mEl = document.createElement('div'); mEl.id = 'lb-fps'; mEl.textContent = 'fps: sfoglia per misurare'; document.body.appendChild(mEl);
    var fr = [], on = false;
    fps = { start: function () { if (on) return; on = true; fr = []; (function l(t) { fr.push(t); if (on) requestAnimationFrame(l); })(performance.now()); },
      stop: function () { if (!on) return; on = false; var d = fr.slice(1).map(function (t, i) { return t - fr[i]; }); if (!d.length) return; var ms = fr[fr.length - 1] - fr[0];
        mEl.textContent = 'fps ' + (1000 * d.length / ms).toFixed(0) + ' · scatti >25ms: ' + d.filter(function (x) { return x > 25; }).length + '/' + d.length + ' · peggiore ' + Math.max.apply(null, d).toFixed(0) + 'ms'; } };
  }

  // ---- eventi
  openB.addEventListener('click', function () { load(); open(); });
  tabs.concat(chaps).forEach(function (t) { t.addEventListener('click', function () { load(); go(+t.dataset.to); }); });
  // [g9] indice del frontespizio: le voci HTML (versione semplice) e, sopra il WebGL, bottoni invisibili che seguono le voci dipinte
  var tocBox = root.querySelector('.lb-toc'), tocDom = [].slice.call(root.querySelectorAll('.fr-e'));
  tocDom.forEach(function (t) { t.addEventListener('click', function () { load(); go(+t.dataset.to); }); });
  var tocHit = tocDom.map(function (t) {
    var b = document.createElement('button'); b.type = 'button'; b.className = 'lb-toc-hit'; b.dataset.to = t.dataset.to; b.tabIndex = -1;
    b.addEventListener('click', function () { go(+b.dataset.to); }); tocBox.appendChild(b); return b;
  });
  prevB.addEventListener('click', function () { step(-1); });
  nextB.addEventListener('click', function () { load(); step(1); });
  stage.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowRight') { e.preventDefault(); load(); step(1); }
    else if (e.key === 'ArrowLeft') { e.preventDefault(); step(-1); }
  });
  if (plain) { var x0 = null;
    stage.addEventListener('pointerdown', function (e) { x0 = e.clientX; });
    stage.addEventListener('pointerup', function (e) { if (x0 === null) return; var dx = e.clientX - x0; x0 = null; if (Math.abs(dx) > 40) step(dx < 0 ? 1 : -1); }); }
  window.addEventListener('resize', function () {
    var w = document.documentElement.clientWidth; if (w === Lw) return; Lw = w;
    var was = desk; layout();
    if (C) {
      if (was !== desk) { location.reload(); return; }   // prototipo: cambio tra una e due pagine = si ricarica
      C.book.setView(state === 'closed' ? { x: lay.vxClosed, y: lay.view.y, s: lay.pw } : { x: lay.vxOpen, y: lay.view.y, s: lay.pw });
    }
    if (plain) plainShow();
  });

  // «Leggi tutto il testo»: lo stesso testo delle pagine, in colonna
  var dlg = root.querySelector('.lb-dlg'), dlgB = root.querySelector('.lb-dlg-b');
  root.querySelector('.lb-all').addEventListener('click', function () {
    if (!dlgB.childElementCount) all.forEach(function (p) {
      var b = p.querySelector('.pg-body'); if (!b || !b.textContent.trim()) return;
      var s = document.createElement('section'), c = b.cloneNode(true);
      c.querySelectorAll('[id]').forEach(function (x) { x.removeAttribute('id'); });
      c.querySelectorAll('img').forEach(function (i) { i.loading = 'lazy'; });
      s.appendChild(c); dlgB.appendChild(s);
    });
    if (dlg.showModal) dlg.showModal(); else dlg.setAttribute('open', '');
  });
  root.querySelector('.lb-x').addEventListener('click', function () { dlg.close(); });
  dlg.addEventListener('click', function (e) { if (e.target === dlg) dlg.close(); });

  root.lbDebug = function () { return { state: state, sheet: sheet, busy: !!(C && C.book.busy), plain: plain, ready: !!C, desk: desk, tab: (root.querySelector('.tab[aria-current]') || {}).textContent || null, stats: C ? C.stats : null, tex: C ? [C.PW, C.PH] : null, dpr: C ? C.book.renderer.getPixelRatio() : null }; };
  root.lbLay = function () { return lay; };
  // ---- segnapagina: disegnati in WebGL sul foglio del loro capitolo; qui solo bottoni invisibili (≥44 px) che li seguono a ogni frame
  var TW = .085, TH = Math.min(.19, (.9 - (tabs.length - 1) * .045) / Math.max(1, tabs.length)), stageR = null;
  function syncTabs() {
    if (plain) return;
    var v = C ? C.book.view : lay.view, sw = lay.sw, sh = lay.sh;
    function pr(x, y, z) { var k = DIST / (DIST - z); return { x: sw / 2 + (x - v.x) * v.s * k, y: sh / 2 - (y - v.y) * v.s * k }; }
    tabs.forEach(function (b, i) {
      var inf = C ? C.tabs[i] : { y1: 1 - .05 - i * (TH + .045), y0: 1 - .05 - i * (TH + .045) - TH, sheet: -1 };
      var left = C ? C.book.progress(inf.sheet) > .5 : false, x0, x1;
      if (!left) { x0 = 1; x1 = 1 + TW; } else if (!desk) { x0 = -(.07 + TW * .4); x1 = -.07; } else { x0 = -1 - TW; x1 = -1; }
      var a = pr(x0, (inf.y1 - .5) * 1.4, .06), c = pr(x1, (inf.y0 - .5) * 1.4, .06);
      var w = Math.max(44, Math.abs(c.x - a.x) + 14), h = Math.max(44, Math.abs(c.y - a.y)), cx = (a.x + c.x) / 2, cy = (a.y + c.y) / 2;
      var st = b.style; st.left = Math.max(0, Math.min(sw - w, cx - w / 2)).toFixed(1) + 'px'; st.top = (cy - h / 2).toFixed(1) + 'px'; st.width = w.toFixed(1) + 'px'; st.height = h.toFixed(1) + 'px';
      b.dataset.lato = left ? 'sinistra' : 'destra';
    });
  }
  function syncToc() {
    var f = C && C.stats.fills && C.stats.fills['2'], toc = f && f.toc, on = !!toc && state === 'open' && !C.book.busy && sheet === sheetFor(2);
    tocBox.classList.toggle('is-on', on); if (!on) return;
    var v = C.book.view, sw = lay.sw, sh = lay.sh;
    function pr(x, y, z) { var k = DIST / (DIST - z); return { x: sw / 2 + (x - v.x) * v.s * k, y: sh / 2 - (y - v.y) * v.s * k }; }
    toc.forEach(function (r) {
      var b = tocHit.filter(function (h) { return +h.dataset.to === r.to; })[0]; if (!b) return;
      var a = pr(r.x0, (.5 - r.y0) * 1.4, .05), c = pr(r.x1, (.5 - r.y1) * 1.4, .05);
      var h = Math.max(44, c.y - a.y), cy = (a.y + c.y) / 2, st = b.style;
      st.left = a.x.toFixed(1) + 'px'; st.width = (c.x - a.x).toFixed(1) + 'px'; st.top = (cy - h / 2).toFixed(1) + 'px'; st.height = h.toFixed(1) + 'px';
    });
  }
  (function loop() { if (!document.hidden) { syncTabs(); if (!plain) syncToc(); } requestAnimationFrame(loop); })();
  root.lbPagina = function (i) { return C ? C.renderPage(i).then(function (c) { return c ? c.toDataURL('image/jpeg', .8) : null; }) : null; };

  // il motore si scarica solo vicino alla sezione o al primo tocco
  if (!plain) {
    if (/carica=subito/.test(Q)) load();
    else if ('IntersectionObserver' in window) {
      var io = new IntersectionObserver(function (es) { if (es.some(function (e) { return e.isIntersecting; })) { io.disconnect(); load(); } }, { rootMargin: '600px 0px' });
      io.observe(root);
    } else load();
    stage.addEventListener('pointerdown', load, { once: true });
  }
  mark();
})();
