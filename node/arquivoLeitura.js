const fs = require('fs')


const caminho = __dirname + '/arquivo.json'

//ler arquivo de forma sincrona
// vai esperar ler o arquivo| arquivos grandes não é recomendado

//sincrono
const conteudo = fs.readFileSync(caminho, 'utf-8')
console.log(conteudo)


//assincrono  // quando o arquivo tiver carregado terá retorno assincrono
fs.readFile(caminho, 'utf-8', (err, conteudo) => {
    const config = JSON.parse(conteudo)  
    console.log(`${config.db.host}:${config.db.port}`)
})


const config = require('./arquivo.json')
console.log(config.db)


//  listar arquivos de um diretorio
fs.readdir(__dirname, (err, arquivos) => {
    console.log('conteudo da pasta')
    console.log(arquivos)
})