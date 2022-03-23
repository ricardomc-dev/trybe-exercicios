// Exercicio 1
function testingScope(escopo) {
  if (escopo === true) {
    var ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    ifScope = ifScope + ' ótimo, fui utilizada no escopo !';
    console.log(ifScope);
  } else {
    var elseScope = 'Não devo ser utilizada fora meu escopo (else)';
    console.log(elseScope);
  }
  //console.log(ifScope + ' o que estou fazendo aqui ? :O'); // Se necessário esta linha pode ser removida.
}

testingScope(false);

// Modifique a estrutura da função para que ela seja uma arrow function .
// Modifique as concatenações para template literals .

const testingScope = escopo => {
  if (escopo === true) {
    var ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    ifScope = `${ifScope}! ótimo, fui utilizada no escopo !`
    console.log(ifScope);
  } else {
    var elseScope = 'Não devo ser utilizada fora meu escopo (else)';
    console.log(elseScope);
  }
}
testingScope(true);

// Exercicio 2

const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const sortArray = array => {
  const sortOddsAndEven = array.sort((a, b) => a - b);
  return sortOddsAndEven;
}
const sortedArray = sortArray(oddsAndEvens);
console.log(`Os números ${sortedArray} se encontram ordenados de forma crescente !`);

// Exercicio 3

const fatorial = num => {
  for (let index = num-1; index > 0; index -= 1) {
    num *= index;
  }
  return num;
}
console.log(fatorial(6));

// Exercicio 4

function lagerWord(phrase) {
  const phaseArray = phrase.split(" ");
  const numberArray = phaseArray.map(word => word.length);
  let maior = 0;
  for (let index = 0; index < numberArray.length; index += 1) {
    if (numberArray[index] > maior) {
      maior = numberArray[index]
    }
  }
  const indexArray = numberArray.findIndex(n => n === maior);
  console.log(phaseArray[indexArray])
}
lagerWord("Antônio foi no banheiro e não sabemos o que aconteceu")

// Exercicio 5

