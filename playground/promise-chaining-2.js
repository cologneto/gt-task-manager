require('../src/db/mongoose')
const Task = require('../src/models/task')

// 5dbace3f64c16e3cbc513cf3

Task.findByIdAndDelete('5dba9a2d4d5e3e3ac096b3e2').then((task) => {
    console.log(task)

    return Task.countDocuments({ completed: false })
}).then((result) => {
    console.log(result);
}).catch((e) =>  {
    console.log(e)
})

const findTaskAndCount = async (id, )