/*
1. abstração
2. encapsulamento
3. herança
5. poliformismo
*/

const produto = new Object  //new = função construtora
produto.nome = 'cadeira'  // cria o produto
produto['marca do produto'] = 'Samsung'
produto.preco = 220


console.log(produto)


delete produto.preco
delete produto['marca do produto']

console.log(produto)


const carro = {
    modelo: 'focus',
    valor: 36000,
    proprietario:{
        Nome: 'Gabriel F',
        idade: 28,
        endereco: {
            rua: 'Rua Nome',
            numero: 'rua Numero'    
        }
    },
    condutores: [{
        nome: 'Pedro',
        idade: 19
    }, {
        nome: 'joao',
        idade: 77
    }, {
        nome: 'aaaa',
        idade: 99
    }],

}


carro.proprietario.endereco.numero = 99999
carro['proprietario']['endereco']['rua']

console.log(carro)

//console.log(carro.condutores)