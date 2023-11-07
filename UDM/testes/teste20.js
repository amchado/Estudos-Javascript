function sacarDinheiro(valorDeSaque){
    let contador100 = 0
    let contador50 = 0
    let contador20 = 0
    let contador10 = 0
    let contador5 = 0
    let contador1 = 0
    let valorNota = calcularValorNota(valorDeSaque)
    while(valorDeSaque >= valorNota){
        switch(valorNota){
            case 100: valorDeSaque -= 100
            contador100++
            break
            case 50: 
            valorDeSaque -= 50
            contador50++
            break
            case 20: valorDeSaque -= 20
            contador20++
            break
            case 10: 
            valorDeSaque -= 10
            contador10++
            break
            case 5:
            valorDeSaque -= 5
            contador5++
            break
            case 1:
            valorDeSaque -= 1
            contador1++
            break
            
        }
        valorNota = calcularValorNota(valorDeSaque)
    }
    return elaborarResultado(contador100, contador50, contador20, contador10, contador5, contador1)
}

function calcularValorNota(valorDeSaque){
    if(valorDeSaque >= 100){
        return 100
    }else if(valorDeSaque >=50){
        return 50
    }else if(valorDeSaque >=20){
        return 20
    }else if(valorDeSaque >= 10){
        return 10
    }else if(valorDeSaque >= 5){
        return 5
    }else if(valorDeSaque >= 1){
        return 1
    }
}

function elaborarResultado(contador100,contador50, contador20, contador10, contador5, contador1){
    let resultado = ''
    if(contador100 > 0){
        resultado += `${contador100} nota(s) de R$ 100.`
    }
    
    if (contador50 > 0) {
        resultado += `${contador50} nota(s) de R$ 50. `
    }

    if (contador10 > 0) {
        resultado += `${contador10} nota(s) de R$ 10. `
    }

    if (contador5 > 0) {
        resultado += `${contador5} nota(s) de R$ 5. `
    }

    if (contador1 > 0) {
        resultado += `${contador1} nota(s) de R$ 1. `
    }
    return resultado
}

console.log(sacarDinheiro(1253));