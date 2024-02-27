function Carro(velocidadeMaxima = 200, delta = 5) {
    // atributo privado
    let velocidadeAtual = 0

    //metodo publico
    this.acelerar = function () {
        if (velocidadeAtual + delta <= velocidadeMaxima) {
            velocidadeAtual += delta    // observar += e =+    soma na variavel
        } else {
            velocidadeAtual = velocidadeMaxima
        }
    }

//metodo publico

    this.getVelocidadeAtual = function () {
        return velocidadeAtual
    }
}


const uno = new Carro // esta usando os valores padrões
uno.acelerar()
uno.acelerar()

console.log(uno.getVelocidadeAtual())

const ferrari = new Carro(300, 15)  // esta adicionando valores 

ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()

console.log(ferrari.getVelocidadeAtual())



console.log(typeof Carro)
console.log(typeof ferrari)