function triangolo(lado1,lado2,lado3){
    if (lado1 == lado2 && lado2 ==lado2){
        return "Equilatero"
    } else if (lado1 == lado2 || lado2 ==lado3 || lado1 == lado3){
        return "Isósceles"
    } else {
        return "Escaleno"
    }
} 

console.log(triangolo(2,3,4))
console.log(triangolo(2,2,2))
console.log(triangolo(2,4,4))