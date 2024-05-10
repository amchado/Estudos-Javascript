// Nota escolar
//Obter media de um array

// 0-59 = F
//60-69 = D
//70-79 = C
//80-89 = B
//90-100 = A

const array = [70,45,95]


function mediaescolar(notas){
    
    let soma = 0

    for(let nota of notas){
        soma += nota
    }
    
    const media = soma /(notas.length)

    if(media <= 59){
        return " Sua nota é F"
    }else if(media <= 69){
        return "Sua nota é D"
    }else if(media <= 79){
        return "Sua nota é C"
    }else if(media <= 89){
        return "Sua nota é B"
    }else{
        return "Sua nota é A. Parabéns"
    }

    
}

console.log(mediaescolar(array))

