// função em JS é fist-class Object (citizens)
// Higher-order function

// criar de forma literal

// toda função retorna undefinid se não tiver return
function fun1() {}

// armazenar função em variável
const fun2 = function ()  {}      // atribuindo função anonima a uma constante

// armazenar função em um array
const array = [function (a,b) { return a + b }, fun1, fun2]
console.log(` soma do indice 0 do array é: ${array[0](2, 3)}`)


//armazenar em um atributo de objeto
const obj = {}
obj.falar = function () { return 'Opa' } 
console.log(obj.falar())

// passar função com param
function run(fun) {
    fun()
}
run(function () { console.log('Executando')})


// uma função pode conter uma outra função
function soma(a, b) {
    return function(c) {
        console.log(a + b + c)
    }
}
// somou a + b e c
soma(2,3)(1)
//
const cincoMais = soma(2,3)
cincoMais(4)