/*ATIVIDADE 6
Construa um programa em c que, tendo como dados de entrada dois pontos quaisquer no plano, P(x1, y1) e P(x2, y2), escreva a distância entre eles. 
A fórmula que efetua tal cálculo é: d=*/

/*
const prompt=require('prompt-sync')();

const texX1 = prompt ('Insira o valor de X1:');
const texY1 = prompt ('Insira o valor de Y1:');
const texX2 = prompt ('Insira o valor de X2:');
const texY2 = prompt ('Insira o valor de Y2:');

const x1 = Number (texX1);
const y1 = Number (texY1);
const x2 = Number (texX2);
const y2 = Number (texY2);

const resultX = x1 - x2;
const resultY = y1 - y2;

const powX = Math.pow (resultX , 2);
const powY = Math.pow (resultY , 2);
const result = powX + powY;
const d = Math.sqrt (result);

console.log (`A distância entre eles é: ${d}`);

*/

const prompt = require('prompt-sync')();

const x1Text = prompt('Digite o valor de x1: ');
const y1Text = prompt('Digite o valor de y1: ');
const x2Text = prompt('Digite o valor de x2: ');
const y2Text = prompt('Digite o valor de y2: ');

const x1 = Number(x1Text);
const y1 = Number(y1Text);
const x2 = Number(x2Text);
const y2 = Number(y2Text);

// D = \|(x2-x1)² + (y2-y1)²
const D = Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2));

console.log(`A distância entre os pontos p1(${x1}, ${y1}) e p2(${x2}, ${y2}) é ${Math.round(D)}`);











