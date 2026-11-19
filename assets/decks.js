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
  const P={rot:6,curve:.07,rowGap:1.02,wide:1,sp:.79,spMax:.95,spMobile:.78,sp3:.95,sp3Mobile:.85,fw:.92,sideMobile:11,cap:156,minTwoCol:100,deckCol:.6,edge:16,edgeMobile:8,rotMobile:6,curveMobile:.07,wideMobile:1,stagMobile:0,rowGapMobile:1.1,cwMinMobile:78,spMinMobile:.6,
    /* 19/11 23:10: mobile misurato carta per carta su ricerca/iphone-michael-2302/riferimento.png (Gioia 146×242 px immagine, pannello 732 px):
       carta 3:5; per posizione dal centro [x in larghezze carta, caduta in altezze carta, rotazione]; file a 1,124 altezze; margine minimo 2px */
    ratMobile:5/3, arcMobile:[[0,0,0],[.893,.087,12.35],[1.770,.277,19.1]], rowGapRef:1.124, sideRef:.4, cwMinRef:72};
  const MOB=()=>innerWidth<768;
  const RAT=()=>MOB()?P.ratMobile:1.5; // 19/11 22:46 (Michael): carta corta e piena (2:3) ovunque, come rif-arco-michael.png; le pietre stanno sul retro
  const spNow=()=>MOB()?P.spMobile:P.sp;
  const rotNow=()=>MOB()?P.rotMobile:P.rot, curveNow=()=>MOB()?P.curveMobile:P.curve, wideNow=()=>MOB()?P.wideMobile:P.wide, stagNow=()=>MOB()?P.stagMobile:0;
  const sp3Now=()=>MOB()?P.sp3Mobile:P.sp3; // passo delle file da 3 (il 3+3): può essere più ampio, c'è spazio ai lati
  /* la carta più grande per cui il mazzo da 10 (5+5) sta nella larghezza W (desktop: 92% di W; mobile: W meno 18px per lato) */
  function fit10(W,spk){
    if(MOB()){ const [tx,,ro]=P.arcMobile[2], r=rad(ro), k=tx+.5*Math.cos(r)+RAT()/2*Math.sin(r); return Math.max(P.cwMinRef,Math.floor((W-2*P.sideRef)/(2*k)*10)/10); }
    const sp=spk||spNow(), avail=P.fw*W;
    for(let cw=P.cap;cw>=50;cw-=.5){ const ch=cw*RAT(); let a=0;
      for(let i=0;i<10;i++){ const row=i<5?0:1,rel=i%5-2,x=rel*sp*cw*(row?wideNow():1)+(row?-1:1)*stagNow()*sp*cw/2,r=rad(rel*rotNow());
        a=Math.max(a,Math.abs(x)+cw/2*Math.cos(r)+ch/2*Math.abs(Math.sin(r))); }
      if(2*a<=avail) return cw; }
    return 50; }
  /* telefoni stretti (sotto ~410px): la carta non scende sotto cwMinRef (72px, nomi ~9px); l'arco si stringe in larghezza quanto serve */
  function arcSqueeze(W,cw,ch){ const [tx,,ro]=P.arcMobile[2], r=rad(ro), ext=cw/2*Math.cos(r)+ch/2*Math.sin(r);
    return Math.min(1,(W/2-P.sideRef-ext)/(tx*cw)); }
  /* una colonna sotto i 768px, oppure quando a due colonne la carta verrebbe sotto i 100px: testo sopra, mazzo sotto */
  function columns(){ const H=document.documentElement, d=document.querySelector('.deck[data-deck]'); if(!d) return;
    H.classList.remove('tar-1col');
    if(innerWidth<768||fit10(d.clientWidth*P.deckCol)<P.minTwoCol) H.classList.add('tar-1col'); }

  /* fronte: logo, disco grande, nome (niente pietre). Retro (si vede quando la carta è scelta: flip 3D sull'asse Y):
     retro v2 (dai dorsi approvati): fondo e grana del dorso, cornice doppia, sigillo BZ, nome, filetto, 3 pietre separate da punti, motto sopra un filetto, «Benessere Zen» */
  function face(c,deck){
    const art=c.art?`<img src="${c.art}" alt="" decoding="async" onerror="this.style.visibility='hidden'">`:'';
    return `<span class="tc__glow" aria-hidden="true"></span><span class="tc__flip" aria-hidden="true">
<span class="tc__face tc__front"><span class="tc__num"><i class="tc__bz"></i></span><span class="tc__art"><span class="tc__sym tc__sym--art">${art}</span></span>
<span class="tc__cart"><span class="tc__title">${c.title}</span></span></span>
<span class="tc__face tc__back"><span class="tc__seal">${BACKS[deck]?`<img src="${BACKS[deck]}" alt="" decoding="async">`:''}</span>
<span class="tc__bgroup"><span class="tc__bname">${c.title}</span><span class="tc__brule"></span>
<span class="tc__stones">${c.stones.map(x=>`<span>${x}</span>`).join('')}</span>${c.motto?`<span class="tc__brule tc__brule--plain"></span><span class="tc__bmotto">${c.motto}</span>`:''}</span>
<span class="tc__brand">Benessere Zen</span></span></span>`;
  }


  /* GIRO DEFINITIVO · i testi stanno SEMPRE nelle loro fasce, con qualsiasi font (anche il ripiego di sistema).
     Misura senza trasformazioni (copia nascosta nello stesso contenitore, offsetWidth), quindi vale anche sulle carte ruotate.
     Fronte: aria laterale = spazio cornice-bordo (3,6% della carta); prima si riduce il corpo, poi a capo bilanciato,
     mai sotto 9px (in extremis tracking fino a −0,04em). Retro: il nome sta nella larghezza del gruppo; se il gruppo
     non ci sta in altezza si stringe prima il motto (fino a 0,85), poi i passi (fino a 0,4u). */
  function natW(el,ws){ const m=el.cloneNode(true); m.style.cssText+=';position:absolute;visibility:hidden;left:0;top:0;width:max-content;max-width:none;min-height:0;margin:0;padding:0;white-space:'+(ws||'pre')+';display:block';
    el.parentElement.appendChild(m); const w=m.offsetWidth; m.remove(); return w; }
  function fitLine(t,avail,minPx){
    t.style.fontSize=t.style.letterSpacing=t.style.whiteSpace=''; const f0=parseFloat(getComputedStyle(t).fontSize);
    let w=natW(t); if(w<=avail) return f0;
    let f=f0*avail/w;
    if(f<minPx&&/ /.test(t.textContent.replace(/\n/g,' '))){ // a capo bilanciato: decide la parola più lunga
      t.style.whiteSpace='normal'; const words=t.textContent.split(/\s+/); let ww=0;
      for(const x of words){ const s=document.createElement('span'); s.textContent=x; s.style.font=getComputedStyle(t).font; t.parentElement.appendChild(s); s.style.cssText+=';position:absolute;visibility:hidden;white-space:pre'; ww=Math.max(ww,s.offsetWidth); s.remove(); }
      f=Math.min(f0,f0*avail/ww); }
    if(f<minPx){ const n=Math.max(1,t.textContent.trim().length-1), wMin=w*minPx/f0; const ls=Math.max(-.04,(avail-wMin)/(n*minPx));
      f=minPx; t.style.letterSpacing=ls.toFixed(3)+'em'; t.style.fontSize=f+'px'; const w2=natW(t); if(w2>avail) f=minPx*avail/w2; }
    t.style.fontSize=(Math.floor(f*100)/100)+'px'; return f; }
  const L0w=li=>li.offsetWidth;
  function fitTexts(root,lims){
    root.querySelectorAll('.tc').forEach((li,ix)=>{
      const cw=li.offsetWidth; if(!cw) return;
      const t=li.querySelector('.tc__title'), L=lims&&lims[ix];
      const f1=fitLine(t,(L?L.band[1]-L.band[0]:t.parentElement.clientWidth-2*.036*cw)-1,9);
      // carta coperta: il nome prova a stare anche nella parte scoperta del cartiglio, senza scendere sotto 9px
      if(L){ const av=L.vis[1]-L.vis[0]-1, w=natW(t); if(w>av){ const f2=Math.max(9,f1*av/w); if(f2<f1) t.style.fontSize=(Math.floor(f2*100)/100)+'px';
        const w9=natW(t); if(w9>av){ const nch=Math.max(1,t.textContent.trim().length-1), fz=parseFloat(t.style.fontSize)||f1; t.style.letterSpacing=Math.max(-.04,(av-w9)/(nch*fz)).toFixed(3)+'em'; } } }
      const b=li.querySelector('.tc__back'), g=b.querySelector('.tc__bgroup'), nm=b.querySelector('.tc__bname'), mo=b.querySelector('.tc__bmotto');
      b.style.removeProperty('--mk'); b.style.removeProperty('--g');
      fitLine(nm,g.clientWidth-1,1);
      const cs=getComputedStyle(b), u=parseFloat(cs.getPropertyValue('--u'))||.036*cw;
      const need=()=>{ const k=[...g.children]; const gap=parseFloat(getComputedStyle(g).rowGap)||0; return k.reduce((a,e)=>a+e.offsetHeight,0)+gap*(k.length+1); };
      // spazio per il gruppo: alto della carta − padding − sigillo − firma (il gruppo ha anche un passo libero sopra e sotto)
      const room=()=>b.clientHeight-2*parseFloat(cs.paddingTop)-b.querySelector('.tc__seal').offsetHeight-b.querySelector('.tc__brand').offsetHeight;
      let mk=1; while(mo&&need()>room()&&mk>.86){ mk-=.05; b.style.setProperty('--mk',mk.toFixed(2)); }
      let gk=parseFloat(getComputedStyle(g).rowGap)/u; while(need()>room()&&gk>.41){ gk-=.05; b.style.setProperty('--g',`calc(var(--u) * ${gk.toFixed(2)})`); }
    }); }
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
      // riposo: pila ordinata a fronte in su al centro, a metà tra le due file (ogni carta 0,6px sopra la precedente)
      if(!open) return {rel,isA:false,x:0,y:g.rowGap/2-i*.6,rot:0,sc:1};
      const k=open?1:g.ck, wf=row===rowsArr.length-1?g.wide:1, st=rowsArr.length>1?(row===0?1:-1)*g.stag/2:0;
      let x=(rel*wf+st)*(cnt<=3?g.sp3:g.sp)*k, a=rel*g.rot*(open?1:.45), y=row*g.rowGap+g.curve*rel*rel*(open?1:.45)+(open?0:g.ch*.03);
      if(g.arc){ const t=g.arc[Math.round(Math.abs(rel))], sg=Math.sign(rel); x=sg*t[0]*g.cw*(cnt>3?g.xs:1); a=sg*t[2]; y=row*g.rowGap+t[1]*g.ch; }
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
        const R=[...rg.getClientRects()].filter(r=>r.width>1), cr=t.parentElement.getBoundingClientRect(), cp=Math.max(parseFloat(getComputedStyle(t.parentElement).paddingLeft)||0,.036*L0w(li));
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
      const W=stage.clientWidth; let spk=spNow(), cw=fit10(W,spk);
      // mobile: carta mai sotto cwMinMobile (78px: «Concentrazione» intero a 9,5px); se non ci sta, si stringe il passo del 5+5
      const ch=cw*RAT();
      // carta al tetto (schermi larghi): lo spazio che avanza allarga il passo, fino a spMax, senza rimpicciolire la carta
      if(!MOB()&&cw>=P.cap) while(spk+.01<=P.spMax&&fit10(W,spk+.01)>=P.cap) spk+=.01;
      const sp=cw*spk, sp3=cw*(MOB()?P.sp3Mobile:Math.max(P.sp3,spk)), fine=FINE.matches;
      root.style.setProperty('--cw',cw+'px'); root.style.setProperty('--sa',FINE.matches?1.1:(MOB()?1.3:1.15));
      const g={cw,ch,sp,sp3,rot:rotNow(),wide:wideNow(),stag:stagNow(),rowGap:ch*(MOB()?P.rowGapRef:P.rowGap),arc:MOB()?P.arcMobile:null,xs:MOB()?arcSqueeze(W,cw,ch):1,curve:ch*curveNow(),ck:.34,pushX:MOB()?0:cw*.05,lift:ch*(fine?.05:.07),scale:fine?1.1:(MOB()?1.3:1.15),hw:W/2-(MOB()?P.edgeMobile:P.edge)};
      // GIRO DEFINITIVO · parte scoperta del cartiglio di ogni carta nella posa aperta (coordinate della carta, px dal bordo sinistro):
      // tolgo dalla fascia del nome l'ingombro reale (ruotato) di ogni carta che le sta sopra; il nome si adatta a quella parte e ci si centra.
      const PO=els.map((_,i)=>pose(i,{open:true,act:-1},g)), Z=els.map((_,i)=>1+rowOf(i)[0]*12+(10-Math.round(Math.abs(PO[i].rel)*2)));
      const clipX=(pts,y0,y1)=>{ const cut=(P,f,k)=>{ const o=[]; for(let q=0;q<P.length;q++){ const A=P[q],B=P[(q+1)%P.length],ia=f(A),ib=f(B);
          if(ia) o.push(A); if(ia!==ib){ const t=(k-A[1])/(B[1]-A[1]); o.push([A[0]+t*(B[0]-A[0]),k]); } } return o; };
        let P=cut(pts,v=>v[1]>=y0,y0); if(P.length) P=cut(P,v=>v[1]<=y1,y1); return P.length?[Math.min(...P.map(v=>v[0])),Math.max(...P.map(v=>v[0]))]:null; };
      const lims=els.map((li,i)=>{ const t=li.querySelector('.tc__title'),cart=t.parentElement,pad=.036*cw, cl=cart.offsetLeft, cr=cl+cart.offsetWidth;
        const y0=cart.offsetTop-ch/2, y1=y0+cart.offsetHeight; let segs=[[0,cw]];
        for(let j=0;j<n;j++){ if(Z[j]<=Z[i]) continue; const a=rad(PO[i].rot), b=rad(PO[j].rot), dx=PO[j].x-PO[i].x, dy=PO[j].y-PO[i].y;
          const pts=[[-cw/2,-ch/2],[cw/2,-ch/2],[cw/2,ch/2],[-cw/2,ch/2]].map(([u,v])=>{ const X=dx+u*Math.cos(b)-v*Math.sin(b), Y=dy+u*Math.sin(b)+v*Math.cos(b);
            return [X*Math.cos(a)+Y*Math.sin(a)+cw/2, -X*Math.sin(a)+Y*Math.cos(a)]; });
          const xs=clipX(pts,y0,y1); if(!xs) continue;
          segs=segs.flatMap(([s0,e0])=>{ const o=[]; if(xs[0]>s0) o.push([s0,Math.min(e0,xs[0])]); if(xs[1]<e0) o.push([Math.max(s0,xs[1]),e0]); return o.filter(q=>q[1]-q[0]>.5); }); }
        segs.sort((p,q)=>(q[1]-q[0])-(p[1]-p[0])); const sg=segs[0]||[cw/2,cw/2];
        return {band:[cl+pad,cr-pad],vis:[Math.max(sg[0]+2,cl+pad),Math.min(sg[1]-2,cr-pad)],mid:(cl+cr)/2}; });
      fitTexts(root,lims);
      const tx=els.map((li,i)=>{ const L=lims[i]; if(L.vis[0]<=L.band[0]+.01&&L.vis[1]>=L.band[1]-.01) return 0; const w=natW(li.querySelector('.tc__title'));
        let c=(L.vis[0]+L.vis[1])/2; c=Math.min(Math.max(c,L.band[0]+w/2),L.band[1]-w/2); return c-L.mid; });
      els.forEach((el,i)=>el.style.setProperty('--tx',tx[i].toFixed(1)+'px'));
      const e=extent(g), top=-e.minY+2, H=Math.ceil(e.maxY-e.minY+4);
      G={W,top,H,H0:H,...g,ext:e};
      root.style.setProperty('--cw',cw+'px'); root.style.setProperty('--sa',g.scale); stage.style.setProperty('--top',top+'px'); stage.style.height=H+'px';
    }
    function render(instant){
      const open=st.open||RM.matches;
      root.classList.toggle('is-open',open);
      const act=st.active>=0?st.active:st.sel, o={open,act};
      els.forEach((el,i)=>{ const p=pose(i,o,G);
        el.style.transform=`translate(${p.x.toFixed(1)}px,${p.y.toFixed(1)}px) rotate(${p.rot.toFixed(2)}deg) scale(${p.sc})`;
        const was=el.classList.contains('is-active');
        // ordine come la mano di carte di Michael: in ogni fila la centrale davanti, poi a scalare verso i bordi; la fila sotto sopra quella sopra
        const [rw]=rowOf(i), zb=1+rw*12+(10-Math.round(Math.abs(p.rel)*2));
        el.style.zIndex=p.isA?50:(was?49:zb); el.classList.toggle('is-active',p.isA);
        // apertura e chiusura a cascata dal centro della fila; scelta: la carta esce e poi gira (flip con 140ms di ritardo);
        // lasciata: prima si rigira, poi rientra (spostamento con 260ms di ritardo)
        let d=instant||RM.matches?0:Math.round(Math.abs(p.rel)*45+rowOf(i)[0]*60), fd=0;
        if(!RM.matches){ if(p.isA&&!was){ d=0; fd=140; } else if(was&&!p.isA){ d=260; fd=0; } }
        el.style.setProperty('--d',d+'ms'); el.style.setProperty('--fd',fd+'ms');
        if(!p.isA&&was) setTimeout(()=>{ if(!el.classList.contains('is-active')) el.style.zIndex=zb; },900);
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
      // vince la carta che sta davanti (stesso ordine di render: fila sotto, poi la più vicina al centro)
      const zOf=i=>{ const [r,c]=rowOf(i); return r*12-Math.abs(c-(rowsArr[r]-1)/2)*2; };
      for(const i of [...Array(n).keys()].sort((a,b)=>zOf(b)-zOf(a))){ const p=pose(i,{open:true,act:-1},G), t=-rad(p.rot), dx=px-p.x, dy=py-(G.top+p.y+G.ch/2);
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
    if(document.fonts&&document.fonts.addEventListener) document.fonts.addEventListener('loadingdone',()=>relayout());
    addEventListener('resize',onResize); addEventListener('orientationchange',onResize);
    window.__tarRelayout=relayout; window.__tarParams=P; window.__tarFit10=fit10; }
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',init); else init();
})();
