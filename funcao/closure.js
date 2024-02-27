// Closure é o escopo criado quando definimos uma função
// Esse escopo permite acessar variaves externas a função

// contexo lexico

const x = "Global"

function fora() {
    const x = "Local"
    function dentro() {
        return x
    }
    return dentro
}


const minhaFuncao = fora()
console.log(minhaFuncao)

