// rs
const form = document.getElementById("form1");
const firstNameInput = document.getElementById("first-name");
const middleNameInput = document.getElementById("middle-name");
const lastNameInput = document.getElementById("last-name");
const errorElement = form.querySelectorAll(".error");



//Form1---------------------------------------------------------------------------------

//EventListeners
firstNameInput.addEventListener("input", validateFirstName);
lastNameInput.addEventListener("input", validateLastName);


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

// Function to validate first name
function validateFirstName() {
    const firstNameValue = firstNameInput.value.trim();

    if (firstNameValue === '') {
        showError(firstNameInput, "First Name is required");
    } else if (firstNameValue.length < 3) {
        showError(firstNameInput, "First Name must be at least 3 characters long");
    } else {
        clearError(firstNameInput);
    }
}


// Function to validate last name
function validateLastName() {
    const lastNameValue = lastNameInput.value.trim();

    if (lastNameValue === '') {
        showError(lastNameInput, "Last Name is required");
    } else if (lastNameValue.length < 3) {
        showError(lastNameInput, "Last Name must be at least 3 characters long");
    } else {
        clearError(lastNameInput);
    }
}



// Form submission event listener to check if all inputs are valid before submitting
form.addEventListener("submit", function(e) {
    e.preventDefault(); // Prevent form submission

    validateFirstName();
    // validateMiddleName();
    validateLastName();

    const allValid = document.querySelectorAll('form1 .error').length === 0;

    if (allValid) {
        // Redirect to another page if all validations pass
        window.location.href = "second_page.html"; // Example of navigation to another page
    }

    const fn = firstNameInput.value;
    const mn = middleNameInput.value;
    const ln = lastNameInput.value;

    localStorage.setItem("First-Name", fn);
        localStorage.setItem("Middle-Name", mn);
        localStorage.setItem("last-Name", ln);
});



//End of form1----------------------------------------------------------------------------
