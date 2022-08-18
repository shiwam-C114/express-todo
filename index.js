const express = require('express');
const app = express(); // server
app.use(express.json())

let todo = [
    {id:1, task:"first todo", status:false}
]

app.get("/", (req,res)=>{
    res.send(todo)
})

app.post('/', (req, res) => {
    console.log(req.body)
    todo.push(req.body)
    res.send('Got a POST request')
})

app.put('/:id', (req, res) => {
    console.log(req.body)
    let tempI = null
    let changeTodo = todo.find((e, ind)=> {
    if (e.id == req.params.id) {
        tempI = ind
        return e.id == req.params.id
    }   
    })
    console.log(changeTodo,"24")
    changeTodo = {...changeTodo, ...req.body}
    console.log(changeTodo,"26")
    todo[tempI] = changeTodo

    res.send(`put:${JSON.stringify(todo)}`)
})

app.delete('/:id', (req, res) => {
    todo = todo.filter(e=>e.id!=req.params.id)
    res.send('Got a DELETE request at /user')
})


app.listen(8080,()=>{
    console.log("app started on port 8080")
})