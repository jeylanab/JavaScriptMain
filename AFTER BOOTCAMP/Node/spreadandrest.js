// in this file i will practice on the spread and rest operator to make my understanding of those two topic very deep

// if the three dot is in the function parameter we call it the REST OPERATOR

// EXAMPLE
// function display(...name) {
    
// }


// spread

const arr1 = [4, 6, 3, 6, 5];
const arr2 = [4, 2, 3, 22, 9];
const arr3 = [4, 6, 5, 6, 5];

const allTogether = [...arr1, 6, 4, ...arr2, ...arr3]

console.log(allTogether)
