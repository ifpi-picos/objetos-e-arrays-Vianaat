const produto = {
    nome: "Reparador de pontas",
    preco: 40,
    quantidade: 10
};

const valorTotalEstoque = produto.preco * produto.quantidade;

console.log(`Valor total do estoque de ${produto.nome}: R$ ${valorTotalEstoque}`);