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
var writeWords = function (event) {
    var keyPressed = event.key;
    if (keyPressed != "Backspace") {
        outputEls.forEach((el) => {
            el.textContent += keyPressed;
        })
    } else {
        outputEls.forEach((el) => {
        var edittedText = el.textContent.slice(0, -1);
        el.textContent = edittedText;
        })
      
    }
}


//add event listener for clear function
var clearWords = function () {
    outputEls.forEach((el) => {
        el.textContent = '';
    })
    textAreaEl.value = '';
}


buttonEl.addEventListener('click', clearWords);
textAreaEl.addEventListener('keydown', writeWords);
