// Function to display error message
function printError(elemId, hintMsg) {
    document.getElementById(elemId).innerHTML = hintMsg;
}

// Function to validate form
function validateForm() {
    // Retrieving the values of form elements
    let name = document.contactForm.name.value;
    let password = document.contactForm.password.value;

    // Defining error variables with a default value
    let nameErr = true;
    let passwordErr = true;

    // Validate name
    if (name == "") {
        printError("nameErr", "Please enter your Username");
    } else {
        let regex = /^[a-zA-Z\s]+$/;
        if (regex.test(name) === false) {
            printError("nameErr", "Please enter a valid Username");
        } else {
            printError("nameErr", "");
            nameErr = false;
        }
    }

    // Validate password
    if (password == "") {
        printError("passwordErr", "Please enter your password");
    } else {
        // Password must be at least 6 characters long
        if (password.length < 6) {
            printError("passwordErr", "Your password is invalid.");
        } else {
            printError("passwordErr", "");
            passwordErr = false;
        }
    }

    // Prevent the form from being submitted if there are any errors
    if (nameErr || passwordErr) {
        return false;
    } else {
        // Creating a string from input data for preview
        let dataPreview = "You've entered the following details: \n" +
                          "Full Name: " + name + "\n";

        // Display input data in a dialog box before submitting the form
        alert(dataPreview);

        // Redirect to successful submission page
        window.location.href = "index.html";

        // Prevent the form from actually submitting (since we're redirecting manually)
        return false;
    }
}
