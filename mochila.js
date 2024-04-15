class item {
    nome;
    peso;
    custo;
    
    constructor(nome, peso, custo) {
        this.nome = nome;
        this.peso = peso;
        this.custo = custo;
        this.razao = (custo / peso).toFixed(2);
    }
}

function buscaGulosa(objetos, capacidadeMaxima) {
    itens.sort((a, b) => b.razao - a.razao); // Ordena os objetos por custo/peso em ordem decrescente

    let mochila = [];
    let pesoAtual = 0;
    let custoTotal = 0;

    for (let i = 0; i < itens.length; i++) {
        if (pesoAtual + itens[i].peso <= capacidadeMaxima) {
            mochila.push(objetos[i]);
            pesoAtual += objetos[i].peso;
            custoTotal += objetos[i].valor;
        }

        if (pesoAtual === capacidadeMaxima) {
            break;
        }
    }
    return { mochila, pesoAtual, custoTotal };
}

// TESTES
const itens = [
    new item('Caderno', 10, 50),
    new item('Livro', 11, 120),
    new item('Marmita', 8, 30),
    new item('Notebook', 15, 300),
    new item('Batom', 2, 15),
    new item('Caneta', 3, 5)
];

const capacidadeMaxima = 20;

const resultado = buscaGulosa(itens, capacidadeMaxima);
console.log("Capacidade máxima da mochila:", capacidadeMaxima);
console.log("Itens na mochila:", resultado.mochila);
console.log("Peso total dos itens na mochila:", resultado.pesoAtual);
console.log("Custo total dos itens na mochila:", resultado.valorTotal);
