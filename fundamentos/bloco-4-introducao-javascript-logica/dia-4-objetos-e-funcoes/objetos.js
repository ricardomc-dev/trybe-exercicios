let player = {
    name: 'Marta',
    lastName: 'Silva',
    age: 34,
    medals: { golden: 2, silver: 3 },
    bestInTheWorld: [2006, 2007, 2008, 2009, 2010, 2018]
}
console.log(`A jogadora ${player.name} ${player.lastName} tem ${player.age} anos de idade.`)

//  "A jogadora Marta Silva tem 34 anos de idade".

console.log(`A jogadora ${player.name} ${player.lastName} foi eleita a melhor do mundo por ${player.bestInTheWorld.length} vezes`)

// "A jogadora Marta Silva foi eleita a melhor do mundo por 6 vezes".

console.log(`A jogadora possui ${player.medals.golden} medalhas de ouro e ${player.medals.silver} medalhas de prata`)

// "A jogadora possui 2 medalhas de ouro e 3 medalhas de prata".

let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

//1 - Imprima no console uma mensagem de boas-vindas para a personagem acima, incluindo seu nome. Valor esperado no console:
console.log( `Bem-vinda, ${info.personagem}`);

// 2 - Insira no objeto uma nova propriedade com o nome de chave 'recorrente' e o valor 'Sim' e, em seguida, imprima o objeto no console. 
info['recorrente'] = 'Sim';

console.log(info)

// Faça um for/in que mostre todas as chaves do objeto. 

for (let key in info) {
  console.log(key)
}

// Agora, defina um segundo objeto com a mesma estrutura (as mesmas chaves) do primeiro e os seguintes valores: 'Tio Patinhas', 'Christmas on Bear Mountain, Dell's Four Color Comics #178', 'O último MacPatinhas', 'Sim'. Então, imprima os valores de cada objeto juntos de acordo com cada uma das chaves.
let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  recorrente: 'Sim',
};

let info2 = {
  personagem: 'Tio Patinhas',
  origem: 'Christmas on Bear Mountain, Dell’s Four Color Comics #178',
  nota: 'O último MacPatinhas',
  recorrente: 'Sim',
};

for (let chave in info) {
  if (
    chave === 'recorrente' &&
    info[chave] === 'Sim' &&
    info2[chave] === 'Sim'
  ) {
    console.log('Ambos recorrentes');
  } else {
    console.log(info[chave] + ' e ' + info2[chave]);
  }
}

