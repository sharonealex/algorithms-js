const Todo = require("./todo");

const TodoList = function(){
this.list = []
}

TodoList.prototype.addNote = function(text){
  const  note = new Todo(text);
  this.list.push(note)
}

TodoList.prototype.getNextNote = function(){
  
    return this.list[0]
}

TodoList.prototype.completeNote = function(){
   
    return this.list.shift();
}

module.exports= TodoList
