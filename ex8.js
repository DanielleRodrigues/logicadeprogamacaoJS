/* ATIVIDADE 8
Um sistema de equações lineares do tipo:ax+by = c E dx+ey=f 
pode ser resolvido segundo mostrado abaixo : x=(ce-bf)/ (ae-cd)   E  y(=af-cd)/(ae-bd). 
Escreva um sistema que lê os coeficientes a,b,c,d,e e f e calcula e mostra os valores de x e y.*/


 const prompt=require('prompt-sync')();

 const texA = prompt ('Insira o valor de A:');
 const texB = prompt ('Insira o valor de B:');
 const texC = prompt ('Insira o valor de C:');
 const texD = prompt ('Insira o valor de D:');
 const texE = prompt ('Insira o valor de E:');
 const texF = prompt ('Insira o valor de F:');


 const numA = Number (texA);
 const numB = Number (texB);
 const numC = Number (texC);
 const numD = Number (texD);
 const numE = Number (texE);
 const numF = Number (texF);

const x = (numC * numE) - (numB * numF) / (numA * numE) - (numB * numD);
const y = (numA * numF) - (numC * numD) / (numA * numE) - (numB * numD);

console.log(`O resultado de Y é:${y}`);
console.log(`O resultado de X é:${x}`);






 
 




