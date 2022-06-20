// 🚀 6 - A função hydrate recebe uma string no formato "numero bebida", e retorna a sugestão de quantos copos de água você deve beber para se hidratar. Para cada bebida, deve-se tomar um copo de água para não ter ressaca. Exemplo:

// string recebida
// '1 cerveja'
// retorno da função
// '1 copo de água'

// string recebida
// '1 cerveja, 2 shots e 1 catuaba'
// retorno da função
// '4 copos de água'

// string recebida
// '2 caipirinhas'
// retorno da função
// '2 copos de água'

function hydrate(string) {
  const strToNumStr = string.replace(/\D/g, '');
  const NumStrToNum = strToNumStr.split('').map(x=>+x).reduce((acc, curr) => (acc + curr), 0);
  //Another way:
  //strToNumStr.split('').reduce((acc, curr) => parseInt(acc) + parseInt(curr), 0);
  if (NumStrToNum === 1) return `${NumStrToNum} copo de água`;
  return `${NumStrToNum} copos de água`;
}

// const str = '1 cerveja, 2 shots e 1 catuaba';

// console.log(hydrate(str));

// const StringToNumber = parseInt(str.replace(/\D/g, ''));
//   console.log(StringToNumber);

module.exports = hydrate;