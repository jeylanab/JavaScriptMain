// let x; 
// x = Math.floor( Math.random() * 4  + 1);
// console.log(x);
let a;
let b;
let c;

// let a = Math.floor( Math.random() * 6 + 1);
// let b = Math.floor( Math.random() * 6 + 1);
// let c = Math.floor( Math.random() * 6 + 1);
// console.log(a);
// console.log(b);
// console.log(c);

document.getElementById("labelButton").onclick = function() {
    
        a = Math.floor( Math.random() * 6 + 1);
        b = Math.floor( Math.random() * 6 + 1);
        c = Math.floor( Math.random() * 6 + 1);

        document.getElementById("label1").innerHTML = a;
        document.getElementById("label2").innerHTML = b;
        document.getElementById("label3").innerHTML = c;
}
