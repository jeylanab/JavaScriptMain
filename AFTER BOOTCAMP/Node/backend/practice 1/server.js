import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("hello my people")
})

app.listen(port, () => {
    console.log("the port is running")
}
)