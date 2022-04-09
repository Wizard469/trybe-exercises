//1

let factorial = 1;

for (let i = 10; i > 0; i -= 1) {
    factorial = factorial * i;
}

console.log(factorial);

//2

let word = 'arroz';
let reverse = '';

for (let i = word.length - 1; i >= 0; i -= 1) {
    reverse = reverse + word[i];
}

console.log(reverse);