//Selectors
const form = document.getElementById('form3'); //selecting the form     
const username = document.getElementById('username'); //selecting the input tag with the id username
const birthdate = document.getElementById('birthdate');//selecting the input tag with the id birthdate
const phone = document.getElementById('number');    //selecting the input tag with the id number

//Event Listners
//gonna validate the inputs once the keys are pressed 
username.addEventListener("keydown", validateUsername);
birthdate.addEventListener("keydown", validateBirthdate);
phone.addEventListener("keydown", validatePhone);

form.addEventListener("submit", function(e){
    e.preventDefault(); //prevents from submission

    //functions that are gonna get triggered 
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
// function to show error message by updating the <p>tag in the html file
function showError(inputElement, message) {  //takes two parameters first the element and the message that is gonna be updated
    const errorElement = inputElement.parentElement.querySelector(".error"); //the p tag is selected 
    if (errorElement) {
        errorElement.textContent = message;
        errorElement.style.display = "block"; //the css styles was none and if there is any error its gonna be block
    }
}

// function to Clear error message 
//there won't be any messages if no error and the styling will be none
function clearError(inputElement) {
    const errorElement = inputElement.parentElement.querySelector(".error");
    if (errorElement) {
        errorElement.textContent = "";
        errorElement.style.display = "none";
    }
}

//validating username
function validateUsername(){
    const usernameInput = username.value.trim();

    if (usernameInput === '') { //checking if the value is blank
        showError("username", "the username cannot be blank");
    } else if (usernameInput <= 5) { //the name should be atleast 5 characters long 
        showError("username", "the username must be at least five words.");
    } else {
        clearError(username);
    }
}

function validateBirthdate(){
    const dateRegex = /^(0[1-9]|1\d|2\d|3[01])\.(0[1-9]|1[0-2])\.(19|20)\d{2}$/; //regular expression
    if (!dateRegex.test(birthdate.value)) { //checking if the enterd date matches the regular expression
        showError(birthdate, "invalid date");
    } else
        clearError(birthdate); 
}

function validatePhone() {
    const numberRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/; //regular expression
    if (!numberRegex.test(phone.value)) { //checking if the number matches the regular expression
        showError(phone, "invalid phone number");
    } else
    clearError(phone);
}