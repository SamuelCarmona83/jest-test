const { sum , multiply } = require('./operations.js');

describe('Test if operations work correctly', ()=>{

  test('if sum function adds 1 + 2 to equal 3', () => {
    expect( sum(1, 2) ).toBe(3);
  });
  
  it('1 multiplied by 0 equals 0', () => {
    expect( multiply(1,0) ).toBe(0) //✅
    expect( multiply(1,0) ).not.toBe(undefined) //✅
  })

  it('1 multiplied by 7 equals 7', () => {
    expect( multiply(1,7) ).toBe(7)
  })

})
