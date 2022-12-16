
const db = require('../config/mongoose');
const Task = require('../models/task');
const Contact = require('../models/task');

module.exports.home = function(req,res){
    console.log('In the home controller!!');
   
    Task.find({},function(err,tasks){
        // console.log("Total Records: ", tasks.count());
        let count = tasks.length;
        let incompleteCount = tasks.filter(task=>task.isDone == false).length;
        console.log("Count: ",count)
        return res.render("index",{
            'title' : 'To-do-list',
            'task_list' : tasks,
            'totalCount' : count,
            'incompleteCount' : incompleteCount,
            'completeCount' : count - incompleteCount,
        });
    })
    // return res.render('index');
}

module.exports.addTask = function(req,res){
    // console.log("Task: ",req.body );
    
    Task.create({
        task : req.body.task,
        category : req.body.category,
        dueDate : req.body.date,
        isDone : false, 
    },function(err,newTask){
        if(err){
            console.log("Error in inserting task.");
            return;
        }
        console.log(newTask);
        return;
    })
    return res.redirect('/');
}
