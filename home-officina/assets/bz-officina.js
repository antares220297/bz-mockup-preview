(() => {
  const section = document.querySelector('[data-bz-officina]');
  if (!section) return;

  const chapters = [
    {
      title: "Olio",
      caption: "Si lascia sui polsi, e resta sulla pelle per tutta la sera.",
      veil: "#3a281c",
      scene: "assets/officina-scena-olio.webp",
      alt: "Una mano applica un olio sul polso accanto a una candela",
      products: [
        ["Roll-on Ambra", "profumo ayurvedico", "16,50", "olio-profumato-ayurveda-ambra", "54793126642002", "assets/prod-olio-ambra.webp"],
        ["Roll-on Vaniglia", "profumo ayurvedico", "16,50", "olio-profumato-ayurveda-vaniglia", "54793125986642", "assets/prod-olio-vaniglia.webp"],
        ["Roll-on Sandalo", "profumo ayurvedico", "16,50", "olio-profumato-naturale-sandalwood-10-ml", "53658083230034", "assets/prod-olio-sandalo.webp"],
      ],
    },
    {
      title: "Bagno",
      caption: "I sali si sciolgono nell'acqua calda, quando si chiude la porta.",
      veil: "#1e272c",
      scene: "assets/officina-scena-bagno.webp",
      alt: "Sali versati in una vasca da bagno scura",
      products: [
        ["Sali alla lavanda", "himalayani, 500 g", "9,90", "mix-sali-himalayani-500g-relax", "50354138251602", "assets/prod-bagno-lavanda.webp"],
        ["Sali tea tree e lime", "himalayani, 500 g", "9,90", "mix-sali-himalayani-500g-detox", "50354146017618", "assets/prod-bagno-teatree.webp"],
        ["Sali all'eucalipto", "zenzero e pepe nero, 350 g", "7,90", "sali-da-bagno-raffreddore-influenza-350g", "50337590837586", "assets/prod-bagno-eucalipto.webp"],
      ],
    },
    {
      title: "Candela",
      caption: "Si accende e la stanza cambia odore.",
      veil: "#3d2a16",
      scene: "assets/officina-scena-candela.webp",
      alt: "Candela accesa in un bicchiere scuro accanto a due pietre viola",
      products: [
        ["Song of India Sleep", "200 g", "16,50", "candela-di-soia-profumata-song-of-india-sleep-in-vetro-1", "53752735498578", "assets/prod-candela-sleep.webp"],
        ["Organic Goodness Rosa", "geranio, 200 g", "18,90", "candela-organic-goodness-rosa-geranio", "52086585557330", "assets/prod-candela-rosa.webp"],
        ["Sahasrara", "oud e ambra", "15,90", "candela-profumata-in-cera-di-soia-chakra-sahasrara-oud-e-ambra", "54932000932178", "assets/prod-candela-sahasrara.webp"],
      ],
    },
    {
      title: "Sapone",
      caption: "Il gesto di ogni mattina, con oli e spezie.",
      veil: "#332415",
      scene: "assets/officina-scena-sapone.webp",
      alt: "Saponetta dorata accanto a una candela e a bastoncini di cannella",
      products: [
        ["Sapone alla curcuma", "Holy Lama", "7,90", "sapone-curcuma-holy-lama", "50427684913490", "assets/prod-sapone-curcuma.webp"],
        ["Sapone alla rosa", "Holy Lama", "7,90", "sapone-yogi-di-holy-lama-alla-rosa", "54793131721042", "assets/prod-sapone-rosa.webp"],
        ["Sapone alla lavanda", "Holy Lama", "7,90", "sapone-yogi-di-holy-lama-alla-lavanda", "54793133392210", "assets/prod-sapone-lavanda.webp"],
      ],
    },
    {
      title: "Tisana",
      caption: "Una tazza calda, quando si ha un momento solo per sé.",
      veil: "#2e3121",
      scene: "assets/officina-scena-tisana.webp",
      alt: "Tazza fumante accanto a bastoncini di cannella",
      products: [
        ["Té yogi speziato", "50 g", "7,90", "te-yogi-speziato", "55339924947282", "assets/prod-tisana-yogi.webp"],
        ["Tè verde Marrakech", "50 g", "7,90", "te-verde-marrakech-e-petali-50gr", "55339923439954", "assets/prod-tisana-marrakech.webp"],
        ["Tè nero supremo", "50 g", "7,90", "te-nero-pakistano-supremo-50gr", "55339935695186", "assets/prod-tisana-nero.webp"],
      ],
    },
  ];

  function productCard([title, subtitle, price, handle, variant, photo]) {
    return `
      <article class="product bz-product-tile has-nome-vetrina bz-product-tile--vertical">
        <a class="bz-product-tile__link" href="https://benesserezen.shop/products/${handle}">
          <div class="bz-product-tile__media">
            <img src="${photo}" alt="${title}" width="600" height="600" loading="lazy" decoding="async">
          </div>
          <h3 class="bz-product-tile__title">${title}</h3>
          <p class="bz-product-tile__sub">${subtitle}</p>
        </a>
        <div class="product-bottom bz-product-tile__bottom">
          <div class="price">${price}&nbsp;€</div>
          <button class="add" type="button" data-bz-add="${variant}" aria-label="Aggiungi al carrello: ${title}">
            <svg viewBox="0 -960 960 960" class="" aria-hidden="true" focusable="false" fill="currentColor"><path d="M457.31-457.31H220v-45.38h237.31V-740h45.38v237.31H740v45.38H502.69V-220h-45.38v-237.31Z"></path></svg>
          </button>
        </div>
      </article>
    `;
  }

  const tablist = section.querySelector('[role="tablist"]');
  const tabs = [...tablist.querySelectorAll('[role="tab"]')];
  const panel = section.querySelector('[role="tabpanel"]');
  const stage = section.querySelector('.bz-officina-stage');
  const scene = section.querySelector('.bz-officina-scene');
  const heading = section.querySelector('.bz-officina-cap h3');
  const caption = section.querySelector('.bz-officina-cap p');
  const products = section.querySelector('.bz-officina-prods');
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  let active = 0;
  let fade;
  let swipe;

  function changeScene(chapter) {
    const next = new Image();
    next.src = chapter.scene;

    function showScene() {
      if (chapters[active] !== chapter) return;

      fade?.cancel();
      if (!reducedMotion.matches && scene.naturalWidth && next.naturalWidth &&
          scene.getAttribute('src') !== chapter.scene) {
        const outgoing = scene.cloneNode();
        outgoing.classList.add('bz-officina-scene--outgoing');
        outgoing.alt = '';
        outgoing.setAttribute('aria-hidden', 'true');
        scene.after(outgoing);
        fade = outgoing.animate([{ opacity: 1 }, { opacity: 0 }], 240);
        fade.onfinish = fade.oncancel = () => outgoing.remove();
      }
      scene.src = chapter.scene;
      scene.alt = chapter.alt;
    }

    if (reducedMotion.matches) {
      showScene();
    } else {
      next.decode().then(showScene, showScene);
    }
  }

  function selectChapter(index, focusTab = false) {
    const selected = (index + chapters.length) % chapters.length;
    if (focusTab) tabs[selected].focus();
    if (selected === active) return;

    active = selected;
    const chapter = chapters[active];
    tabs.forEach((tab, i) => {
      tab.setAttribute('aria-selected', String(i === active));
      tab.tabIndex = i === active ? 0 : -1;
    });
    panel.setAttribute('aria-labelledby', tabs[active].id);
    section.style.setProperty('--officina-veil', chapter.veil);
    heading.textContent = chapter.title;
    caption.textContent = chapter.caption;
    products.innerHTML = chapter.products.map(productCard).join('');
    changeScene(chapter);
  }

  tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => selectChapter(index));
  });

  tablist.addEventListener('keydown', (event) => {
    if (event.key !== 'ArrowLeft' && event.key !== 'ArrowRight') return;
    event.preventDefault();
    selectChapter(active + (event.key === 'ArrowLeft' ? -1 : 1), true);
  });

  stage.addEventListener('pointerdown', (event) => {
    if (!event.isPrimary || event.button !== 0) return;
    swipe = { id: event.pointerId, x: event.clientX, y: event.clientY };
    stage.setPointerCapture(event.pointerId);
  });

  stage.addEventListener('pointerup', (event) => {
    if (swipe?.id !== event.pointerId) return;
    const dx = event.clientX - swipe.x;
    const dy = event.clientY - swipe.y;
    swipe = null;
    if (Math.abs(dx) >= 40 && Math.abs(dx) > Math.abs(dy)) {
      selectChapter(active + (dx < 0 ? 1 : -1));
    }
  });

  stage.addEventListener('lostpointercapture', (event) => {
    if (swipe?.id === event.pointerId) swipe = null;
  });
})();
