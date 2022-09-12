/*ATIVIDADE 4
Faça um programa em que permita a entrada de um número qualquer e exiba se este número é par ou ímpar. Se for par exiba também a raiz quadrada do mesmo; se for ímpar exiba o número elevado ao quadrado.*/

const prompt = require('prompt-sync')();
const texNum = prompt ('Insira número: ');
const num =  Number (texNum);

if (num%2===0){
    console.log ('O número é par!' + Math.sqrt (num, 2))
    
}
else {
    console.log ('O número é impar! ' + Math.pow (num , 2));
}
