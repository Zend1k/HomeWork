function displayArrayAsList(array) {
    // Get the list container
    const listContainer = document.getElementById('list');

    // Generate list items using map and template literals
    const listItems = array.map(item => `<li>${item}</li>`).join('');

    // Insert the generated list items into the list container
    listContainer.innerHTML = listItems;
}

// Example arrays
const array1 = ['hello', 'world', 'Kiev', 'Kharkiv', 'Odessa', 'Lviv'];
const array2 = ['1', '2', '3', 'sea', 'user', 23];

// Display the arrays as lists
displayArrayAsList(array1);
// To display another array, simply call the function with a different array
// displayArrayAsList(array2);
