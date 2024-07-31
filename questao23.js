/*Crie uma função que recebe um nome completo do usuário e imprime somente o primeiro nome.
*/

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function imprimirPrimeiroNome() {
    rl.question('Por favor, insira seu nome completo: ', (nomeCompleto) => {
        const nomes = nomeCompleto.split(' ');
        console.log( nomes[0]);
        rl.close();
    });
}

imprimirPrimeiroNome();


