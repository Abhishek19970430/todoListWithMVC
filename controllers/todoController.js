const Todo = require('../models/todo')
const { getDB } = require("../database/database")

module.exports.getGetTodos =async (req,res, next) => {
  try{
    let data = await Todo.getTodos();
    console.log('Todos requested are:', data);
    res.send(data);
  }catch(err){
    next(err);
  }
}

module.exports.postAddTodos = (req,res ) => {
// This is responsible to add a new task to database
  const {name} = req.body;
  Todo.addTodo(name)
     .then((msg)=>{
        console.log(msg);
        res.redirect('/gettodos');
     })
     .catch((err)=>{
        res.send(`Could not add todo +${err.message}`);
     })
  
}

module.exports.postDeleteTodos =(req, res ) => {
  
    const { id } = req.body;
    Todo.deleteTodo(id)
     .then((msg)=>{
        console.log(msg);
        res.redirect('/gettodos');
     })
     .catch((err)=>{
        res.send(`Could not delete todo ${err.message}`);
     })
       
}

module.exports.getIncreasePriority =  (req,res ) => {

}

module.exports.getDecreasePriority =  (req,res ) => {

}



































