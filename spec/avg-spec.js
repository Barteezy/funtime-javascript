var code = require('../avg');


describe('avg', function(){
  it('averages many numbers together', function(){
    expect(code.avg([5,5])).toEqual(5);
    expect(code.avg([1,2,3,4,5,6,7,8,9,10])).toEqual(5.5);
  });
});
