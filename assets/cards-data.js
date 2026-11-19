/* Benessere Zen · mazzi delle intenzioni · DATI DELLE CARTE (facce definitive: arcani Rider-Waite 1909, pubblico dominio)
   Faccia: `art` = incisione PD oro su trasparente (assets/carte/<slug>.webp, fonti in SOURCES-carte.md); dorsi in BZ_BACKS.
   «Come ti senti» ha 6 carte (19/11): Insicurezza (IV L'Imperatore) e Senso di blocco (X La Ruota della Fortuna) con pietre del bot BZ e motti di copy-carte.md §6.
   Nomi composti: a capo esplicito (\n, reso da white-space:pre-line in cards.css), mai parole spezzate.
   Pietre: pietre-carte.md (confermate dal bot BZ, 19/11), in ordine di rilevanza. */
window.BZ_COPY={
  openLabel:"Apri la carta",            /* fallback breve: "Apri" */
  openAria:t=>"Apri la carta "+t.replace(/\s+/g," "),
  deckAria:(name,n)=>"Mazzo "+name+", "+n+" carte",
  cardAria:(t,i,n)=>t.replace(/\s+/g," ")+", carta "+i+" di "+n,
  help:"Scorri le carte e scegline una per vedere i prodotti.",
  showMotti:false                       /* regola Copywriter: «Tristezza e poco slancio» va a capo => motti tolti da tutte le carte */
};
window.BZ_DECKS={
 "senti": [
  {
   "slug": "agitazione",
   "title": "Agitazione\ne rabbia",
   "motto": "Quando tutto corre troppo",
   "stones": [
    "Ametista",
    "Howlite",
    "Rodonite"
   ],
   "href": "/collections/senti-agitazione",
   "symbol": "lorc/whirlwind",
   "accent": "#8a6fa8",
   "art": "assets/carte/agitazione.webp"
  },
  {
   "slug": "tristezza",
   "title": "Tristezza e\npoco slancio",
   "motto": "Quando la luce sembra poca",
   "stones": [
    "Citrino",
    "Ambra",
    "Calcite arancione"
   ],
   "href": "/collections/senti-tristezza",
   "symbol": "lorc/sunrise",
   "accent": "#c98b4a",
   "art": "assets/carte/tristezza.webp"
  },
  {
   "slug": "paura",
   "title": "Paura",
   "motto": "Terra sotto i piedi",
   "stones": [
    "Quarzo fumé",
    "Ematite",
    "Malachite"
   ],
   "href": "/collections/senti-paura",
   "symbol": "lorc/lantern-flame",
   "accent": "#8f8577",
   "art": "assets/carte/paura.webp"
  },
  {
   "slug": "confusione",
   "title": "Confusione",
   "motto": "Pensieri da mettere in fila",
   "stones": [
    "Cristallo di rocca",
    "Cianite blu",
    "Calcite blu"
   ],
   "href": "/collections/senti-confusione",
   "symbol": "lorc/maze",
   "accent": "#7fa6c9",
   "art": "assets/carte/confusione.webp"
  },
  {
   "slug": "insicurezza",
   "title": "Insicurezza",
   "motto": "Quando dubiti di te",
   "stones": [
    "Diaspro giallo",
    "Calcite miele",
    "Septaria"
   ],
   "href": "/collections/senti-insicurezza",
   "symbol": "",
   "accent": "#c9a35a",
   "art": "assets/carte/insicurezza.webp",
   "arcano": "IV L'Imperatore"
  },
  {
   "slug": "blocco",
   "title": "Senso\ndi blocco",
   "motto": "Quando tutto sembra fermo",
   "stones": [
    "Ossidiana neve",
    "Unakite",
    "Avventurina arancione"
   ],
   "href": "/collections/senti-blocco",
   "symbol": "",
   "accent": "#7f9a7a",
   "art": "assets/carte/senso-di-blocco.webp",
   "arcano": "X La Ruota della Fortuna"
  }
 ],
 "desideri": [
  {
   "slug": "amore",
   "title": "Amore",
   "motto": "La carta del cuore",
   "stones": [
    "Quarzo rosa",
    "Kunzite",
    "Smeraldo"
   ],
   "href": "/collections/desiderio-amore",
   "symbol": "delapouite/nested-hearts",
   "accent": "#c48a96",
   "art": "assets/carte/amore.webp"
  },
  {
   "slug": "abbondanza",
   "title": "Abbondanza",
   "motto": "Un gesto di buon auspicio",
   "stones": [
    "Pirite",
    "Avventurina verde",
    "Giada"
   ],
   "href": "/collections/desiderio-abbondanza",
   "symbol": "lorc/wheat",
   "accent": "#c9a96e",
   "art": "assets/carte/abbondanza.webp"
  },
  {
   "slug": "gioia",
   "title": "Gioia",
   "motto": "Il colore del sole",
   "stones": [
    "Pietra del sole",
    "Opale giallo",
    "Calcite gialla"
   ],
   "href": "/collections/desiderio-gioia",
   "symbol": "caro-asercion/heraldic-sun",
   "accent": "#d6a84c",
   "art": "assets/carte/gioia.webp"
  },
  {
   "slug": "protezione",
   "title": "Protezione",
   "motto": "Amuleti antichi da portare",
   "stones": [
    "Tormalina nera",
    "Ossidiana nera",
    "Onice nero"
   ],
   "href": "/collections/desiderio-protezione",
   "symbol": "lorc/eye-shield",
   "accent": "#8c8f9c",
   "art": "assets/carte/protezione.webp"
  },
  {
   "slug": "serenita",
   "title": "Serenità",
   "motto": "Un angolo di pace",
   "stones": [
    "Amazzonite",
    "Angelite",
    "Crisocolla"
   ],
   "href": "/collections/desiderio-serenita",
   "symbol": "lorc/lotus",
   "accent": "#5fb3ad",
   "art": "assets/carte/serenita.webp"
  },
  {
   "slug": "concentrazione",
   "title": "Concentrazione",
   "motto": "A mente lucida",
   "stones": [
    "Fluorite",
    "Sodalite",
    "Occhio di falco"
   ],
   "href": "/collections/desiderio-concentrazione",
   "symbol": "lorc/candle-light",
   "accent": "#8fa6c4",
   "art": "assets/carte/concentrazione.webp"
  },
  {
   "slug": "coraggio",
   "title": "Coraggio",
   "motto": "Il passo che rimandi",
   "stones": [
    "Occhio di tigre",
    "Corniola",
    "Diaspro rosso"
   ],
   "href": "/collections/desiderio-coraggio",
   "symbol": "lorc/lion",
   "accent": "#c47a4e",
   "art": "assets/carte/coraggio.webp"
  },
  {
   "slug": "comunicazione",
   "title": "Comunicazione",
   "motto": "Le pietre della parola",
   "stones": [
    "Lapislazzuli",
    "Acquamarina",
    "Calcedonio"
   ],
   "href": "/collections/desiderio-comunicazione",
   "symbol": "lorc/quill-ink",
   "accent": "#6f86c4",
   "art": "assets/carte/comunicazione.webp"
  },
  {
   "slug": "intuizione",
   "title": "Intuizione",
   "motto": "La voce dell'anima",
   "stones": [
    "Labradorite",
    "Pietra di luna",
    "Ametista"
   ],
   "href": "/collections/desiderio-intuizione",
   "symbol": "lorc/crystal-ball",
   "accent": "#9a8cc4",
   "art": "assets/carte/intuizione.webp"
  },
  {
   "slug": "purificazione",
   "title": "Purificazione",
   "motto": "Per fare spazio in casa",
   "stones": [
    "Selenite",
    "Cristallo di rocca",
    "Quarzo latteo"
   ],
   "href": "/collections/desiderio-purificazione",
   "symbol": "lorc/incense",
   "accent": "#d9d4c8",
   "art": "assets/carte/purificazione.webp"
  }
 ]
};
window.BZ_BACKS={senti:"assets/bz-dorso-oro.webp",desideri:"assets/bz-dorso-oro.webp"}; /* dorsi: logo BZ in oro; colore bordeaux / blu notte in cards.css */
