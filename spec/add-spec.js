var code = require('../add');


describe('add', function(){
  it('adds two numbers together', function(){
    expect(code.add(5,5)).toEqual(10);
    expect(code.add(20,103)).toEqual(123);
  });
});
