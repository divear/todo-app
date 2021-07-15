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
        const respo = req.body
        
        const newTodo = await pool.query("INSERT INTO todo (body, username) VALUES($1, $2) RETURNING *", [respo[0].body, respo[1].username]);
        res.json(newTodo.rows[0])
    } catch (error) {
        console.log(error);
    }
})

//get all

app.get("/todos", async (req, res) => {
    try {
      const allTodos = await pool.query("SELECT * FROM todo");
      res.json(allTodos.rows);
    } catch (err) {
      console.error(err.message);
    }
  });
  

//get one

app.get("/todos/:id", async(req, res)=>{
    try {
        const {id} = req.params
        const todo = await pool.query("SELECT * FROM todo WHERE id = $1", [id])
        
        res.json(todo.rows[0])
    } catch (error) {
        console.log(error);
    }
})

//update 

app.put("/todos/:id", async(req, res)=>{
    try {
        const {id} = req.params
        const {body} = req.body
        const updateTodo = await pool.query("UPDATE todo SET body = $1 WHERE id = $2", [body, id]);
        res.json("todo was updated")
    } catch (error) {
        console.log(error);
    }
})

//delete

app.delete("/todos/:id", async(req, res)=>{
    try {
        const {id} = req.params
        const deleteTodo = await pool.query("DELETE FROM todo WHERE id = $1", [id]);
        res.json("Todo was deleted!")
    } catch (error) {
        console.log(error);
    }
})

const port = process.env.port || 4001

app.listen(port, ()=>{
    console.log(`listening on port ${port}`);
})

