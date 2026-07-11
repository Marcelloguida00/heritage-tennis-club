import { CONFIG } from "./config.js";

/**
 * Form tesseramento — invio via Web3Forms.
 */
export function initForm() {
  const form = document.getElementById("tessera-form");
  const panel = document.getElementById("tessera-panel");
  const success = document.getElementById("tessera-success");
  const errorEl = document.getElementById("tessera-error");
  const submitBtn = document.getElementById("tessera-submit");

  if (!form || !panel || !success) return;

  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    if (errorEl) errorEl.hidden = true;
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.textContent = "Invio in corso…";
    }

    const data = new FormData(form);
    const nome = data.get("nome")?.toString().trim() || "";
    const cognome = data.get("cognome")?.toString().trim() || "";

    const payload = {
      access_key: CONFIG.web3formsAccessKey,
      subject: `Richiesta tesseramento — ${nome} ${cognome}`.trim(),
      from_name: `${CONFIG.siteName} — Sito web`,
      to: CONFIG.formRecipient,
      Nome: nome,
      Cognome: cognome,
      Email: data.get("email"),
      Telefono: data.get("telefono"),
      "Sport di interesse": data.get("sport"),
      Messaggio: data.get("messaggio")?.toString().trim() || "(nessuno)",
      replyto: data.get("email"),
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (result.success) {
        panel.hidden = true;
        success.hidden = false;
        const nameEl = success.querySelector("[data-success-name]");
        if (nameEl) nameEl.textContent = nome;
      } else {
        throw new Error("Invio fallito");
      }
    } catch {
      if (errorEl) {
        errorEl.hidden = false;
        errorEl.textContent =
          "Qualcosa è andato storto. Riprova o contattaci su WhatsApp.";
      }
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.textContent = "Invia richiesta";
      }
    }
  });
}

/**
 * Configura il widget Playtomic se il tenant ID è impostato.
 */
export function initPlaytomic() {
  const placeholder = document.getElementById("playtomic-placeholder");
  const iframe = document.getElementById("playtomic-iframe");
  const { playtomicTenantId } = CONFIG;

  if (!placeholder || !iframe) return;

  if (!playtomicTenantId.startsWith("INSERISCI")) {
    iframe.src = `https://playtomic.io/wl/${playtomicTenantId}`;
    iframe.hidden = false;
    placeholder.hidden = true;
  }
}

/**
 * Aggiorna l'anno nel footer.
 */
export function initFooter() {
  const yearEl = document.getElementById("footer-year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
}
