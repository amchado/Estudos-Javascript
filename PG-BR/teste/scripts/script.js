// carne - 400 gr por pessoa + de 6 hrs - 650
// Cerveja - 1200 ml por Pessoa + 6 horas - 2000ml
//Refrigerante/agua - 1000 ml por pessoa + 6 horas 1500ml

//Crianças valem por 0,5

let inputAdultos = document.getElementById("adultos")
let inputCrianca = document.getElementById("crianca")
let inputDuracao = document.getElementById("duracao")
let resultado = document.getElementById("resultado")

function calcular(){

    let adultos = inputAdultos.value
    let crianca = inputCrianca.value
    let duracao = inputDuracao.value

    let qtdCarne = carnePP(duracao) * adultos +(carnePP(duracao)* crianca /2) 

    let qtdCerveja = cervejaPP(duracao) * adultos

    let qtdBebida = bebidaPP(duracao) * adultos + (bebidaPP(duracao) * crianca /2)
    
    resultado.innerHTML = `<p>${qtdCarne/1000} Kg de carne </p>`
    resultado.innerHTML += `<p>${Math.ceil(qtdCerveja/355)} Latas de cerveja </p>`
    resultado.innerHTML += `<p>${Math.ceil(qtdBebida/2000)} Pat's de bebidas </p>`

    console.log(qtdCarne)
    console.log(qtdCerveja)
    console.log(qtdBebida)

}

function carnePP(duracao){
    if(duracao >= 6){
        return 650
    }else{
        return 400
    }
}

function cervejaPP(duracao){
    if(duracao >= 6){
        return 2000
    }else{
        return 1200
    }
}

function bebidaPP(duracao){
    if(duracao >= 6){
        return 1500
    }else{
        return 1000
    }
}