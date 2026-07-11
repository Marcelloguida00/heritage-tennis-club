import { loadPartials } from "./loader.js";
import { initNav } from "./nav.js";
import { initForm, initPlaytomic, initFooter } from "./form.js";

/**
 * Avvio applicazione: carica le sezioni HTML e inizializza l'interattività.
 */
async function bootstrap() {
  try {
    await loadPartials();
    initNav();
    initForm();
    initPlaytomic();
    initFooter();
  } catch (error) {
    console.error("Errore durante il caricamento del sito:", error);
  }
}

bootstrap();
