
const Algo = require("../algo.js")

describe("Algo", ()=>{
    describe("revers", ()=>{
        it ("should reverse a given string", ()=>{
            const str ="sharon";
            const reversed ="norahs"
            const res = new Algo().reverse(str);
            expect(res).toEqual(reversed)
        })
    })

    describe("palindrome", ()=>{
        it("should check for palindrome", ()=>{
            const str = "amma"
            //const strreverse = "amma"
            const palindrome = new Algo().palindrome(str);
            expect(palindrome).toEqual(true)
        })
    })
})