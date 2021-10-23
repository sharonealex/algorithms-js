var container = document.querySelector(".container");

container.addEventListener('click', function(event){
  event.stopPropagation();
  console.log(event.target);
  var element = event.target;
  if(element.matches('.box'))
{
  var state = element.getAttribute("data-state");
  if (state === "hidden"){
    element.textContent = element.getAttribute("data-number");
    element.setAttribute("data-state", "visible")
  } else {
    element.textContent = " ";
    element.setAttribute("data-state", "hidden")
  }

}  
})