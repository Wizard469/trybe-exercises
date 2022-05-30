const sum = require('../src/sum.js');

describe('Test if the function sum returns the sum of the parameters a and b', () => {
  it('should return the sum of the parameters a and b', () => {
    expect(sum(4, 5)).toBe(9);
  });

  it('should return the sum of the parameters a and b', () => {
    expect(sum(0, 0)).toBe(0);
  });

  it('should throw an error if the parameters are strings', () => {
    expect(() => sum(4, "5")).toThrow();
  });

  it('should throw a message error "parameters must be numbers" if the parameters are strings', () => {
    expect(() => sum(4, "5")).toThrowError("parameters must be numbers");
  });
});