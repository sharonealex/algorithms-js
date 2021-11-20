// const Todo = function(text){
//     if(text == "")throw new Error("invalid")
//     this.text = text;
// }


// module.exports = Todo;

function Todo(text){
    if (typeof text !== 'string' || !text.trim().length) {
      throw new Error("invalid");
    }
  
    this.text = text;
  };
  
  module.exports = Todo;
  