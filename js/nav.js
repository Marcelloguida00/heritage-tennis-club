/**
 * Navigazione: header sticky, menu mobile, sezione attiva, progress dots.
 */

const SECTIONS = ["top", "struttura", "circolo", "squadra", "corsi", "prenota", "contatti"];

export function initNav() {
  const header = document.querySelector(".site-header");
  const toggle = document.querySelector(".menu-toggle");
  const mobileNav = document.querySelector(".mobile-nav");
  const navLinks = document.querySelectorAll(".site-nav__link[data-nav]");
  const progressDots = document.querySelectorAll(".progress-nav__dot");

  if (!header) return;

  /* Header scroll state */
  const onScroll = () => {
    header.classList.toggle("is-scrolled", window.scrollY > 32);
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* Mobile menu */
  if (toggle && mobileNav) {
    toggle.addEventListener("click", () => {
      const isOpen = mobileNav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(isOpen));
      toggle.setAttribute("aria-label", isOpen ? "Chiudi il menu" : "Apri il menu");
    });

    mobileNav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        mobileNav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
        toggle.setAttribute("aria-label", "Apri il menu");
      });
    });
  }

  /* Active section tracking */
  const sectionEls = SECTIONS.map((id) => document.getElementById(id)).filter(Boolean);

  const updateActive = () => {
    const scrollPos = window.scrollY + window.innerHeight * 0.35;
    let current = "top";

    sectionEls.forEach((section) => {
      if (section.offsetTop <= scrollPos) {
        current = section.id;
      }
    });

    navLinks.forEach((link) => {
      link.classList.toggle("is-active", link.dataset.nav === current);
    });

    progressDots.forEach((dot) => {
      dot.classList.toggle("is-active", dot.dataset.section === current);
    });
  };

  window.addEventListener("scroll", updateActive, { passive: true });
  updateActive();

  /* Progress dots click → scroll to section */
  progressDots.forEach((dot) => {
    dot.addEventListener("click", () => {
      const target = document.getElementById(dot.dataset.section);
      target?.scrollIntoView({ behavior: "smooth" });
    });
  });
}
