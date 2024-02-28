// for of é usado em valores

for (let letra of "G4br1el") {
    //console.log(letra)
}


const assuntosEcma = ['Map', 'Set', 'Promise']

//vai logar na tela os indices  for i
for (let i in assuntosEcma){
    console.log(i)
}

for (let assunto of assuntosEcma) {
    console.log(assunto)  //vai logar somente os assuntos
}

const assuntosMap = new Map([
    ['Map', { abordado: true, nome: 'deu certo'}],
    ['Set', { abordado: true, nome: 'peguei a manha'}],
    ['Promise', {abordado: false}]
])



for (let assunto of assuntosMap) {
 //   console.log(assunto)
}

for (let chave of assuntosMap.keys()) {
//    console.log(chave)
}

for (let valor of assuntosMap.values()) {
  //  console.log(valor)
}

for (let valor3 of assuntosMap.values()) {
   console.log(valor3)
}


for (let [ch, vl] of assuntosMap.entries()) {
    console.log(ch, vl)
}


const s = new Set(['a', 'b', 'c'])
for (let letra of s) {
    console.log(letra)
}