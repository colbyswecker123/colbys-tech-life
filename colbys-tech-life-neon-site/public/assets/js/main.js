const menuToggle = document.querySelector('[data-menu-toggle]');
const primaryNav = document.querySelector('[data-primary-nav]');
if (menuToggle && primaryNav) {
  menuToggle.addEventListener('click', () => {
    const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-expanded', String(!isOpen));
    primaryNav.classList.toggle('is-open', !isOpen);
  });
  primaryNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      menuToggle.setAttribute('aria-expanded', 'false');
      primaryNav.classList.remove('is-open');
    });
  });
}
const yearEl = document.querySelector('[data-year]');
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}
const contactForm = document.querySelector('[data-contact-form]');
if (contactForm) {
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(contactForm);
    const name = String(formData.get('name') || '').trim();
    if (name) {
      sessionStorage.setItem('ctlContactName', name);
    }
    window.location.href = 'thank-you.html';
  });
}
const thankYouName = document.querySelector('[data-thank-you-name]');
if (thankYouName) {
  const savedName = sessionStorage.getItem('ctlContactName');
  if (savedName) {
    thankYouName.textContent = `Thanks, ${savedName}.`;
    sessionStorage.removeItem('ctlContactName');
  }
}
