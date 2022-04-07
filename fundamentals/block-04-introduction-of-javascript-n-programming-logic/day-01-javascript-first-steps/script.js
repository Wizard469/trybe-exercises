//1

console.log(8 + 9);
console.log(75 - 25);
console.log(25 * 45);
console.log(785 / 4);
console.log(955 % 6);

//2

const a = 25;
const b = 35;

if (a > b) {
    console.log(a);
} else {
    console.log(b);
}

//3

const c = 55;
const d = 65;
const e = 33;

if (c > d && c > e) {
    console.log(c);
} else if (d > c && d > e) {
    console.log(d);
} else {
    console.log(e);
}

//4

const number = 10;

if (number > 0) {
    console.log('positive');
} else if (number < 0) {
    console.log('negative');
} else {
    console.log('zero');
}

//5

const angleA = 60;
const angleB = 30;
const angleC = 90;

let anglesArePositives = angleA > 0 && angleB > 0 && angleC > 0;

const anglesSum = angleA + angleB + angleC;

if (anglesArePositives) {
    if (anglesSum  === 180) {
        console.log(true);
    } else if (anglesSum !== 180)
    console.log(false);
} else {
    console.log('Erro: ângulo inválido');
}

//6

let chessPiece = 'queen';

switch (chessPiece.toLowerCase()) {
    case 'pawn': console.log('Pawn -> Uma casa para frente, no primeiro movimento são duas.');
        break;
    case 'king': console.log('King -> Diagonal, horizontal, vertical, apenas uma casa.');
        break;
    case 'queen': console.log('Queen -> Diagonal, horizontal, vertical.');
        break;
    case 'rook': console.log('Rook -> Horizontal, vertical.');        
        break;
    case 'bishop': console.log('bishop -> Diagonais.');        
        break;
    case 'knight': console.log('Knight -> L, pode saltar peças.');        
        break;
    default: console.log('Erro, peça inválida.');        
        break;
}

//7

let givenNote = 95;

if (givenNote >= 90) {
    console.log('Nota A');
} else if (givenNote >= 80) {
    console.log('Nota B');
} else if (givenNote >= 70) {
    console.log('Nota C');
} else if (givenNote >= 60) {
    console.log('Nota D');
} else if (givenNote >= 50) {
    console.log('Nota E');
} else if (givenNote < 50) {
    console.log('Nota F');
} else if (givenNote < 0 || givenNote > 100) {
    console.log('Erro, nota incorreta')
}

//8

const number1 = 10;
const number2 = 15;
const number3 = 49;

if (number1 % 2 === 0 || number2 % 2 === 0 || number3 % 2 === 0) {
    console.log(true)
} else {
    console.log(false)
}

//9

const number4 = 10;
const number5 = 15;
const number6 = 49;

if (number4 % 2 === 1 || number5 % 2 === 1 || number6 % 2 === 1) {
    console.log(true)
} else {
    console.log(false)
}

//10

const cost = 5;
const saleValue = 15;

if (cost >= 0 && saleValue >= 0) {
    const totalCost = cost * 1.2;
    const profit = (saleValue - totalCost) * 1000;
    console.log(profit)
} else {
    console.log('Erro, valor inválido')
}