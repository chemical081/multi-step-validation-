//Selectors
const form = document.getElementById('form3');
const username = document.getElementById('username');
const birthdate = document.getElementById('birthdate');
const phone = document.getElementById('number');

//Event Listners
username.addEventListener("keydown", validateUsername);
birthdate.addEventListener("keydown", validateBirthdate);
phone.addEventListener("keydown", validatePhone);

form.addEventListener("submit", function(e){
    e.preventDefault();

    validateUsername();
    validateBirthdate();
    validatePhone();

    const allValid = document.querySelectorAll('form3 .error').length === 0;

    if (allValid) {
        // Redirect to another page if all validations pass
        window.location.href = "second_page.html"; // Example of navigation to another page
    }

})

//functions

function showError(inputElement, message) {
    const errorElement = inputElement.parentElement.querySelector(".error");
    if (errorElement) {
        errorElement.textContent = message;
        errorElement.style.display = "block";
    }
}

function clearError(inputElement) {
    const errorElement = inputElement.parentElement.querySelector(".error");
    if (errorElement) {
        errorElement.textContent = "";
        errorElement.style.display = "none";
    }
}

function validateUsername(){
    const usernameInput = username.value.trim();

    if (usernameInput === '') {
        showError("username", "the username cannot be blank");
    } else if (usernameInput <= 5) {
        showError("username", "the username must be at least five words.");
    } else {
        clearError(username);
    }
}

function validateBirthdate(){
    const dateRegex = /^(0[1-9]|1\d|2\d|3[01])\.(0[1-9]|1[0-2])\.(19|20)\d{2}$/;
    if (!dateRegex.test(birthdate.value)) {
        showError(birthdate, "invalid date");
    } else
        clearError(birthdate); 
}

function validatePhone() {
    const numberRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    if (!numberRegex.test(phone.value)) {
        showError(phone, "invalid phone number");
    } else
    clearError(phone);
}