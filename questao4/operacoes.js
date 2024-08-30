/*Usando Módulos JavaScript, crie um módulo que contém funções matemáticas básicas
 (soma, subtração, multiplicação, divisão) e exponenciação.  Em seguida, utilize essas funções em outro arquivo.*/

export function soma(a, b) {
    return a + b;
}

export function subtracao(a, b) {
    return a - b;
}

export function multiplicacao(a, b) {
    return a * b;
}

export function divisao(a, b) {
    if (b === 0) {
        throw new Error("Divisão por zero não é permitida.");
    }
    return a / b;
}

export function exponenciacao(a, b) {
    return Math.pow(a, b);
}
