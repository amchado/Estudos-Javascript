const prod1 = {}
prod1.nome = 'Zenfone 15'
prod1.preco = 2.534
prod1['Desconto rêlampago '] = '5% no pix'

console.log(prod1)

const prod2 = {
    nome: 'Camisa Tricolor Fluminense',
    valor: 330.0,
    ['Desconto para Socios']: '10% de Desconto para socios torcedores'
}

console.log(prod2)
console.log(typeof prod2)