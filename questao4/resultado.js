
import { soma, subtracao, multiplicacao, divisao, exponenciacao } from './operacoes.js';

const a = 10;
const b = 5;

console.log(`Soma de ${a} e ${b}:`, soma(a, b));
console.log(`Subtração de ${b} de ${a}:`, subtracao(a, b));
console.log(`Multiplicação de ${a} por ${b}:`, multiplicacao(a, b));
console.log(`Divisão de ${a} por ${b}:`, divisao(a, b));
console.log(`Exponenciação de ${a} elevado a ${b}:`, exponenciacao(a, b));
