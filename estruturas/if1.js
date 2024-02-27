function soNotaAlta(nota){
    if(nota >= 7) {
        console.log('aprovado com ' + nota)
    }
}

soNotaAlta(8.1)
soNotaAlta(6.8)


// saber se determinada string está vazia ou não:
// se estver com valor executa
function seForVerdade(valor){
    if(valor)[
        console.log('É verdade que...' + valor)
    ]
}

seForVerdade()
seForVerdade(null)
seForVerdade(undefined)
seForVerdade(NaN)
seForVerdade('')
seForVerdade(0)
seForVerdade(-1)
seForVerdade(' ')
seForVerdade('?')
seForVerdade([])
seForVerdade(1, 2)
seForVerdade({})
