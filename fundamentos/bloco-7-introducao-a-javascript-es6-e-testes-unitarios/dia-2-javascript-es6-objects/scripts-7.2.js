// Exercicios Parte 1
const user = {
  firstName: 'Lucas',
  age: 22,
  job: 'Teacher',
};

function addKey(object, chave, value) {
  object[chave] = value;
  return object
}

console.log(addKey(user, 'lastName', 'Carvalho'));

// Exercicios Parte 2

const student1 = {
  Html: 'Muito Bom',
  Css: 'Bom',
  JavaScript: 'Ótimo',
  SoftSkills: 'Ótimo',
};

const student2 = {
  Html: 'Bom',
  Css: 'Ótimo',
  JavaScript: 'Ruim',
  SoftSkills: 'Ótimo',
  Git: 'Bom', // chave adicionada
};

const listSkills = student => {
  const arrayOfSkills = Object.keys(student);
  for (index in arrayOfSkills){
    console.log(`${arrayOfSkills[index]}, nível ${student[arrayOfSkills[index]]}`);
  }
};
console.log('Estudante 1');
listSkills(student1);

console.log('Estudante 2');
listSkills(student2);

// Exercicios Parte 3

const starships = {
  option1: "Tardis",
  option2: "Millennium Falcon",
  option3: "Enterprise",
  option4: "Heart of Gold"
}
console.log(Object.values(starships))

// Exercicios Parte 4

const países = {
  França: 'Paris',
  Brasil: 'Brasília',
  Espanha: 'Madrid',
  Portugal: 'Lisboa',
};
const pairKeyValue = Object.entries(países);
console.log(pairKeyValue);
for(index in pairKeyValue) {
  console.log('--------');
  console.log('País:', pairKeyValue[index][0]);
  console.log('Capital:', pairKeyValue[index][1]);
};

// Exercicios Parte 5

const person = {
  name: 'Alberto',
  lastName: 'Gomes',
  age: 20,
};

const info = {
  age: 23,
  job: 'engenheiro',
};

const family = {
  children: ['Maria', 'João'],
  wife: 'Ana',
};

Object.assign(person, info, family)
console.log(person)



const person = {
  name: 'Roberto',
};

const lastName = {
  lastName: 'Silva',
};

const clone = Object.assign(person, lastName);

console.log(clone); // { name: 'Roberto', lastName: 'Silva' }
console.log(person); // { name: 'Roberto', lastName: 'Silva' }
clone.name = 'Maria';

console.log('Mudando a propriedade name através do objeto clone')
console.log(clone); // Output: { name: 'Maria', lastName: 'Silva' }
console.log(person); // Output: { name: 'Maria', lastName: 'Silva' }
console.log('--------------');

person.lastName = 'Ferreira';

console.log('Mudando a propriedade lastName através do objeto person');
console.log(clone); // Output: { name: 'Maria', lastName: 'Ferreira' }
console.log(person); // Output: { name: 'Maria', lastName: 'Ferreira' }


const person = {
  name:'Roberto',
};

const lastName = {
  lastName: 'Silva',
};

const newPerson = Object.assign({}, person,lastName);
//newPerson.name = 'Gilberto';
console.log(newPerson);
console.log(person);

// Desenvolva uma função que receba um array de objetos com cidades e estados e retorne um array contendo o nome da cidade e do estado concatenados.

// Ex:
const citiesAndStates = [
  {
    city: 'Belo Horizonte',
    state: 'Minas Gerais',
  },
  {
    city: 'Salvador',
    state: 'Bahia',
  },
  {
    city: 'Porto Alegre',
    state: 'Rio Grande do Sul',
  },
  {
    city: 'Manaus',
    state: 'Amazonas',
  }
]

// Resultado esperado
//['Belo Horizonte - Minas Gerais', 'Salvador - Bahia', 'Porto Alegre - Rio Grande do Sul', 'Manaus - Amazonas']

function buildCitiesArray(array) {
  let newArray = [];
  for (let index = 0; index < array.length; index += 1) {
    newArray.push(array[index].city);
    newArray.push(array[index].state);
  }
  console.log(newArray)
}

buildCitiesArray(citiesAndStates) 