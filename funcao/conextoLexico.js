const valor = "global"

function minhaFuncao() {
    console.log(valor)
}


function exec() {
    const valor = "local"
    minhaFuncao()
}

// no conexto a função vai achar o valor global
// a função carrega consigo a informação do contexto no qual foi declarada
exec()