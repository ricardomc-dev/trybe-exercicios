const calcNumbers = require('./exercicio-1');

function getRandomNumber() {
  return Math.floor(Math.random() * 100 + 1);
}

async function callCalcNumbers() {
  const randomNumbers = Array.from({length: 3}).map(getRandomNumber);

  console.log(randomNumbers);

  try {
    const result = await calcNumbers(...randomNumbers)
    console.log(result);
  } catch (err) {
    console.log(`erro: ${err.message}`);
  }
}

callCalcNumbers();
