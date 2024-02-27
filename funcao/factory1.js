const prod1 = {
    nome: 'nome1',
    preço: 54
}

const prod2 = {
    nome: 'nome2',
    preço: 321
}

// factory simples:

function criarProduto() {
    return {
        nome: 'prod1',
        preco: '123'
    }
}

console.log(criarProduto())