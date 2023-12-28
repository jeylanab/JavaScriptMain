// console.log("This is JavaScript");

// variables
  
// let naMe = "Jeylan";
// let Age = 21;
// let Ethiopian = true;
// Age = Age+1;

// console.log(naMe);
// console.log(Age);
// docuMent.getElementById("p1").innerHTML ="My name is " + name +".";
// document.getElementById("p2").innerHTML ="I am " + Age +' years old.';
// document.getElementById("p3").innerHTML ="You are Ethiopian: " + Ethiopian;

// let age = window.prompt("How Old are You?");
//  age = Number(age);
// age += 2;

// console.log("happy birth day you are " +age +" years old");

let a;
let b;
let c;

// a = prompt("Enter side A");
// a = Number(a);

// b = prompt("Enter side B");
// b = Number(b);

// c = Math.sqrt ( Math.pow(a,2) + Math.pow(b,2));
// console.log( "the Area of trianle is = " + c);

document.getElementById("submitButton").onclick = function() {
    a = document.getElementById("inputA").value;
    a = Number(a);

    b = document.getElementById("inputB").value;
    b = Number(b);

    c = Math.sqrt (Math.pow(a,2) + Math.pow(b,2));
    c = Number(c);
    document.getElementById("side-C"). innerHTML = "The Area Is : " + c;

}
