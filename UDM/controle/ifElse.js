const imprimirResultado = function(nota){
    if(nota >= 7){
        console.log('Parabéns, aprovado!')
    } else {
        console.log('Reprovado!')
    }
}

imprimirResultado(8)
imprimirResultado(6.9)