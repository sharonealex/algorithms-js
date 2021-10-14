//chai library is used for assertions

var expect = chai.expect;

//test cases
describe("add", function(){
    it ('should add numbers', function(){
        var num1 = 3;
        var num2 = 4;
        var res = add(num1, num2);
        console.log('hey')
        expect(res).to.equals(7);
    })
})