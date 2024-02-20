
const readline = require('readline-sync');

const weigth = readline.questionFloat('Whats your weigth ?');
const height = readline.question('Whats your height?');

const bmi = (weigth, height) => {
  return (weigth / (height * height)).toFixed(2);
};

console.log('Your BMI is:', bmi(weigth, height));
