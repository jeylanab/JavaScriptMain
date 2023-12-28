// string methos and properties

let fullName = "Jeylan Abdo";

// console.log( a.length);
// console.log ( a.charAt(7));
// console.log(a.toUpperCase);
// a=a.toLowerCase;
// console.log(a);


// slice : is used to extract part of the string without affecting the main string.

let firstName;
let lastName;
firstName = fullName.slice (0, fullName.indexOf(" "));
lastName = fullName.slice (fullName.indexOf(" ")+1);

console.log(firstName);
console.log(lastName);
console.log(fullName.toUpperCase());

// method chainning : is used to use multiple function of string on same line of code.

let student = "Joe Doe";

let firstChar = student.charAt(0).toLowerCase()
console.log(firstChar);