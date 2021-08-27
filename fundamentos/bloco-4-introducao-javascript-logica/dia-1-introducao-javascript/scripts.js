// Faça um programa que retorne o maior de dois números. Defina no começo do programa duas constantes com os valores que serão comparados.
/*const num1 = 10;
const num2 = 8;
if (num1 > num2) {
    console.log(num1)
} else {
    console.log(num2)
}*/

// Faça um programa que retorne o maior de três números. Defina no começo do programa três constantes com os valores que serão comparados.
/*
const num1 = 1;
const num2 = 8;
const num3 = 51;
if (num1 > num2 && num1 > num3) {
    console.log(num1)
} else if (num2 > num3) {
    console.log(num2)
} else {
    console.log(num3)
}*/

// Faça um programa que, dado um valor definido numa constante, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário.
/*
const num = -10;
if (num > 0){
    console.log("positive")
} else {
    console.log("negative")
}*/

// Faça um programa que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false , caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.
/*
const ang1 = 50;
const ang2 = 50;
const ang3 = 180;
const sumAng = ang1 + ang2 + ang3
console.log("Os ângulos representarem os ângulos de um triângulo? " + (sumAng === 180))*/

//Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:
/*
const nota = 85
if(nota >= 90 ){
    console.log("Tirou conceito: A")
} else if(nota >= 80 && nota < 90) {
    console.log("Tirou conceito: B")
} else if(nota >= 70 && nota < 80) {
    console.log("Tirou conceito: C")
} else if(nota >= 60 && nota < 70) {
    console.log("Tirou conceito: D")
} else if(nota >= 50 && nota < 60) {
    console.log("Tirou conceito: E")
} else if(nota < 50) {
    console.log("Tirou conceito: F")
}*/

// Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu salário bruto o INSS e o IR. Faça um programa que, dado um salário bruto, calcule o líquido a ser recebido.

const salarioBruto = 3000;
let aliquota = 0
let aliquotaMax = 0
let inss = 0
if (salarioBruto <= 1556.94){
    aliquota = 0.08
} else if(salarioBruto > 1556.94 && salarioBruto <= 2594.92){
    aliquota = 0.09
} else if(salarioBruto > 2594.92 && salarioBruto <= 5189.82){
    aliquota = 0.11
} else if(salarioBruto > 5189.82){
    aliquotaMax = 570.88
}
if (salarioBruto <= 5189.82){
    inss = salarioBruto * aliquota
} else{
    inss = aliquotaMax
}

let salarioBase = salarioBruto - inss

console.log(aliquota)
console.log(aliquotaMax)
console.log(inss)
console.log(salarioBase)

if (salarioBase <= 1903.98) {
    let valorIr = 0
} else if (salarioBase > 1903.98 && salarioBase <= 2826.65) {
    valorIr = (salarioBase * 0.075) - 142.80
} else if (salarioBase > 2826.65 && salarioBase <= 3751.05) {
    valorIr = (salarioBase * 0.15) - 354.80
} else if (salarioBase > 3751.05 && salarioBase <= 4664.68) {
    valorIr = (salarioBase * 0.225) - 636.13
} else {
    valorIr = (salarioBase * 0.275) - 869.36
}

console.log (valorIr.toFixed(2))

let salarioLiquido = salarioBase - valorIr

console.log(salarioLiquido)