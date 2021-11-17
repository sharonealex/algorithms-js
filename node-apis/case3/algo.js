function Algo(){

}

Algo.prototype.reverse = function(str){
   return str.split("").reduce((acc, curr)=>{
       return curr + acc
   }, "")
}



Algo.prototype.palindrome = function(str){
    if(str === str.split("").reverse().join("")) return true
    return false
}


Algo.prototype.capitalize = function(str){
 var words = str.split(" ")
 

 for(var i = 0; i < words.length; i++){
    const caps = words[i][0].toUpperCase()
    console.log(caps)
 }

}

const al = new Algo()
al.capitalize("sharon");

//module.exports = Algo