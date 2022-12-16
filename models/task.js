const mongoose = require('mongoose');


const taskSchema=new mongoose.Schema({
    task:{
        type:String,
        required:true,
    },
    category:{
        type:String,
        required:true,
    },
    dueDate:{
        type:Date,
        required:true,
    },
    isDone:{
        type: Boolean,
    }
});

const Task = mongoose.model('tasks',taskSchema);
module.exports = Task;