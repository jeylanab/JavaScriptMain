// map method

const inputs = [2, 4, 5, 6, 7];
const doubled = [];

const inputIncrement = () => {
    inputs.map((num) => {
       const myd = Math.pow(num, 2);
        doubled.push(myd)    
    })
    
}

inputIncrement();
console.log(doubled);