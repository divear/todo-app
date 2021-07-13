const express = require("express");
const app = express()
const cors = require("cors")
const pool = require("./db")

//middleware
app.use(cors());
app.use(express.json())

//ROUTES//

//create 

app.post("/todos", async(req, res)=>{
    try {
        console.log(req.body);
    } catch (error) {
        console.log(error);
    }
})

//get all

//get one

//update 

//delete

const port = process.env.port || 4000
app.listen(port, ()=>{
    console.log(`listening on port ${port}`);
})

