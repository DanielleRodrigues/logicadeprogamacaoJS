/*ATIVIDADE 1
Faça um sistema que leia a idade de uma pessoa expressa em anos, meses e dias e mostre-a expressa apenas em dias.*/

const prompt=require('prompt-sync')();
const anosvividos = prompt('Insira a quantidade de anos vividos:');
const numAnos = Number (anosvividos);
const mesesvividos = prompt('Insira a quantidade de meses vividos:');
const numMeses = Number (mesesvividos);
const diasvividos = prompt('Insira a quantidade de dias vividos:');
const numDias = Number (diasvividos);
const total= (numAnos*365)+ (numMeses*30)+ numDias
console.log(`A quantidade de dias vividos foi: ${total}`);
