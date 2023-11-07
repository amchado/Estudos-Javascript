function compraDeCarro(carro){
    switch(carro){
        case 'hatch': console.log("Compra efetuado com Sucesso")
        break
        case 'sedans': console.log("Tem certeza que não prefere este modelo?")
        break
        case 'motocicletas': console.log("tem certeza que não prefere este modelo?")
        break
        case 'caminhonetes': console.log("tem certeza que não prefere este modelo?")
        break
        default: console.log("Não trabalhamos com este tipo de automóvel aqui")
    }
}

compraDeCarro('hatch')
compraDeCarro('sedans')
compraDeCarro('motocicletas')
compraDeCarro('caminhonetes')
compraDeCarro('jetsky')