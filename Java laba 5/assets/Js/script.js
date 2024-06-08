function createNewUser() {
    // Prompt user for first name, last name, and date of birth
    let firstName = prompt("Enter your first name:");
    let lastName = prompt("Enter your last name:");
    let birthday = prompt("Enter your date of birth (dd.mm.yyyy):");

    // Create newUser object with firstName, lastName, and birthday properties
    let newUser = {
        firstName: firstName,
        lastName: lastName,
        birthday: birthday,

        // Method to get login
        getLogin: function() {
            return this.firstName.charAt(0).toLowerCase() + this.lastName.toLowerCase();
        },

        // Method to get age
        getAge: function() {
            let birthDate = new Date(this.birthday.split('.').reverse().join('-'));
            let ageDifMs = Date.now() - birthDate.getTime();
            let ageDate = new Date(ageDifMs);
            return Math.abs(ageDate.getUTCFullYear() - 1970);
        },

        // Method to get password
        getPassword: function() {
            let birthYear = this.birthday.split('.')[2];
            return this.firstName.charAt(0).toUpperCase() + this.lastName.toLowerCase() + birthYear;
        }
    };

    // Return the newUser object
    return newUser;
}

// Create a new user by calling the createNewUser function
let user = createNewUser();

// Log the result of the getLogin, getAge, and getPassword methods
console.log("Login:", user.getLogin());
console.log("Age:", user.getAge());
console.log("Password:", user.getPassword());
