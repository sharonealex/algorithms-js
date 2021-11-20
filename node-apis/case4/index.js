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




const Logger = require("./logger")

const log = new Logger();

log.green("hey")
log.red("red")
log.white("ehy")

const MovieSearch = require("./movieSearch")

const movie = new MovieSearch();

movie.search("Spider-Man").then((res)=>{
   return console.log(res.data)
})