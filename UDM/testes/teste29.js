function qtdDeNumerosNoIntervalo(vetor){
    qtdnumeros = 0
    for(let i = 0; i < vetor.length; i++){
        if(vetor[i] >= 10 && vetor[i] <=20){
            qtdnumeros++
        }
        
    }
    return `${qtdnumeros} números no intervalor`
}

vetor = [ 7, 8, 9, 10, 11, 12, 16, 17, 18,13, 19, 20, 21,30,60]

console.log(qtdDeNumerosNoIntervalo(vetor))