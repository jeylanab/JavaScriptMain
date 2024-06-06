const express = require('express');

const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("hello this is  my first server code")
    
})
app.get('/api/user', (req, res) => {
    res.send(
        {id: 1, username: 'jeylan' , age: 23},
        {id: 2, username: 'jack' , age: 24},
        { id: 3, username: 'james', age: 25 },
        {id: 4, username: "jidion" , age :55}
    )
})
app.get('/api/about', (req, res) => {

    res.send(
       "<div>HELLO THIS JEYLAN IF YOU HAVE SOME QUESTION DON'T HESITATE TO CONTACT ME AGAIN I AM ALWAYS AVAILABLE</div>" 
    )
    
})

app.listen(port, () => {
    console.log(`the the server is running on ${port}`)
})