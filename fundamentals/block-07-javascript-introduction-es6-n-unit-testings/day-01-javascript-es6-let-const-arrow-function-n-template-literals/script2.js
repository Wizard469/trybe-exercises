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


//3. 🚀 Crie uma página que contenha:

//Um botão ao qual será associado um event listener;

//Uma variável clickCount no arquivo JavaScript que acumule o número de clicks no botão;

//Um campo no HTML que vá atualizando a quantidade de clicks no botão conforme a variável clickCount é atualizada.

const count = document.querySelector('#count');

let clickCounter = 0;

const clickCount = document.querySelector('.click');

clickCount.addEventListener('click', () => {
    count.innerHTML = clickCounter += 1;
})

//4. 🚀 Crie um código JavaScript com a seguinte especificação:
//Não se esqueça de usar template literals

// Função 1: Escreva uma função que vai receber uma string como parâmetro. Sua função deverá procurar pela letra x em uma string qualquer que você determinar e substituir pela string que você passou como parâmetro. Sua função deve retornar essa nova string.

// Exemplo:
// String determinada: "Tryber x aqui!"
// Parâmetro: "Bebeto"
// Retorno: "Tryber Bebeto aqui!"

// Um array com escopo global, que é o escopo do arquivo JS, nesse caso, contendo cinco strings com suas principais skills.

// Função 2: Escreva uma função que vai receber a string retornada da Função 1 como parâmetro. Essa função deve concatenar as skills do array global à string que foi passada para a Função 2 via parâmetro. Você deve ordenar os skills em ordem alfabética. Sua função deve retornar essa nova string.

// Exemplo:
// "Tryber x aqui!
// Minhas cinco principais habilidades são:
// JavaScript;
// HTML; ...
// #goTrybe".

//Copy and paste - I didn't understand a thing.

const array = ["Android", "iOS", "Architecture", "Teach", "Run"];

function buildSkillsPhrase (paramOne) {
    const fun1 = paramInner => (
      `Tryber ${paramInner} aqui!

      Tudo bem?`
    );

    let result = `${fun1(paramOne)}

    Minhas cinco principais habilidades são:`;

    array.forEach((skill, index) =>
    result = `${result}

    - ${skill}`);

    result = `
{result}

    #goTrybe
    `;

    return result;
}

console.log(buildSkillsPhrase("Lucas"));