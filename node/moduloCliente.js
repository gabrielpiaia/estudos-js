// exemplo usando modulos 

const moduloA = require('./moduloA')  //importando modulo do mesmo diretorio
const moduloB = require('./moduloB')


console.log(moduloA.ola)
console.log(moduloA.bemVindo)
console.log(moduloA.algumaCoisa)


console.log(moduloB.bomDia)
console.log(moduloB.boanoite())

console.log(moduloB)