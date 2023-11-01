function jurosSimples(capital, juros, tempo){
    return capital + capital * juros * tempo
}

function jurosComposto(capital,juros,tempo){
    return capital * (1+juros) ** tempo
}

console.log(jurosSimples(100, 10/100, 2))

console.log(jurosComposto(100, 10/100,2))