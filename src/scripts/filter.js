/**
 * Project Filtering & Category Switching Engine
 * Mayank Singh Chauhan Portfolio
 */

import { portfolioData } from '../data/portfolioData.js';
import { openProjectModal } from './modal.js';

export function renderProjects(filterCategory = 'All') {
  const container = document.getElementById('projects-grid-container');
  if (!container) return;

  const filtered = filterCategory === 'All'
    ? portfolioData.projects
    : portfolioData.projects.filter(p => p.category === filterCategory || (filterCategory === 'Other' && !['AI/ML', 'Web', 'JavaScript'].includes(p.category)));

  container.innerHTML = filtered.map(p => `
    <div class="project-card" data-category="${p.category}">
      <div class="project-banner">
        <svg class="project-banner-svg" viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="400" height="200" fill="#0d1322"/>
          <circle cx="200" cy="100" r="60" fill="url(#grad-${p.id})" opacity="0.2"/>
          <path d="M50 150 L150 70 L250 120 L350 50" stroke="url(#line-${p.id})" stroke-width="3" stroke-dasharray="4 4"/>
          <circle cx="150" cy="70" r="6" fill="#00f2fe"/>
          <circle cx="250" cy="120" r="6" fill="#7f00ff"/>
          <circle cx="350" cy="50" r="6" fill="#00f5d4"/>
          <text x="20" y="35" fill="#64748b" font-family="monospace" font-size="12">${p.type.toUpperCase()}</text>
          <defs>
            <linearGradient id="grad-${p.id}" x1="0" y1="0" x2="400" y2="200">
              <stop offset="0%" stop-color="#00f2fe"/>
              <stop offset="100%" stop-color="#7f00ff"/>
            </linearGradient>
            <linearGradient id="line-${p.id}" x1="0" y1="0" x2="400" y2="0">
              <stop offset="0%" stop-color="#00f2fe"/>
              <stop offset="100%" stop-color="#00f5d4"/>
            </linearGradient>
          </defs>
        </svg>
        <span class="project-badge-tag">${p.badge}</span>
      </div>
      <div class="project-content">
        <h3 class="project-title">${p.title}</h3>
        <p class="project-desc">${p.shortDesc}</p>
        <div class="project-tech-pills">
          ${p.technologies.map(tech => `<span class="tech-pill">${tech}</span>`).join('')}
        </div>
        <div class="project-actions">
          <a href="${p.githubUrl}" target="_blank" rel="noopener" class="btn btn-secondary btn-icon">
            <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
            GitHub
          </a>
          <a href="${p.liveUrl}" target="_blank" rel="noopener" class="btn btn-secondary btn-icon">
            <svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
            Live Demo
          </a>
          <button class="btn btn-primary btn-icon btn-view-details" data-id="${p.id}">Details</button>
        </div>
      </div>
    </div>
  `).join('');

  // Attach modal listeners
  document.querySelectorAll('.btn-view-details').forEach(btn => {
    btn.addEventListener('click', () => {
      const projId = btn.getAttribute('data-id');
      const project = portfolioData.projects.find(p => p.id === projId);
      if (project) openProjectModal(project);
    });
  });
}

export function initProjectFilter() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filterCategory = btn.getAttribute('data-filter');
      renderProjects(filterCategory);
    });
  });
  renderProjects('All');
}
