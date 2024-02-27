const fs = require('fs')

const produto = {
    nome: 'Gabriel',
    idade: 28,
    altura: 182
}


fs.writeFile(__dirname + '/arquivoGerado.json', JSON.stringify(produto), err => {
    console.log(err || 'arquivo gerado!')
})