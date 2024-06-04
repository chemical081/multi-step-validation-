//Selectors

const form = document.getElementById('form2');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirm_password = document.getElementById('confirm-password');


//event listeners 

email.addEventListener("keydown", validateEmail);
password.addEventListener("keydown", validatePassword);
confirm_password.addEventListener("keydown", validateConfirmPassword); 

form.addEventListener("submit", function(e) {
    e.preventDefault();
    
    validateEmail();
    validatePassword();
    validateConfirmPassword();

    const allValid = document.querySelectorAll('form2 .error').length === 0;

    if (allValid) {
        // Redirect to another page if all validations pass
        window.location.href = "last_page.html"; // Example of navigation to another page
    }
})


//functions 

// Show error message
function showError(inputElement, message) {
    const errorElement = inputElement.parentElement.querySelector(".error");
    if (errorElement) {
        errorElement.textContent = message;
        errorElement.style.display = "block";
    }
}

// Clear error message
function clearError(inputElement) {
    const errorElement = inputElement.parentElement.querySelector(".error");
    if (errorElement) {
        errorElement.textContent = "";
        errorElement.style.display = "none";
    }
}


function validateEmail() {
    const emailInputvalue = email.value.trim();
    // email regular expression
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email === '') {
        if (emailInputvalue === '') {
            showError(emailInput, "Email cannot be blank");
        } else if (!emailRegex.test(emailInputvalue)) {
            showError(emailInput, "Invalid Email");
        } else {
            clearError(emailInput);
        }
    }
}


function validatePassword() {
    const passw=  /^[A-Za-z]\w{7,14}$/;
    const passwordInputValue = password.value.trim();

    if(passwordInputValue.match(passw)) { 
        showError(password, "password is invalid");
    }else if (password <= 5) {
        showError(password, "the password is too short");
    } else {
        clearError(password);
    }
}

function validateConfirmPassword() {
    const confirm_Password_Input = confirm_password.value.trim();

        if (document.getElementById('password').value ==
          document.getElementById('confirm-password').value) {
          clearError(confirm_password);
        } else {
          showError(confirm_password, "The password does not matches");
        }
}