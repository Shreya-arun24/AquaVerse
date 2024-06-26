document.getElementById('sForm').addEventListener('submit', function(e) {
    e.preventDefault();
    if (validateSignupForm()) {
        const username = document.getElementById('sUsername').value;
        const password = document.getElementById('sPassword').value;
        localStorage.setItem(username, password);
        alert('The First Step is complete! Now you can login');
        document.getElementById('flip').checked = false;
    }
});

document.getElementById('lForm').addEventListener('submit', function(e) {
    e.preventDefault();
    validateLoginForm();
});

function validateSignupForm() {
    let isValid = true;

    // Name Validation
    const eMail = document.getElementById('sMail');
    const eMailError = eMail.nextElementSibling;
    const ePattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (eMail.value.trim() === "" || !ePattern.test(eMail.value)) {
        eMailError.textContent = 'Please enter a valid E-mail.';
        isValid = false;
    } else {
        eMailError.textContent = "";
    }

    // Username Validation
    const username = document.getElementById('sUsername');
    const usernameError = username.nextElementSibling;
    if (username.value.trim() === "") {
        usernameError.textContent = 'Please enter Username.';
        isValid = false;
    } else {
        usernameError.textContent = "";
    }

    // Password Validation
    const password = document.getElementById('sPassword');
    const passwordError = password.nextElementSibling;
    if (password.value.trim() === "" || password.value.length < 8) {
        passwordError.textContent = 'Password must be at least 8 characters long.';
        isValid = false;
    } else {
        passwordError.textContent = "";
    }
    return isValid;
}

function validateLoginForm() {
    // Username Validation
    const username = document.getElementById('lUsername');
    const usernameError = username.nextElementSibling;
    if (username.value.trim() === "") {
        usernameError.textContent = 'Please enter your Username.';
        return;
    } else {
        usernameError.textContent = "";
    }

    // Password Validation
    const password = document.getElementById('lPassword');
    const passwordError = password.nextElementSibling;
    if (password.value.trim() === "") {
        passwordError.textContent = 'Please enter your password.';
        return;
    } else {
        passwordError.textContent = "";
    }

    // Check credentials
    if (password.value === localStorage.getItem(username.value)) {
        alert('Login successful!');
        localStorage.setItem('loginuser', username.value);
        window.location.href = "home.html";
    } else {
        alert('Invalid username or password.');
    }
}
