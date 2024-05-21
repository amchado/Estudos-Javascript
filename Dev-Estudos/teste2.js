const endereco = {
    rua:'Rua Tenente Luiz',
    cidade:'Belford Roxo',
    CEP:'221199-43'
}

function exibirEndereco(endereco){
    
    for(let chaves in endereco){
        console.log(chaves, endereco[chaves])
    }
}

exibirEndereco(endereco)



