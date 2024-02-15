const imprimirResultado = function (nota) {
    switch (Math.floor(nota)) {
        case 10:
        case 9:
            console.log('Excelente')
           // break    //// ao entrar em um case vai executar todos até finalzar ou checar no break
        case 8: case 7:
            console.log('Aprovado')
            break
        default:
            console.log('Nota inválida')
    }

}


imprimirResultado(7)