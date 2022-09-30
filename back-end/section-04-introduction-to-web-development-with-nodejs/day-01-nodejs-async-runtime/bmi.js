const readline = require('readline-sync');

// const weightInKg = 98;
// const heightInMt = 1.75;

const BMI = (w, h) => {
  console.log(`Weight: ${w}, Height: ${h}`);

  const bmi = Math.round((w / h ** 2) * 100) / 100;

  return bmi;
};

const BMI_MAX_AND_MIN = {
  'Underweight': {
    minBMI: 0,
    maxBMI: 18.4,
  },
  'Normal Weight': {
    minBMI: 18.5,
    maxBMI: 24.9,
  },
  'Overweight': {
    minBMI: 25,
    maxBMI: 29.9,
  },
  'Obese Class I': {
    minBMI: 30.0,
    maxBMI: 34.9,
  },
  'Obese Class II': {
    minBMI: 35,
    maxBMI: 39.9,
  },
  'Obese Class III': {
    minBMI: 40,
    maxBMI: 100, // Um valor default máximo qualquer, impossível de alcançar no imc.
  },
};

const handleBMI = (bmi) => {
  const situations = Object.keys(BMI_MAX_AND_MIN); // ['Underweight', 'Normal Weight', 'Overweight'...]

  const resultFound = situations.find((situation) => {
    const { maxBMI, minBMI } = BMI_MAX_AND_MIN[situation]; // acessamos as informações do intervalo da situação iterada

    // caso esteja dentro do intervalo, significa que encontramos a situação apropriada
    return bmi >= minBMI && bmi <= maxBMI;
  });

  return resultFound;
}

const main = () => {
  const weight = readline.questionFloat('What\'s your weight? (kg) ');
  const height = readline.questionFloat('What\'s your height? (mt) ');

  const bmi = BMI(weight, height);
  const bmiResult = handleBMI(bmi);

  console.log(`BMI: ${bmi}`);
  console.log(`${bmiResult}`);
};

main();
