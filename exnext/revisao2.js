// Arrow Function

const soma = (a, b) => a + b  //quando naõ tem comrpo o return é chamado

console.log(soma(2, 3))


// Arrow Function (this)

const lexico1 = () => console.log(this === exports)
const lexico2