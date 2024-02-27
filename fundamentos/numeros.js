const peso1 = 1.1
const peso2 = Number('2.3')

console.log(peso1, peso2)

console.log(Number.isInteger(peso1))
// verifica se é inteiro ou não retornando true ou false
// função number
console.log(Number.isInteger(peso2))


const avaliacao1 = 9.8515
const avaliacao2 = 6.5486

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)

console.log(media)  //calculando a media com todas casas decimais


console.log(media.toFixed(3))  // define o número de casas depois do ponto

console.log(media.toString(2))   //converter para valor binario


// logar tipo do dado number (variavel)
console.log(typeof media)

//tipo de variavel number (media)

// logar tipo do dado Number (função)
console.log(typeof Number)




