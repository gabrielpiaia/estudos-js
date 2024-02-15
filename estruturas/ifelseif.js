Number.prototype.entre = function (inicio, fim) {
    return this >= inicio && this <= fim
}

const imprimirResultado = function (nota) {
    if (nota.entre(9, 10)) {
        console.log('nota ótima')
    } else if(nota.entre(7, 8.99)) {
        console.log('Nota boa')
    } else if(nota.entre(6, 6.99)) {
        console.log('acima da media')
    } else if(nota.entre(0, 5.99)) {
        console.log('Abaixo da media')
    } else {
        console.log('Nota inválida')
    }

 //   console.log('Fim')

}


imprimirResultado(9)
imprimirResultado(10)
imprimirResultado(4)
imprimirResultado(6)
imprimirResultado(7)
imprimirResultado(-1)
imprimirResultado(11)

