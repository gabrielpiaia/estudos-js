// representação assincrona

//promise tem dois retornos: resolve ou reject
function falarDepoisDe(segundos, frase) {
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            reject(frase)
        }, segundos * 1000)   //multiplicar
    })
}

falarDepoisDe(3, 'Que legal!')
    .then(frase => frase.concat("?!?"))
    .then(outraFrase => console.log(outraFrase))




//promise tem dois retornos: resolve ou reject
function falarDepoisDe(segundos, frase) {
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            resolve(frase)
        }, segundos * 1000)   //multiplicar
    })
}

falarDepoisDe(3, 'Que legal!')
    .then(frase => frase.concat("?!?"))
    .then(outraFrase => console.log(outraFrase))
    .catch(e => console.log(e))
