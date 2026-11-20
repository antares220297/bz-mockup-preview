/* Il libro che si sfoglia · pagine vere in 3D (solo transform/opacity), lo scroll della pagina resta nativo. */
(function(){
  var book=document.querySelector('[data-book]'); if(!book) return;
  var stage=book.querySelector('.book-stage'), pages=[].slice.call(book.querySelectorAll('.pg'));
  var prev=book.querySelector('[data-prev]'), next=book.querySelector('[data-next]'), pos=book.querySelector('.book-pos');
  var idx=[].slice.call(book.querySelectorAll('[data-go]'));
  var mq=matchMedia('(min-width:1024px)'), rm=matchMedia('(prefers-reduced-motion:reduce)');
  var n=pages.length, cur=0, busy=false, D=420;
  function per(){return mq.matches?2:1}
  function first(i){return mq.matches?i-(i%2):i}           // prima pagina visibile della vista che contiene i
  function shown(c){return mq.matches?[c,c+1]:[c]}
  function setVis(list){pages.forEach(function(p,i){var on=list.indexOf(i)>-1;p.setAttribute('aria-hidden',on?'false':'true');if(on)p.removeAttribute('inert');else p.setAttribute('inert','');p.classList.remove('is-top');p.style.transform='';p.style.opacity='';});}
  function ui(){var s=shown(cur).filter(function(i){return i<n});
    pos.textContent=s.length>1?('Pagine '+(s[0]+1)+'–'+(s[1]+1)+' di '+n):('Pagina '+(s[0]+1)+' di '+n);
    prev.disabled=cur<=0; next.disabled=cur+per()>=n;
    idx.forEach(function(b){var t=+b.dataset.go;b.setAttribute('aria-current',shown(cur).indexOf(t)>-1?'true':'false')});}
  function anim(el,from,to,ease,shade){el.classList.add('is-top');
    var a=el.animate([{transform:from},{transform:to}],{duration:D,easing:ease,fill:'forwards'});
    var s=el.querySelector('.pg-shade'); if(s) s.animate(shade,{duration:D,easing:ease,fill:'forwards'});
    return a.finished;}
  function fade(el){el.classList.add('is-top');return el.animate([{opacity:0},{opacity:1}],{duration:240,easing:'linear'}).finished;}
  var P=' perspective(2400px) ';
  function go(target){
    target=Math.max(0,Math.min(first(target),n-1)); if(busy||target===cur) return;
    busy=true; var fwd=target>cur, from=shown(cur), to=shown(target).filter(function(i){return i<n});
    setVis(from.concat(to));
    var done;
    if(rm.matches){ to.forEach(function(i){pages[i].classList.add('is-top')}); done=Promise.all(to.map(function(i){return fade(pages[i])})); }
    else if(!mq.matches){
      if(fwd){ var out=pages[cur]; done=anim(out,P+'rotateY(0deg)',P+'rotateY(-90deg)','cubic-bezier(.45,.05,.55,.95)',[{opacity:0},{opacity:1}]); }
      else { var inn=pages[target]; inn.style.transform=P+'rotateY(-90deg)'; done=anim(inn,P+'rotateY(-90deg)',P+'rotateY(0deg)','cubic-bezier(.2,.7,.3,1)',[{opacity:1},{opacity:0}]); }
    } else {
      var L=pages[from[0]], R=pages[from[1]], L2=pages[to[0]], R2=pages[to[1]];
      if(fwd){ // il foglio destro si alza fino al dorso, poi ricade a sinistra
        L2.style.visibility='hidden';
        done=anim(R,P+'rotateY(0deg)',P+'rotateY(-90deg)','cubic-bezier(.5,0,.75,.4)',[{opacity:0},{opacity:1}]).then(function(){
          R.style.visibility='hidden'; L2.style.visibility=''; L2.style.transform=P+'rotateY(90deg)';
          return anim(L2,P+'rotateY(90deg)',P+'rotateY(0deg)','cubic-bezier(.25,.6,.35,1)',[{opacity:1},{opacity:0}]);});
      } else {
        R2.style.visibility='hidden';
        done=anim(L,P+'rotateY(0deg)',P+'rotateY(90deg)','cubic-bezier(.5,0,.75,.4)',[{opacity:0},{opacity:1}]).then(function(){
          L.style.visibility='hidden'; R2.style.visibility=''; R2.style.transform=P+'rotateY(-90deg)';
          return anim(R2,P+'rotateY(-90deg)',P+'rotateY(0deg)','cubic-bezier(.25,.6,.35,1)',[{opacity:1},{opacity:0}]);});
      }
    }
    done.then(function(){ pages.forEach(function(p){p.getAnimations().forEach(function(a){a.cancel()});p.style.visibility='';p.querySelectorAll('.pg-shade').forEach(function(s){s.getAnimations().forEach(function(a){a.cancel()})})});
      cur=target; setVis(shown(cur)); ui(); busy=false; });
  }
  prev.addEventListener('click',function(){go(cur-per())});
  next.addEventListener('click',function(){go(cur+per())});
  idx.forEach(function(b){b.addEventListener('click',function(){go(+b.dataset.go)})});
  stage.addEventListener('keydown',function(e){ if(e.key==='ArrowRight'){e.preventDefault();go(cur+per())} if(e.key==='ArrowLeft'){e.preventDefault();go(cur-per())} });
  // swipe orizzontale; il verticale resta allo scroll nativo (touch-action:pan-y)
  var x0=null,y0=0,moved=false;
  stage.addEventListener('pointerdown',function(e){x0=e.clientX;y0=e.clientY;moved=false});
  stage.addEventListener('pointerup',function(e){ if(x0===null) return; var dx=e.clientX-x0, dy=e.clientY-y0; x0=null;
    if(Math.abs(dx)>40&&Math.abs(dx)>Math.abs(dy)*1.3){ moved=true; go(dx<0?cur+per():cur-per()); } });
  stage.addEventListener('click',function(e){ if(moved){e.stopPropagation();e.preventDefault();moved=false} },true);
  mq.addEventListener('change',function(){cur=first(cur);setVis(shown(cur));ui()});
  window.bzBook={go:go,get cur(){return cur}};
  setVis(shown(cur)); ui();
})();
