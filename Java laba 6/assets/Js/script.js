function filterBy(arr, type) {
    return arr.filter(element => typeof element !== type);
}

// Example usage
const mixedArray = ['hello', 'world', 23, '23', null];
const filteredArray = filterBy(mixedArray, 'string');
console.log(filteredArray); // Output: [23, null]
