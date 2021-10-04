const wakeUp = () => 'Acordando!!';

const breakfast = () => 'Bora tomar café!!';

const sleep = () => 'Partiu dormir!!';

const doingThings = (callback) => console.log(callback());

// Ao chamar a função doingThings:
doingThings(wakeUp);
doingThings(breakfast);
doingThings(sleep);

// Ela deve retornar o valor do respectivo parâmetro, neste caso:
// Acordando!!

/*Crie uma função que retorne um objeto no formato { nomeCompleto, email } representando uma nova pessoa contratada. Passe sua função como parâmetro da HOF newEmployees para criar cada pessoa contratada em seu respectivo id . A sua função deve receber como parâmetro o nome completo da pessoa funcionária e a partir dele gerar automaticamente um email no formato nome_da_pessoa@trybe.com .*/
const users = (fullname) => {
  const email = fullname.toLowerCase().split(" ").join('_');
  const user = {
   nomeCompleto: fullname,
   email: `${email}.@trybe.com`
 }
 return user;
}

const newEmployees = (callback) => {
  const employees = {
    id1: callback('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: callback('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: callback('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  return employees;
};

console.log(newEmployees(users));
