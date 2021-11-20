const TodoList = require("../todoList");
const Todo = require("../todo")

describe("initialise", ()=>{
    it("should initilise an array when called with new()", ()=>{
        const list = [];

        const mylist = new TodoList();
        expect(mylist.list).toEqual(list)
    })
})

describe("addNote", ()=>{
    it("should add  note", ()=>{
        const note = "drink water"
        const list = new TodoList();
        list.addNote(note);
        expect(list.list.length).toEqual(1)
    })

    it("should throw erro when invalid", ()=>{
        const list = new TodoList();

        const cb = ()=>{list.addNote()}
        expect(cb).toThrowError("invalid")
    })
})

describe("get next note", ()=>{
   it("should return next note", ()=>{
    const list = new TodoList();
    list.addNote("get coffee");
    list.addNote("sleep well");
   
   let note = list.getNextNote();
    expect(note instanceof Todo).toEqual(true)
    expect(note.text).toEqual("get coffee")
   })

   it("should return undefined",()=>{
       const list = new TodoList();
       let note = list.getNextNote();
       expect(typeof note).toEqual("undefined")
   })
})

describe("complete nextTodo",()=>{
    const list = new TodoList();
    list.addNote("eat");
    list.addNote("sleep");
    const newlist = list.completeNote();
    
    expect(newlist instanceof Todo).toEqual(true)
    expect(list.list.length).toEqual(1)
    expect(list.getNextNote().text).toEqual("sleep")

})