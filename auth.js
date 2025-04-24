// auth.js - Mock login (replace with Firebase/Auth0 later)
document.getElementById('login-btn').addEventListener('click', () => {
    const username = prompt('Enter username:');
    if (username) localStorage.setItem('user', username);
});

// Check login state
if (localStorage.getItem('user')) {
    console.log(`Logged in as ${localStorage.getItem('user')}`);
}