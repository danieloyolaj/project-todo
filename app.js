//1. create express const and require express
const express = require('express')



//2. create app const and run the express()
const app = express()

//habilitar el recibir datos en formato JSON
app.use(express.json())

//4. create petitions
app.get('/', (req, res) => {
    res.status(200).json({message: 'Server OK'})
})

const database = [
    {
        id: 1,
        title: "This is a test",
        is_completed: false
    },
    {
        id: 2,
        title: "This is another test",
        is_completed: true
    }
]

app.get('/todos', (req, res) => {
    res.status(200).json(database)
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