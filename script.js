// script.js - Basic functionality
document.addEventListener('DOMContentLoaded', () => {
    // Mobile menu toggle (add a hamburger menu in CSS first)
    const mobileMenuButton = document.createElement('button');
    mobileMenuButton.textContent = '☰';
    mobileMenuButton.classList.add('mobile-menu-btn');
    document.querySelector('header').prepend(mobileMenuButton);

    mobileMenuButton.addEventListener('click', () => {
        document.querySelector('nav').classList.toggle('active');
    });

    // Contact form submission
    const contactForm = document.querySelector('.contact-form form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Message sent! (Simulated)');
            contactForm.reset();
        });
    }
});