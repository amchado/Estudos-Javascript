//velocidade maxima 70km

function velocidadeMaxima(velocidade){
    if(velocidade <= 70){
        return "Você esta na velocidade da via"
    }else if(velocidade <= 77){
        return"Cuidado você esta quase ultrapassando o limite da via"
    }else{
        const pontos = ((velocidade - 73) / 5)
        if(pontos <= 11){
            return `Você perdeu ${Math.floor(pontos)} na carteira. Cuidado !`
        }else{
            return 'Você está com a carteira SUSPENSA!'
        }
    } 
    
}

console.log(velocidadeMaxima(129))