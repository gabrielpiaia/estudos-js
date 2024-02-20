const pessoa = {
    nome: "Gabriel",
    idade: 28,
    peso: 80
}

console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))


Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`)
})

Object.defineProperties(pessoa, 'dataNascimento', {
    enumerable: true,
    writable: false,
    value: '01/05/1995'
})

pessoa.dataNascimento = '99/99/9999' 

console.log(pessoa.dataNascimento)

console.log(Object.keys(pessoa))