// nav-component.js
export function initNavigation() {
  // Get current page path
  const currentPath = window.location.pathname;
  const pageName = currentPath.split('/').pop();
  
  // Set active state for current page in navigation
  const navLinks = document.querySelectorAll('nav a');
  navLinks.forEach(link => {
    const linkHref = link.getAttribute('href');
    if (linkHref === pageName || 
        (pageName === '' && linkHref === 'index.html') ||
        (pageName === '/' && linkHref === 'index.html')) {
      link.setAttribute('aria-current', 'page');
      link.classList.add('active');
    }
  });
  
  // Add mobile menu functionality
  const header = document.querySelector('header');
  if (!document.querySelector('.mobile-menu-btn')) {
    const mobileMenuButton = document.createElement('button');
    mobileMenuButton.textContent = '☰';
    mobileMenuButton.classList.add('mobile-menu-btn');
    mobileMenuButton.setAttribute('aria-label', 'Toggle menu');
    header.prepend(mobileMenuButton);
    
    mobileMenuButton.addEventListener('click', () => {
      document.querySelector('nav').classList.toggle('active');
    });
  }
}