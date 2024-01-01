// template literals are used to allow embedded string and variables

let userName = "joe";
let age = 23;
let weight = 70;

// console.log(`Hello My name is ${userName} I am ${age} years old My weight is ${weight}`);

        let text = 
             `Hello My name is ${userName}
             I am ${age} years old 
             My weight is ${weight}`;

console.log(text);

document.getElementById("label-1").innerHTML = text;