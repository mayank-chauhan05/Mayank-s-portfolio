/**
 * Modal Manager for Project Details & Certifications
 * Mayank Singh Chauhan Portfolio
 */

export function openProjectModal(project) {
  const overlay = document.getElementById('modal-overlay');
  const container = document.getElementById('modal-content-area');
  if (!overlay || !container) return;

  container.innerHTML = `
    <div style="margin-bottom: 1.5rem;">
      <span class="status-badge" style="margin-bottom: 0.5rem;">${project.badge}</span>
      <h2 style="font-size: 2rem; margin-bottom: 0.5rem;">${project.title}</h2>
      <p style="color: var(--accent-cyan); font-family: var(--font-mono); font-size: 0.9rem;">${project.type}</p>
    </div>
    
    <div style="margin-bottom: 1.5rem;">
      <h4 style="margin-bottom: 0.5rem; color: var(--text-primary);">Overview</h4>
      <p style="color: var(--text-secondary); line-height: 1.6;">${project.longDesc}</p>
    </div>

    <div style="margin-bottom: 1.5rem;">
      <h4 style="margin-bottom: 0.75rem; color: var(--text-primary);">Key Architectural Features</h4>
      <ul style="list-style: none; display: flex; flex-direction: column; gap: 0.5rem;">
        ${project.features.map(f => `
          <li style="display: flex; align-items: center; gap: 0.5rem; color: var(--text-secondary); font-size: 0.95rem;">
            <span style="color: var(--accent-cyan);">✦</span> ${f}
          </li>
        `).join('')}
      </ul>
    </div>

    <div style="margin-bottom: 2rem;">
      <h4 style="margin-bottom: 0.5rem; color: var(--text-primary);">Technologies Used</h4>
      <div class="project-tech-pills">
        ${project.technologies.map(t => `<span class="tech-pill" style="font-size: 0.85rem; padding: 0.3rem 0.8rem;">${t}</span>`).join('')}
      </div>
    </div>

    <div style="display: flex; gap: 1rem;">
      <a href="${project.githubUrl}" target="_blank" rel="noopener" class="btn btn-primary">View Source Code</a>
      <a href="${project.liveUrl}" target="_blank" rel="noopener" class="btn btn-secondary">Open Live Application</a>
    </div>
  `;

  overlay.classList.add('active');
}

export function openCertModal(cert) {
  const overlay = document.getElementById('modal-overlay');
  const container = document.getElementById('modal-content-area');
  if (!overlay || !container) return;

  container.innerHTML = `
    <div style="margin-bottom: 1.5rem;">
      <span class="cert-badge-status" style="margin-bottom: 0.5rem;">${cert.status}</span>
      <h2 style="font-size: 2rem; margin-bottom: 0.25rem;">${cert.title}</h2>
      <p style="color: var(--text-muted); font-size: 0.95rem;">Issuer: <strong style="color: var(--text-primary);">${cert.issuer}</strong> (${cert.year})</p>
    </div>

    <div style="background: rgba(0,0,0,0.3); border: 1px dashed var(--border-glass); border-radius: var(--radius-md); padding: 2rem; text-align: center; margin-bottom: 1.5rem;">
      <div style="font-size: 3rem; margin-bottom: 0.5rem;">📜</div>
      <h3 style="font-size: 1.1rem; color: var(--accent-cyan);">${cert.title}</h3>
      <p style="font-size: 0.85rem; color: var(--text-muted);">Verified Academic Record & Skill Credential</p>
    </div>

    <p style="color: var(--text-secondary); margin-bottom: 2rem; line-height: 1.6;">${cert.desc}</p>

    <div style="display: flex; gap: 1rem;">
      <button class="btn btn-secondary modal-close-trigger">Close Preview</button>
    </div>
  `;

  overlay.classList.add('active');

  container.querySelector('.modal-close-trigger')?.addEventListener('click', closeModal);
}

export function closeModal() {
  const overlay = document.getElementById('modal-overlay');
  if (overlay) overlay.classList.remove('active');
}

export function initModalListeners() {
  const overlay = document.getElementById('modal-overlay');
  const closeBtn = document.getElementById('modal-close-btn');

  closeBtn?.addEventListener('click', closeModal);
  overlay?.addEventListener('click', (e) => {
    if (e.target === overlay) closeModal();
  });
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });
}
