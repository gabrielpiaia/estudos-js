let isAtivo = false

console.log(isAtivo)


isAtivo = true

console.log(isAtivo)


isAtivo = 1
console.log(isAtivo)  //exibe em valor numerico (1)

console.log(!!isAtivo)  //exibe em boleano
console.log(!isAtivo)  //exibe em boleano

isAtivo = 0

console.log(!!isAtivo)  //exibe em boleano


// situações com valor true

console.log('os verdadeiros ssão...')
console.log(!!3)
console.log(!!-1)
console.log(!!'teste')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))

// stiauções com valor false
console.log('os falsos ssão...')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!undefined)
console.log(!!(isAtivo = false))


// stiauções condições
console.log('resultados com condição...')
console.log(!!('' || null || 0 || ' '))



let nome = 'teste'

console.log (nome || 'Desconhecido')

