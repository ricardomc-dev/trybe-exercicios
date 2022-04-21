const calcNumeros = require('./exercicio-1');

const num1 = Math.floor(Math.random() * 100 + 1);
const num2 = Math.floor(Math.random() * 100 + 1);
const num3 = Math.floor(Math.random() * 100 + 1);

console.log(num1, num2, num3);

calcNumeros(num1, num2, num3)
  .then(result => console.log(result))
  .catch(err => console.log(`erro: ${err.message}`));
  