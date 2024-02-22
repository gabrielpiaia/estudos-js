const pilotos = ['gabriel', 'teste1', 'teste2', 'teste3']

pilotos.pop()  // remove o último elemento do array

console.log(pilotos)

pilotos.push('teste4')
console.log(pilotos)


pilotos.shift()  // remove o primeiro elemento da lista
console.log(pilotos)


pilotos.unshift('teste5')  // adiciona no inicio do array
console.log(pilotos)

// splice pode adicionar e remover elementos do array

// adicionar no indice 2 sem remover ninguem:
pilotos.splice(2, 0, '11111', '2222')

console.log(pilotos)

// remover elementos indice 3 remover 1
//pilotos.splice(3, 1) 
console.log(pilotos)


const algunsPilotos1 = pilotos.slice(2)  // novo array gerado a partir do indice 2
console.log algunsPilotos1s

//