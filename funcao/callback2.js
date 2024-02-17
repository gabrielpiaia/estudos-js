const notas = [7.5, 6.7, 9.3, 3.2, 9.0, 6.0]

// sem callback

const notasBaixas = []
for (let i in notas) {
    if (notas[i] < 7) {
        notasBaixas.push(notas[i])
    }
}

console.log(notasBaixas)



// com callback
const notasBaixas2 = notas.filter(fuction (nota) {
    return nota < 7
})

console.log(notasBaixas2)