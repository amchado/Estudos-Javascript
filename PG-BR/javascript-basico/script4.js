let nota1 = 3
let nota2 = 7

let media = (nota1 + nota2) /2

let conceito = ""

if(media >= 8){
    conceito = "Otimo"
}else if(media >=6.5){
    conceito = "Bom"
} else {
    conceito = "Regular"
}

console.log(media)
console.log(conceito)

switch(conceito){
    case "Otimo":
        console.log(`Parabéns, você foi um otimo aluno`)
    break

    case "Bom":
        console.log(`Parabéns, você foi um bom aluno`)
    break

    case "Regular":
        console.log(`Você foi um aluno regular, pode melhorar`)
    break

    default:
        console.log(`Houve algum erro`)
}