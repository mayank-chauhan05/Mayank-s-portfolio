/**
 * Statistics Count-up Animation Observer
 * Mayank Singh Chauhan Portfolio
 */

export function initCounter() {
  const statElements = document.querySelectorAll('.stat-number[data-target]');
  if (!statElements.length) return;

  let observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = el.getAttribute('data-target');
        const suffix = el.getAttribute('data-suffix') || '';

        if (target === '∞') {
          el.textContent = '∞';
        } else {
          animateCount(el, parseInt(target, 10), suffix);
        }
        observer.unobserve(el);
      }
    });
  }, { threshold: 0.5 });

  statElements.forEach(el => observer.observe(el));
}

function animateCount(el, targetNum, suffix) {
  let start = 0;
  const duration = 1800; // ms
  const stepTime = 30;
  const totalSteps = duration / stepTime;
  const increment = targetNum / totalSteps;

  let current = 0;
  const timer = setInterval(() => {
    current += increment;
    if (current >= targetNum) {
      el.textContent = (targetNum < 10 ? '0' + targetNum : targetNum) + suffix;
      clearInterval(timer);
    } else {
      const val = Math.floor(current);
      el.textContent = (val < 10 ? '0' + val : val) + suffix;
    }
  }, stepTime);
}
