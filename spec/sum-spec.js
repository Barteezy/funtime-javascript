var code = require('../sum');


describe('sum', function(){
  it('sums an array of numbers together', function(){
    expect(code.sum([5,5,5,5])).toEqual(20);
    expect(code.sum([20,103,4,6])).toEqual(133);
  });
});
