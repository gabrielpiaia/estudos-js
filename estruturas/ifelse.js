const imprimirResultado = function(nota) {
    if(nota >= 7) {
        console.log('Aprovado!')
    } else {
        console.log('Reprovado!')
    }
}

imprimirResultado(10)
imprimirResultado(4)

//atenção
imprimirResultado('String entra no else (diferente do maior que 7)')
//vai passar qualquer tipo de dado e entrara no else

