/**
 * Scroll reveal — attiva .is-visible quando gli elementi entrano in viewport.
 */
export function initReveal() {
  const elements = document.querySelectorAll(".reveal");
  if (!elements.length) return;

  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (prefersReduced) {
    elements.forEach((el) => el.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
  );

  elements.forEach((el) => observer.observe(el));
}

/**
 * Hero reveal immediato al load (above the fold).
 */
export function initHeroReveal() {
  document.querySelectorAll(".hero .reveal").forEach((el) => {
    requestAnimationFrame(() => el.classList.add("is-visible"));
  });
}
