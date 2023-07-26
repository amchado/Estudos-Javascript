function area(largura, altura){
    const area = largura * altura
    if (area > 20 ){
        console.log(`Valor acima do permitido ${area}n2.`)
    } else {
        return area
    }
}

console.log(area(10,2))
console.log(area(2))
console.log(area())
console.log(area(2,4,10,20))
console.log(area(2,12))