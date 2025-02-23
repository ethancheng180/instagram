document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        // Basic validation
        if (!email || !password) {
            alert('Please enter both email and password.');
            return;
        }

        // Placeholder for backend integration (e.g., Node.js/Express)
        console.log('Login attempt:', { email, password });
        alert('Login functionality would connect to a backend here. Check console for details.');

        // Example backend call (uncomment and update API_URL for real integration)
        /*
        const API_URL = 'http://localhost:3000'; // or your Replit backend URL
        fetch(`${API_URL}/api/auth/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password })
        }).then(response => response.json())
          .then(data => alert(data.message))
          .catch(error => alert('Login failed: ' + error.message));
        */

        loginForm.reset();
    });

    // Handle "Sign Up" link click (placeholder)
    document.querySelector('p a').addEventListener('click', (e) => {
        e.preventDefault();
        alert('This would navigate to a signup page or open a signup form. Implement backend for functionality!');
    });
});
