// usando a notação literal
const obj1 = {}
console.log(obj1)


// object em js
console.log(typeof Object, typeof new Object)
const obj2 = new Object
console.log(obj2)

// Funções contrsutoras
function Produto(nome, preco, desc) {
    this.nome = nome
    this.getPrecoComDesconto = () => {
        return preco * (1 - desc)
    }
}

const p1 = new Produto('caneta', 7.99, 0.15)
const p2 = new Produto('Notebook', 1000, 0.10)

console.log(p1.getPrecoComDesconto())
console.log(p2.getPrecoComDesconto())


// funcão factory  função q fabrica um obj

function criarFuncionario(nome, salario, faltas) {
    return {
        nome,
        salario,
        faltas,
        getSalario() {
            return (salario / 30) * (30 - faltas)
        }
    }
}

const f1 = criarFuncionario('gabriel', 9000, 4)
const f2 = criarFuncionario('Joao', '1000', 20)

console.log(f1.getSalario(), f2.getSalario())


// Object.create

const filha = Object.create(null)
filha.nome = 'teste'
console.log(filha)


// Função que retorna objeto

const fromJSON = JSON.parse('{"info": "teste de JSON"}')
console.log(fromJSON.info)