// THIS ARE FUNTION
// function is refer as a small peice of insruction that can be invoked many times

function MyFunction(){
    console.log("Happy birth day to you , happy birthday happy birth day to you");
}
 
MyFunction();
MyFunction();
MyFunction();
MyFunction();
MyFunction();

// return funtion : is used to return what is called out side of the function

let area ;
let height;
let width;
height = window.prompt("enter the width");
width = window.prompt("enter the width");

   GetArea(area , height);
function GetArea (area , height){
    area = height * width;
    console.log("area = " ,area);
}