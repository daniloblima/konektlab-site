/* konekt.lab — Main JS */

// ─── CTAs com UTM ─────────────────────────────────────────────────────────────
// Link centralizado: uma mudança aqui afeta todos os 3 CTAs.
const CTA_BASE = 'https://calendar.app.google/y9kQeTfRk1hApJw78';

function initCTAs() {
  document.getElementById('cta-hero').href =
    CTA_BASE + '?utm_source=site&utm_medium=cta&utm_campaign=hero';

  document.getElementById('cta-servicos').href =
    CTA_BASE + '?utm_source=site&utm_medium=cta&utm_campaign=servicos';

  document.getElementById('cta-final-btn').href =
    CTA_BASE + '?utm_source=site&utm_medium=cta&utm_campaign=cta-final';
}

// ─── Scroll Reveal ────────────────────────────────────────────────────────────
// IntersectionObserver: adiciona .is-visible ao entrar na viewport.
// unobserve após reveal: animação dispara uma vez, sem piscar ao rolar de volta.
function initScrollReveal() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
}

// ─── Init ─────────────────────────────────────────────────────────────────────
// Nota: smooth scroll via JS desnecessário — css/style.css já tem
// html { scroll-behavior: smooth } aplicado globalmente.
document.addEventListener('DOMContentLoaded', () => {
  initCTAs();
  initScrollReveal();
  console.log('[konekt.lab] JS initialized');
});
