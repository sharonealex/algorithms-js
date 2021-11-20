const Child = require("./child");

function DayCare (){
    this.children = [];
    this.capacity = 3;
    this.ageLimit = 6
}

DayCare.prototype.addChild = function(name, age){

const child = new Child(name, age)
if(this.children.length < this.capacity) this.children.push(child)
return
}

DayCare.prototype.removeChild = function(name){
const index = this.children.findIndex((item)=>{
    return item.name == name;
})
if(index == -1) return
return this.children.splice(index, 1)[0]
}