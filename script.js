document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Basic validation
        if (!username || !password) {
            alert('Please enter both username and password.');
            return;
        }

        // Placeholder for backend integration (e.g., Node.js/Express)
        console.log('Login attempt:', { username, password });
        alert('Login functionality would connect to a backend here. Check console for details.');

        // Example backend call (uncomment and update API_URL for real integration)
        /*
        const API_URL = 'http://localhost:3000'; // or your Replit backend URL
        fetch(`${API_URL}/api/auth/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password })
        }).then(response => response.json())
          .then(data => alert(data.message))
          .catch(error => alert('Login failed: ' + error.message));
        */

        loginForm.reset();
    });

    // Handle "Sign Up" and "Forgot Password" links (placeholders)
    document.querySelectorAll('p a').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            alert(`This would navigate to a ${link.textContent.toLowerCase().replace(' ', '-')} page or form. Implement backend for functionality!`);
        });
    });
});
