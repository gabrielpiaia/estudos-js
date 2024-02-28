const tecnologias = new Map()
tecnologias.set('react', {framework: false})
tecnologias.set('angular', {frawork: true})

console.log(tecnologias.react)

console.log(tecnologias.get('react').framework)



const chavesVariadas = new Map([
    [function () { }, 'Função'],
    [{}, 'Objeto'],
    [123, 'Numero']
])

chavesVariadas.forEach((vl, ch) => {
    console.log(ch, vl)
})


console.log(chavesVariadas.has(123))   //verifica se esta no map

chavesVariadas.delete(123)

console.log(chavesVariadas.has(123))

console.log(chavesVariadas.size)