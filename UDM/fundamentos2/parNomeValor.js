// par nome / valor
const saudacao = 'opa' //constexto lexico 1

function teste(){
    const saudacao = 'falaaaa' //constesto lexico 2
    return saudacao
}

//objetos são grupos aninhados de pares nome/valor
const cliente ={
    nome: 'Pedro',
    idade: 15,
    peso:60,
    endereço:{
        logadrouro: ' Rua tenente ',
        numero:321
    }

}
console.log(saudacao)
console.log(teste())
console.log(cliente)