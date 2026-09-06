/**
 * Contact Form Validation & Toast Notification Engine
 * Mayank Singh Chauhan Portfolio
 */

export function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  const nameInput = document.getElementById('contact-name');
  const emailInput = document.getElementById('contact-email');
  const subjectInput = document.getElementById('contact-subject');
  const messageInput = document.getElementById('contact-message');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    let isValid = true;

    // Reset errors
    document.querySelectorAll('.form-error').forEach(el => el.style.display = 'none');

    if (!nameInput.value.trim()) {
      showError(nameInput, 'Please enter your name');
      isValid = false;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailInput.value.trim() || !emailPattern.test(emailInput.value)) {
      showError(emailInput, 'Please enter a valid email address');
      isValid = false;
    }

    if (!subjectInput.value.trim()) {
      showError(subjectInput, 'Please enter a subject');
      isValid = false;
    }

    if (!messageInput.value.trim() || messageInput.value.trim().length < 10) {
      showError(messageInput, 'Message must be at least 10 characters long');
      isValid = false;
    }

    if (isValid) {
      const submitBtn = form.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;

      submitBtn.innerHTML = `
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="animation: spin 1s linear infinite"><circle cx="12" cy="12" r="10" stroke-dasharray="32" stroke-dashoffset="10"/></svg>
        Transmitting Message...
      `;
      submitBtn.disabled = true;

      setTimeout(() => {
        showToast('🚀 Message transmitted successfully! Thank you for reaching out, Mayank will respond soon.');
        form.reset();
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
      }, 1200);
    }
  });
}

function showError(inputEl, message) {
  const parent = inputEl.closest('.form-group');
  if (!parent) return;
  const errorEl = parent.querySelector('.form-error');
  if (errorEl) {
    errorEl.textContent = message;
    errorEl.style.display = 'block';
  }
}

export function showToast(message) {
  const toast = document.getElementById('toast-notification');
  const msgEl = document.getElementById('toast-message');
  if (!toast || !msgEl) return;

  msgEl.textContent = message;
  toast.classList.add('show');

  setTimeout(() => {
    toast.classList.remove('show');
  }, 4500);
}
