/*ATIVIDADE 3
Faça um programa que receba a idade de uma pessoa e mostre na saída em qual categoria ela se encontra:
●	10-14 infantil
●	15-17 juvenil
●	18-25 adulto*/


const prompt = require('prompt-sync')();
const texIdade = prompt ('Insira a idade: ');
const idade = Number (texIdade);

if (idade >= 10 && idade <= 14){
    console.log('Categoria Infantil. ');
}
else if  (idade >= 15 && idade <= 17){
    console.log('Categoria Juvenil. ');
}
else if (idade >= 18 && idade <= 25){
    console.log('Categoria Adulto. ');
}
else{
    console.log ('Idade não categorizada. ');
}
