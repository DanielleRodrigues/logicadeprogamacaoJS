/*ATIVIDADE 3
Faça um programa que leia o tempo de duração de um evento em uma fábrica expressa em segundos e mostre-o expresso em horas, minutos e segundos. */

const prompt=require('prompt-sync')();

const texSeg = prompt('Insira a quantidade de segundos:');
const numSeg = Number (texSeg)
const totalH = numSeg / 3600
const totalM = (numSeg%3600)/60
const totalS = (numSeg%3600)%60

console.log(`A quantidade total de horas: ${totalH}`);
console.log(`A quantidade total de minutos: ${totalM}`);
console.log(`A quantidade total de segundos: ${totalS}`);










