

let nomes = ['Davi', 'Arthur', 'Vitoria']
let notas1 = [4.0,7.0,10]
let notas2 = [7.5,8.5,2]

function media(n1, n2){

    return (n1 + n2)/ 2;

}

function passou (media){
    var resultado = " Reprovado"
    
    if(media >= 6){
        resultado =" Aprovado, parabéns"
    }

    return resultado
}

for(let index in nomes ){

    let notaA = notas1[index]
    let notaB = notas2[index]
    let m = media(notaA , notaB)

    console.log(nomes[index] + "-" + notaA + "-" + notaB + " Sua média foi:" + m + passou(m))
}