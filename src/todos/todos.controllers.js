const uuid = require('uuid')

//Database
const todoDB = [
    {
        id: 1,
        title: "This is a test",
        is_completed: false
    },
    {
        id: 2,
        title: "This is another test",
        is_completed: true
    },
    {
        id: 3,
        title: "This is a third test",
        is_completed: true
    }
]


const getAllTodos = () => {
    return todoDB
}

const getTodoById = (id) => {
    //Returns the first occurrence found in the database
    const data = todoDB.find(task => task.id === id)
    return data
}

const createTodo = (title) =>{
    const newTodo = {id: uuid.v4(), title: title, is_completed: false}
    todoDB.push(newTodo)
    return newTodo
}

module.exports = {
    getAllTodos, 
    getTodoById,
    createTodo
}
