
const http = require('http')
const { get } = require('lodash')

const getTurma = letra => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
    return new Promise((resolve,reject) => {
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

//recurso do ES8
// Simplificando o uso de promisses

let obterAlunos = async () => {
    const tA = await getTurma('A')
    const tB = await getTurma('B')
    const tC = await getTurma('C')
    return [].concat(tA, tB, tC)
}

obterAlunos()
    .then(alunos => alunos.map(a => a.nome))
    .then(nomes => console.log(nomes))