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