// pessoa -> aponta para um endereço de memoria 12 ->  {...}

const pessoa = { nome: 'teste'}
pessoa.nome = 'teste2'

console.log(pessoa)
 
//pessoa -> 456 -> {...}  <_+
pessoa2 = { nomne: 'teste3 '}

// EXEMPLO COM FREEZE

Object.freeze(pessoa)  //dps dessa linha o objeto é congelado

pessoa.nome = 'aaaa'
console.log(pessoa)



const pessoaConstante = Object.freeze({ nome: "asdf"})
console.log(pessoaConstante)