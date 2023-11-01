function formatarValorDecimal(valorDecimal){
    ValorEmReais =`R$ ${valorDecimal.toFixed(2).toString().replace(".", ",")}`
    console.log(ValorEmReais)
}

formatarValorDecimal(0.2 + 0.5)