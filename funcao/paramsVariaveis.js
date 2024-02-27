// acessar elementos dentro de uma função
// arguments = argumentos passados localizados por um array

function soma() {
    let soma = 0
    for (i in arguments)  {  //toda função tem esse array disponível para fazer operações
        soma += arguments[i]// aray interno de uma função
    }
    return soma
}

console.log(soma())
console.log(soma(1))
console.log(soma(1, 1, 1))
console.log(soma(1, 1, 1, 'teste'))
console.log(soma(1, '1', 'asdasd ', 'teste'))