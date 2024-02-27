// array é uma function
// new array gera um novo objeto

console.log(typeof Array, typeof new Array, typeof [])

aprovados = ['OI', 'AAA', 'BBB']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3])

aprovados [3] = 'teste123'
console.log(aprovados[3])

aprovados.push('AA3123A')  //adiciona um novo indice no array
console.log(aprovados.length)

aprovados [7] = 'sss'
console.log(aprovados)


aprovados.sort()  //altera o array ordenando 
console.log(aprovados)

delete aprovados[1]
console.log(aprovados[1])



aprovados.splice(1, 1)  //começa a excluir do 1 até o 2