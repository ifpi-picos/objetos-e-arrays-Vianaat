/*Crie uma função que recebe um nome completo do usuário e imprime o primeiro e último nome.
*/

function imprimirNomes(nomeCompleto) {
    const nomes = nomeCompleto.split(' ').filter(nome => nome !== '');
    const primeiroNome = nomes[0];
    const ultimoNome = nomes[nomes.length - 1];

        console.log(`Primeiro Nome: ${primeiroNome}`);
        console.log(`Último Nome: ${ultimoNome}`);
      }
      
      
