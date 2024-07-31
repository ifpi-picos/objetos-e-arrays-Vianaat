/*Crie um array de objetos representando pessoas com nome e idade, e use find para encontrar a primeira
 pessoa com idade maior que 18.*/

 const pessoas = [
    {nome: 'talita', idade: 21},
    {nome: 'amanda', idade: 15 },
    {nome: 'maria', idade: 23 },
    {nome: 'leticia', idade: 16}
 ]

const idadeMaior18 = pessoas.find((pessoas) => pessoas.idade < 18);

console.log(idadeMaior18)

 
