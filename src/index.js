const express = require('express')
require('./db/mongoose')
const User = require('./models/user')
const Task = require('./models/task')

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())

// create user
app.post('/users', (req, res) => {
   const user = new User(req.body)

    user.save().then(() => {
        res.status(201).send(user);
    }).catch((e) => {
        res.status(400).send(e);
    })
})

// create task
app.post('/tasks', (req, res) => {
    const task = new Task(req.body)

    task.save().then(() => {
        res.status(201).send(task);
    }).catch((e) => {
        res.status(400).send(e);
    })
})

// get all users
app.get('/users', (req, res) => {
    User.find({}).then(users =>{
        res.status(201).send(users)
    }).catch(e => {
        res.status(500).send()
    })
})

// get user by id
app.get('/users/:id', (req, res) => {
    const _id = req.params.id

    User.findById(_id).then((user) =>{

        if (!user) {
            return res.status(404).send()
        }
        res.send(user)
    }).catch(e => {
        res.status(500).send()
    })
})

// get all tasks
app.get('/tasks', (req, res) => {
    Task.find({}).then(tasks =>{
        res.status(201).send(tasks)
    }).catch(e => {
        res.status(500).send()
    })
})

// get single task
app.get('/tasks/:id', (req, res) => {
    const _id = req.params.id

    Task.findById(_id).then((task) =>{

        if (!task) {
            return res.status(404).send()
        }
        res.send(task)
    }).catch(e => {
        res.status(500).send()
    })
})

app.listen(port, () => {
    console.log('Server running on port: ' + port)
})