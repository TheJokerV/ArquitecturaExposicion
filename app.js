import express from "express";

const app = express();
const port = 5500;

app.get("/", (req,res) => {
    res.send("Hello world")
});

app.listen(port, ()=>{
    console.log(`server is listening at http://localhost:${port}`)
});

