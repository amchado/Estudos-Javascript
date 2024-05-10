function criandoJogador(posicao,altura,MQ,time){
    return{
        posicao,
        altura,
        MQ,
        time
    }
}

const jogador1 = criandoJogador('Atacante',1.80, 'Finalização', 'Fluminense')

console.log(jogador1)