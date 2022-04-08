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

//5

let largerNumber = 0;

for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] > largerNumber) {
        largerNumber = numbers[i];
    }
}

console.log(largerNumber)

//6

let oddNumbers = 0;

for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] % 2 === 1) {
        oddNumbers += 1;
    }
}

if (oddNumbers === 0) {
    console.log("nenhum valor ímpar encontrado")
} else {
    console.log(oddNumbers);
}

//7

let smallerNumber = Infinity;

for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] < smallerNumber) {
        smallerNumber = numbers[i];
    }
}

console.log(smallerNumber)

//8

let arr1to25 = [];

for (let i = 1; i <= 25; i += 1) {
    arr1to25.push(i)
}

console.log(arr1to25)

//9

let result = [];

for (let i = 0; i < arr1to25.length; i += 1) {
    result.push(arr1to25[i] * 2);
}

console.log(result);