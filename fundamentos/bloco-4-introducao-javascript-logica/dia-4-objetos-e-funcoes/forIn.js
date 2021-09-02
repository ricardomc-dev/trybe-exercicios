let cars = ['Saab', 'Volvo', 'BMW'];

for (let index of cars) {
  console.log(index, cars[index]);
}

let car = {
    type: 'Fiat',
    model: '500',
    color: 'white',
  };
  
  for (let index in car) {
    console.log(index, car[index]);
  }

  let names = {
    person1: 'João',
    person2: 'Maria',
    person3: 'Jorge' 
  };
  for (let index in names){
      console.log(`Olá ${names[index]}`)
  }

  let car = {
    model: 'A3 Sedan',
    manufacturer: 'Audi',
    year: 2020
  };
  for (let index in car) {
      console.log(index + ": " + car[index])
  }

  //FUNÇÕES

  //Adição (a + b)
  function sum(a, b) {
    return a + b;
  } console.log(sum(2, 3))

  //Subtração (a - b)
  function sub(a, b) {
      return a - b;
  } console.log(sub(10,2))

  //Multiplicação (a * b)
  function mult(a, b) {
      return a * b;
  } console.log(mult(3, 5))

  //Divisão (a / b)
  function div(a, b) {
      return a / b;
  } console.log(div(15, 5))

  //Módulo (a % b)
  function mod(a, b) {
      return a % b;
  } console.log(mod(10, 3))