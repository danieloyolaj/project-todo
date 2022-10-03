//1. create express const and require express
const express = require('express')



//2. create app const and run the express()
const app = express()

//Lets you receive data in JSON format
app.use(express.json())

//routes -> paths and HTTP verbs
//controllers -> logic and actions for the database
//services -> all related to req and res


//4. create petitions
app.get('/', (req, res) => {
    res.status(200).json({message: 'Server OK'})
})



app.get('/todos', (req, res) => {
    res.status(200).json(database)
})

//This is to pass parameters :id
//The semicolon is to indicate that the parameter is variable
app.get('/todos/:id', (req, res) => {
    const id = Number(req.params.id)
    const data = database.filter(todo => todo.id === id) //returns an array where the condition is true
    
    //checking if the data exists in the database
    if(data.length !== 0) {
        res.status(200).json({my_id: id, data: data[0]})
    }else{
        res.status(404).json({message: 'Id does not exist'})
    }
})

app.post('/todos', (req, res) => {

    const {id, title} = req.body

    //valores falsy
    //null, undefined, '', 0, falso

    //valores truty
    // 'skdjfbskdjf', 1, {}, [], true

    //If any of data is undefined, it will throw an error
    if(!id || !title){
        res.status(400).json({message: 'Missing id or title'})
    }else{
        database.push({
            id,
            title,
            is_completed: false
        })
        res.status(200).json(database)
    }

})



//3. create the listening port
app.listen(8000, () => {
    console.log('Server started at port 8000');
})