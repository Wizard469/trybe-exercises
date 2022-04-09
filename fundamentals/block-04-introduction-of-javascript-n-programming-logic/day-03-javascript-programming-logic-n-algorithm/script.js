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

//3

let array = ['java', 'javascript', 'python', 'html', 'css'];

let longestString = array[0];
let shortestString = array[0];

for (let i = 0; i < array.length; i += 1) {
    if (array[i].length > longestString.length) {
        longestString = array[i];
    }
}

console.log(longestString);

for (let i = 0; i < array.length; i += 1) {
    if (array[i].length < shortestString.length) {
        shortestString = array[i];
    }
}

console.log(shortestString)