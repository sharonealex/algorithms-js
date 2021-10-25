var cardEl = document.querySelector(".card");
var todoFormEl = document.querySelector("#todo-form");
var todoTextEl = document.querySelector("#todo-text");
var countEl = document.querySelector("#count");
var todoListEl = document.querySelector("#todo-list");

var todos = [];

function storedTodos (){
  localStorage.setItem("todos", JSON.stringify(todos));
}

function renderTodos(){
  //clear current ones. else it will append.
  //update count.
  todoListEl.innerHTML = "";
  countEl.textContent = todos.length;

  //render a new li for each todo

  for(var i =0; i < todos.length; i ++){
  var li = document.createElement("li");
  li.textContent = todos[i];
  li.setAttribute("data-index", i);

  var button = document.createElement("button");
  button.textContent = "Complete ✔️";

  li.appendChild(button);
  todoListEl.appendChild(li);
}
}

function init(){
var storedTodos = JSON.parse(localStorage.getItem("todos"));
if (storedTodos != null) todos = storedTodos;
renderTodos();
}



todoFormEl.addEventListener("submit", function(event){
  event.preventDefault();

  var todoText = todoTextEl.value.trim();
  if (todoText == ""){
    return;
  }
  todos.push(todoText);
  todoTextEl.value = "";
  storedTodos();
  renderTodos();
})


todoListEl.addEventListener("click", function(event){
  event.preventDefault();
  var element = event.target;

  if(element.matches("button")===true){
    var index = element.parentElement.getAttribute("data-index");
    todos.splice(index, 1);
  }
  storedTodos();
  renderTodos();
})

init();