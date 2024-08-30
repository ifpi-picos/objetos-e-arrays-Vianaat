/*Crie um array de objetos representando carros, cada um com propriedades nome e ano, e use filter para criar um novo array 
contendo apenas os carros fabricados após o ano 2010.
*/

const carro = [
    {nome: 'civic' , ano: 2020},
    {nome: 'hillux', ano: 2003},
    {nome: 'corolla', ano: 2009},
    {nome: 'S10', ano: 1998},
    {nome: 'amarok', ano: 2024}

];

const carrosApos2010 = carro.filter(carro => carro.ano > 2010);

console.log(carrosApos2010)
