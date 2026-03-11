// ── Navigation active state ──
(function () {
  const path = location.pathname.replace(/\/$/, '').split('/').pop() || 'index.html';
  document.querySelectorAll('.topnav-link').forEach(a => {
    const href = a.getAttribute('href').split('/').pop();
    if (href === path) a.classList.add('active');
  });
})();

// ── Back to top ──
const btn = document.getElementById('backTop');
if (btn) {
  window.addEventListener('scroll', () => {
    btn.classList.toggle('show', window.scrollY > 400);
  }, { passive: true });
  btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

// ── Side nav dot tracking ──
function initSideNav(sectionIds) {
  const dots = document.querySelectorAll('.side-dot');
  if (!dots.length) return;
  function update() {
    let current = 0;
    sectionIds.forEach((id, i) => {
      const el = document.getElementById(id);
      if (el && el.getBoundingClientRect().top < window.innerHeight * 0.45) current = i;
    });
    dots.forEach((d, i) => d.classList.toggle('active', i === current));
  }
  window.addEventListener('scroll', update, { passive: true });
  update();
}

// ── Scroll-reveal animation ──
function initReveal() {
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.style.opacity = '1';
        e.target.style.transform = 'translateY(0)';
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.08 });

  document.querySelectorAll('.reveal').forEach((el, i) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(22px)';
    el.style.transition = `opacity 0.7s ease ${i % 4 * 0.08}s, transform 0.7s ease ${i % 4 * 0.08}s`;
    obs.observe(el);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  initReveal();
  if (window._sectionIds) initSideNav(window._sectionIds);
});
