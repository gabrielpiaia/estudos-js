// http://files.cod3r.com.br/curso-js/turmaA.json
// com primisse


const http = require('http')

const getTurma = letra => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
    return new Promise((resolve,reject => {
        http.get(url, res => {
            let resultado = ''
    
            res.on('data', dados => {  //interceptar evento de resposta
                resultado += dados    //concatena dados que chegarem na variavel resultado
            })
    
            res.on('end', () => { //disparando evento END
                try {
                    resolve(JSON.parse(resultado))
                } catch(e) {
                    reject(e)
                }
            })  
        })
    })
}

//exemplo pegando somente o nome do id 1
//let nomes = []
//getTurma('A', alunos => {
//    console.log(alunos[0].nome)
//})




// exemplo pegando somente o nome do id 1
let nomes = []
getTurma('A').then(alunos => {
    nomes = nomes.concat(alunos.map(a => `A: ${a.nome}`))
   
    getTurma('B').then(alunos => {
        nomes = nomes.concat(alunos.map(a => `B: ${a.nome}`))
        console.log(nomes)
    })
})
