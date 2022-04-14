const readline = require('readline-sync');

const userWeight = readline.questionInt('Qual seu peso? ')
const userHeight = readline.questionFloat('Qual sua altura em metros? ')

function calculaIMC (peso, altura) {
  const weight = peso;
  const height = altura;

  const imc = (weight / (height** 2)).toFixed(2);

  return imc
}


console.log(`IMC = ${calculaIMC(userWeight, userHeight)}`);
