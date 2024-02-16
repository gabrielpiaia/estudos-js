function area(largura, altura) {
    const area = largura * altura
    if(area > 20) {
        console.log(`Valor acima do permitido: ${area}ms`)
    } else{
        return area
    }    
}

console.log(area(2, 2))
console.log(area(2))
console.log(area())
console.log((2, 5, 23, 65))

console.log(area(5, 5))