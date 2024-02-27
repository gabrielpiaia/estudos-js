function getPreco(imposto = 0, moeda = 'R$'){
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const produto = {
    nome: 'Notebook',
    preco: 4856,
    desc: 0.15,
    getPreco
}

const produto2 = {
    nome: 'Notssebook',
    preco: 99999,
    desc: 0.15,
    getPreco
}


globalThis.preco = 20
globalThis.desc = 0.1
console.log(getPreco())


console.log(produto2.getPreco())


const carro = { preco: 49999, desc: 0.20}

console.log(getPreco.call(carro))


console.log(getPreco.call(carro, 0.17, 'r'))


