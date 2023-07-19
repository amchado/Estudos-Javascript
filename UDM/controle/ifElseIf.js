Number.prototype.entre = function (inicio, fim,){
    return this >= inicio && this <= fim
}

function imprimirResultado(nota){
    if(nota.entre(9,10)){
        console.log('Parabéns, você teve a nota destaque')
    } else if(nota.entre(7,8.9)){
        console.log('Aprovado')
    } else {
        console.log('Reprovado')
    }
}

imprimirResultado(10)
imprimirResultado(8.5)
imprimirResultado(6.5)