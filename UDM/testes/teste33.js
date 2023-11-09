let vetorInteiro = [1, 2, 3, 4]
let vetorString = ["Arthur", " Vitoria", "Davi", "JK"]
let vetorDouble = [1.1, 2.2, 3.3, 4.4]

function concatenar(...args){
    resultado = []
    for(let i = 0; i < arguments.length; i++){
        resultado = resultado.concat(arguments[i])
    }
    return resultado;
}

console.log(concatenar(vetorInteiro, vetorDouble))
console.log(concatenar(vetorDouble, vetorString))
console.log(concatenar(vetorString, vetorInteiro, vetorDouble))

