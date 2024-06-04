const express = require('express');

const app = express();

app.get("/", (req, res) => {
    res.send("hello this is  my first server code")
    
})

app.listen(8000, () => {
    console.log('you server is running on the http://localhost:8000')
})