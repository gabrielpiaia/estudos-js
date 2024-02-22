const produto = Object.preventExtensions({
    nome: 'qualquer', preco: 1.00, tag: 'promocao'
})

console.log('extensível', Object.isExtensible(produto))

produto.nome = 'borracha'
produto.descricao = 'teste 123'
delete produto.tag
console.log(produto)




const pessoa = { nome: 'Gabriel', idade: 28}
Object.seal(pessoa)  //só permite mecher nos atributos que ja existem
console.log('Selado', Object.isSealed(pessoa))


pessoa.sobrenome = 'teste teste'
delete pessoa.nome

pessoa.idade = 222


console.log(pessoa)