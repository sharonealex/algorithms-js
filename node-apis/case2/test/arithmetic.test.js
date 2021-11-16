const Arithmetic = require("../arithmetic")


describe("Arithmetic", ()=>{
    describe("Initialization", ()=>{
       it ("should return an object containing a number property when called with the new keyword",()=>{
        const obj = new Arithmetic();
        console.log(typeof(obj))
        expect("number" in obj).toEqual(true)
       })

       it("should set number when created", ()=>{
           const num = 8;
            const obj = new Arithmetic(num);
            expect(obj.number).toEqual(num);
       })
       it("should default to 0", ()=>{
           const obj = new Arithmetic();
           expect(obj.number).toEqual(0)
       })
       
     })
})

describe("plus", ()=>{
    it("should return an arithmetic object", ()=>{
        const obj = new Arithmetic(3).plus(3);
        expect(obj instanceof Arithmetic).toEqual(true)
    })
    it("should return arithmetic object with updated number value", ()=>{
        const num = 8;
        const added = 7;
        const sum = num + added;
        const {number} = new Arithmetic(num).plus(added);
        expect(number).toEqual(sum)
    })
})

describe("minus",()=>{
    it("should return an arithmetic object", ()=>{
        const obj = new Arithmetic(7).minus(4);
        expect(obj instanceof Arithmetic).toEqual(true)
    })

    it("should return arithmetic object returned with subtraction", ()=>{
        const num = 9;
        const subtracted = 7;
        const final = num - subtracted;
        const {number} = new Arithmetic(num).minus(subtracted);
        expect(number).toEqual(final)
    })
})

describe("show value", ()=>{
    it("shoule print the value", ()=>{
        const num = 8;
        const obj = new Arithmetic(num);
        const res = obj.value();
        expect(res).toEqual(num)
    })
})