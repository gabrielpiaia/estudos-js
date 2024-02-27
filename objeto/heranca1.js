const ford = {
    modelo: 'focus',
    velMax: 210
}

const volvo = {
    modelo: 'xc60',
    velMax: 290
}

// objetos padrão aponta para [[prototype]]
//__proto__ acessa o prototipo (objeto pai) vai procurar o atributo dentro do objeto pai (exemplo é um "carro")
console.log(ford.__proto__)
console.log(ford.__proto__ === Object.prototype)
console.log(volvo.__proto__ === Object.prototype)

//são iguais pq apontam p mesmo lugar

// [[prototype]] = null
console.log(Object.prototype.__proto__)


