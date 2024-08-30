/*Escreva um programa em JavaScript que utilize a biblioteca convert para converter dias 
em minutos e gigabytes em bytes.*/

const convert = require('convert-units');

function converterSDiasParaMin(dias) {
    const minutos = convert(dias).from('d').to('min');
    return minutos;
}

function converterGigabytesParaBytes (gigabytes) {
    const bytes = convert(gigabytes).from('GB').to('B');
    return bytes;
}

const dias = 2;
const minutos = converterSDiasParaMin(dias);
console.log(`${dias} dias são equivalentes a ${minutos} minutos.`);

const gigabytes = 5;
const bytes = converterGigabytesParaBytes(gigabytes);
console.log(`${gigabytes} gigabytes são eqivalentes a ${bytes} bytes.`);