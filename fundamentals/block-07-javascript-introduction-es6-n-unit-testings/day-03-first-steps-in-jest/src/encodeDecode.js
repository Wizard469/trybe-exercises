//🚀 4 - Para as funções encode e decode crie os seguintes testes em Jest:

// (a) Teste se encode e decode são funções;
// (b) Para a função encode teste se as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4 e 5, respectivamente;
// (c) Para a função decode teste se os números 1, 2, 3, 4 e 5 são convertidos nas vogais a, e, i, o, u, respectivamente;
// (d) Teste se as demais letras/números não são convertidos para cada caso;
// (e) Teste se a string que é retornada pelas funções têm o mesmo número de caracteres que a string passada como parâmetro.

function encode(string) {
let newString = "";

for (let index in string) {
    if (string[index] === "a") {
    newString += 1;
    } else if (string[index] === "e") {
    newString += 2;
    } else if (string[index] === "i") {
    newString += 3;
    } else if (string[index] === "o") {
    newString += 4;
    } else if (string[index] === "u") {
    newString += 5;
    } else {
    newString += string[index];
    }
}
return newString;
}

function decode(string) {
let newString = "";

for (let index in string) {
    if (string[index] === "1") {
    newString += "a";
    } else if (string[index] === "2") {
    newString += "e";
    } else if (string[index] === "3") {
    newString += "i";
    } else if (string[index] === "4") {
    newString += "o";
    } else if (string[index] === "5") {
    newString += "u";
    } else {
    newString += string[index];
    }
}
return newString;
}

module.exports = {
    encode,
    decode,
};