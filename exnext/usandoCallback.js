// http://files.cod3r.com.br/curso-js/turmaA.json
// sem promisse


const http = require('http')

const getTurma = (letra, callback) => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
    http.get(url, res => {
        let resultado = ''

        res.on('data', dados => {  //interceptar evento de resposta
            resultado += dados    //concatena dados que chegarem na variavel resultado
        })

        res.on('end', () => { //disparando evento END
            callback(JSON.parse(resultado))
        })  
    })
}

// exemplo pegando somente o nome do id 1
//let nomes = []
//getTurma('A', alunos => {
//    console.log(alunos[0].nome)
//})




// exemplo pegando somente o nome do id 1
let nomes = []
getTurma('A', alunos => {
    nomes = nomes.concat(alunos.map(a => `A: ${a.nome}`))
   
    getTurma('B', alunos => {
        nomes = nomes.concat(alunos.map(a => `B: ${a.nome}`))
        console.log(nomes)
    })
})


getTurma('C', alunos => {
    nomes = nomes.concat(alunos.map(a => `B: ${a.nome}`))
    console.log(nomes)
})