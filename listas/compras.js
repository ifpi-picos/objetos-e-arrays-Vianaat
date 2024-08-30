
function exibirMenu() {
    console.log("\nMenu de opções:");
    console.log("1. Adicionar item");
    console.log("2. Remover item");
    console.log("3. Pesquisar item");
    console.log("4. Ordenar lista");
    console.log("5. Exibir lista");
    console.log("6. Limpar lista");
    console.log("7. Encerrar programa");
}

function adicionarItem(lista) {
    const item = prompt("Digite o nome do item para adicionar:");
    lista.push(item);
    console.log(`Item "${item}" adicionado à lista.`);
}

function removerItem(lista) {
    const item = prompt("Digite o nome do item para remover:");
    const index = lista.indexOf(item);
    if (index !== -1) {
        lista.splice(index, 1);
        console.log(`Item "${item}" removido da lista.`);
    } else {
        console.log(`Item "${item}" não encontrado na lista.`);
    }
}

function pesquisarItem(lista) {
    const item = prompt("Digite o nome do item para pesquisar:");
    if (lista.includes(item)) {
        console.log(`Item "${item}" encontrado na lista.`);
    } else {
        console.log(`Item "${item}" não encontrado na lista.`);
    }
}

function ordenarLista(lista) {
    lista.sort();
    console.log("Lista ordenada.");
}

function exibirLista(lista) {
    if (lista.length === 0) {
        console.log("A lista está vazia.");
    } else {
        console.log("Itens na lista:");
        lista.forEach((item, index) => {
            console.log(`${index + 1}. ${item}`);
        });
    }
}

function limparLista(lista) {
    lista.length = 0;
    console.log("Lista limpa.");
}

function main() {
    const listaDeCompras = [];
    let opcao;

    do {
        exibirMenu();
        opcao = prompt("Escolha uma opção (1-7):");

        switch (opcao) {
            case '1':
                adicionarItem(listaDeCompras);
                break;
            case '2':
                removerItem(listaDeCompras);
                break;
            case '3':
                pesquisarItem(listaDeCompras);
                break;
            case '4':
                ordenarLista(listaDeCompras);
                break;
            case '5':
                exibirLista(listaDeCompras);
                break;
            case '6':
                limparLista(listaDeCompras);
                break;
            case '7':
                console.log("Encerrando o programa.");
                break;
            default:
                console.log("Opção inválida. Tente novamente.");
                break;
        }
    } while (opcao !== '7');
}

main();
