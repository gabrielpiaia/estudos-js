let dobro = function (a){
    return 2 * a
}


dobro = (a) => {
    return 2 * a 
}


dobro = a => 2 * a   // return está implipcito

console.log(dobro(Math.PI))


let ola = function () {
    return 'aaaa'
}
console.log(ola())
ola = () => 'bbb'
console.log(ola())
ola = _ => 'cccc'  // possui param _

console.log(ola())