/* konekt.lab — Main JS v2 */

// ─── CTA Base URL ──────────────────────────────────────────────────────────────
const CTA_BASE = 'https://calendar.app.google/y9kQeTfRk1hApJw78';

// ─── CTAs com UTM ──────────────────────────────────────────────────────────────
function initCTAs() {
  const ctaMap = {
    'cta-header':    'header',
    'cta-hero':      'hero',
    'cta-servicos':  'servicos',
    'cta-final-btn': 'cta-final',
  };

  for (const [id, campaign] of Object.entries(ctaMap)) {
    const el = document.getElementById(id);
    if (el) {
      el.href = `${CTA_BASE}?utm_source=site&utm_medium=cta&utm_campaign=${campaign}`;
    }
  }
}

// ─── Header Sticky ─────────────────────────────────────────────────────────────
// Adiciona .scrolled após 40px de scroll: transparent → powder + shadow.
function initStickyHeader() {
  const header = document.getElementById('site-header');
  if (!header) return;

  const onScroll = () => {
    header.classList.toggle('scrolled', window.scrollY > 40);
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll(); // estado inicial
}

// ─── Scroll Reveal ─────────────────────────────────────────────────────────────
// IntersectionObserver com stagger via data-delay (ms).
// Dispara uma vez; unobserve para não piscar ao rolar de volta.
function initScrollReveal() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const delay = parseInt(entry.target.dataset.delay || '0', 10);
        setTimeout(() => entry.target.classList.add('is-visible'), delay);
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.12 }
  );

  document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
}

// ─── Contador Animado ──────────────────────────────────────────────────────────
// Anima de 0 ao valor em data-target usando ease-out cubic.
// Disparado por IntersectionObserver quando o card entra na viewport.
function animateCounter(el) {
  const target = parseInt(el.dataset.target, 10);
  const prefix = el.dataset.prefix || '';
  const suffix = el.dataset.suffix || '';
  const duration = 1400;
  const startTime = performance.now();

  const tick = (now) => {
    const progress = Math.min((now - startTime) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
    el.textContent = prefix + Math.round(eased * target) + suffix;
    if (progress < 1) requestAnimationFrame(tick);
  };

  requestAnimationFrame(tick);
}

function initCounters() {
  const counters = document.querySelectorAll('.evidencia-numero[data-target]');
  if (!counters.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        animateCounter(entry.target);
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.5 }
  );

  counters.forEach((el) => observer.observe(el));
}

// ─── Animated Background (cursor-follow nos cards do Problema) ─────────────────
// mouseenter em cada card → adiciona .card-active, remove dos demais.
// mouseleave no grid → remove .card-active de todos.
function initAnimatedBackground() {
  const grid = document.getElementById('cards-problema');
  if (!grid) return;

  const cards = grid.querySelectorAll('.card-problema');
  if (!cards.length) return;

  cards.forEach((card) => {
    card.addEventListener('mouseenter', () => {
      cards.forEach((c) => c.classList.remove('card-active'));
      card.classList.add('card-active');
    });
  });

  grid.addEventListener('mouseleave', () => {
    cards.forEach((c) => c.classList.remove('card-active'));
  });
}

// ─── Init ──────────────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  initCTAs();
  initStickyHeader();
  initScrollReveal();
  initCounters();
  initAnimatedBackground();
  console.log('[konekt.lab] v3 initialized');
});
