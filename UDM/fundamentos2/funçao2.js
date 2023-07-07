//armazenando uma funcao em uma variavel 
const imprimirSoma = function (a,b) {
    console.log(a + b)
}

imprimirSoma(2,6)

//armazenando uma funçao arrow em uma variavel
const soma = (a,b) =>{
    return a + b
}

console.log(soma(4,6))

//retorno implicito
const subtracao = (a,b) => a - b

console.log(subtracao(1,3))