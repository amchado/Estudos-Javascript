//coleçao dinamica de pares chaves/valor

const produto = new Object
produto.nome = 'Cadeira'
produto['marca do produto'] = 'Pichau'
produto.preco = 220

console.log(produto)

delete produto.preco
delete produto['marca do produto']
console.log(produto)

const carro = { 
    modelo:'A4',
    valor: 89000,
    proprietario: {
        nome:'Junior',
        idade:52,
        endereco:{
            logradouro:'Rua pipi',
            numero:54
        }
    },
    condutores:[{
        nome:'Vitoria',
        idade:24
    },{
        nome:'Fabio',
        idade:27
    }],
    calcularValorSeguro: function(){
        //....
    }
}

carro.proprietario.endereco.numero =102
carro['proprietario']['endereco']['logradouro'] = 'Av paschall'
console.log(carro)

