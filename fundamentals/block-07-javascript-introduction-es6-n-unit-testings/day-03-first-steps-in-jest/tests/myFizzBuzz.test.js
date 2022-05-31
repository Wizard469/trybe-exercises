const myFizzBuzz = require('../src/myFizzBuzz.js');

describe('Test if myFizzBuzz returns the expected', () => {
  it('should return "fizzbuzz"', () => {
    expect(myFizzBuzz(15)).toMatch('fizzbuzz');
  });

  it('should return "fizz"', () => {
    expect(myFizzBuzz(9)).toMatch('fizz');
  });

  it('should return "buzz"', () => {
    expect(myFizzBuzz(10)).toMatch('buzz');
  });

  it('should return the number itself', () => {
    expect(myFizzBuzz(7)).toBe(7);
  });

  it('should return falsy', () => {
    expect(myFizzBuzz('701')).toBeFalsy();
  });
});
