/*ATIVIDADE 4
Escreva um programa que leia três números inteiros e positivos (A, B, C) e calcule a seguinte expressão:
d=r+s/2
r=(a+b)²
s=(b+c)² */

const prompt=require('prompt-sync')();

const texA = prompt ('Insira o valor de A:');
const numA = Number (texA);
const texB = prompt ('Insira o valor de B:');
const numB = Number (texB);
const texC = prompt ('Insira o valor de C:');
const numC = Number (texC);

const resultAB = numA + numB;
const resultBC = numB + numC;

const r = Math.pow (resultAB, 2);
const s = Math.pow (resultBC, 2);
const d = (r + s) / 2;


console.log(`O resultado de D é: ${d}`);






