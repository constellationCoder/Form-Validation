const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

// Real-time validation for more details every thing user types it validated instantly
username.addEventListener('input', () => {
    validateUsername();
});

email.addEventListener('input', () => {
    validateEmail();
});

password.addEventListener('input', () => {
    validatePassword();
});

password2.addEventListener('input', () => {
    validatePassword2();
});

form.addEventListener('submit', (e) => {
    e.preventDefault(); // prvent default form from submittion 

    if (checkInputs()) { 
        // Submit the form if all inputs are valid
        form.submit(); 
    }
}); 

function checkInputs() {
    // Validate all fields
    return validateUsername() & validateEmail() & validatePassword() & validatePassword2();
} // (&) used to ensure that all requirements are met

// normal validation is
function validateUsername() {
    const usernameValue = username.value.trim(); // trim to remove any whitspace 
    if (usernameValue === '') {
        setErrorFor(username, 'Username cannot be blank');
        return false;
    } else if (usernameValue.length < 3 || usernameValue.length > 15) {
        setErrorFor(username, 'Username must be between 3 and 15 characters');
        return false;
    } else {
        setSuccessFor(username);
        return true;
    }
} 

function validateEmail() {
    const emailValue = email.value.trim();
    if (emailValue === '') {
        setErrorFor(email, 'Email cannot be blank');
        return false;
    } else if (!isEmail(emailValue)) {
        setErrorFor(email, 'Not a valid email');
        return false;
    } else {
        setSuccessFor(email);
        return true;
    }
}

function validatePassword() {
    const passwordValue = password.value.trim();
    if (passwordValue === '') {
        setErrorFor(password, 'Password cannot be blank');
        return false;
    } else if (passwordValue.length < 6) {
        setErrorFor(password, 'Password must be at least 6 characters');
        return false;
    } else {
        setSuccessFor(password);
        return true;
    }
}

function validatePassword2() {
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();
    if (password2Value === '') {
        setErrorFor(password2, 'Password check cannot be blank');
        return false;
    } else if (passwordValue !== password2Value) {
        setErrorFor(password2, 'Passwords do not match');
        return false;
    } else {
        setSuccessFor(password2);
        return true;
    }
}
// set error and set success are optional just for style 
function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');

    small.innerText = message;

    formControl.className = 'form-control error';
}

function setSuccessFor(input) {
    const formControl = input.parentElement;

    
    formControl.className = 'form-control success';
}
// regex for email 
function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@(([^<>()[\]\.,;:\s@"]+\.)+[^<>()[\]\.,;:\s@"]{2,})$/i.test(email);
}
