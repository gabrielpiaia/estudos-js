//valor padrão do es2015  USAR COMO PADRÃO

function soma3(a = 1, b=1, c=1) {
    return a + b + c   
}

console.log(soma3(),soma3(3),soma3(2,3,5))



// estrategias para gerar valor padrão
// pode ter efeito colateral com valor 0
function soma1(a, b, c) {
    a = a || 1  //receber 1 caso não informar nada
    b = b || 1
    c = c || 1
    return a + b + c
}


// quando tem zero retorna FALSO, zero é FALSO e entra no valor padrão 1
console.log(soma1(), soma1(3), soma1(1, 2, 3), soma1(0, 1, 0))


// a !== undefined    =>  a diferente de undefined

function soma2(a, b, c) {
    a = a !== undefined ? a : 1
    b = 1 in arguments ? b : 1
    c = isNaN(c) ? 1 : c    // verifica se é um numero, se não for recebe 1 se não recebe o valor de C
    return a + b + c
}

console.log(soma2(2))
console.log(soma2(1, 1 , 1))
console.log(soma2(0, 0 , 0))
console.log(soma2(1, 1 , 1))

