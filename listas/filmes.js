class GerenciadorDeFilmes {
    constructor() {
        this.filmesParaAssistir = [];
        this.filmesAssistidos = [];
    }
    
    adicionarFilme(titulo, ano) {
        this.filmesParaAssistir.push({ titulo, ano });
        console.log(`Filme "${titulo}" adicionado à lista de filmes para assistir.`);
    }

    ordenarFilmes(criterio) {
        if (criterio === 'titulo') {
            this.filmesParaAssistir.sort((a, b) => a.titulo.localeCompare(b.titulo));
        } else if (criterio === 'ano') {
            this.filmesParaAssistir.sort((a, b) => a.ano - b.ano);
        }
        console.log(`Lista de filmes ordenada por ${criterio}.`);
        this.exibirFilmesParaAssistir(); 
    }

    pesquisarFilme(titulo) {
        const encontrado = this.filmesParaAssistir.some(filme => filme.titulo.toLowerCase() === titulo.toLowerCase());
        if (encontrado) {
            console.log(`O filme "${titulo}" já está na lista de filmes para assistir.`);
        } else {
            console.log(`O filme "${titulo}" não está na lista de filmes para assistir.`);
        }
    }

    exibirFilmesParaAssistir() {
        console.log("\nLista de Filmes para Assistir:");
        this.filmesParaAssistir.forEach((filme, index) => {
            console.log(`${index + 1}. ${filme.titulo} (${filme.ano})`);
        });
    }

    exibirFilmesAssistidos() {
        console.log("\nLista de Filmes Assistidos:");
        this.filmesAssistidos.forEach((filme, index) => {
            console.log(`${index + 1}. ${filme.titulo} (${filme.ano})`);
        });
    }

    exibirListas() {
        this.exibirFilmesParaAssistir();
        this.exibirFilmesAssistidos();
    }

    marcarComoAssistido() {
        if (this.filmesParaAssistir.length === 0) {
            console.log("Não há filmes na lista para assistir.");
            return;
        }

        this.exibirFilmesParaAssistir();
        const escolha = parseInt(prompt("Digite o número do filme que deseja marcar como assistido:")) - 1;

        if (escolha >= 0 && escolha < this.filmesParaAssistir.length) {
            const filme = this.filmesParaAssistir.splice(escolha, 1)[0];
            this.filmesAssistidos.push(filme);
            console.log(`Filme "${filme.titulo}" marcado como assistido.`);
        } else {
            console.log("Escolha inválida. Tente novamente.");
        }
    }

    removerFilme(titulo) {
        const index = this.filmesParaAssistir.findIndex(filme => filme.titulo.toLowerCase() === titulo.toLowerCase());
        if (index !== -1) {
            const filmeRemovido = this.filmesParaAssistir.splice(index, 1);
            console.log(`Filme "${filmeRemovido[0].titulo}" removido da lista de filmes para assistir.`);
        } else {
            console.log(`O filme "${titulo}" não foi encontrado na lista de filmes para assistir.`);
        }
    }
}

function menu() {
    const gerenciador = new GerenciadorDeFilmes();

    let opcao;
    do {
        console.log("\nMenu:");
        console.log("1. Adicionar filme");
        console.log("2. Ordenar a lista");
        console.log("3. Pesquisar filme");
        console.log("4. Exibir listas");
        console.log("5. Marcar filme como assistido");
        console.log("6. Remover filme");
        console.log("7. Encerrar programa");

        opcao = parseInt(prompt("Escolha uma opção:"));

        switch (opcao) {
            case 1:
                const titulo = prompt("Digite o título do filme:");
                const ano = parseInt(prompt("Digite o ano de lançamento do filme:"));
                gerenciador.adicionarFilme(titulo, ano);
                break;
            case 2:
                const criterio = prompt("Escolha o critério de ordenação ('titulo' ou 'ano'):");
                gerenciador.ordenarFilmes(criterio);
                break;
            case 3:
                const tituloPesquisa = prompt("Digite o título do filme que deseja pesquisar:");
                gerenciador.pesquisarFilme(tituloPesquisa);
                break;
            case 4:
                gerenciador.exibirListas();
                break;
            case 5:
                gerenciador.marcarComoAssistido();
                break;
            case 6:
                const tituloRemover = prompt("Digite o título do filme que deseja remover:");
                gerenciador.removerFilme(tituloRemover);
                break;
            case 7:
                console.log("Programa encerrado.");
                break;
            default:
                console.log("Opção inválida. Tente novamente.");
        }
    } while (opcao !== 7);
}

menu();
