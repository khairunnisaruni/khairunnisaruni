const nameRegex = /^[a-zA-Z\s]+$/;
const birthdayRegex = /^\d{4}-\d{2}-\d{2}$/;
const usernameRegex = /^[a-zA-Z0-9_]+$/;
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const instagramRegex = /^https?:\/\/(?:www\.)?instagram\.com\/[\w.-]+\/?$/;

const nameInput = document.getElementById('name');
const birthdayInput = document.getElementById('birthday');
const usernameInput = document.getElementById('username');
const emailInput = document.getElementById('email');
const instagramInput = document.getElementById('instagram');

const nameError = document.getElementById('nameError');
const birthdayError = document.getElementById('birthdayError');
const usernameError = document.getElementById('usernameError');
const emailError = document.getElementById('emailError');
const instagramError = document.getElementById('instagramError');

function displayErrorMessage(element, isValid) {
    if (!isValid) {
        element.textContent = 'Invalid';
        element.style.color = 'red';
        element.previousElementSibling.style.borderColor = 'red'; 
    } else {
        element.textContent = 'Valid';
        element.style.color = 'green';
        element.previousElementSibling.style.borderColor = 'green'; 
    }
}

nameInput.addEventListener('input', function() {
    displayErrorMessage(nameError, nameRegex.test(nameInput.value));
});

birthdayInput.addEventListener('input', function() {
    displayErrorMessage(birthdayError, birthdayRegex.test(birthdayInput.value));
});

usernameInput.addEventListener('input', function() {
    displayErrorMessage(usernameError, usernameRegex.test(usernameInput.value));
});

emailInput.addEventListener('input', function() {
    displayErrorMessage(emailError, emailRegex.test(emailInput.value));
});

instagramInput.addEventListener('input', function() {
    displayErrorMessage(instagramError, instagramRegex.test(instagramInput.value));
});
