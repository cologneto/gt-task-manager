const mongoose = require('mongoose')
const validator = require('validator')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})

// const User = mongoose.model('User', {
//     name: {
//         type: String,
//         required: true,
//         trim: true
//     },
//     email: {
//         type: String,
//         required:true,
//         trim: true,
//         lowercase: true,
//         validate(value) {
//             if(!validator.isEmail(value)) {
//                 throw new Error('Email is invalid!')
//             }
//         }
//     },
//     password: {
//         type: String,
//         required: true,
//         minlength: 7,
//         trim: true,
//         validate(value) {
//             if(value.includes('password')) {
//                 throw new Error('The password contains word "password"!')
//             }
//         }
//     },
//     age: {
//         type: Number,
//         default: 0,
//         validate(value) {
//             if(value < 0) {
//                 throw new Error('Age must be a positive number!')
//             }
//         }
//     }
// })
//
// const me = new User({
//     name: '    George   ',
//     email: 'MYEMAIL@IOA.COM',
//     password: "        123            "
// })
//
// me.save().then(() => {
//     console.log(me)
// }).catch((err) => {
//     console.log("Error", err)
// })
//
//
// //
// const Task = mongoose.model('Task', {
//     description: {
//         type: String,
//         required: true,
//         trim: true
//     },
//     completed: {
//         type: Boolean,
//         default: false,
//     }
// })
//
// const task = new Task({
//     description: 'Walk the dog and get the daughter from kinder garden ',
//     completed: false
// })
//
// task.save().then(() => {
//     console.log(task)
// }).catch((err) => {
//     console.log("Error", err)
// })
