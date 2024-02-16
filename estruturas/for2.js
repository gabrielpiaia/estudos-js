const notas = [6.7, 4.8, 9.8, 6.5, 7,2]

for (let i in notas) {
    console.log(i, notas[i])
}


const pessoa = {
    nome: 'Gabriel',
    Sobrenome: 'Piaia',
    Idade: '28'
}


for(let atributo in pessoa) {
console.log(`${atributo} = ${pessoa[atributo]}`)

}

//////////////////////////////////////////////////////

const pessoa2 = {
    nome: 'Gabriel',
    sobrenome: 'Piaia',
    idade: '28'
}

for(let atributo in pessoa2) {
    console.log(`${atributo} = ${pessoa2[atributo]}`);
}