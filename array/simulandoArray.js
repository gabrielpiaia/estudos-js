const quaseArray = { 0: 'Gabriel', 1: 'Joao', 2: 'teste'}
console.log(quaseArray)

Object.defineProperties(quaseArray, 'toString', {
    value: function() {return Object.values(this)},
    enumerable: false
})

console.log(quaseArray[1    ]) 