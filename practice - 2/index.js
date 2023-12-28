

let count = 0;

document.getElementById("decBtn").onclick = function() {   
    count -= 1;
    document.getElementById("count").innerHTML = count;
}
document.getElementById("reBtn").onclick = function() {   
    count = 0;
    document.getElementById("count").innerHTML = count;
}
document.getElementById("incBtn").onclick = function() {   
    count += 1;
    document.getElementById("count").innerHTML = count;
}