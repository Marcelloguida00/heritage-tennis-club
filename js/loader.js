/**
 * Carica i partial HTML e li inserisce nel DOM.
 * Ogni sezione vive in un file separato sotto /partials/.
 */
const PARTIALS = [
  { id: "site-header", file: "partials/header.html" },
  { id: "site-hero", file: "partials/hero.html" },
  { id: "site-struttura", file: "partials/struttura.html" },
  { id: "site-circolo", file: "partials/circolo.html" },
  { id: "site-squadra", file: "partials/squadra.html" },
  { id: "site-corsi", file: "partials/corsi.html" },
  { id: "site-prenota", file: "partials/prenota.html" },
  { id: "site-contatti", file: "partials/contatti.html" },
  { id: "site-footer", file: "partials/footer.html" },
];

/** Scarica un partial e lo inserisce nel placeholder corrispondente. */
async function loadPartial({ id, file }) {
  const target = document.getElementById(id);
  if (!target) {
    console.warn(`Placeholder #${id} non trovato`);
    return;
  }

  const response = await fetch(file);
  if (!response.ok) {
    throw new Error(`Impossibile caricare ${file}: ${response.status}`);
  }

  target.innerHTML = await response.text();
}

/** Carica tutte le sezioni in parallelo. */
export async function loadPartials() {
  await Promise.all(PARTIALS.map(loadPartial));
}
