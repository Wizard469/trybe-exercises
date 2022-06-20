const { encode, decode } = require('../src/encodeDecode.js');

describe('Test the fuction encode', () => {
  it('should be a function', () => {
    expect(typeof encode).toBe('function');
  });

  it('should convert a, e, i, o, u, to 1, 2, 3, 4, 5', () => {
    expect(encode('aeiou')).toBe('12345');
  });

  it('should convert a to 1', () => {
    expect(encode('car')).toBe('c1r');
  });

  it('should have the same length for both strings', () => {
    expect(decode('12345')).toHaveLength(5);
  });
});

describe('Test the fuction decode', () => {
  it('should be a function', () => {
    expect(typeof decode).toBe('function');
  });

  it('should convert 1, 2, 3, 4, 5 to a, e, i, o, u,', () => {
    expect(decode('12345')).toBe('aeiou');
  });

  it('should convert 1 to a', () => {
    expect(decode('c1r')).toBe('car');
  });

  it('should have the same length for both strings', () => {
    expect(decode('aeiou')).toHaveLength(5);
  });
});


// (a) Teste se encode e decode são funções;//
// (b) Para a função encode teste se as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4 e 5, respectivamente;//
// (c) Para a função decode teste se os números 1, 2, 3, 4 e 5 são convertidos nas vogais a, e, i, o, u, respectivamente;//
// (d) Teste se as demais letras/números não são convertidos para cada caso;
// (e) Teste se a string que é retornada pelas funções têm o mesmo número de caracteres que a string passada como parâmetro.//