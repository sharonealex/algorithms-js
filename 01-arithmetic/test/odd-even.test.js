//chai library is used for assertions

var expect = chai.expect;

//test cases
describe("odd", function(){
    it ('should return odd numbers', function(){
        var num = 3;
       
        var res = oddOrEven(num);
        console.log('hey')
        expect(res).to.equals("odd");
    })
})

