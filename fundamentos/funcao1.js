console.log(typeof Object)    //objetos em javascript é uma função!!
class Produto {}
console.log(typeof Produto)   //class tbm é uma função

// função executa uma ação, é definida em bloco {}  
// recebe parametros de entrada
// pode receber e/ou retornar algo

function imprimirSoma(a, b) {
    console.log(a + b)
}

imprimirSoma(2,3)

imprimirSoma(2)  // vai somar valor inteiro com undefined resultando NaN not a number


imprimirSoma(2, 2, 3, 5) //ignora valores não utilizados e soma a + b

//função com retorno

function soma(a = 1, b = 0) { //valor padrão para variavel caso insira somente 1

    return a + b
}

console.log(soma())

