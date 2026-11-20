# Il libro dell'ametista: fattibilità (prototipo WebGL, 20/11/2026)

## Scelta
**three.js + il motore di page-turn-book (MIT, cijjas), adattato.** Ho guardato anche LeafThrough (MIT), che ha un'ottima base, ma non ha la copertina rigida. page-turn-book ce l'ha: piatti con spessore, il salto con riffle e le pagine disegnate su canvas, il tutto in circa 1000 righe facili da modificare.
- **Scartati:**
  - turn.js: licenza commerciale e jQuery;
  - CSS 3D in stile «Velvet Journal»: Michael non lo vuole;
  - StPageFlip: la v1 è misurata e conservata in build/v1-pageflip. Non ha un riffle vero né luce reale.
- **Le mie aggiunte al motore:**
  - una pagina sola su mobile (camera sulla pagina destra);
  - il pan della camera su desktop: il libro chiuso si sposta e la doppia pagina finisce al centro;
  - il blocco pagine con spessore e taglio a righe;
  - il riffle con le linguette: k fogli in 1–1,5 s, con intervalli che si accorciano;
  - il limite di DPR.
- **Niente Blender e niente modelli 3D:** la geometria la fa il motore; il realismo viene da texture, luce e ombra.

## Come è fatto
- **Pagine:** sono le pagine HTML della sezione, generate dal JSON a forma di metafield (build/dati-ametista.json). Un capitolo assente non genera né pagine né linguetta.
  - Il WebGL le ridisegna su canvas 2D in EB Garamond vero, a 768×1075 px su mobile (pagina di 367 px CSS × DPR 2).
  - Il testo resta nel DOM, nascosto alla vista ma leggibile da motori di ricerca e lettori di schermo: 3650 caratteri.
- **Materiali:**
  - copertina in velluto ricamato fotografico (generata), con il titolo in oro disegnato su canvas;
  - carta antica fotografica (generata);
  - sguardie marmorizzate;
  - illustrazioni raster da amanuense;
  - nastro e linguette in seta fotografica (WebP con trasparenza).
  - Nessun SVG decorativo.
- **Luce:**
  - luce direzionale radente con ombre (shadow map da 1024 px su mobile);
  - curvatura della pagina e ombra sulla piega fatte dal motore;
  - spessore dei piatti e del blocco pagine.
- **Caricamento lazy:** fino a 600 px dalla sezione, o fino al primo tocco, si vedono solo il poster statico del libro chiuso (WebP da 76 KB), il nastro e le linguette.
- **Fallback:** con «riduci movimento» o senza WebGL restano le stesse pagine in HTML, con dissolvenze. In più c'è «Leggi tutto il testo».

## Pesi (misurati)
| | |
|---|---|
| Prima del caricamento lazy | circa 233 KB: libro.js 4,4 KB gzip, libro.css 4,9 KB gzip, poster 76 KB, nastro 85 KB, linguette 14 KB, 1 font 24 KB |
| Motore (three.js r162 + motore + pittore pagine) | **137 KB gzip** (520 KB minificato) |
| Texture e font dopo il lazy | circa 938 KB, di cui 554 KB di illustrazioni |
| Memoria GPU su mobile | circa 3,3 MB per pagina, con al massimo 8–10 pagine caricate insieme |

## FPS: cosa vale e cosa no (WebKit headless, 430×932 con DPR 2)
- **Pronto dopo il caricamento lazy:** 0,5 s dall'import del motore; circa 2,2 s dall'apertura della pagina, rete locale compresa.
- **Fluidità misurata:**

| Momento | fps | Frame persi |
|---|---|---|
| Apertura | 18–22 | — |
| Riffle avanti / indietro | **4–6** | 8–16 |

- **Questi numeri NON sono affidabili.** Il WebKit di Playwright su Linux disegna il WebGL in software, senza GPU, su un box carico e mentre registra il video. Misurano la CPU del box, non l'iPhone.
- **Numeri affidabili:** solo quelli dell'iPhone vero. Aprire la pagina con `?fps=1`: il contatore mostra fps e scatti a ogni sfoglio.
- **La mia stima onesta:** su iPhone 14 Pro Max ci si aspetta 60 fps (120 su ProMotion difficile), perché la scena è leggera: 14 fogli da 64×90 vertici e 1 ombra. Il punto a rischio è il primo riffle, se una pagina viene dipinta durante il volo. Per evitarlo, le pagine vengono pre-dipinte in idle.

## Raccomandazioni per la produzione
- Per le pagine canvas basta WebP.
- KTX2/Basis solo per copertina e carta, se la memoria lo chiede.
- Dimensioni delle texture:
  - pagine: 768 px su mobile, 1024 px su desktop;
  - copertina: 1024 px.
- **DPR massimo 2** (già impostato).

## Limiti, rischi, segnaposto
- **Controllato solo a 430.** Il desktop (pan e doppia pagina) funziona in una prova veloce, ma non è verificato.
- **Rotazione del telefono:** il passaggio tra una e due pagine ricarica la pagina.
- **Riffle su mobile:** da «Origine» a «Si crede» sono 9 fogli, più dei 3–6 del brief, ma restano dentro 1,5 s.
- **Cambi di direzione:** nessun dato nuovo. Uso le illustrazioni e le texture già generate; la provenienza del lotto resta [DA VERIFICARE].
- **Accessibilità:**
  - linguette: bottoni veri, con aria-label e aria-current, e area di tocco di almeno 44 px (27×113 la verticale, 99×27 l'orizzontale, più 8 px per lato);
  - frecce, focus e regione live.
