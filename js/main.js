import { loadPartials } from "./loader.js";
import { initNav } from "./nav.js";
import { initForm, initPlaytomic, initFooter } from "./form.js";
import { initReveal, initHeroReveal } from "./animations.js";

async function bootstrap() {
  try {
    await loadPartials();
    initHeroReveal();
    initNav();
    initReveal();
    initForm();
    initPlaytomic();
    initFooter();
  } catch (error) {
    console.error("Errore durante il caricamento del sito:", error);
  }
}

bootstrap();
