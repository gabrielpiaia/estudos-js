// operador   rest (juntar)  /  spread (espalhar)
// usar rest com parametro de função

// usr spread com objeto

const funcionario = { nome: 'Gabriel', salario: 123456}
const clone = { ativo: true, ...funcionario } 

console.log(clone)


//usar spread com array
const grupoA = [ 'Gabriel', 'Pedro', 'Joao']
const grupoFinal = ['maria', ...grupoA, 'faraela']

console.log(grupoFinal)