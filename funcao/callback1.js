const fabricantes = ["Teste1", "gabriel", "opa"]

function imprimir(nome, indice) {
    console.log(`${indice + 1}, ${nome}`)
}


// pra cada elemento dentro do array vai executar
fabricantes.forEach(imprimir)

fabricantes.forEach(function(fabricante) {
    console.log(fabricante)
})

