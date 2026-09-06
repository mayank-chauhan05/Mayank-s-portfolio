/**
 * Main Application Orchestrator
 * Mayank Singh Chauhan Portfolio
 */

import { portfolioData } from '../data/portfolioData.js';
import { initNeuralCanvas, initHeroVisualizerCanvas } from './canvas.js';
import { init3DTilt } from './tilt.js';
import { initCounter } from './counter.js';
import { initProjectFilter } from './filter.js';
import { initModalListeners, openCertModal } from './modal.js';
import { initTheme } from './theme.js';
import { initContactForm } from './form.js';

document.addEventListener('DOMContentLoaded', () => {
  // Initialize Core Engines
  initNeuralCanvas();
  initHeroVisualizerCanvas();
  initTheme();
  initModalListeners();
  initContactForm();

  // Dynamic Content Renderers
  renderAboutHighlights();
  renderSkills();
  initProjectFilter();
  renderAILab();
  renderTimeline();
  renderCertifications();
  renderJourneyRoadmap();

  // Scroll & Interaction Features
  initNavbarScroll();
  initMobileNav();
  initScrollReveal();
  initBackToTop();
  initCursorSpotlight();

  // Post-render physics & counters
  setTimeout(() => {
    init3DTilt();
    initCounter();
  }, 100);
});

/* Renderers */

function renderAboutHighlights() {
  const container = document.getElementById('about-highlights-list');
  if (!container) return;

  container.innerHTML = portfolioData.aboutHighlights.map(h => `
    <li>
      <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
      <span>${h}</span>
    </li>
  `).join('');
}

function renderSkills() {
  const container = document.getElementById('skills-container');
  if (!container) return;

  container.innerHTML = portfolioData.skillCategories.map(cat => `
    <div class="skills-category-block reveal-on-scroll">
      <div class="category-title-wrap">
        <div class="category-icon">⚡</div>
        <div>
          <h3 class="category-title">${cat.name}</h3>
          <p style="font-size: 0.85rem; color: var(--text-muted);">${cat.description}</p>
        </div>
      </div>
      <div class="skills-grid">
        ${cat.skills.map(s => {
          let badgeClass = 'badge-learning';
          if (s.level === 'Intermediate') badgeClass = 'badge-intermediate';
          if (s.level === 'Exploring') badgeClass = 'badge-exploring';

          return `
            <div class="skill-card">
              <div class="skill-header">
                <span class="skill-name">${s.name}</span>
                <span class="skill-badge-level ${badgeClass}">${s.level}</span>
              </div>
              <p class="skill-desc">${s.desc}</p>
            </div>
          `;
        }).join('')}
      </div>
    </div>
  `).join('');
}

function renderAILab() {
  const container = document.getElementById('ai-lab-grid');
  if (!container) return;

  container.innerHTML = portfolioData.aiLabCards.map(card => `
    <div class="ai-lab-card reveal-on-scroll">
      <div class="ai-lab-header">
        <span class="ai-lab-icon">${card.icon}</span>
        <div>
          <h3 class="ai-lab-title">${card.title}</h3>
          <span class="ai-lab-subtitle">${card.subtitle}</span>
        </div>
      </div>
      <p class="ai-lab-desc">${card.desc}</p>
      <div class="ai-lab-tags">
        ${card.tags.map(t => `<span class="ai-tag">${t}</span>`).join('')}
      </div>
    </div>
  `).join('');
}

function renderTimeline() {
  const container = document.getElementById('education-timeline');
  if (!container) return;

  container.innerHTML = portfolioData.educationTimeline.map(item => `
    <div class="timeline-item reveal-on-scroll">
      <div class="timeline-dot"></div>
      <div class="timeline-content">
        <span class="timeline-year">${item.year}</span>
        <h3 class="timeline-title">${item.title}</h3>
        <p class="timeline-institution">${item.institution}</p>
        <p class="timeline-desc">${item.desc}</p>
      </div>
    </div>
  `).join('');
}

function renderCertifications() {
  const container = document.getElementById('certs-grid');
  if (!container) return;

  container.innerHTML = portfolioData.certifications.map(cert => `
    <div class="cert-card reveal-on-scroll">
      <div class="cert-header">
        <div>
          <h3 class="cert-title">${cert.title}</h3>
          <p class="cert-issuer">${cert.issuer} • ${cert.year}</p>
        </div>
        <span class="cert-badge-status">${cert.status}</span>
      </div>
      <p class="cert-desc">${cert.desc}</p>
      <button class="btn btn-secondary btn-icon btn-view-cert" data-id="${cert.id}">
        View Certificate
      </button>
    </div>
  `).join('');

  document.querySelectorAll('.btn-view-cert').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.getAttribute('data-id');
      const cert = portfolioData.certifications.find(c => c.id === id);
      if (cert) openCertModal(cert);
    });
  });
}

function renderJourneyRoadmap() {
  const container = document.getElementById('journey-node-graph');
  if (!container) return;

  container.innerHTML = portfolioData.learningJourney.map(node => `
    <div class="journey-node reveal-on-scroll">
      <div class="journey-step-num">${node.step}</div>
      <div>
        <h4 class="journey-name">${node.name}</h4>
        <p class="journey-desc">${node.desc}</p>
      </div>
    </div>
  `).join('');
}

/* Navbar & Helpers */

function initNavbarScroll() {
  const navbar = document.getElementById('navbar');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar?.classList.add('scrolled');
    } else {
      navbar?.classList.remove('scrolled');
    }

    // Active link highlighting
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120;
      if (window.scrollY >= sectionTop) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });
}

function initMobileNav() {
  const hamburger = document.getElementById('hamburger');
  const mobileNav = document.getElementById('mobile-nav');

  hamburger?.addEventListener('click', () => {
    mobileNav?.classList.toggle('open');
  });

  mobileNav?.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      mobileNav.classList.remove('open');
    });
  });
}

function initScrollReveal() {
  const elements = document.querySelectorAll('.reveal-on-scroll');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
      }
    });
  }, { threshold: 0.1 });

  elements.forEach(el => observer.observe(el));
}

function initBackToTop() {
  const btn = document.getElementById('back-to-top');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      btn?.classList.add('show');
    } else {
      btn?.classList.remove('show');
    }
  });

  btn?.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

function initCursorSpotlight() {
  const spotlight = document.getElementById('cursor-spotlight');
  if (!spotlight) return;

  if (window.matchMedia('(pointer: coarse)').matches) {
    spotlight.style.display = 'none';
    return;
  }

  window.addEventListener('mousemove', (e) => {
    spotlight.style.left = `${e.clientX}px`;
    spotlight.style.top = `${e.clientY}px`;
  });
}
