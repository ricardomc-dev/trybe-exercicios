const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

//Crie uma função para adicionar o turno da noite na lesson2 . Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela.

const createTurno = (obj, key, value) => obj[key] = value;
createTurno(lesson2, 'turno', 'noite');
//console.log(lesson2)

//Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.

const keysList = obj => Object.keys(obj);
//console.log(keysList(lesson1));

//Crie uma função para mostrar o tamanho de um objeto.

const objectSize = obj => Object.keys(obj).length;
//console.log(objectSize(lesson2));

//Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.

const valueList = obj => Object.values(obj);
//console.log(valueList(lesson3));

//Crie um objeto de nome allLessons , que deve agrupar todas as aulas através do Object.assign . Cada chave desse novo objeto será uma aula, sendo essas chaves: lesson1 , lesson2 e lesson3 . Ao executar o comando console.log(allLessons) , a saída deverá ser a seguinte:

const allLessons = Object.assign({}, { lesson1, lesson2, lesson3 });
//console.log(allLessons);

//Usando o objeto criado no exercício 5, crie uma função que retorne o número total de estudantes em todas as aulas.

const totalStudents = param => {
  let sum = 0;
  for (index in param) {
    sum += param[index].numeroEstudantes
  }
  return sum
}
//console.log(totalStudents(allLessons));

//Crie uma função que obtenha o valor da chave de acordo com a sua posição no objeto. Por exemplo:
//   console.log(getValueByNumber(lesson1, 0));
//   Output: 'Matématica'

const getValueByNumber = (obj, number) => {
  const value = Object.values(obj)[number];
  return value
}
//console.log(getValueByNumber(lesson1, 0));

//Crie uma função que verifique se o par (chave / valor) existe na função. Essa função deve possuir três parâmetros, sendo eles: o objeto, o nome da chave e o valor da chave. Exemplo:
//  console.log(verifyPair(lesson3, 'turno', 'noite'));
// Output: true,
//  console.log(verifyPair(lesson3, 'materia', 'Maria Clara'));
// Output: false

const verifyPair = (obj, key, value) => {
  const newArr = Object.entries(obj);
  let res = false;
  for (index in newArr) {
    if (newArr[index][0] === key && newArr[index][1] === value) {
      res = true;
    }
  }
  return res;
}
//console.log(verifyPair(lesson3, 'turno', 'noite'));
//console.log(verifyPair(lesson3, 'materia', 'Maria Clara'));
