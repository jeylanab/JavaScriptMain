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


// format currency 

let num = 120004;

// to displa the number with commas

// num = num.toLocaleString("en-US");
// console.log(num);

// num = num.toLocaleString("hi-IN");
// console.log(num);

num = num.toLocaleString("en-US" , {style: "currency", currency: "USD" });
console.log(num); //DISPLAY US DOLLAR SIGN