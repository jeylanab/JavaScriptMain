//  async and await
//   async - makes our function return a promise
// await - makes the function wait for the promise
//  helps to allow developer write an asynchronous code in a synchronous manner
    
function task1() {
   

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const task1 = true;

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

async function doList() {
   try {const task1result = await task1();
    console.log(task1result);

    const task2result = await task2()
    console.log(task2result);

    const task3result = await task3();
    console.log(task3result);
    console.log("all tasks are completed")
    console.log("all tasks are completed")
    }
   catch (error ) {
       console.error(error);
    }
}
doList();