function Child(name, age){
    if(typeof name !=="string" || !name.trim.length)throw new Error("invalid")
    if(typeof age !=="number" || age<0) throw new Error("invalid")
    this.name = name;
    this.age = age;
}

module.exports = Child;