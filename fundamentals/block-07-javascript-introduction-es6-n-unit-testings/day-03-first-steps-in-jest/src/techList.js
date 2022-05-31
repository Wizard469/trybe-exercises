//🚀 5 - A função techList recebe como parâmetros um array contendo uma lista de tecnologias e uma string com um nome. Para cada tecnologia no array a função cria, em ordem alfabética, um objeto com a seguinte estrutura:

// {
//     tech: 'nomeTecnologia',
//     name: name,
// }

//Refactored...

function techList(array, name) {
  // let newList = [];

  if (array[0] === undefined) return "Vazio!";

  const sorted = array.sort();

  return sorted.map((tech) => ({ tech: tech, name: name }));

  // for (let item of sorted) {
  //     newList.push({tech: item, name: name})
  // }
  // return newList;
}

module.exports = techList;
