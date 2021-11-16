const Arithmetic = require("./arithmetic");


const value = new Arithmetic(4)
.plus(8)
.minus(7)
.plus(7)
.value();

console.log(value)