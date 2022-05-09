// Abaixo, você verá algumas especificações de algoritmos para desenvolver. É fundamental que você utilize o que aprendeu sobre let, const, arrow functions, template literals e ternary operator.

//1. Crie uma função que receba um número e retorne seu fatorial.

// Na matemática, o fatorial de um número não negativo N, com a notação N!, é o produto de todos os inteiros menores ou iguais a N. Exemplo: 4! = 4 * 3 * 2 * 1 = 24.
// Bônus (opcional): tente fazer o mesmo exercício de forma recursiva. Spoiler: É possível resolver com uma linha usando ternary operator.

const factorial = (N) => {
    let result = 1;
    if (N === 0) {
        return 1;
    } else {
        for (let index = 2; index <= N; index += 1) {
            result = result *= index;
        }
        return result;
    }
}

console.log(factorial(10));

// Recursiva
// const factorials = (N) => N > 1 ? N * factorials(N - 1) : 1;
// console.log(factorials(5));

//2. Crie uma função que receba uma frase e retorne qual a maior palavra.

const longestWord = (string) => {
    const splitWord = string.split(' ');
    let longestString = "";

    for (let index = 0; index < splitWord.length; index += 1) {
        if (splitWord[index].length > longestString.length) {
            longestString = splitWord[index];
        }
    }

    return longestString;
}

console.log(longestWord('Antônio foi no banheiro e não sabemos o que aconteceu')) // retorna 'aconteceu'

//In one line,

// const longestWord = string => string.split(' ').sort((wordA, wordB) => wordB.length - wordA.length)[0];

// console.log(longestWord("Antonio foi no banheiro e não sabemos o que aconteceu"));