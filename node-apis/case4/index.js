const todo = require("./todo");
const todolist = require("./todoList")

const mylist = new todolist();
mylist.addNote("eat cake");
mylist.addNote("drink coffee")
mylist.addNote("go cycle")

console.log("get", mylist.getNextNote())
console.log("complete", mylist.completeNote())
console.log("get", mylist.getNextNote())
console.log("complete", mylist.completeNote())
console.log("get", mylist.getNextNote())


const a = []
console.log(a.shift())
console.log(a)