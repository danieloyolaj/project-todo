//Route /todos[POST, GET]
//Route /todos:id[GET]

/**Other ways to declare routes */
// const express = require('express')
// const router = express.Router()

// const {Router} = require('express')
// const router = Router()

//Declaring routes
const router = require('express').Router()

//Declaring services
const todoServices = require('./todos.services')

router.get('/todos', todoServices.getTodos)

router.post('/todos', todoServices.createNewTodo)

router.get('/todos:id', todoServices.getOneTodo)

module.exports = router 