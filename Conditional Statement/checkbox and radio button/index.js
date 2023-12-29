// if else statement with radio and checkbox input type...


// document.getElementById("myButton").onclick = function () {
//  const MyCheckBox = document.getElementById("MyCheckBox");
 
// if (document.getElementById("MyCheckBox").checked) {
//     console.log( "the box is checked ")
// }
// else {
//     console.log ("the bos has not checked");
// }

// }



// SWITCH STATEMENT 
// is used to switch between conditions 

// let grade;
// grade = prompt("enter grade");

// switch(true) {
//     case grade >= 90:
//         console.log("EXCELLENT!");
//         break;
//     case grade >=80:
//         console.log ("VERY GOOD");
//         break;
//     case grade >=70:
//         console.log ("GOOD");
//         break;
//     case grade >=60:
//         console.log ("barely GOOD");
//          break;
//     default :
//         console.log("Invalid");
// }
 
// logical operator 
//   they use to combine the two or more condition in if atatement 
//   examples  ... || (or )
//                 && (and)
//                 ! (not )



// AND LOGIC
let age = 15;

if (age >= 18 && age <= 55) {
    console.log("You are Eligable for Registation!");
}
else if ( age <= 17 ) {
    console.log("You are Under age!");
}

else {
    console.log("You are Old for This seat!")
}

// OR LOGIC
let value = 500;

if (value <=200 || value >=1000) {
    console.log("The value is out of range");

}

else {
    console.log("The Value is in the range");
}

// NOT operator
let temp = 50;
if (!(temp >= 0)){
    console.log("It is Cold Outside");
}
else {
    console.log ("It is warm OutSide");
}

// BOOLEAN operator 

let sunny = true;

if (sunny) {
    console.log ("It is Sunnny Outside");

}
else {
    console.log ("It is Cold Outside");
}

let number = true;

if (number) {
    console.log("The number is positive ");
}
else {
  console.log("the number is negative");
}

// WHILE AND DO WHILE LOOP

let n = 6;
do {
    console.log(n++);
}
while (n < 20);

// LOOP : is used to iterate the outcome on certain condition

let MyNum;
console.log("this is loop");

for (MyNum = 10; MyNum > 0; MyNum--){

// BREAK: break the loop after that value (it will ommit the num)
     if( MyNum == 5){
        break;
     }

// Continue : skip one value 
// if (MyNum == 5){
//     continue;
// }
    console.log(MyNum);
}

// Nested Loop 
console.log("Nested Loop!")

for ( let i = 1; i <= 3 ; i++){
    for ( let j = 1; j <= 3 ; j++){
        console.log(j);
    
    }
    

}


