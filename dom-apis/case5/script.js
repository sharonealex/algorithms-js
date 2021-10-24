var inputEl = document.querySelector("input");
var countEl = document.querySelector("span");
var formEl = document.querySelector("form");
var cardEl = document.querySelector(".card")
var todos = [];
var count = 0;


function saveTodos(item){
  var todos = JSON.parse(localStorage.getItem("todos"));
  todos.push(item);
  localStorage.setItem("todos", JSON.stringify(todos))
}

formEl.addEventListener("submit", function(event){
  event.preventDefault();
 count++;
 saveTodos(inputEl.value);
 inputEl.value = '';
 displayTodos();
 displayCount();
})

function displayCount(){
 countEl.textContent = count;
}

function displayTodos(){
  var todos = JSON.parse(localStorage.getItem("todos"));
  for(var i = 0; i< todos.length; i ++){
    var pEl = document.createElement("pEl");
    pEl.textContent = todos[i];
    cardEl.appendChild(pEl);
    cardEl.setAttribute("class", ".card")
  }



}

displayCount();

displayTodos();
