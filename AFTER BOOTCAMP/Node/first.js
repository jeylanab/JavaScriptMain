
// is arrays of the command line argument
console.log(process.argv);

// example

const firstInput = process.argv[2]
const secondInput = process.argv[3]

if (firstInput == secondInput) {
    console.log("true")
}
else {
    console.log("false")
}

// command to write the node json file and the dev dep

// npm init -y

