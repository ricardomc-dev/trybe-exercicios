const calcNumbers = require('./exercicio-1');

function getRandomNumber() {
  return Math.floor(Math.random() * 100 + 1);
}

function callCalcNumbers() {
  const randomNumbers = Array.from({length: 3}).map(getRandomNumber);

  console.log(randomNumbers);

  calcNumbers(...randomNumbers)
    .then(result => console.log(result))
    .catch(err => console.log(`erro: ${err.message}`));
}

callCalcNumbers();
