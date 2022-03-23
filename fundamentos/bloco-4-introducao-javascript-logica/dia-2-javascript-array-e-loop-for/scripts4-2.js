//Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log() ;

/*
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let index = 0; index < numbers.length; index += 1) {
  console.log(numbers[index]);
}
*/

//Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;
/*let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum = 0
for (let i = 0; i < numbers.length; i+=1){
    sum = sum + numbers[i]  
} 
console.log(sum)*/

//Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;

/*let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum = 0
for (let i = 0; i < numbers.length; i+=1){
    sum = sum + numbers[i]  
} 
let media = sum / numbers.length
console.log(media)*/

//Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";
/*let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum = 0
for (let i = 0; i < numbers.length; i+=1){
    sum = sum + numbers[i]  
} 
let media = sum / numbers.length
if(media > 20){
    console.log("valor maior que 20")
} else {
    consolde.log("valor menor ou igual a 20")
}
*/
//Utilizando for , descubra qual o maior valor contido no array e imprima-o;
/*
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let maiorValor = 0
for (let i = 0; i < numbers.length; i+=1){
    if (numbers[i] > maiorValor){
        maiorValor = numbers[i]
    } 
} 
console.log(maiorValor)*/
//Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";
/*
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let nOdd = 0
for (let i = 0; i < numbers.length; i+=1){
    if (numbers[i] % 2 !== 0){
        nodd += 1
    } 
} 
console.log(nOdd)*/

//Utilizando for , descubra qual o menor valor contido no array e imprima-o;
/*
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let menorValor = numbers[0]
for (let i = 1; i < numbers.length; i+=1){
    if (numbers[i] < menorValor){
        menorValor = numbers[i]
    } 
} 
console.log(menorValor)*/

//Utilizando for , crie um array que vá de 1 até 25 e imprima o resultado;


let num = [];

for (let i = 1; i <=25; i+=1){
    num.push(i)
}
//console.log(num)

//Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2

for (let index = 0; index < num.length; index +=1){
    let res = num[index]/2;
    console.log(num[index] + ' / 2 = ' + res)
}
