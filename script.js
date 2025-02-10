// Get input fields and login button
const usernameField = document.getElementById('username');
const passwordField = document.getElementById('password');
const loginButton = document.getElementById('loginButton');

// Enable the login button if both fields have values
usernameField.addEventListener('input', checkFields);
passwordField.addEventListener('input', checkFields);

function checkFields() {
    if (usernameField.value && passwordField.value) {
        loginButton.disabled = false;
    } else {
        loginButton.disabled = true;
    }
}

// Show an alert when the user logs in
loginButton.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent form submission
    const username = usernameField.value;
    alert(`Welcome, ${username}! Logging in...`);
});
