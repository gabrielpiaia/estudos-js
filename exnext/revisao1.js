// let e const
{
    var a = 2
    let b = 3
    console.log(b)

}

console.log(a)


// Template String

const produto = 'Ipad'
console.log(`${produto} funciona o enter

aqui`)

// Destructuring

const [l, e, ... tras] = "teste"
console.log( l, e, tras)

const [x, , y] = [1, 2, 3]
console.log(x , y)


const { idade: i, nome} = { nome: 'Gabriel', idade: 27 }

console.log(i, nome)