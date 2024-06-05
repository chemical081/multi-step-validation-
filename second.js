//Selectors

const form = document.getElementById('form2'); //selecting the whole form
const email = document.getElementById('email'); //selecting the input element with a id of email
const password = document.getElementById('password'); //selecting the input element with a id of password
const confirm_password = document.getElementById('confirm-password'); //selecting the input element with a id of confirm-password


//event listeners 

email.addEventListener("keydown", validateEmail); //is gonna validate email once the keys are pressed
password.addEventListener("keydown", validatePassword); //is gonna validate password once the keys are pressed
confirm_password.addEventListener("keydown", validateConfirmPassword);  //is gonna match the text with the password once the keys are pressed

// Form submission event listener to check if all inputs are valid before submitting
//all the functions are called when the submit is clicked
form.addEventListener("submit", function(e) {
    e.preventDefault(); // Prevent form submission
    
    validateEmail();
    validatePassword();
    validateConfirmPassword();

    const allValid = document.querySelectorAll('form2 .error').length === 0;

    if (allValid) {
        // Redirect to another page if all validations pass
        window.location.href = "last_page.html"; 

    const mail = email.value;
    }
    // storing the value from the inputs in local storage
    localStorage.setItem("Email", mail); //storing the email as mail

    });

//functions 

// Show error message
//functions
// function to show error message by updating the <p>tag in the html file
function showError(inputElement, message) {  //takes two parameters first the element and the message that is gonna be updated
    const errorElement = inputElement.parentElement.querySelector(".error"); //the p tag is selected 
    if (errorElement) {
        errorElement.textContent = message;
        errorElement.style.display = "block"; //the css styles was none and if there is any error its gonna be block
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
        if (emailInputvalue === '') { //condition if the email field is blank
            showError(emailInput, "Email cannot be blank");
        } else if (!emailRegex.test(emailInputvalue)) { //the email needs to match the regular expression or its gonna show error
            showError(emailInput, "Invalid Email");
        } else {
            clearError(emailInput);
        }
    }
}


function validatePassword() {
    const passw=  /^[A-Za-z]\w{7,14}$/; //regular expression
    const passwordInputValue = password.value.trim(); //gonna trim any spaces if there is any

    if(passwordInputValue.match(passw)) { //the password needs to match the regular expression 
        showError(password, "password is invalid");
    }else if (password <= 5) {//the password cannot be less than 5 characters
        showError(password, "the password is too short");
    } else {
        clearError(password); 
    }
}

//function to check if the typed passwoword matches with the Password
function validateConfirmPassword() {
    const confirm_Password_Input = confirm_password.value.trim();

        if (document.getElementById('password').value ==
          document.getElementById('confirm-password').value) {
          clearError(confirm_password);
        } else {
          showError(confirm_password, "The password does not matches");
        }
}