//1 - Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.
    

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