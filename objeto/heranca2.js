// cadeia de prototipos (prototype chain)

Object.prototype.attr0 = 'Z'
const avo = { attr1: 'A'}
const pai = { __proto__: avo, attr2: 'B'}
const filho = { __proto__: pai, attr3: 'C'}


console.log(filho.attr1)
console.log(filho.attr2)
console.log(filho.attr3)



const carro = {
    velAtual: 0,
    velMax: 200,
    acelerarMais(delta) {
        if (this.velAtual + delta <= this.velMax){
            this.velAtual =+ delta
        } else {
            this.velAtual = this.velMax
        }
    },
    status() {
        return `${this.velAtual}Km/h de ${this.velMax}Km/h`
    }
}

const ford = {
    modelo: 'Focus',
    velMax: 217   // shadowing
}


// usar SUPER para usar metodo do prototipo
const volvo =  {
    modelo: 'v40',
    status() {
        return `${this.modelo}: ${super.status()}`
    }
}

// ferrari tem carro como seu prototipo
Object.setPrototypeOf(ford, carro)
Object.setPrototypeOf(volvo, carro)


console.log(ford)
console.log(volvo)

volvo.acelerarMais(100)
console.log(volvo.status())

//herdou velocidade maxima do modelo
ford.acelerarMais(230)
console.log(ford.status())