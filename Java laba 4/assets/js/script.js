function createNewUser() {
    // Prompt user for first name and last name
    let firstName = prompt("Enter your first name:");
    let lastName = prompt("Enter your last name:");

    // Create newUser object with firstName and lastName properties
    let newUser = {
        firstName: firstName,
        lastName: lastName,
        // Method to get login
        getLogin: function() {
            // Return login name in lowercase
            return this.firstName.charAt(0).toLowerCase() + this.lastName.toLowerCase();
        }
    };

    // Return the newUser object
    return newUser;
}

// Create a new user by calling the createNewUser function
let user = createNewUser();

// Call the getLogin method and log the result
console.log(user.getLogin());
