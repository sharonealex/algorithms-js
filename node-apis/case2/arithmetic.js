function Arithmetic(number = 0){
    this.number = number;
}

Arithmetic.prototype.plus = function(num = 0){
    this.number += num;
    return this
}

Arithmetic.prototype.minus = function(num = 0){
    this.number -= num;
    return this
}

Arithmetic.prototype.value = function(){
    return this.number
}

module.exports = Arithmetic;