// darkmode.js
const toggleBtn = document.createElement('button');
toggleBtn.textContent = '🌓';
document.body.prepend(toggleBtn);

toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});