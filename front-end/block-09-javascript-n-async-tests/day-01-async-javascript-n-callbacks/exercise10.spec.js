// 10 - Para este exercício, tente adivinhar a saída dos console.log dos testes abaixo sem executá-los, e veja se compreendeu bem o funcionamento do beforeEach e do afterEach.

beforeEach(() => console.log('1 - beforeEach')); //Before each test
afterEach(() => console.log('1 - afterEach')); //After each test

test('', () => console.log('1 - test')); //The test itself

describe('Scoped / Nested block', () => {
  beforeEach(() => console.log('2 - beforeEach')); //Before each test inside describe block
  afterEach(() => console.log('2 - afterEach')); //After each test inside describe block

  test('', () => console.log('2 - test')); //The test itself inside describe block
});
