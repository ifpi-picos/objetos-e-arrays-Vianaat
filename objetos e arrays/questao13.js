/*Escreva um programa que solicita ao usuário o nome de 5 filmes e 
armazene em um array. Em seguida, exiba no console os filmes 
informados.*/


let filmes = [];

for (let i = 0; i < 5; i++) {
    let filmesUsuarios = prompt('Digite o nome de um filme: ');
    filmes.push(filmesUsuarios);
}
console.log('Os filmes digitados foram: ', filmes);