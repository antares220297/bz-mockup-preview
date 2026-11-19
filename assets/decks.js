/* Benessere Zen · mazzi delle intenzioni in due pannelli «come Chi siamo» (approvati da Michael, v3, 19/11/2026).
   Legge BZ_DECKS / BZ_COPY / BZ_BACKS da cards-data.js. Layout dei pannelli in decks.css, facce in cards.css.
   Ogni mazzo sta su due file (6 = 3+3, 10 = 5+5): ogni fila è un piccolo ventaglio, la fila sotto è un po' più larga.
   Una sola scala di carta per i due mazzi, decisa dal mazzo da 10 nella colonna del mazzo (60% del pannello).
   Stati: riposo (dorsi, ventaglio chiuso) -> aperto (fronti) -> carta attiva (estratta).
   Desktop: si apre all'ingresso nel viewport o in hover; l'hover estrae la carta sotto il puntatore; il clic la apre.
   Touch: tocco = estrae, tocco su un'altra = cambia, secondo tocco o «Apri la carta» = apre; scorrendo oltre torna a riposo.
   Tastiera: frecce tra le carte, Invio/Spazio apre, Esc richiude. Animazioni solo transform e opacity; ferme con reduced motion. */
(function(){
  const C=window.BZ_COPY,D=window.BZ_DECKS,BACKS=window.BZ_BACKS||{};
  const RM=matchMedia('(prefers-reduced-motion: reduce)');
  const FINE=matchMedia('(hover:hover) and (pointer:fine)');
  const DEMO=location.protocol==='file:'||/[?&]demo/.test(location.search);
  const rad=d=>d*Math.PI/180;
  if(!C.showMotti) document.documentElement.classList.add('no-motti');

  /* geometria comune ai due mazzi.
     rot: gradi per posizione nella fila; curve: discesa delle carte esterne (× altezza carta); rowGap: distanza tra le file (× altezza);
     wide: la fila sotto è più larga; sp: passo tra le carte (× larghezza) che lascia leggere per intero i nomi delle carte coperte a 1440
     (0,6 sotto i 768px, dove i nomi coperti sono parziali come in M1); fw: il mazzo da 10 occupa l'85% della colonna; cap: carta massima. */
  /* 19/11 sera (Michael da iPhone): carte più grandi.
     Sotto i 768px il 5+5 aperto riempie il pannello lasciando sideMobile (18px) per lato; passo 0,5: la striscia scoperta di ogni carta
     resta larga come prima (0,5 × 94 ≈ 0,6 × 79 = 47px a 390), le carte crescono del 19%. Il 3+3 usa la stessa carta.
     Da 768 in su il 10 occupa il 92% della colonna (era 85%), tetto 156px (era 140): sempre ≥ 16px dal bordo del pannello.
     edge: distanza minima della carta estratta (ingrandita) dal bordo dello stage. */
  /* 19/11 notte (Michael: «allargare un po' tutte… trovare l'equilibrio»).
     Mobile: file da 3 a passo 0,8 (nomi interi, la carta non cambia); file da 5 da 0,5 a 0,55 (carta −6%).
     Per avere ≥85% di nome anche su Concentrazione/Comunicazione nel 5+5 servirebbe passo 0,73 → carta 72,5px a 390: nome 8,1px e le pietre (10px)
     non ci stanno più (il disco scende al 12% della carta). Misure in shots/finale-pannelli/controlli.md.
     Desktop: file da 3 a passo 0,95; quando la carta è al tetto anche il passo del 5+5 cresce fino a spMax. */
  /* 19/11 22:45 (riferimento di Michael, ricerca/iphone-michael-2158/rif-arco-michael.png): su mobile ogni fila è un arco a mano di carte.
     Carta centrale dritta e più alta, laterali ±6° e ±12° (rotMobile 6 per posizione) con caduta 0,07 × altezza × posizione² (0,07 e 0,28);
     carte quasi affiancate (passo 0,78 della carta nel 5+5, 0,85 nel 3+3; nomi coperti ≥ 85%), fila sotto uguale (wideMobile 1), file distanziate 1,1 × altezza. Il 3+3 segue la stessa logica.
     Desktop invariato. */
  const P={rot:3,curve:.03,rowGap:.8,wide:1.07,sp:.79,spMax:.95,spMobile:.78,sp3:.95,sp3Mobile:.85,fw:.92,sideMobile:11,cap:156,minTwoCol:100,deckCol:.6,edge:16,edgeMobile:8,rotMobile:6,curveMobile:.07,wideMobile:1,stagMobile:0,rowGapMobile:1.1};
  const MOB=()=>innerWidth<768;
  const spNow=()=>MOB()?P.spMobile:P.sp;
  const rotNow=()=>MOB()?P.rotMobile:P.rot, curveNow=()=>MOB()?P.curveMobile:P.curve, wideNow=()=>MOB()?P.wideMobile:P.wide, stagNow=()=>MOB()?P.stagMobile:0;
  const sp3Now=()=>MOB()?P.sp3Mobile:P.sp3; // passo delle file da 3 (il 3+3): può essere più ampio, c'è spazio ai lati
  /* la carta più grande per cui il mazzo da 10 (5+5) sta nella larghezza W (desktop: 92% di W; mobile: W meno 18px per lato) */
  function fit10(W,spk){ const sp=spk||spNow(), avail=MOB()?W-2*P.sideMobile:P.fw*W;
    for(let cw=P.cap;cw>=50;cw-=.5){ const ch=cw*12/7; let a=0;
      for(let i=0;i<10;i++){ const row=i<5?0:1,rel=i%5-2,x=rel*sp*cw*(row?wideNow():1)+(row?-1:1)*stagNow()*sp*cw/2,r=rad(rel*rotNow());
        a=Math.max(a,Math.abs(x)+cw/2*Math.cos(r)+ch/2*Math.abs(Math.sin(r))); }
      if(2*a<=avail) return cw; }
    return 50; }
  /* una colonna sotto i 768px, oppure quando a due colonne la carta verrebbe sotto i 100px: testo sopra, mazzo sotto */
  function columns(){ const H=document.documentElement, d=document.querySelector('.deck[data-deck]'); if(!d) return;
    H.classList.remove('tar-1col');
    if(innerWidth<768||fit10(d.clientWidth*P.deckCol)<P.minTwoCol) H.classList.add('tar-1col'); }

  function face(c,deck){
    const art=c.art?`<img src="${c.art}" alt="" decoding="async" onerror="this.style.visibility='hidden'">`:'';
    const back=BACKS[deck]?`<img src="${BACKS[deck]}" alt="" decoding="async">`:'';
    return `<span class="tc__glow" aria-hidden="true"></span><span class="tc__flip" aria-hidden="true">
<span class="tc__face tc__front"><span class="tc__num"><i class="tc__bz"></i></span><span class="tc__art"><span class="tc__sym tc__sym--art">${art}</span></span>
<span class="tc__cart"><span class="tc__title">${c.title}</span><span class="tc__motto">${c.motto}</span></span>
<span class="tc__stones">${c.stones.map(x=>`<span>${x}</span>`).join('')}</span></span>
<span class="tc__face tc__back"><span class="tc__seal">${back}</span><span class="tc__brand">Benessere Zen</span></span></span>`;
  }

  function Deck(root){
    const key=root.dataset.deck,cards=D[key],n=cards.length,name=root.dataset.name;
    const stage=root.querySelector('.deck__stage'),fan=root.querySelector('.deck__fan'),openBtn=root.querySelector('.deck__open');
    fan.setAttribute('aria-label',C.deckAria(name,n));
    fan.innerHTML=cards.map((c,i)=>`<li class="tc tc--${c.slug}" data-i="${i}"><a class="tc__hit" href="${c.href}" aria-label="${C.cardAria(c.title,i+1,n)}" data-i="${i}">${face(c,key)}</a></li>`).join('');
    const els=[...fan.children],links=els.map(e=>e.firstElementChild);
    const rowsArr=n%2===0?[n/2,n/2]:[Math.floor(n/2),Math.ceil(n/2)];
    let st={open:false,active:-1,sel:-1},G={},lastPtr='mouse',downIdx=-1;

    /* posa di una carta (serve sia al disegno sia al calcolo dell'ingombro) */
    function rowOf(i){ let s=0,r=0; while(i>=s+rowsArr[r]){ s+=rowsArr[r]; r++; } return [r,i-s]; }
    function pose(i,o,g){
      const open=o.open, act=open?o.act:-1, [row,col]=rowOf(i), cnt=rowsArr[row], rel=col-(cnt-1)/2;
      const k=open?1:g.ck, wf=row===rowsArr.length-1?g.wide:1, st=rowsArr.length>1?(row===0?1:-1)*g.stag/2:0;
      let x=(rel*wf+st)*(cnt<=3?g.sp3:g.sp)*k, a=rel*g.rot*(open?1:.45), y=row*g.rowGap+g.curve*rel*rel*(open?1:.45)+(open?0:g.ch*.03);
      const isA=i===act;
      if(act>=0&&!isA&&rowOf(act)[0]===row) x+=Math.sign(i-act)*g.pushX;
      let rot=a, sc=act>=0?(isA?g.scale:.97):1;
      if(isA){ const grow=(sc-1)*g.ch/2; // la fila sopra cresce verso il basso, quella sotto verso l'alto: resta nell'ingombro delle file
        y+=row===0?grow-g.lift:-grow-g.lift; rot=a*.12;
        const r=rad(rot), ex=sc*(g.cw/2*Math.cos(r)+g.ch/2*Math.abs(Math.sin(r))); x=Math.max(-(g.hw-ex),Math.min(g.hw-ex,x)); }
      return {rel,isA,x,y,rot,sc};
    }
    const states=()=>{ const S=[{open:false,act:-1},{open:true,act:-1}]; for(let j=0;j<n;j++) S.push({open:true,act:j}); return S; };
    /* ingombro su tutti gli stati raggiungibili. Coordinate: x dal centro dello stage, y dal top delle carte */
    function extent(g){ let minX=1e9,maxX=-1e9,minY=1e9,maxY=-1e9;
      for(const o of states()) for(let i=0;i<n;i++){ const p=pose(i,o,g), r=rad(p.rot), c=Math.abs(Math.cos(r)), sn=Math.abs(Math.sin(r));
        const ex=p.sc*(g.cw/2*c+g.ch/2*sn), ey=p.sc*(g.cw/2*sn+g.ch/2*c), cy=p.y+g.ch/2;
        minX=Math.min(minX,p.x-ex); maxX=Math.max(maxX,p.x+ex); minY=Math.min(minY,cy-ey); maxY=Math.max(maxY,cy+ey); }
      return {minX,maxX,minY,maxY,w:Math.max(-minX,maxX)}; }
    /* posizione del titolo nella carta (in rapporto alla larghezza: con le unità cqw non dipende dalla taglia) */
    let TM=null;
    function titleMetrics(){
      if(TM) return TM; const out=[];
      for(const li of els){ const t=li.querySelector('.tc__title'), fl=li.querySelector('.tc__flip');
        const sv=[li.style.transform,li.style.transition,fl.style.transform,fl.style.transition,t.style.transform,t.style.transition];
        li.style.transition=fl.style.transition=t.style.transition='none'; li.style.transform=fl.style.transform=t.style.transform='none';
        const L=li.getBoundingClientRect(), rg=document.createRange(); rg.selectNodeContents(t);
        const R=[...rg.getClientRects()].filter(r=>r.width>1), cr=t.parentElement.getBoundingClientRect(), cp=parseFloat(getComputedStyle(t.parentElement).paddingLeft)||0;
        [li.style.transform,li.style.transition,fl.style.transform,fl.style.transition,t.style.transform,t.style.transition]=sv;
        if(!L.width||!R.length) return null;
        const x0=Math.min(...R.map(r=>r.left)),x1=Math.max(...R.map(r=>r.right));
        // lo: il nome scivola a sinistra al massimo fino al bordo interno del cartiglio (mai fuori dal cartiglio)
        out.push({l:(x0-L.left)/L.width,w:(x1-x0)/L.width,lo:(cr.left+cp-L.left)/L.width}); }
      return TM=out;
    }
    if(document.fonts&&document.fonts.ready) document.fonts.ready.then(()=>{TM=null;geom();render(true);equalize();});
    /* le carte a destra stanno sopra: di ogni carta coperta resta una striscia a sinistra larga quanto il passo.
       Il titolo delle coperte scivola a sinistra (al massimo fino al bordo interno del cartiglio) quanto basta per stare nella striscia. */
    function geom(){
      TM=null; // il corpo del nome dipende dalla larghezza: rimisuro
      const W=stage.clientWidth, cw=fit10(W), ch=cw*12/7; let spk=spNow();
      // carta al tetto (schermi larghi): lo spazio che avanza allarga il passo, fino a spMax, senza rimpicciolire la carta
      if(!MOB()&&cw>=P.cap) while(spk+.01<=P.spMax&&fit10(W,spk+.01)>=P.cap) spk+=.01;
      const sp=cw*spk, sp3=cw*(MOB()?P.sp3Mobile:Math.max(P.sp3,spk)), fine=FINE.matches;
      root.style.setProperty('--cw',cw+'px');
      const T=titleMetrics(); // misuro i nomi alla taglia giusta
      const g={cw,ch,sp,sp3,rot:rotNow(),wide:wideNow(),stag:stagNow(),rowGap:ch*(MOB()?P.rowGapMobile:P.rowGap),curve:ch*curveNow(),ck:.34,pushX:cw*.05,lift:ch*(fine?.05:.07),scale:fine?1.1:1.15,hw:W/2-(MOB()?P.edgeMobile:P.edge)};
      const tx=els.map((_,i)=>{ if(!T) return 0; const [r,col]=rowOf(i); if(col===rowsArr[r]-1) return 0;
        const sw=(rowsArr[r]<=3?sp3:sp)*(r===rowsArr.length-1?wideNow():1), need=(T[i].l+T[i].w)*cw-(sw-4); return need>0?Math.max((T[i].lo-T[i].l)*cw,-need):0; });
      els.forEach((el,i)=>el.style.setProperty('--tx',tx[i].toFixed(1)+'px'));
      const e=extent(g), top=-e.minY+2, H=Math.ceil(e.maxY-e.minY+4);
      G={W,top,H,H0:H,...g,ext:e};
      root.style.setProperty('--cw',cw+'px'); stage.style.setProperty('--top',top+'px'); stage.style.height=H+'px';
    }
    function render(instant){
      const open=st.open||RM.matches;
      root.classList.toggle('is-open',open); fan.classList.toggle('is-backs',!open);
      const act=st.active>=0?st.active:st.sel, o={open,act};
      els.forEach((el,i)=>{ const p=pose(i,o,G);
        el.style.transform=`translate(${p.x.toFixed(1)}px,${p.y.toFixed(1)}px) rotate(${p.rot.toFixed(2)}deg) scale(${p.sc})`;
        el.style.zIndex=p.isA?50:i+1; el.classList.toggle('is-active',p.isA);
        // ingresso e uscita a cascata dal centro della fila
        el.style.setProperty('--d',instant||RM.matches?'0ms':(Math.round(Math.abs(p.rel)*45+rowOf(i)[0]*60))+'ms');
        el.style.setProperty('--fd',RM.matches?'0ms':(120+Math.round(Math.abs(p.rel)*55+rowOf(i)[0]*60))+'ms');
        if(i===st.sel) links[i].setAttribute('aria-current','true'); else links[i].removeAttribute('aria-current'); });
      root.classList.toggle('has-sel',st.sel>=0&&open);
      if(st.sel>=0){ openBtn.href=cards[st.sel].href; openBtn.setAttribute('aria-label',C.openAria(cards[st.sel].title)); }
    }
    function setOpen(v){ if(st.open===v) return; st.open=v; if(!v){st.active=-1;st.sel=-1;} render(); }
    function setActive(i){ if(st.active===i) return; st.active=i; render(true); }
    function select(i){ st.sel=i; render(true); // una sola carta scelta nella sezione
      document.querySelectorAll('.deck[data-deck]').forEach(o=>{ if(o!==root&&o.__deck&&o.__deck.st.sel>=0){ o.__deck.st.sel=-1; o.__deck.render(true); } }); }
    function go(i){ const c=cards[i]; if(DEMO){ toast('Si apre la pagina «'+c.title.replace(/\s+/g,' ')+'»  →  '+c.href); return; } location.href=c.href; }
    /* desktop: la carta (posa aperta) sotto il puntatore; vince quella sopra */
    function pickFromPointer(e){
      const r=stage.getBoundingClientRect(), px=e.clientX-r.left-r.width/2, py=e.clientY-r.top;
      for(let i=n-1;i>=0;i--){ const p=pose(i,{open:true,act:-1},G), t=-rad(p.rot), dx=px-p.x, dy=py-(G.top+p.y+G.ch/2);
        const u=dx*Math.cos(t)-dy*Math.sin(t), v=dx*Math.sin(t)+dy*Math.cos(t); if(Math.abs(u)<=G.cw/2&&Math.abs(v)<=G.ch/2) return i; }
      return -1;
    }
    stage.addEventListener('pointermove',e=>{ if(e.pointerType!=='mouse'&&e.pointerType!=='pen') return; lastPtr='mouse';
      if(!st.open) setOpen(true); setActive(pickFromPointer(e)); stage.style.cursor=st.active>=0?'pointer':''; });
    stage.addEventListener('pointerleave',e=>{ if(e.pointerType==='mouse') setActive(-1); });
    stage.addEventListener('pointerenter',e=>{ if(e.pointerType==='mouse') setOpen(true); });
    stage.addEventListener('pointerdown',e=>{ if(e.pointerType==='mouse') return; lastPtr='touch';
      // il touch di Chrome «aggiusta» il bersaglio verso la carta vicina: prendo quella che sta davvero sotto il dito
      const h=document.elementFromPoint(e.clientX,e.clientY), tc=h&&h.closest('.tc'); downIdx=tc&&fan.contains(tc)?+tc.dataset.i:-1; });
    stage.addEventListener('click',e=>{
      const a=e.target.closest('.tc__hit');
      if(lastPtr==='mouse'&&e.detail>0){ e.preventDefault(); if(st.active>=0) go(st.active); return; }
      if(!a&&!(lastPtr==='touch'&&downIdx>=0)) return;
      e.preventDefault();
      const i=(lastPtr==='touch'&&downIdx>=0&&e.detail>0)?downIdx:+a.dataset.i;
      if(e.detail===0){ go(i); return; } // tastiera: Invio
      if(!st.open) setOpen(true);
      if(st.sel===i) go(i); else select(i);
    });
    links.forEach((l,i)=>{
      l.addEventListener('focus',()=>{ if(!l.matches(':focus-visible')) return; if(!st.open) st.open=true;
        if(FINE.matches||lastPtr==='mouse'){ st.active=i; render(true); } else select(i); });
      l.addEventListener('blur',()=>{ setTimeout(()=>{ if(!root.contains(document.activeElement)){ st.active=-1; render(true); } },0); });
      l.addEventListener('keydown',e=>{
        if(e.key==='ArrowRight'||e.key==='ArrowLeft'){ e.preventDefault(); links[Math.max(0,Math.min(n-1,i+(e.key==='ArrowRight'?1:-1)))].focus(); }
        else if(e.key===' '||e.key==='Spacebar'){ e.preventDefault(); go(i); }
        else if(e.key==='Escape'){ e.preventDefault(); st.active=-1; st.sel=-1; st.open=false; render(); } });
    });
    openBtn.addEventListener('click',e=>{ e.preventDefault(); if(st.sel>=0) go(st.sel); });
    // ingresso nel viewport = si apre; uscita (scorrendo oltre) = torna a riposo, salvo fuoco da tastiera dentro
    const io=new IntersectionObserver(es=>es.forEach(en=>{
      root.classList.toggle('is-live',en.isIntersecting);
      if(en.intersectionRatio>=.55) setOpen(true);
      else if(en.intersectionRatio<.12&&!(root.contains(document.activeElement)&&document.activeElement.matches(':focus-visible'))) setOpen(false);
    }),{threshold:[0,.12,.3,.55,.8,1]});
    geom(); render(true); io.observe(stage);
    /* riquadri di tutte le carte lungo ogni transizione tra stati (translate e rotate si interpolano a parte), in coordinate dello stage: per i controlli */
    function boxes(){ const g=G,b=[],S=states(),PS=S.map(o=>els.map((_,i)=>pose(i,o,g)));
      for(let a=0;a<PS.length;a++) for(let z=a;z<PS.length;z++) for(let i=0;i<n;i++){ const A=PS[a][i],B=PS[z][i];
        for(let k=0;k<=(a===z?0:10);k++){ const t=k/10, L=(u,v)=>u+(v-u)*t, x=L(A.x,B.x), y=L(A.y,B.y), sc=L(A.sc,B.sc), r=rad(L(A.rot,B.rot));
          const c=Math.abs(Math.cos(r)),sn=Math.abs(Math.sin(r)), ex=sc*(g.cw/2*c+g.ch/2*sn), ey=sc*(g.cw/2*sn+g.ch/2*c), cy=y+g.ch/2;
          b.push([g.W/2+x-ex,g.top+cy-ey,g.W/2+x+ex,g.top+cy+ey]); } }
      return b; }
    root.__deck={st,get G(){return G},render,select,setOpen,geom,boxes,stage,tm:()=>{TM=null;return titleMetrics();}};
  }
  /* i due pannelli hanno la stessa altezza (a due colonne): lo stage più basso prende l'altezza dell'altro, il mazzo resta centrato */
  function equalize(){ const Ds=[...document.querySelectorAll('.deck[data-deck]')].filter(d=>d.__deck); if(Ds.length<2) return;
    const one=document.documentElement.classList.contains('tar-1col'), H=one?0:Math.max(...Ds.map(d=>d.__deck.G.H0));
    Ds.forEach(d=>{ const s=d.__deck.stage, g=d.__deck.G, h=one?g.H0:H, top=g.top-(g.H-g.H0)/2+(h-g.H0)/2;
      // g.top era già spostato dall'eventuale pareggio precedente: lo riporto al valore proprio e ricentro
      s.style.height=h+'px'; g.top=top; g.H=h; s.style.setProperty('--top',top+'px'); d.__deck.render(true); }); }
  let tt; function toast(msg){ let el=document.querySelector('.tar-toast'); if(!el){el=document.createElement('div');el.className='tar-toast';el.setAttribute('role','status');document.body.appendChild(el);}
    el.textContent=msg; el.classList.add('on'); clearTimeout(tt); tt=setTimeout(()=>el.classList.remove('on'),2200); }
  function relayout(){ columns(); document.querySelectorAll('.deck[data-deck]').forEach(d=>{ if(d.__deck){ d.__deck.geom(); d.__deck.render(true); } }); equalize(); }
  let rt,lastVW=innerWidth;
  const onResize=()=>{ clearTimeout(rt); rt=setTimeout(()=>{ lastVW=innerWidth; relayout(); },80); };
  function init(){ columns(); document.querySelectorAll('.deck[data-deck]').forEach(Deck); equalize();
    addEventListener('resize',onResize); addEventListener('orientationchange',onResize);
    window.__tarRelayout=relayout; window.__tarParams=P; window.__tarFit10=fit10; }
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',init); else init();
})();
