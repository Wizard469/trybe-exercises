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

function largerIntegerIndex(numbers) {    
    let largerIndex = 0;

    for (let index in numbers) {
        if (largerIndex < numbers[index]) {
            largerIndex = index;
        }
    }
    return largerIndex;
}
console.log(largerIntegerIndex([2, 3, 6, 7, 10, 1]));

//3 - Crie uma função que receba um array de inteiros e retorne o índice do menor valor.

function smallerNumberIndex(numbers) {
    let smallerNumber = numbers[0];

    for (let i in numbers) {
        if (numbers[smallerNumber] > numbers[i]) {
            smallerNumber = i;
        }
    }
    return smallerNumber;
}
console.log(smallerNumberIndex([2, 4, 6, 7, 10, 0, -3]));