import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("hello my people")
})
// CREATE ABOUT PAGE
app.get("/api/about", (req, res) => {
    res.send("this is the avout page")
})
// CREATE PROFILE PAGE 
app.get("/api/profile", (req, res) => {
    res.send('profile page')
})
// CREATE CONTACT PAGE
app.listen(port, () => {
    console.log("the port is running")
}
)