/*Crie um array de números de 1 a 10 e use map para criar um novo array onde cada número é multiplicado por 2.
*/


const numeros = [];
for (let i = 1; i <= 10; i++) {
  numeros.push(i);
}

const multiplicar = numeros.map(num => num * 2);

console.log(multiplicar)
