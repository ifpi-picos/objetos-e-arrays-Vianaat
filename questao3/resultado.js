const math = require('./math');

const a = 10;
const b = 5;

console.log(`Soma de ${a} e ${b}:`, math.soma(a, b));
console.log(`Subtração de ${b} de ${a}:`, math.subtracao(a, b));
console.log(`Multiplicação de ${a} por ${b}:`, math.multiplicacao(a, b));
console.log(`Divisão de ${a} por ${b}:`, math.divisao(a, b));
console.log(`Exponenciação de ${a} elevado a ${b}:`, math.exponenciacao(a, b));
