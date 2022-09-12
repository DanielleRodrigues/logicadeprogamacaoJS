/*ATIVIDADE 1
Faça um programa que receba três inteiros e diga qual deles é o maior.*/
const prompt = require('prompt-sync')();
const text1 = prompt('Insira o primeiro número:');
const text2 = prompt('Insira o segundo número');
const text3 = prompt('Insira o terceiro número');

const num1 = Number (text1)
const num2 = Number (text2)
const num3 = Number (text3)

  if (num1 > num2 && num1 > num3)
{
    console.log(`O maior número é: ${num1}`); 
}
 else if (num2> num1 && num2 > num3)
 {
    console.log(`O maior número é: ${num2}`); 

 }
 else 
 {
    console.log(`O maior número é: ${num3}`); 
 }

