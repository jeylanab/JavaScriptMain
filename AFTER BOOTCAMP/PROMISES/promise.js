// Promise == is a function that is used to manage the assynchronous code
//  "i promise to return a value"
//   new promise (( resolve , reject) => { async code})

function task1() {
   

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const task1 = false;

            if (task1) {
                            resolve("task one is completed");

            }
            else {
                           reject('task ONE REFUSED')
        }
                
            }, 3000);
    })
    
}

function task2() {
   

    return new Promise((resolve, reject) => {
        setTimeout(() => {

            const task2 = true;

            if (task2) {
                            resolve("task two is completed")

            }
            else {
                reject("task 2 REJECTED")

            }
            
        }, 2000);     
    })
}

function task3() {
    
    return new Promise((resolve, reject) => {
        setTimeout(() => {

            const task3 = false;
            if (task3) {
                            resolve("task three is completed") 

            }
            else {
                reject("REJECTED")
            }
            
            
        }, 1000);    
    })
    
}

task1().then(value => { console.log(value); return task2() })
    .then(value => { console.log(value); return task3() })
    .then(value => { console.log(value); console.log("you have completed all your task") })
    .catch( error => console.error(error))

