/**
 * Configurazione centralizzata del sito Heritage Tennis Club.
 * Modifica qui URL, contatti e chiavi API senza toccare l'HTML.
 */
export const CONFIG = {
  /** Nome e meta del sito */
  siteName: "Heritage Tennis Club",
  siteLocation: "Airola",

  /** Contatti */
  phone: "329 191 3327",
  phoneLink: "+393291913327",
  email: "giuseppeabbate7@icloud.com",
  instagram: "https://instagram.com/heritage.tennisclub",
  instagramHandle: "@heritage.tennisclub",
  address: "Via Lavatoio, snc — Airola (BN), 82011",
  mapsUrl: "https://maps.google.com/?q=Via+Lavatoio,+Airola,+Italy",
  hours: "Tutti i giorni, 08:00–23:00",
  hoursDetail: "Lunedì–domenica, stesso orario",

  /** WhatsApp — messaggi precompilati */
  whatsappBase: "https://wa.me/393291913327",
  whatsappLesson:
    "https://wa.me/393291913327?text=Ciao%2C%20voglio%20prenotare%20una%20lezione",

  /** Playtomic */
  playtomicClubUrl: "https://playtomic.com/it/clubs/heritage-tennis-club",
  playtomicAppUrl: "https://app.playtomic.io/",
  /** Inserisci qui il tenant ID Playtomic per attivare il widget iframe */
  playtomicTenantId: "INSERISCI_QUI_IL_TUO_TENANT_ID",

  /** Form tesseramento (Web3Forms) */
  web3formsAccessKey: "INSERISCI_QUI_LA_TUA_ACCESS_KEY",
  formRecipient: "Mguida2604@gmail.com",

  /** Voci menu navigazione */
  navLinks: [
    { href: "#struttura", label: "Struttura" },
    { href: "#circolo", label: "Circolo" },
    { href: "#squadra", label: "Squadra" },
    { href: "#corsi", label: "Corsi" },
    { href: "#prenota", label: "Prenota" },
    { href: "#contatti", label: "Contatti" },
  ],
};

/** URL widget Playtomic (generato dal tenant ID) */
export function getPlaytomicWidgetUrl() {
  const { playtomicTenantId } = CONFIG;
  if (playtomicTenantId.startsWith("INSERISCI")) return null;
  return `https://playtomic.io/wl/${playtomicTenantId}`;
}
