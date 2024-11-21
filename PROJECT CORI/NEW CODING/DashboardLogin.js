// Toggle Password Visibility
/*
function togglePassword() {
    const passwordInput = document.getElementById("password");
    const passwordIcon = document.querySelector(".toggle-password");
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        passwordIcon.textContent = "🙈"; // Change icon
    } else {
        passwordInput.type = "password";
        passwordIcon.textContent = "👁️"; // Change icon back
    }
}

// Form Submit Handler
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Login form submitted!");
});
  */


// Predefined list of users who are already logged in (for demo purposes)
const loggedInUsers = ["user1@example.com", "user2@example.com"];
const correctPassword = "yourPassword123"; // Hardcoded password for validation

// Toggle Password Visibility
function togglePassword() {
    const passwordInput = document.getElementById("password");
    const passwordIcon = document.querySelector(".toggle-password");
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        passwordIcon.textContent = "🙈"; // Change icon
    } else {
        passwordInput.type = "password";
        passwordIcon.textContent = "👁️"; // Change icon back
    }
}

// Form Submit Handler with Validation Checks
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Email format validation
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com)$/;
    if (!emailPattern.test(username)) {
        alert("Invalid username. Please use a valid email format ending in .com.");
        return;
    }

    // Check if user is already logged in
    if (loggedInUsers.includes(username)) {
        alert("This person is already logged in.");
        return;
    }

    // Password validation
    if (password !== correctPassword) {
        alert("Wrong password.");
        return;
    }

    // Successful login
    alert("Login successful!");
});
