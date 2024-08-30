/*Escreva um programa em JavaScript que utilize a biblioteca mathjs para calcular o logaritmo
 de um número fornecido pelo usuário.*/

const math = require('mathjs');

function calcularLog() {
    const numero = parseFloat(prompt('Informe um número para calcular o logaritmo: '));

    const logNatural = math.log(numero);
    const logNaBase10 = math.log10(numero);

    console.log(`Logaritmo natural (base e) de ${numero}: ${logNatural}`);
    console.log(`Logaritmo na base 10 de ${numero}: ${logNaBase10}`);
}

calcularLog();
