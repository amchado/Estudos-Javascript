//funçao sem retorno

function imprimirSoma(a, b){
    console.log(a+b)

}

imprimirSoma(2,5)
imprimirSoma(2)
imprimirSoma(2,10,4,5,3,5)
imprimirSoma()

//funçao com retorno
function soma( a, b = 1){
    return a + b
}

console.log(soma(2,5))
console.log(soma(5))
console.log(soma())