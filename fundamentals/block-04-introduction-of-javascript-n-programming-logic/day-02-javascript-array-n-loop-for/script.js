let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//1.

for (let i = 0; i < numbers.length; i += 1) {
    console.log(numbers[i]);
}

//2.

 let sumOfNumbers = 0;

for (let i = 0; i < numbers.length; i += 1) {
        sumOfNumbers += numbers[i];
}

console.log(sumOfNumbers);

//3.

let sum = 0;

for (let i = 0; i < numbers.length; i += 1) {
        sum += numbers[i];
}

let average = sum / numbers.length;

console.log(average);

//4

if (average > 20) {
    console.log("valor maior que 20");
} else {
    console.log("valor menor ou igual a 20");
}