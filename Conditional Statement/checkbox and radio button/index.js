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

let grade;
grade = prompt("enter grade");

switch(true) {
    case grade >= 90:
        console.log("EXCELLENT!");
        break;
    case grade >=80:
        console.log ("VERY GOOD");
        break;
    case grade >=70:
        console.log ("GOOD");
        break;
    case grade >=60:
        console.log ("barely GOOD");
         break;
    default :
        console.log("Invalid");
}
