const {getAllTodos, getTodoById, createTodo} = require('./todos.controllers')

//Returns a list of all data from the database
const getTodos = (req, res) => {
    const data = getAllTodos()
    res.status(200).json(data)
}

const getOneTodo = (req, res) => {
    const id = req.params.id
    const data = getTodoById(id)
    if(data){
        res.status(200).json(data)
    }else{
        res.status(404).json({message: 'User does not exist or invalid id'})
    }
}

const createNewTodo = (req, res) => {
    const { title } = req.body
    if(title){
        const data = createTodo(title)
        res.status(201).json(data)
    }else{
        res.status(400).json({ message: 'Missing data'})
    }
}

module.exports = {
    getTodos,
    getOneTodo,
    createNewTodo
}