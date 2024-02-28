// não aeita repetição/não indexada

const times = new Set()
times.add('Gramio')
times.add('São Paulo').add('Palmeiras')
times.add('Flamengo')
times.add('Vasco')


console.log(times)
console.log(times.size)
console.log(times.has('vasco'))
console.log(times.has('Vasco'))
times.delete('Flamengo')
console.log(times.has('Flamengo'))


const nomes = ['gab', 'aaa', 'sssss', 'aaa']