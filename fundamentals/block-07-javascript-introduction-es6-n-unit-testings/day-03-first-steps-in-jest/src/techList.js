//🚀 5 - A função techList recebe como parâmetros um array contendo uma lista de tecnologias e uma string com um nome. Para cada tecnologia no array a função cria, em ordem alfabética, um objeto com a seguinte estrutura:

// {
//     tech: 'nomeTecnologia',
//     name: name,
// }

function techList(array, name) {
let newList = [];

if (array[0] === undefined) {
    return "Vazio!";
}

let sorted = array.sort();

for (let item of sorted) {
    newList.push({tech: item, name: name})
}
return newList;
}

module.exports = techList;
