/*ATIVIDADE 5
Faça um sistema que leia as 3 notas de um aluno e calcule a média final deste aluno. Considerar que a média é ponderada e que o peso das notas é: 2,3 e 5, respectivamente.*/

const prompt=require('prompt-sync')();

const texNota1 = prompt ('Insira a primeira nota:');
const texNota2 = prompt ('Insira a segunda nota:');
const textNota3 = prompt ('Insira a terceira nota:');

const numNota1 = Number (texNota1);
const numNota2 = Number (texNota2);
const numNota3 = Number (textNota3);

const peso1 = 2;
const peso2 = 3;
const peso3 = 5;

const media = (numNota1 * peso1 + numNota2 * peso2 + numNota3 * peso3) / (peso1 + peso2 + peso3);
console.log (`O resultado da média ponderada é: ${media}`);
