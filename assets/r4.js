/* r4: menu classico (desktop tendina, mobile accordion). Stati per screenshot: ?drop=<i> (desktop), ?open=menu[&sub=<i>] (mobile). */
(()=>{
  'use strict';
  const q=(s,r=document)=>r.querySelector(s), qa=(s,r=document)=>[...r.querySelectorAll(s)];
  const desk=matchMedia('(min-width:1024px)');
  const params=new URLSearchParams(location.search);

  /* ---------- desktop ---------- */
  const tops=qa('.nav-top[aria-controls]');
  let openTop=null, hoverTimer=0, openedAt=0, byHover=false;
  function openDrop(btn){
    if(openTop&&openTop!==btn)closeDrop(false);
    const dd=q('#'+btn.getAttribute('aria-controls'));
    dd.hidden=false; requestAnimationFrame(()=>dd.classList.add('is-open'));
    btn.setAttribute('aria-expanded','true'); openTop=btn; openedAt=Date.now();
  }
  function closeDrop(focus){
    if(!openTop)return;
    const btn=openTop, dd=q('#'+btn.getAttribute('aria-controls'));
    dd.classList.remove('is-open'); dd.hidden=true;
    btn.setAttribute('aria-expanded','false'); openTop=null;
    if(focus)btn.focus();
  }
  tops.forEach(btn=>{
    const item=btn.closest('.nav-item');
    btn.addEventListener('click',e=>{e.preventDefault();clearTimeout(hoverTimer);if(openTop===btn){if(byHover&&Date.now()-openedAt<600){byHover=false;return}closeDrop(false)}else{byHover=false;openDrop(btn)}});
    btn.addEventListener('keydown',e=>{if(e.key==='ArrowDown'){e.preventDefault();openDrop(btn);q('a',q('#'+btn.getAttribute('aria-controls'))).focus()}});
    item.addEventListener('mouseenter',()=>{if(!matchMedia('(hover:hover)').matches)return;clearTimeout(hoverTimer);hoverTimer=setTimeout(()=>{if(openTop!==btn){openDrop(btn);byHover=true}},150)});
    item.addEventListener('mouseleave',()=>{if(!matchMedia('(hover:hover)').matches)return;clearTimeout(hoverTimer);hoverTimer=setTimeout(()=>{if(openTop===btn)closeDrop(false)},150)});
    item.addEventListener('focusout',e=>{if(openTop===btn&&!item.contains(e.relatedTarget))closeDrop(false)});
  });
  document.addEventListener('click',e=>{if(openTop&&!e.target.closest('.nav-item'))closeDrop(false)});

  /* ---------- mobile ---------- */
  const toggle=q('.menu-toggle'), panel=q('#m-panel');
  let lastFocus=null, savedY=0;
  function lock(){savedY=scrollY;document.body.style.top=(-savedY)+'px';document.documentElement.classList.add('is-locked')}
  function unlock(){document.documentElement.classList.remove('is-locked');document.body.style.top='';scrollTo(0,savedY)}
  window.bzLock=lock; window.bzUnlock=unlock;
  function openMenu(){
    lastFocus=document.activeElement;
    panel.hidden=false; panel.removeAttribute('inert');
    requestAnimationFrame(()=>panel.classList.add('is-open'));
    lock();
    toggle.setAttribute('aria-expanded','true');
    q('.m-close',panel).focus({preventScroll:true});
  }
  function closeMenu(){
    panel.classList.remove('is-open'); panel.hidden=true; panel.setAttribute('inert','');
    unlock();
    toggle.setAttribute('aria-expanded','false');
    (lastFocus&&lastFocus.isConnected?lastFocus:toggle).focus({preventScroll:true});
  }
  function setSub(btn,open){
    const sub=q('#'+btn.getAttribute('aria-controls'));
    btn.setAttribute('aria-expanded',String(open)); sub.hidden=!open; sub.classList.toggle('is-open',open);
  }
  if(toggle&&panel){
    toggle.addEventListener('click',openMenu);
    q('.m-close',panel).addEventListener('click',closeMenu);
    qa('.m-row[aria-controls]',panel).forEach(btn=>btn.addEventListener('click',()=>{
      const willOpen=btn.getAttribute('aria-expanded')!=='true';
      qa('.m-row[aria-controls]',panel).forEach(b=>b!==btn&&setSub(b,false));
      setSub(btn,willOpen);
    }));
    panel.addEventListener('keydown',e=>{
      if(e.key!=='Tab')return;
      const f=qa('a[href],button',panel).filter(x=>x.getClientRects().length);
      if(e.shiftKey&&document.activeElement===f[0]){e.preventDefault();f.at(-1).focus()}
      else if(!e.shiftKey&&document.activeElement===f.at(-1)){e.preventDefault();f[0].focus()}
    });
    desk.addEventListener('change',()=>{if(desk.matches&&!panel.hidden)closeMenu()});
  }
  document.addEventListener('keydown',e=>{
    if(e.key!=='Escape')return;
    if(panel&&!panel.hidden){e.preventDefault();closeMenu()}
    else if(openTop){e.preventDefault();closeDrop(true)}
  });

  /* ---------- stati da URL (solo per screenshot) ---------- */
  if(params.has('drop')&&desk.matches){const b=tops[+params.get('drop')];if(b)openDrop(b)}
  if(params.get('open')==='menu'&&!desk.matches&&panel){
    openMenu();
    if(params.has('sub')){const b=qa('.m-row[aria-controls]',panel)[+params.get('sub')];if(b)setSub(b,true)}
  }
})();
