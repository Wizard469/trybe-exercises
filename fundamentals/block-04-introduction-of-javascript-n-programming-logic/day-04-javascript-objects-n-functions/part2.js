//1 - Crie uma função que receba uma string e retorne true se for um palíndromo, ou false, se não for.
    

function palindromeVerification(string) {
    const strToArr = string.split('');
    const reverseArr = strToArr.reverse().join('');

   if (reverseArr === string) {
       return true;
   } else {
       return false;
   }
}
console.log(palindromeVerification("caro"));

//2 - Crie uma função que receba um array de inteiros e retorne o índice do maior valor.

function largerIntegerIndex(arrayN) {    
    let largerIndex = 0;

    for (let index in arrayN) {
        if (largerIndex < arrayN[index]) {
            largerIndex = index;
        }
    }
    return largerIndex;
}
console.log(largerIntegerIndex([2, 3, 6, 7, 10, 1]));

//3 - Crie uma função que receba um array de inteiros e retorne o índice do menor valor.

function smallerNumberIndex(arrayN) {
    let smallerNumber = arrayN[0];

    for (let i in arrayN) {
        if (arrayN[smallerNumber] > arrayN[i]) {
            smallerNumber = i;
        }
    }
    return smallerNumber;
}
console.log(smallerNumberIndex([2, 4, 6, 7, 10, 0, -3]));

//4 - Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.

function largerString(array) {
    let largerStr = array[0];
    for (let index in array) {
        if (array[index].length > largerStr.length) {
            largerStr = array[index];
        };
    }
    return largerStr;
}
console.log(largerString(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));

//5 - Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.

function mostOccurrence(arrayN) {
    let countRepetition = 0;    
    let countNumber = 0;
    let indexNumberRepeated = 0;

    for (let index in arrayN) {
        let verifyNumber = arrayN[index];
        for (let index2 in arrayN) {
        if (verifyNumber === arrayN[index2]) {
            countNumber += 1;
        }
        }
        if (countNumber > countRepetition) {
        countRepetition = countNumber;
        indexNumberRepeated = index;
        }
        countNumber = 0;
    }
    return arrayN[indexNumberRepeated];
}
console.log(mostOccurrence([2, 3, 2, 5, 8, 2, 3]));

//6 - Crie uma função que receba um número natural (número inteiro não negativo) N e retorne o somatório de todos os números de 1 até N.

function primeNumbers(numbers) {    
    let result = 0;
    for (let i = 1; i <= numbers; i+=1) {
        result = result + i;
    }
    return result;
}
console.log(primeNumbers(10));