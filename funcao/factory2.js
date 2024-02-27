function criarProduto(nome, preco) {
    return {
        nome,
        preco,
        desconto: 0.1
        }
}

console.log(criarProduto('produto1', 123123.123))
console.log(criarProduto('p2221', 12333))
console.log(criarProduto('pr231uto1', 12312223))
