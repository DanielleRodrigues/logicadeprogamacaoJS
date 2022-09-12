/*ATIVIDADE 10
O custo ao consumidor de um carro novo é a soma do custo de fábrica com a percentagem do distribuidor e dos impostos (aplicados ao custo de fábrica). 
Supondo que a porcentagem do distribuidor seja de 28% e os impostos de 45%, escrever um sistema que leia o custo de fábrica de um carro e escreva o custo ao consumidor*/

const prompt=require('prompt-sync')();
const textValorFab = prompt ('Insira o valor de fabrica:');
const numValorFab = Number (textValorFab);

const percentD = numValorFab * 0.28;
const imposto = numValorFab * 0.45;
const valorFinal = numValorFab + percentD + imposto;

console.log (`O custo para o consumidor é de: ${valorFinal}`);
