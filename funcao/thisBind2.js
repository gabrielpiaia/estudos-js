function Pessoa() {
    this.idade = 0
//executar a cada 1 segundo a função anonima
    const self = this  // usar self para amarrar o this na função
    setInterval(function() {
        self.idade++
        console.log(self.idade)
    }/*.bind(this)*/, 1000)   //quantidade de milisegundos
}

new Pessoa


