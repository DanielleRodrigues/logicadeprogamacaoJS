/*ATIVIDADE 2
Faça um sistema que leia a idade de uma pessoa expressa em dias e mostre-a expressa em anos, meses e dias.*/
const prompt=require('prompt-sync')();

const diasvividos = prompt('Insira a quantidade de dias vividos:');
const numDias = Number (diasvividos);
const totalM = numDias/30;
const totalA = numDias/365;

console.log(`A quantidade de anos vividos foi: ${totalA}`);
console.log(`A quantidade de meses vividos foi: ${totalM}`);
console.log(`A quantidade de dias vividos foi: ${numDias}`);
