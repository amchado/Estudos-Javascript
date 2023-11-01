// let stringPontuacoes = [40, 30, 20, 44, 0, 10, 15, 50, 23]

// function avaliaPontuacao(stringPontuacoes){
//     let pontuacoes = stringPontuacoes.split(", ")
//     let quebraDeRecorde = 0
//     let piorJogo = 1
//     let maiorPontuacao = pontuacoes[0]
//     let menorPontuacao = pontuacoes[0]

//     for (let i = 1; i < pontuacao.length; i++){
//         if(parseInt(pontuacoes[i]) > parseInt(maiorPontuacao) ){
//             maiorpontuacao = pontuacoes[i]
//             quebraDeRecorde++
//         }else if (parseInt(pontuacoes[i]) < parseInt(menorPontuacao)){
//             menorPontuacao = pontuacao[i]
//             piorJogo= i+1
//         }
//     }
//     return [quebraDeRecorde, piorJogo]
// }

// console.log(avaliaPontuacao(stringPontuacoes))

let stringPontuacoes = "30, 40, 20, 4, 51, 25, 42, 38, 56, 0"
 
 
function avaliaPontuacoes (stringPontuacoes) {
    let pontuacoes = stringPontuacoes.split(", ")
    let qtdQuebraDeRecords = 0
    let piorJogo = 1
    let maiorPontuacao = pontuacoes[0]
    let menorPontuacao = pontuacoes[0]

    for (let i = 1; i < pontuacoes.length; i++) {
        if(parseInt(pontuacoes[i]) > parseInt(maiorPontuacao)) {
            maiorPontuacao = pontuacoes[i]
            qtdQuebraDeRecords++
        }else if (parseInt(pontuacoes[i]) < parseInt(menorPontuacao)) {
            menorPontuacao = pontuacoes[i]
            piorJogo = i+1;
        }
    }
    return [qtdQuebraDeRecords, piorJogo]
}
 
console.log(avaliaPontuacoes(stringPontuacoes))