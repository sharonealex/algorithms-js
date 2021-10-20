var expect = chai.expect;

describe ('logs nums 1 to n', function(){
    it ('should log numbers 1 to n', function(){
        var num = 10;
        log_nums(num);
        expect(console.log().calledWith()).to.eql([1,2,3,4,5,6,7,8,9,10])
    })
})