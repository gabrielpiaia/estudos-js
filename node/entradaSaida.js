const anonimo = process.argv.indexOf('-a') !== -1

console.log(anonimo)

if(anonimo) {
    process.stdout.write('teste! \n')
    process.exit()        
} else {
    process.stdout.write('informe seu nome: ')
    process.stdin.on('data', data => {
        const nome = data.toString().replace('\n', '')   // replace para tirar o ENTER dos dados

        process.stdout.write(`Fala ${nome}!! \n`)
        process.exit()
    })
}
