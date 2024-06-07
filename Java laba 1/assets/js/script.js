/*user name*/
const userName = prompt("Please enter your name:");

/*user age*/
const userAge = prompt("Please enter your age:");

/*nuber-age*/
const age = Number(userAge);

/*check age + message*/
if (age < 18) {
    alert("You are not allowed to visit this website.");
} else if (age >= 18 && age <= 22) {
    const isSure = confirm("Are you sure you want to continue?");
    if (isSure) {
        alert(`Welcome, ${userName}`);
    } else {
        alert("You are not allowed to visit this website.");
    }
} else if (age > 22) {
    alert(`Welcome, ${userName}`);
} else {
    alert("Invalid age input.");
}
