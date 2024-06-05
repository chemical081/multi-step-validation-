// rs
const form = document.getElementById("form1");  //selecting the whole form 
const firstNameInput = document.getElementById("first-name");   //selecting the input element first name
const middleNameInput = document.getElementById("middle-name"); //selecting the input of the middle name 
const lastNameInput = document.getElementById("last-name");     //selecting the input of the last name
const errorElement = form.querySelectorAll(".error");           //selecting the error that is gonna be displayed if there is any



//Form1---------------------------------------------------------------------------------
//middle name is optional so there won't be any validation

//EventListeners
firstNameInput.addEventListener("input", validateFirstName); //once entering the code is gonna start validating for any errors in the first name
lastNameInput.addEventListener("input", validateLastName); //once entering the code is gonna start validating for any errors in the last name


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

// Function to validate first name
function validateFirstName() {
    //(.value) will take the value that was typed in the input field
    //(.trim) will trim any spaces in the front and the back if any
    const firstNameValue = firstNameInput.value.trim();
    
    //if elese conditions
    if (firstNameValue === '') { //when the value of the first name is blank
        showError(firstNameInput, "First Name is required");
    } else if (firstNameValue.length < 3) { //when the value of the first name is less than three characters
        showError(firstNameInput, "First Name must be at least 3 characters long");
    } else {
        clearError(firstNameInput);//calls the clear functions that was created earlier
    }
}


// Function to validate last name
function validateLastName() {
    const lastNameValue = lastNameInput.value.trim();
    //(.value) will take the value that was typed in the input field
    //(.trim) will trim any spaces in the front and the back if any

    if (lastNameValue === '') { //when the value of the last name is blank
        showError(lastNameInput, "Last Name is required");
    } else if (lastNameValue.length < 3) { //when the value of the last name is less than three characters
        showError(lastNameInput, "Last Name must be at least 3 characters long");
    } else {
        clearError(lastNameInput);//calls the clear functions that was created earlier
    }
}



// Form submission event listener to check if all inputs are valid before submitting
//all the functions are called when the submit is clicked
form.addEventListener("submit", function(e) {
    e.preventDefault(); // Prevent form submission

    validateFirstName();
    validateLastName();

    const allValid = document.querySelectorAll('form1 .error').length === 0;

    if (allValid) {
        // Redirect to another page if all validations pass
        window.location.href = "second_page.html"; // Example of navigation to another page
    }

    const fn = firstNameInput.value;
    const mn = middleNameInput.value;
    const ln = lastNameInput.value;

    // storing the value from the inputs in local storage
    localStorage.setItem("First-Name", fn); //storing the first name as fn 
    localStorage.setItem("Middle-Name", mn);//storing the middle name as mn
    localStorage.setItem("last-Name", ln); //storing the last name as ln
});


//End of form1----------------------------------------------------------------------------
