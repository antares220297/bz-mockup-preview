/* «Completa il rituale»: stesso comportamento del tema (assets/bz-v411c.js, ritualSelection/paintRitual), carrello simulato nel mockup */
(() => {
  const q = (s, r = document) => r.querySelector(s), qa = (s, r = document) => [...r.querySelectorAll(s)];
  const euro = cents => (cents / 100).toLocaleString('it-IT', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + '\u00a0€';
  const addItems = () => new Promise(r => setTimeout(() => r(true), 400));
  function ritualSelection(panel) {
    const inputs = qa('input[data-variant]', panel), checked = inputs.filter(i => i.checked);
    const bundle = panel.dataset.bundleVariant && checked.length > 0 && checked.length === inputs.length;
    const sum = bundle ? Number(panel.dataset.bundlePrice) : checked.reduce((t, i) => t + Number(i.dataset.price), 0);
    return { checked, bundle, sum };
  }
  function paintRitual(panel) {
    const { checked, bundle, sum } = ritualSelection(panel), count = checked.length;
    q('.ritual-count', panel).textContent = count + (count === 1 ? ' pezzo scelto' : ' pezzi scelti');
    q('.ritual-sum', panel).textContent = euro(sum);
    qa('.ritual-compare, .ritual-saving', panel).forEach(n => { n.hidden = !bundle; });
    q('[data-bz-add-set]', panel).disabled = count === 0 || panel.hasAttribute('aria-busy');
  }
  document.addEventListener('change', e => {
    if (!e.target.matches('.ritual-row input[data-variant]')) return;
    const panel = e.target.closest('[data-ritual-set]');
    panel.closest('[data-bz-ritual]').setAttribute('data-ritual-interacted', '');
    paintRitual(panel);
  });
  document.addEventListener('click', async e => {
    const t = e.target.closest('[data-bz-add-set]'), ritual = t?.closest('[data-bz-ritual]');
    if (!ritual) return;
    const panel = q('[data-ritual-set]:not([hidden])', ritual);
    const { checked } = ritualSelection(panel);
    if (!checked.length || panel.hasAttribute('aria-busy')) return;
    panel.setAttribute('aria-busy', 'true');
    const status = q('[data-ritual-status]', panel); status.textContent = '';
    try { if (!await addItems()) status.textContent = 'Non è stato possibile aggiungere i pezzi al carrello.'; }
    catch { status.textContent = 'Non è stato possibile aggiornare il carrello.'; }
    finally { panel.removeAttribute('aria-busy'); paintRitual(panel); }
  });
})();
