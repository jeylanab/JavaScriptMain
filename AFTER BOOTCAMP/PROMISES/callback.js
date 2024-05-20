// CALLBACK HELL
// is a situation in which many callback functions are nested inside one another
// is an older way to handle an asynchronous code now replaced by promise
function task1(callback) {
    setTimeout(() => {
        console.log("task one is completed")
        callback()

        
    }, 3000);
    
}

function task2(callback) {
    setTimeout(() => {
        console.log("task two is completed")
        callback()
        
    }, 2000);
}

function task3(callback) {
    setTimeout(() => {
        console.log("task three is completed")
        callback()
        
    }, 1000);
    
}

function task4(callback) {
    setTimeout(() => {
        console.log("task four is completed")
        callback
        
    }, 1500);
    
}

task1(() => {
    task2(() => {
        task3(() => {
            task4(() => { console.log("all tasks are completed") })
        })
    })
})