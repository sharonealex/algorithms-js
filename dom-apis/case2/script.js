// get all the html elements for data fetch and display output.
var fontOptionEl = document.querySelector("#select-font").value;
var textAreaEl = document.querySelector("textarea");
var buttonEl = document.querySelector("button");
var h2El = document.querySelector("h2");
var h3El = document.querySelector("h3");
var h4El = document.querySelector("h4");
var h5El = document.querySelector("h5");
var pEl = document.querySelector("p");

var outputEls = [h2El, h3El, h4El, h5El, pEl];

//add event listener for keydown
var writeWords = function(event){
  var keyPressed = event.key;
  outputEls.forEach((el)=>{
     h2El.textContent += keyPressed;
  }

  )
 

}


//add event listener for clear function
var clearWords = function(){

}

buttonEl.addEventListener('click', clearWords)
textAreaEl.addEventListener('keydown', writeWords)
