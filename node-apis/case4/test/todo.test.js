const Todo = require("../todo")

describe("initialise", ()=>{
    it ("should set property",()=>{
        //arrange
        const text = "drink coffee";
      

        //act
        const obj = new Todo(text) 

        //assert
        expect(obj.text).toEqual(text)
    })

    it("should throw error",()=>{
       
        expect(()=>{new Todo()}).toThrowError("invalid");
    })
})